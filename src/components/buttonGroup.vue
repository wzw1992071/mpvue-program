<template>
  <div class="buttonGroup">
    <div 
      class="button"  
      :class="buttontype[item].className"
      v-for="(item,index) in buttonList" :key="index"
      @click="buttontype[item].fn">
        {{buttontype[item].btnName}}
    </div>
  </div>
</template>

<script>
export default {
  name:"ButtonGroup",
  props: [
      'buttonList'
  ],
  data(){
    return  {
        buttontype:[
            {
                btnName:"联系卖家",
                fn:function(){

                },
                className:"defaultBtn"
            },
            {
                btnName:"修改地址",
                fn:function(){

                },
                className:"defaultBtn"
            },
            {
                btnName:"取消订单",
                fn:function(){

                },
                className:"defaultBtn"
            },
            {
                btnName:"立即支付",
                fn:function(){

                },
                className:"defaultBtn"
            },
            {
                btnName:"确认发货",
                fn:function(){

                },
                className:"defaultBtn"
            }
        ]
    }
  },
  onLoad(){
    console.log(this.buttonList)
  }
}
</script>

<style>
    .buttonGroup{
        display: flex;
        justify-content: flex-end;
    }
</style>