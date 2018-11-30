import { Injectable } from '@angular/core';
import { TestQuestionsService } from '../views/testQuestions/testQuestions.service';


declare const $;

@Injectable()
export class AppdataService {
  menueIsShow = false;
  current = 1;
  draggableIS = [     // 拖动题
    { 'boolen': false },
    { 'boolen': false },
    { 'boolen': false },
    { 'boolen': false },
    { 'boolen': false },
  ]
  appboolen = {
    'type_three': false,    //视频
    'type_seven': false,   //依次点击出来
    'type_eight': false,     // 选择题
    'type_thirtyeight': false,     // 点击出现
    'type_fifteen': false,   // 拖动题
    'type_text': false,   // 静态页面
    'type_changeText': false,   // 选项卡切换
    'type_exclusive': false,   // 点击旋转
    'type_sequentialClicks': false,   // 顺序点击
    'type_paging': false,   // 上下翻页
    'type_imgText': false,   // 
    'type_changeImg': false, // 选项卡切换图片更换
    'type_icontext': false,   // 静态页面
  };
  /*
  isExistence 二级导航展开或者闭合状态
  isGetInfo 是否可以进入
  currentPage 点击导航进入对应的页码
  isAllowPageNum 当前点击最大length
  currentClickTheSet 返回上一页时，当前页面点击集合
  */
  Catalog = [
    {
      navTitle: '岗位框架',
      isExistence: false,
      isGetInfo: false,
      currentPage: 2,
      isChildNav: [],
    },
    {
      navTitle: '岗位编制',
      isExistence: false,
      isGetInfo: false,
      currentPage: 2,
      isChildNav: []
    },
    {
      navTitle: '岗位概述',
      isExistence: false,
      isGetInfo: false,
      currentPage: 2,
      isChildNav: [
        // {
        //   title: '服务站长/总经理',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 5,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '服务经理',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 6,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '服务顾问',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 7,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '质量检测员',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 8,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '内部培训员',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 9,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '信息员',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 10,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '备件经理',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 11,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '备品计划员',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 12,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '仓库管理员',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 13,
        //   studyState: '1',
        //   isChildNav: [],
        // },
      ]
    },
    {
      navTitle: '服务标准',
      isExistence: false,
      isGetInfo: false,
      currentPage: 3,
      isChildNav: [
      ]
    },
    {
      navTitle: '现场管理',
      isExistence: false,
      isGetInfo: false,
      currentPage: 4,
      isChildNav: [
        // {
        //   title: '客户接待区',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 4,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '客户休息区',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 5,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '车辆维修区',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 6,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '备件供应区',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 7,
        //   studyState: '1',
        //   isChildNav: [],
        // },
        // {
        //   title: '设备与工具',
        //   isExistence: false,
        //   isGetInfo: false,
        //   currentPage: 8,
        //   studyState: '1',
        //   isChildNav: [],
        // },
      ]
    },
  ];

  content = [
    {
      'video': [],
      'audio': [],
      'title': '',
      'describe': '',
      'textlist': [],
      'imglist': [],
      'tiplist': [],
      'check': [],
      'isPaging': true,
      'type': '',
    },
    // 课程目标
    {
      'video': [],
      'audio': [],
      'title': '课程目标',
      'describe': '',
      'isAllowPageNum': 0,
      'currentClickTheSet': [],
      'textlist': [
        {
          'title': '能够讲述经销服务商组织架构', 'titleStyle': {
            top: '166px',
            left: '225px',

          }
        },
        {
          'title': '能够讲述经销服务商岗位编制', 'titleStyle': {
            top: '166px',
            left: '702px',
          }
        },
        {
          'title': '能够讲述经销服务商服务流程', 'titleStyle': {
            top: '330px',
            left: '340px',
          }
        },
        // {
        //   'title': '能够讲述解放汽车发动机机械部件检修', 'titleStyle': {
        //     top: '330px',
        //     left: '585px',
        //   }
        // },
      ],
      'imglist': [{
        'img': './assets/images/project/curriculumObjectives.png',
        'imgStyle': {
          position: 'absolute',
          width: '70%',
          left: '150px',
          top: '60px',
        }
      }],
      'tiplist': [],
      'check': [],
      'isPaging': true,
      'type': 'type_text',
    },
    // 第二页
    {
      'video': [],
      'audio': [],
      'title': '', // 岗位框架
      'describe': '',
      'isAllowPageNum': 12,
      'currentClickTheSet': [],
      'anatomyIsShow': true,
      'rotateImgIsShow': true,
      'textlist': [
        {
          'navText': [
            {
              'text': '岗位框架',
              'style': {
                position: ' absolute',
                top: ' -33px',
                left: ' -60px',
                color: ' #999999',
                fontSize: ' 16px',
              }
            },
          ],
          'imglist': [
            {
              'isShow': false,
              'contentList': [
                {
                  'isShow': true,
                  'src': './assets/images/project/9_03.png',
                  'textlist': [
                    {
                      'twinkle': 'twinkle',
                      'text': '',
                      'style': {
                        'top': '158px',
                        'left': '524px',
                      },
                      'isShow': false,
                      'content': {
                        'text': '吸入管接口',
                        'style': {
                          'top': '120px',
                          'left': '450px',
                        }
                      }
                    },
                    {
                      'twinkle': 'twinkle',
                      'text': '',
                      'style': {
                        'top': '158px',
                        'left': '582px',
                      },
                      'isShow': false,
                      'content': {
                        'text': '压力管接头',
                        'style': {
                          'top': '120px',
                          'left': '507px',
                        }
                      }
                    },
                    {
                      'twinkle': 'twinkle',
                      'text': '',
                      'style': {
                        'top': '158px',
                        'left': '654px',
                      },
                      'isShow': false,
                      'content': {
                        'text': '回流管接头',
                        'style': {
                          'top': '120px',
                          'left': '581px',
                        }
                      }
                    },
                  ]
                },
                {
                  'isShow': false,
                  'src': './assets/images/project/fourNav-4.png',
                  'textlist': [

                  ]
                },
                {
                  'isShow': false,
                  'src': './assets/images/project/fourNav-5.png',
                  'textlist': [

                  ]
                },
              ]
            },

          ],
          'measureList': [
            {
              'isShow': false,
            },
            {
              'isShow': false,
            }
          ],
          'tiplist': {
            'src': './assets/images/project/9_03.png',
            'isShow': false,
            'textlist': [
              {
                'twinkle': 'twinkle',
                'text': '岗位编制',
                'style': {
                  'top': '-120px',
                  'left': '370px',
                  'width': '120px',
                  'height': '30px',
                  'textAlign': 'center',
                  'fontSize': '14px',
                  'lineHeight': '30px',
                  'borderRadius': '2px',
                  'color': '#ffffff',
                  'background': '#1c8dce',
                  'opacity': '1',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位编制',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': false,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '站长/总经理',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Stationmaster',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 无',
                          'style': {
                            position: 'absolute',
                            top: '244px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接下级 : 服务经理',
                          'style': {
                            position: 'absolute',
                            top: '272px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          // 'twinkle': 'twinkle',
                          'text': '负责一汽解放业务联系，并落实各项工作安排',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '确保客户满意',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '开发保养和维修业务以及备件业务的市场',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '领导全体人员采用以客户为导向的思维和行为',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '利用服务中与客户的接触来销售车辆确保客户满意',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '根据客户需求调整企业内部组织',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '遵守经销商准则完成当前的重点工作',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '实现适度的收益',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true
                      ,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '50px',
                            'left': '0px',
                            'width': '100%',
                          },
                          'src': './assets/images/project/10_02.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              {
                'twinkle': 'twinkle',
                'text': '',
                'style': {
                  'top': '-105px',
                  'left': '-61px',
                  'width': '150px',
                  'height': '38px',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位描述',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': true,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '站长/总经理',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Stationmaster',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 无',
                          'style': {
                            position: 'absolute',
                            top: '244px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接下级 : 服务经理',
                          'style': {
                            position: 'absolute',
                            top: '272px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          // 'twinkle': 'twinkle',
                          'text': '负责一汽解放业务联系，并落实各项工作安排',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '确保客户满意',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '开发保养和维修业务以及备件业务的市场',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '领导全体人员采用以客户为导向的思维和行为',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '利用服务中与客户的接触来销售车辆确保客户满意',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '根据客户需求调整企业内部组织',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '遵守经销商准则完成当前的重点工作',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '实现适度的收益',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true
                      ,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '166px',
                            'left': '100px',
                            'width': '110px',
                          },
                          'src': './assets/images/project/position_01.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '100px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing1.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '276px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing2.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              {
                'twinkle': 'twinkle',
                'text': '',
                'style': {
                  'top': '-43px',
                  'left': '-346px',
                  'width': '132px',
                  'height': '34px',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位描述',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': true,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '服务经理',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Service Manager',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 服务站长',
                          'style': {
                            position: 'absolute',
                            top: '238px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接下级 : 服务顾问、信息员、内部培训员、客户关系员',
                          'style': {
                            position: 'absolute',
                            top: '264px',
                            width: '360px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '负责解决服务过程中客户的投诉，参与重大客户投诉和危机事件的处理',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '制定出能增加所在责任区占有率的战略—增加保养和维修工时的市场占有率',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '接领导服务及车间部门员工的工作，监督和评价他们，并对他们的薪酬施加影响',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '利用服务中与客户的接触来销售车辆',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '166px',
                            'left': '100px',
                            'width': '110px',
                          },
                          'src': './assets/images/project/position_01.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '100px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing1.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '276px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing2.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              {
                'twinkle': 'twinkle',
                'text': '',
                'style': {
                  // 'top': '-43px',
                  // 'left': '242px',
                  'top': '71px',
                  'left': '-380px',
                  'width': '30px',
                  'height': '113px',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位描述',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': true,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '服务顾问',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Service Consultant',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 服务经理',
                          'style': {
                            position: 'absolute',
                            top: '244px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接下级 : 车间班组',
                          'style': {
                            position: 'absolute',
                            top: '272px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '倾听并明确客户需求，准确诊断故障和填写工单，以确保迅速和准确地对客户车辆进行保养和维修',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '利用与客户接触机会促进车辆以及备件/附件的销售',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '利用既定的方式、流程和系统来为客户服务',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '确保车间设备/人员利用的最佳化、企业效益的最大化',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '检查立法机构与一汽解放服务部制定准则、规定、条款',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '166px',
                            'left': '100px',
                            'width': '110px',
                          },
                          'src': './assets/images/project/position_02.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '100px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing1.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '276px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing2.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              {
                'twinkle': 'twinkle',
                'text': '',
                'style': {
                  // 'top': '-43px',
                  // 'left': '242px',
                  'top': '71px',
                  'left': '-187px',
                  'width': '30px',
                  'height': '113px',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位描述',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': true,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '质量检测员',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Quality Testing',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 服务经理',
                          'style': {
                            position: 'absolute',
                            top: '244px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '职务代理人 : 服务经理、车间管理员',
                          'style': {
                            position: 'absolute',
                            top: '272px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '确保根据客户的要求按时准确地全面完成客户车辆的保养和维修',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '确保车间维修技术，高质量地完成各项工作以保护客户的利益',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '协助服务经理负责收集并反馈重大、安全、批量质量信息',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '助一汽解放售后服务部开展技术管理工作',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '确保车间技术形象有助于企业树立最佳的形象',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '166px',
                            'left': '100px',
                            'width': '110px',
                          },
                          'src': './assets/images/project/position_03.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '100px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing1.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '276px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing2.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              {
                'twinkle': 'twinkle',
                'text': '',
                'style': {
                  'top': '71px',
                  'left': '-55px',
                  'width': '30px',
                  'height': '113px',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位描述',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': true,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '内部培训员',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Internal Training',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 服务经理',
                          'style': {
                            position: 'absolute',
                            top: '244px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '职务代理人 : 服务经理',
                          'style': {
                            position: 'absolute',
                            top: '272px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '协助一汽解放服务部开展技术培训工作',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '参加内部技术攻关组，对疑难问题进行攻关',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '负责培训专用工具的规范使用',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '对内部培训的效果进行监督、考核',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '接受一汽解放技术培训',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '责实施内部技术培训工作，组织协调其它内部培训项目',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '166px',
                            'left': '100px',
                            'width': '110px',
                          },
                          'src': './assets/images/project/position_03.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '100px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing1.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '276px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing2.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              {
                'twinkle': 'twinkle',
                'text': '',
                'style': {
                  'top': '71px',
                  'left': '-316px',
                  'width': '30px',
                  'height': '113px',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位描述',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': true,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '信息员',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Messenger',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 服务经理',
                          'style': {
                            position: 'absolute',
                            top: '244px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接下级 : 车间班组',
                          'style': {
                            position: 'absolute',
                            top: '272px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '各种资料、信息的归纳、分类、汇总，及时、准确地向有关部门进行反馈市场操作',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '观察客户的满意程度（投诉行为、电话回访）',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '观察市场的特别情况（客户结构、车辆分类）',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '协调服务顾问/经理和车间技师之间的业务活动',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '通过掌握的资料信息，为服务经理提供合理的建议',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '59px'
                          },
                          isShow: true,
                          'text': '检查所有与客户咨询与服务有关的，由立法机构、政府部门、行业管理部门和一汽解放制定的准则、规定和附属条款的执行情况',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '166px',
                            'left': '100px',
                            'width': '110px',
                          },
                          'src': './assets/images/project/position_01.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '100px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing1.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '276px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing2.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              {
                'twinkle': 'twinkle',
                'text': '',
                'style': {
                  'top': '-43px',
                  'left': '242px',
                  'width': '132px',
                  'height': '34px',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位描述',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': true,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '备件经理',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Spare parts Manager',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 服务站站长',
                          'style': {
                            position: 'absolute',
                            top: '244px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '职务代理人 : 备件订货计划员、备件仓库管理员',
                          'style': {
                            position: 'absolute',
                            top: '272px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '按要求供应备件，保证较高的备件一次满足率，有效地支持车间维修，满足柜台销售客户的期望',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '观察客户的满意程度（投诉行为、电话回访）',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '观察竞争者在备件/附件方面对客户提供哪些服务',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '根据“服务客户”的目标和业务利润指标，确保备件库存结构合理',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '参与制定企业目标，特别是销售、营业额和收益目标的制定，以便为整个企业目标做贡献',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '166px',
                            'left': '100px',
                            'width': '110px',
                          },
                          'src': './assets/images/project/position_01.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '100px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing1.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '276px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing2.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              {
                'twinkle': 'twinkle',
                'text': '',
                'style': {
                  'top': '71px',
                  'left': '182px',
                  'width': '30px',
                  'height': '113px',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位描述',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': true,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '备件计划',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Preparation Plan',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 备件经理',
                          'style': {
                            position: 'absolute',
                            top: '244px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接下级 : 备件',
                          'style': {
                            position: 'absolute',
                            top: '272px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '保证备件部门有较高的工作质量（供货时间、备件发货、结算），以保障客户利益市场操作',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '使备件部门对客户和竞争者的变化能作出快速反应而提出合理化建议',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '根据“服务客户”的目标和业务利润指标，确保备件库存结构合理',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '协助参与制定企业目标，特别是销售、营业额和收益目标的制定，以便为整个企业目标做贡献',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '166px',
                            'left': '100px',
                            'width': '110px',
                          },
                          'src': './assets/images/project/position_03.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '100px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing1.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '276px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing2.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              {
                'twinkle': 'twinkle',
                'text': '',
                'style': {
                  'top': '71px',
                  'left': '378px',
                  'width': '30px',
                  'height': '113px',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位描述',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': true,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '仓库管理',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Warehouse management',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 备件经理',
                          'style': {
                            position: 'absolute',
                            top: '244px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接下级 : 无',
                          'style': {
                            position: 'absolute',
                            top: '272px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '按要求供应备件，保证较高的备件一次满足率，以有效地支持车间',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '负责按要求对库存备件进行规范化的管理',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '负责备件的入库验收及维修备件的发放工作，建立库存帐目，保存原始凭证',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '提供给备件经理的有关备件部门工作的改进、建议',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '进行库存盘点（包括定期盘点与抽检）',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                          },
                          isShow: true,
                          'text': '协助制定备件位置码并适时进行调整',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '166px',
                            'left': '100px',
                            'width': '110px',
                          },
                          'src': './assets/images/project/position_03.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '100px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing1.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '276px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing2.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              {
                'twinkle': 'twinkle',
                'text': '',
                'style': {
                  'top': '216px',
                  'left': '-334px',
                  'width': '298px',
                  'height': '34px',
                },
                'isShow': false,
                'title': '',
                'childPage': {
                  'navText': [
                    {
                      'text': '岗位描述',
                      'style': {
                        position: ' absolute',
                        top: ' -33px',
                        left: ' -60px',
                        color: ' #999999',
                        fontSize: ' 16px',
                      }
                    },
                  ],
                  'content': [
                    {
                      'isShow': true,
                      'style': {
                        'top': '160px',

                      },
                      'contentTitleList': [
                        {
                          'oneDivStyle': {
                            position: 'absolute',
                            top: '137px',
                            left: '93px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                          isShow: false,
                          'text': '维修技师',
                          'style': {
                            position: 'absolute',
                            top: '140px',
                            left: '236px',
                            fontSize: '24px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': 'Maintenance Technician',
                          'style': {
                            position: 'absolute',
                            top: '174px',
                            left: '236px',
                            fontSize: '20px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接上级 : 服务经理',
                          'style': {
                            position: 'absolute',
                            top: '244px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '直接下级 : 初级技师',
                          'style': {
                            position: 'absolute',
                            top: '272px',
                            left: '104px',
                            fontSize: '18px',
                            color: 'rgb(105, 105, 105)',
                            fontWeight: 'bold',
                          },
                        },
                        {
                          'oneDivStyle': {

                          },
                          isShow: false,
                          'text': '工作场景',
                          'style': {
                            position: 'absolute',
                            top: '432px',
                            left: '246px',
                            fontSize: '12px',
                            color: 'rgb(105, 105, 105)',
                          },
                        },
                      ],
                      'contentTextList': [
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            // marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '按照派工单项目或用户现场要求进行维修作业',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            // marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '严格执行汽车维护工艺规范和修理技术标准进行维修作业',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            // marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '严格按照工位工序安全操作规程进行作业，杜绝事故发生',
                          'style': {

                          },
                        },
                        {
                          'oneDivStyle': {
                            display: 'inline-block',
                            width: '0',
                            height: '0',
                            borderTop: '7px solid #ffffff',
                            borderLeft: '9px solid #fede80',
                            borderBottom: '7px solid #ffffff',
                            marginBottom: '29px'
                          },
                          isShow: true,
                          'text': '修理过程中严格执行自检、互检和专职检验为内容的三检制进行',
                          'style': {

                          },
                        },
                      ],
                    },
                  ],
                  'imglist': [
                    {
                      'isShow': true,
                      'contentList': [
                        {
                          'isShow': true,
                          'style': {
                            'top': '166px',
                            'left': '100px',
                            'width': '110px',
                          },
                          'src': './assets/images/project/position_03.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '100px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing1.png',
                          'textlist': [

                          ]
                        },
                        {
                          'isShow': true,
                          'style': {
                            'top': '366px',
                            'left': '276px',
                            'height': '110px',
                          },
                          'src': './assets/images/project/changjing2.png',
                          'textlist': [

                          ]
                        },
                      ]
                    },
                  ],
                }
              },
              // {
              //   'twinkle': 'twinkle',
              //   'text': '',
              //   'style': {
              //     'top': '200px',
              //     'left': '450px',
              //   },
              //   'isShow': false,
              //   'title': '',
              //   'childPage': {
              //     'navText': [
              //       {
              //         'text': '站长/总经理',
              //         'style': {
              //           color: 'rgb(203, 209, 221)',
              //         }
              //       },
              //       {
              //         'text': '服务经理',
              //         'style': {
              //           color: 'rgb(3, 50, 129)',
              //         }
              //       },
              //       {
              //         'text': '服务顾问',
              //         'style': {
              //           color: 'rgb(3, 50, 129)',
              //         }
              //       },
              //       {
              //         'text': '质量检验员',
              //         'style': {
              //           color: 'rgb(3, 50, 129)',
              //         }
              //       },
              //       {
              //         'text': '内部培训',
              //         'style': {
              //           color: 'rgb(3, 50, 129)',
              //         }
              //       },
              //       {
              //         'text': '信息员',
              //         'style': {
              //           color: 'rgb(3, 50, 129)',
              //         }
              //       },
              //       {
              //         'text': '备件经理',
              //         'style': {
              //           color: 'rgb(3, 50, 129)',
              //         }
              //       },
              //       {
              //         'text': '备件计划',
              //         'style': {
              //           color: 'rgb(3, 50, 129)',
              //         }
              //       },
              //       {
              //         'text': '仓库管理',
              //         'style': {
              //           color: 'rgb(3, 50, 129)',
              //         }
              //       },
              //       {
              //         'text': '维修技师',
              //         'style': {
              //           color: 'rgb(3, 50, 129)',
              //         }
              //       },
              //     ],
              //     'content': [
              //       {
              //         'isShow': true,
              //         'style': {
              //           'top': '160px',

              //         },
              //         'contentTitleList': [
              //           {
              //             'oneDivStyle': {
              //               position: 'absolute',
              //               top: '137px',
              //               left: '93px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //             isShow: false,
              //             'text': '站长/总经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '140px',
              //               left: '236px',
              //               fontSize: '24px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': 'Stationmaster',
              //             'style': {
              //               position: 'absolute',
              //               top: '174px',
              //               left: '236px',
              //               fontSize: '20px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接上级 : 无',
              //             'style': {
              //               position: 'absolute',
              //               top: '244px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接下级 : 服务经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '272px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '工作场景',
              //             'style': {
              //               position: 'absolute',
              //               top: '432px',
              //               left: '246px',
              //               fontSize: '12px',
              //               color: 'rgb(105, 105, 105)',
              //             },
              //           },
              //         ],
              //         'contentTextList': [
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             // 'twinkle': 'twinkle',
              //             'text': '负责一汽解放业务联系，并落实各项工作安排',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '确保客户满意',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '开发保养和维修业务以及备件业务的市场',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '领导全体人员采用以客户为导向的思维和行为',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '利用服务中与客户的接触来销售车辆确保客户满意',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '根据客户需求调整企业内部组织',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '遵守经销商准则完成当前的重点工作',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '实现适度的收益',
              //             'style': {

              //             },
              //           },
              //         ],
              //       },
              //       {
              //         'isShow': false,
              //         'style': {
              //           'top': '160px',

              //         },
              //         'contentTitleList': [
              //           {
              //             'oneDivStyle': {
              //               position: 'absolute',
              //               top: '137px',
              //               left: '93px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //             isShow: false,
              //             'text': '服务经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '140px',
              //               left: '236px',
              //               fontSize: '24px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': 'Service Manager',
              //             'style': {
              //               position: 'absolute',
              //               top: '174px',
              //               left: '236px',
              //               fontSize: '20px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接上级 : 服务站长',
              //             'style': {
              //               position: 'absolute',
              //               top: '238px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接下级 : 服务顾问、信息员、内部培训员、客户关系员',
              //             'style': {
              //               position: 'absolute',
              //               top: '264px',
              //               width: '360px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '工作场景',
              //             'style': {
              //               position: 'absolute',
              //               top: '432px',
              //               left: '246px',
              //               fontSize: '12px',
              //               color: 'rgb(105, 105, 105)',
              //             },
              //           },
              //         ],
              //         'contentTextList': [
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '负责解决服务过程中客户的投诉，参与重大客户投诉和危机事件的处理',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '制定出能增加所在责任区占有率的战略—增加保养和维修工时的市场占有率',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '接领导服务及车间部门员工的工作，监督和评价他们，并对他们的薪酬施加影响',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '利用服务中与客户的接触来销售车辆',
              //             'style': {

              //             },
              //           },
              //         ],
              //       },
              //       {
              //         'isShow': false,
              //         'style': {
              //           'top': '160px',

              //         },
              //         'contentTitleList': [
              //           {
              //             'oneDivStyle': {
              //               position: 'absolute',
              //               top: '137px',
              //               left: '93px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //             isShow: false,
              //             'text': '服务顾问',
              //             'style': {
              //               position: 'absolute',
              //               top: '140px',
              //               left: '236px',
              //               fontSize: '24px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': 'Service Consultant',
              //             'style': {
              //               position: 'absolute',
              //               top: '174px',
              //               left: '236px',
              //               fontSize: '20px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接上级 : 服务经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '244px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接下级 : 车间班组',
              //             'style': {
              //               position: 'absolute',
              //               top: '272px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '工作场景',
              //             'style': {
              //               position: 'absolute',
              //               top: '432px',
              //               left: '246px',
              //               fontSize: '12px',
              //               color: 'rgb(105, 105, 105)',
              //             },
              //           },
              //         ],
              //         'contentTextList': [
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '倾听并明确客户需求，准确诊断故障和填写工单，以确保迅速和准确地对客户车辆进行保养和维修',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '利用与客户接触机会促进车辆以及备件/附件的销售',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '利用既定的方式、流程和系统来为客户服务',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '确保车间设备/人员利用的最佳化、企业效益的最大化',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '检查立法机构与一汽解放服务部制定准则、规定、条款',
              //             'style': {

              //             },
              //           },
              //         ],
              //       },
              //       {
              //         'isShow': false,
              //         'style': {
              //           'top': '160px',

              //         },
              //         'contentTitleList': [
              //           {
              //             'oneDivStyle': {
              //               position: 'absolute',
              //               top: '137px',
              //               left: '93px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //             isShow: false,
              //             'text': '质量检验员',
              //             'style': {
              //               position: 'absolute',
              //               top: '140px',
              //               left: '236px',
              //               fontSize: '24px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': 'Quality Testing',
              //             'style': {
              //               position: 'absolute',
              //               top: '174px',
              //               left: '236px',
              //               fontSize: '20px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接上级 : 服务经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '244px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '职务代理人 : 服务经理、车间管理员',
              //             'style': {
              //               position: 'absolute',
              //               top: '272px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '工作场景',
              //             'style': {
              //               position: 'absolute',
              //               top: '432px',
              //               left: '246px',
              //               fontSize: '12px',
              //               color: 'rgb(105, 105, 105)',
              //             },
              //           },
              //         ],
              //         'contentTextList': [
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '确保根据客户的要求按时准确地全面完成客户车辆的保养和维修',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '确保车间维修技术，高质量地完成各项工作以保护客户的利益',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '协助服务经理负责收集并反馈重大、安全、批量质量信息',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '助一汽解放售后服务部开展技术管理工作',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '确保车间技术形象有助于企业树立最佳的形象',
              //             'style': {

              //             },
              //           },
              //         ],
              //       },
              //       {
              //         'isShow': false,
              //         'style': {
              //           'top': '160px',

              //         },
              //         'contentTitleList': [
              //           {
              //             'oneDivStyle': {
              //               position: 'absolute',
              //               top: '137px',
              //               left: '93px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //             isShow: false,
              //             'text': '内部培训',
              //             'style': {
              //               position: 'absolute',
              //               top: '140px',
              //               left: '236px',
              //               fontSize: '24px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': 'Internal Training',
              //             'style': {
              //               position: 'absolute',
              //               top: '174px',
              //               left: '236px',
              //               fontSize: '20px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接上级 : 服务经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '244px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '职务代理人 : 服务经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '272px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '工作场景',
              //             'style': {
              //               position: 'absolute',
              //               top: '432px',
              //               left: '246px',
              //               fontSize: '12px',
              //               color: 'rgb(105, 105, 105)',
              //             },
              //           },
              //         ],
              //         'contentTextList': [
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '协助一汽解放服务部开展技术培训工作',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '参加内部技术攻关组，对疑难问题进行攻关',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '负责培训专用工具的规范使用',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '对内部培训的效果进行监督、考核',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '接受一汽解放技术培训',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '责实施内部技术培训工作，组织协调其它内部培训项目',
              //             'style': {

              //             },
              //           },
              //         ],
              //       },
              //       {
              //         'isShow': false,
              //         'style': {
              //           'top': '160px',

              //         },
              //         'contentTitleList': [
              //           {
              //             'oneDivStyle': {
              //               position: 'absolute',
              //               top: '137px',
              //               left: '93px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //             isShow: false,
              //             'text': '信息员',
              //             'style': {
              //               position: 'absolute',
              //               top: '140px',
              //               left: '236px',
              //               fontSize: '24px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': 'Messenger',
              //             'style': {
              //               position: 'absolute',
              //               top: '174px',
              //               left: '236px',
              //               fontSize: '20px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接上级 : 服务经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '244px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接下级 : 车间班组',
              //             'style': {
              //               position: 'absolute',
              //               top: '272px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '工作场景',
              //             'style': {
              //               position: 'absolute',
              //               top: '432px',
              //               left: '246px',
              //               fontSize: '12px',
              //               color: 'rgb(105, 105, 105)',
              //             },
              //           },
              //         ],
              //         'contentTextList': [
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '各种资料、信息的归纳、分类、汇总，及时、准确地向有关部门进行反馈市场操作',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '观察客户的满意程度（投诉行为、电话回访）',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '观察市场的特别情况（客户结构、车辆分类）',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '协调服务顾问/经理和车间技师之间的业务活动',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '通过掌握的资料信息，为服务经理提供合理的建议',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '59px'
              //             },
              //             isShow: true,
              //             'text': '检查所有与客户咨询与服务有关的，由立法机构、政府部门、行业管理部门和一汽解放制定的准则、规定和附属条款的执行情况',
              //             'style': {

              //             },
              //           },
              //         ],
              //       },
              //       {
              //         'isShow': false,
              //         'style': {
              //           'top': '160px',

              //         },
              //         'contentTitleList': [
              //           {
              //             'oneDivStyle': {
              //               position: 'absolute',
              //               top: '137px',
              //               left: '93px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //             isShow: false,
              //             'text': '备件经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '140px',
              //               left: '236px',
              //               fontSize: '24px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': 'Spare parts Manager',
              //             'style': {
              //               position: 'absolute',
              //               top: '174px',
              //               left: '236px',
              //               fontSize: '20px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接上级 : 服务站站长',
              //             'style': {
              //               position: 'absolute',
              //               top: '244px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '职务代理人 : 备件订货计划员、备件仓库管理员',
              //             'style': {
              //               position: 'absolute',
              //               top: '272px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '工作场景',
              //             'style': {
              //               position: 'absolute',
              //               top: '432px',
              //               left: '246px',
              //               fontSize: '12px',
              //               color: 'rgb(105, 105, 105)',
              //             },
              //           },
              //         ],
              //         'contentTextList': [
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '按要求供应备件，保证较高的备件一次满足率，有效地支持车间维修，满足柜台销售客户的期望',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '观察客户的满意程度（投诉行为、电话回访）',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '观察竞争者在备件/附件方面对客户提供哪些服务',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '根据“服务客户”的目标和业务利润指标，确保备件库存结构合理',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '参与制定企业目标，特别是销售、营业额和收益目标的制定，以便为整个企业目标做贡献',
              //             'style': {

              //             },
              //           },
              //         ],
              //       },
              //       {
              //         'isShow': false,
              //         'style': {
              //           'top': '160px',

              //         },
              //         'contentTitleList': [
              //           {
              //             'oneDivStyle': {
              //               position: 'absolute',
              //               top: '137px',
              //               left: '93px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //             isShow: false,
              //             'text': '备件计划',
              //             'style': {
              //               position: 'absolute',
              //               top: '140px',
              //               left: '236px',
              //               fontSize: '24px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': 'Preparation Plan',
              //             'style': {
              //               position: 'absolute',
              //               top: '174px',
              //               left: '236px',
              //               fontSize: '20px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接上级 : 备件经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '244px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接下级 : 备件',
              //             'style': {
              //               position: 'absolute',
              //               top: '272px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '工作场景',
              //             'style': {
              //               position: 'absolute',
              //               top: '432px',
              //               left: '246px',
              //               fontSize: '12px',
              //               color: 'rgb(105, 105, 105)',
              //             },
              //           },
              //         ],
              //         'contentTextList': [
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '保证备件部门有较高的工作质量（供货时间、备件发货、结算），以保障客户利益市场操作',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '使备件部门对客户和竞争者的变化能作出快速反应而提出合理化建议',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '根据“服务客户”的目标和业务利润指标，确保备件库存结构合理',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '协助参与制定企业目标，特别是销售、营业额和收益目标的制定，以便为整个企业目标做贡献',
              //             'style': {

              //             },
              //           },
              //         ],
              //       },
              //       {
              //         'isShow': false,
              //         'style': {
              //           'top': '160px',

              //         },
              //         'contentTitleList': [
              //           {
              //             'oneDivStyle': {
              //               position: 'absolute',
              //               top: '137px',
              //               left: '93px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //             isShow: false,
              //             'text': '仓库管理',
              //             'style': {
              //               position: 'absolute',
              //               top: '140px',
              //               left: '236px',
              //               fontSize: '24px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': 'Warehouse management',
              //             'style': {
              //               position: 'absolute',
              //               top: '174px',
              //               left: '236px',
              //               fontSize: '20px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接上级 : 备件经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '244px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接下级 : 无',
              //             'style': {
              //               position: 'absolute',
              //               top: '272px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '工作场景',
              //             'style': {
              //               position: 'absolute',
              //               top: '432px',
              //               left: '246px',
              //               fontSize: '12px',
              //               color: 'rgb(105, 105, 105)',
              //             },
              //           },
              //         ],
              //         'contentTextList': [
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '按要求供应备件，保证较高的备件一次满足率，以有效地支持车间',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '负责按要求对库存备件进行规范化的管理',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '负责备件的入库验收及维修备件的发放工作，建立库存帐目，保存原始凭证',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '提供给备件经理的有关备件部门工作的改进、建议',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '进行库存盘点（包括定期盘点与抽检）',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //             },
              //             isShow: true,
              //             'text': '协助制定备件位置码并适时进行调整',
              //             'style': {

              //             },
              //           },
              //         ],
              //       },
              //       {
              //         'isShow': false,
              //         'style': {
              //           'top': '160px',

              //         },
              //         'contentTitleList': [
              //           {
              //             'oneDivStyle': {
              //               position: 'absolute',
              //               top: '137px',
              //               left: '93px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //             isShow: false,
              //             'text': '维修技师',
              //             'style': {
              //               position: 'absolute',
              //               top: '140px',
              //               left: '236px',
              //               fontSize: '24px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': 'Maintenance Technician',
              //             'style': {
              //               position: 'absolute',
              //               top: '174px',
              //               left: '236px',
              //               fontSize: '20px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接上级 : 服务经理',
              //             'style': {
              //               position: 'absolute',
              //               top: '244px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '直接下级 : 初级技师',
              //             'style': {
              //               position: 'absolute',
              //               top: '272px',
              //               left: '104px',
              //               fontSize: '18px',
              //               color: 'rgb(105, 105, 105)',
              //               fontWeight: 'bold',
              //             },
              //           },
              //           {
              //             'oneDivStyle': {

              //             },
              //             isShow: false,
              //             'text': '工作场景',
              //             'style': {
              //               position: 'absolute',
              //               top: '432px',
              //               left: '246px',
              //               fontSize: '12px',
              //               color: 'rgb(105, 105, 105)',
              //             },
              //           },
              //         ],
              //         'contentTextList': [
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               // marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '按照派工单项目或用户现场要求进行维修作业',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               // marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '严格执行汽车维护工艺规范和修理技术标准进行维修作业',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               // marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '严格按照工位工序安全操作规程进行作业，杜绝事故发生',
              //             'style': {

              //             },
              //           },
              //           {
              //             'oneDivStyle': {
              //               display: 'inline-block',
              //               width: '0',
              //               height: '0',
              //               borderTop: '7px solid #ffffff',
              //               borderLeft: '9px solid #fede80',
              //               borderBottom: '7px solid #ffffff',
              //               marginBottom: '29px'
              //             },
              //             isShow: true,
              //             'text': '修理过程中严格执行自检、互检和专职检验为内容的三检制进行',
              //             'style': {

              //             },
              //           },
              //         ],
              //       },
              //     ],
              //     'btnText': [
              //       {
              //         'isShow': true,
              //         'btnTextList': [

              //         ]
              //       },
              //       {
              //         'isShow': false,
              //         'btnTextList': [

              //         ]
              //       }
              //     ],
              //     'anatomyText': [
              //       {
              //         'isShow': false,
              //         'anatomyTextList': [

              //         ]
              //       },
              //       {
              //         'isShow': false,
              //         'anatomyTextList': [

              //         ]
              //       },
              //     ],
              //     'imglist': [
              //       {
              //         'isShow': true
              //         ,
              //         'contentList': [
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '166px',
              //               'left': '100px',
              //               'width': '110px',
              //             },
              //             'src': './assets/images/project/position_01.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '100px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing1.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '276px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing2.png',
              //             'textlist': [

              //             ]
              //           },
              //         ]
              //       },
              //       {
              //         'isShow': true
              //         ,
              //         'contentList': [
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '166px',
              //               'left': '100px',
              //               'width': '110px',
              //             },
              //             'src': './assets/images/project/position_01.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '100px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing1.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '276px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing2.png',
              //             'textlist': [

              //             ]
              //           },
              //         ]
              //       },
              //       {
              //         'isShow': true
              //         ,
              //         'contentList': [
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '166px',
              //               'left': '100px',
              //               'width': '110px',
              //             },
              //             'src': './assets/images/project/position_01.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '100px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing1.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '276px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing2.png',
              //             'textlist': [

              //             ]
              //           },
              //         ]
              //       },
              //       {
              //         'isShow': true
              //         ,
              //         'contentList': [
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '166px',
              //               'left': '100px',
              //               'width': '110px',
              //             },
              //             'src': './assets/images/project/position_01.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '100px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing1.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '276px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing2.png',
              //             'textlist': [

              //             ]
              //           },
              //         ]
              //       },
              //       {
              //         'isShow': true
              //         ,
              //         'contentList': [
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '166px',
              //               'left': '100px',
              //               'width': '110px',
              //             },
              //             'src': './assets/images/project/position_01.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '100px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing1.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '276px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing2.png',
              //             'textlist': [

              //             ]
              //           },
              //         ]
              //       },
              //       {
              //         'isShow': true
              //         ,
              //         'contentList': [
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '166px',
              //               'left': '100px',
              //               'width': '110px',
              //             },
              //             'src': './assets/images/project/position_01.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '100px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing1.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '276px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing2.png',
              //             'textlist': [

              //             ]
              //           },
              //         ]
              //       },
              //       {
              //         'isShow': true
              //         ,
              //         'contentList': [
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '166px',
              //               'left': '100px',
              //               'width': '110px',
              //             },
              //             'src': './assets/images/project/position_01.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '100px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing1.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '276px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing2.png',
              //             'textlist': [

              //             ]
              //           },
              //         ]
              //       },
              //       {
              //         'isShow': true
              //         ,
              //         'contentList': [
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '166px',
              //               'left': '100px',
              //               'width': '110px',
              //             },
              //             'src': './assets/images/project/position_01.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '100px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing1.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '276px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing2.png',
              //             'textlist': [

              //             ]
              //           },
              //         ]
              //       },
              //       {
              //         'isShow': true
              //         ,
              //         'contentList': [
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '166px',
              //               'left': '100px',
              //               'width': '110px',
              //             },
              //             'src': './assets/images/project/position_01.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '100px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing1.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '276px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing2.png',
              //             'textlist': [

              //             ]
              //           },
              //         ]
              //       },
              //       {
              //         'isShow': true
              //         ,
              //         'contentList': [
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '166px',
              //               'left': '100px',
              //               'width': '110px',
              //             },
              //             'src': './assets/images/project/position_01.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '100px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing1.png',
              //             'textlist': [

              //             ]
              //           },
              //           {
              //             'isShow': true,
              //             'style': {
              //               'top': '366px',
              //               'left': '276px',
              //               'height': '110px',
              //             },
              //             'src': './assets/images/project/changjing2.png',
              //             'textlist': [

              //             ]
              //           },
              //         ]
              //       },

              //     ],
              //     'measureList': [
              //       {
              //         'isShow': false,
              //       },
              //       {
              //         'isShow': false,
              //       }
              //     ],
              //   }
              // },
            ]
          }
        },
      ],
      'imglist': [

      ],
      'check': [],
      'isPaging': true,
      'type': 'type_exclusive'
    },
    // 第三页
    {
      'video': [],
      'audio': [],
      'title': '',
      'describe': '',
      'isAllowPageNum': 0,
      'currentClickTheSet': [],
      'anatomyIsShow': false,
      'rotateImgIsShow': true,
      'textlist': [
        {
          'title': '服务标准',
          'navText': [
            {
              'img1IsShow': false,
              'img1': './assets/images/project/nav-1-up.png',
              'img1Style': {
              },
              'img2IsShow': true,
              'img2': './assets/images/project/nav-1-down.png',
              'img2Style': {
              },
              'img3IsShow': false,
              'img3': './assets/images/project/nav-1-none.png',
              'img3Style': {
              }
            },
            {
              'img1IsShow': false,
              'img1': './assets/images/project/nav-2-up.png',
              'img1Style': {
              },
              'img2IsShow': false,
              'img2': './assets/images/project/nav-2-down.png',
              'img2Style': {
              },
              'img3IsShow': true,
              'img3': './assets/images/project/nav-2-none.png',
              'img3Style': {
              }
            },
            {
              'img1IsShow': false,
              'img1': './assets/images/project/nav-3-up.png',
              'img1Style': {
              },
              'img2IsShow': false,
              'img2': './assets/images/project/nav-3-down.png',
              'img2Style': {
              },
              'img3IsShow': true,
              'img3': './assets/images/project/nav-3-none.png',
              'img3Style': {
              }
            },
            {
              'img1IsShow': false,
              'img1': './assets/images/project/nav-4-up.png',
              'img1Style': {
              },
              'img2IsShow': false,
              'img2': './assets/images/project/nav-4-down.png',
              'img2Style': {
              },
              'img3IsShow': true,
              'img3': './assets/images/project/nav-4-none.png',
              'img3Style': {
              }
            },
            {
              'img1IsShow': false,
              'img1': './assets/images/project/nav-5-up.png',
              'img1Style': {
              },
              'img2IsShow': false,
              'img2': './assets/images/project/nav-5-down.png',
              'img2Style': {
              },
              'img3IsShow': true,
              'img3': './assets/images/project/nav-5-none.png',
              'img3Style': {
              }
            },
            {
              'img1IsShow': false,
              'img1': './assets/images/project/nav-6-up.png',
              'img1Style': {
              },
              'img2IsShow': false,
              'img2': './assets/images/project/nav-6-down.png',
              'img2Style': {
              },
              'img3IsShow': true,
              'img3': './assets/images/project/nav-6-none.png',
              'img3Style': {
              }
            },
            {
              'img1IsShow': false,
              'img1': './assets/images/project/nav-7-up.png',
              'img1Style': {
              },
              'img2IsShow': false,
              'img2': './assets/images/project/nav-7-down.png',
              'img2Style': {
              },
              'img3IsShow': true,
              'img3': './assets/images/project/nav-7-none.png',
              'img3Style': {
              }
            },
            {
              'img1IsShow': false,
              'img1': './assets/images/project/nav-8-up.png',
              'img1Style': {
              },
              'img2IsShow': false,
              'img2': './assets/images/project/nav-8-down.png',
              'img2Style': {
              },
              'img3IsShow': true,
              'img3': './assets/images/project/nav-8-none.png',
              'img3Style': {
              }
            },
            {
              'img1IsShow': false,
              'img1': './assets/images/project/nav-9-up.png',
              'img1Style': {
              },
              'img2IsShow': false,
              'img2': './assets/images/project/nav-9-down.png',
              'img2Style': {
              },
              'img3IsShow': true,
              'img3': './assets/images/project/nav-9-none.png',
              'img3Style': {
              }
            },
          ],
          'content': [
            {
              'isShow': true,
              'title': '塞尺组成',
              'style': {
              },
              'contentTextList': [
                {
                  isShow: false,
                  'text': '扁片式塞尺由一套经过精磨的不同厚度的薄片组成，片上印有厚度值，以千分之一英寸或百分之一毫米表示。',
                  'style': {

                  },
                },
              ],
            },
            {
              'isShow': false,
              'title': '塞尺用途',
              'style': {
              },
              'contentTextList': [
                {
                  isShow: false,
                  'text': '塞尺或厚度规常用来测量零件之间的小间隙，可用来测量连杆侧隙，检查活塞与缸壁间隙，或调整气门。',
                  'style': {
                  },
                },
              ],
            },
          ],
          'imglist': [
            {
              'isShow': true,
              'divShow': false,
              'imgsrc': [
                {
                  'isShow': true,
                  'src': './assets/images/project/poster1_1.png',
                  'text': '客户档案管理',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster1_2.png',
                  'text': 'PDI检查',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster1_3.png',
                  'text': '新车交付',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster1_4.png',
                  'text': '保养预约',
                }
              ],
              'videolist': [
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                  'text': '客户档案管理',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                  'text': 'PDI检查',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                  'text': '新车交付',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                  'text': '保养预约',
                }
              ],
              'textlist': [
              ]
            },
            {
              'isShow': false,
              'divShow': true,
              'imgsrc': [
                {
                  'isShow': true,
                  'src': './assets/images/project/poster2_1.png',
                  'text': '主动接待',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster2_2.png',
                  'text': '救援服务',
                }
              ],
              'videolist': [
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                }
              ],
              'textlist': [
              ]
            },
            {
              'isShow': false,
              'divShow': true,
              'imgsrc': [
                {
                  'isShow': true,
                  'src': './assets/images/project/poster3_1.png',
                  'text': '报价派工',
                }
              ],
              'videolist': [
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                }
              ],
              'textlist': [
              ]
            },
            {
              'isShow': false,
              'divShow': true,
              'imgsrc': [
                {
                  'isShow': true,
                  'src': './assets/images/project/poster4_1.png',
                  'text': '客户关怀',
                }
              ],
              'videolist': [
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                }
              ],
              'textlist': [
              ]
            },
            {
              'isShow': false,
              'divShow': true,
              'imgsrc': [
                {
                  'isShow': true,
                  'src': './assets/images/project/poster5_1.png',
                  'text': '车辆维修',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster5_1.png',
                  'text': '车间管理',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster5_1.png',
                  'text': '备品管理',
                }
              ],
              'videolist': [
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                }
              ],
              'textlist': [
              ]
            },
            {
              'isShow': false,
              'divShow': true,
              'imgsrc': [
                {
                  'isShow': true,
                  'src': './assets/images/project/poster6_1.png',
                  'text': '三级质检',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster6_2.png',
                  'text': '返修处理与分析',
                },
              ],
              'videolist': [
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                },
              ],
              'textlist': [
              ]
            },
            {
              'isShow': false,
              'divShow': true,
              'imgsrc': [
                {
                  'isShow': true,
                  'src': './assets/images/project/poster7_1.png',
                  'text': '结算交车',
                }
              ],
              'videolist': [
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                }
              ],
              'textlist': [
              ]
            },
            {
              'isShow': false,
              'divShow': true,
              'imgsrc': [
                {
                  'isShow': true,
                  'src': './assets/images/project/poster8_1.png',
                  'text': '跟踪维护',
                }
              ],
              'videolist': [
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                }
              ],
              'textlist': [
              ]
            },
            {
              'isShow': false,
              'divShow': true,
              'imgsrc': [
                {
                  'isShow': true,
                  'src': './assets/images/project/poster9_1.png',
                  'text': '日常管理',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster9_2.png',
                  'text': '站长面访',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster9_3.png',
                  'text': '晨会',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster9_4.png',
                  'text': '周会',
                },
                {
                  'isShow': true,
                  'src': './assets/images/project/poster9_5.png',
                  'text': '月度经营分析会',
                }
              ],
              'videolist': [
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                },
                {
                  'isShow': false,
                  'src': './assets/video/video1_1.mp4',
                }
              ],
              'textlist': [
              ]
            },

          ],
        },
      ],
      'imglist': [

      ],
      'check': [],
      'isPaging': true,
      'type': 'type_changeImg'
    },
    // 第四页
    {
      'video': [],
      'audio': [],
      'title': '现场管理',
      'describe': '',
      'isAllowPageNum': 0,
      'currentClickTheSet': [],
      'textlist': [
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '8px',
          },
          isShow: false,
          'text': '客户接待区', 'style': {
            top: '146px',
            left: '80px',
            color: 'rgb(23, 44, 140)',
            fontWeight: 'bold',
            fontSize: '20px',
            marginBottom: '10px',
          }
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '接待区入口处有“服务接待”标志牌，必要时有指示客户进入维修服务接待区的指示牌',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '接待桌应面向客户进入接待区的主入口',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '有必须的、易于辨认的、醒目易懂的表示接待区各岗位的吊牌，接待桌有桌上牌',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '在接待区入口处显著位置张贴营业时间、热线电话、投诉电话',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '接待桌处于整齐和清洁状态',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '一个接待桌前摆放两张座椅',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '放置厂家要求的声明和备件、工时价格公示板，字体清晰、外观保持完好，及时更新',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '放置一汽解放服务核心流程图',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '在合理位置悬挂服务站资质证明等',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '园结算区域要方便客户结算，提供多种结算方式',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '地面干净，无纸屑、烟头等',
          'style': {

          },
        },
      ],
      'imglist': [{
        'img': './assets/images/project/xcgj01.png',
        'imgStyle': {
        }
      }],
      'tiplist': [],
      'check': [],
      'measureList': [
        {
          'isShow': false,

        },
        {
          'isShow': false,

        }
      ],
      'isPaging': true,
      'type': 'type_icontext',
    },
    // 第五页
    {
      'video': [],
      'audio': [],
      'title': '现场管理',
      'describe': '',
      'isAllowPageNum': 0,
      'currentClickTheSet': [],
      'textlist': [
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '8px',
          },
          isShow: false,
          'text': '客户休息区', 'style': {
            top: '146px',
            left: '80px',
            color: 'rgb(23, 44, 140)',
            fontWeight: 'bold',
            fontSize: '20px',
            marginBottom: '10px',
          }
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '客户休息区指示牌整洁完好',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '有舒适、整洁、足够的沙发、圆桌、椅子、茶几等，家具摆放应保持一定距离，以避免客户相互干扰',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '有冷热调节的空调装置，并保持室内空气清新',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '设吸烟区，配有排风设施，烟灰缸必须即时清洁，每个烟灰缸内烟头不得超过3个；无客户时，烟灰缸内不可有烟蒂',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '有鲜花、绿色植物或观赏鱼更佳',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '设服务吧台，提供饮料、烟、茶、小食品等，有冷热水功能的饮水机，并免费提供茶水，服务人员主动为客户端茶倒水',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '休息区内有能上网的台式电脑，电脑上装有通用办公软件和大众游戏；有电脑笔记本网线，网线处有清楚标识',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '布置报刊杂志架，配备报纸、汽车杂志和适量休闲类杂志，摆放合理，保持完好',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '休息区内有备件、工时价格公示板，字体清晰、一目了然',
          'style': {

          },
        },
        // {
        //   'oneDivStyle': {
        //     display: 'inline-block',
        //     width: '12px',
        //     height: '6px',
        //     backgroundColor: '#ffbf00',
        //     marginBottom: '2px',
        //     marginRight: '6px',
        //   },
        //   isShow: true,
        //   'text': '园结算区域要方便客户结算，提供多种结算方式',
        //   'style': {

        //   },
        // },
        // {
        //   'oneDivStyle': {
        //     display: 'inline-block',
        //     width: '12px',
        //     height: '6px',
        //     backgroundColor: '#ffbf00',
        //     marginBottom: '2px',
        //     marginRight: '6px',
        //   },
        //   isShow: true,
        //   'text': '地面干净，无纸屑、烟头等',
        //   'style': {

        //   },
        // },
      ],
      'imglist': [{
        'img': './assets/images/project/xcgj02.png',
        'imgStyle': {
        }
      }],
      'tiplist': [],
      'check': [],
      'measureList': [
        {
          'isShow': false,

        },
        {
          'isShow': false,

        }
      ],
      'isPaging': true,
      'type': 'type_icontext',
    },
    // 第六页
    {
      'video': [],
      'audio': [],
      'title': '现场管理',
      'describe': '',
      'isAllowPageNum': 0,
      'currentClickTheSet': [],
      'textlist': [
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '8px',
          },
          isShow: false,
          'text': '车辆维修区', 'style': {
            top: '146px',
            left: '80px',
            color: 'rgb(23, 44, 140)',
            fontWeight: 'bold',
            fontSize: '20px',
            marginBottom: '10px',
          }
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '按照CI要求设置区域与设备的管理标识牌；管理标识牌应包括以下主要内容：设备名称、责任人、检查/维护标准',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '车间通道、工位画线清晰',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '洗车区应有良好的排水系统，并设有沉淀池，防止污水乱流，泥沙阻塞排水道',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '保证车间通风状况良好，废气抽排系统工作正常，无强烈异味',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '维修车间光线充足',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '备有消防器材，放置在方便取用的位置，并妥善保管',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '公用设备存放位置应标线定位，并挂管理标识牌，写明责任人、保养与卫生标准',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '车间地面、墙壁保持整洁，无污迹、无墙面脱落现象，车间各个区域均要挂管理标识牌，写明责任人和卫生标准',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '废旧备件及物品应定点存放并及时清理',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '维修区域备件、工具和油液三不落地',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '车间内车辆停放时车头朝向一致，并停放整齐',
          'style': {

          },
        },
      ],
      'imglist': [{
        'img': './assets/images/project/xcgj03.png',
        'imgStyle': {
        }
      }],
      'tiplist': [],
      'check': [],
      'measureList': [
        {
          'isShow': false,

        },
        {
          'isShow': false,

        }
      ],
      'isPaging': true,
      'type': 'type_icontext',
    },
    // 第七页
    {
      'video': [],
      'audio': [],
      'title': '现场管理',
      'describe': '',
      'isAllowPageNum': 0,
      'currentClickTheSet': [],
      'textlist': [
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '8px',
          },
          isShow: false,
          'text': '备件供应区', 'style': {
            top: '146px',
            left: '80px',
            color: 'rgb(23, 44, 140)',
            fontWeight: 'bold',
            fontSize: '20px',
            marginBottom: '10px',
          }
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '设立备件发料柜台，便于技师领料与签字，设“发料口”标识牌',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '发料窗口所在区域办公设备、桌、椅、单据等符合远杂规定',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '柜台表面垫有耐磨、防滑覆盖物，定期更换',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '保持发料窗口周围墙面整洁、干净、完好',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '发料窗口标识牌保持完好，整洁',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '柜台没有对人容易造成伤害的尖角',
          'style': {

          },
        },
      ],
      'imglist': [{
        'img': './assets/images/project/xcgj04.png',
        'imgStyle': {
        }
      }],
      'tiplist': [],
      'check': [],
      'measureList': [
        {
          'isShow': false,

        },
        {
          'isShow': false,

        }
      ],
      'isPaging': true,
      'type': 'type_icontext',
    },
    // 第八页
    {
      'video': [],
      'audio': [],
      'title': '现场管理',
      'describe': '',
      'isAllowPageNum': 0,
      'currentClickTheSet': [],
      'textlist': [
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '8px',
          },
          isShow: false,
          'text': '设备与工具', 'style': {
            top: '146px',
            left: '80px',
            color: 'rgb(23, 44, 140)',
            fontWeight: 'bold',
            fontSize: '20px',
            marginBottom: '10px',
          }
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '在适当位置有该设备的安全操作规程',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '定期维护设备需制订并悬挂定期维护保养记录表',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '2px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '技师工具车内不存杂物，工具摆放整齐，使用后归位',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '维修技师要保持个人工具可用性与完整性，作业管理员要定期点检，并有记录',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '38px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '专用工具柜（或台架）上使用易于辨认的标志或照片，便于做到准确地将工具返还原处；在借出工具的位置上放置借用者标志；有统计各种工具的使用频率记录',
          'style': {

          },
        },
        {
          'oneDivStyle': {
            display: 'inline-block',
            width: '12px',
            height: '6px',
            backgroundColor: '#ffbf00',
            marginBottom: '20px',
            marginRight: '6px',
          },
          isShow: true,
          'text': '备有供员工意外受伤时使用的急救用具和药品，并处于立刻能使用的状态，在容易辨别的位置妥善管理；有定期检查记录',
          'style': {

          },
        },
      ],
      'imglist': [{
        'img': './assets/images/project/xcgj05.png',
        'imgStyle': {
        }
      }],
      'tiplist': [],
      'check': [],
      'measureList': [
        {
          'isShow': false,

        },
        {
          'isShow': false,

        }
      ],
      'isPaging': true,
      'type': 'type_icontext',
    },
    // 第九页
    // {
    //   'video': [],
    //   'audio': [],
    //   'title': '岗位描述',
    //   'describe': '',
    //   'isAllowPageNum': 0,
    //   'currentClickTheSet': [],
    //   'anatomyIsShow': false,
    //   'rotateImgIsShow': true,
    //   'textlist': [
    //     {
    //       'navText': [
    //         {
    //           'text': '站长/总经理',
    //           'style': {
    //             color: 'rgb(203, 209, 221)',
    //           }
    //         },
    //         {
    //           'text': '服务经理',
    //           'style': {
    //             color: 'rgb(3, 50, 129)',
    //           }
    //         },
    //         {
    //           'text': '服务顾问',
    //           'style': {
    //             color: 'rgb(3, 50, 129)',
    //           }
    //         },
    //         {
    //           'text': '质量检验员',
    //           'style': {
    //             color: 'rgb(3, 50, 129)',
    //           }
    //         },
    //         {
    //           'text': '内部培训',
    //           'style': {
    //             color: 'rgb(3, 50, 129)',
    //           }
    //         },
    //         {
    //           'text': '信息员',
    //           'style': {
    //             color: 'rgb(3, 50, 129)',
    //           }
    //         },
    //         {
    //           'text': '备件经理',
    //           'style': {
    //             color: 'rgb(3, 50, 129)',
    //           }
    //         },
    //         {
    //           'text': '备件计划',
    //           'style': {
    //             color: 'rgb(3, 50, 129)',
    //           }
    //         },
    //         {
    //           'text': '仓库管理',
    //           'style': {
    //             color: 'rgb(3, 50, 129)',
    //           }
    //         },
    //         {
    //           'text': '维修技师',
    //           'style': {
    //             color: 'rgb(3, 50, 129)',
    //           }
    //         },
    //       ],
    //       'content': [
    //         {
    //           'isShow': true,
    //           'style': {
    //             'top': '160px',

    //           },
    //           'contentTitleList': [
    //             {
    //               'oneDivStyle': {
    //                 position: 'absolute',
    //                 top: '137px',
    //                 left: '93px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //               isShow: false,
    //               'text': '站长/总经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '140px',
    //                 left: '236px',
    //                 fontSize: '24px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': 'Stationmaster',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '174px',
    //                 left: '236px',
    //                 fontSize: '20px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接上级 : 无',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '244px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接下级 : 服务经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '272px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '工作场景',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '432px',
    //                 left: '246px',
    //                 fontSize: '12px',
    //                 color: 'rgb(105, 105, 105)',
    //               },
    //             },
    //           ],
    //           'contentTextList': [
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               // 'twinkle': 'twinkle',
    //               'text': '负责一汽解放业务联系，并落实各项工作安排',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '确保客户满意',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '开发保养和维修业务以及备件业务的市场',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '领导全体人员采用以客户为导向的思维和行为',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '利用服务中与客户的接触来销售车辆确保客户满意',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '根据客户需求调整企业内部组织',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '遵守经销商准则完成当前的重点工作',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '实现适度的收益',
    //               'style': {

    //               },
    //             },
    //           ],
    //         },
    //         {
    //           'isShow': false,
    //           'style': {
    //             'top': '160px',

    //           },
    //           'contentTitleList': [
    //             {
    //               'oneDivStyle': {
    //                 position: 'absolute',
    //                 top: '137px',
    //                 left: '93px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //               isShow: false,
    //               'text': '服务经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '140px',
    //                 left: '236px',
    //                 fontSize: '24px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': 'Service Manager',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '174px',
    //                 left: '236px',
    //                 fontSize: '20px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接上级 : 服务站长',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '238px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接下级 : 服务顾问、信息员、内部培训员、客户关系员',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '264px',
    //                 width: '360px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '工作场景',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '432px',
    //                 left: '246px',
    //                 fontSize: '12px',
    //                 color: 'rgb(105, 105, 105)',
    //               },
    //             },
    //           ],
    //           'contentTextList': [
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '负责解决服务过程中客户的投诉，参与重大客户投诉和危机事件的处理',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '制定出能增加所在责任区占有率的战略—增加保养和维修工时的市场占有率',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '接领导服务及车间部门员工的工作，监督和评价他们，并对他们的薪酬施加影响',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '利用服务中与客户的接触来销售车辆',
    //               'style': {

    //               },
    //             },
    //           ],
    //         },
    //         {
    //           'isShow': false,
    //           'style': {
    //             'top': '160px',

    //           },
    //           'contentTitleList': [
    //             {
    //               'oneDivStyle': {
    //                 position: 'absolute',
    //                 top: '137px',
    //                 left: '93px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //               isShow: false,
    //               'text': '服务顾问',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '140px',
    //                 left: '236px',
    //                 fontSize: '24px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': 'Service Consultant',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '174px',
    //                 left: '236px',
    //                 fontSize: '20px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接上级 : 服务经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '244px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接下级 : 车间班组',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '272px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '工作场景',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '432px',
    //                 left: '246px',
    //                 fontSize: '12px',
    //                 color: 'rgb(105, 105, 105)',
    //               },
    //             },
    //           ],
    //           'contentTextList': [
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '倾听并明确客户需求，准确诊断故障和填写工单，以确保迅速和准确地对客户车辆进行保养和维修',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '利用与客户接触机会促进车辆以及备件/附件的销售',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '利用既定的方式、流程和系统来为客户服务',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '确保车间设备/人员利用的最佳化、企业效益的最大化',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '检查立法机构与一汽解放服务部制定准则、规定、条款',
    //               'style': {

    //               },
    //             },
    //           ],
    //         },
    //         {
    //           'isShow': false,
    //           'style': {
    //             'top': '160px',

    //           },
    //           'contentTitleList': [
    //             {
    //               'oneDivStyle': {
    //                 position: 'absolute',
    //                 top: '137px',
    //                 left: '93px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //               isShow: false,
    //               'text': '质量检验员',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '140px',
    //                 left: '236px',
    //                 fontSize: '24px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': 'Quality Testing',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '174px',
    //                 left: '236px',
    //                 fontSize: '20px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接上级 : 服务经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '244px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '职务代理人 : 服务经理、车间管理员',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '272px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '工作场景',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '432px',
    //                 left: '246px',
    //                 fontSize: '12px',
    //                 color: 'rgb(105, 105, 105)',
    //               },
    //             },
    //           ],
    //           'contentTextList': [
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '确保根据客户的要求按时准确地全面完成客户车辆的保养和维修',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '确保车间维修技术，高质量地完成各项工作以保护客户的利益',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '协助服务经理负责收集并反馈重大、安全、批量质量信息',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '助一汽解放售后服务部开展技术管理工作',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '确保车间技术形象有助于企业树立最佳的形象',
    //               'style': {

    //               },
    //             },
    //           ],
    //         },
    //         {
    //           'isShow': false,
    //           'style': {
    //             'top': '160px',

    //           },
    //           'contentTitleList': [
    //             {
    //               'oneDivStyle': {
    //                 position: 'absolute',
    //                 top: '137px',
    //                 left: '93px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //               isShow: false,
    //               'text': '内部培训',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '140px',
    //                 left: '236px',
    //                 fontSize: '24px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': 'Internal Training',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '174px',
    //                 left: '236px',
    //                 fontSize: '20px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接上级 : 服务经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '244px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '职务代理人 : 服务经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '272px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '工作场景',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '432px',
    //                 left: '246px',
    //                 fontSize: '12px',
    //                 color: 'rgb(105, 105, 105)',
    //               },
    //             },
    //           ],
    //           'contentTextList': [
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '协助一汽解放服务部开展技术培训工作',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '参加内部技术攻关组，对疑难问题进行攻关',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '负责培训专用工具的规范使用',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '对内部培训的效果进行监督、考核',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '接受一汽解放技术培训',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '责实施内部技术培训工作，组织协调其它内部培训项目',
    //               'style': {

    //               },
    //             },
    //           ],
    //         },
    //         {
    //           'isShow': false,
    //           'style': {
    //             'top': '160px',

    //           },
    //           'contentTitleList': [
    //             {
    //               'oneDivStyle': {
    //                 position: 'absolute',
    //                 top: '137px',
    //                 left: '93px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //               isShow: false,
    //               'text': '信息员',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '140px',
    //                 left: '236px',
    //                 fontSize: '24px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': 'Messenger',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '174px',
    //                 left: '236px',
    //                 fontSize: '20px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接上级 : 服务经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '244px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接下级 : 车间班组',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '272px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '工作场景',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '432px',
    //                 left: '246px',
    //                 fontSize: '12px',
    //                 color: 'rgb(105, 105, 105)',
    //               },
    //             },
    //           ],
    //           'contentTextList': [
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '各种资料、信息的归纳、分类、汇总，及时、准确地向有关部门进行反馈市场操作',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '观察客户的满意程度（投诉行为、电话回访）',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '观察市场的特别情况（客户结构、车辆分类）',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '协调服务顾问/经理和车间技师之间的业务活动',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '通过掌握的资料信息，为服务经理提供合理的建议',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '59px'
    //               },
    //               isShow: true,
    //               'text': '检查所有与客户咨询与服务有关的，由立法机构、政府部门、行业管理部门和一汽解放制定的准则、规定和附属条款的执行情况',
    //               'style': {

    //               },
    //             },
    //           ],
    //         },
    //         {
    //           'isShow': false,
    //           'style': {
    //             'top': '160px',

    //           },
    //           'contentTitleList': [
    //             {
    //               'oneDivStyle': {
    //                 position: 'absolute',
    //                 top: '137px',
    //                 left: '93px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //               isShow: false,
    //               'text': '备件经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '140px',
    //                 left: '236px',
    //                 fontSize: '24px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': 'Spare parts Manager',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '174px',
    //                 left: '236px',
    //                 fontSize: '20px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接上级 : 服务站站长',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '244px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '职务代理人 : 备件订货计划员、备件仓库管理员',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '272px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '工作场景',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '432px',
    //                 left: '246px',
    //                 fontSize: '12px',
    //                 color: 'rgb(105, 105, 105)',
    //               },
    //             },
    //           ],
    //           'contentTextList': [
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '按要求供应备件，保证较高的备件一次满足率，有效地支持车间维修，满足柜台销售客户的期望',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '观察客户的满意程度（投诉行为、电话回访）',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '观察竞争者在备件/附件方面对客户提供哪些服务',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '根据“服务客户”的目标和业务利润指标，确保备件库存结构合理',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '参与制定企业目标，特别是销售、营业额和收益目标的制定，以便为整个企业目标做贡献',
    //               'style': {

    //               },
    //             },
    //           ],
    //         },
    //         {
    //           'isShow': false,
    //           'style': {
    //             'top': '160px',

    //           },
    //           'contentTitleList': [
    //             {
    //               'oneDivStyle': {
    //                 position: 'absolute',
    //                 top: '137px',
    //                 left: '93px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //               isShow: false,
    //               'text': '备件计划',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '140px',
    //                 left: '236px',
    //                 fontSize: '24px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': 'Preparation Plan',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '174px',
    //                 left: '236px',
    //                 fontSize: '20px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接上级 : 备件经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '244px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接下级 : 备件',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '272px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '工作场景',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '432px',
    //                 left: '246px',
    //                 fontSize: '12px',
    //                 color: 'rgb(105, 105, 105)',
    //               },
    //             },
    //           ],
    //           'contentTextList': [
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '保证备件部门有较高的工作质量（供货时间、备件发货、结算），以保障客户利益市场操作',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '使备件部门对客户和竞争者的变化能作出快速反应而提出合理化建议',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '根据“服务客户”的目标和业务利润指标，确保备件库存结构合理',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '协助参与制定企业目标，特别是销售、营业额和收益目标的制定，以便为整个企业目标做贡献',
    //               'style': {

    //               },
    //             },
    //           ],
    //         },
    //         {
    //           'isShow': false,
    //           'style': {
    //             'top': '160px',

    //           },
    //           'contentTitleList': [
    //             {
    //               'oneDivStyle': {
    //                 position: 'absolute',
    //                 top: '137px',
    //                 left: '93px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //               isShow: false,
    //               'text': '仓库管理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '140px',
    //                 left: '236px',
    //                 fontSize: '24px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': 'Warehouse management',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '174px',
    //                 left: '236px',
    //                 fontSize: '20px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接上级 : 备件经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '244px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接下级 : 无',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '272px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '工作场景',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '432px',
    //                 left: '246px',
    //                 fontSize: '12px',
    //                 color: 'rgb(105, 105, 105)',
    //               },
    //             },
    //           ],
    //           'contentTextList': [
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '按要求供应备件，保证较高的备件一次满足率，以有效地支持车间',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '负责按要求对库存备件进行规范化的管理',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '负责备件的入库验收及维修备件的发放工作，建立库存帐目，保存原始凭证',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '提供给备件经理的有关备件部门工作的改进、建议',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '进行库存盘点（包括定期盘点与抽检）',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //               },
    //               isShow: true,
    //               'text': '协助制定备件位置码并适时进行调整',
    //               'style': {

    //               },
    //             },
    //           ],
    //         },
    //         {
    //           'isShow': false,
    //           'style': {
    //             'top': '160px',

    //           },
    //           'contentTitleList': [
    //             {
    //               'oneDivStyle': {
    //                 position: 'absolute',
    //                 top: '137px',
    //                 left: '93px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //               isShow: false,
    //               'text': '维修技师',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '140px',
    //                 left: '236px',
    //                 fontSize: '24px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': 'Maintenance Technician',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '174px',
    //                 left: '236px',
    //                 fontSize: '20px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接上级 : 服务经理',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '244px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '直接下级 : 初级技师',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '272px',
    //                 left: '104px',
    //                 fontSize: '18px',
    //                 color: 'rgb(105, 105, 105)',
    //                 fontWeight: 'bold',
    //               },
    //             },
    //             {
    //               'oneDivStyle': {

    //               },
    //               isShow: false,
    //               'text': '工作场景',
    //               'style': {
    //                 position: 'absolute',
    //                 top: '432px',
    //                 left: '246px',
    //                 fontSize: '12px',
    //                 color: 'rgb(105, 105, 105)',
    //               },
    //             },
    //           ],
    //           'contentTextList': [
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 // marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '按照派工单项目或用户现场要求进行维修作业',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 // marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '严格执行汽车维护工艺规范和修理技术标准进行维修作业',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 // marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '严格按照工位工序安全操作规程进行作业，杜绝事故发生',
    //               'style': {

    //               },
    //             },
    //             {
    //               'oneDivStyle': {
    //                 display: 'inline-block',
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '7px solid #ffffff',
    //                 borderLeft: '9px solid #fede80',
    //                 borderBottom: '7px solid #ffffff',
    //                 marginBottom: '29px'
    //               },
    //               isShow: true,
    //               'text': '修理过程中严格执行自检、互检和专职检验为内容的三检制进行',
    //               'style': {

    //               },
    //             },
    //           ],
    //         },
    //       ],
    //       'btnText': [
    //         {
    //           'isShow': true,
    //           'btnTextList': [

    //           ]
    //         },
    //         {
    //           'isShow': false,
    //           'btnTextList': [

    //           ]
    //         }
    //       ],
    //       'anatomyText': [
    //         {
    //           'isShow': false,
    //           'anatomyTextList': [

    //           ]
    //         },
    //         {
    //           'isShow': false,
    //           'anatomyTextList': [

    //           ]
    //         },
    //       ],
    //       'imglist': [
    //         {
    //           'isShow': true
    //           ,
    //           'contentList': [
    //             {
    //               'isShow': true,
    //               'src': './assets/images/project/position_01.png',
    //               'textlist': [

    //               ]
    //             },
    //           ]
    //         },
    //         {
    //           'isShow': true
    //           ,
    //           'contentList': [
    //             {
    //               'isShow': true,
    //               'src': './assets/images/project/position_01.png',
    //               'textlist': [

    //               ]
    //             },
    //           ]
    //         },
    //         {
    //           'isShow': true
    //           ,
    //           'contentList': [
    //             {
    //               'isShow': true,
    //               'src': './assets/images/project/position_01.png',
    //               'textlist': [

    //               ]
    //             },
    //           ]
    //         },
    //         {
    //           'isShow': true
    //           ,
    //           'contentList': [
    //             {
    //               'isShow': true,
    //               'src': './assets/images/project/position_01.png',
    //               'textlist': [

    //               ]
    //             },
    //           ]
    //         },
    //         {
    //           'isShow': true
    //           ,
    //           'contentList': [
    //             {
    //               'isShow': true,
    //               'src': './assets/images/project/position_01.png',
    //               'textlist': [

    //               ]
    //             },
    //           ]
    //         },
    //         {
    //           'isShow': true
    //           ,
    //           'contentList': [
    //             {
    //               'isShow': true,
    //               'src': './assets/images/project/position_01.png',
    //               'textlist': [

    //               ]
    //             },
    //           ]
    //         },
    //         {
    //           'isShow': true
    //           ,
    //           'contentList': [
    //             {
    //               'isShow': true,
    //               'src': './assets/images/project/position_01.png',
    //               'textlist': [

    //               ]
    //             },
    //           ]
    //         },
    //         {
    //           'isShow': true
    //           ,
    //           'contentList': [
    //             {
    //               'isShow': true,
    //               'src': './assets/images/project/position_01.png',
    //               'textlist': [

    //               ]
    //             },
    //           ]
    //         },
    //         {
    //           'isShow': true
    //           ,
    //           'contentList': [
    //             {
    //               'isShow': true,
    //               'src': './assets/images/project/position_01.png',
    //               'textlist': [

    //               ]
    //             },
    //           ]
    //         },
    //         {
    //           'isShow': true
    //           ,
    //           'contentList': [
    //             {
    //               'isShow': true,
    //               'src': './assets/images/project/position_01.png',
    //               'textlist': [

    //               ]
    //             },
    //           ]
    //         },

    //       ],
    //       'measureList': [
    //         {
    //           'isShow': false,
    //         },
    //         {
    //           'isShow': false,
    //         }
    //       ],
    //       'tiplist': {
    //         'src': './assets/images/project/fourNav-6.png',
    //         'isShow': false,
    //         'textlist': [
    //           {
    //             'twinkle': 'twinkle',
    //             'text': '',
    //             'style': {
    //               'top': '120px',
    //               'left': '386px',
    //             },
    //             'isShow': false,
    //             'title': '尿素泵',
    //             'childPage': {
    //               'navText': [

    //               ],
    //               'content': [
    //                 {
    //                   'isShow': true,
    //                   'contentTextList': [
    //                     {
    //                       'text': '电机旋转驱动凸轮活塞，作往复运动，在活塞膜片的作用下，为系统建立压力，在膜片泵的转速会根据发动机排气量大小发生变化，最大泵压可以达到9Bar，达到压力后，多余的尿素溶液会通过回流管排回尿素罐',
    //                       'style': {

    //                       },
    //                     },
    //                   ],
    //                 },
    //                 {
    //                   'isShow': false,
    //                   'contentTextList': [
    //                     {
    //                       'text': '动凸轮活塞，作往复运动，在活塞膜片的作用下，为系统建立压力，在膜片泵的转速会根据发动机排气量大小发生变化，最大泵压可以达到9Bar，达到压力后，多余的尿素溶液会通过回流管排回尿素罐',
    //                       'style': {

    //                       },
    //                     },
    //                   ],
    //                 },
    //               ],
    //               'btnText': [
    //                 {
    //                   'isShow': true,
    //                   'btnTextList': [
    //                     {
    //                       'text': '向右旋转90°',
    //                       'direction': 'right',
    //                       'style': {

    //                       },

    //                     },
    //                     {
    //                       'text': '向左旋转90°',
    //                       'direction': 'left',
    //                       'style': {

    //                       }
    //                     },
    //                   ]
    //                 },
    //                 {
    //                   'isShow': false,
    //                   'btnTextList': [
    //                     {
    //                       'text': '向右旋转90°',
    //                       'direction': 'right',
    //                       'style': {

    //                       },

    //                     },
    //                     {
    //                       'text': '向左旋转90°',
    //                       'direction': 'left',
    //                       'style': {

    //                       }
    //                     },
    //                   ]
    //                 },
    //               ],
    //               'imglist': [
    //                 {
    //                   'isShow': true,
    //                   'contentList': [
    //                     {
    //                       'isShow': true,
    //                       'src': './assets/images/project/fourNav-7.png',
    //                       'textlist': [
    //                         {
    //                           'twinkle': 'twinkle',
    //                           'text': '',
    //                           'style': {
    //                             'top': '128px',
    //                             'left': '564px',
    //                           },
    //                           'isShow': false,
    //                           'content': {
    //                             'text': '电机',
    //                             'style': {
    //                               'top': '90px',
    //                               'left': '532px',
    //                             }
    //                           }
    //                         },
    //                         {
    //                           'twinkle': 'twinkle',
    //                           'text': '',
    //                           'style': {
    //                             'top': '270px',
    //                             'left': '572px',
    //                           },
    //                           'isShow': false,
    //                           'content': {
    //                             'text': '凸轮活塞',
    //                             'style': {
    //                               'top': '230px',
    //                               'left': '512px',
    //                             }
    //                           }
    //                         },
    //                       ]
    //                     },
    //                     {
    //                       'isShow': false,
    //                       'src': './assets/images/project/fourNav-8.png',
    //                       'textlist': [

    //                       ]
    //                     },
    //                     {
    //                       'isShow': false,
    //                       'src': './assets/images/project/fourNav-9.png',
    //                       'textlist': [
    //                         {
    //                           'twinkle': 'twinkle',
    //                           'text': '',
    //                           'style': {
    //                             'top': '131px',
    //                             'left': '485px',
    //                           },
    //                           'isShow': false,
    //                           'content': {
    //                             'text': '电器接口',
    //                             'style': {
    //                               'top': '90px',
    //                               'left': '425px',
    //                             }
    //                           }
    //                         },
    //                         {
    //                           'twinkle': 'twinkle',
    //                           'text': '',
    //                           'style': {
    //                             'top': '250px',
    //                             'left': '586px',
    //                           },
    //                           'isShow': false,
    //                           'content': {
    //                             'text': '活塞膜片',
    //                             'style': {
    //                               'top': '212px',
    //                               'left': '526px',
    //                             }
    //                           }
    //                         },
    //                       ]
    //                     },
    //                     {
    //                       'isShow': false,
    //                       'src': './assets/images/project/fourNav-10.png',
    //                       'textlist': [

    //                       ]
    //                     },
    //                   ]
    //                 },
    //               ],
    //             }
    //           },
    //           {
    //             'twinkle': 'twinkle',
    //             'text': '',
    //             'style': {
    //               'top': '160px',
    //               'left': '434px',
    //             },
    //             'isShow': false,
    //             'title': '压力传感器',
    //             'childPage': {
    //               'navText': [

    //               ],
    //               'content': [
    //                 {
    //                   'isShow': true,
    //                   'contentTextList': [
    //                     {
    //                       'text': '压力传感器，用于检测尿素泵的压力，为尿素泵电控单元提供压力信号，保证尿素的喷射正常',
    //                       'style': {

    //                       },
    //                     },
    //                   ],
    //                 },
    //               ],
    //               'btnText': [
    //                 {
    //                   'isShow': true,
    //                   'btnTextList': [
    //                     {
    //                       'text': '向右旋转180°',
    //                       'direction': 'right',
    //                       'style': {

    //                       },

    //                     },
    //                     {
    //                       'text': '向左旋转180°',
    //                       'direction': 'left',
    //                       'style': {

    //                       }
    //                     },
    //                   ]
    //                 },
    //               ],
    //               'imglist': [
    //                 {
    //                   'isShow': true,
    //                   'contentList': [
    //                     {
    //                       'isShow': true,
    //                       'src': './assets/images/project/fourNav-11.png',
    //                       'textlist': [

    //                       ]
    //                     },
    //                     {
    //                       'isShow': false,
    //                       'src': './assets/images/project/fourNav-12.png',
    //                       'textlist': [

    //                       ]
    //                     },
    //                   ]
    //                 },
    //               ],
    //             }
    //           },
    //           {
    //             'twinkle': 'twinkle',
    //             'text': '',
    //             'style': {
    //               'top': '140px',
    //               'left': '500px',
    //             },
    //             'isShow': false,
    //             'title': '反向阀',
    //             'childPage': {
    //               'navText': [

    //               ],
    //               'content': [
    //                 {
    //                   'isShow': true,
    //                   'contentTextList': [
    //                     {
    //                       'text': '反向阀控制着压力管与回流管的通断，其内部通过控制电磁线圈通断，使其内部的活塞做往复运动，在停车熄火后，倒吸压力管内的尿素溶液，防止尿素残留结晶，使系统出现堵塞',
    //                       'style': {

    //                       },
    //                     },
    //                   ],
    //                 },
    //               ],
    //               'btnText': [
    //                 {
    //                   'isShow': true,
    //                   'btnTextList': [
    //                     {
    //                       'text': '向右旋转90°',
    //                       'direction': 'right',
    //                       'style': {

    //                       },

    //                     },
    //                     {
    //                       'text': '向左旋转90°',
    //                       'direction': 'left',
    //                       'style': {

    //                       }
    //                     },
    //                   ]
    //                 },
    //               ],
    //               'imglist': [
    //                 {
    //                   'isShow': true,
    //                   'contentList': [
    //                     {
    //                       'isShow': true,
    //                       'src': './assets/images/project/fourNav-13.png',
    //                       'textlist': [

    //                       ]
    //                     },
    //                     {
    //                       'isShow': false,
    //                       'src': './assets/images/project/fourNav-14.png',
    //                       'textlist': [

    //                       ]
    //                     },
    //                     {
    //                       'isShow': false,
    //                       'src': './assets/images/project/fourNav-15.png',
    //                       'textlist': [

    //                       ]
    //                     },
    //                     {
    //                       'isShow': false,
    //                       'src': './assets/images/project/fourNav-16.png',
    //                       'textlist': [
    //                         {
    //                           'twinkle': 'twinkle',
    //                           'text': '',
    //                           'style': {
    //                             'top': '105px',
    //                             'left': '583px',
    //                           },
    //                           'isShow': false,
    //                           'content': {
    //                             'text': '电器接口',
    //                             'style': {
    //                               'top': '68px',
    //                               'left': '522px',
    //                             }
    //                           }
    //                         },
    //                         {
    //                           'twinkle': 'twinkle',
    //                           'text': '',
    //                           'style': {
    //                             'top': '196px',
    //                             'left': '606px',
    //                           },
    //                           'isShow': false,
    //                           'content': {
    //                             'text': '接压力管',
    //                             'style': {
    //                               'top': '158px',
    //                               'left': '546px',
    //                             }
    //                           }
    //                         },
    //                         {
    //                           'twinkle': 'twinkle',
    //                           'text': '',
    //                           'style': {
    //                             'top': '240px',
    //                             'left': '566px',
    //                           },
    //                           'isShow': false,
    //                           'content': {
    //                             'text': '接回流管',
    //                             'style': {
    //                               'top': '202px',
    //                               'left': '506px',
    //                             }
    //                           }
    //                         },
    //                       ]
    //                     },
    //                   ]
    //                 },
    //               ],
    //             }
    //           },
    //           {
    //             'twinkle': 'twinkle',
    //             'text': '',
    //             'style': {
    //               'top': '200px',
    //               'left': '450px',
    //             },
    //             'isShow': false,
    //             'title': '',
    //             'childPage': {
    //               'navText': [
    //                 {
    //                   'text': '尿素加热器-滤芯养护',
    //                   'style': {
    //                     color: 'rgb(203, 209, 221)',
    //                   }
    //                 },
    //                 {
    //                   'text': '尿素加热器-滤芯更换',
    //                   'style': {
    //                     color: 'rgb(3, 50, 129)',
    //                   }
    //                 },
    //               ],
    //               'content': [
    //                 {
    //                   'style': {
    //                     'top': '178px',
    //                   },
    //                   'isShow': true,
    //                   'contentTextList': [
    //                     {
    //                       'firstDivStyle': {
    //                         display: 'inline-block',
    //                         width: '12px',
    //                         height: '6px',
    //                         backgroundColor: '#ffbf00',
    //                         marginBottom: '21px',
    //                         marginRight: '10px',
    //                       },
    //                       'text': '尿素泵加热器：尿素泵和尿素管采用电加热的方式进行预热',
    //                       'style': {

    //                       },
    //                     },
    //                     {
    //                       'firstDivStyle': {
    //                         display: 'inline-block',
    //                         width: '12px',
    //                         height: '6px',
    //                         backgroundColor: '#ffbf00',
    //                         marginBottom: '40px',
    //                         marginRight: '10px',
    //                       },
    //                       'text': '过热保护电阻：过热保护电阻串联在电加热回路，正常情况下电阻为0，当温度过高时自动断开',
    //                       'style': {
    //                       },
    //                     },
    //                   ],
    //                 },
    //                 {
    //                   'isShow': false,
    //                   'style': {
    //                     'top': '178px',
    //                   },
    //                   'contentTextList': [
    //                     {
    //                       'firstDivStyle': {
    //                         display: 'inline',
    //                         marginBottom: '21px',
    //                       },
    //                       'text': '尿素泵滤芯，建议每行驶3万公里或3个月更换一次滤芯，更换步骤如下：',
    //                       'style': {

    //                       },
    //                     },
    //                     {
    //                       'firstDivStyle': {
    //                         display: 'inline',
    //                         width: '12px',
    //                         height: '3px',
    //                         backgroundColor: '#ffbf00',
    //                         marginBottom: '21px',
    //                         marginRight: '10px',
    //                       },
    //                       'text': '步骤一：旋开过滤器盖',
    //                       'style': {

    //                       },
    //                     },
    //                     {
    //                       'firstDivStyle': {
    //                         display: 'inline',
    //                         width: '12px',
    //                         height: '3px',
    //                         backgroundColor: '#ffbf00',
    //                         marginBottom: '21px',
    //                         marginRight: '10px',
    //                       },
    //                       'text': '步骤二：拔出平衡块',
    //                       'style': {

    //                       },
    //                     },
    //                     {
    //                       'firstDivStyle': {
    //                         display: 'inline',
    //                         width: '12px',
    //                         height: '3px',
    //                         backgroundColor: '#ffbf00',
    //                         marginBottom: '21px',
    //                         marginRight: '10px',
    //                       },
    //                       'text': '步骤三：使用专用工具（卡槽）将滤芯取出',
    //                       'style': {
    //                         width: '89%',
    //                       },
    //                     },
    //                     {
    //                       'firstDivStyle': {
    //                         display: 'inline',
    //                         width: '12px',
    //                         height: '3px',
    //                         backgroundColor: '#ffbf00',
    //                         marginBottom: '21px',
    //                         marginRight: '10px',
    //                       },
    //                       'text': '步骤四：用水清洗滤芯盖螺丝盖外表面',
    //                       'style': {

    //                       },
    //                     },
    //                     {
    //                       'firstDivStyle': {
    //                         display: 'inline',
    //                         width: '12px',
    //                         height: '3px',
    //                         backgroundColor: '#ffbf00',
    //                         marginBottom: '21px',
    //                         marginRight: '10px',
    //                       },
    //                       'text': '步骤五：润滑新滤芯两端O型圈并将滤芯装入尿素供给单元',
    //                       'style': {

    //                       },
    //                     },
    //                     {
    //                       'firstDivStyle': {
    //                         display: 'inline',
    //                         width: '12px',
    //                         height: '3px',
    //                         backgroundColor: '#ffbf00',
    //                         marginBottom: '21px',
    //                         marginRight: '10px',
    //                       },
    //                       'text': '步骤六：安装平衡块',
    //                       'style': {

    //                       },
    //                     },
    //                     {
    //                       'firstDivStyle': {
    //                         display: 'inline',
    //                         width: '12px',
    //                         height: '3px',
    //                         backgroundColor: '#ffbf00',
    //                         marginBottom: '21px',
    //                         marginRight: '10px',
    //                       },
    //                       'text': '步骤七：旋紧过滤器盖，扭矩20 ±5牛米',
    //                       'style': {

    //                       },
    //                     },
    //                   ],
    //                 },
    //               ],
    //               'btnText': [
    //                 {
    //                   'isShow': true,
    //                   'btnTextList': [
    //                     {
    //                       'text': '向右旋转90°',
    //                       'direction': 'right',
    //                       'style': {
    //                         'backgroundColor': '#aaa',
    //                         'cursor': 'not-allowed',
    //                       },

    //                     },
    //                     {
    //                       'text': '向左旋转90°',
    //                       'direction': 'left',
    //                       'style': {
    //                         'backgroundColor': '#aaa',
    //                         'cursor': 'not-allowed',
    //                       }
    //                     },
    //                   ]
    //                 },
    //                 {
    //                   'isShow': false,
    //                   'btnTextList': [
    //                     {
    //                       'text': '向右旋转90°',
    //                       'direction': 'right',
    //                       'style': {
    //                         'position': 'absolute',
    //                         'top': '50px',
    //                         'backgroundColor': '#aaa',
    //                         'cursor': 'not-allowed',
    //                       },

    //                     },
    //                     {
    //                       'text': '向左旋转90°',
    //                       'direction': 'left',
    //                       'style': {
    //                         'position': 'absolute',
    //                         'top': '86px',
    //                         'backgroundColor': '#aaa',
    //                         'cursor': 'not-allowed',
    //                       }
    //                     },
    //                   ]
    //                 },
    //               ],
    //               'imglist': [
    //                 {
    //                   'isShow': true,
    //                   'contentList': [
    //                     {
    //                       'isShow': true,
    //                       'src': './assets/images/project/fourNav-17.png',
    //                       'textlist': [
    //                         {
    //                           'twinkle': 'twinkle',
    //                           'text': '',
    //                           'style': {
    //                             'top': '248px',
    //                             'left': '590px',
    //                           },
    //                           'isShow': false,
    //                           'content': {
    //                             'text': '加热器端口',
    //                             'style': {
    //                               'top': '210px',
    //                               'left': '516px',
    //                             }
    //                           }
    //                         },
    //                       ]
    //                     },
    //                   ]
    //                 },
    //                 {
    //                   'isShow': false,
    //                   'contentList': [
    //                     {
    //                       'isShow': true,
    //                       'src': './assets/images/project/fourNav-18.png',
    //                       'textlist': [
    //                         {
    //                           'twinkle': 'twinkle',
    //                           'text': '',
    //                           'style': {
    //                             'top': '168px',
    //                             'left': '564px',
    //                           },
    //                           'isShow': false,
    //                           'content': {
    //                             'text': '尿素泵滤芯',
    //                             'style': {
    //                               'top': '130px',
    //                               'left': '490px',
    //                             }
    //                           }
    //                         },
    //                         {
    //                           'twinkle': 'twinkle',
    //                           'text': '',
    //                           'style': {
    //                             'top': '220px',
    //                             'left': '598px',
    //                           },
    //                           'isShow': false,
    //                           'content': {
    //                             'text': '过热保护电阻',
    //                             'style': {
    //                               'top': '184px',
    //                               'left': '510px',
    //                             }
    //                           }
    //                         },
    //                       ]
    //                     },
    //                   ]
    //                 },
    //               ],
    //             }
    //           },
    //         ]
    //       }
    //     },
    //   ],
    //   'imglist': [

    //   ],
    //   'check': [],
    //   'isPaging': true,
    //   'type': 'type_imgText'
    // },
  ];

  constructor(public testQuestionsService: TestQuestionsService) { }

  dataBack() {
    return { 'currentNum': this.current, 'catalog': this.Catalog, 'content': this.content };
  }
}
