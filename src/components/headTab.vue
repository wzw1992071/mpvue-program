// tabInfo传参类型
// [{
//     name:
//     Badge:
//     value:
// }]

<template>
  <div >
      <ul class="tabBox">
          <li :class="{ active: (index==choiceTab) }" v-for="(item,index) in tabInfo" :key="index" @click="tabChange(item.value,index)">{{item.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name:"HeadTab",
  props: ['tabInfo',"choiceTab"],
  
    data(){
        return  {
            
        }
    },
    methods:{
        tabChange(value,index){
            if(index == this.choiceTab){
                return false;
            }
            this.$emit("changeTab",index);
        }
    },
    onLoad(){
        
    }
}
</script>

<style lang="less" scope>
    .tabBox {
        font-size: 0.3rem;
        background: #fff;
        display: flex;
        justify-content:space-around;
        height: 80rpx;
        line-height: 80rpx;
        border-bottom: 1px solid #eee;
        li{
            width: 150rpx;
            text-align: center;
        }
        .active{
            color:#249af9;
            border-bottom: 1px solid #249af9;
        }
    }
</style>
