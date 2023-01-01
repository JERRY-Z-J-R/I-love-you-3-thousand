/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const EventEmitter = require("events")

const event = new EventEmitter()

event.on("play",(data)=>{
    console.log("事件触发了-play",data)
})

event.on("play",(data)=>{
    console.log("事件触发了-play",data)
})

event.on("play",(data)=>{
    console.log("事件触发了-play",data)
})
event.on("play",(data)=>{
    console.log("事件触发了-play",data)
})

event.on("run",(data)=>{
    console.log("事件触发了--run",data)
})

setTimeout(()=>{
    event.emit("play","11111111")
},2000)