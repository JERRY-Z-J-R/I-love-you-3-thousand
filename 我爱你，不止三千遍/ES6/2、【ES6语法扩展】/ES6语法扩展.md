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

- Set 对重复值的判断基本遵循严格相等（===）

- 但是对于 NaN 的判断与 === 不同，Set 中 NaN 等于 NaN

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

Map 可以理解为：“映射”。

Map 和 对象 都是键值对的集合。

```javascript
// 键 ——> 值，key ——> value
// 对象：
const person = {
    name: 'alex',
    age: 18
};

// Map：
const m = new Map();
m.set('name', 'alex');
m.set('age', 18);
console.log(m);		// Map(2) { 'name' => 'alex', 'age' => 18 }

// Map 和 对象 的区别：
// 对象一般用字符串当作 “键”（当然在书写时字符串键的引号可以去掉）.
// Map 中的 “键” 可以是一切类型。
const m = new Map();
m.set(true, 'true');
m.set({}, 'object');
m.set(new Set([1, 2]), 'set');
m.set(undefined, 'undefined');
console.log(m);
/*
Map(4) {
  true => 'true',
  {} => 'object',
  Set(2) { 1, 2 } => 'set',
  undefined => 'undefined'
}
*/
```

## 4.7 Map 实例的方法和属性

### 4.7.1 set 方法

```javascript
const m = new Map();
m.set('age', 18).set(true, 'true').set('age', 22);
console.log(m);		// Map(2) { 'age' => 22, true => 'true' }
```

### 4.7.2 get 方法

```javascript
const m = new Map();
m.set('age', 18).set(true, 'true').set('age', 22);
console.log(m.get('age'));		// 22
console.log(m.get(true));		// true
```

### 4.7.3 has 方法

```javascript
const m = new Map();
m.set('age', 18).set(true, 'true').set('age', 22);
console.log(m.has('age'));			// true
console.log(m.has('true'));			// false
```

### 4.7.4 delete 方法

```javascript
m.delete('age');
// 使用 delete 删除不存在的成员，什么都不会发生，也不会报错
m.delete('name');
```

### 4.7.5 clear 方法

```javascript
m.clear();
```

### 4.7.6 forEach 方法

```javascript
m.forEach(function (value, key, map) {
    console.log(this);
}, document);
```

### 4.7.7 size 属性

```javascript
// 对象没有类似的属性
console.log(m.size);
```

## 4.8 Map 构造函数的参数

- 二维数组
- Set、Map 等

【二维数组】

```javascript
console.log(new Map([
    ['name', 'alex'],
    ['age', 18]
]));
// Map(2) { 'name' => 'alex', 'age' => 18 }
```

【Set、Map】

```javascript
// Set
// Set 中也必须体现出键和值
const s = new Set([
    ['name', 'alex'],
    ['age', 18]
]);
console.log(new Map(s));
console.log(s);
// Map(2) { 'name' => 'alex', 'age' => 18 }
// Set(2) { [ 'name', 'alex' ], [ 'age', 18 ] }

// Map
const m = new Map([
    ['name', 'alex'],
    ['age', 18]
]);
console.log(m);
const m2 = new Map(m);
console.log(m2, m2 === m);
// Map(2) { 'name' => 'alex', 'age' => 18 }
// Map(2) { 'name' => 'alex', 'age' => 18 } false
// Map 复制的方法
```

## 4.9 Map 注意事项

【Map 如何判断键名是否相同】

> 在 Set 中遇到重复的值直接去掉后者，而 Map 中遇到重复的键值则是后面的覆盖前面的。

- 基本遵循严格相等（===）
- Map 中 NaN 也是等于 NaN

【什么时候使用 Map】

- 如果只是需要键值对结构
- 需要字符串以外的值做键
- 对象一般用在模拟实体上

## 4.10 Map 的应用

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
    const [p1, p2, p3] = document.querySelectorAll('p');
    const m = new Map([
        [p1, {
            color: 'red',
            backgroundColor: 'yellow',
            fontSize: '40px'
        }],
        [p2, {
            color: 'green',
            backgroundColor: 'pink',
            fontSize: '40px'
        }],
        [p3, {
            color: 'blue',
            backgroundColor: 'orange',
            fontSize: '40px'
        }]
    ]);
    m.forEach((propObj, elem) => {
        for (const p in propObj) {
            elem.style[p] = propObj[p];
        }
    });	// 由于不需要改变 this 指向，所以可以使用箭头函数
</script>
</body>
</html>
```

![image-20220327154158420](mark-img/image-20220327154158420.png)

# 五、Iterator 遍历器与 for...of 循环

## 5.1 什么是 Iterator？

**（1）Iterator 的作用**

Iterator：遍历器（迭代器）

> 其实是一个底层的迭代机制，主要了解即可。

**（2）使用 Iterator**

```javascript
const it = [1, 2][Symbol.iterator](); // 数组天生就有 Symbol.iterator 方法
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: undefined, done: true }
// it：可遍历对象（可迭代对象）
// Symbol.iterator：可遍历对象的生成方法
// value：值，done：是否遍历完成
```

**（3）什么是 Iterator？**

Symbol.iterator（可遍历对象的生成方法）——> it（可遍历对象）——> it.next() ——> it.next() ——> ... （直到 done 为 true）

## 5.2 Iterator 解惑

**（1）为什么需要 Iterator 遍历器？**

遍历数组：for 循环和 forEach 方法

遍历对象：for in 循环

Iterator 遍历器是一个统一的遍历方式！

**（2）如何更方便的使用 Iterator**

之前：Symbol.iterator ——> it ——> next()

优化：把上面的步骤进行封装（已经封装好了：for...of 循环）

## 5.3 for...of 的用法

原理：

```javascript
const arr = [1, 2, 3];
const it = arr[Symbol.iterator]();
let next = it.next();
while (!next.done) {
    ...
    next = it.next();
}
```

for...of：

```javascript
const arr = [1, 2, 3];
for (const item of arr) {
    ...
}
```

> for...of 循环只会遍历出那些 done 为 false 时，对应的 value 值。

【与 break、continue 一起使用】

```javascript
const arr = [1, 2, 3];
for (const item of arr) {
    if (item === 2) {
        // break;
    	continue;
    }
    console.log(item);
}
```

【在 for...of 中获取数组的索引】

```javascript
const arr = [1, 2, 3];
console.log(arr.keys());
for (const key of arr.keys()) {
    console.log(key);
}
// keys() 得到的是索引的可遍历对象，可以遍历出索引值
/*
Object [Array Iterator] {}
0
1
2
*/


for (const value of arr.values()) {
    console.log(value);
}
// values() 得到的是值的可遍历对象，可以遍历出值
/*
1
2
3
*/


for (const entries of arr.entries()) {
    console.log(entrie);
}
/*
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
*/

// 结合解构赋值
for (const [index, value] of arr.entries()) {
    console.log(index, value);
}
/*
0 1
1 2
2 3
*/
```

## 5.4 原生可遍历与非原生可遍历

### 5.4.1 什么是可遍历

只要有 Symbol.iterator 方法，并且这个方法可以生成可遍历对象，就是可遍历的。

只要可遍历，就可以使用 for...of 循环来统一遍历。

### 5.4.2 原生可遍历的有哪些？

- 数组
- 字符串
- Set
- Map
- arguments
- NodeList

### 5.4.3 非原生可遍历的有哪些？

- 对象

（手动添加一个 Symbol.iterator 方法，或者是将数组的 Symbol.iterator 方法赋给对象）

### 5.4.4 使用了 Iterator 的其他场合

- 数组的展开运算符
- 数组的解构赋值
- Set 和 Map 的构造函数

# 六、ES6 新增方法

## 6.1 字符串新增方法

### 6.1.1 includes()

判断字符串中是否含有某些字符。

```javascript
// 基本用法
console.log('abc'.includes('a'));		// true
console.log('abc'.includes('ab'));		// true
console.log('abc'.includes('bc'));		// true
console.log('abc'.includes('ac'));		// false


// 接受第二个参数
// 表示开始搜索的位置，默认是 0
console.log('abc'.includes('a'));		// true
console.log('abc'.includes('a', 0));	// true
console.log('abc'.includes('a', 1));	// false


// 应用（改变路径）
// https://www.imooc.com/course/list
// https://www.imooc.com/course/list?c=fe&sort=pop&name=value
let url = 'https://www.imooc.com/course/list';
const addURLParam = (url, name, value) => {
    url += url.includes('?') ? '' : '?';

    url += `${name}=${value}`;

    return url;
};
url = addURLParam(url, 'c', 'fe');
console.log(url);	// https://www.imooc.com/course/list?c=fe
url = addURLParam(url, 'sort', 'pop');
console.log(url);	// https://www.imooc.com/course/list?c=fesort=pop
```

### 6.1.2 padStart() 和 padEnd()

根据所需长度补全字符串。

```javascript
// 基本用法
console.log('x'.padStart(5, 'ab'));		// ababx
console.log('x'.padEnd(5, 'ab'));		// xabab
console.log('x'.padEnd(4, 'ab'));		// xaba

// 注意事项
// 原字符串的长度，等于或大于最大长度，不会消减原字符串，字符串补全不生效，返回原字符串
console.log('xxx'.padStart(2, 'ab'));	// xxx
console.log('xxx'.padEnd(2, 'ab'));		// xxx

// 如果省略第二个参数，默认使用空格补全长度
console.log('x'.padStart(4));			//    x
console.log('x'.padEnd(4));				// x

// 应用（显示日期格式）
// 2020-10-10
// 2020-01-01
console.log('10'.padStart(2, 0));		// 10
console.log('1'.padStart(2, 0));		// 01
```

### 6.1.3 trimStart() 和 trimEnd()

清除字符串的首或尾空格，中间的空格不会清除。

```javascript
// 基本用法
const s = '  a b c  ';
console.log(s);						//   a b c
console.log(s.trimStart());			// a b c  
console.log(s.trimLeft());			// a b c 
console.log(s.trimEnd());			//   a b c
console.log(s.trimRight());			//   a b c
// 两头同时去除空格
console.log(s.trim());				// a b c

// 应用（表单提交检查首尾是否有空格）
const usernameInput = document.getElementById('username');
const btn = document.getElementById('btn');

btn.addEventListener(
    'click',
    () => {
        console.log(usernameInput.value);

        // 验证首尾是否有空格
        console.log(usernameInput.value.trim());
        if (usernameInput.value.trim() !== '') {
            // 可以提交
            console.log('可以提交');
        } else {
            // 不能提交
            console.log('不能提交');
        }
    },
    false
);
```

## 6.2 数组新增方法

### 6.2.1 includes()

```javascript
// 基本用法
// 判断数组中是否含有某个成员
console.log([1, 2, 3].includes('2'));	 // false
console.log([1, 2, 3].includes(2));		 // true

// 第二个参数表示搜索的起始位置，默认值是 0
console.log([1, 2, 3].includes(2, 2));	 // false

// 基本遵循严格相等（===），但是对于 NaN 的判断与 === 不同，includes 认为 NaN === NaN
console.log(NaN === NaN);					// false
console.log([1, 2, NaN].includes(NaN));		// true

// 应用
// 去重
// [1, 2, 1];
const arr = [];
for (const item of [1, 2, 1]) {
    if (!arr.includes(item)) {
        arr.push(item);
    }
}
console.log(arr);	// [ 1, 2 ]
```

### 6.2.2 Array.from()

将其他数据类型转换成数组。

```javascript
// 基本用法
console.log(Array.from('str'));		// [ 's', 't', 'r' ]

// 哪些可以通过 Array.from() 转换成数组？
// 1、所有可遍历的：数组、字符串、Set、Map、NodeList、arguments
console.log(Array.from(new Set([1, 2, 1])));	// [ 1, 2 ]
console.log([...new Set([1, 2, 1])]);			// [ 1, 2 ]
// 2、拥有 length 属性的任意对象
const obj = {
    '0': 'a',
    '1': 'b',
    name: 'Alex',
    length: 3
};
// 只会把数字键的转为数组元素
console.log(Array.from(obj));	// [ 'a', 'b', undefined ]
console.log([...obj]);			// 报错！

// 第二个参数
// 作用类似于数组的 map 方法，用来对每个元素进行处理，将处理后的值放入返回的数组
console.log(
    [1, 2].map(value => {
    	return value * 2;
    })
);	// [ 2, 4 ]

console.log(Array.from('12', value => value * 2));			// [ 2, 4 ]
console.log(Array.from('12').map(value => value * 2));		// [ 2, 4 ]

// 第三个参数（修改 this 指向）
Array.from(
    '12',
    function () {
        console.log(this);
    },
    document
);
```

### 6.2.3 find() 和 findIndex()

find()：找到满足条件的一个立即返回
findIndex()：找到满足条件的一个，立即返回其索引

```javascript
// 基本用法
console.log([1, 5, 10, 15].find((value, index, arr) => {
        return value > 9;
    })
);
// 10
console.log([1, 5, 10, 15].findIndex((value, index, arr) => {
        return value > 9;
    })
);
// 2

// 第二个参数指定 this
[1, 5, 10, 15].find(function (value, index, arr) {
    console.log(this);
    return value > 9;
}, document);

// 应用
const students = [
    {
        name: '张三',
        sex: '男',
        age: 16
    },
    {
        name: '李四',
        sex: '女',
        age: 22
    },
    {
        name: '王二麻子',
        sex: '男',
        age: 32
    }
];
console.log(students.find(value => value.sex === '女'));
// { name: '李四', sex: '女', age: 22 }
console.log(students.findIndex(value => value.sex === '女'));
// 1
```


## 6.3 对象新增方法

### 6.3.1 Object.assign()

用来合并对象。

```javascript
// 基本用法
// Object.assign(目标对象, 源对象1, 源对象2, ...);
const apple = {
    color: '红色',
    shape: '圆形',
    taste: '甜'
};
const pen = {
    color: '黑色',
    shape: '圆柱形',
    use: '写字'
};
console.log(Object.assign(apple, pen));	
// 后面的覆盖前面的（最终返回的不是新的，而是修改了前面的）
// { color: '黑色', shape: '圆柱形', taste: '甜', use: '写字' }
// Object.assign 直接合并到了第一个参数中，返回的就是合并后的对象
console.log(apple);	// { color: '黑色', shape: '圆柱形', taste: '甜', use: '写字' }
console.log(Object.assign(apple, pen) === apple);	// true


// 可以合并多个对象
// 第一个参数使用一个空对象来实现合并返回一个新对象的目的
console.log(Object.assign({}, apple, pen));	// { color: '黑色', shape: '圆柱形', taste: '甜', use: '写字' }
console.log(apple);	// { color: '红色', shape: '圆形', taste: '甜' }
console.log({...apple, ...pen}); // { color: '黑色', shape: '圆柱形', taste: '甜', use: '写字' }


// 注意事项
// (1) 基本数据类型作为源对象
// 与对象的展开类似，先转换成对象，再合并
console.log(Object.assign({}, undefined));	// {}
console.log(Object.assign({}, null));		// {}
console.log(Object.assign({}, 1));			// {}
console.log(Object.assign({}, true));		// {}
console.log(Object.assign({}, 'str'));		// { '0': 's', '1': 't', '2': 'r' }
// (2) 同名属性的替换
// 后面的直接覆盖前面的
const apple = {
    color: ['红色', '黄色'],
    shape: '圆形',
    taste: '甜'
};
const pen = {
    color: ['黑色', '银色'],
    shape: '圆柱形',
    use: '写字'
};
console.log(Object.assign({}, apple, pen));	// { color: [ '黑色', '银色' ], shape: '圆柱形', taste: '甜', use: '写字' }


// 应用
// 合并默认参数和用户参数
const logUser = userOptions => {
    const DEFAULTS = {
        username: 'ZhangSan',
        age: 0,
        sex: 'male'
    };

    const options = Object.assign({}, DEFAULTS, userOptions);
    console.log(options);
};
logUser();						// { username: 'ZhangSan', age: 0, sex: 'male' }
logUser({});					// { username: 'ZhangSan', age: 0, sex: 'male' }
logUser({username: 'Alex'});	// { username: 'Alex', age: 0, sex: 'male' }
```

### 6.3.2 Object.keys()、Object.values() 和 Object.entries()

```javascript
// 基本用法
const person = {
    name: 'Alex',
    age: 18
};
// 返回键数组
console.log(Object.keys(person));		// [ 'name', 'age' ]
// 返回值数组
console.log(Object.values(person));		// [ 'Alex', 18 ]
// 返回键值二维数组
console.log(Object.entries(person));	// [ [ 'name', 'Alex' ], [ 'age', 18 ] ]


// 与数组类似方法的区别
console.log([1, 2].keys());			// Object [Array Iterator] {}
console.log([1, 2].values());		// Object [Array Iterator] {}
console.log([1, 2].entries());		// Object [Array Iterator] {}
// 数组的 keys()、values()、entries() 等方法是实例方法，返回的都是 Iterator
// 对象的 Object.keys()、Object.values()、Object.entries() 等方法是构造函数方法，返回的是数组


// 应用（使用 for...of 循环遍历对象）
const person = {
    name: 'Alex',
    age: 18
};
for (const key of Object.keys(person)) {
    console.log(key);		
}
// name
// age
for (const value of Object.values(person)) {
    console.log(value);		
}
// Alex
// 18
for (const entries of Object.entries(person)) {
    console.log(entries);	
}
// [ 'name', 'Alex' ]
// [ 'age', 18 ]
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}
// name Alex
// age 18

// Object.keys()/values()/entires() 并不能保证顺序一定是你看到的样子，这一点和 for in 是一样的
// 如果对遍历顺序有要求那么不能用 for in 以及这种方法，而要用其他方法
```

