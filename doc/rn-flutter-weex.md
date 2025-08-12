# React Native、Flutter、Weex 对比

## 1. React Native

- **开发语言**：JavaScript（或TypeScript），基于 React。
- **跨平台能力**：支持 iOS 和 Android，部分支持 Web、Windows。
- **原理**：通过 Bridge 机制将 JS 代码与原生组件通信，UI 渲染为原生控件。
- **优势**：生态成熟，社区庞大，易于与原生代码集成，热更新支持好。
- **劣势**：性能受限于桥接机制，复杂动画和高性能场景下略逊于 Flutter。

## 2. Flutter

- **开发语言**：Dart。
- **跨平台能力**：支持 iOS、Android、Web、桌面（Windows、macOS、Linux）。
- **原理**：自绘引擎（Skia），所有 UI 控件均由 Flutter 自身渲染，不依赖原生控件。
- **优势**：高性能，UI 高度一致，动画流畅，适合自定义复杂 UI。
- **劣势**：包体积较大，Dart 生态相对较小，与原生集成复杂度略高。

## 3. Weex

- **开发语言**：JavaScript（支持 Vue 等前端框架）。
- **跨平台能力**：主要面向移动端（iOS、Android），部分支持 Web。
- **原理**：将前端代码转为原生组件，采用虚拟 DOM 和原生渲染结合。
- **优势**：适合与现有 Web 技术栈结合，轻量，适合业务快速上线。
- **劣势**：社区活跃度下降，生态有限，维护不如前两者活跃。

## 4. 总结对比表

| 特性     | React Native        | Flutter              | Weex                |
|--------|---------------------|----------------------|---------------------|
| 语言     | JS/TS + React       | Dart                 | JS + Vue/React      |
| 渲染方式 | 原生控件+桥接       | 自绘引擎（Skia）       | 原生控件+虚拟DOM    |
| 性能     | 中等                | 高                   | 中等                |
| 跨平台   | iOS/Android/部分Web | iOS/Android/Web/桌面 | iOS/Android/部分Web |
| 生态     | 活跃                | 迅速增长             | 较弱                |
| 适用场景 | 业务型App、混合开发  | 高性能/定制UI App    | 快速上线、轻量业务   |

## 5. 适用建议

- **React Native**：适合已有 Web/React 技术栈团队，业务型 App，需与原生混合开发场景。
- **Flutter**：适合追求高性能、复杂自定义 UI、动画流畅体验的 App。
- **Weex**：适合快速上线、轻量业务、与 Web 技术深度结合的场景。
