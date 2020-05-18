# 前言
之前已经学过[TS学习笔记3——如何在vue项目中使用TypeScript语法](https://blog.csdn.net/weixin_43216105/article/details/105768741)；
这篇完成**VueCil4 + TypeScript + Vuex + LocalStorage 完成的本地便签案例**；
需求：本地便签的增删改查，便签分类查看；
这个案例主要使用的是Class类，着重于面向对象开发而非面向过程，所以也复用了[TS学习笔记2](https://blog.csdn.net/weixin_43216105/article/details/105391739)中的便签案例部分代码，大家看我的博客和我一起学习ts的时候，还是建议从[TS学习笔记1](https://blog.csdn.net/weixin_43216105/article/details/88186851)开始，每一篇都看一下；
# 正文
## 准备工作 
详细内容同学习笔记3，就不特殊论述了
## 开始
### 样式----使用bootstrap框架
我用的最简单的方法，使用cdn在index.html直接引入
```
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
```
### 分析需求
需求：本地便签的增删改查，便签分类；
1. 进页面时候，获取localStorage中存储的全部便签,把数据存到vuex中方便全局使用；
2. 便签根据类型不同可以的分类查看；
3. 新增便签，页面新增及更改本地存储；
4. 删除便签，页面删除及本地存储；
5. 编辑便签，页面删除及本地存储；
### 页面分析——/scr/components
- 头部导航文件--MenuBar.vue
- 便签主体---ItemList.vue
- 编辑弹框--StickyEditor.vue
- 单个便签框--StickyItem.vue
- 整体的页面--/src/page/stickyNotePage.vue
### 数据分析——/scr/model
- 生成单个便签所需的类--ItemData.ts
- 枚举类别数据文件--CateEnum.ts
### 过程分析——/scr/store
- 操作LocalStorage的单个类--DataHelper.ts
- 操作页面增删改查的类--ActionHelper.ts
### 项目分析
- 路由：/scr/router/index.ts
- VUEX：/scr/store/index.ts
- 入口：/scr/App.vue
- 全局入口ts：/scr/main.ts
### 操作代码（激动的搓搓手）
- 本身博客是准备一个一个页面去写的，但是代码好多啊。所以直接附上github地址：可以下载参考，源码中包含学习笔记和之前的代码合集及vue/cil3的配置与插件的使用；
- 这个案例是有视频链接的，代码很简单，主要是思路，如果代码看不懂的可以去看着视频练习~
