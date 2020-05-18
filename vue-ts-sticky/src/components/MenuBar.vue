<template>
  <div class="MenuBar">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand">vue+ts</a>
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-expanded="false"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse navbar-right">
          <ul class="nav navbar-nav">
            <li class="add dropdown">
              <a class="create-new dropdown-toggle" data-toggle="dropdown">新建</a>
              <ul class="dropdown-menu">
                <li>
                  <a @click="showAdd">文本便签</a>
                </li>
              </ul>
            </li>
            <li class="categories dropdown">
              <a class="current-category dropdown-toggle" data-toggle="dropdown">
                <router-link to="/">全部</router-link>
                <span class="count badge">{{doFilter(-1)}}</span>
              </a>
              <ul class="dropdown-menu">
                <li class="total" @click="doFilterByCateId(-1)">
                  <a>
                    全部
                    <span class="count badge">{{doFilter(-1)}}</span>
                  </a>
                </li>
                <li class="divider"></li>
                <li @click="doFilterByCateId(0)">
                  <a>
                    工作
                    <span class="count badge">{{doFilter(0)}}</span>
                  </a>
                </li>
                <li @click="doFilterByCateId(1)">
                  <a>
                    生活
                    <span class="count badge">{{doFilter(1)}}</span>
                  </a>
                </li>
                <li @click="doFilterByCateId(2)">
                  <a>
                    学习
                    <span class="count badge">{{doFilter(2)}}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="add dropdown">
              <a class="create-new dropdown-toggle" data-toggle="dropdown">其他</a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/hello">ts用法</router-link>
                  <router-link to="/learn">js用法</router-link>
                  <router-link to="/markdown">ts学习笔记合集</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";

// 组件
@Component
export default class MenuBar extends Vue {
  created(): void {}
  // 新增时弹框显示
  showAdd(): void {
    this.$store.state.onlySticky = new ItemData(-1, 0);
    this.$store.state.isShowEdit = true;
  }
  // 当前类别有多少个
  doFilter(cid: number): void {
    let list = this.$store.state.aHelper.stickyList;
    if (cid == -1) {
      return list.length;
    } else {
      return list.filter((i: ItemData) => i.categoryId == cid).length;
    }
  }
  //   切换类别显示
  doFilterByCateId(cid: number): void {
    this.$store.state.filterCateId = cid;
  }
}
</script>

<style>
</style>