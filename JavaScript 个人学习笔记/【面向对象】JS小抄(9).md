# 【面向对象】JS小抄(9)

> 原创内容，转载请注明出处！

# 一、认识对象

对象（object）是“键值对”的集合，表示属性和值的映射关系。

```javascript
var xiaoming = {
    name: '小明',
    age: 12,
    sex: '男',
    hobbies: ['足球', '编程']
};
```

- 属性名（键名，key）: 属性值（value）
- JS 中，大括号表示对象

- 最后的属性后面不加逗号

## 1.1 对象的语法

k 和 v 之间用冒号分隔，每组 k:v 之间用逗号分隔，最后一个 k:v 对后可以不书写逗号。

```javascript
var obj = {
    k: v,
    K: v,
    K: v,
    K: v
};
```

## 1.2 属性是否加引号

如果对象的属性键名不符合 JS 标识符命名规范，则这个键名必须用引号包裹。

```javascript
var xiaoming = {
    name: '小明',
    age: 12,
    sex: '男',
    hobbys: ['足球', '游泳', '编程'],
    'favorite-book': '舒克和贝塔'
    // 属性名中有短横，不符合JS标识符命名规范，属性名必须用引号包裹。
};
```

## 1.3 属性的访问

可以用“点语法”访问对象中指定键的值。

```javascript
xiaoming.name;		// '小明'
xiaoming.age;		// 12
xiaoming.hobbys;	// ['足球', '游泳', '编程'] 
```

如果属性名不符合 JS 标识符命名规范，则必须用方括号的写法来访问。

```javascript
xiaoming['favorite-book'];	// '舒克和贝塔'
```

如果属性名以变量形式存储，则必须使用方括号形式。

```javascript
var obj = {
    a: 1,
    b: 2,
    c: 3
};

var key = 'b';
console.log(obj.key);	// undefined
console.log(obj[key]);	// 2
```

## 1.4 属性的更改

直接使用赋值运算符重新对某属性赋值即可更改属性。

```javascript
var obj = {
    a: 10
};
obj.a = 30;
obj.a++;
```

## 1.5 属性的创建

如果对象本身没有某个属性值，则用点语法赋值时，这个属性会被创建出来。

```javascript
var obj = {
    a: 10
};
obj.b = 40;
```

## 1.6 属性的删除

如果要删除某个对象的属性，需要使用 delete 操作符。

```javascript
var obj = {
    a: 1,
    b: 2
};
delete obj.a;
```

# 二、对象的方法

## 2.1 认识方法

如果某个属性值是函数，则它也被称为对象的“方法”。

```javascript
var xiaoming = {
    name: '小明',
    age: 12,
    sex: '男',
    hobbys: ['足球', '游泳', '编程'],
    'favorite-book': '舒克和贝塔',
    // sayHello方法
    sayHello: function () {
		console.log('你好我是小明，今年12岁，我是个男生');
	}
};
```

## 2.2 方法的调用

使用“点语法”可以调用对象的方法。

```javascript
xiaoming.sayHello();
```

## 2.3 方法和函数

方法也是函数，只不过方法是对象的“函数属性”，它需要用对象打点调用。

在正式学习了什么是“方法”之后，就能深入理解之前我们学习的一些函数的书写形式了，比如：

```javascript
console.log();
Math.ceil();
```

## 2.4 对象的遍历

和遍历数组类似，对象也可以被遍历，遍历对象需要使用 for...in... 循环。

使用 for...in... 循环可以遍历对象的每个键。

在后续的 ES6 相关课程中，还会学习新的对象遍历的方式。

【for...in...循环】

```javascript
// k: 循环变量，它会依次成为对象的每一个键
// obj: 要遍历的对象
for (var k in obj) {
    console.log('属性' + k + '的值是' + obj[k]);
}
```

【案例】

```javascript
var obj = {
    a: 11,
    b: 22,
    c: 88
};
for (var k in obj) {
    console.log('对象obj的属性' + k + '的值是' + obj[k]);
}

/*
对象obj的属性a的值是11
对象obj的属性b的值是22
对象obj的属性c的值是88
*/
```

# 三、对象的深浅克隆

## 3.1 复习基本类型值和引用类型值

还记得我们之前学习过的基本类型值和引用类型值吗？

|            | 举例                                | 当 var a = b 变量传值时                          | 当用 == 比较时                             |
| ---------- | ----------------------------------- | ------------------------------------------------ | ------------------------------------------ |
| 基本类型值 | 数字、字符串、布尔、undefined、null | 内存中产生新的副本                               | 比较值是否相等                             |
| 引用类型值 | 对象、数组等                        | 内存中不产生新的副本，而是让新变量指向同一个对象 | 比较内存地址是否相同，即比较是否为同一对象 |

## 3.2 对象是引用类型值

对象是引用类型值，这意味着：

不能用 `var obj2 = obj1` 这样的语法克隆一个对象。

使用 == 或者 === 进行对象的比较时，比较的是它们是否为内存中的同一个对象，而不是比较值是否相同。

【案例】

```javascript
// 例子1
var obj1 = {
    a: 1,
    b: 2,
    c: 3
};
var obj2 = {
    a: 1,
    b: 2,
    c: 3
};
console.log(obj1 == obj2);      // false
console.log(obj1 === obj2);     // false

console.log({} == {});          // false
console.log({} === {});         // false

// 例子2
var obj3 = {
    a: 10
};
var obj4 = obj3;
obj3.a++;
console.log(obj4);              // {a: 11}
console.log(obj3 == obj4);      // true
```

## 3.3 对象的浅克隆

复习什么是浅克隆：只克隆对象的“表层”，如果对象的某些属性值又是引用类型值，则不进一步克隆它们，只是传递它们的引用。

使用 for...in... 循环即可实现对象的浅克隆。

【案例】

```javascript
var obj1 = {
    a: 1,
    b: 2,
    c: [44, 55, 66]
};

// var obj2 = obj1;  这就不是克隆！！！！

// 实现浅克隆
var obj2 = {};
for (var k in obj1) {
    // 每遍历一个 k 属性，就给 obj2 也添加一个同名的 k 属性
    // 值和 obj1 的 k 属性值相同
    obj2[k] = obj1[k];
}

// 为什么叫浅克隆呢？比如 c 属性的值是引用类型值，那么本质上 obj1 和 obj2 的 c 属性是内存中的同一个数组，并没有被克隆分开。
obj1.c.push(77);
console.log(obj2);                  // obj2 的 c 属性这个数组也会被增加 77 数组
console.log(obj1.c == obj2.c);      // true，true 就证明了数组是同一个对象
```

## 3.4 对象的深克隆

复习什么是深克隆：克隆对象的全貌，不论对象的属性值是否又是引用类型值，都能将它们实现克隆。

和数组的深克隆类似，对象的深克隆需要使用递归。

面试时经常会考察深克隆算法，必须掌握。

【案例】

```javascript
var obj1 = {
    a: 1,
    b: 2,
    c: [33, 44, {
        m: 55,
        n: 66,
        p: [77, 88]
    }]
};

// 深克隆
function deepClone(o) {
    // 要判断o是对象还是数组
    if (Array.isArray(o)) {
        // 数组
        var result = [];
        for (var i = 0; i < o.length; i++) {
            result.push(deepClone(o[i]));
        }
    } else if (typeof o == 'object') {
        // 对象
        var result = {};
        for (var k in o) {
            result[k] = deepClone(o[k]);
        }
    } else {
        // 基本类型值
        var result = o;
    }
    return result;
}


var obj2 = deepClone(obj1);
console.log(obj2);

console.log(obj1.c == obj2.c);      // false

obj1.c.push(99);
console.log(obj2);                  // obj2不变的，因为没有“藕断丝连”的现象

obj1.c[2].p.push(999);
console.log(obj2);                  // obj2不变的，因为没有“藕断丝连”的现象
```

# 四、认识上下文

## 4.1 什么是上下文

垃圾分类，`这` 是非常好的习惯，值得表扬。

随手关灯，`这` 是非常好的习惯，值得表扬。

课后复习，`这` 是非常好的习惯，值得表扬。

早睡早起，`这` 是非常好的习惯，值得表扬。

## 4.2 函数的上下文

函数中可以使用 this 关键字，它表示函数的上下文。

与中文中“这”类似，函数中的 this 具体指代什么必须通过调用函数时的“前言后语”来判断。

## 4.3 函数中的 this

```javascript
var xiaoming = {
    nickname: '小明',
    age: 12,
    sayHello: function () {
        console.log('我是' + this.nickname + '，我' + this.age + '岁了');
    }
};
xiaoming.sayHello();

// 我是小明，我12岁了
```

```javascript
var xiaoming = {
    nickname: '小明',
    age: 12,
    sayHello: function () {
        console.log('我是' + this.nickname + '，我' + this.age + '岁了');
    }
};
var sayHello = xiaoming.sayHello;	// 将函数“提”出来，单独存为变量
sayHello();		// 直接圆括号调用这个函数，而不是对象打点调用了

// 我是undefined，我undefined岁了
```

## 4.4 函数的上下文由调用方式决定

同一个函数，用不同的形式调用它，则函数的上下文不同。

- 情形1：对象打点调用函数，函数中的 this 指代这个打点的对象

```javascript
xiaoming.sayHello();
```

- 情形2：圆括号直接调用函数，函数中的 this 指代 window 对象

```javascript
var sayHello = xiaoming.sayHello;
sayHello();
```

【案例】

```javascript
var obj = {
    a: 1,
    b: 2,
    fn: function() {
        console.log(this.a + this.b);
        /*
        请问，这里的两个 this 指代什么？
        正确答案：不知道！
        原因：函数只有被调用时，它的上下文才能被确定。
    }
};

obj.fn();	//3

var fn = obj.fn;	// 提炼的是函数本身，而不是函数执行结果，所以不能加()
fn();		//NaN
```

# 五、上下文规则

## 5.1 函数的上下文由调用函数的方式决定

函数的上下文（this 关键字）由调用函数的方式决定，function 是“运行时上下文”策略。

函数如果不调用，则不能确定函数的上下文。

## 5.2 规则1

规则1：对象打点调用它的方法函数，则函数的上下文是这个打点的对象。

```javascript
对象.方法()
```

【规则1题目举例 - 第1小题】 

```javascript
function fn() {
    console.log(this.a + this.b);
}

var obj = {
    a: 66,
    b: 33,
    fn: fn
};

obj.fn();	// 99	
// 构成 对象.方法() 的形式，适用规则1
```

【规则1题目举例 - 第2小题】

```javascript
var obj1 = {
    a: 1,
    b: 2,
    fn: function() {
        console.log(this.a + this.b);
    }
};

var obj2 = {
    a: 3,
    b: 4,
    fn: obj1.fn		// obj2中的fn方法指向了obj1中的fn方法，即：fn方法在内存中只有一份但是被两次指向
};

obj2.fn();	// 7
// 构成 对象.方法() 的形式，使用规则1
```

【规则1题目举例 - 第3小题】

```javascript
function outer() {
    var a = 11;
    var b = 22;
    // 返回一个对象
    return {
        a: 33,
        b: 44,
        fn: funtion() {
        	console.log(this.a + this.b);
    	}
    };
}

outer().fn();	// 77
// 构成 对象.方法() 的形式，适用规则1
```

【规则1题目举例 - 第4小题】

```javascript
funtion fun() {
    console.log(this.a + this.b);
}
var obj = {
    a: 1,
    b: 2,
    c: [{
        a: 3,
        b: 4,
        c: fun
    }]
};
var a = 5;
obj.c[0].c();	// 7	
// 构成 对象.方法()的形式，适用规则1
```

## 5.3 规则2

规则2：圆括号直接调用函数，则函数的上下文是 window 对象。

```javascript
函数()
```

【规则2题目举例 - 第1小题】

```javascript
var obj1 = {
    a: 1,
    b: 2,
    fn: function() {
        console.log(this.a + this.b);
    }
};

var a = 3;
var b = 4;

var fn = obj1.fn;	// 将函数的引用交给变量存储
fn();	// 7
// 构成函数()的形式，适用规则2
```

【规则2题目举例 - 第2小题】

```javascript
function fun() {
    return this.a + this.b;
}
var a = 1;
var b = 2;
var obj = {
    a: 3,
    b: fun(),	// fun函数的执行结果赋给b，适用规则2
    fun: fun	// fun函数的引用
};
var resulr = obj.fun();		// 适用规则1
console.log(result);	// 6
```

## 5.4 规则3

规则3：数组（类数组对象）枚举出函数进行调用，上下文是这个数组（类数组对象）。

```javascript
数组[下标]()
```

【规则3题目举例 - 第1小题】

```javascript
var arr = ['A', 'B', 'C', function() {
    console.log(this[0]);
}];
arr[3]();	// A
// 适用规则3
```

【类数组对象】

什么是类数组对象：所有键名为自然数序列（从0开始），且有 length 属性的对象。

arguments 对象是最常见的类数组对象，它是函数的实参列表。

【规则3题目举例 - 第2小题】

```javascript
function fun() {
    arguments[3]();	// 适用规则3
}
fun('A', 'B', 'C', function() {
    console.log(this[1]);
});
// B
```

## 5.5 规则4

规则4：IIFE 中的函数，上下文是 window 对象。

```javascript
(function() {
 })();
```

【规则4题目 - 举例】

```javascript
var a = 1;
var obj = {
    a: 2,
    fun: (funciton() {
          var a = this.a;
          return function() {
    	  	  console.log(a + this.a);	// 1 + 2
		  }
     })()	// 适用规则4
};
obj.fun();	// 适用规则1
// 3
```

## 5.6 规则5

规则5：定时器、延时器调用函数，上下文是 window 对象。

```javascript
setInterval(函数, 时间);
setTimeout(函数, 时间);
```

【规则5题目举例 - 第1小题】

```javascript
var obj = {
    a: 1,
    b: 2,
    fun: funciton() {
    	console.log(this.a + this.b);
	}
}
var a = 3;
var b = 4;

setTimeout(obj.fun, 2000);	// 7
// 适用规则5
```

【规则5题目举例 - 第2小题】

```javascript
var obj = {
    a: 1,
    b: 2,
    fun: function() {
        console.log(this.a + this.b);
    }
}
var a = 3;
var b = 4;
setTimeout(funciton() {
		obj.fun(); // 适用规则1，原因：此时setTimeout没有直接调用obj.fun()，而是直接调用了匿名函数
}, 2000);
```

## 5.7 规则6

规则6：事件处理函数的上下文是绑定事件的 DOM 元素。

```javascript
DOM元素.onclick = function() {
};
```

【规则6 - 小案例1】

请实现效果：点击哪个盒子，哪个盒子就变红，要求使用同一个事件处理函数实现。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            float: left;
            border: 1px solid #000;
            margin-right: 10px;
        }
    </style>
</head>
<body>
<div id="box1"></div>
<div id="box2"></div>
<div id="box3"></div>

<script>
    function setColorToRed() {
        this.style.backgroundColor = 'red';
    }

    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');

    box1.onclick = setColorToRed;
    box2.onclick = setColorToRed;
    box3.onclick = setColorToRed;
</script>
</body>
</html>
```

【规则6 - 小案例2】

请实现效果：点击哪个盒子，哪个盒子在 2000 毫秒后就变红，要求使用同一个事件处理函数实现。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            float: left;
            border: 1px solid #000;
            margin-right: 10px;
        }
    </style>
</head>
<body>
<div id="box1"></div>
<div id="box2"></div>
<div id="box3"></div>

<script>
    function setColorToRed() {
        // 备份上下文（因为：定时器、延时器调用函数，上下文是 window 对象，所以要先备份上下文，用self或that或_this）
        var self = this;
        setTimeout(function () {
            self.style.backgroundColor = 'red';
        }, 2000);
    }

    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');

    box1.onclick = setColorToRed;
    box2.onclick = setColorToRed;
    box3.onclick = setColorToRed;
</script>
</body>
</html>
```

# 六、call和apply

## 6.1 call和apply能指定函数的上下文

```javascript
function sum() 
    alert(this.chinese + this.math + this.english);
}

var xiaoming = {
    chinese: 80,
    math: 95,
    english: 93
};
```

`sum.call(xiaoming);` 或 `sum.apply(xiaoming);`

- `函数.call(上下文);`
- `函数.apply(上下文);`

> 当然这样也行：
>
> ```javascript
> function sum() {
>     alert(this.chinese + this.math + this.english);
> }
> 
> var xiaoming = {
>     chinese: 80,
>     math: 95,
>     english: 93,
>     sum: sum
> };
> 
> xiaoming.sum();
> ```

## 6.2 call和apply的区别

```javascript
function sum(b1, b2) {
    alert(this.c + this.m + this.e + b1 + b2);
}

var xiaoming = {
    c: 80,
    m: 95,
    e: 93
};

sum.call(xiaoming, 5, 3);		// call 要用逗号罗列参数
sum.apply(xiaoming, [5, 3]);	// apply 要把参数写到数组中
```

## 6.3 到底使用call还是apply？

```javascript
function fun1() {
    fun2.apply(this, arguments);	// arguments是数组，只能用apply
}

function fun2(a, b) {
    alert(a + b);
}

fun1(33, 44);	// 77
```

## 6.4 上下文规则总结

| 规则              | 上下文        |
| ----------------- | ------------- |
| `对象.函数()`     | 对象          |
| `函数()`          | window        |
| `数组[下标]()`    | 数组          |
| `IIFE`            | window        |
| `定时器`          | window        |
| `DOM事件处理函数` | 绑定DOM的元素 |
| `call和apply`     | 任意指定      |

# 七、用new操作符调用函数

现在，我们学习一种新的函数调用方式：`new 函数()`

你可能知道 new 操作符和“面向对象”息息相关，但是现在我们先不探讨它的“面向对象”意义，而是先把用 new 调用函数的执行步骤和它上下文弄清楚。

## 7.1 用new调用函数的四步走

JS 规定，使用 new 操作符调用函数会进行“四步走”：

1. 函数体内会自动创建出一个空白对象
2. 函数的上下文（this）会指向这个对象
3. 函数体内的语句会执行
4. 函数会自动返回上下文对象，即使函数没有 return 语句

## 7.2 四步走详解

```javascript
function fun() {
    this.a = 3;
    this.b = 5;
}

var obj = new fun();
console.log(obj);
```

【第一步：函数体内会自动创建出一个空白对象】

![](https://img-blog.csdnimg.cn/734f6064b1274f0ba011d8a7a8e7dfd4.png)

【第二步：函数的上下文（this）会指向这个对象】

![](https://img-blog.csdnimg.cn/2346ce01c7264015a9890fd2317e01e1.png)

【第三步：执行函数体中的语句】

> 之后这个对象就不再是空对象了。

![](https://img-blog.csdnimg.cn/bf74b71cb8f24789b0c9e4baee7a8704.png)

【第四步：函数会自动返回上下文对象，即使函数没有 return 语句】

> 执行结果为：{a: 3, b: 5}

![](https://img-blog.csdnimg.cn/3aab18d93cc04d0a82ce3db482135cd1.png)

【案例】

```javascript
function fun() {
    this.a = 3;
    this.b = 6;
    var m = 34;
    if (this.a > this.b) {
        this.c = m;
    } else {
        this.c = m + 2;
    }
}

var obj = new fun();
console.log(obj);

// fun { a: 3, b: 6, c: 36 }
```

## 7.3 上下文规则总结

| 规则              | 上下文           |
| ----------------- | ---------------- |
| `对象.函数()`     | 对象             |
| `函数()`          | window           |
| `数组[下标]()`    | 数组             |
| `IIFE`            | window           |
| `定时器`          | window           |
| `DOM事件处理函数` | 绑定DOM的元素    |
| `call和apply`     | 任意指定         |
| `用new调用函数`   | 秘密创建出的对象 |

# 八、构造函数

## 8.1 什么是构造函数

我们将之前书写的函数进行一下小改进：

```javascript
// 接收三个参数
function People(name, age, sex) {
    // this上绑定同名属性
    this.name = name;
    this.age = age;
    this.sex = sex;
}

// 传入三个参数
var xiaoming = new People('小明', 12, '男');
var xiaohong = new People('小红', 10, '女');
var xiaogang = new People('小刚', 13, '男');

console.log(xiaoming);	// People { name: '小明', age: 12, sex: '男' }
console.log(xiaohong);	// People { name: '小红', age: 10, sex: '女' }
console.log(xiaogang);	// People { name: '小刚', age: 13, sex: '男' }
```

- 用 new 调用一个函数，这个函数就被称为“构造函数”，任何函数都可以是构造函数，只需要用 new 调用它
- 顾名思义，构造函数用来“构造新对象”，它内部的语句将为新对象添加若干属性和方法，完成对象的初始化
- 构造函数必须用 new 关键字调用，否则不能正常工作，正因如此，开发者约定构造函数命名时首字母要大写

> 注意：一个函数是不是构造函数，要看它是否用 new 调用，而至于名称首字母大写，完全是开发者的习惯约定。

## 8.2 如果不用new调用构造函数

```javascript
function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

People('小明', 12, '男');
People('小红', 10, '女');
People('小刚', 13, '男');
```

## 8.3 构造函数中的this不是函数本身

> 四步走原理！！！

```javascript
function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var xiaoming = new People('小明', 12, '男');
var xiaohong = new People('小红', 10, '女');
var xiaogang = new People('小刚', 13, '男');
```

## 8.4 尝试为对象添加方法 

```javascript
function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sayHello = function() {
        console.log('我是' + this.name + '，我' + this.age + '岁了');
    };
}

var xiaoming = new People('小明', 12, '男');
var xiaohong = new People('小红', 10, '女');
var xiaogang = new People('小刚', 13, '男');
xiaoming.sayHello();
xiaohong.sayHello();
xiaogang.sayHello();

/*
我是小明，我12岁了
我是小红，我10岁了
我是小刚，我13岁了
*/
```

# 九、类与实例

![](https://img-blog.csdnimg.cn/0c5272275c614edaa9bb5698780bffff.png)

【类好比是“蓝图”】

如同“蓝图”一样，类只描述对象会拥有哪些属性和方法，但是并不具体指明属性的值。

【实例是具体的对象】

![](https://img-blog.csdnimg.cn/ac0233152c1c4be08ac08fefa0a77e73.png)

【构造函数和“类”】

- Java、C++等是“面向对象”语言
- JavaScript是“基于对象”语言
- JavaScript中的构造函数可以类比于OO语言中的“类”，写法的确类似，但和真正OO语言还是有本质不同，在后续课程还将看见JS和其他OO语言完全不同的、特有的原型特性。

# 十、prototype和原型链查找

## 10.1 什么是prototype

任何函数都有 prototype 属性，prototype 是英语“原型”的意思。

prototype 属性值是个对象，它默认拥有 constructor 属性指回函数。

![](https://img-blog.csdnimg.cn/52a1d4d63a1f469eb4c3ef508e2de141.png)

普通函数来说的 prototype 属性没有任何用处，而构造函数的 prototype 属性非常有用。

构造函数的 prototype 属性是它的实例的原型。

## 10.2 构造函数的prototype是实例的原型

![](https://img-blog.csdnimg.cn/2d1fb514299f49e69428be08ea7d9b07.png)

## 10.3 原型链查找

JavaScript 规定：实例可以打点访问它的原型的属性和方法，这被称为“原型链查找”。

![](https://img-blog.csdnimg.cn/0f7e64a1e8e9413baac44796047887a2.png)

![](https://img-blog.csdnimg.cn/332b6b06736d4a59b6f2df9a7f42d52e.png)

![](https://img-blog.csdnimg.cn/eb7937d314024951922741fe0b0a3d97.png)

## 10.4 hasOwnProperty

hasOwnProperty 方法可以检查对象是否真正“自己拥有”某属性或者方法。

```javascript
xiaoming.hasOwnProperty('name');		// true
xiaoming.hasOwnProperty('age');			// true
xiaoming.hasOwnProperty('sex');			// true
xiaoming.hasOwnProperty('nationality');	// false
```

## 10.5 in

in 运算符只能检查某个属性或方法是否可以被对象访问，不能检查是否是自己的属性或方法。

```javascript
'name' in xiaoming			// true
'age' in xiaoming			// true
'sex' in xiaoming			// true
'nationality' in xiaoming	// true
```

# 十一、在prototype上添加方法

## 11.1 之前，我们将方法写到了对象身上

在之前的课程中，我们把方法都是直接添加到实例身上：

```javascript
function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sayHello = function() {	// 方法直接添加到实例身上
        console.log('我是' + this.name);
    }
}
```

![](https://img-blog.csdnimg.cn/faf93b02816b4912a72ca2f09ad4760a.png)

把方法直接添加到实例身上的缺点：每个实例和每个实例的方法函数都是内存中不同的函数，造成了内存的浪费。

解决办法：将方法写到 prototype 上。

## 11.2 方法要写到 prototype 上

![](https://img-blog.csdnimg.cn/a2ddf61a4d254ed59ee4a5b34b23001a.png)

```javascript
function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

People.prototype.sayHello = function() {
    console.log('我是' + this.name);
}

People.prototype.sleep = function() {
    console.log(this.name + '开始睡觉.zzzz');
}
```

# 11.3 原型链的终点

【原型链的终点】

![](https://img-blog.csdnimg.cn/29344d84587445a3a94a354a95e998d0.png)

【关于数组的原型链】

![](https://img-blog.csdnimg.cn/4605f0ce53db4bf6a87dbb9032487e24.png)

