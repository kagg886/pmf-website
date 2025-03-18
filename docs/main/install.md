# 安装

## 它兼容什么系统？

自1.6.0起，Pixiv-MultiPlatform支持下列操作系统

- Windows
- Linux
- macOS
- Android
- IOS(部分支持)

::: danger

受限于我不会使用mac命令行的缘故，故IOS包无法加入CI发行版中。

如有人想要尝鲜的话，请自行下载编译安装。

:::

## 我该如何选择安装包？

1. 点击[下载页面](https://github.com/kagg886/Pixiv-MultiPlatform/releases/latest)
2. Windows用户请跳转到[Windows安装](#windows安装)
3. Linux用户请跳转到[Linux安装](#Linux安装)
4. macOS用户请跳转到[macOS安装](#macOS安装)
5. Android用户请跳转到[安卓端安装](#安卓端安装)

## Windows安装

### 直接解压缩文件

1. 解压缩文件到你喜欢的位置中
2. 点击`Pixiv-MultiPlatform.exe`以启动

### 使用Windows Installer(.msi)安装

1. 下载`windows.msi`

2. 双击，选择合适的位置进行安装。

   :::warning

   默认情况下会安装到`C:\Program Files\Pixiv-MultiPlatform`，介意者可更换安装路径

   :::

## Linux安装

### 解压缩安装

使用`tar`相关命令解压归档文件到你喜欢的位置中

赋予可执行文件权限：`chmod +x ./Pixiv-MultiPlatform`

双击文件以启动。

### AUR(仅限ArchLinux)安装

目前已有对于`AUR`的[第三方软件包](https://aur.archlinux.org/packages?O=0&SeB=nd&K=pixiv-multiplatform&outdated=&SB=p&SO=d&PP=50&submit=Go)，您可以使用`yay -S`相关命令进行安装，对于此类功能则不再赘述

## macOS安装

1. 下载`.dmg`文件
2. 双击文件
3. 拖动图标到`Applications`
4. 启动App

> ### macOS 上无法安装dmg文件的解决方案
> 
> 1. 打开
>    
>    ![image-20250130084342912](./install.assets/image-20250130084342912.png)
> 
> 2. 依次点击
>    
>    ![3](./install.assets/3.png)
> 
> 3. 输入密码后，即可继续安装。

## 安卓端安装

1. 下载`android.apk`文件到你喜欢的位置中
   
   ::: info
   
   默认的存储位置应该是`内置存储/Downloads中`
   :::

2. 打开你手机里的文件管理软件(若没有请下载诸如`MT管理器`等的第三方文件管理工具)，找到你下载的`android.apk`。

3. 单击进行安装，安装时请留意：`无视风险`等小字。

## 卸载

安卓端请直接卸载，桌面端在删除文件夹后需要删除残留文件。

1. Windows的残留文件在`C:\Users\用户名\.config\pmf`中，直接拖进回收站即可。
2. Linux的残留文件在`~/.config/pmf`中，直接删除即可
