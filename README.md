# my-project

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

然后打开微信调试工具打开小程序，然后路径就选择dist文件夹就好

调试过程 在src的main.js设值首页就可以直接到需要调试的页面，如果需要token或者授权就做个登录页，然后跳转到需要的页面

vuex,less这些就跟vue项目一样在config里面配就好了（本项目集成的less）

页面跳转必须用微信自带跳转，没有vue-router

坑：
1.暂时不知道run build有啥用，因为dev已经可以满足需求了。。。
2.小程序会默认先加载所以页面，所以vue生命周期里面的mounted,小程序用独特生命周期 onLoad即可


相关资料：
http://mpvue.com/mpvue/#_8
http://developers.weixin.qq.com/miniprogram/dev/api/ui-tabbar.html#wxhidetabbarobject

