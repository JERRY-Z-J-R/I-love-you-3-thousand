# 【ES6之Class类】

> 原创内容，转载请注明出处！

# 一、认识Class

类：人类、狗类

实例、对象：中国人、藏獒

> 类可以看作是对象的模板，用一个类可以创建出许多不同的对象。

# 二、Class的基本用法

`class Person{}`

注意：类名 Person 后没有 `()`，同时 `{}` 后也不应该加 `;`。

每一个类中都包含一个构造方法，这个构造方法可以手动写出来，也可以不写，如果手动不写那么浏览器也会默认自动添加。

```javascript
class Person {
    // 实例化时执行构造方法，所以必须有构造方法，但可以不写出来
    constructor() {
        console.log("构造方法自动执行");
    }
}

// 实例化一个 Person 对象（必须采用 new 语法）
const p = new Person();		// 构造方法自动执行
```

通常情况下，我们会在构造函数中进行对象属性初始化。

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const zjr = new Person('jerry', 18);
console.log(zjr.name);		// jerry
console.log(zjr.age);		// 18
```

在构造函数中，我们确实可以添加方法，但是不建议这么做，因为这样的处理方式会导致每一个实例的对象中都单独保存了一份该方法，造成内存的浪费。

我们应该将方法写在 class 类中，这样所有的对象都共享同一个方法。

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.speak = () => {
            console.log(this.name + " say Hi!");
        }
    }
}

const zjr = new Person('jerry', 18);
zjr.speak();	// jerry say Hi!

const lxy = new Person('Dragon', 18);
lxy.speak();	// Dragon say Hi!

console.log(zjr.speak === lxy.speak);	// false
```

```javascript
// 一般我们把属性定义在构造方法中，把方法定义在类中
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 方法定义在类中的写法
    speak() {
        console.log(this.name + " say Hi!");
    }
}

const zjr = new Person('jerry', 18);
zjr.speak();	// jerry say Hi!

const lxy = new Person('Dragon', 18);
lxy.speak();	// Dragon say Hi!

console.log(zjr.speak === lxy.speak);	// true
```

# 三、Class与构造函数

将上述的 Class 改造为之前学习过的构造函数：

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.speak = function() {
    console.log(this.name + " sya Hi!");
}

const zjr = new Person('jarry', 18);
zjr.speak();	// jerry say Hi!
```

> Class 与 构造函数 的关系：
>
> 在 ES6 之前，要在 JavaScript 中实现面向对象编程，便要借助于构造函数。
>
> 在 ES6 之后，实现面向对象编程便可以使用 Class。
>
> 推荐：以后的面向对象编程请优先使用 Class。
>
> > Class 的底层实现机制还是 构造函数 的再次封装！
> >
> > 例如：`console.log(typeof Person);` 结果为：function，所以 Class 的底层实际上还是构造函数。
> >
> > 例如：`console.log(Person.prototype.speak);` 结果可以得到 speak 函数，所以 Class 底层实际上是构造函数，且依旧有原型。
> >
> > 甚至，我们可以给 Person 的原型上添加方法，依旧可以达到相应的效果，但是极不推荐这样做！

# 四、Class的两种定义形式

## 4.1 声明形式

```javascript
class Person {
    constructor() {
        ...
    }
    speak() {
        ...
    }
}
```

## 4.2 表达式形式

```javascript
// 匿名 class 赋给一个变量
const Person = class {
    constructor() {
        ...
    }
    speak() {
        ...
    }
}
```

由于匿名函数可以实现立即执行函数，所以我们模仿立即执行函数的方式也可以实现立即执行类。

```javascript
new (class {
    constructor() {
        console.log("constructor");		// constructor
    }
})();
```

# 五、实例属性、静态方法和静态属性

## 5.1 实例属性

我们之前将类的属性利用 this 的方式写在了构造方法里，把类的方法写在了 class 里。

现在我们还可以把类的属性和方法写在 class 里，然后在构造方法里进行值的修改，或者是提供一个 get set 方法来间接控制变量。

```javascript
class Person {
    _age = 0;        // 类属性之前不能加 var 或 let
    _sex = 'male';   // 类属性被赋予的值相当于就是属性的默认值
    
    /*
    // get、set 还可以用这样的格式来写
    // 这里其实本质上就是定义一个类属性，只不过这个属性指向一个函数而已
    getSex = function() {
        return this._age;
    };
    */

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get sex() {
        return this._sex;
    }

    set sex(value) {
        this._sex = value;
    }

    constructor(age, sex) {
        this._age = age;
        this._sex = sex;
    }

    // 类的方法不能用 function 关键字
    speak() {
        console.log(this._age + " " + this._sex);
    }
}
```

## 5.2 静态方法

对于类的普通方法，我们要调用它，必须先实例化对象，然后再用对象来 “打点” 调用。

如果我们要想直接利用类来调用，那么就要在类中创建静态方法。

```javascript
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    
    // 除了类的静态方法之外，是可以定义类的同名普通方法的
    speak() {
        console.log("说话");
    }
    
    static speak() {
        console.log("人类可以说话")
    }
}

// 一个是类的方法（静态方法），一个是实例对象的方法（普通方法），所以不会冲突
Person.speak();		// 人类可以说话
const p = new Person('Alex', 18);
p.speak();			// 说话
```

静态方法的 this 指向问题：静态方法的 this 指向这个类本身。

注意：普通方法 this 指向具体的对象，而静态方法的 this 指向类本身。

```javascript
class Person {
    // 静态属性
    static _name = "user";
    static _age = 18;

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    static test() {
        console.log("静态方法");
    }

    // 静态方法
    static readme() {
        // 静态方法中的 this 指向 Person 类本身
        // 并且静态方法的 this 只能引用到类的静态属性及静态方法
        console.log(this._name + " " + this._age);
        this.test();
    }
}

Person.readme();
console.log(Person._name);
/*
user 18
静态方法
user
*/

/*
再次注意：静态方法中只能使用类的静态属性与静态方法
*/
```

## 5.3 静态属性

静态属性也就是类的属性，依旧使用 static 关键字。

注意：静态属性 static 的定义方法目前只是一个提案，目前不推荐这样写！某些浏览器不支持。

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    
    // 目前不推荐 static 这种写法，因为还只是一个提案
    // static version = "1.0";
    
    // 推荐利用静态方法来间接实现静态属性
    static getVersion() {
        return "1.0";
    }
}
```

# 六、私有属性和方法

JavaScript 本身没有私有属性和方法，所以我们利用其它方式来实现私有化。

```javascript
// 方式一：在属性开头加上 _ 表示私有
class Person {
    constructor(name) {
        this._name = name;
    }
    
    _speak() {
        console.log("speak");
    }
    
    getName() {
        return this._name;
    }
}

const p = new Person('Alex');
console.log(p.name);	// 报错！
// console.log(p._name);	// Alex，但是这样做就无意义了，违背了私有化的初衷

/*
注意：加下划线的方式实际上只是行业中约定俗成的一种方法，
我们依旧可以通过 p._name，来访问，但是这样做就无意义了！所以这种方法的使用纯靠程序员自觉。
*/
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>Class私有属性</title>
</head>
<body>
<script>
    // 方式二：将私有属性和方法移出类（使用模块）
    // 由于我们还没有学习过模块，所以我们目前用立即执行函数（闭包原理）来模拟
    (function () {
        let name = "";
        let speak = function () {
            console.log("speak");
        }

        class Person {
            constructor(username) {
                name = username;
            }

            getName() {
                return name;
            }

            runSpeak() {
                speak();
            }
        }

        // 将类添加到全局作用域中暴露
        window.Person = Person;
    })();

    const p = new Person('Alex');
    console.log(p.name);	// 报错
    console.log(p.getName());	// Alex
    p.runSpeak();	// speak
</script>
</body>
</html>
```

# 七、extends

## 7.1 子类继承父类

```javascript
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.say = function() {
            console.log("say");
        };
    }
    speak() {
        console.log("speak");
    };
    static speak() {
        console.log("static speak");
    };
}
Person.version = "1.0";

// 子类继承
class Programmer extends Person {
    constructor(name, sex) {
        // 调用父类的构造方法
        super(name, sex);
    }
}

// 测试
const zjr = new Programmer('jerry', '男');
console.log(zjr.name);				// jerry
console.log(zjr.sex);				// 男
zjr.say();						    // say
zjr.speak();					    // speak
Programmer.speak();				    // static speak
console.log(Programmer.version);	// 1.0 
// 由此可见，子类集成了父类所以属性及方法！
```

## 7.2 改写继承的属性或方法

```javascript
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.say = function () {
            console.log("say");
        };
    }

    speak() {
        console.log("speak");
    };

    static speak() {
        console.log("static speak");
    };
}

Person.version = "1.0";

// 子类继承
class Programmer extends Person {
    constructor(name, sex, age) {
        // 调用父类的构造方法，super 必须在子类构造方法第一行写
        super(name, sex);
        // 改写父类属性
        this.name = 'zjr';
        // 新增子类属性
        this.age = age;
    }

    // 改写父类属性
    speak() {
        console.log("子类 speak");
    }

    // 新增子类属性
    hi() {
        console.log("Hi!");
    }
}

const zjr = new Programmer('jerry', '男', 18);
console.log(zjr.name);		// zjr
console.log(zjr.sex);		// 男
console.log(zjr.age);		// 18
zjr.speak();			    // 子类 speak
zjr.say();				    // say
```

# 八、super

## 8.1 作为函数调用

```javascript
// super 作为函数使用，代表了父类的构造方法，只能用在子类的构造方法中，用在其他地方就会报错
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Programmer extends Person {
    constructor(name, sex) {
        super(name, sex);
        // super 虽然代表了父类的构造方法，但是内部的 this 指向子类的实例
        // 当然 super 中的 this 是隐含的，不能显示的写出来，否则会报错！
    }
}

const zjr = new Programmer('jerry', '男');
```

## 8.2 作为对象使用

```javascript
// super 作为对象使用，代表了父类的原型对象 Person.prototype
// 所以我们可以通过 super 访问父类的方法了
class Person {
    name = "Person";

    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        console.log("speak");
    }

    static speak() {
        console.log("static speak");
        console.log(this.name);
    }
}

class Programmer extends Person {
    name = "Programmer";

    constructor(name, sex) {
        super(name, sex);
        // 在构造方法中使用
        super.speak();
    }

    speak() {
        // 在一般方法中使用
        super.speak();
        console.log("子类 speak");
    }

    static speak() {
        // 在静态方法中使用
        // 指向父类，而不是父类的原型对象
        // 原因是：我们此时调用的是父类的方法（静态方法属于父类），而不是父类原型对象上的方法
        super.speak();
        console.log("重写 static speak");
        // 通过 super 调用父类的方法时，方法内部的 this 指向当前的子类，而不是子类的实例
    }
}

const zjr = new Programmer('jerry', '男');
zjr.speak();
Programmer.speak();

/*
speak
speak
子类 speak
static speak
Programmer
重写 static speak
*/

// 注意：super.name 是 undefined！
// 因为 super 作为对象是表示父类的原型对象 Person.prototype，而原型对象上并没有父类属性
```

