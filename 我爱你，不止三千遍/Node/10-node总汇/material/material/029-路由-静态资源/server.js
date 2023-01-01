/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const http = require("http")
const Router = {}

//express  use
function use(obj){
    Object.assign(Router,obj)
}

function start(){
    http.createServer((req, res) => {
        //favicon
        const myURL = new URL(req.url, "http://127.0.0.1")
        // console.log(myURL.pathname)
        
        try {
            Router[myURL.pathname](req,res)
        } catch (error) {
            Router["/404"](req,res)
        }
        
    }).listen(3000, () => {
        console.log("server start")
    })
}

exports.start = start
exports.use = use