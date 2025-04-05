# 构建应用程序(自V1.7.0)

随着APP代码库的增长以及rust代码的引入，单一的`/gradlew`任务已经无法完整地说明如何构建这个APP，特开此贴以进行说明。

:::danger

本页面不适合非开发者阅读。

:::



## 开发工具

鉴于IDEA无法支持`AGP8.8.0-alpha05`以上的版本，我们强烈建议使用[Android Studio](https://developer.android.google.cn/studio?hl=zh-cn)进行开发。

## 工具链的选择

一定要安装的工具链如下：

- JDK22，Kotlin，Android API36(含NDK)

- Rust相关

  > 该工具链目前只用于`gif`模块的使用。

  需要切换到nightly语言特性以支持`lazy_get`：`rustup default nightly`

  ::: info

  无论任何用户，都需要安装`i686-linux-android`，` x86_64-linux-android`。

  Mac用户想要运行iOS程序时请安装`x86_64-apple-ios`，`aarch64-apple-ios`，`aarch64-apple-ios-sim`

酌情安装：

- msvc，用于rust的构建工具选择。



## 运行命令：

- Desktop端：`./gradlew run`

- 安卓端：在运行配置里添加`Andorid`相关任务

- iOS端：在运行配置里添加`iOS`相关任务

  ::: tip

  需要安装 `Kotlin MultiPlatform`插件。 该插件只支持macOS安装。
  :::

## 打包命令：

- Desktop端：`./gradlew packageReleaseDistributionForCurrentOS `

  ::: tip

  windows用户可以使用`./gradlew light`生成经过改善的msi package。
  :::

- Android端：`./gradlew assembleRelease`

- iOS端：`./gradlew buildReleaseIpa`