const state = {
    // 用户信息
    userInfo :{
        
    },
    // 订单按钮信息
    buttontype:[
        {
            btnName:"联系卖家",
            fn:function(item){
                wx.makePhoneCall({
                    phoneNumber: item.phone //仅为示例，并非真实的电话号码
                })
            },
            className:"defaultBtn"
        },
        {
            btnName:"修改地址",
            fn:item=>{
                wx.navigateTo({
                    url: `/pages/update/main?id=${item.orderNumber}`
                })
            },
            className:"blueBtn"
        },
        {
            btnName:"取消订单",
            fn:(item,that)=>{
                try {
                    that.openCarcle()
                }
                catch(err) {
                    that.$emit("openCarcle",item.orderNumber);
                }
                // that.$emit("openCarcle",item.orderNumber);
                
                // console.log(this)
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

export default state