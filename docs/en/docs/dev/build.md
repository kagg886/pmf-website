# Building the Application (since V1.7.0)

With the growth of the APP codebase and the introduction of Rust code, a single `/gradlew` task can no longer fully explain how to build this APP. This post is created specifically to provide explanation.

:::danger

This page is not suitable for non-developers.

:::

## Development Tools

Given that IDEA cannot support versions above `AGP8.8.0-alpha05`, we strongly recommend using [Android Studio](https://developer.android.google.cn/studio?hl=en) for development.

## Toolchain Selection

The must-install toolchains are as follows:

- JDK22, Kotlin, Android API36 (including NDK)

- Rust related

  > This toolchain is currently only used for the `gif` module.

  Need to switch to nightly language features to support `lazy_get`: `rustup default nightly`

  ::: info

  Regardless of the user, everyone needs to install `i686-linux-android`, `x86_64-linux-android`.

  Mac users who want to run iOS programs should install `x86_64-apple-ios`, `aarch64-apple-ios`, `aarch64-apple-ios-sim`
  :::

Install as needed:

- msvc, used for Rust build tool selection.

## Run Commands:

- Desktop: `./gradlew run`

- Android: Add `Android` related tasks in the run configuration

- iOS: Add `iOS` related tasks in the run configuration

  ::: tip

  Need to install the `Kotlin MultiPlatform` plugin. This plugin only supports macOS installation.
  :::

## Packaging Commands:

- Desktop: `./gradlew packageReleaseDistributionForCurrentOS`

  ::: tip

  Windows users can use `./gradlew light` to generate an improved msi package.
  :::

- Android: `./gradlew assembleRelease`

- iOS: `./gradlew buildReleaseIpa`
