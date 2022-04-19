# 【JS流程控制】

> 原创内容，转载请注明出处！

# 一、if 条件语句

```javascript
if (测试条件) {  
    
}
```

```javascript
if (测试条件) { 
    
} else {
    
}
```

```javascript
if (测试条件) {
    
} else if (测试条件) {
    
} else {
    
}
```

- 条件语句可以嵌套（最好不要嵌套超过三层）
- if-elseif-else 语句注意条件的区间（下一级条件的成立建立在上一级条件不成立的时候）

# 二、switch 选择语句

```javascript
switch (变量/表达式) {
    case 常量值/变量/表达式:
        语句;
        break;
    case 常量值/变量/表达式:
        语句;
        break;
    default:
        语句;
}
```

- 与其他高级语言不同，在 JS 中 case 后不仅仅只能跟常量值，还可以跟变量和表达式
- 注意 switch 语句的 “开关” 特性（遇见 break 才跳出 switch，否则直接进入下一个 case），合理运用好 break（例如不加 break 可以实现多条 case 共用同一个语句体）
- default 语句不是必须的

# 三、三元运算符

`条件表达式 ? 表达式1 : 表达式2;`

当条件表达式为真时执行表达式1并返回结果，否则执行表达式2并返回结果。

【三元运算符的用途】

根据某个条件是否成立，在两个不同值中选择变量的值。

```javascript
var age = 24;
var type = age >= 18 ? '成年人' : '未成年人';
alert(type);
```

# 四、for 循环语句

```javascript
for (初次表达式; 判断条件; 历次表达式) {
    
}
```

在 JS 中，支持在 “初次表达式” 中声明变量并赋值。

【执行过程】

- 先执行 “初次表达式”（只唯一执行一次）
- 判断条件（若条件为 false，退出循环）
- 执行语句块
- 执行 “历次表达式”
- 判断条件（若条件为 false，退出循环）
- 执行语句块
- 执行 “历次表达式”
- 判断条件（若条件为 false，退出循环）
- ……

【for ... in 循环】

`for` 循环的一个变体是 `for ... in` 循环，它可以把一个对象的所有属性依次循环出来：

```javascript
var o = {
    name: "Jerry",
    age: 20,
    city: "Beijing"
};

for (var key in o) {
    console.log(key + ": " + o[key]);
}
/*
"name: Jerry"
"age: 20"
"city: Beijing"
*/
```

要过滤掉对象继承的属性，用 `hasOwnProperty()` 来实现：

```javascript
var o = {
    name: "Jerry",
    age: 20,
    city: "Beijing"
};

for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key + ": " + o[key]);
    }
}
/*
"name: Jerry"
"age: 20"
"city: Beijing"
*/
```

由于数组也是对象，而它的每个元素的索引被视为对象的属性，因此，`for ... in` 循环可以直接循环出数组的索引：

```javascript
var a = ['A', 'B', 'C'];

for (var i in a) {
    console.log(i + ": " + a[i]);
}
/*
0: A
1: B
2: C
*/
```

请注意，`for ... in` 对数组的循环得到的索引是 `String` 而不是 `Number`。

# 五、while 循环语句

```javascript
while (判断条件) {
    
}
```

```javascript
do {
    
} while (判断条件);
```

在 while 中，先判断条件，条件满足时再执行语句体。

在 do-while 中，do 内的语句块先执行一次，再判断条件。

# 六、break 和 continue

`break;`：立即终止本层次循环。

`continue;`：立即跳过本层次循环，提前进入本层次的下一次循环。

# 七、label 表达式

`label` 是一个标签，可以使用 `break` 或 `continue` 使程序跳转到这个标签处执行（执行：`break` 或 `continue`），从而改变程序的执行流程。

```javascript
// 注意：label 不是一个特定的关键字，可以随便取名
label: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i + j === 6) {
            console.log("j=" + j);
            break label;
        }
    }
    console.log("i=" + i);
}
/*
j=6
*/
```

```javascript
label: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i + j === 6) {
            console.log("j=" + j);
            continue label;
        }
    }
    console.log("i=" + i);
}
/*
j=6
j=5
j=4
j=3
j=2
j=1
j=0
i=7
i=8
i=9
*/
```

```javascript
// label + break 配合可以用在循环外
label: {
    if (1 > 0) {
        console.log("1");
        break label;
    }
    console.log("2");
}
/*
1
*/
```

# 八、初识算法

算法：解决方案的准确而完整的描述！

- 输入
- 输出
- 有穷行
- 确定性
- 可行性

> 好的算法还要满足：可读性、健壮性！

