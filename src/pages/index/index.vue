// 首页
<template>
  <div class="mainBox">
   <p class="title">{{msg}}</p>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  data(){
    return  {
      msg:"这是首页"
    }
  },
  computed: {
    ...mapGetters(['userInfo', 'baseUrl']),
  },
  methods: {

  },
  created(){
    // 获取基本信息
  },
  onLoad() {
    // 底部tabBar处理
    wx.showTabBar()
  },
}
</script>

<style scoped lang="less">
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
