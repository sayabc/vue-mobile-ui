# vue-mobile-ui

> A Mobile UI Components based on Vue, named ?

## 预览地址
[预览地址](https://sayabc.github.io/vue-mobile-ui)

## 环境和依赖
详见 [package.json](https://github.com/sayabc/vue-mobile-ui/blob/master/package.json)


## 文档
[为什么要存在这个项目](https://github.com/sayabc/vue-mobile-ui/blob/master/notes/why_this.md)
[想法](https://github.com/sayabc/vue-mobile-ui/blob/master/notes/ideas.md)


## Issues
欢迎提交 [issues](https://github.com/sayabc/vue-mobile-ui/issues)

## Fork && Star
点击右上角 __Fork__ 及时接收本项目的更新消

喜欢猛戳 __Star__

## 项目结构说明
[项目开发具体组件思路](https://github.com/sayabc/vue-mobile-ui/blob/master/notes/class.md)
## File Structure

The following directories and files:

```
vue-mobile-ui
.
├── LICENSE
├── README.md
├── package.json
├── build
│   ├── build.js
│   ├── check-version.js
│   ├── logo.png
│   ├── utils.js
│   └── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
│   └── test.env.js
├── docs
│   ├── index.html
│   ├── static
│   │── ├── css
│   │── ├── js
└── src
    ├── assets
    │   ├── css
    │   │   └── reset.css
    │   ├── logo.png
    │   ├── img
    │   │   └── logo.png
    ├── components
    │   ├── Buttons
    │   │   └── buttons.vue
    │   ├── Dialog
    │   │   └── dialog.vue
    │   ├── Form
    │   │   └── form.vue
    │   ├── Icons
    │   │   └── icons.vue
    │   ├── Input
    │   │   └── input.vue
    │   ├── Layout
    │   │   └── layout.vue
    │   ├── List
    │   │   └── list.vue
    │   ├── Popup
    │   │   └── popup.vue
    │   ├── Process
    │   │   └── process.vue
    │   ├── Toast
    │   │   └── toast.vue
    │   └── AllList.vue
    │   └── HelloWorld.vue
    │   └── components.list.json
    ├── routes
    │   └── index.jsx
    ├── App.vue
    └── main.js
```

## 项目开发、部署说明
1. 使用gh-pages进行部署，网站显示资源需要在 __docs__ 目录下，所以需要配置下weoback打包策略；
2. 本地开发和预览，查看 __package.json__;
3. 部署远程主页，npn run build 然后 push 到代码仓库即可；
4. 本项目的开发顺序说明: 先实现显示基础性功能，后公共提取样式，直到拥有可供单个组件引入的能力，维护和成熟阶段；

## 本项目受启发于下列项目
[weui](https://github.com/Tencent/weui)
[mint-ui](https://github.com/ElemeFE/mint-ui)
[meili](https://github.com/meili/min-cli)

## License
[MIT](https://github.com/sayabc/vue-mobile-ui/blob/master/LICENSE)
