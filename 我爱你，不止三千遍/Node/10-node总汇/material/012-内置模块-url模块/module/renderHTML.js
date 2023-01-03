/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
function renderHTML(url){

    switch(url){
        case "/home":
            return `
            <html>
                
                <div>home页面</div>
            </html>
          `
        case "/list":
            return `
            <html>
                <div>list页面</div>
            </html>
          `

        case "/api/list":
            return `
            ["list1","list2","list3"]
          `
        case "/api/home":
            return `
            {name:"kerwin"}
          `
        default : 
        return `
            <html>
                <div>not found</div>
            </html>
          `
    }
    
}

module.exports = {
    renderHTML
}