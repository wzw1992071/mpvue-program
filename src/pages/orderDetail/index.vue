//订单详情页面
<template>
  <div class="mainBox">
    <div class="body-content">
      <div class="top-status">
        <div class="status-item">
          <div class="orderLine">
            <div>
              订单编号: {{orderNum}}
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
          <div
              class="button"  
              v-for="(item,index) in buttonList" :key="index"
              :class="buttontype[item.type].className"
              @click="handleClick(item)"
            >
            {{buttontype[item.type].btnName}}
          </div>
          </div>
      </div> 
    </div>
     <OrderCarcle
        v-if="carcleShow"
        @commitCarcle="commitCarcle"
        @closeCarcle="closeCarcle"
      ></OrderCarcle>
  </div>
</template>

<script>
import OrderCarcle from "@/components/orderCarcle";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      orderNum: "", // 订单编号
      firstStatusName: "订单已完成", //订单状态
      order_type: null, // 订单状态
      appraise: null, // 评价状态
      // 订单退款退货状态
      refund_order_type: null,
      orderData: {},
      sellerPhone: "123456789", //卖家电话
      carcleShow: false //是否显示
    };
  },
  computed: {
    ...mapGetters(["buttontype"]),
    buttonList() {
      // return [0,1,2]
      return [
        {
          type: 0,
          phone: this.sellerPhone
        },
        {
          type: 1,
          orderNumber: this.orderNum
        },
        {
          type: 2,
          orderNumber: this.orderNum
        }
      ];
    }
  },
  methods: {
    // 复制到剪切板
    copyOrderNo() {
      let that = this;
      wx.setClipboardData({
        data: that.orderNum,
        success: function(res) {
          wx.getClipboardData({
            success: function(res) {
              wx.showToast({
                title: "复制成功",
                icon: "success",
                duration: 500
              });
            }
          });
        }
      });
    },
    handleClick(item) {
      this.buttontype[item.type].fn(item, this);
    },
    openCarcle() {
      wx.hideTabBar();
      this.carcleShow = true;
    },
    commitCarcle() {},
    closeCarcle() {
      this.carcleShow = false;
      wx.showTabBar();
    }
  },
  components: {
    OrderCarcle
  },
  onLoad(option) {
    wx.hideTabBar();
    this.orderNum = option.orderNum;
  }
};
</script>

<style lang="less" scoped>
.body-content {
  background: #eee;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  .status-item {
    height: 50px;
    padding: 20px 5px;
    background: #fff;
    font-size: 16px;
    & > div {
      margin-bottom: 10px;
      &:nth-of-type(2) {
        color: #ff0000;
        padding: 0 5px;
      }
    }
  }
  .orderLine {
    display: flex;
    justify-content: space-around;
    .copy {
      width: 150rpx;
      height: 50rpx;
      line-height: 50rpx;
      border: 1rpx solid #999;
      border-radius: 10rpx;
      text-align: center;
      color: #999;
    }
  }
  .buttonsArea {
    position: absolute;
    bottom: 0;
  }
}
</style>
