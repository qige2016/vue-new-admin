(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{263:function(s,t,a){"use strict";a.r(t);var e=a(27),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式"}},[s._v("#")]),s._v(" 样式")]),s._v(" "),a("h2",{attrs:{id:"css-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-modules"}},[s._v("#")]),s._v(" CSS Modules")]),s._v(" "),a("p",[s._v("在样式开发过程中，有两个问题比较突出：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("全局污染 —— CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会将前面的覆盖；")])]),s._v(" "),a("li",[a("p",[s._v("选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标示，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多，最终导致难以维护。")])])]),s._v(" "),a("p",[s._v("好在 vue 为我们提供了 "),a("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles",target:"_blank",rel:"noopener noreferrer"}},[s._v("scoped"),a("OutboundLink")],1),s._v(" 可以很方便的解决上述问题。\n它顾名思义给 css 加了一个域的概念。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 编译前 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".example")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 编译后 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".example[_v-f3f3eg9]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("只要加上 "),a("code",[s._v("<style scoped>")]),s._v(" 这样 css 就只会作用在当前组件内了。详细文档见 "),a("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-loader"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。")])]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("p",[s._v("vue-element-admin 所有全局样式都在 "),a("code",[s._v("@/src/styles")]),s._v(" 目录下设置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("├── styles\n│   ├── common.scss              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局通用样式")]),s._v("\n│   ├── element.scss             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局自定义 element-ui 样式")]),s._v("\n│   ├── index.scss               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局引用")]),s._v("\n│   ├── mixin.scss               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局mixin")]),s._v("\n│   ├── reset.scss               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局重置样式")]),s._v("\n│   ├── transition.scss          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vue transition 动画")]),s._v("\n│   └── variables.scss           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局变量")]),s._v("\n")])])]),a("p",[s._v("常见的工作流程是，全局样式都写在 "),a("code",[s._v("src/styles")]),s._v(" 目录下，每个页面自己对应的样式都写在自己的 "),a("code",[s._v(".vue")]),s._v(" 文件之中")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("<style>\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* global styles */")]),s._v("\n</style>\n\n<style scoped>\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* local styles */")]),s._v("\n</style>\n")])])]),a("br"),s._v(" "),a("h2",{attrs:{id:"自定义-element-ui-样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-element-ui-样式"}},[s._v("#")]),s._v(" 自定义 element-ui 样式")]),s._v(" "),a("p",[s._v("怎么覆盖 element-ui 样式？由于 element-ui 的样式是在全局引入的，所以想在某个页面里面覆盖它的样式就不能加 scoped，但如果只想覆盖这个页面的 element 样式，你就可在它的父级加一个 class，用命名空间来解决问题。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".article-page")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 你的命名空间 */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".el-tag")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* element-ui 元素*/")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("strong",[s._v("当然也可以使用深度作用选择器 下文会介绍")])]),s._v(" "),a("h2",{attrs:{id:"父组件改变子组件样式-深度选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父组件改变子组件样式-深度选择器"}},[s._v("#")]),s._v(" 父组件改变子组件样式 深度选择器")]),s._v(" "),a("p",[s._v("当你子组件使用了 "),a("code",[s._v("scoped")]),s._v(" 但在父组件又想修改子组件的样式可以 通过 "),a("code",[s._v(">>>")]),s._v(" 来实现：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("<style scoped>\n.a >>> .b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n</style>\n")])])]),a("p",[s._v("将会编译成")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".a[data-v-f3f3eg9] .b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("如果你使用了一些预处理的东西，如 "),a("code",[s._v("sass")]),s._v(" 你可以通过 "),a("code",[s._v("/deep/")]),s._v(" 来代替 "),a("code",[s._v(">>>")]),s._v(" 实现想要的效果。")]),s._v(" "),a("p",[s._v("所以你想覆盖某个特定页面 "),a("code",[s._v("element")]),s._v(" 的 button 的样式，你可以这样做：")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".xxx-container >>> .el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  xxxx\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://vue-loader.vuejs.org/en/features/scoped-css.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"postcss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss"}},[s._v("#")]),s._v(" Postcss")]),s._v(" "),a("p",[s._v("这里再来说一下 postcss 的配置问题，新版的 "),a("a",{attrs:{href:"https://github.com/vuejs-templates/webpack",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-cli webpack 模板"),a("OutboundLink")],1),s._v(" init 之后根目录下默认有一个"),a("code",[s._v("postcss.config.js")]),s._v(" 。vue-loader 的 postcss 会默认读取这个文件的里的配置项，所以在这里直接改配置文件就可以了。配置和 "),a("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[s._v("postcss"),a("OutboundLink")],1),s._v("是一样的。")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// postcss.config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    autoprefixer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browserslist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"> 1%"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 2 versions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not ie <= 8"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("如上面代码所述的，autoprefixer 会去读取 package.json 下 browserslist 的配置参数")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("> 1%")]),s._v(" 兼容全球使用率大于 1%的浏览器")]),s._v(" "),a("li",[a("code",[s._v("last 2 versions")]),s._v(" 兼容每个浏览器的最近两个版本")]),s._v(" "),a("li",[a("code",[s._v("not ie <= 8")]),s._v(" 不兼容 ie8 及以下")])]),s._v(" "),a("p",[s._v("具体可见 "),a("a",{attrs:{href:"https://github.com/ai/browserslist",target:"_blank",rel:"noopener noreferrer"}},[s._v("browserslist"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("code",[s._v("postcss")]),s._v("也还有很多很多其它的功能大家可以"),a("a",{attrs:{href:"https://www.postcss.parts/",target:"_blank",rel:"noopener noreferrer"}},[s._v("自行去探究"),a("OutboundLink")],1)]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"mixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixin"}},[s._v("#")]),s._v(" Mixin")]),s._v(" "),a("p",[s._v("本项目没有设置自动注入 sass 的 mixin 到全局，所以需要在使用的地方手动引入 mixin")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[s._v("<style rel="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stylesheet/scss"')]),s._v(" lang="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scss"')]),s._v(">\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/styles/mixin.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n</style>\n")])])]),a("p",[s._v("如需要自动将 mixin 注入到全局 ，可以使用"),a("a",{attrs:{href:"https://github.com/shakacode/sass-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("sass-resources-loader"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);