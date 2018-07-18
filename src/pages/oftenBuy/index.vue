// 常规页面
<template>
  <div class="mainBox">
   常购
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
