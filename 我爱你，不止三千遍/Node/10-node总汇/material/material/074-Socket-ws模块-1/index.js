/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const express = require("express")
const app = express()
app.use(express.static("./public"))
//http相应
app.get("/", (req, res) => {
    res.send({ ok: 1 })
})
app.listen(3000)


//webscoket 响应
const WebSocket = require('ws')
const WebSocketServer = WebSocket.WebSocketServer
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        console.log('received: %s', data);
        //转发给其他人，
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data,{binary:false});
            }
        });

    });

    ws.send('欢迎来到聊天室');
});
