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

obj.fn();	// 构成对象.方法() 的形式，适用规则1
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
    fn: obj1.fn
};

obj.fn();	// 构成对象.方法()的形式，使用规则1
```

【规则1题目举例 - 第3小题】

```javascript
function outer() {
    var a = 11;
    var b = 22;
    return {
        a: 33,
        b: 44,
        fn: funtion() {
        	console.log(this.a + this.b);
    	}
    };
}

outer().fn();	// 构成对象.方法() 的形式，适用规则1
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
obj.c[0].c();	// 构成对象.方法()的形式，适用规则1
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

var fn = obj1.fn;
fn();	// 构成函数()的形式，适用规则2
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
    b: fun(),	// 	适用规则2
    fun: fun
};
var resulr = obj.fun();		// 适用规则1
console.log(result);
```

## 5.4 规则3

规则3：数组（类数组对象）枚举出函数进行调用，上下文是这个数组（类数组对象）。

```javascript
数组[下标]()
```

【规则3题目举例 - 第1小题】

```javascript
var arr = ['A' , 'B', 'C', function() {
    console.log(this[0]);
}];
arr[3]();	// 适用规则3
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
    	  	  console.log(a + this.a);
		  }
     })()	// 适用规则4
};
obj.fun();	// 适用规则1
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

setTimeout(obj.fun, 2000);	// 适用规则5
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
		obj.fun(); // 适用规则1
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

【规则6 - 小案例2】

请实现效果：点击哪个盒子，哪个盒子在 2000 毫秒后就变红，要求使用同一个事件处理函数实现。

