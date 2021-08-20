# 【Emmet语法】前端小抄(4)

> 本学习笔记是个人对 Pink 老师课程的总结归纳，转载请注明出处！

`Emmet` 语法的前身是 `Zen coding`，它使用缩写，来提高 `html/css` 的编写速度,，`VSCode` 内部已经集成该语法。

- 快速生成 HTML 结构语法
- 快速生成 CSS 样式语法

## 快速生成HTML结构语法

- 生成标签直接输入标签名按 <kbd>tab</kbd> 键即可，比如 `div` 然后 <kbd>tab</kbd> 键， 就可以生成 `<div></div>`
- 如果想要生成多个相同标签加上 `*` 就可以了，比如 `div*3` 就可以快速生成 3 个 `div`
- 如果有父子级关系的标签，可以用 `>` 比如 `ul>li` 就可以了
- 如果有兄弟关系的标签，用 `+` 就可以了 比如 `div+p`
- 如果生成带有 `类名` 或者 `id` 名字的标签， 直接写 `标签.demo` 或者 `标签#demo` 再按下 tab 键就可以了
- 如果生成的事物有顺序，可以用自增符号 `$`
- 如果想要在生成的标签内部写内容可以用 `{}` 表示

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emmet语法之快速生成HTML结构语法</title>
</head>

<body>
    <!-- div+Tab -->
    <div></div>
    <!-- table+Tab -->
    <table></table>
    <!-- div*6+Tab -->
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <!-- p*4+Tab -->
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <!-- ul>li+Tab -->
    <ul>
        <li></li>
    </ul>
    <!-- div>span+Tab -->
    <div><span></span></div>
    <!-- div+p+Tab -->
    <div></div>
    <p></p>
    <!-- .nav+Tab -->
    <div class="nav"></div>
    <!-- #banner+Tab -->
    <div id="banner"></div>
    <!-- p.one+Tab -->
    <p class="one"></p>
    <!-- span.gray+Tab -->
    <span class="gray"></span>
    <!-- ul>li#two+Tab -->
    <ul>
        <li id="two"></li>
    </ul>
    <!-- .demo*5+Tab -->
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <!-- .demo$*5+Tab -->
    <div class="demo1"></div>
    <div class="demo2"></div>
    <div class="demo3"></div>
    <div class="demo4"></div>
    <div class="demo5"></div>
    <!-- div{pink老师不是gay}+Tab -->
    <div>pink老师不是gay</div>
    <!-- div{他不喜欢男人}*6+Tab -->
    <div>他不喜欢男人</div>
    <div>他不喜欢男人</div>
    <div>他不喜欢男人</div>
    <div>他不喜欢男人</div>
    <div>他不喜欢男人</div>
    <div>他不喜欢男人</div>
    <!-- div{$}*6+Tab -->
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</body>

</html>
```

## 快速生成CSS样式语法

CSS 基本采取简写形式即可。

- 比如 `w200` 按 <kbd>tab</kbd> 可以 生成 `width: 200px;`
- 比如 `lh26px` 按 <kbd>tab</kbd> 可以生成 `line-height: 26px;`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emmet语法之快速生成CSS样式语法</title>
    <style>
        .one {
            /* tac+Tab */
            text-align: center;
            /* ti2e+Tab */
            text-indent: 2em;
            /* w+Tab */
            /* width: ; */
            /* h+Tab */
            /* height: ; */
            /* w24+Tab */
            width: 24px;
            /* h24+Tab */
            height: 24px;
            /* tdn+Tab */
            text-decoration: none;
        }
    </style>
</head>

<body>

</body>

</html>
```

## 快速格式化代码

`VSCode` 快速格式化代码：<kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd>。