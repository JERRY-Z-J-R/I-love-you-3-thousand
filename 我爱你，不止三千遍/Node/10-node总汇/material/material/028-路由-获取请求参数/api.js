/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

function render(res,data,type=""){
    res.writeHead(200, { "Content-Type": `${type?type:"application/json"};charset=utf8` })
    res.write(data)
    res.end()
}
const apiRouter = {
    "/api/login":(req,res)=>{
        //获取参数呢?
        const myURL = new URL(req.url,"http://127.0.0.1")
        
        if(myURL.searchParams.get("username")==="kerwin" && myURL.searchParams.get("password")==="123456"){
            render(res,`{"ok":1}`)
        }else{
            render(res,`{"ok":0}`)
        }
        
    },

    "/api/loginpost":(req,res)=>{
        //获取参数呢?
        var post = ""
        req.on("data",chunk=>{
            // console.log(chunk)
            post+=chunk
        })

        req.on("end",()=>{
            console.log(post)
            post = JSON.parse(post)
            if(post.username==="kerwin" && post.password==="123456"){
                render(res,`{"ok":1}`)
            }else{
                render(res,`{"ok":0}`)
            }
        })
    }
}

module.exports = apiRouter