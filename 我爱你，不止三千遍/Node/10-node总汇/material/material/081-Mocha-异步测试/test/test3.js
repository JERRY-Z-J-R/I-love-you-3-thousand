/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var chai = require('chai');
chai.should();

describe('should Demo', function(){
    it('use should lib', function () {
        var value = 'hello'
        value.should.exist.and.equal('hello').and.have.length(5).and.be.a('string')
        // value.should.be.a('string')
        // value.should.equal('hello')
        // value.should.not.equal('hello2')
        // value.should.have.length(5);
    })
});