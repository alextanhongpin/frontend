
# Clear react-native cache

```
rm -rf node_modules
rm -rf ios/build
rm -rf ~/Library/Developer/Xcode/DerivedData
watchman watch-del-all
yarn install
npm start -- --reset-cache
react-native run-ios
```
