/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const WebSocket = require('ws');
const JWT = require('../util/JWT');
const WebSocketServer = WebSocket.WebSocketServer
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
    const myURL = new URL(req.url, "http://127.0.0.1:3000")
    // console.log(myURL.searchParams.get("token"))
    //校验token
    const payload = JWT.verify(myURL.searchParams.get("token"))
    if (payload) {
        ws.send(createMessage(WebSocketType.GroupChat, null, "欢迎来到聊天室"));
        ws.user = payload
        // console.log(payload)

        //群发
        sendAll()
    } else {
        ws.send(createMessage(WebSocketType.Error, null, "token过期"))
    }
    ws.on('message', function message(data) {
        // console.log('received: %s', data);
        // 转发给其他人，


        const msgObj = JSON.parse(data)

        switch (msgObj.type) {
            case WebSocketType.GroupList:

                ws.send(createMessage(WebSocketType.GroupList, null, JSON.stringify(Array.from(wss.clients).map(item => item.user))))
                break;
            case WebSocketType.GroupChat:
                // console.log(msgObj.data)
                wss.clients.forEach(function each(client) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(createMessage(WebSocketType.GroupChat,ws.user,msgObj.data), { binary: false });
                    }
                });
                break;
            case WebSocketType.SingleChat:
                wss.clients.forEach(function each(client) {
                    if (client.user.username===msgObj.to && client.readyState === WebSocket.OPEN) {
                        client.send(createMessage(WebSocketType.SingleChat,ws.user,msgObj.data), { binary: false });
                    }
                });
                break;
        }
    });

    ws.on("close", () => {
        wss.clients.delete(ws.user)
        // console.log(ws.user)
        sendAll()
    })
});

const WebSocketType = {
    Error: 0, //错误
    GroupList: 1,//获取列表
    GroupChat: 2, //群聊
    SingleChat: 3 //私聊
}
function createMessage(type, user, data) {
    return JSON.stringify({
        type,
        user,
        data
    })
}

function sendAll() {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(createMessage(WebSocketType.GroupList, null, JSON.stringify(Array.from(wss.clients).map(item => item.user))))
        }
    });

}