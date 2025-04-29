# Installation

## What systems is it compatible with?

Since version 1.6.0, Pixiv-MultiPlatform supports the following operating systems:

- Windows
- Linux
- macOS
- Android
- iOS (partial support)

::: danger

Due to my lack of familiarity with Mac command line, the iOS package cannot be included in the CI release.

If anyone wants to try it, please download, compile, and install it yourself.

:::

## How should I choose the installation package?

1. Click on the [download page](https://github.com/kagg886/Pixiv-MultiPlatform/releases/latest)
2. Windows users, please jump to [Windows Installation](#windows-installation)
3. Linux users, please jump to [Linux Installation](#linux-installation)
4. macOS users, please jump to [macOS Installation](#macos-installation)
5. Android users, please jump to [Android Installation](#android-installation)

## Windows Installation

### Direct Extraction Method

1. Extract the files to a location of your choice
2. Click on `Pixiv-MultiPlatform.exe` to launch

### Using Windows Installer (.msi)

1. Download `windows.msi`

2. Double-click and select a suitable location for installation.

   :::warning

   By default, it will be installed to `C:\Program Files\Pixiv-MultiPlatform`. You can change the installation path if you prefer.

   :::

## Linux Installation

### Installation via Extraction

Use the `tar` related commands to extract the archive file to a location of your choice

Grant executable permissions: `chmod +x ./Pixiv-MultiPlatform`

Double-click the file to launch.

### AUR Installation (Arch Linux only)

Currently, there are [third-party packages](https://aur.archlinux.org/packages?O=0&SeB=nd&K=pixiv-multiplatform&outdated=&SB=p&SO=d&PP=50&submit=Go) available for `AUR`. You can use the `yay -S` related commands to install. We won't elaborate further on this feature.

## macOS Installation

1. Download the `.dmg` file
2. Double-click the file
3. Drag the icon to `Applications`
4. Launch the App

> ### Solution for when the dmg file cannot be installed on macOS
> 
> 1. Open
>    
>    ![image-20250130084342912](./install.assets/image-20250130084342912.png)
> 
> 2. Click through the following
>    
>    ![3](./install.assets/3.png)
> 
> 3. After entering your password, you can continue with the installation.

## Android Installation

1. Download the `android.apk` file to a location of your choice
   
   ::: info
   
   The default storage location should be in `Internal Storage/Downloads`
   :::

2. Open a file manager app on your phone (if you don't have one, please download a third-party file management tool like `MT Manager`), and locate the downloaded `android.apk`.

3. Tap to install, and pay attention to options like `Ignore Risk` during installation.

## Uninstallation

For Android, simply uninstall the app. For desktop versions, after deleting the folder, you need to remove residual files.

1. Windows residual files are in `C:\Users\username\.config\pmf`. Simply drag them to the recycle bin.
2. Linux residual files are in `~/.config/pmf`. Simply delete them.
