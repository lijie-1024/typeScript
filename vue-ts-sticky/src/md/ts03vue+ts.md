# 前言
之前已经学过[TypeScript函数，class类其他语法及ts在html页面中如何使用案例](https://blog.csdn.net/weixin_43216105/article/details/105391739)；
这篇学习**如何在vue项目中使用ts**；
为了更方便理解，我把在vue中常用功能点代码用js/ts写法分开书写，如果你对vue比较熟悉的，可以直接跳转到最后，最后附有demo源码；
# 正文
## 一、准备工作 
### 1.1安装vue cil4
```js
npm install -g @vue/cli
npm install -g @vue/cli-service-global
```
### 1.2新建项目
```
vue create vue-ts-sticky
```
按步骤开始安装，安装过程中选择TypeScript，vuex，路由router;
使用`npm run serve`启动项目
### 1.3 在vue中书写ts的必备插件！
vue-class-component 强化 Vue 组件，使用装饰器语法使 Vue 组件更好的跟TS结合使用。
vue-property-decorator在 vue-class-component 的基础上增加了更多与 Vue 相关的装饰器，使Vue组件更好的跟TS结合使用。
```
npm i vue-class-component -s-d
npm i  vue-property-decorator -s-d
```

## 二、ts写vue单文件写法
### 2.1单页面格式怎么写
vue单页面的格式的写法不变，同样由template、script、style组成；
唯一区别：`<script src="ts">`
```html
<template>
  <div class="hello"></div>
</template>
<script src="ts"></script>
<style scoped></style>
```

#### 2.1.1 vue项目中的mian.ts及app.vue
**main.ts写法**
```js
import Vue from 'vue'
import App from './App.vue'
//vuex
import store from './store'
// 路由
import router from './router'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

```
**app.vue写法**
```html
<template>
  <div id="app">
    <!-- 使用路由的方法，也可以不用路由，直接引子组件 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
//注意点：1.下面的代码必须在每个页面都中引入
import { Component, Vue } from 'vue-property-decorator';
@Component
//注意点：2.每个页面都有组件名称：App/自定义
export default class App extends Vue {

}
</script>
```
### 2.2 如何在Data双向绑定值
- js写法
```html
<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
   data() {
    return {
      msg: "",
    };
  },
}
</script>
```
- ts写法
```html
<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>
<script src="ts">
import { Component, Vue, } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  //注意点：3.public是公用的意思，可省略;没有data,return,直接放要绑定的值
  public msg!: number | string;
  // msg!: number | string;
}
</script>
```

### 2.3 如何引入子组件及组件传值
- js写法
```html
<template>
  <div class="hello">
    <MenuBar :setMsg="msg"/>
  </div>
</template>
<script>
import MenuBar from "../components/MenuBar.vue";
export default {
  props: {
    // 父组件的值
    fatherMsg: {
      type: String
    }
  },
  components: {
    MenuBar
  },
  data() {
    return {
      msg: "",
    };
  },
}
</script>
```
- ts写法
```html
<template>
  <div class="hello">
    <MenuBar :setMsg="msg" />
  </div>
</template>
<script src="ts">
import { Component, Vue, } from "vue-property-decorator";
import MenuBar from "../components/MenuBar.vue";
@Component({
  components: {
    MenuBar
  },
})
export default class Home extends Vue {
  // 父组件的传递过来的值
  @Prop() private fatherMsg!: string;
  //传递给子组件的值
  public msg!: number | string;
}
</script>
```


### 2.4 生命周期的用法
- js写法
```html
<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
var data = {name: "小明",age: 18};
export default {
   data() {
    return {
      msg: "",
    };
  },
  created() {
    this.msg = data.name + data.age + "岁";
  },
}
</script>
```
- ts写法
```html
<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>
<script  src="ts">
import { Component, Vue, } from "vue-property-decorator";
var data = {name: "小明",age: 18};
@Component
export default class Home extends Vue {
  public msg!: number | string;
  created(): void {
    console.log("created");
    this.msg = data.name + data.age + "岁";
  }
  beforeCreate(): void {
    console.log("beforecreate");
  }
  beforeMount(): void {
    console.log("beforemounted");
  }
  mounted(): void {
    console.log("mounted");
  }
}
</script>
```
### 2.5 methods方法
- js写法
```html
<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button class="btn" @click="addCount">add</button>
  </div>
</template>
<script>
var data = {name: "小明",age: 18};
export default {
   data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount() {
      return this.count++;
    }
  }
}
</script>
```
- ts写法
```html
<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button class="btn" @click="addCount">add</button>
  </div>
</template>
<script  src="ts">
import { Component, Vue, } from "vue-property-decorator";
var data = {name: "小明",age: 18};
@Component
export default class Home extends Vue {
  public count: number = 0;
  //   方法也是直接写到外层
  addCount(): number {
    return this.count++;
  }
}
</script>
```

### 2.6 计算属性（computed）和监听属性（watch）
- js写法
```html
<template>
  <div class="hello">
  <h1>计算属性：{{countChange}}，结果+2:{{watchMsg}}</h1>
    <button class="btn" @click="addCcountChange">计算属性：add</button>
    <h1>监听：{{count}}，结果+1:{{watchMsg}}</h1>
    <button class="btn" @click="addCount">监听add</button>
  </div>
</template>
<script>
var data = {name: "小明",age: 18};
export default {
   data() {
    return {
      count: 0,
      watchMsg: ""
    };
  },
  watch: {
    count: {
      handler(newVal, oldVal) {
        if (newVal < 10) {
          this.watchMsg = "我是数字" + newVal;
        } else {
          this.watchMsg = "我会继续增长";
        }
      },
      immediate: true
    },
    watchMsg: {
      handler(newVal, oldVal) {
        console.log(newVal);
      },
      immediate: true
    }
  },
  computed: {
    countChange: {
      get() {
        return this.count;
      },
      set(val) {
        this.count = val + 1;
      }
    }
  },
  methods: {
   addCcountChange() {
      return this.countChange;
    },
    addCount() {
      return this.count++;
    }
  }
}
</script>
```
- ts写法
```html
<template>
  <div class="hello">
    <h1>计算属性：{{countChange}}，结果+2:{{watchMsg}}</h1>
    <button class="btn" @click="addCcountChange">计算属性：add</button>
    <h1>监听：{{count}}，结果+1:{{watchMsg}}</h1>
    <button class="btn" @click="addCount">监听add</button>
  </div>
</template>
<script  src="ts">
// 注意1.导入Watch
import { Component, Vue,Watch } from "vue-property-decorator";
var data = {name: "小明",age: 18};
@Component
export default class Home extends Vue {
  public count: number = 0;
  public watchMsg: string = "开始";
    //   计算属性
  get countChange(): number {
    return this.count;
  }
  set countChange(val) {
    this.count = val + 1;
  }
  // 注意2. 监听多个就导入多个Watch，命名自定义 clgMsg(newVal: string)
  @Watch("count")
  Count(newVal: number) {
    if (newVal < 10) {
      this.watchMsg = "我是数字" + newVal;
    } else {
      this.watchMsg = "我会继续增长";
    }
  }
  @Watch("watchMsg")
  clgMsg(newVal: string) {
    console.log(newVal);
  }
   //   方法
  addCcountChange(): number {
    return this.countChange++;
  }
  addCount(): number {
    return this.count++;
  }
}
</script>
```

### 2.7 Mixins混入如何使用
Mixins混入是公共方法同一调用；
#### 2.7.1  Mixins文件的写法
- js写法
```js
export const TestMixins = {
    data(){
      return{
        form:{}
      }
    },
    methods:{
      handleSubmit(name): {
        return new Promise((resolve) => {
            resolve()
        })
      }
      handleReset(name){
        console.log(name)
        return name
      }
    }
}

```
- TS写法
```js
//必须引入
import { Component, Vue, } from "vue-property-decorator";
// 导出模块
declare module 'vue/types/vue' {
    interface Vue {
        form: Object
        handleSubmit(name: any): Promise<any>
        handleReset(name: any): void
    }
}
@Component
export default class TestMixins extends Vue {
    form: Object = {}
    handleSubmit(name: any): Promise<any> {
        return new Promise((resolve) => {
            resolve()
        })
    }
    handleReset(name: any): void {
        console.log(name)
        return name
    }
}
```

#### 2.7.2  调用Mixins的vue文件写法
- js写法
```html
<template>
  <div class="hello">
     <h1>{{handleReset("测试js-mixins")}}</h1>
  </div>
</template>
<script>
import TestMixins from "../assets/mixin";
export default {
   mixins: [TestMixins],
   data() {
    return {
      count: 0,
    };
   },
}
</script>
```
- ts写法
```html
<template>
  <div class="hello">
      <h1>{{handleReset("测试TS-mixins222")}}</h1>
  </div>
</template>
<script  src="ts">
import TestMixins from "../assets/mixin";
import { Component, Vue, Mixins} from "vue-property-decorator";
// 写在@Component内
@Component({
  mixins: [TestMixins]
})
export default class Home extends Vue {
  public count: number = 0;
}
</script>
```
### 2.8 路由vue-Router及路由守卫
#### 2.8.1 安装导入路由—— mian.ts
```js
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
//1.导入组件
import Component from 'vue-class-component'
Vue.config.productionTip = false

// 1.全局的路由守卫，js和ts的写法一致；
// 2.组件内路由守卫，如果要在组件内部使用路由监听，路由钩子beforeRouteEnter,beforeRouteLeave,beforeRouteUpdate不生效。所以在此注册；
Component.registerHooks([
  'beforeRouteEnter',//进入路由之前
  'beforeRouteLeave',//离开路由之前
  'beforeRouteUpdate'
])

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

```

#### 2.8.2 路由index文件写法—— router/index.ts
```js
import Vue from 'vue';
import Router from 'vue-router';
import stickyNotePage from '../page/stickyNotePage.vue';

export default new Router({
    // history模式
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // 常规模块加载
        {
            path: '/',
            name: 'stickyNotePage',
            component: stickyNotePage,
        },
        // 路由懒加载写法
        {
            path: '/hello',
            name: 'hello',
            component: () => import(/* webpackChunkName: "hello" */'../page/HelloWorld.vue'),
        },
        {
            path: '/learn',
            name: 'learn',
            component: () => import(/* webpackChunkName: "learn" */'../page/learn.vue'),
        },
    ],
})
Vue.use(Router);
```
#### 2.8.3 在页面中如何使用路由守卫
##### 全局的路由守卫，js和ts的写法一致；
```js
// 全局守卫
import router from './router'
router.beforeEach((to, from, next) => {    
    console.log(to.path);
    next()    
})
// 全局后置钩子
router.afterEach((to,from)=>{
  alert("after each");
})
```
##### 组件内路由守卫
- js写法
```html
<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button class="btn" @click="addCount">add</button>
  </div>
</template>
<script>
var data = {name: "小明",age: 18};
export default {
   data() {
    return {
      count: 0,
    };
  },
   // 进入路由触发
  beforeRouteEnter(to,from,next)=>{
    console.log("beforeRouteEnter111");
    next();
  }
  beforeRouteUpdate(to,from,next)=>{
    console.log("beforeRouteUpdate111");
    next();
  }
  // 离开路由触发
  beforeRouteLeave(to,from,next)=>{
    console.log("beforeRouteLeave111");
    next();
  }

}
</script>
```

- ts写法
```html
<template>
  <div class="hello">
    <h1>{{count}}</h1>
  </div>
</template>
<script  src="ts">
import { Component, Vue, } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  public count: number = 0;
   // 进入路由触发
  beforeRouteEnter(to: any, from: any, next: () => void): void {
    console.log("beforeRouteEnter111");
    next();
  }
  beforeRouteUpdate(to: any, from: any, next: () => void): void {
    console.log("beforeRouteUpdate111");
    next();
  }
  // 离开路由触发
  beforeRouteLeave(to: any, from: any, next: () => void): void {
    console.log("beforeRouteLeave111");
    next();
  }
}
</script>
```

### 2.9 vuex
#### 2.9.1 vuex/scr/store/index.ts写法
js、ts写法除了类型判断其他区别不大；
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowEdit: false,
    onlySticky: null,
  },
  mutations: {
    SHOW_EDIT(state: any, editMemo: any) {
      console.log(editMemo)
      state.onlySticky = editMemo;
      state.isShowEdit = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
```
#### 2.9.2 vuex调用单页面的写法

- js写法
```html
<template>
  <div class="hello">
    <button @click="showEdit('vuex')">测试vuex</button>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
   data() {
    return {
      stickyList:[],
    };
   },
   created() {
    this.stickyList = this.$store.state.onlySticky;
  },
    methods: {
    ...mapMutations(["SHOW_EDIT"]),
    showEdit(item) {
      this.$store.commit("SHOW_EDIT", item);
    },
  }
}
</script>
```
- ts写法
```html
<template>
  <div class="hello">
     <button @click="showEdit('vuex')">测试vuex</button>
  </div>
</template>
<script  src="ts">
import { Component, Vue,} from "vue-property-decorator";
import ItemData from "../model/ItemData"; //导入类
// 写在@Component内
@Component
export default class Home extends Vue {
  stickyList: [ItemData] = this.$store.state.onlySticky;
 // vuex，如果this.$store一直报错，则在单页面引入 import Vuex from 'vuex'
  showEdit(item) {
    this.$store.commit("SHOW_EDIT", item);
  }
}
</script>
```
### 2.10 axios请求数据
#### 2.10.1 main.ts
```
import axios from 'axios'
Vue.prototype.$axios = axios;
```
关于axios的封装，在之前的博客中已经讲述过了，就不在封装了，有需要查看[vue+axios封装请求](https://blog.csdn.net/weixin_43216105/article/details/98877960),ts语法除了类型其他区别不大，这里直接使用的是挂载axios和引入axios的方式，
#### 2.10.2 单页使用
- js写法
```html
<template>
  <div class="hello">
    axios请求
  </div>
</template>
<script>
export default {
   data() {
    return {
    };
   },
   created() {
    // 请求地址  https://www.foobar.com/my-app/user/add
    const url1 = "https://www.foobar.com/my-app/user/add";
    this.$axios.get(url1, { params: { type: "js" } }).then(res => {
      console.log(res);
    });
    // 使用vue代理
    const url2 = "/my-app/user/add";
    this.$axios.get(url2, { params: { type: "Ts" } }).then(res => {
      console.log(res);
    });
  },
}
</script>
```
- ts写法
```html
<template>
  <div class="hello">
    axios请求
  </div>
</template>
<script  src="ts">
import { Component, Vue,} from "vue-property-decorator";
import axios from "axios";
// 写在@Component内
@Component
export default class Home extends Vue {
   created(): void {
    const url1 = "https://www.foobar.com/my-app/user/add";
    axios.get(url1, { params: { type: "js" } }).then((res: any) => {
      console.log(res);
    });
    // 使用vue代理
    const url2 = "/my-app/user/add";
    axios.get(url2, { params: { type: "Ts" } }).then((res: any) => {
      console.log(res);
    });
  }
}
</script>
```
### 2.11 使用less/sass/scss
vue/cil4.2 已经内置了各种的css-loader,所以直接下载npm包即可；如果有特殊的需求，则需要配置vue.config.js的参数，当然这个在此不多论述，会另开篇讲vue/cil4的配置；

## 附：js常规书写vue--demo源码
```html
<template>
  <div class="hello">
    <MenuBar />
    <router-link :to="{path:'hello'}">测试路由守卫-->去helloword</router-link>
    <h1>{{handleReset("测试mixins222")}}</h1>
    <h1>{{msg}}</h1>
    <h1>{{fatherMsg}}</h1>
    <h1>计算属性：{{countChange}}，结果:{{watchMsg}}</h1>
    <button class="btn" @click="addCcountChange">计算属性：add</button>
    <h1>监听：{{count}}，结果:{{watchMsg}}</h1>
    <button class="btn" @click="addCount">监听add</button>
    <button @click="showEdit('vuex')">测试vuex</button>
  </div>
</template>
<script>
import MenuBar from "../components/MenuBar.vue";
import TestMixins from "../assets/mixin";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";

var data = {
  name: "小明",
  age: 18
};
export default {
  props: {
    fatherMsg: {
      type: String
    }
  },
  mixins: [TestMixins],
  components: {
    MenuBar
  },
  data() {
    return {
      msg: "",
      count: 0,
      watchMsg: "",
      stickyList: []
    };
  },
  created() {
    this.msg = data.name + data.age + "岁";
    this.stickyList = this.$store.state.onlySticky;
  },
  mounted() {
    // 页面内部使用路由守卫
    this.$router.beforeEach((to, from, next) => {
      console.log("我要去" + from.name);
      next();
    });
    // axios请求
    // 请求地址  https://www.foobar.com/my-app/user/add
    const url1 = "https://www.foobar.com/my-app/user/add";
    this.$axios.get(url1, { params: { type: "js" } }).then(res => {
      console.log(res);
    });
    // 使用代理
    const url2 = "/my-app/user/add";
    this.$axios.get(url2, { params: { type: "Ts" } }).then(res => {
      console.log(res);
    });
  },
  watch: {
    countChange: {
      handler(newVal, oldVal) {
        if (newVal < 5) {
          this.watchMsg = "我是数字" + newVal;
        } else {
          this.watchMsg = "我会继续增长";
        }
      },
      immediate: true
    },
    watchMsg: {
      handler(newVal, oldVal) {
        console.log(newVal);
      },
      immediate: true
    }
  },
  computed: {
    countChange: {
      get() {
        return this.count;
      },
      set(val) {
        this.count = val + 2;
      }
    }
  },
  methods: {
    ...mapMutations(["SHOW_EDIT"]),
    showEdit(item) {
      this.$store.commit("SHOW_EDIT", item);
    },
    addCcountChange() {
      return this.countChange++;
    },
    addCount() {
      return this.count++;
    }
  }
};
</script>
```
## demo-上述代码用Ts书写vue
```html

<template>
  <div class="hello">
    <MenuBar />
    <router-link :to="{path:'learn'}">测试路由守卫-->去learn</router-link>
    <h1>{{handleReset("测试mixins111")}}</h1>
    <h1>{{msg}}</h1>
    <h1>{{fatherMsg}}</h1>
    <h1>计算属性：{{countChange}}，结果+2:{{watchMsg}}</h1>
    <button class="btn" @click="addCcountChange">计算属性：add</button>
    <h1>监听：{{count}}，结果+1:{{watchMsg}}</h1>
    <button class="btn" @click="addCount">监听add</button>
    <button @click="showEdit('vuex')">测试vuex</button>
  </div>
</template>

  <!-- 使用ts书写js -->
<script lang="ts">
import router from "../router";
import { Component, Prop, Vue, Watch, Mixins } from "vue-property-decorator";
import MenuBar from "../components/MenuBar.vue";
import TestMixins from "../assets/mixin";
import ItemData from "../model/ItemData"; //导入类
import axios from "axios";
var data = {
  name: "小明",
  age: 18
};
// 组件
@Component({
  components: {
    MenuBar
  },
  mixins: [TestMixins]
})
export default class Home extends Vue {
  @Prop() private fatherMsg!: string;
  //   挂载值
  public msg!: number | string;
  public count: number = 0;
  public watchMsg: string = "开始";
  stickyList: [ItemData] = this.$store.state.onlySticky;
  //   声明周期
  created(): void {
    console.log("created");
    this.msg = data.name + data.age + "岁";

    const url1 = "https://www.foobar.com/my-app/user/add";
    axios.get(url1, { params: { type: "js" } }).then((res: any) => {
      console.log(res);
    });
    // 使用vue代理
    const url2 = "/my-app/user/add";
    axios.get(url2, { params: { type: "Ts" } }).then((res: any) => {
      console.log(res);
    });
  }
  beforeCreate() {
    console.log("beforecreate");
  }

  beforeMount() {
    console.log("beforemounted");
  }
  mounted() {
    console.log("mounted");
    // 页面内部使用路由守卫
    // router.beforeEach((to, from, next) => {
    //   console.log("我来自" + from.name);
    //   next();
    // });
  }
  // 进入路由触发
  beforeRouteEnter(to: any, from: any, next: () => void): void {
    console.log("beforeRouteEnter111");
    console.log(to.path);
    next();
  }

  beforeRouteUpdate(to: any, from: any, next: () => void): void {
    console.log("beforeRouteUpdate111");
    next();
  }
  // 离开路由触发
  beforeRouteLeave(to: any, from: any, next: () => void): void {
    console.log("beforeRouteLeave111");
    next();
  }
  //   计算属性
  get countChange(): number {
    return this.count;
  }
  set countChange(val) {
    this.count = val + 1;
  }
  //   监听
  @Watch("count")
  Count(newVal: number) {
    if (newVal < 10) {
      this.watchMsg = "我是数字" + newVal;
    } else {
      this.watchMsg = "我会继续增长";
    }
  }
  @Watch("watchMsg")
  clgMsg(newVal: string) {
    console.log(newVal);
  }
  //   方法
  addCcountChange(): number {
    return this.countChange++;
  }
  addCount(): number {
    return this.count++;
  }
  // vuex
  showEdit(item) {
    this.$store.commit("SHOW_EDIT", item);
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```

# 结语
经过以上的学习，对ts在vue项目中的常规用法也应该熟悉起来了，好了，在VUE/CIL项目中的用法已经学完了，下一篇讲：使用VueCil4 + TypeScript + Vuex + LocalStorage 完成的本地便签案例；

**如果本文对你有帮助的话，请不要忘记给我点赞打call哦~o(￣▽￣)ｄo
over~有其他问题请留言**
