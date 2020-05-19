<template>
  <div class="hello">
      <van-button type="primary">主要按钮</van-button>
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
    <h1>{{ msg }}</h1>
    <h2>{{message}}</h2>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
    message='hello2222'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    stroke-dasharray: 0%;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>