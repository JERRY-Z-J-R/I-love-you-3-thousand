/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs = require('fs');

fs.unlink('./avatar/a.txt', err => {
    console.log(err);
});
