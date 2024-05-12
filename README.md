# react-native-template

### Create a new project

`npx react-native@0.74.1 init NameOfProject --version 0.74.1`

### Copy over root files

`cp -r path/to/this/dir/{.vscode,scripts,src,svgToRNSvg,.eslintrc.js,.prettierrc.js,App.Provider.tsx,App.tsx,babel.config.js,configuration.ts,package.json,yarn.lock,tsconfig.json} path/to/NameOfProject`

### Copy over Android files

- `cp -r path/to/this/dir/android/{build.gradle,settings.gradle} path/to/NameOfProject/android`
- `cp -r path/to/this/dir/android/app/build.gradle path/to/NameOfProject/android/app`
- `cp -r path/to/this/dir/android/app/src/main/AndroidManifest.xml path/to/NameOfProject/android/app/src/main`
- `cp -r path/to/this/dir/android/app/src/main/res path/to/NameOfProject/android/app/src/main`
- `cp -r path/to/this/dir/android/app/src/main/java/com/reactnativetemplate/MainActivity.kt path/to/NameOfProject/android/app/src/main/java/com/nameofproject`
- `cp -r path/to/this/dir/android/app/src/main/java/com/reactnativetemplate/MainApplication.kt path/to/NameOfProject/android/app/src/main/java/com/nameofproject`

### Copy over ios files

- `cp -r path/to/this/dir/ios/Podfile path/to/NameOfProject/ios`
- `cp -r path/to/this/dir/ios/reactNativeTemplate/{Images.xcassets,AppDelegate.h,AppDelegate.mm,LaunchScreen.storyboard,SplashScreen.storyboard} path/to/NameOfProject/ios/NameOfProject`

### Rename reactNativeTemplate in files to name of project

- package.json [common]
- android/settings.gradle
- android/app/build.gradle [common]
- android/app/src/main/AndroidManifest.xml [common]
- android/app/src/main/java/com/nameofproject/MainApplication.kt [common]
- android/app/src/main/java/com/nameofproject/MainActivity.kt [Both]
- ios/Podfile
- ios/nameOfProject/AppDelegate.mm

### Install expo modules

`npx install-expo-modules@latest`

### Add the following file and contents

- android/local.properties
  `sdk.dir=/path/to/Android/sdk`

### Create a Google Firebase Project if you haven't already

### Configure the project's apps (iOS & Android)

#### You'll need

- iOS Bundle ID (com.appname.something)
- App Store ID
- Apple Team ID
- Android package name (com.appname)
- Android SHA-1 & SHA-2 certificates

The debug signing certificate is optional to use Firebase with your app, but is required for Dynamic Links, Invites and Phone Authentication. To generate a certificate run cd android && ./gradlew signingReport. This generates two variant keys. You have to copy both 'SHA1' and 'SHA-256' keys that belong to the 'debugAndroidTest' variant key option. Then, you can add those keys to the 'SHA certificate fingerprints' on your app in Firebase console.

### Create and add the files from Google Firebase console

- android/app/google-services.json
- ios/NameOfProject/GoogleService-info.plist

In XCode:

- Right click on the project name and "Add files" to the project
- Select the downloaded GoogleService-Info.plist file from your computer, and ensure the "Copy items if needed" checkbox is enabled.

### [Optional] Enable Maps Platform in the console

### [Optional] Create new api keys (iOS & Android) in Keys & Credentials

### [Optional] Replace the Google api key in these locations

- android/app/src/main/AndroidManifest.xml
- ios/NameOfProject/AppDelegate.mm
