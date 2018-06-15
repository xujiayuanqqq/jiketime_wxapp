//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    pages: [
      { id: "1", picture: "../image/avatar1.png", name: "王天一", introduce: "工学博士，副教授", instr: "机器学习40讲", content: "帮你打通机器学习的任督二脉", price: "￥45/40期", learn: "7510 人与你共同学习" },
      { id: "2", picture: "../image/avatar2.png", name: "蔡能", introduce: "原网易游戏引擎架构师，资深游...", instr: "从0开始学游戏开发", content: "你的游戏开发入门第一课", price: "￥68/36期", learn: "3157 人与你共同学习" },
      { id: "3", picture: "../image/avatar3.png", name: "杨晓峰", introduce: "Oracle首席工程师", instr: "Java核心技术36讲", content: "Oracle首席工程师带你修炼Java内功", price: "￥68/36期", learn: "15756 人与你共同学习" },
      { id: "4", picture: "../image/avatar4.png", name: "李运华", introduce: "资深技术专家", instr: "从0开始学架构", content: "资深技术专家的实战架构心法", price: "￥99/50期", learn: "20706 人与你共同学习" },
    ],
    chooseClass: [
      { id: "1", images: "https://static001.geekbang.org/resource/image/c4/4c/c46297fc1374ae3c7eb1ab91026dc34c.jpg", detail: "2790 人与你共同学习", price: "￥45", period: "40期" },
      { id: "2", images: "https://static001.geekbang.org/resource/image/dd/c6/dd9bb9d7d4a4f957b55ba0a538c4ccc6.jpg", detail: "3227 人与你共同学习", price: "￥68", period: "36期" },
      { id: "3", images: "https://static001.geekbang.org/resource/image/6b/1d/6b3183d7372a2ba35aa5fa621d14821d.jpg", detail: "12735 人与你共同学习", price: "￥68", period: "36期" },
      { id: "4", images: "https://static001.geekbang.org/resource/image/b4/64/b4fec6729691973d76fb3d597148b864.jpg", detail: "16090 人与你共同学习", price: "￥68", period: "36期" },
      { id: "5", images: "https://static001.geekbang.org/resource/image/0e/95/0eff41ad84353ba49c1e2d2bb755b795.jpg", detail: "20863 人与你共同学习", price: "￥99", period: "50期" },
      { id: "6", images: "https://static001.geekbang.org/resource/image/17/91/17325241592515d595640d4cd4334e91.jpg", detail: "6307 人与你共同学习", price: "￥68", period: "36期" },
      { id: "7", images: "https://static001.geekbang.org/resource/image/79/11/790c3d30f9a13220d4d7bab4fbab4911.jpg", detail: "4353 人与你共同学习", price: "￥299", period: "年" },
      { id: "8", images: "https://static001.geekbang.org/resource/image/04/dc/04f5dbd43596068d0980c9c16be9eedc.jpg", detail: "10453 人与你共同学习", price: "￥58", period: "36期" },
      { id: "9", images: "https://static001.geekbang.org/resource/image/89/96/89be56d6b8ce062eaf00c9dde69faf96.jpg", detail: "5130 人与你共同学习", price: "￥68", period: "36期" },
      { id: "10", images: "https://static001.geekbang.org/resource/image/27/3e/27e5a9fca1c05cb475a89b8e2dafc53e.jpg", detail: "2638 人与你共同学习", price: "￥68", period: "36期" },
      { id: "11", images: "https://static001.geekbang.org/resource/image/f3/5c/f305ebdb532099055515696069fc655c.jpg", detail: "5819 人与你共同学习", price: "￥68", period: "40期" },
      { id: "12", images: "https://static001.geekbang.org/resource/image/49/08/490531ac686058e070f7502f20b6d108.jpg", detail: "5676 人与你共同学习", price: "￥58", period: "45期" },
      { id: "13", images: "https://static001.geekbang.org/resource/image/7a/e4/7a94548027ab5f9a8d572743d40a6ae4.jpg", detail: "6645 人与你共同学习", price: "￥68", period: "36期" },
      { id: "4", images: "https://static001.geekbang.org/resource/image/69/8e/6979179fbd3996243ee1ba2dfb3d088e.jpg", detail: "16774 人与你共同学习", price: "￥199", period: "年" },
      { id: "15", images: "https://static001.geekbang.org/resource/image/e9/67/e9dcd84eb9a8b55cc5deb4018fcd0267.jpg", detail: "2119 人与你共同学习", price: "￥199", period: "年" },
      { id: "16", images: "https://static001.geekbang.org/resource/image/d7/df/d703483adf6bf885c28efe43a38b2ddf.jpg", detail: "1387 人与你共同学习", price: "￥199", period: "年" },
    ],
    videoClass: [
      { id: "1", images: "https://static001.geekbang.org/resource/image/49/96/49287709763f967f979437c1b74bc796.jpg", detail: "3614 人与你共同学习", price: "￥199", period: "70讲" },
      { id: "2", images: "https://static001.geekbang.org/resource/image/6c/12/6cfd6bd0f5a6de2a508ed23dec872712.jpg", detail: "2898 人与你共同学习", price: "￥299", period: "160讲" },
      { id: "3", images: "https://static001.geekbang.org/resource/image/5e/cb/5ecdcb3b8ce6fe736460bf2192c828cb.jpg", detail: "7861 人与你共同学习", price: "￥199", period: "91讲" },
      { id: "4", images: "https://static001.geekbang.org/resource/image/ae/0f/ae8472eb879135b95b39c8881540bd0f.jpg ", detail: "785 人与你共同学习", price: "￥299", period: "40期" },
      { id: "5", images: "https://static001.geekbang.org/resource/image/5a/a3/5a1e55ec50e66b1b26edbd29c9c705a3.jpg", detail: "6749 人与你共同学习", price: "￥39", period: "40期" },
    ],
    weClass: [
      { id: "1", images: "https://static001.geekbang.org/resource/image/fc/74/fcede256a5b5d88e04ce5a78b5c56574.jpg", detail: "3614 人与你共同学习", price: "￥9", period: "6篇" },
      { id: "2", images: "https://static001.geekbang.org/resource/image/99/c2/99c6075c5ab74d00075914e2fdd990c2.jpg", detail: "3614 人与你共同学习", price: "￥9", period: "6篇" },
      { id: "3", images: "https://static001.geekbang.org/resource/image/a8/86/a84d980a9f43f0dd342f493a30539386.jpg", detail: "3614 人与你共同学习", price: "￥6", period: "5篇" },
      { id: "4", images: "https://static001.geekbang.org/resource/image/09/3e/09d0a5a6d26ad4bebcfc9ad80107ac3e.jpg", detail: "3614 人与你共同学习", price: "￥1", period: "6篇" },
    ],
    courseCatalog: [
      { id: "1", num: "01", chapter: "Python语言的特点" },
      { id: "2", num: "02", chapter: "Python的发者历史与版本" },
      { id: "3", num: "03", chapter: "Python的安装" },
      { id: "4", num: "04", chapter: "Python程序的书写规则" },
      { id: "5", num: "05", chapter: "基础数据类型" },
      { id: "6", num: "06", chapter: "变量的定义和常用操作" },
      { id: "7", num: "07", chapter: "序列的概念" },
      { id: "8", num: "08", chapter: "字符串的定义和使用" },
      { id: "9", num: "09", chapter: "字符串的常用操作" },
      { id: "10", num: "10", chapter: "元组的定义和常用操作" },
    ],
  }
})