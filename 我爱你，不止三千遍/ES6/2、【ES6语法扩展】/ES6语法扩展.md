# 【ES6语法扩展】

# 一、剩余参数

## 1.2 认识剩余参数

`const add = (x, y, z, ...args) => {};`

## 1.3 剩余参数的本质

剩余参数永远是个数组，即使没有值，也是个空数组。

```javascript
const add = (x, y, ...args) => {
    console.log(x, y, args);
};
add();					// undefined undefined []
add(1);					// 1 undefined []
add(1, 2);				// 1 2 []
add(1, 2, 3, 4, 5);		// 1 2 [ 3, 4, 5 ]
```

## 1.4 注意事项

### 1.4.1 箭头函数的剩余参数

箭头函数的参数部分即使只有一个剩余参数，也不能省略圆括号。

`const add = (...args) => {};`

### 1.4.2 使用剩余参数替代 arguments 获取实际参数

- 剩余参数是一个 “真数组”，arguments 是一个 “类数组”
- 剩余参数的名字可以自定义

### 1.4.3 剩余参数的位置

剩余参数只能是最后一个参数，之后不能再有其他参数，否则会报错。

## 1.5 剩余参数的应用

作为数组的应用：

```javascript
const add = (...args) => {
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    } // 当然此处，arguments 也可以

    return sum;
};

console.log(add());			// 0
console.log(add(1, 1));		// 2
console.log(add(1, 2, 3));	// 6
```

与解构赋值结合使用：

（剩余参数不一定非要作为函数参数使用）

- 与数组解构赋值结合

```javascript
const func = ([num, ...args]) => {};
func([1, 2, 3]);
```

- 与对象解构赋值结合

```javascript
const {x, y, ...z} = {a: 3, x: 1, y: 2, b: 4};
console.log(x, y, z);
// 1 2 { a: 3, b: 4 }
// 这里的剩余参数是个对象（准确的应该叫：剩余元素）
```

```javascript
const func = ({x, y, ...z}) => {
    console.log(x, y, z);	// 1 2 { a: 3, b: 4 }
};
func({a: 3, x: 1, y: 2, b: 4});
```



