/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const JWT = require("../util/JWT")
function start(server){
    const io = require('socket.io')(server);
    io.on('connection', (socket,req) => {
        // console.log("111111",socket.handshake.query.token)
        const payload = JWT.verify(socket.handshake.query.token)
        if(payload){
            socket.user = payload
            //发送 欢迎
            socket.emit(WebSocketType.GroupChat,createMessage(null,"欢迎来到聊天室"))
            //给所有发送用户列表
            sendAll(io)
        }else{
            socket.emit(WebSocketType.Error,createMessage(null,"token过期"))
        }
     
        socket.on(WebSocketType.GroupList,()=>{
            console.log(Array.from(io.sockets.sockets).map(item=>item[1].user))
            // socket.emit(WebSocketType.GroupList)
        })

        socket.on(WebSocketType.GroupChat,(msg)=>{
            console.log(msg)
            //给所有人发
            io.sockets.emit(WebSocketType.GroupChat,createMessage(socket.user,msg.data))

            //除了自己不发，其他人发
            // socket.broadcast.emit(WebSocketType.GroupChat,createMessage(socket.user,msg.data))
        })

        socket.on(WebSocketType.SingleChat,(msgObj)=>{
            Array.from(io.sockets.sockets).forEach(item=>{
                if(item[1].user.username===msgObj.to){
                    item[1].emit(WebSocketType.SingleChat,createMessage(socket.user,msgObj.data))
                }
            })
        }) 

        socket.on("disconnect",()=>{
            sendAll(io)
        })
    });

    
}

const WebSocketType = {
    Error: 0, //错误
    GroupList: 1,//获取列表
    GroupChat: 2, //群聊
    SingleChat: 3 //私聊
}
function createMessage(user, data) {
    return {
        user,
        data
    }
}

function sendAll(io) {
    console.log(Array.from(io.sockets.sockets).map(item=>item[1].user)) 
    io.sockets.emit(WebSocketType.GroupList,createMessage(null,Array.from(io.sockets.sockets).map(item=>item[1].user).filter(item=>item)))
}

module.exports = start