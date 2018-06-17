


![](https://user-gold-cdn.xitu.io/2018/6/17/1640b048a076c047?w=296&h=221&f=jpeg&s=17985)
***
# 前言
 暑假即将来临，你有什么好的安排呢？上班、旅游、宅在家打游戏......不管怎么样，希望你能抽出一点时间来学习，丰富自己。下面是我仿的极客时间小程序，做了一些总结，写给自己，也写给进来观看的你。
 
 ***
 # 前期准备
 - 前端开发工具：[VSCode](https://code.visualstudio.com/)、[微信web开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=2018119)
 - 微信小程序组件和API：[微信公众平台](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/framework.html)
 - 数据存放方法：  
 1. 把数据存入到[Easy Mock](https://www.easy-mock.com/login)，再请求数据。 
 2. 另外创建一个`.js`文件存入数据，在需要的地方引入。
 3. 存在全局下`app.js`中的`globalData`中，在引入的地方一定要加入`var app = getApp(); `不然数据无法引入。
 4. 还可以将数据存到你的服务器中，然后再向你的服务器进行请求数据。
 - 界面测量工具：[Mark Man](http://www.getmarkman.com/)
 - 图标：[Iconfont-阿里巴巴矢量图标库](http://www.iconfont.cn/)
 ***
# 主要功能
***
 ## 1. 两种在同页面切换不同内容的方法
### 效果图
***

![](https://user-gold-cdn.xitu.io/2018/6/17/1640bc234ce2d44a?w=287&h=503&f=gif&s=3822071)

![](https://user-gold-cdn.xitu.io/2018/6/17/1640bc85330d4520?w=287&h=503&f=gif&s=3124631)
***
页面结构:
- 第一种是使用[swiper](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)组件,它是一个滑块视图容器。主要用到的属性有`current`、`duration`、`bindchange`。
1. `current`是指当前所在滑块的 `index`；
2. `duration`是指滑动动画时长，也可以使用属性`autoplay`，当值为`true`时，会自动切换；
3. 使用`bindchange`属性是因为`current`改变时会触发`change`事件。
4. `swiper-item`组件仅能放在`swiper`组件中使用。小程序中的每个`swiper-item`就是一个滑块。
- 在我的小程序中因为不是每个滑块的结构都是一样的，但也有几个滑块的结构一样，我就使用了分开写和使用`wx:for`进行遍历。`wxml:`


![](https://user-gold-cdn.xitu.io/2018/6/17/1640c08a00d1c20e?w=835&h=377&f=png&s=46352)
使用这种交叉式的写法给后期界面跳转带来了很大的麻烦。
- js
``` 
data: {
    currentTab: 0,
    num: 1,
    pages: []
  },
  swiperTab: function(e) {
    // console.log(e);
    let number = e.detail.current + 1;  
    this.setData({
      currentTab: e.detail.current,
      num: number
    });
  },
onLoad: function(options) {
    this.setData({
    //把数据写在全局下，数据从这引入
      pages: app.globalData.pages
    })
  }
  ```
  我们发现当滑块变化时下面的数字也跟着对应变化，这主要用到了`current`属性的值，`current`的值是从`0`开始计数，而下面对应的数字是从`1`开始计数，只要将他的值加1后赋给`number`就行。
  ***
-  第二种直接用[view](https://developers.weixin.qq.com/miniprogram/dev/component/view.html)组件来写。其中还有更简单的方法可以让代码更加的简洁，就是在`class`属性值为`course-tab-nav`的`view`组件中直接用`wx:for`来进行遍历，后面的两个都可以不用写，直接写数据进来就行。我这里使用了更笨的方法，将每块都写了。

![](https://user-gold-cdn.xitu.io/2018/6/17/1640c5bf23bee59c?w=843&h=461&f=png&s=61139)
当`clickTab`点击事件发生时，会判断`currentTab`是否等于指定的值，当为`true`时，会显示为`on`的状态，并且会显示其内容。
- wxss
```
.course-tab-nav.on{
    color: #F94312;
    border-bottom: 5rpx solid #F94312;
}
```
- js
```
  data: {
    currentTab: 0,
    chooseClass: [],
    videoClass: [],
    weClass: []
  },
  clickTab: function(e) {
    var index = e.currentTarget.dataset.index
    // console.log(index);
    this.setData({
      currentTab: index
    });
  },
onLoad: function (options) {
   this.setData({
      currentTab: 0,
      //数据从app.js中的globalData中引入
      chooseClass: app.globalData.chooseClass,
      videoClass: app.globalData.videoClass,
      weClass: app.globalData.weClass
    })
  },  
```
***
## 2. 携参跳转界面
- 在同页面中针对不同的点击事件跳转到相同页面，在跳转后的页面中显示相关的信息。

### 效果图

![](https://user-gold-cdn.xitu.io/2018/6/17/1640c8a3491b626d?w=287&h=503&f=gif&s=3122860)

![](https://user-gold-cdn.xitu.io/2018/6/17/1640c8d1ce6cefb7?w=287&h=503&f=gif&s=1978707)

![](https://user-gold-cdn.xitu.io/2018/6/17/1640c90791e80742?w=287&h=503&f=gif&s=1448329)
***
### 具体分析:
- 如何实现触发不同的事件跳转到同一个界面然后在界面中显示只属于自己的信息？
1. 因为没有后端的支持，无法请求到可变的数据。只有默默的写一些数据进来，模拟一下。这时把所有需要在同一个界面显示的信息归类好。在这里我要`提醒`一下，不要在这种界面最上层的组件中使用`wx:for`。我在这里就踩了一个`大坑`，它把我所有的数据全部都循环出来了，并没有得到我想要的效果，思考了许久才发现数据并不需要显示，只有当你需要看的时候它能显示出来就行。
2. 如何在你点击的时候进入的界面显示的是你的信息呢？界面如何感应到你的`召唤`?我的回答是你需要将你的信息进行排列，你的信息是以数组的形式进行存储，当外界传来的值对应着你数组的下标值时，就将数值作为你数组的下标，然后将数据进行输入。在点击事件中需要带参传入到跳转界面中。

 ```
   onLoad: function (options) {
    // console.log(app);
    var fullpage = app.globalData.fullpage;
    this.setData({
      fullpage: fullpage[options.index]
    })
  },
 ```
 - `options.index`就是外面传进来的参数，也就是`fullpage`数组的下标值。
 ```
   learnMore: function(e) {
    var index = e.currentTarget.dataset.index;
    // console.log(index);
    wx.navigateTo({
      url: '../items/detail/detail?index=' + index,
    })
  },
  watchMore: function(e) {
    var index = e.currentTarget.dataset.index;    
    wx.navigateTo({
      url: '../items/video/video?index=' + index,
    })
  },
  readMore: function(e) {
    var index = e.currentTarget.dataset.index + 16;
    wx.navigateTo({
      url: '../items/detail/detail?index=' + index,
    })
  },
 ```
 - [wx.navigateTo API](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html#wxnavigatetoobject)中的`url`属性提供需要跳转的应用内非` tabBar` 的页面的路径 , 路径后可以带参数。参数与路径之间使用`?`分隔，参数键与参数值用`=`相连，不同参数用`&`分隔。
 - 在这里我栽的最久的坑就是我不知道如何去找到对应的值将它传入到跳转界面中去。搜寻许久，发现远在天边近在眼前，最大的功劳莫归功于它`data-index`。它会获取当前`currentTarget`的下标。这个下标值是随着事件变化的，将值与你要获取第几个信息进行一一对应，再将值传入进去，就可以实现了。真是帮了我一个大忙。
 ***
## 附加
### 小程序的视频播放
- 直接用[video](https://developers.weixin.qq.com/miniprogram/dev/component/video.html)组件，将视频地址输入即可。
- 有的地址进行加密，在网上并不能获取到，这时可以将视频存到本地，在到本地进行请求，但是当别人在自己手机看的时候，就看不到视频了。
- 再不行的话，你就需要有个服务器了，可以将视频下载之后传到你的服务器内，生成一个可用地址，再进行请求就OK啦。
```
    <view class="head_video">
        <video class="dplayer-video dplayer-video-current" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video>
    </view>
```
我直接用`video`组件来实现这个视频播放功能。你也可以尝试一下其他方法，比如获取拍摄视频或从手机相册中选视频
```
<view class="container">
    <video src="{{src}}"></video>
    <button bindtap="bindButtonTap">获取视频</button>
</view>
```
```
Page({
    bindButtonTap: function() {
        var that = this
        wx.chooseVideo({
            sourceType: ['album','camera'],
            maxDuration: 60,
      camera: 'back',
            success: function(res) {
                that.setData({
                    src: res.tempFilePath
                })
            }
        })
    }
})
```
***
# 结束语
经过这段时间的学习，发现自己的能力远远不够啊，遇到bug很难解决。以后还需要多加学习，智商不够，时间来凑，再难的关也有通关的一天。
***
### 最后的最后

![](https://user-gold-cdn.xitu.io/2018/6/17/1640cd713ae38e1a?w=441&h=300&f=jpeg&s=13676)

如果想了解更多的话，可以查看我的[项目地址](https://github.com/xujiayuanqqq/jiketime_wxapp)。欢迎大家一起来讨论，提出您的想法。
![](https://user-gold-cdn.xitu.io/2018/6/17/1640ce71e01d7d4e?w=150&h=150&f=gif&s=25214)
QQ:1171242067

 