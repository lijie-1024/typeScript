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