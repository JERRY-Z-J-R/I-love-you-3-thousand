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
        }else{
            socket.emit(WebSocketType.Error,createMessage(null,"token过期"))
        }
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

function sendAll() {

}

module.exports = start