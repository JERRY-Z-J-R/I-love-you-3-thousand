/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs = require("fs")

const readStream = fs.createReadStream("./1.txt")

const writeStream = fs.createWriteStream("./2.txt")

readStream.pipe(writeStream)