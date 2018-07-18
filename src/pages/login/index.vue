// 初始页，进来会判断是否授权在跳转至首页
<template>
 <div>
    <button v-if="showBtn" open-type="getUserInfo" @getuserinfo="onGotUserInfo">点击授权</button>
    <div @click="goIndex">去首页</div>
 </div>
</template>

<script>

export default {
  data () {
    return {
      showBtn:false
    }
  },

  components: {
  
  },

  methods: {
    onGotUserInfo(e){
      // console.log(e.mp.detail)
      if(e.mp.detail){
        console.log(e.mp.detail.userInfo)
        this.$store.dispatch("login",e.mp.detail.userInfo);
        this.goIndex()
      }
      
    },
    goIndex(){
      wx.reLaunch({
        url:'/pages/order/main'
      })
    }
    
  },
  created () {
    wx.getSetting({
      success: (res) => {
        if(res.authSetting["scope.userInfo"]){
          wx.getUserInfo({
            success: (res)=> {
              this.$store.dispatch("login",res.userInfo);
              this.goIndex()
            }
          })
        }else{
          this.showBtn=true
        }
      }
    })
  }
}
</script>

<style scoped>

</style>
