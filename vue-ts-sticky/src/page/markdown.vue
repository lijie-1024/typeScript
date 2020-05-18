<template>
  <div class="markdown container">
    <MenuBar />
    <ul class="nav nav-pills nav-justified">
      <li role="presentation" @click="mdChange(1,'ts01语法')">
        <a href="#">ts01语法</a>
      </li>
      <li role="presentation">
        <a href="#" @click="mdChange(2,'ts02html安装运行及案例')">ts02安装及html案例</a>
      </li>
      <li role="presentation">
        <a href="#" @click="mdChange(3,'ts03vue+ts语法合集学习')">ts03vue+ts语法合集学习</a>
      </li>
      <li role="presentation">
        <a href="#" @click="mdChange(4,'ts04vue+ts便签案例')">ts04vue+ts便签案例</a>
      </li>
    </ul>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">标题：{{title}}</h3>
      </div>
      <div class="panel-body">
        <article class="context" v-html="context"></article>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuBar from "../components/MenuBar.vue";
import MD1 from "../md/ts01语法.md";
import MD2 from "../md/ts02安装运行.md";
import MD3 from "../md/ts03vue+ts.md";
import MD4 from "../md/ts04vue+ts案例.md";
import marked from "marked";
@Component({
  components: {
    MenuBar
  }
})
export default class Markdown extends Vue {
  public context: any;
  public title: string = "学习笔记1";
  created() {
    this.context = marked(MD3);
  }
  mdChange(num, title) {
    this.title = title;
    if (num == 1) {
      this.context = marked(MD1);
    } else if (num == 2) {
      this.context = marked(MD2);
    } else if (num == 3) {
      this.context = marked(MD3);
    } else if (num == 4) {
      this.context = marked(MD4);
    } else {
      this.context = marked(MD1);
    }
  }
  // get compiledMarkdown() {
  //   return marked(MD3, { sanitize: true });
  // }
  // set compiledMarkdown(val) {
  //   console.log(val)
  //   this.context = val;
  // }
}
</script> 

<style lang="less" scope>
.nav.nav-pills {
  padding: 10px;
}
</style>