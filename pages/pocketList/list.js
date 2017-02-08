var app = getApp()
Page({
  data: {
    motto: '列表页',
    userInfo: {},
    src: 'http://cdn.qiniu.app.huizuche.com/book/top_usa_1.jpg',
    "bookChapters":[
      {
        "bookcontent":[{
            "contentiD":92,
            "contentname":"海外自驾必读",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook1_usa.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":1,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"海外自驾必读"
            }],
       "chapteriD":36,
       "chaptername":"预订前",
       "display_num":-1,
       "ename":"Overview",
       "sequence":1,
       "type":4
      },
    {
        "bookcontent":[
          {
            "contentiD":112,
            "contentname":"准备租车材料",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook2.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":2,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"准备租车材料"
            },
            {
            "contentiD":112,
            "contentname":"租车费用计算",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook3.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":2,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"租车费用计算"
            },
            {
            "contentiD":112,
            "contentname":"选购租车保险",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook4.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":2,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"选购租车保险"
            }
            ],
       "chapteriD":36,
       "chaptername":"预订时",
       "display_num":-1,
       "ename":"Before Abroad",
       "sequence":2,
       "type":4
    },
    {
        "bookcontent":[
          {
            "contentiD":112,
            "contentname":"前往租车门店",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook5.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":3,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"前往租车门店"
            },
            {
            "contentiD":112,
            "contentname":"看懂租车合同",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook6.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":3,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"看懂租车合同"
            },
            {
            "contentiD":112,
            "contentname":"门店取车须知",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook7.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":3,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"门店取车须知"
            }
            ],
       "chapteriD":36,
       "chaptername":"取车",
       "display_num":-1,
       "ename":"Take Up",
       "sequence":3,
       "type":4
    },
    {
        "bookcontent":[
          {
            "contentiD":112,
            "contentname":"美国交规攻略",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook8.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":4,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"美国交规攻略"
            },
            {
            "contentiD":112,
            "contentname":"停车缴费须知",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook9.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":4,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"停车缴费须知"
            },
            {
            "contentiD":112,
            "contentname":"加油小贴士",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook10.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":4,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"加油小贴士"
            },
            {
            "contentiD":112,
            "contentname":"车辆故障处理",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook11.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":4,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"车辆故障处理"
            },
            {
            "contentiD":112,
            "contentname":"如何使用导航",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook12.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":4,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"如何使用导航"
            }
            ],
       "chapteriD":36,
       "chaptername":"在路上",
       "display_num":-1,
       "ename":"Driving Tips",
       "sequence":4,
       "type":4
    },
    {
        "bookcontent":[
          {
            "contentiD":112,
            "contentname":"还车注意事项",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook13.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":5,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"还车注意事项"
            },
            {
            "contentiD":112,
            "contentname":"保险如何理赔",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook14.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":5,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"保险如何理赔"
            },
            {
            "contentiD":112,
            "contentname":"罚款如何缴纳",
            "imgurl":"http://7xpm50.com1.z0.glb.clouddn.com/newbook15.jpg",
            "lnkurl":"https://m.huizuche.com/PocketBook/PocketChaptersV2?id=92",        
            "sequence":5,
            "sharedes":"新手指南，解答各种常见租车问题。",
            "sharepic":"",
            "sharettl":"罚款如何缴纳"
            }
            ],
       "chapteriD":36,
       "chaptername":"还车",
       "display_num":-1,
       "ename":"Drop Off",
       "sequence":5,
       "type":4
    }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    
  }
})
