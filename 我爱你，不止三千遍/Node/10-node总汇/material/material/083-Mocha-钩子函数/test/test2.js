/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var chai = require('chai')
var assert = chai.assert;

describe('assert Demo', function () {
    it('use assert lib', function () {
        var value = "hello";
        assert.typeOf(value, 'string')
        assert.equal(value, 'hello')
        assert.lengthOf(value, 5)
    })
})
