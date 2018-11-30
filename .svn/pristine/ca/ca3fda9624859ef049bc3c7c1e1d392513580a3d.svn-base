/**
 * @author  bingur
 * 定义与后台通信对象
 * @construtor
 */
import {
    DescriptionObject,
    ConditionObject,
    HandleObject,
    DesOptionObject,
    OptionObject,
    ExclusiveObject,
    QuestionObject,
    ProgressObject,
    ScoreObject,
    ValueObject,
    ProgressArray,
    Paper,
    HandleArray,
} from './dataObject';
import { HandleErrorService } from '../handle_error';
import { AppService } from '../../index/app.service';

declare let $: any;
// let dtdTs = $.Deferred();
let url, domainUrl, code, question, order = [], totalScore = 0, // 记录获取服务器时间的本地时间节点
    studyCodeUrl = 'content/web/api/getStudyCode',         // 获取code
    studyTsUrl = 'content/web/api/token/getStudyTs',      // 获取token，sessionId的服务器接口
    startStudyUrl = '/content/api/oper/study/startStudy',    // 开始学习的服务器接口
    commitStudyUrl = '/content/api/oper/study/commitStudy',  // 提交的服务器接口
    exitStudyUrl = '/content/api/oper/study/exitStudy',      // 退出的服务器接口

    studentListUrl = '/api/newcloud/group/students',        // 获取所有的学生列表
    groupListGetUrl = '/api/newcloud/group/list',        // 获取决策分组
    groupListSaveUrl = '/api/newcloud/group/save',        // 保存决策分组

    evaluationScoreListGetUrl = '/api/newcloud/group/score';        // 获取评估页面分数列表



/**
 * 解析url后面的数据的方法
 * @param search 传入url的search数据部分
 * @returns {{urlObj}} 返回一个以数据为属性的对象
 */
let urlParse = (search): any => {
    let urlObj: any = {};

    if (search === '') {
        // window.location.href='http://content.xiaochejiang.com/warn.html';
    }
    if (search.indexOf('?') !== -1) {
        let dataStr = search.substr(1).split('&');
        for (let i = 0, len = dataStr.length; i < len; i++) {
            let dataStrsin = dataStr[i].split('=');
            urlObj[dataStrsin[0]] = dataStrsin[1];
        }
    }

    if (
        typeof urlObj.courseNumber === 'undefined' ||
        typeof urlObj.faultNumber === 'undefined' ||
        typeof urlObj.domainUrl === 'undefined' ||
        typeof urlObj.userEmail === 'undefined' ||
        typeof urlObj.domainAccount === 'undefined' ||
        typeof urlObj.userCourseClassId === 'undefined'
    ) {
        // window.location.href='http://content.xiaochejiang.com/warn.html';
    }
    return urlObj;
};


/**
 * @author  周博宇
 * 定义与后台通信对象
 * @construtor
 */
class Adapter {
    domainAccount: string;
    userEmail;
    sessionId;
    token;
    courseNumber;
    faultNumber;
    userCourseClassId;
    type;
    seconds;
    progress;
    score;
    isComplete;
    isPass;
    characterA;
    characterB;
    characterC;
    courseName;
    passCondition;
    completeCondition;
    serverTime;
    code?;
    constructor(private handleErrorService: HandleErrorService, private appService: AppService) {
        this.domainAccount = '';      // 当前域名
        this.userEmail = '';          // 当前用户email（当前账号唯一标识）
        this.sessionId = '';          // 当前学习过程唯一标识
        this.token = '';              // 当前学习过程口令
        this.courseNumber = '';       // 当前学习课程编号
        this.faultNumber = '';        // 当前学习故障编号
        this.userCourseClassId = '';               // 随机验证码
        this.type = 1;                // 课件类型
        this.seconds = 0;             // 学习时间
        this.progress = 0;            // 进度
        this.score = 0;               // 得分
        this.isComplete = 0;          // 是否完成
        this.isPass = 0;              // 能否通过
        this.characterA = {
            progress: [],
            score: [],
            handle: []
        };         // 进度、得分、动作详细数据
        this.characterB = {};         // 试题集合
        this.characterC = {
            handle: []
        };         // 自定义参数
        this.courseName = '';         // 课件名称
        this.passCondition = 0;       // 通过条件
        this.completeCondition = 0;   // 完成条件
        this.serverTime = '';           // 服务器返回时间

        // 无通信服务时打开
        if ((window.location.host).includes('10.0.1')) {
            console.log(123);
            this.characterB = {
                "exclusive": "",
                "handle": "",
                "progress": "",
                "question": [
                    {
                        "catalog": "skill",
                        "description": "案例导入测评",
                        "id": "skill",
                        "question": [
                            {
                                "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
                                "id": "show_0012",
                                'catalog': 'skill01',
                                "option": [{
                                    "description": "火花塞间隙变大，点火击穿电压增加",
                                    "id": "show_0012_p1",
                                    "isRight": "0"
                                }, {
                                    "description": "火花塞间隙变大，充电时间增加",
                                    "id": "show_0012_p2",
                                    "isRight": "1"
                                }, {
                                    "description": "火花塞间隙变小，点火击穿电压增加",
                                    "id": "show_0012_p3",
                                    "isRight": "0"
                                }, {
                                    "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
                                    "id": "show_0012_p4",
                                    "isRight": "0"
                                }],
                                "rate": "1",
                                "type": "1",
                                "url": "/aaa/bbb/index.html"
                            },
                            {
                                "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
                                "id": "show_0011",
                                'catalog': 'skill02',
                                "option": [{
                                    "description": "火花塞间隙变大，点火击穿电压增加",
                                    "id": "show_0011_p1",
                                    "isRight": "0"
                                }, {
                                    "description": "火花塞间隙变大，充电时间增加",
                                    "id": "show_0011_p2",
                                    "isRight": "1"
                                }, {
                                    "description": "火花塞间隙变小，点火击穿电压增加",
                                    "id": "show_0011_p3",
                                    "isRight": "0"
                                }, {
                                    "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
                                    "id": "show_003_p4",
                                    "isRight": "0"
                                }],
                                "rate": "1",
                                "type": "1",
                                "url": "/aaa/bbb/index.html"
                            },
                            {
                                "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
                                "id": "show_0010",
                                'catalog': 'skill03',
                                "option": [{
                                    "description": "火花塞间隙变大，点火击穿电压增加",
                                    "id": "show_0010_p1",
                                    "isRight": "0"
                                }, {
                                    "description": "火花塞间隙变大，充电时间增加",
                                    "id": "show_0010_p2",
                                    "isRight": "1"
                                }, {
                                    "description": "火花塞间隙变小，点火击穿电压增加",
                                    "id": "show_0010_p3",
                                    "isRight": "0"
                                }, {
                                    "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
                                    "id": "show_0010_p4",
                                    "isRight": "0"
                                }],
                                "rate": "1",
                                "type": "1",
                                "url": "/aaa/bbb/index.html"
                            },
                            {
                                "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
                                "id": "show_001",
                                'catalog': 'skill04',
                                "option": [{
                                    "description": "火花塞间隙变大，点火击穿电压增加",
                                    "id": "show_001_p1",
                                    "isRight": "0"
                                }, {
                                    "description": "火花塞间隙变大，充电时间增加",
                                    "id": "show_001_p2",
                                    "isRight": "1"
                                }, {
                                    "description": "火花塞间隙变小，点火击穿电压增加",
                                    "id": "show_001_p3",
                                    "isRight": "0"
                                }, {
                                    "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
                                    "id": "show_001_p4",
                                    "isRight": "0"
                                }],
                                "rate": "1",
                                "type": "1",
                                "url": "/aaa/bbb/index.html"
                            },
                            {
                                "description": "（不定项）点火线圈主要由（）部分组成",
                                "id": "show_002",
                                "option": [{
                                    "description": "初级线圈、次级线圈",
                                    "id": "show_002_p1",
                                    "isRight": "1"
                                }, {
                                    "description": "弹簧、护套",
                                    "id": "show_002_p2",
                                    "isRight": "1"
                                }, {
                                    "description": "高压二极管、抗干扰电阻",
                                    "id": "show_002_p3",
                                    "isRight": "0"
                                }, {
                                    "description": "火花塞",
                                    "id": "show_002_p4",
                                    "isRight": "0"
                                }],
                                "rate": "5",
                                "type": "2",
                                "url": "aaa/bbb/index.html"
                            }, {
                                "description": "这是一个连线题",
                                "id": "show_004",
                                "question": [{
                                    "id": "show_004_001_001",
                                    "option": [],
                                    "rate": "",
                                    "td": {
                                        "option": [],
                                        "td": ["项目内容", "连线区域", "项目内容"]
                                    }
                                }, {
                                    "id": "show_004_001_001_001",
                                    "option": [{
                                        "description": "发动机严重抖动、动力不足",
                                        "id": "show_004_001_001_001_a001",
                                        "isRight": "1"
                                    }],
                                    "rate": "1",
                                    "td": {
                                        "option": ["all"],
                                        "td": ["火花塞间隙过大"]
                                    }
                                }, {
                                    "id": "show_005_001_001_002",
                                    "option": [{
                                        "description": "发动机间歇性动力不足",
                                        "id": "show_005_001_001_002_a001",
                                        "isRight": "1"
                                    }],
                                    "rate": "2",
                                    "td": {
                                        "option": ["all"],
                                        "td": ["点火线圈内部断路"]
                                    }
                                }, {
                                    "id": "show_005_001_001_003",
                                    "option": [{
                                        "description": "发动机抖动、尾气油味浓",
                                        "id": "show_005_001_001_003_a001",
                                        "isRight": "1"
                                    }],
                                    "rate": "2",
                                    "td": {
                                        "option": ["all"],
                                        "td": ["火花塞型号不对"]
                                    }
                                }, {
                                    "id": "show_005_001_001_004",
                                    "option": [{
                                        "description": "发动机爆燃、温度过高",
                                        "id": "show_005_001_001_004_a001",
                                        "isRight": "1"
                                    }],
                                    "rate": "1",
                                    "td": {
                                        "option": ["all"],
                                        "td": ["点火线圈插接件虚接"]
                                    }
                                }],
                                "rate": "",
                                "type": "6",
                                "url": "aaa/bbb/index.html"
                            }, {
                                "description": "将下列元件的故障现象拖拽至相对应的元件框内",
                                "id": "show_005",
                                "option": [{
                                    "description": "发动机爆燃、温度过高",
                                    "id": "show_005_001_p1",
                                    "isRight": "1"
                                }, {
                                    "description": "火花塞电极无火花产生",
                                    "id": "show_005_002_p1",
                                    "isRight": "1"
                                }, {
                                    "description": "点火线圈过热",
                                    "id": "show_005_003_p1",
                                    "isRight": "0"
                                }, {
                                    "description": "火花塞电极火花时有时无",
                                    "id": "show_005_004_p1",
                                    "isRight": "0"
                                }],
                                "question": [{
                                    "description": "火花塞",
                                    "id": "show_005_001",
                                    "options": [{
                                        "description": "发动机爆燃、温度过高",
                                        "id": "show_005_001_p1",
                                        "isRight": "1"
                                    }],
                                    "rate": "1",
                                    "url": "/aaa/bbb/index.html"
                                }, {
                                    "description": "火花塞222",
                                    "id": "show_005_002",
                                    "options": [{
                                        "description": "火花塞电极无火花产生",
                                        "id": "show_005_002_p1",
                                        "isRight": "1"
                                    }],
                                    "rate": "1",
                                    "url": "/aaa/bbb/index.html"
                                }],
                                "rate": "",
                                "type": "7",
                                "url": ""
                            }, {
                                "description": "通过实际测量，点火系统中影响发动机抖动的原因都有哪些因素？",
                                "id": "show_006",
                                "option": [{
                                    "description": "初级线圈、次级线圈",
                                    "id": "show_006_p1",
                                    "isRight": "1"
                                }],
                                "rate": "1",
                                "type": "8",
                                "url": "/aaa/bbb/index.html"
                            }, {
                                "description": "这是填空加选择题",
                                "id": "show_007",
                                "question": [{
                                    "description": "传感器1的电源电压是$XCJ$伏，传感器2的电源电压是$XCJ$伏",
                                    "id": "show_007_001",
                                    "option": [{
                                        "description": "3V",
                                        "id": "show_007_001_a001",
                                        "isRight": "1"
                                    }, {
                                        "description": "3V",
                                        "id": "show_007_001_a002",
                                        "isRight": "1"
                                    }],
                                    "type": "9",
                                    "url": "/aaa/bbb/index.html"
                                }, {
                                    "description": "根据以上测量结果判断，两个传感器的电源是否正常",
                                    "id": "show_007_002",
                                    "option": [{
                                        "description": "3V",
                                        "id": "show_007_002_a003",
                                        "isRight": "0"
                                    }, {
                                        "description": "3V",
                                        "id": "show_007_002_a004",
                                        "isRight": "1"
                                    }],
                                    "type": "1",
                                    "url": "/aaa/bbb/index.html"
                                }],
                                "rate": "1",
                                "type": "10",
                                "url": ""
                            }, {
                                "description": "这是表格和选择题",
                                "id": "show_009",
                                "question": [{
                                    "description": "",
                                    "id": "show_009_001",
                                    "question": [{
                                        "description": "",
                                        "id": "show_009_001_001",
                                        "option": [],
                                        "td": {
                                            "option": [],
                                            "td": ["操作内容", "油门踏板开度（％）", "信号1电压（V）", "信号2电压（V）"]
                                        },
                                        "url": "/aaa/bbb/index.html"
                                    }, {
                                        "description": "",
                                        "id": "show_009_001_002",
                                        "option": [{
                                            "description": "30%",
                                            "id": "show_009_001_002_001",
                                            "isRight": "1"
                                        }, {
                                            "description": "4v",
                                            "id": "show_009_001_002_002",
                                            "isRight": "1"
                                        }, {
                                            "description": "5v",
                                            "id": "show_009_001_002_003",
                                            "isRight": "1"
                                        }],
                                        "td": {
                                            "option": [],
                                            "td": ["不踩加速踏板", "", "", ""]
                                        },
                                        "url": "/aaa/bbb/index.html"
                                    }, {
                                        "description": "",
                                        "id": "show_009_001_003",
                                        "option": [{
                                            "description": "30%",
                                            "id": "show_009_001_003_001",
                                            "isRight": "1"
                                        }, {
                                            "description": "4v",
                                            "id": "show_009_001_003_002",
                                            "isRight": "1"
                                        }, {
                                            "description": "5v",
                                            "id": "show_009_001_003_003",
                                            "isRight": "1"
                                        }],
                                        "td": {
                                            "option": [],
                                            "td": ["加速踏板踩下一半", "", "", ""]
                                        },
                                        "url": "/aaa/bbb/index.html"
                                    }, {
                                        "description": "",
                                        "id": "show_009_001_004",
                                        "option": [{
                                            "description": "30%",
                                            "id": "show_009_001_004_001",
                                            "isRight": "1"
                                        }, {
                                            "description": "4v",
                                            "id": "show_009_001_004_002",
                                            "isRight": "1"
                                        }, {
                                            "description": "5v",
                                            "id": "show_009_001_004_003",
                                            "isRight": "1"
                                        }],
                                        "td": {
                                            "option": [],
                                            "td": ["加速踏板踩到底", "", "", ""]
                                        },
                                        "url": "/aaa/bbb/index.html"
                                    }],
                                    "type": "3",
                                    "url": "/aaa/bbb/index.html"
                                }, {
                                    "description": "通过以上数据分析，加速踏板位置传感器两个信号之间符合什么样的逻辑关系？",
                                    "id": "show_009_002",
                                    "option": [{
                                        "description": "两个信号呈相反变化",
                                        "id": "show_009_002_001",
                                        "isRight": "1"
                                    }, {
                                        "description": "一个值变大的时候另一个值变小",
                                        "id": "show_009_002_002",
                                        "isRight": "0"
                                    }, {
                                        "description": "两个信号之间符合2倍的关系",
                                        "id": "show_009_002_003",
                                        "isRight": "0"
                                    }, {
                                        "description": "两个信号之间没有逻辑关系",
                                        "id": "show_009_002_004",
                                        "isRight": "0"
                                    }],
                                    "type": "1",
                                    "url": "/aaa/bbb/index.html"
                                }],
                                "rate": "",
                                "type": "11",
                                "url": ""
                            }],
                        "remark": ""
                    },
                    {
                        "catalog": "exam",
                        "description": "案例导入测评",
                        "id": "skill",
                        "question": [{
                            "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
                            "id": "show_001",
                            'catalog': 'exam01',
                            "option": [{
                                "description": "火花塞间隙变大，点火击穿电压增加",
                                "id": "show_001_p1",
                                "isRight": "0"
                            }, {
                                "description": "火花塞间隙变大，充电时间增加",
                                "id": "show_001_p2",
                                "isRight": "1"
                            }, {
                                "description": "火花塞间隙变小，点火击穿电压增加",
                                "id": "show_001_p3",
                                "isRight": "0"
                            }, {
                                "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
                                "id": "show_001_p4",
                                "isRight": "0"
                            }],
                            "rate": "1",
                            "type": "1",
                            "url": "/aaa/bbb/index.html"
                        }, {
                            "description": "（不定项）点火线圈主要由（）部分组成",
                            "id": "show_002",
                            "option": [{
                                "description": "初级线圈、次级线圈",
                                "id": "show_002_p1",
                                "isRight": "1"
                            }, {
                                "description": "弹簧、护套",
                                "id": "show_002_p2",
                                "isRight": "1"
                            }, {
                                "description": "高压二极管、抗干扰电阻",
                                "id": "show_002_p3",
                                "isRight": "0"
                            }, {
                                "description": "火花塞",
                                "id": "show_002_p4",
                                "isRight": "0"
                            }],
                            "rate": "5",
                            "type": "2",
                            "url": "aaa/bbb/index.html"
                        }, {
                            "description": "这是一个连线题",
                            "id": "show_004",
                            "question": [{
                                "id": "show_004_001_001",
                                "option": [],
                                "rate": "",
                                "td": {
                                    "option": [],
                                    "td": ["项目内容", "连线区域", "项目内容"]
                                }
                            }, {
                                "id": "show_004_001_001_001",
                                "option": [{
                                    "description": "发动机严重抖动、动力不足",
                                    "id": "show_004_001_001_001_a001",
                                    "isRight": "1"
                                }],
                                "rate": "1",
                                "td": {
                                    "option": ["all"],
                                    "td": ["火花塞间隙过大"]
                                }
                            }, {
                                "id": "show_005_001_001_002",
                                "option": [{
                                    "description": "发动机间歇性动力不足",
                                    "id": "show_005_001_001_002_a001",
                                    "isRight": "1"
                                }],
                                "rate": "2",
                                "td": {
                                    "option": ["all"],
                                    "td": ["点火线圈内部断路"]
                                }
                            }, {
                                "id": "show_005_001_001_003",
                                "option": [{
                                    "description": "发动机抖动、尾气油味浓",
                                    "id": "show_005_001_001_003_a001",
                                    "isRight": "1"
                                }],
                                "rate": "2",
                                "td": {
                                    "option": ["all"],
                                    "td": ["火花塞型号不对"]
                                }
                            }, {
                                "id": "show_005_001_001_004",
                                "option": [{
                                    "description": "发动机爆燃、温度过高",
                                    "id": "show_005_001_001_004_a001",
                                    "isRight": "1"
                                }],
                                "rate": "1",
                                "td": {
                                    "option": ["all"],
                                    "td": ["点火线圈插接件虚接"]
                                }
                            }],
                            "rate": "",
                            "type": "6",
                            "url": "aaa/bbb/index.html"
                        }, {
                            "description": "将下列元件的故障现象拖拽至相对应的元件框内",
                            "id": "show_005",
                            "option": [{
                                "description": "发动机爆燃、温度过高",
                                "id": "show_005_001_p1",
                                "isRight": "1"
                            }, {
                                "description": "火花塞电极无火花产生",
                                "id": "show_005_002_p1",
                                "isRight": "1"
                            }, {
                                "description": "点火线圈过热",
                                "id": "show_005_003_p1",
                                "isRight": "0"
                            }, {
                                "description": "火花塞电极火花时有时无",
                                "id": "show_005_004_p1",
                                "isRight": "0"
                            }],
                            "question": [{
                                "description": "火花塞",
                                "id": "show_005_001",
                                "options": [{
                                    "description": "发动机爆燃、温度过高",
                                    "id": "show_005_001_p1",
                                    "isRight": "1"
                                }],
                                "rate": "1",
                                "url": "/aaa/bbb/index.html"
                            }, {
                                "description": "火花塞222",
                                "id": "show_005_002",
                                "options": [{
                                    "description": "火花塞电极无火花产生",
                                    "id": "show_005_002_p1",
                                    "isRight": "1"
                                }],
                                "rate": "1",
                                "url": "/aaa/bbb/index.html"
                            }],
                            "rate": "",
                            "type": "7",
                            "url": ""
                        }, {
                            "description": "通过实际测量，点火系统中影响发动机抖动的原因都有哪些因素？",
                            "id": "show_006",
                            "option": [{
                                "description": "初级线圈、次级线圈",
                                "id": "show_006_p1",
                                "isRight": "1"
                            }],
                            "rate": "1",
                            "type": "8",
                            "url": "/aaa/bbb/index.html"
                        }, {
                            "description": "这是填空加选择题",
                            "id": "show_007",
                            "question": [{
                                "description": "传感器1的电源电压是$XCJ$伏，传感器2的电源电压是$XCJ$伏",
                                "id": "show_007_001",
                                "option": [{
                                    "description": "3V",
                                    "id": "show_007_001_a001",
                                    "isRight": "1"
                                }, {
                                    "description": "3V",
                                    "id": "show_007_001_a002",
                                    "isRight": "1"
                                }],
                                "type": "9",
                                "url": "/aaa/bbb/index.html"
                            }, {
                                "description": "根据以上测量结果判断，两个传感器的电源是否正常",
                                "id": "show_007_002",
                                "option": [{
                                    "description": "3V",
                                    "id": "show_007_002_a003",
                                    "isRight": "0"
                                }, {
                                    "description": "3V",
                                    "id": "show_007_002_a004",
                                    "isRight": "1"
                                }],
                                "type": "1",
                                "url": "/aaa/bbb/index.html"
                            }],
                            "rate": "1",
                            "type": "10",
                            "url": ""
                        }, {
                            "description": "这是表格和选择题",
                            "id": "show_009",
                            "question": [{
                                "description": "",
                                "id": "show_009_001",
                                "question": [{
                                    "description": "",
                                    "id": "show_009_001_001",
                                    "option": [],
                                    "td": {
                                        "option": [],
                                        "td": ["操作内容", "油门踏板开度（％）", "信号1电压（V）", "信号2电压（V）"]
                                    },
                                    "url": "/aaa/bbb/index.html"
                                }, {
                                    "description": "",
                                    "id": "show_009_001_002",
                                    "option": [{
                                        "description": "30%",
                                        "id": "show_009_001_002_001",
                                        "isRight": "1"
                                    }, {
                                        "description": "4v",
                                        "id": "show_009_001_002_002",
                                        "isRight": "1"
                                    }, {
                                        "description": "5v",
                                        "id": "show_009_001_002_003",
                                        "isRight": "1"
                                    }],
                                    "td": {
                                        "option": [],
                                        "td": ["不踩加速踏板", "", "", ""]
                                    },
                                    "url": "/aaa/bbb/index.html"
                                }, {
                                    "description": "",
                                    "id": "show_009_001_003",
                                    "option": [{
                                        "description": "30%",
                                        "id": "show_009_001_003_001",
                                        "isRight": "1"
                                    }, {
                                        "description": "4v",
                                        "id": "show_009_001_003_002",
                                        "isRight": "1"
                                    }, {
                                        "description": "5v",
                                        "id": "show_009_001_003_003",
                                        "isRight": "1"
                                    }],
                                    "td": {
                                        "option": [],
                                        "td": ["加速踏板踩下一半", "", "", ""]
                                    },
                                    "url": "/aaa/bbb/index.html"
                                }, {
                                    "description": "",
                                    "id": "show_009_001_004",
                                    "option": [{
                                        "description": "30%",
                                        "id": "show_009_001_004_001",
                                        "isRight": "1"
                                    }, {
                                        "description": "4v",
                                        "id": "show_009_001_004_002",
                                        "isRight": "1"
                                    }, {
                                        "description": "5v",
                                        "id": "show_009_001_004_003",
                                        "isRight": "1"
                                    }],
                                    "td": {
                                        "option": [],
                                        "td": ["加速踏板踩到底", "", "", ""]
                                    },
                                    "url": "/aaa/bbb/index.html"
                                }],
                                "type": "3",
                                "url": "/aaa/bbb/index.html"
                            }, {
                                "description": "通过以上数据分析，加速踏板位置传感器两个信号之间符合什么样的逻辑关系？",
                                "id": "show_009_002",
                                "option": [{
                                    "description": "两个信号呈相反变化",
                                    "id": "show_009_002_001",
                                    "isRight": "1"
                                }, {
                                    "description": "一个值变大的时候另一个值变小",
                                    "id": "show_009_002_002",
                                    "isRight": "0"
                                }, {
                                    "description": "两个信号之间符合2倍的关系",
                                    "id": "show_009_002_003",
                                    "isRight": "0"
                                }, {
                                    "description": "两个信号之间没有逻辑关系",
                                    "id": "show_009_002_004",
                                    "isRight": "0"
                                }],
                                "type": "1",
                                "url": "/aaa/bbb/index.html"
                            }],
                            "rate": "",
                            "type": "11",
                            "url": ""
                        }],
                        "remark": ""
                    }
                ],
                "score": [{
                    "id": "q01",
                    "kp": "",
                    "questionId": "show_001",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q02",
                    "kp": "",
                    "questionId": "show_002",
                    "rate": "5",
                    "type": "question"
                }, {
                    "id": "q03",
                    "kp": "",
                    "questionId": "show_004_001_001_001",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q04",
                    "kp": "",
                    "questionId": "show_005_001_001_002",
                    "rate": "2",
                    "type": "question"
                }, {
                    "id": "q05",
                    "kp": "",
                    "questionId": "show_005_001_001_003",
                    "rate": "2",
                    "type": "question"
                }, {
                    "id": "q06",
                    "kp": "",
                    "questionId": "show_005_001_001_004",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q07",
                    "kp": "",
                    "questionId": "show_005_001",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q08",
                    "kp": "",
                    "questionId": "show_005_002",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q09",
                    "kp": "",
                    "questionId": "show_006",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q10",
                    "kp": "",
                    "questionId": "show_007",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q11",
                    "kp": "",
                    "questionId": "show_007_001",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q12",
                    "kp": "",
                    "questionId": "show_007_002",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q12",
                    "kp": "",
                    "questionId": "show_009_001_002",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q12",
                    "kp": "",
                    "questionId": "show_009_001_003",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q12",
                    "kp": "",
                    "questionId": "show_009_001_004",
                    "rate": "1",
                    "type": "question"
                }, {
                    "id": "q12",
                    "kp": "",
                    "questionId": "show_009_002",
                    "rate": "1",
                    "type": "question"
                }],
                "values": ""
            }
        }
    }

    /**
     * @author 周博宇
     * 初始化必要参数
     */
    init() {
        let data = urlParse(location.search);

        this.courseNumber = data.courseNumber;
        this.faultNumber = data.faultNumber;
        domainUrl = data.domainUrl;
        this.userEmail = data.userEmail;
        this.domainAccount = data.domainAccount;
        this.userCourseClassId = data.userCourseClassId;

        // 无通信服务时打开
        if ((window.location.host).includes('10.0.1')) {
            this.setCharacterA('{ "progress": [], "score": [], "handle": [] }');
        }
    };

    /**
     * @author 周博宇
     * 获取token，sessionId
     * @param dtd
     */
    getStudyTs(dtd) {
        let userEmail = this.userEmail;
        let getStudyTsUrl = domainUrl + studyTsUrl;
        let data1 = {
            'email': this.userEmail,
            'courseNumber': this.courseNumber,
            'userCourseClassId': this.userCourseClassId,
        };
        let getStudyCodeUrl = domainUrl + studyCodeUrl;

        $.ajax({
            type: 'get',
            url: getStudyCodeUrl,
            data: data1,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: (data) => {
                if (data === '') {
                    this.handleErrorService.handleError(21);
                } else {
                    if (data.errCode === '0' || data.errCode === 0) {
                        code = data.code;
                    } else {
                        // console.log(data.errCode);
                        this.handleErrorService.handleError(+data.errCode);
                    }
                }
            },
            error: (jqXHR, textStatus, errorMsg) => {
                this.handleErrorService.handleError(20);
                // console.error(errorMsg);
            }
        }).then(() => {
            let data = { 'userEmail': this.userEmail, 'code': code };

            $.ajax({
                type: 'get',
                url: getStudyTsUrl,
                data,
                dataType: 'jsonp',
                jsonp: 'callback',
                // tslint:disable-next-line:no-shadowed-variable
                success: (data) => {
                    if (data === '') {
                        this.handleErrorService.handleError(21);
                    } else {
                        if (data.errCode === '0' || data.errCode === 0) {
                            this.sessionId = data.sessionId;
                            this.token = data.token;
                            dtd.resolve();
                        } else {
                            // console.log(data.errCode);
                            this.handleErrorService.handleError(+data.errCode);
                        }
                    }
                },
                error: (jqXHR, textStatus, errorMsg) => {
                    this.handleErrorService.handleError(20);
                    // console.error(errorMsg);
                },
            });

        });
    };



    /**
     * @author 周博宇
     * 开始学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    startStudy() {
        let obj: any = {};
        obj.adapter = JSON.stringify(this);
        url = 'http:\/\/' + location.host + startStudyUrl;
        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            data: obj,
            success: (data) => {
                if (data.errCode === '0' || data.errCode === 0) {
                    totalScore = data.adapter.totalScore;
                    this.characterB = JSON.parse(data.adapter.characterB);
                    this.domainAccount = data.adapter.domainAccount;
                    this.userEmail = data.adapter.userEmail;
                    this.sessionId = data.adapter.sessionId;
                    this.token = data.adapter.token;
                    this.courseNumber = data.adapter.courseNumber;
                    this.faultNumber = data.adapter.faultNumber;
                    this.code = data.adapter.code;
                    this.type = data.adapter.type;
                    this.seconds = data.adapter.seconds;
                    this.progress = data.adapter.progress;
                    this.score = data.adapter.score;
                    this.isComplete = data.adapter.isComplete;
                    this.isPass = data.adapter.isPass;
                    this.courseName = data.adapter.courseName;
                    this.passCondition = data.adapter.passCondition;
                    this.completeCondition = data.adapter.completeCondition;
                    if (data.adapter) {
                        this.serverTime = data.adapter.serverTime;
                    }
                    this.characterC = JSON.parse(data.adapter.characterC);
                    this.setCharacterC(this.characterC);
                    // 设置characterA
                    this.setCharacterA(data.adapter.characterA);

                    // progress.rate = this.progress;
                    // paper.rate = this.score;
                } else {
                    this.handleErrorService.handleError(+data.errCode);
                }
                if (data === '') {
                    this.handleErrorService.handleError(21);
                }
                // console.log(data.errCode);
            },
            error: (jqXHR, textStatus, errorMsg) => {
                console.log(jqXHR, textStatus, errorMsg);
                this.handleErrorService.handleError(20);
                //  console.error(errorMsg);
            }
        });

    };


    setCharacterA(characterA) {

        if (characterA) {
            characterA = JSON.parse(characterA);
        }
        console.log('characterA---chenggong');
        if (characterA['score'] && characterA['score'].length !== 0) {
            this.characterA = characterA;
            return;
        }
        this.characterA['progress'] = [];
        this.characterA['score'] = [];


        this.characterB['question'].map((i, iIndex) => {
            let obj2 = Object.assign({}, {
                'catalog': i.catalog,
                'sumScore': 0,
                'score': [],
            });
            i['question'].map((k, kIndex) => {
                obj2['score'].push(
                    Object.assign({}, {
                        handleArray: [],
                        // id: k.id,
                        isRight: 0,
                        // rate: k.rate,
                        optionArray: [],
                        questionID: k.id,
                    }));
            });
            this.characterA['score'].push(obj2);
        });

        this.characterB['score'].map((i, iIndex) => {
            this.characterA.score.map((k, kIndex) => {
                k['score']
                    .filter((l, lIndex) => {
                        // console.log(l.questionID, i.questionId);
                        return l.questionID === i.questionId;
                    })
                    .map((m, mIndex) => {
                        m.id = i.id;
                        m.rate = i.rate;
                    });
            });
        });

    }
    setCharacterC(characterC) {
        this.appService.echo(characterC);
    }

    /**
     * @author 周博宇
     * 提交学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    commitStudy() {
        let obj1: any = {};
        this.characterC=this.appService.datacallback();
        obj1.adapter = JSON.stringify(this);
        url = 'http:\/\/' + location.host + commitStudyUrl;
        $.ajax({
            type: 'post',
            url: url,
            data: obj1,
            dataType: 'json',
            success: (data) => {
                if (data === '') {
                    this.handleErrorService.handleError(21);
                } else {
                    if (data.errCode === '0') {
                        if (data) {
                            if (data) {
                                this.serverTime = data.serverTime;
                            }
                        }
                    } else {
                        this.handleErrorService.handleError(+data.errCode);
                    }
                }
            },
            error: (jqXHR, textStatus, errorMsg) => {
                this.handleErrorService.handleError(20);
            }
        });
    };

    /**
     * @author 周博宇
     * 退出学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    exitStudy(progress, paper, handle) {
        let obj2: any = {};
        obj2.adapter = JSON.stringify(this);
        url = 'http:\/\/' + location.host + exitStudyUrl;
        $.ajax({
            type: 'post',
            url: url,
            data: obj2,
            dataType: 'json'
        });
    };
}

/**
 * 分组类
 */
class Group {
    domainAccount: string;
    userEmail;
    courseNumber;
    faultNumber;
    userCourseClassId;

    groupAllStudentList;
    groupGroupList;

    evaluationScoreList;

    constructor(private handleErrorService: HandleErrorService) {
        this.domainAccount = '';      // 当前域名
        this.userEmail = '';          // 当前用户email（当前账号唯一标识）
        this.courseNumber = '';       // 当前学习课程编号
        this.faultNumber = '';        // 当前学习故障编号
        this.userCourseClassId = '';  // 随机验证码

        this.groupAllStudentList = [];
        this.groupGroupList = {
            'CourseNumber': 'SBT_VER_001_XCJ',
            'PractiseNumber': 'safasdfasf23fgasd32',
            'UserInfo': {
                'userId': 111,
                'userRole': 'teacher'
            },
            'Group': []

        };
        this.evaluationScoreList = {
            'CourseNumber': '',
            'PractiseNumber': '',
            'UserInfo': {
            },
            'Group': []
        };
    }

    /**
     * @author 周博宇
     * 初始化必要参数
     */
    init() {
        let data = urlParse(location.search);
        this.courseNumber = data.courseNumber;
        this.faultNumber = data.faultNumber;
        domainUrl = data.domainUrl;
        this.userEmail = data.userEmail;
        this.domainAccount = data.domainAccount;
        this.userCourseClassId = data.userCourseClassId;
    };

    /**
     * 获取所有学生列表
     */
    getStudentList() {
        let obj: any = {};
        obj.PractiseNumber = this.userCourseClassId;
        let obj2 = obj;
        url = 'http:\/\/' + location.host + studentListUrl;
        console.log(url);
        $.ajax({
            type: 'get',
            url: url,
            data: obj2,
            dataType: 'json',
            success: (data) => {
                console.log(data);
                if (data === '') {
                    this.handleErrorService.handleError(21);
                } else if (data) {
                    this.analysisAllStudent(data);
                }
            },
            error: (jqXHR, textStatus, errorMsg) => {
                this.handleErrorService.handleError(20);
            }
        });
    };

    /**
     * 解析所有学生列表
     * @param data 返回的所有学生列表数据
     */
    analysisAllStudent(data) {
        this.groupAllStudentList = [];
        data.map((k, kIndex) => {
            let obj = Object.assign({}, {
                ID: k.ID,
                Name: k.Nickname
            });
            this.groupAllStudentList.push(obj);
        });
    }

    /**
     * 获取分组列表
     */
    getGroupList() {
        let obj: any = {};
        obj.PractiseNumber = this.userCourseClassId;
        obj.CourseNumber = this.courseNumber;

        let obj2 = obj;
        url = 'http:\/\/' + location.host + groupListGetUrl;
        console.log(obj2);

        $.ajax({
            type: 'get',
            url: url,
            data: obj2,
            dataType: 'json',
            success: (data) => {

                if (data === '') {
                    this.handleErrorService.handleError(21);
                } else if (data) {
                    data.CourseNumber = this.courseNumber;
                    data.PractiseNumber = this.userCourseClassId;

                    if (data.Group) {
                        data.Group = JSON.parse(data.Group);
                        this.groupGroupList = data;
                    } else {
                        this.analysisGroupList(data);
                    }
                }
            },
            error: (jqXHR, textStatus, errorMsg) => {
                this.handleErrorService.handleError(20);
            }
        });
    }



    /**
     * 获取所有学生列表
     */
    saveGroupList(param) {
        let obj = { CloudGroup: '' };

        let obj2 = Object.assign({}, {
            'CourseNumber': param.CourseNumber,
            'PractiseNumber': param.PractiseNumber,
            'UserInfo': param.UserInfo,
            'Group': JSON.stringify(param.Group),
        });

        obj.CloudGroup = JSON.stringify(obj2);
        console.log(obj);

        url = 'http:\/\/' + location.host + groupListSaveUrl;

        $.ajax({
            type: 'post',
            url: url,
            data: obj,
            dataType: 'json',
            success: (data) => {

            },
            error: (jqXHR, textStatus, errorMsg) => {
                console.log(errorMsg);

                this.handleErrorService.handleError(20);
            }
        });
    }


    /**
     * 获取评估分数列表
     */
    getEvaluationList() {
        let obj: any = {};
        obj.PractiseNumber = this.userCourseClassId;
        obj.CourseNumber = this.courseNumber;

        let obj2 = obj;
        url = 'http:\/\/' + location.host + evaluationScoreListGetUrl;

        $.ajax({
            type: 'get',
            url: url,
            data: obj2,
            dataType: 'json',
            success: (data) => {
                console.log(data, 'getEvaluationList');
                if (data === '') {
                    this.handleErrorService.handleError(21);
                } else if (data) {
                    if (data.Group) {
                        data.Group = JSON.parse(data.Group);
                        this.evaluationScoreList = data;
                    } else {
                        console.error('当前无列表--adapter;');
                    }
                }
            },
            error: (jqXHR, textStatus, errorMsg) => {
                this.handleErrorService.handleError(20);
            }
        });
    }

    /**
     * 默认的分组列表
     * @param data 返回的数据，没有返回数据时，需要占位
     */
    analysisGroupList(data) {
        data.Group = [{
            'id': 'g01',
            'group_name': '一组',
            'group_member': [
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
            ]
        },
        {
            'id': 'g02',
            'group_name': '二组',
            'group_member': [
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
            ]
        },
        {
            'id': 'g03',
            'group_name': '三组',
            'group_member': [
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
            ]
        },
        {
            'id': 'g04',
            'group_name': '四组',
            'group_member': [
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
            ]
        },
        {
            'id': 'g05',
            'group_name': '五组',
            'group_member': [
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
                {
                    'name': ''
                },
            ]
        }];
        this.groupGroupList = data;
    }

}

export { Adapter, Group, totalScore };
