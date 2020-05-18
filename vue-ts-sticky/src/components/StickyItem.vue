<template>
  <div class="StickyItem">
    <div class="sticky">
      <div class="mark"></div>
      <div class="sticky-heading">
        <h5 class="title">{{sticky.title}}</h5>
        <ul class="tools">
          <li class="edit" @click="showEdit">
            <button class="btn">edit</button>
          </li>
          <li class="delete" @click="doDel">
            <button class="btn">delete</button>
          </li>
        </ul>
      </div>
      <h6 class="sticky-info">
        <span class="timeStamp">{{sticky.createTime}}</span>
        <span class="category">分类: {{$store.state.aHelper.changeCategoryType(sticky.categoryId) }}</span>
      </h6>
      <div class="content">
        <div class="text">{{sticky.content}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ItemData from "../model/ItemData";
// 组件
@Component
export default class StickyItem extends Vue {
  @Prop() sticky!: ItemData;
  created(): void {}
  showEdit(): void {
    let item = JSON.parse(JSON.stringify(this.sticky));
    this.$store.commit("SHOW_EDIT", item);
  }
  doDel(): void {
    if (!confirm(`确认要删除<${this.sticky.title}>的笔记吗？`)) return;
    this.$store.state.aHelper.remove(this.sticky.id);
  }
}
</script>

<style>
</style>