<template>
  <div class="orderCarcle"> 
    <div class="popup-cancel-order-content">
      <div class="title">取消订单</div>
      <div class="cancel-reason">
          <div class="hint">取消原因</div>
          <div class="cancel-reason-items">
              <div class="reasonBox" v-for="(item,index) in reason" :key="index" @click="clickreason(item)">
                <div class="reasonRadio" :class="{active: chioceReason == item.num}"></div>
                <div class="reasonText">{{item.name}}</div>
              </div>
          </div>
          <div class="moreReason">
            <textarea v-model="moreReason" cols="30" rows="10" maxlength="30" placeholder="补充说明（限30个字）"></textarea>
          </div>
          <div class="hint">您确定要取消订单吗？订单取消后，不可恢复。</div>
         
      </div>
      <div class="buttons">
          <div @click="closeCarcle">关闭</div>
          <div class="sure">确认取消</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:"OrderCarcle",
//   props: ['goodInfo'],
  data(){
    return  {
      reason:[],
      chioceReason:"",
      moreReason:""
    }
  },
  methods:{
    clickreason(item){
      this.chioceReason=item.num 
    },
    closeCarcle(){
      this.$emit("closeCarcle")
    }
  },
  onLoad(){
    this.reason=[
      {name: "不想买了", num: 7},
      {name: "订单无法支付", num: 8},
      {name: "订单信息错误", num: 9},
      {name: "价格不合适", num: 10},
      {name: "下错单了", num: 11},
      {name: "线下交易", num: 12},
      {name: "其他", num: 13}
    ]
  }
}
</script>

<style scope lang="less">
.orderCarcle {
  background-color: rgba(0,0,0,.5);
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  .popup-cancel-order-content{
    position: absolute;
    width: 100%;
    bottom:0;
    height: 60%;
    background-color: #fff;

    .title{
      background-color:#ffffff;
      display:flex;
      justify-content:center;
      align-items:center;
      border-bottom:1px solid #e9e9e9;
      font-size:32rpx;
      color:#333;
      height: 80rpx;
    }
    .cancel-reason{
      padding: 0 20rpx;
      .hint{
        font-size:32rpx;
        height: 40rpx;
        line-height:40rpx;
        color:#666666;
      }
      .cancel-reason-items{
        display: flex;
        justify-content: flex-start;
        flex-wrap:wrap ;
        font-size: 28rpx;
        .reasonBox{
          width: 33%;
          display: flex;
          margin-top: 20rpx;
          .reasonRadio{
            width: 28rpx;
            height: 28rpx;
            margin-right: 8rpx;
            border-radius: 18rpx;
            border: 1px solid #999999;
              &.active{
                background-color:#fd4b4d;
                border-color:#fd4b4d;
              }
          }
        }
        
      }
      .moreReason{
        margin-top: 10px;
        textarea{
          font-size: 16px;
          width: 90%;
          padding-top: 10px;
          padding-left: 5%;
          padding-right: 5%;
          height: 100px;
          background: #eee;
        }
      }
      
    }
    .buttons{
      width: 100%;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #efefef;
      div{
        width: 50%;
        text-align: center;
        line-height: 100rpx;
        height: 100rpx;
        &.sure{
          color: #fff;
          background-color: rgb(253, 75, 77);
        }
      }
    }
         
  }
}
</style>