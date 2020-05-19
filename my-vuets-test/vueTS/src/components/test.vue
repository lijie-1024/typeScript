import {componentA,componentB} from '@/components';

export default {
	components: { componentA, componentB},
	props: {
    propA: { type: Number },
    propB: { default: 'default value' },
    propC: { type: [String, Boolean] },
  }
  // 组件数据
  data () {
    return {
      message: 'Hello'
    }
  },
  // 计算属性
  computed: {
    reversedMessage () {
      return this.message.split('').reverse().join('')
    }
    // Vuex数据
    step() {
    	return this.$store.state.count
    }
  },
  methods: {
    changeMessage () {
      this.message = "Good bye"
    },
    getName() {
    	let name = this.$store.getters['person/name']
    	return name
    }
  },
  // 生命周期
  created () { },
  mounted () { },
  updated () { },
  destroyed () { }
}
