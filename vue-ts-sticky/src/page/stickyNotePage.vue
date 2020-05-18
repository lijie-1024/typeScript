<template>
  <div class="stickyNote">
    <MenuBar />
    <ItemList />
    <StickyEditor v-if="$store.state.isShowEdit" />
  </div>
</template>

<script lang="ts">
import  "../../public/common.css";

import { Component, Vue } from "vue-property-decorator";
import MenuBar from "../components/MenuBar.vue";
import ItemList from "../components/ItemList.vue";
import StickyEditor from "../components/StickyEditor.vue";
import ActionHelper from "../store/ActionHelper";
import { mapState, mapMutations } from "vuex";

@Component({
  components: {
    MenuBar,
    ItemList,
    StickyEditor
  }
})
export default class App extends Vue {
  created() {
    console.log(this.$store.state.aHelper.stickyList);
    // let item = new ActionHelper()
    // console.log(item)
  }
}
</script>

<style>
</style>
