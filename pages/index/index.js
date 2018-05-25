import config from '../../config/constant.js'
Page({
  data: {
    navList: [
      {
        content: '我的学习',
        img: 'nav-study',
        name: 'myStudy'
      },
      {
        content: '实用工具',
        img: 'nav-tools',
        name: 'tools'
      },
      {
        content: '培训计划',
        img: 'nav-plan',
        name: 'trainPlan'
      },
      {
        content: '问卷调查',
        img: 'nav-research',
        name: 'survey'
      }
    ],
    mainList: [
      {
        topLine: {
          img: 'title-new',
          title: '最新课程',
          color: '#0c6acc'
        },
        main: [
          {
            img: 'index-img1',
            content: '理财新法规',
            name: 'material'
          }, {
            img: 'index-img1',
            content: '理财新法规',
            name: 'material'
          },
        ],
        name: 'latestLesson'
      },
      {
        topLine: {
          img: 'title-hot',
          title: '热门推荐',
          color: '#f0324a'
        },
        main: [
          {
            img: 'index-img2',
            content: '企业文化',
            name: 'material'
          }, {
            img: 'index-img3',
            content: '开发新客户',
            name: 'material'
          },
        ],
        name: 'recommended'
      },
      {
        topLine: {
          img: 'title-information',
          title: '培训动态',
          color: '#09c6bb'
        },
        main: [
          {
            img: 'index-img4',
            content: '提升团队凝聚力培训',
            name: 'dynamicList'
          }, {
            img: 'index-img5',
            content: '销售培训',
            name: 'dynamicList'
          },
        ],
        name: 'dynamic'
      },
      {
        topLine: {
          img: 'title-history',
          title: '往期回顾',
          color: '#ff5025'
        },
        main: [
          {
            img: 'index-img6',
            content: '提升团队凝聚力培训',
            name: 'historyList'
          }, {
            img: 'index-img7',
            content: '销售培训',
            name: 'historyList'
          },
        ],
        name: 'history'
      },
    ],
    indicatorDots: true,
    indicatorColor: 'rgba(255,255,255,.8)',
    indicatorActiveColor: '#91d9ff',
    imgSrc: config.imgSrc
  },
  onLoad: function () {

  },
})
