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

# 二、数组展开运算符

## 2.1 认识数组展开运算符

剩余参数：参数列表 ——> 参数数组

数组展开运算符：参数数组 ——> 参数列表

案例：

> 如果我们需要求 [3, 1, 2] 中的最大值，那么我们是不能直接通过 Math.max() 来求的，因为 Math.max() 接受的不能是数组，而是一个一个的参数，比如：Math.max(3, 1, 2)，所以把参数数组转化为参数列表才是关键。

## 2.2 数组展开运算符的基本用法

用法与剩余参数类似

`console.log(Math.min(...[3, 1, 2]));`

相当于

`console.log(Math.min(3, 1, 2));`

## 2.3 区分剩余参数和展开运算符

```javascript
const add = (...args) => {
    console.log(args);		// [ 1, 2, 3 ]
    console.log(...args);	// 1 2 3
};
add(1, 2, 3);
```

```javascript
console.log([...[1, 2, 3], 4]);	// [ 1, 2, 3, 4 ]
```

## 2.4 数组展开运算符的应用

### 2.4.1 复制数组

```javascript
const a = [1, 2, 3];
const b = [...a];
a[1] = 5;
console.log(a);		// [ 1, 5, 3 ]
console.log(b);		// [ 1, 2, 3 ]
```

### 2.4.2 合并数组

```javascript
const a = [1, 2];
const b = [3];
const c = [4, 5];
console.log([0, ...a, 99, ...c, ...b]);
// [0, 1, 2, 99, 4, 5, 3]
```

### 2.4.3 字符串转为数组

字符串可以按照数组的形式展开。

```javascript
console.log(...'alex');				// a l e x
console.log('a', 'l', 'e', 'x');	// a l e x

console.log([...'alex']);			// [ 'a', 'l', 'e', 'x' ]
// ES6 之前字符串转数组是通过：'alex'.split('');
```

### 2.4.4 类数组转为数组

```javascript
// arguments
function func() {
    console.log(arguments);			// [Arguments] { '0': 1, '1': 2 }
    console.log([...arguments]);	// [ 1, 2 ]
}
func(1, 2);

// NodeList
console.log([...document.querySelectorAll('p')].push);
```

# 三、对象展开运算符

## 3.1 展开对象

对象不能直接展开，必须在 {} 中展开。

```javascript
const apple = {
    color: '红色',
    shape: '球形',
    taste: '甜'
};
console.log({...apple});			// { color: '红色', shape: '球形', taste: '甜' }
console.log({...apple} === apple);	// false
```

## 3.2 合并对象

```javascript
const apple = {
    color: '红色',
    shape: '球形',
    taste: '甜'
};

const pen = {
    color: '黑色',
    shape: '圆柱形',
    use: '写字'
};

// 新对象拥有全部属性，相同属性，后者覆盖前者
console.log({...apple, ...pen});	// { color: '黑色', shape: '圆柱形', taste: '甜', use: '写字' }
console.log({...pen, ...apple});	// { color: '红色', shape: '球形', use: '写字', taste: '甜' }
```

## 3.3 注意事项

### 3.3.1 空对象的展开

如果展开一个空对象，则没有任何效果。

```javascript
console.log({...{}});			// {}
console.log({...{}, a: 1});		// { a: 1 }
```

### 3.3.2 非对象的展开

如果展开的不是对象，则会自动将其转为对象，再将其属性罗列出来（没有属性便为空）。

```javascript
console.log({...1});			// {}
console.log(new Object(1));		// [Number: 1]
console.log({...undefined});	// {}
console.log({...null});			// {}
console.log({...true});			// {}
```

### 3.3.3 字符串的展开

如果展开运算符后面是字符串，它会自动转成一个类似数组的对象，因此返回的不是空对象。

```javascript
// 字符串在对象中展开
console.log({...'alex'});		// { '0': 'a', '1': 'l', '2': 'e', '3': 'x' }

// 字符串在数组中展开
console.log([...'alex']);		// [ 'a', 'l', 'e', 'x' ]

// 字符串直接展开
console.log(...'alex');			// a l e x
```

### 3.3.4 数组的展开

```javascript
console.log({...[1, 2, 3]});	// { '0': 1, '1': 2, '2': 3 }
```

### 3.3.5 对象中对象属性的展开

不会展开对象中的对象属性。

```javascript
const apple = {
    feature: {
        taste: '甜'
    }
};

const pen = {
    feature: {
        color: '黑色',
        shape: '圆柱形'
    },
    use: '写字'
};

console.log({...apple});			// { feature: { taste: '甜' } }

// feature 会直接覆盖，因为 feature 不能展开
console.log({...apple, ...pen});	// { feature: { color: '黑色', shape: '圆柱形' }, use: '写字' }
```

## 3.4 对象展开运算符的应用

### 3.4.1 复制对象

```javascript
const a = {x: 1, y: 2};
const c = {...a};
console.log(c, c === a);
// { x: 1, y: 2 } false
```

### 3.4.2 用户参数和默认参数

```javascript
const logUser = userParam => {
    const defaultPeram = {
        username: 'ZhangSan',
        age: 0,
        sex: 'male'
    };

    const param = {...defaultPeram, ...userParam};
    console.log(param.username, param.age, param.sex);
};

logUser({username: 'jerry'});	// jerry 0 male
```

再优化：

```javascript
const logUser = userParam => {
    const defaultPeram = {
        username: 'ZhangSan',
        age: 0,
        sex: 'male'
    };

    const {username, age, sex} = {...defaultPeram, ...userParam};
    console.log(username, age, sex);
};

logUser({username: 'jerry'});	// jerry 0 male
```

# 四、Set 和 Map

## 4.1 什么是 Set？

Set 是一系列无序、没有重复值的数据集合。

> 数组是一系列有序（下标索引）的数据集合。

```javascript
const s = new Set();
s.add(1);
s.add(2);

// Set 中不能有重复的成员
s.add(1);
console.log(s);		// Set(2) { 1, 2 }

// Set 没有下标去标识每一个值，所以 Set 是无序的，也不能像数组那样通过下标去访问 Set 的成员。
```

## 4.2 Set 实例的方法和属性

### 4.2.1 add 方法

```javascript
const s = new Set();
s.add(0);
// 可以连写
s.add(1).add(2).add(2).add(3);
console.log(s);		// Set(4) { 0, 1, 2, 3 }
```

### 4.2.2 has 方法

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);
console.log(s.has(1));	// true
console.log(s.has(4));	// false
```

### 4.2.3 delete 方法

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);
s.delete(2);
// 使用 delete 删除不存在的成员，什么都不会发生，也不会报错
s.delete(4);
console.log(s);	// Set(3) { 0, 1, 3 }
```

### 4.2.4 clear 方法

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);
s.clear();
console.log(s);	// Set(0) {}
```

### 4.2.5 forEach 方法

作用：用于遍历 Set 的（按照成员添加进集合的顺序遍历）。

forEach 方法可以接受两个参数，第一个是：回调函数，第二个是：指定回调函数的 this 指向。

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);

s.forEach(function (value, key, set) {
    // Set 中 value = key，原因：好多数据结构都有 forEach 方法，为了方便统一，所以参数是统一的，但是参数的意义各有不同
    // set 就是 s 本身
    console.log(value, key, set === s);
    console.log(this);
});

/*
0 0 true
Window
1 1 true
Window
2 2 true
Window
3 3 true
Window 
*/
```

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);

s.forEach(function (value, key, set) {
    // Set 中 value = key，原因：好多数据结构都有 forEach 方法，为了方便统一，所以参数是统一的，但是参数的意义各有不同
    // set 就是 s 本身
    console.log(value, key, set === s);
    console.log(this);
}, document);

/*
0 0 true
#document
1 1 true
#document
2 2 true
#document
3 3 true
#document
*/
```

### 4.2.6 size 属性

```javascript
const s = new Set();
s.add(0);
s.add(1).add(2).add(2).add(3);

console.log(s.size);	// 4
```

## 4.3 Set 构造函数的参数

- 数组
- 字符串、arguments、NodeList、Set 等

【数组】

```javascript
const s = new Set([1, 2, 1]);
console.log(s);		// Set(2) { 1, 2 }
```

【字符串】

```javascript
console.log(new Set('hiii'));	// Set(2) { 'h', 'i' }
```

【arguments】

```javascript
function func() {
    console.log(new Set(arguments));
}
func(1, 2, 1);	// Set(2) { 1, 2 }
```

【NodeList】

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p>1</p>
<p>2</p>
<p>3</p>
<script>
    console.log(new Set(document.querySelectorAll('P')));
</script>
</body>
</html>
```

【Set】

```javascript
const s = new Set([1, 2, 1]);
console.log(new Set(s));	// Set(2) { 1, 2 }
console.log(s);				// Set(2) { 1, 2 }
// 这也是复制一个 Set 的方法
```

## 4.4 Set 注意事项

【Set 如何判断重复】

Set 对重复值的判断基本遵循严格相等（===）

但是对于 NaN 的判断与 === 不同，Set 中 NaN 等于 NaN

```javascript
const s = new Set();
s.add({}).add({});
console.log({} === {});	 // false
console.log(s);			 // Set(2) { {}, {} }
```

【什么时候使用 Set】

- 数组或字符串需要去重时
- 不需要通过下标访问，只需要遍历时
- 为了使用 Set 提供的方法和属性时

## 4.5 Set 的应用

【数组去重】

```javascript
const s = new Set([1, 2, 1]);
console.log(s);			// Set(2) { 1, 2 }
console.log([...s]);	// [ 1, 2 ]
```

【字符串去重】

```javascript
const s = new Set('abbacbd');
console.log(s);					// Set(4) { 'a', 'b', 'c', 'd' }
console.log([...s].join(''));	// abcd
```

【存放 DOM 元素】

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p>1</p>
<p>2</p>
<p>3</p>
<script>
    // 这里使用 Set 是因为我们不需要通过下标去访问，只需直接遍历即可
    const s = new Set(document.querySelectorAll('p'));
    s.forEach(function (elem) {
        elem.style.color = 'red';
    });
</script>
</body>
</html>
```

## 4.6 什么是 Map？

## 4.7 Map 实例的属性和方法

## 4.8 Map 构造函数的参数

## 4.9 Map 注意事项

## 4.10 Map 的应用

