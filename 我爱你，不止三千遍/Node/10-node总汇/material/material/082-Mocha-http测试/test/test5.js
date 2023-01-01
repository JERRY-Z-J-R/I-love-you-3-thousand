/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs = require("fs")
const fsp = fs.promises
var assert  =require("assert")

describe('异步测试1', () => {
    it("异步读取文件1",(done)=>{
        fs.readFile("./1.txt","utf8",(err,data) =>{
            if(err){
                done(err)
            }else{
                assert.strictEqual(data,"hello")
                done()
            }
        })
    })
})


describe('异步测试2', () => {
    it("异步读取文件2", async ()=>{
        var data = await fsp.readFile("./1.txt","utf8")
        assert.strictEqual(data,"hello")
    })
})