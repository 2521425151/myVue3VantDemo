# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

### 安装 @vitejs/plugin-legacy 后 build报错
```javascript
[legacy-post-process] [BABEL] unknown: .plugins[13][0] must be a string, object, function
error during build:
Error: [BABEL] unknown: .plugins[13][0] must be a string, object, function
    at assertPluginTarget (/Sites/vite-project/node_modules/@babel/standalone/babel.js:67416:12)
    at assertPluginItem (/Sites/vite-project/node_modules/@babel/standalone/babel.js:67390:6)
    at /Sites/vite-project/node_modules/@babel/standalone/babel.js:67373:15
    at Array.forEach (<anonymous>)
    at assertPluginList (/Sites/vite-project/node_modules/@babel/standalone/babel.js:67372:10)
    at /Sites/vite-project/node_modules/@babel/standalone/babel.js:67591:6
    at Array.forEach (<anonymous>)
    at validateNested (/Sites/vite-project/node_modules/@babel/standalone/babel.js:67567:22)
    at validate$3 (/Sites/vite-project/node_modules/@babel/standalone/babel.js:67558:11)
    at /Sites/vite-project/node_modules/@babel/standalone/babel.js:69754:15
```
###### 临时解决办法：
    在package.json中添加或更新 "@babel/standalone": "7.13.9", 包
    [解决办法参考链接,vitejs/vite/issues/2442；github的链接经常会访问失败](https://github.com/vitejs/vite/issues/2442)
