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
          <div>
            {{firstStatusName}}
          </div>
        </div>
      </div>
      <div class="buttonsArea">
        <div class="buttonGroup">
         
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
      firstStatusName: '订单已完成', //订单状态
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
  .body-content{
    background: #eee;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    .status-item{
       height: 50px;
      padding: 20px 5px;
      background: #fff;
      font-size: 16px;
      &>div{
        margin-bottom: 10px;
        &:nth-of-type(2){
          color: #ff0000;
          padding: 0 5px;
        }
      }
    }
    .orderLine{
     
      display: flex;
      justify-content: space-around;
      
      .copy{
        width: 150rpx;
        height: 50rpx;
        line-height: 50rpx;
        border: 1rpx solid #999;
        border-radius: 10rpx;
        text-align: center;
        color: #999;
      }
    }
  }
 
</style>
