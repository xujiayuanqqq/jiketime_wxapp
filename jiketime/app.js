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
    data: [],
    userInfo: null,
    pages: [
      { id: "1", picture: "../image/avatar1.png", name: "王天一", introduce: "工学博士，副教授", instr: "机器学习40讲", content: "帮你打通机器学习的任督二脉", price: "￥45/40期", learn: "7510 人与你共同学习" },
      { id: "2", picture: "../image/avatar2.png", name: "蔡能", introduce: "原网易游戏引擎架构师，资深游...", instr: "从0开始学游戏开发", content: "你的游戏开发入门第一课", price: "￥68/36期", learn: "3157 人与你共同学习" },
      { id: "4", picture: "../image/avatar3.png", name: "杨晓峰", introduce: "Oracle首席工程师", instr: "Java核心技术36讲", content: "Oracle首席工程师带你修炼Java内功", price: "￥68/36期", learn: "15756 人与你共同学习" },
      { id: "5", picture: "../image/avatar4.png", name: "李运华", introduce: "资深技术专家", instr: "从0开始学架构", content: "资深技术专家的实战架构心法", price: "￥99/50期", learn: "20706 人与你共同学习" },
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
      { id: "14", images: "https://static001.geekbang.org/resource/image/69/8e/6979179fbd3996243ee1ba2dfb3d088e.jpg", detail: "16774 人与你共同学习", price: "￥199", period: "年" },
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
      { id: "17", images: "https://static001.geekbang.org/resource/image/fc/74/fcede256a5b5d88e04ce5a78b5c56574.jpg", detail: "3614 人与你共同学习", price: "￥9", period: "6篇" },
      { id: "18", images: "https://static001.geekbang.org/resource/image/99/c2/99c6075c5ab74d00075914e2fdd990c2.jpg", detail: "3614 人与你共同学习", price: "￥9", period: "6篇" },
      { id: "19", images: "https://static001.geekbang.org/resource/image/a8/86/a84d980a9f43f0dd342f493a30539386.jpg", detail: "3614 人与你共同学习", price: "￥6", period: "5篇" },
      { id: "20", images: "https://static001.geekbang.org/resource/image/09/3e/09d0a5a6d26ad4bebcfc9ad80107ac3e.jpg", detail: "3614 人与你共同学习", price: "￥1", period: "6篇" },
    ],
    fullpage: [
      {
        id: "1", images: "https://static001.geekbang.org/resource/image/c4/4c/c46297fc1374ae3c7eb1ab91026dc34c.jpg", avatar: "https://static001.geekbang.org/resource/image/fb/95/fbaeb18dda283a46c4288bc755140395.jpg", name: "王天一", people: "2915人购买", profession: "工学博士，副教授", 
        courseCatalog: [
          { id: 1, num: "开篇词", chapter: "打通修炼机器学习的任督二脉" },
          { id: 2, num: "01", chapter: "频率视角下的机器学习" },
          { id: 3, num: "02", chapter: "贝叶斯视角下的机器学习" },
          { id: 4, num: "03", chapter: "学什么与怎么学" },
          { id: 5, num: "04", chapter: "计算学习理论" },
          { id: 6, num: "05", chapter: "模型的分类方式" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥68"
      },
      {
        id: "2", images: "https://static001.geekbang.org/resource/image/dd/c6/dd9bb9d7d4a4f957b55ba0a538c4ccc6.jpg", avatar: "https://static001.geekbang.org/resource/image/ad/f1/adc78314987b3e01ca43ba18f603b0f1.jpg", name: "蔡能", people: "3242人购买", profession: "原网易游戏引擎架构师，资深游戏底层技术专家", courseCatalog: [
          { id: 1, num: "开篇词", chapter: "跟我学，你也可以开发一款游戏！" },
          { id: 2, num: "第1讲", chapter: " 游戏开发需要了解哪些背景知识？" },
          { id: 3, num: "第2讲 ", chapter: "2D游戏和3D游戏有什么区别？" },
          { id: 4, num: "第3讲 ", chapter: "游戏的发动机：游戏引擎" },
          { id: 5, num: "第4讲", chapter: "底层绘图接口的妙用" },
          { id: 6, num: "第5讲 ", chapter: "构建游戏场景的武器：地图编辑器" },
          { id: 7, num: "第6讲", chapter: "从0开始整理开发流程" },
          { id: 8, num: "第7讲", chapter: "如何建立一个Windows窗体？" },
          { id: 9, num: "第8讲", chapter: "如何区分图形和图像？" },
          { id: 10, num: "第9讲", chapter: "如何绘制游戏背景？" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥68"
      },
      {
        id: "3", images: "https://static001.geekbang.org/resource/image/12/6f/12409b235fadf207aadc471dfb85086f.jpg", avatar: "https://static001.geekbang.org/resource/image/99/57/99f9772bb4ff0d815bb75f6812d24f57.jpg", name: "刘超", people: "12855人购买", profession: "网易研究院云计算技术部首席架构师", courseCatalog: [
          { id: 1, num: "开篇词", chapter: "想成为技术牛人？先搞定网络协议！" },
          { id: 2, num: "第1讲", chapter: "为什么要学习网络协议？" },
          { id: 3, num: "第2讲 ", chapter: "网络分层的真实含义是什么？" },
          { id: 4, num: "第3讲 ", chapter: "ifconfig：最熟悉又陌生的命令行" },
          { id: 5, num: "第4讲", chapter: "DHCP与PXE:IP是怎么来的，又是怎么没的？" },
          { id: 6, num: "第5讲 ", chapter: "从物理层到MAC层：如何在宿舍里自己组网玩联机游戏" },
          { id: 7, num: "第6讲", chapter: "交换机与VLAN：办公室太复杂，我要回学校" },
          { id: 8, num: "第7讲", chapter: "如何建立一个Windows窗体？" },
          { id: 9, num: "第8讲", chapter: "ICMP与ping：投石问路的侦察兵" },
          { id: 10, num: "第9讲", chapter: "世界这么大，我想出网关：欧洲十国游与玄奘西行" },
          { id: 11, num: "第10讲", chapter: " 路由协议：西出网关无故人，敢问路在何方" },
          { id: 12, num: "第11讲", chapter: "UDP协议：因性善而简单，难免碰到“城会玩”" },
          { id: 13, num: "第12讲", chapter: "TCP协议（上）：因性恶而复杂，先恶后善反轻松" },
          { id: 14, num: "第13讲", chapter: "TCP协议（下）：西行必定多妖孽，恒心智慧消磨难" },
          { id: 15, num: "第14讲", chapter: "套接字Socket：Talk is cheap, show me the code" }       
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥68"
      },
      {
        id: "4", images: "https://static001.geekbang.org/resource/image/b4/64/b4fec6729691973d76fb3d597148b864.jpg", avatar: "https://static001.geekbang.org/resource/image/e3/67/e3f052421017446dfa575f8ea64a4567.jpg", name: "杨晓峰", people: "16234人购买", profession: "Oracle首席工程师", courseCatalog: [
          { id: 1, num: "开篇词", chapter: "跟我学，你也可以开发一款游戏！" },
          { id: 2, num: "第1讲", chapter: " 游戏开发需要了解哪些背景知识？" },
          { id: 3, num: "第2讲 ", chapter: "2D游戏和3D游戏有什么区别？" },
          { id: 4, num: "第3讲 ", chapter: "游戏的发动机：游戏引擎" },
          { id: 5, num: "第4讲", chapter: "底层绘图接口的妙用" },
          { id: 6, num: "第5讲 ", chapter: "构建游戏场景的武器：地图编辑器" },
          { id: 7, num: "第6讲", chapter: "从0开始整理开发流程" },
          { id: 8, num: "第7讲", chapter: "如何建立一个Windows窗体？" },
          { id: 9, num: "第8讲", chapter: "如何区分图形和图像？" },
          { id: 10, num: "第9讲", chapter: "如何绘制游戏背景？" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥68"
      },
      {
        id: "5", images: "https://static001.geekbang.org/resource/image/0e/95/0eff41ad84353ba49c1e2d2bb755b795.jpg", avatar: "https://static001.geekbang.org/resource/image/14/90/14a627175f4a0b5eeb5d484f87fe6490.jpg", name: "李运华", people: "20900人购买", profession: "资深技术专家", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥99"
      },
      {
        id: "6", images: "https://static001.geekbang.org/resource/image/17/91/17325241592515d595640d4cd4334e91.jpg", avatar: "https://static001.geekbang.org/resource/image/59/5a/5900a350505f39b7fdeba29426a54f5a.png", name: "曲晓音", people: "6328人购买", profession: "Facebook产品经理", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥68"
      },
      {
        id: "7", images: "https://static001.geekbang.org/resource/image/8b/d6/8b01addad9ec0173b86b52c19fbd2dd6.jpg", avatar: "https://static001.geekbang.org/resource/image/cf/f8/cfc165873615d47a5067e899fdcbe9f8.jpg", name: "TGO鲲鹏会", people: "4371人购买", profession: "TGO鲲鹏会智囊团", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥299"
      },
      {
        id: "8", images: "https://static001.geekbang.org/resource/image/d7/20/d7bb28f985feece6bd550537bf359620.jpg", avatar: "https://static001.geekbang.org/resource/image/94/2b/94f6ed5ab292004dcd2f030b420f0a2b.jpg", name: "陈浩", people: "10575人购买", profession: "元界CTO", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥58"
      },
      {
        id: "9", images: "https://static001.geekbang.org/resource/image/89/96/89be56d6b8ce062eaf00c9dde69faf96.jpg", avatar: "https://static001.geekbang.org/resource/image/f7/5e/f785aac3340694cbccb4b9b2def6a15e.jpg", name: "刑无刀", people: "5146人购买", profession: "链家网资深算法专家，8年推荐系统工程师", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥68"
      },
      {
        id: "10", images: "https://static001.geekbang.org/resource/image/27/3e/27e5a9fca1c05cb475a89b8e2dafc53e.jpg", avatar: "https://static001.geekbang.org/resource/image/ed/5e/ed0d3a0ef481eb3a3cfe2787ae2ea75e.jpg", name: "赵成", people: "2644人购买", profession: "美丽联合集团技术服务经理", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥68"
      },
      {
        id: "11", images: "https://static001.geekbang.org/resource/image/ac/8e/ace12cadc9a44447be22ed6378ac858e.jpg", avatar: "https://static001.geekbang.org/resource/image/fb/95/fbaeb18dda283a46c4288bc755140395.jpg", name: "王天一", people: "5920人购买", profession: "工学博士，副教授", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥68"
      },
      {
        id: "12", images: "https://static001.geekbang.org/resource/image/c4/4c/c46297fc1374ae3c7eb1ab91026dc34c.jpg", avatar: "https://static001.geekbang.org/resource/image/d6/c6/d6c6a52f406f91451f0b84df263e36c6.jpg", name: "邱岳", people: "5685人购买", profession: "无码科技产品经理，公众号二爷鉴书作者", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥58"
      },
      {
        id: "13", images: "https://static001.geekbang.org/resource/image/7a/e4/7a94548027ab5f9a8d572743d40a6ae4.jpg", avatar: "https://static001.geekbang.org/resource/image/a2/25/a213cd71bfbd486d559ab51023486425.jpg", name: "朱赟", people: "6656人购买", profession: "计算机博士，Airbnb技术经理", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥68"
      },
      {
        id: "14", images: "https://static001.geekbang.org/resource/image/69/8e/6979179fbd3996243ee1ba2dfb3d088e.jpg", avatar: "https://static001.geekbang.org/resource/image/99/39/9918350ef60b2405af821dfd9b0d4039.png", name: "陈皓", people: "18205人购买", profession: "网名“左耳朵耗子”，资深技术专家，骨灰级程序员。", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥299"
      },
      {
        id: "15", images: "https://static001.geekbang.org/resource/image/82/82/8256345522fc22f13e83f45669056182.jpg", avatar: "https://static001.geekbang.org/resource/image/05/29/052f84043181b2038834d7d016d41629.png", name: "洪亮劼", people: "2125人购买", profession: "Etsy数据科学主管，前雅虎研究院资深科学家", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥199"
      },
      {
        id: "16", images: "https://static001.geekbang.org/resource/image/51/b0/515d6af3c89fd40b0ddc13dca42fbdb0.jpg", avatar: "https://static001.geekbang.org/resource/image/cc/a4/cc06e117d18ecf64aef430a05b6732a4.jpg", name: "徐飞", people: "1421人购买", profession: "计算机博士，资深架构师，深度思考者", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥199"
      },
      {
        id: "17", images: "https://static001.geekbang.org/resource/image/fc/74/fcede256a5b5d88e04ce5a78b5c56574.jpg", avatar: "https://static001.geekbang.org/resource/image/01/f8/010352c7e4c51e2e9b4b564a21d9c7f8.jpg", name: "李林锋", people: "4211人购买", profession: "《Netty 权威指南》、《分布式服务框架原理与实践》作者。", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥9"
      },
      {
        id: "18", images: "https://static001.geekbang.org/resource/image/99/c2/99c6075c5ab74d00075914e2fdd990c2.jpg", avatar: "https://static001.geekbang.org/resource/image/f1/6c/f18912f973f2736890e1506fb6876a6c.jpg", name: "周晶", people: "2207人购买", profession: "微博平台研发技术专家，高性能 OpenResty 开发框架 Vanilla 作者", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥9"
      },
      {
        id: "19", images: "https://static001.geekbang.org/resource/image/a8/86/a84d980a9f43f0dd342f493a30539386.jpg", avatar: "https://static001.geekbang.org/resource/image/a8/e8/a80dba37d84ddbe8fece5db4346f4de8.jpg", name: "极客时间", people: "1968人购买", profession: "极客时间编辑部", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥6"
      },
      {
        id: "20", images: "https://static001.geekbang.org/resource/image/09/3e/09d0a5a6d26ad4bebcfc9ad80107ac3e.jpg", avatar: "https://static001.geekbang.org/resource/image/a8/e8/a80dba37d84ddbe8fece5db4346f4de8.jpg", name: "极客时间", people: "5010人购买", profession: "极客时间编辑部", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "订阅￥1"
      },
      {
        id: "21", images: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3223946585,2472654286&fm=27&gp=0.jpg", avatar: "data:image/png;base64,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", name: "InfoQ", people: "377人购买", profession: "InfoQ编辑部", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "推荐给好友，免费领取"
      },
      {
        id: "22", images: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4088090855,1119816802&fm=27&gp=0.jpg", avatar: "data:image/png;base64,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", name: "InfoQ", people: "501人购买", profession: "InfoQ编辑部", courseCatalog: [
          { id: 1, num: "01", chapter: "Python语言的特点" },
          { id: 2, num: "02", chapter: "Python的发者历史与版本" },
          { id: 3, num: "03", chapter: "Python的安装" },
          { id: 4, num: "04", chapter: "Python程序的书写规则" },
          { id: 5, num: "05", chapter: "基础数据类型" },
          { id: 6, num: "06", chapter: "变量的定义和常用操作" },
          { id: 7, num: "07", chapter: "序列的概念" },
          { id: 8, num: "08", chapter: "字符串的定义和使用" },
          { id: 9, num: "09", chapter: "字符串的常用操作" },
          { id: 10, num: "10", chapter: "元组的定义和常用操作" },
        ], actionSheetItems: [
          { bindtap: 'Menu1', txt: '分享给好友' },
          { bindtap: 'Menu2', txt: '生成分享卡片' },
        ], subscribe: "推荐给好友，免费领取"
      }
    ],
    videopages: [
      {id: "1", className: "零基础学 Python", buy: "3645人购买", date: "每周上新", avatar: "https://static001.geekbang.org/resource/image/c1/eb/c15ac515d26a460fda90387c90093aeb.jpg?x-oss-process=image/resize,m_fill,h_50,w_50", authorName: "尹会生", pro: "金山软件西山居技术经理",        courseCatalog: [
        { id: 1, num: "开篇词", chapter: "打通修炼机器学习的任督二脉" },
        { id: 2, num: "01", chapter: "频率视角下的机器学习" },
        { id: 3, num: "02", chapter: "贝叶斯视角下的机器学习" },
        { id: 4, num: "03", chapter: "学什么与怎么学" },
        { id: 5, num: "04", chapter: "计算学习理论" },
        { id: 6, num: "05", chapter: "模型的分类方式" },
      ], actionSheetItems: [
        { bindtap: 'Menu1', txt: '分享给好友' },
        { bindtap: 'Menu2', txt: '生成分享卡片' },
      ], subscribe: "￥129", group: "3人成团", price: "加入学习￥199"},
      {id: "2", className: "微服务架构实战 160 讲", buy: "2928人购买", date: "160课时·约1600分钟", avatar: "https://static001.geekbang.org/resource/image/de/ae/de43e64eb2c486135d9bd33d702d26ae.jpg?x-oss-process=image/resize,m_fill,h_50,w_50", authorName: "杨波", pro: "拍拍贷研发总监、资深架构师、微服务技术专家。",        courseCatalog: [
        { id: 1, num: "开篇词", chapter: "打通修炼机器学习的任督二脉" },
        { id: 2, num: "01", chapter: "频率视角下的机器学习" },
        { id: 3, num: "02", chapter: "贝叶斯视角下的机器学习" },
        { id: 4, num: "03", chapter: "学什么与怎么学" },
        { id: 5, num: "04", chapter: "计算学习理论" },
        { id: 6, num: "05", chapter: "模型的分类方式" },
      ], actionSheetItems: [
        { bindtap: 'Menu1', txt: '分享给好友' },
        { bindtap: 'Menu2', txt: '生成分享卡片' },
      ], subscribe: "￥199", group: "3人成团", price: "加入学习￥299"},
      {id: "3", className: "9 小时搞定微信小程序开发", buy: "7869人购买", date: "91课时·约600分钟", avatar: "https://static001.geekbang.org/resource/image/d1/83/d18a743a666c0a645dfff2814f7e7483.jpg?x-oss-process=image/resize,m_fill,h_50,w_50", authorName: "高磊", pro: "腾讯 NOW 直播前端工程师，IVWEB 团队成员。",        courseCatalog: [
        { id: 1, num: "开篇词", chapter: "打通修炼机器学习的任督二脉" },
        { id: 2, num: "01", chapter: "频率视角下的机器学习" },
        { id: 3, num: "02", chapter: "贝叶斯视角下的机器学习" },
        { id: 4, num: "03", chapter: "学什么与怎么学" },
        { id: 5, num: "04", chapter: "计算学习理论" },
        { id: 6, num: "05", chapter: "模型的分类方式" },
      ], actionSheetItems: [
        { bindtap: 'Menu1', txt: '分享给好友' },
        { bindtap: 'Menu2', txt: '生成分享卡片' },
      ], subscribe: "暂不支持团购", group: "", price: "加入学习￥199"},
      {id: "4", className: "深度学习应用实践60讲", buy: "785人购买", date: "60课时·约520分钟", avatar: "https://static001.geekbang.org/resource/image/44/c6/4458b4f043ba09041ae1cf8ab74032c6.jpg?x-oss-process=image/resize,m_fill,h_50,w_50", authorName: "AICon人工智能专家团", pro: "张俊林，新浪微博资深算法专家 | 熊鹏飞，旷视科技高级研究员 | 邵蓥侠，明略数据技术顾问",        courseCatalog: [
        { id: 1, num: "开篇词", chapter: "打通修炼机器学习的任督二脉" },
        { id: 2, num: "01", chapter: "频率视角下的机器学习" },
        { id: 3, num: "02", chapter: "贝叶斯视角下的机器学习" },
        { id: 4, num: "03", chapter: "学什么与怎么学" },
        { id: 5, num: "04", chapter: "计算学习理论" },
        { id: 6, num: "05", chapter: "模型的分类方式" },
      ], actionSheetItems: [
        { bindtap: 'Menu1', txt: '分享给好友' },
        { bindtap: 'Menu2', txt: '生成分享卡片' },
      ], subscribe: "暂不支持团购", group: "", price: "加入学习￥299"},
      {id: "5", className: "微服务架构核心20讲", buy: "6758人购买", date: "20课时·约160分钟", avatar: "https://static001.geekbang.org/resource/image/83/e9/83c254eb5fc9cc9b2b28c1068417c6e9.png?x-oss-process=image/resize,m_fill,h_50,w_50", authorName: "杨波", pro: "拍拍贷框架研发部总监，资深架构师，微服务技术专家",        courseCatalog: [
        { id: 1, num: "开篇词", chapter: "打通修炼机器学习的任督二脉" },
        { id: 2, num: "01", chapter: "频率视角下的机器学习" },
        { id: 3, num: "02", chapter: "贝叶斯视角下的机器学习" },
        { id: 4, num: "03", chapter: "学什么与怎么学" },
        { id: 5, num: "04", chapter: "计算学习理论" },
        { id: 6, num: "05", chapter: "模型的分类方式" },
      ], actionSheetItems: [
        { bindtap: 'Menu1', txt: '分享给好友' },
        { bindtap: 'Menu2', txt: '生成分享卡片' },
      ], subscribe: "暂不支持团购", group: "", price: "加入学习￥39"},
    ]
  }
})