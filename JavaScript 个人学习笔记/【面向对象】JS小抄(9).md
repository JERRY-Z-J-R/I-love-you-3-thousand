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
}
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

可以用“点语法”访问对象中指定键的值

```javascript
xiaoming.name;		// '小明'
xiaoming.age;		// 12
xiaoming.hobbys;	// ['足球', '游泳', '编程']
```

如果属性名不符合 JS 标识符命名规范，则必须用方括号的写法来访问

```javascript
xiaoming['favorite-book'];	// '舒克和贝塔'
```

如果属性名以变量形式存储，则必须使用方括号形式

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

