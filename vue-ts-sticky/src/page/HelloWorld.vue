
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
<style scoped>
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
