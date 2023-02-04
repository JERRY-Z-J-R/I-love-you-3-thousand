/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs = require('fs');

fs.stat('./avatar/b.txt', (err, data) => {
    console.log(data.size);
    console.log(data.isFile());
    console.log(data.isDirectory());
});
