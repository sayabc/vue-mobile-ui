## ideas
- [ ] 添加一个机器人(至少现在认为对于一个将会有很多用户的产品来说是有必要的😆)
- [ ] 后期会考虑两种使用方式，一种是 __import { button } from 'vue-mobile-ui'__ 另外一种是不需要添加本依赖，直接 __copy__ 样式即可使用，这个会对目录结构和配置有影响。
- [ ] __components.list.json__ 过程中会对组件进行细化分类，先确定一级便于后续的扩展
- [ ] 移动端响应式适配方案 待做需求 (参考weui和mint-ui 均使用px作为基本单位) 但需要确定是否只是demo级别，所以保险起见，使用 __rem__ 添加 __postcss-px2rem__ 并默认设计稿 750px 配置
      __build__ 下的 __vue-loader.conf.js__ 、__webpack.base.conf.js__ ，并在 __index.html__ 动态设置下根元素，此时 1rem = 75px
- [ ] 使用 __vue__ 似乎有点大材小用
- [ ] 项目简称 vmi (vue-mobile-ui) 中文微米 😆
- [ ] 移动端采用框架的考虑:  简单的需要高可复用性、够轻量级、兼容性超级好

## attentions
1. __components__ 下的组件文件夹命名和组件的文件名称一定要注意大小写和 __components.config.json__ 的配置统一
2. 在 __components__ 下新添加组件，要在 __components.config.json__ 中进行注册
3. 考虑不同浏览器对元素标签样式的差异，采用 __reset.css__ (使用了两套，虽然实际后者会覆盖前者重置的，但想在实际中观察下再更新该文件) 适合自己项目的才是最合适的。(ps: 不引入可以帮助你更了解浏览器之间的差异)
