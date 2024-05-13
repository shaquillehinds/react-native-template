#!/bin/bash

if [ -z $1 ];
then
  echo "Please give project a name"
  exit 1
fi

name=$1
lowerName=$(echo "$name" | tr '[:upper:]' '[:lower:]')

cd ..

# Initialize RN project
npx react-native@0.74.1 init $name --version 0.74.1

# Copy over root files
cp -r reactNativeTemplate/{.vscode,scripts,src,svgToRNSvg,.eslintrc.js,.prettierrc.js,assets,App.Provider.tsx,App.tsx,babel.config.js,configuration.ts,package.json,yarn.lock,tsconfig.json} $name

# Copy over Android files
cp -r reactNativeTemplate/android/{build.gradle,settings.gradle} $name/android
cp -r reactNativeTemplate/android/app/build.gradle $name/android/app
cp -r reactNativeTemplate/android/app/src/main/AndroidManifest.xml $name/android/app/src/main
cp -r reactNativeTemplate/android/app/src/main/res $name/android/app/src/main
cp -r reactNativeTemplate/android/app/src/main/java/com/reactnativetemplate/MainActivity.kt $name/android/app/src/main/java/com/$lowerName
cp -r reactNativeTemplate/android/app/src/main/java/com/reactnativetemplate/MainApplication.kt $name/android/app/src/main/java/com/$lowerName

# Copy over ios files
cp -r reactNativeTemplate/ios/Podfile $name/ios
cp -r reactNativeTemplate/ios/reactNativeTemplate/{Images.xcassets,AppDelegate.h,AppDelegate.mm,LaunchScreen.storyboard,SplashScreen.storyboard} $name/ios/$name

# Renaming reactNativeTemplate

# package.json [common]
sed "s/reactnativetemplate/$lowerName/ig" reactNativeTemplate/package.json > $name/package.json
# android/settings.gradle
sed "s/reactNativeTemplate/$name/g" reactNativeTemplate/android/settings.gradle > $name/android/settings.gradle
# android/app/build.gradle [common]
sed "s/reactnativetemplate/$lowerName/ig" reactNativeTemplate/android/app/build.gradle > $name/android/app/build.gradle
# android/app/src/main/AndroidManifest.xml [common]
sed "s/reactnativetemplate/$lowerName/ig" reactNativeTemplate/android/app/src/main/AndroidManifest.xml > $name/android/app/src/main/AndroidManifest.xml
# android/app/src/main/java/com/nameofproject/MainApplication.kt [common]
sed "s/reactnativetemplate/$lowerName/ig" reactNativeTemplate/android/app/src/main/java/com/reactnativetemplate/MainApplication.kt > $name/android/app/src/main/java/com/$lowerName/MainApplication.kt
android/app/src/main/java/com/nameofproject/MainActivity.kt [Both]
sed "s/reactnativetemplate/$lowerName/g" reactNativeTemplate/android/app/src/main/java/com/reactnativetemplate/MainActivity.kt > $name/android/app/src/main/java/com/$lowerName/MainActivity.kt
mv $name/android/app/src/main/java/com/$lowerName/MainActivity.kt $name/android/app/src/main/java/com/$lowerName/MainActivity2.kt
sed "s/reactNativeTemplate/$name/g" $name/android/app/src/main/java/com/$lowerName/MainActivity2.kt > $name/android/app/src/main/java/com/$lowerName/MainActivity.kt
rm $name/android/app/src/main/java/com/$lowerName/MainActivity2.kt
# android/app/src/main/res/values/strings.xml
sed "s/reactNativeTemplate/$name/g" reactNativeTemplate/android/app/src/main/res/values/strings.xml > $name/android/app/src/main/res/values/strings.xml
# ios/Podfile
sed "s/reactNativeTemplate/$name/g" reactNativeTemplate/ios/Podfile > $name/ios/Podfile
# ios/nameOfProject/LaunchScreen.storyboard
sed "s/reactNativeTemplate/$name/g" reactNativeTemplate/ios/reactNativeTemplate/LaunchScreen.storyboard > $name/ios/$name/LaunchScreen.storyboard
# ios/nameOfProject/AppDelegate.mm
sed "s/reactNativeTemplate/$name/g" reactNativeTemplate/ios/reactNativeTemplate/AppDelegate.mm > $name/ios/$name/AppDelegate.mm
# ios/nameOfProject/Info.plist
mv $name/ios/$name/Info.plist $name/ios/$name/Info2.plist 
sed "s/LaunchScreen/SplashScreen/g" $name/ios/$name/Info2.plist > $name/ios/$name/Info.plist
rm $name/ios/$name/Info2.plist  

cd $name

npx install-expo-modules@0.10.0

rm .yarnrc.yml

yarn clean && yarn setup

# cd ..

# cd reactNativeTemplate

# tsc -p ./scripts/tsconfig.json
# node scripts/newProject/newProject.js