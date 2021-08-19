---
title: 这是一段有趣的代码——玛卡巴卡
date: 2021-01-08 23:47:06
categories:
- [C]
tags:
- C
- 有趣
cover: https://img-blog.csdnimg.cn/20210317095647809.gif
---

# 【这是一段有趣的代码——玛卡巴卡】

```c
/*
**  JERRY_Z. 2020/1/8 love.c
*/
#include <stdio.h>

int main()
{
    char head_file[18] = {'#','i','n','c','l','u','d','e',' ',\
                         '<','s','t','d','i','o','.','h','>'};
    char main_function[10] = {'i','n','t',' ','m','a','i','n','(',')'};
    char love_code[22] = {'p', 'r','i','n','t','f','(','"','H','e','l',\
                        'l','o',' ','W','o','r','l','d','"',')',';'};
    char return_int[9] = {'r','e','t','u','r','n',' ','0',';'};

    printf("\n");
    for (int i = 0; i < 18; i++) {
        printf("%c", head_file[i]);
    }
    printf("\n\n");
    for (int i = 0; i < 10; i++) {
        printf("%c", main_function[i]);
    }
    printf("\n%c\n\t", '{');
    for (int i = 0; i < 22; i++) {
        printf("%c", love_code[i]);
    }
    printf("\n\n\t");
    for (int i = 0; i < 9; i++) {
        printf("%c", return_int[i]);
    }
    printf("\n%c\n", '}');

    return 0;
}
```

**编译运行**

```text
#include <stdio.h>

int main()
{
	printf("Hello World");
	
	return 0;
}
```


