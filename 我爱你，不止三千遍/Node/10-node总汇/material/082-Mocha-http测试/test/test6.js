/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var axios = require("axios")
var assert = require("assert")

var supertest = require("supertest")
var app = require("../app")
describe('测试接口1', () => {
    it("返回html代码片段测试1",async ()=>{
      //axios axios.get  
        var res = await axios.get("http://localhost:3000/")
        assert.strictEqual(res.data,"<h1>hello</h1>")
    })
})

describe('测试接口2', () => {
    let server = app.listen(3000)
    it("返回html代码片段测试2",async ()=>{
      //axios axios.get  
      await supertest(server).get("/")
      .expect("Content-Type",/text\/html/)
      .expect(200,'<h1>hello</h1>')
    })

    after(()=>{
        server.close()
    })
})
