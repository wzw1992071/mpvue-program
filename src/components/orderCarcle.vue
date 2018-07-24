<template>
  <div class="orderCarcle"> 
    <div class="popup-cancel-order-content">
       <div class="title">取消订单</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"OrderCarcle",
//   props: ['goodInfo'],
  data(){
    return  {
     
    }
  },
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
  }
}
</style>