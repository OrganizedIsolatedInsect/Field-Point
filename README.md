# Field-Point

## Branching

When working on the project in VS Code, make sure you are working from a branch separate from the master branch.
Open the Command Palette (SHIFT+CTRL+P) and search for "Branch" and it should return "Git: Create Branch..."
Once you have named your branch, it should say the branch name in the bottom left corner (branch indicator) instead of 'master'.

For more information on working with Branches in Visual Studio Code, review the video here:

```
https://code.visualstudio.com/docs/introvideos/versioncontrol
```

How to use Github in VS Code in general (of importance, **Pull requests**):

```
https://code.visualstudio.com/docs/editor/github
```

## SQL Lite Browser
Software that simplifies the creation of SQL Lite databases in Windows rather than initializing it on device. Is capable of importing CSV files into proper databases. Additionally, allows you to view all the tables created by SQL Lite.
```
https://sqlitebrowser.org/
```
## How to build a debug APK
```
https://medium.com/geekculture/react-native-generate-apk-debug-and-release-apk-4e9981a2ea51
```
TLDR; 

Step 1: Go to the root of the project in the terminal/powershell and run the below command:
```
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```
Step 2: Navigate to the android directory of the project: `cd android`

Step 3: Run the following gradle command:
```
./gradlew assembleDebug
```
The debug APK will be found at:
```
yourProject/android/app/build/outputs/apk/debug/app-debug.apk
```
