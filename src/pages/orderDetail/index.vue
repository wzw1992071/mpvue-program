//订单详情页面
<template>
  <div class="mainBox">
    <div class="body-content">
      <div class="top-status">
        <div class="status-item">
          <div class="orderLine">
            <div>
              订单编号: {{orderNo}}
            </div>
            <div class="copy" @click="copyOrderNo">
              复制编号
            </div>
          </div>
         
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  data(){
    return{
      orderNo:"", // 订单编号
      firstStatusName: '', //订单状态
      order_type: null, // 订单状态
      appraise: null, // 评价状态
      // 订单退款退货状态
      refund_order_type: null,
      orderData: {},

    }
  },
  computed: {
  },
  methods: {
  // 复制到剪切板   
  copyOrderNo(){
    let that = this;
    wx.setClipboardData({
      data: that.orderNo,
      success: function(res) {
        wx.getClipboardData({
          success: function(res) {
            wx.showToast({
              title: '复制成功',
              icon: 'success',
              duration: 500
            })
          }
        })
      }
    })
   },
   
  },
  onLoad(option){
    wx.hideTabBar()
    this.orderNo = option.orderNum
    
  }
}
</script>

<style lang="less" scoped>
  .orderLine{
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    .copy{
      width: 150rpx;
      height: 50rpx;
      line-height: 50rpx;
      border: 1rpx solid #999;
      border-radius: 50rpx;
      text-align: center;
      color: #999;
    }
  }
</style>
