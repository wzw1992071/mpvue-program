// 我的页面
<template>
  <div  class="mainBox">
      我的页面
  </div>
</template>

<script>

export default {

  computed: {

  },
  methods: {

  },
  onLoad(){
    wx.showTabBar()
    console.log(1)
  }
}
</script>

<style lang="less" scoped>
 .mainBox{
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  .title{
    color: red
  }
 }
</style>