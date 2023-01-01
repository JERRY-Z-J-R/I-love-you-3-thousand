/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var sum = require("../sum")
var assert  =require("assert")

//describe 一组测试，嵌套
//it 一个测试


describe("大的组1测试",()=>{
    describe('小的组1测试', () => {
        it("sum() 结果应该返回 0",()=>{
            assert.strictEqual(sum(),0)
        })
        it("sum(1) 结果应该返回 1",()=>{
            assert.strictEqual(sum(1),1)
        })
        
    })

    describe('小的组2测试', () => {
        it("sum(1,2) 结果应该返回 3",()=>{
            assert.strictEqual(sum(1,2),3)
        })
        it("sum(1,2,3) 结果应该返回 6",()=>{
            assert.strictEqual(sum(1,2,3),6)
        })
    })
    
})

describe("大的组2测试",()=>{

})