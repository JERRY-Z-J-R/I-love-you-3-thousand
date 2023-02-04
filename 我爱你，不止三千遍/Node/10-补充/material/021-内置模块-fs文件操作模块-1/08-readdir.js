/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs = require('fs');

fs.readdir('./avatar', (err, data) => {
    if (!err) {
        console.log(data);
    }
});
