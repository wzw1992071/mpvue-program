import request from '@/utils/request'
let login={

}

let order={
    // 获取订单列表
    getItems(data){
        return request({
            url:'/?m=Buyers&c=BuyOrderMain&a=orderList',
            data,
            method:'GET'
        })
    }
}

let me= {

}
let oftenBuy = {

}
export  {login,order,me,oftenBuy}