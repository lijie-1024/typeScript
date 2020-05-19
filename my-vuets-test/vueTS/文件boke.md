## 基于vue-cil和typescript的移动端app

练习：ui库：vant-ui，单位vm，语言ts

https://juejin.im/post/5d0259f2518825405d15ae62#heading-25

- vue-cil，TS版安装

`npm install -g @vue/cli`将vue-cil集成到本机

cmd 命令行运行 `vue create my-tsapp` 集成环境，然后，命令行会要求选择预设。使用箭头键选择Manually select features。

接下来，只需确保选择了TypeScript和Babel选项
安装完成后 cd到项目中 `npm run serve`启动项目
- 可以开始写代码了
vue-class-component-  vue文件写ts的关键

public-可以更改的,private报错使用, private 修饰的属性或方法，在子类中也是不允许访问的,如果是用 protected 修饰，则允许在子类中访问,生命周期中都是私有的，只有methods是公共的，
