//购物车页面
<template>
  <div  class="mainBox">
    购物车页面
    <div @click="goIndex">去首页</div>
  </div>
</template>

<script>

export default {

  computed: {
  },
  methods: {
    goIndex(){
      wx.reLaunch({
        url:'/pages/index/main'
      })
    }
  },
  onLoad(){
    wx.hideTabBar()
  }
}
</script>

<style>

</style>
