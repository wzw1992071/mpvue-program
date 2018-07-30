<template>
  <div class="item">
    <div class="title">
      <div class="shopName" @click="goShopDetail">
          <span class="iconfont icon-mendian"></span>
          <p>{{shopName}}</p>
      </div>
      <div>
          <span class="icon iconfont icon-jiantou"></span>
      </div>
      <div class="status">
        <div
          v-if="otherStatus !== 24 && otherStatus !== 25"
          class="status">{{orderMainStatus[status]}}</div>
        <div class="action">{{otherOtherStatus[otherStatus]}}</div>
      </div>
    </div>
    <div class="createTime">
      下单时间: &nbsp;&nbsp;{{orderTime}}
    </div>
   
    <!-- 大于3个商品值显示3个其余用查看更多，点击进入订单详情 -->
    <div
      v-if="goods.length > 3"
      class="show-more"
      @click="goOrderDetail()"
      >
      <div v-for="(item, idx) in goods" :key="idx">
        <div
          v-if="idx < 3"
          class="goods">
          <div class="thumb">
            <!-- <img :src="cutImg(completePath(item.goods_img), 64, 0, 2)" :alt="item.goods_name"> -->
          </div>
          <div class="info">{{item.goods_name}}</div>
          <div class="data">
            <div class="price">￥{{item.unit_price}}</div>
            <div class="numbers">×{{item.num}}</div>
          </div>
        </div>
      
      </div>
      <div class="showMoreOrder">
        <div class="show-more-text">查看更多</div>
        <span class="icon iconfont icon-jiantou"></span>
      </div>
    </div>
    <div
     v-if="goods.length < 3"
      class="show-more"
      @click="goOrderDetail()"
      >
      <div v-for="(item, idx) in goods" :key="idx">
        <div

          class="goods">
          <div class="thumb">
            <!-- <img :src="cutImg(completePath(item.goods_img), 64, 0, 2)" :alt="item.goods_name"> -->
          </div>
          <div class="info">{{item.goods_name}}</div>
          <div class="data">
            <div class="price">￥{{item.unit_price}}</div>
            <div class="numbers">×{{item.num}}</div>
          </div>
        </div>
      
      </div>
    </div>
    <div class="statistics-bar">
      <span>共{{goods.length}}种商品 合计:</span>
      <span class="price">￥{{allMoney}}</span>
      <span class="sub">（不含运费）</span>
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
        <!-- @click="buttontype[item.type].fn(item,this)" -->
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:"OrderItem",
  props: [
    "goods", //商品列表
    "orderTime", //下单时间
    "orderNum", //订单编号
    "shopName", //店铺名称
    "status", //订单状态
    "payStatus", //订单支付状态
    "allMoney", //订单总金额
    "otherStatus", //订单子状态
    "appraise", //订单评价状态
    "shopId", //店铺ID
    "sellerPhone", //店铺电话
  ],
  computed:{
    ...mapGetters(['buttontype']),
    buttonList(){
      // return [0,1,2]
      return [
        {
          type:0,
          phone:this.sellerPhone
        },
        {
          type:1,
          orderNumber:this.orderNum
        },
        {
          type:2,
          orderNumber:this.orderNum
        }
      ]
    },
    
  },
  data(){
    return  {
      orderMainStatus: {
        1: '待付款',
        2: '待发货',
        3: '待收货',
        4: '交易完成',
        6: '退款',
        8: '交易完成',
        11: '退货',
        13: '交易关闭'
      },
      otherOtherStatus: {
        14: '申请退款',
        15: '卖家拒绝退款',
        16: '申请退货',
        17: '卖家拒绝退货',
        18: '等待卖家退款',
        19: '等待退货',
        20: '卖家取消订单',
        21: '拒绝取消订单',
        22: '集采-等待卖家报价',
        23: '集采-待付款',
        24: '未付款-调货',
        25: '未付款-自行协商'
      },
   
    }
  },
  methods:{
    // 去店铺详情
    goShopDetail(shopId){
      wx.navigateTo({   
        url: `/pages/shopDetail/main?shopId=${shopId}`
      })
    },
    handleClick(item){
      this.buttontype[item.type].fn(item,this)
    },
    goOrderDetail(){
      wx.navigateTo({   
        url: `/pages/orderDetail/main?orderNum=${this.orderNum}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .item {
    font-size: 30rpx;
    margin: 30rpx;
    margin-top: 0;
    padding: 10rpx 0;
    .title{
      display: flex;
      justify-content: space-between;
      margin: 30rpx 0rpx;
      
      .shopName{
        display: flex;
        &>span{
          font-size: 36rpx;
          margin-right: 15rpx;
        }
      }
      .icon{
        // font-size: 30rpx;
      }
    }
    .createTime{
      margin:10rpx 0;
      // font-size: 30rpx;
    }
    .status{
      text-align: right;
    }
    .show-more{
      .showMoreOrder{
        display: flex;
        justify-content:flex-end;
      }
    }
    .statistics-bar{
      text-align: right;
    }
    
  }
  .goods{
    width: calc(100% - 1rem);
    height: 1.5rem;
    padding: .5rem;
    margin-bottom: .3rem;
    background-color: #f5f5f5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    justify-content:space-around;
    
  }

  // 按钮组样式
  .buttonGroup{
        display: flex;
        justify-content: flex-end;
        margin: 10rpx 0 ;
        .button{
           padding: 5rpx;
           border-radius: 10rpx;
            margin-left: 20rpx;
           &.defaultBtn{
               border: 1rpx solid #ccc;
               color:  #ccc;
           }
           &.blueBtn{
               border: 1rpx solid rgb(36, 154, 249);
               color:  rgb(36, 154, 249);
           }

        }
    }
</style>
