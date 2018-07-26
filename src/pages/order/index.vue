// 订单页面
<template>
  <div  class="mainBox">
      <HeadTab 
        :tabInfo="tabInfo" :choiceTab="choiceTab"
        @changeTab="changeTab">
        头部</HeadTab>
      <scroll-view class="orderBox" scroll-y style="height: 90%" @scrolltolower="loadmore">
        <div class="orderItem" v-for="(item, index) in orderList" :key="index">
          <OrderItem 
          :key="item.shop_id"
          :order-num="item.order_num"
          :shop-name="item.seller_shop_name"
          :status="item.main_status"
          :payStatus="item.buy_status"
          :goods="item.goods_info"
          :appraise="item.appraise"
          :shop-id="item.shop_id"
          :order-time="item.order_time"
          :other-status="item.other_status"
          :all-money="item.all_money"
          :sellerPhone="item.seller_phone"
          @openCarcle="openCarcle"
          ></OrderItem>
        </div>
      </scroll-view>
      <OrderCarcle
        v-if="carcleShow"
        @commitCarcle="commitCarcle"
        @closeCarcle="closeCarcle"
      ></OrderCarcle>
  </div>
</template>

<script>
import {order} from '@/http/http'
import HeadTab from '@/components/headTab'
import OrderItem from '@/components/orderItem'
import OrderCarcle from '@/components/orderCarcle'
export default {
  data(){
    return{
      isMore:false, //是否可以加载更多(默认不允许以免滚动条滚动加载太多)
      page:0,//默认加载页数
      choiceTab:0,  //选中的页签
      pageSize:10, //每次请求加载数量
      // 订单列表
      orderList:[
      
      ],
      // 页签信息
      tabInfo:[
        {
          title:"全部",
          value:null,
          name:"all"
        },
        {
          title:"待付款",
          value:1,
          name:"pending_payment",
        },
        {
          title:"待发货",
          value:2,
          name:"shipment_pending",
        },
        {
          title:"待收货",
          value:3,
          name:"waiting_for_delivery",
        },
        {
          title:"待评价",
          value:4,
          name:"waiting_for_evaluation",
        }
      ],
      // 是否显示取消订单
      carcleShow:false,
      // 取消订单订单号
      carcleNumber:""
    }
  },
  computed: {
  },
  methods: {
    // 切换页签
    changeTab(index){  
      this.choiceTab=index;
      this.page= 0
      this.goods=[]
      this.getData()
      
    },
    // 加载更多
    loadmore(){
      if(this.isMore){
        this.goods= this.goods.concat([
          {name:"小吃11"},
          {name:"小吃12"},
          {name:"小吃13"},
          {name:"小吃14"},
          {name:"小吃15"},
        ])
        this.isMore=false;
      }
      
    },
    // 获取数据
    getData(){
      // console.log(order)
      // order.getItems({
      //   user_id:"1111",
      //   status:this.tabInfo[this.choiceTab].value,
      //   value:this.page,
      //   size:this.pageSize
      // }).then(res=>{
      let res = {
        code: 0,
        data: {
          order_infos: [
            {
              'shop_id': 12,
              order_time: '2017-11-11 12:21',
              'order_num': '2-1452958295-Ucey8XJF',
              'seller_shop_name': '测试号杨氏冷冻',
              'seller_phone': '18280933708',
              'main_status': 1,
              'buy_status': 0,
              'other_status': null,
              'appraise': 3,
              'goods_kind': 1,
              'all_money': '6000.00',
              'goods_info': [
                {
                  'goods_name': '测试冻品',
                  'unit_price': '200.00',
                  'num': 5,
                  'goods_img': '',
                  'refund_num': 1
                },
                {
                  'goods_name': '测试冻品',
                  'unit_price': '500.00',
                  'num': 5,
                  'goods_img': '',
                  'refund_num': 1
                },
                {
                  'goods_name': '测试冻品',
                  'unit_price': '500.00',
                  'num': 5,
                  'goods_img': '',
                  'refund_num': 1
                },
                {
                  'goods_name': '测试冻品',
                  'unit_price': '500.00',
                  'num': 5,
                  'goods_img': '',
                  'refund_num': 1
                }
              ],
              'refund': {
                'buyer_apply_reason': '321',
                'seller_refuse_reason': '陈浩州',
                'money': '0.00',
                'evidence': [
                  'dada/saddsada.jpg',
                  'deda.jpg',
                  'dadsd.jpg'
                ]
              }
            },
            {
              shop_id: 2,
              order_time: '2017-11-11 12:21',
              'order_num': '2-1452958295-Ucey8XJF',
              'seller_shop_name': '测试号杨氏冷冻',
              'seller_phone': '18280933708',
              'main_status': 2,
              'buy_status': 10,
              'other_status': 16,
              'appraise': 3,
              'goods_kind': 1,
              'all_money': '6000.00',
              'goods_info': [
                {
                  'goods_name': '测试冻品',
                  'unit_price': '500.00',
                  'num': 5,
                  'goods_img': '',
                  'refund_num': 1
                }
              ],
              'refund': {
                'buyer_apply_reason': '321',
                'seller_refuse_reason': '陈浩州',
                'money': '0.00',
                'evidence': [
                  'dada/saddsada.jpg',
                  'deda.jpg',
                  'dadsd.jpg'
                ]
              }
            },
            {
              shop_id: 9,
              order_time: '2017-11-11 12:21',
              'order_num': '2-1452958295-Ucey8XJF',
              'seller_shop_name': '测试号杨氏冷冻',
              'seller_phone': '18280933708',
              'main_status': 4,
              'buy_status': 10,
              'other_status': 16,
              'appraise': 2,
              'goods_kind': 1,
              'all_money': '6000.00',
              'goods_info': [
                {
                  'goods_name': '测试冻品',
                  'unit_price': '500.00',
                  'num': 5,
                  'goods_img': '',
                  'refund_num': 1
                }
              ],
              'refund': {
                'buyer_apply_reason': '321',
                'seller_refuse_reason': '陈浩州',
                'money': '0.00',
                'evidence': [
                  'dada/saddsada.jpg',
                  'deda.jpg',
                  'dadsd.jpg'
                ]
              }
            },
            {
              shop_id: 8,
              order_time: '2017-11-11 12:21',
              'order_num': '2-1452958295-Ucey8XJF',
              'seller_shop_name': '测试号杨氏冷冻',
              'seller_phone': '18280933708',
              'main_status': 4,
              'buy_status': 1,
              'other_status': 16,
              'appraise': 4,
              'goods_kind': 1,
              'all_money': '6000.00',
              'goods_info': [
                {
                  'goods_name': '测试冻品',
                  'unit_price': '500.00',
                  'num': 5,
                  'goods_img': '',
                  'refund_num': 1
                }
              ],
              'refund': {
                'buyer_apply_reason': '321',
                'seller_refuse_reason': '陈浩州',
                'money': '0.00',
                'evidence': [
                  'dada/saddsada.jpg',
                  'deda.jpg',
                  'dadsd.jpg'
                ]
              }
            },
            {
              shop_id: 89,
              order_time: '2017-11-11 12:21',
              'order_num': '2-1452958295-Ucey8XJF',
              'seller_shop_name': '测试号杨氏冷冻',
              'seller_phone': '18280933708',
              'main_status': 3,
              'buy_status': 2,
              'other_status': 16,
              'appraise': 3,
              'goods_kind': 1,
              'all_money': '6000.00',
              'goods_info': [
                {
                  'goods_name': '测试冻品',
                  'unit_price': '500.00',
                  'num': 5,
                  'goods_img': '',
                  'refund_num': 1
                }
              ],
              'refund': {
                'buyer_apply_reason': '321',
                'seller_refuse_reason': '陈浩州',
                'money': '0.00',
                'evidence': [
                  'dada/saddsada.jpg',
                  'deda.jpg',
                  'dadsd.jpg'
                ]
              }
            }
          ],
          page: 1,
          total_count: 50,
          diff_count: {
            waitPayCount: 0,
            waitSendCount: 0,
            waitGetCount: 3,
            waitAppraiseCount: 1
          }
        },
        message: '获取成功'
      }
      this.orderList=this.orderList.concat(res.data.order_infos)
      // }).catch(err=>{
          // console.log("请求订单列表错误",err)
      // })

    },
    // 打开取消订单
    openCarcle(orderNumber){
       wx.hideTabBar()
      this.carcleShow=true;
    },
    // 提交取消订单
    commitCarcle(){

    },
    // 关闭取消订单
    closeCarcle(){
      this.carcleShow=false;
      wx.showTabBar()
    }
  },
  components: {
    OrderItem,
    HeadTab,
    OrderCarcle
  },
  onLoad(){
    wx.showTabBar()
    // wx.hideTabBar()
    this.getData()
  }
}
</script>

<style lang="less" scoped>
 .mainBox{
   background: #f5f5f5;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  .title{
    height: 5%;
  }
  .orderBox{
    background:#f5f5f5;
    .orderItem{
      background: #fff;
      // padding: 5rpx 0;
    }
  }
 }
</style>