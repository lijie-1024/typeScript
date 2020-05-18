<template>
  <div id="stickys">
    <div class="container">
      <!-- 由很多个单个列表组成 -->
      <div class="row">
        <StickyItem
          class="mb-5 col-md-4 col-sm-4"
          v-for="item in filterList() "
          :key="item.id"
          :sticky="item"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import StickyItem from "./StickyItem.vue";
import ItemData from "../model/ItemData";

// 组件
@Component({
  components: {
    StickyItem
  }
})
export default class ItemList extends Vue {
  stickyList: [ItemData] = this.$store.state.aHelper.stickyList;
  filterList() {
    if (this.$store.state.filterCateId == -1) {
      return this.stickyList;
    } else {
      let list = this.stickyList.filter((item: ItemData) => {
        return item.categoryId == this.$store.state.filterCateId;
      });
      return list;
    }
  }
}
</script>