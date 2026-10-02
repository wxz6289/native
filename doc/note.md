# React Native

Expo 是一个开源框架，用于使用 JavaScript 和 React 构建跨平台的移动应用程序。它提供了一个强大的工具集和库，使开发人员能够轻松创建、测试和部署应用程序，而无需深入了解原生代码。

导航、访问原生 API、处理原生依赖项

环境准备

- Node
- Watchman
- Xcode
- CocoaPods

```sh
npx create-expo-app@latest my-app
brew install watchman # 监视文件系统更改
npm install -g eas-cli # 云构建
eas login
eas build:configure # 创建EAS配置文件
eas device:create
eas build --platform ios --profile development
```

```bash
npx expo prebuild
// or
expo eject
```

内置组件

- `View`: 容器组件，用于布局和样式。不会自动处理设备的安全区域（如刘海、圆角、底部手势区等），内容可能会被遮挡。
- `Text`: 用于显示文本的组件。
- `Image`: 用于显示图像的组件。
- `ScrollView`: 可滚动的视图容器。适合用于展示长列表、图片集、表单等内容。
  常用属性：
  - contentContainerStyle：内容容器的样式。
  - showsVerticalScrollIndicator：是否显示垂直滚动条。
  - refreshControl：下拉刷新控件。
- `TouchableOpacity`: 可触摸的组件，支持点击事件。
- `SafeAreaView`: 会自动为内容添加内边距，确保内容不会被设备的物理特性（如刘海、状态栏、底部导航条）遮挡。适合用在页面根部或需要保证内容可见的场景。

适配不同屏幕大小的方案

1. 使用百分比或flex布局
2. 使用Dimensions API获取屏幕宽高
3. 使用`react-native-responsive-screen`、`react-native-size-matters`库, 可用vw/vh或dp单位适配。