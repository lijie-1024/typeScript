import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from "./ActionHelper";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全部的便签
    aHelper: new ActionHelper(),
    // 是否启用弹框
    isShowEdit: false,
    // 单个便签
    onlySticky: null,
    // 分类选择的类型ID
    filterCateId: -1
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
