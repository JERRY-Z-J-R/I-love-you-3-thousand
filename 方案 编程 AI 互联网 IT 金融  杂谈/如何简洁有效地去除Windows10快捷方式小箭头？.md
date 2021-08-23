# 如何简洁有效地去除Windows10快捷方式小箭头？

> 部分内容参考知乎作者：zxjathome [原文链接](https://www.zhihu.com/question/62187698/answer/246865678)

首先，强烈建议不要用删除注册表 IsShortcut 键值的做法来删除快捷方式箭头，这样会导致出现很多问题。

出现的问题比如：

- Win+X 菜单打不开
- 右击计算机图标点击管理报错
- 应用无法固定到任务栏
- ……

以下的方法较为完美，也是大多数桌面美化软件的实际做法，值得参考！

（1）打开注册表位置

```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons
```

（2）右侧新建【字符串值】，名称为【29】

（3）为【29】字符串值添加内容

- `C:\WINDOWS\system32\imageres.dll,197`

> 这是第一种添加的方法，直接把系统自带的 imageres.dll,197 图标替换原来的小箭头。
>
> 存在的问题：该图标不是全透明的，左下角有一个模糊的小灰块，但是整体观感上影响不大，且较为稳定！

- `自制图标的绝对路径（.ico）`

> 这是第二种添加的方法，自己自制一个图标，将【29】字符串值的内容改为自制图标文件 `.ico` 的路径。
>
> 注意事项：
>
> - 不要用完全透明的图标，否则在部分情况下快捷方式箭头会变成一个黑色正方形
> - 由于屏幕的分辨率及缩放各有不同，所以图标的分辨率要具体在本地机子上测试

（4）最后重启资源管理器或者重启电脑即可

> 想恢复也很简单，把自己加过的注册表键值删除，再重启资源管理器或者重启电脑即可。

---

附：

对于第一种方法，这里给懒人准备了的批处理，复制下来粘贴到文本文档中保存，后缀名改为 `.bat`，右击以管理员身份运行即可。

```
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Icons" /v 29 /d "%systemroot%\system32\imageres.dll,197" /t reg_sz /f
taskkill /f /im explorer.exe
attrib -s -r -h "%userprofile%\AppData\Local\iconcache.db"
del "%userprofile%\AppData\Local\iconcache.db" /f /q
start explorer
pause
```

对于第二种方法，我自制了一个图标，透明度为 99%，几乎看不出来，能完美兼容 1080P 2K 分辨率下大部分常用缩放比例的显示格式，图标为 `.png` 文件，在使用前请先转为 `.ico` 文件。

![](https://img-blog.csdnimg.cn/06720f6c4cf14f1096afbdf043807f57.png)

> 推荐一个非常良心且极度强大的在线文件格式转换网站：[convertio](https://convertio.co/zh/?utm_source=chrome_extension)

