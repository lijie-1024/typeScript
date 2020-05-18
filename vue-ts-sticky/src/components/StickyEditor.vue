<template>
  <div class="StickyItem">
    <div class="cover-layer"></div>
    <div id="new-markdown" class="editor-layer">
      <div class="editor-top">
        <input
          class="editor-title form-control"
          type="text"
          placeholder="标题"
          v-model="sticky.title"
        />
        <div class="dropdown select-category">
          <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            <span class="category">{{$store.state.aHelper.changeCategoryType(sticky.categoryId)}}</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li @click="sticky.categoryId=0">
              <a>工作</a>
            </li>
            <li @click="sticky.categoryId=1">
              <a>生活</a>
            </li>
            <li @click="sticky.categoryId=2">
              <a>学习</a>
            </li>
          </ul>
        </div>
        <ul class="tools">
          <li class="save" @click="saveNew">
            <button class="btn btn-success">保存</button>
          </li>
          <li class="cancel" @click="closeWin">×</li>
        </ul>
      </div>
      <textarea class="text-content form-control" placeholder="内容" v-model="sticky.content"></textarea>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ItemData from "../model/ItemData";
// 组件
@Component
export default class StickyEditor extends Vue {
  sticky: ItemData = new ItemData(-1, 0);
  created(): void {
    this.sticky = this.$store.state.onlySticky;
  }
  saveNew(): void {
    // 关闭弹窗
    this.$store.state.isShowEdit = false;
    // 新增
    if (this.sticky.id <= -1) {
      this.$store.state.aHelper.add(this.sticky);
    } else {
      this.$store.state.aHelper.edit(this.sticky);
    }
  }
  closeWin(): void {
    this.$store.state.isShowEdit = false;
  }
}
</script>

<style>
</style>