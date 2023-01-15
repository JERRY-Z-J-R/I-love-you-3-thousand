<template>
    <div class="demo">
        <h2 class="title">学生姓名：{{ name }}</h2>
        <h2 class="atguigu">学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男'
        };
    }
};
</script>

<!-- scoped：让样式在局部生效，防止冲突 -->
<!-- 使用 CSS 预编译 Sass(SCSS) -->
<!-- Sass 原本的文件后缀是 .sass，后来为了使其语法更符合前端开发习惯，所以对语法重新进行了设计，重新设计的语法必须使用 .scss 文件后缀 -->
<!-- 安装 -->
<!-- npm install sass sass-loader --save-dev -->
<!-- sass-loader 是 Webpack 的 Sass 加载器，底层具体的编译器实现是依靠 ruby-sass（已废弃）/ node-sass / dart-sass（官方推荐），通俗来说就是前者依赖后者！-->
<!-- dart-sass 官网将其编译为了纯 js 版本发布与 npm 上，安装：npm i sass -->
<!-- node-sass 体积较大，且速度不如 dart-sass，官方已经只做维护，不做更新，不推荐使用！安装：npm i node-sass -->
<style lang="scss" scoped>
$color1: pink;
$color2: aquamarine;

.demo {
    background-color: $color1;
    .title {
        color: $color2;
    }
    .atguigu {
        font-size: 40px;
    }
}
</style>
