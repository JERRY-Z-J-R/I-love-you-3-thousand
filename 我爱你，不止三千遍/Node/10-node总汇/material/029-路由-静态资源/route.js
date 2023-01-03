/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs =require("fs")
const path= require("path")
const mime = require('mime');

function render(res,path,type=""){
    res.writeHead(200, { "Content-Type": `${type?type:"text/html"};charset=utf8` })
    res.write(fs.readFileSync(path), "utf-8")
    res.end()
}
const route = {
    "/login":(req,res)=>{
        render(res,"./static/login.html")
    },
    "/":(req,res)=>{
        render(res,"./static/home.html")
    },
    "/home":(req,res)=>{
        render(res,"./static/home.html")
    },
    "/404":(req,res)=>{
        if(readStaticFile(req,res)){
            return
        }
        res.writeHead(404, { "Content-Type": "text/html;charset=utf8" })
        res.write(fs.readFileSync("./static/404.html"), "utf-8")
        res.end()
    },
    // "/favicon.ico":(req,res)=>{
    //     render(res,"./static/favicon.ico","image/x-icon")
    // }
}

//静态资源管理
function readStaticFile(req,res){
    //获取路径
    const myURL = new URL(req.url,"http://127.0.0.1:3000")
    // console.log()
    const pathname = path.join(__dirname,"/static",myURL.pathname)
    // console.log(myURL.pathname)
    if(myURL.pathname==="/") return false
    if(fs.existsSync(pathname)){
        //处理显示返回
        render(res,pathname,mime.getType(myURL.pathname.split(".")[1]))
        return true
    }else{
        return false
    }
}

module.exports = route