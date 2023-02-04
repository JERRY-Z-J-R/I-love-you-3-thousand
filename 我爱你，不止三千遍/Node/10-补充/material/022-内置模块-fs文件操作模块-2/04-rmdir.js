/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs = require('fs').promises;

fs.readdir('./avatar').then(async data => {
    // console.log(data)
    let arr = [];
    data.forEach(item => {
        arr.push(fs.unlink(`./avatar/${item}`));
    });
    //Promise.all([])

    await Promise.all(arr);
    await fs.rmdir('./avatar');
});

fs.readdir('./avatar').then(async data => {
    // console.log(data)
    // let arr = []
    // data.forEach(item=>{
    //     arr.push(fs.unlink(`./avatar/${item}`))
    // })
    //Promise.all([])

    await Promise.all(data.map(item => fs.unlink(`./avatar/${item}`)));
    await fs.rmdir('./avatar');
});
