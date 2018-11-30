import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReplaceService } from './replace.service';
import { Common } from '../common';
import { flyIn } from '../../animations';
declare const $;


@Component({
  selector: 'change-direction',
  providers: [
  ],
  animations: [
    flyIn
  ],
  templateUrl: './replace.component.html',
  styleUrls: ['./replace.component.scss'],
})
export class ReplaceComponent implements OnInit, OnDestroy {
  replaceChangeState = [];
  // 目录状态
  indexChangeState = {
    bodyFlag: true, // 目录显示隐藏标记
    oneFlag: true,  // sensor目录下第一个章节显示隐藏标记
    twoFlag: false,  // sensor目录下第二个章节显示隐藏标记
    threeFlag: false, // sensor目录下第三个章节显示隐藏标记
    fourFlag: true,  // power目录下第一个章节显示隐藏标记
    fiveFlag: false,  // power目录下第二个章节显示隐藏标记
    sixFlag: false,  // case目录下第一个章节显示隐藏标记
    sensorFlag: false, // sensor目录先所有章节显示隐藏标记
    powerFlag: false,  // power目录先所有章节显示隐藏标记
    caseFlag: false,  // case目录先所有章节显示隐藏标记
    backFlag: false,  // 返回按钮显示隐藏标记
    sensorBtnFlag: 'halo',  // sensor按钮闪烁标记
    powerBtnFlag: '',  // power按钮闪烁标记
    sensorFullFlag: false,  // sensor按钮充满标记
    powerFullFlag: false,  //  power按钮充满标记
    caseFullFlag: false,  // case按钮充满标记
    powerIsPassFlag: true,  // 目录下power是否可以点击标记
    caseIsPassFlag: true,  // 目录下case是否可以点击标记
    sensorIsPass: false,
    powerIsPass: false,
    caseIsPass: false,
    oneMouse: false,
    twoMouse: false,
    threeMouse: false,
  };

  // 下面目录章节对象参数注解，“...” 为章节对象前缀，如（one,two...）
  // stateFlag = {
  //   ...UpState,  // 章节内第一段文字显示隐藏标记
  //   ...DownFlag,  // 章节内第二段文字显示隐藏标记
  //   ...HaloUpFlag, // 章节内第一个按钮闪烁标记
  //   ...HaloDownFlag,  // 章节内第二个按钮闪烁标记
  //   ...FullClass,  // 章节内第一个按钮类名充满标记
  //   ...EmptyClass,  // 章节内第二个按钮类名空心标记
  //   ...DownFullClass, // 章节内第二个按钮类名充满标记
  //   ...UpImg,  //章节内第一段文字对应图片标记
  //   ...Down1Img, // 章节内第二段文字对应图片标记
  //   ...Down2Img,  // 章节内第二段文字对应闪烁图片标记
  //   ...NextFlag  // 章节内点击进入下一章节或下一目录标记
  // }
  // sensor目录第一个子章节
  oneState = {
    oneUpFlag: false,
    oneDownFlag: false,
    oneHaloUpFlag: 'halo',
    oneHaloDownFlag: '',
    oneFullClass: false,
    oneEmptyClass: false,
    oneDownFullClass: false,
    oneUpImg: false,
    oneDown1Img: false,
    oneDown2Img: false,
    oneNextFlag: false,
    oneNextTitleFlag: false,
  };

  //  sensor目录第二个子章节
  twoState = {
    twoUpFlag: false,
    twoDownFlag: false,
    twoHaloUpFlag: 'halo',
    twoHaloDownFlag: '',
    twoFullClass: false,
    twoEmptyClass: false,
    twoDownFullClass: false,
    twoUpImg: false,
    twoDown1Img: false,
    twoDown2Img: false,
    twoNextFlag: false,
    twoNextTitleFlag: false,
  };
  // sensor目录第三个子章节
  threeState = {
    threeUpFlag: false,
    threeDownFlag: false,
    threeHaloUpFlag: 'halo',
    threeHaloDownFlag: '',
    threeFullClass: false,
    threeEmptyClass: false,
    threeDownFullClass: false,
    threeUpImg: false,
    threeDown1Img: false,
    threeDown2Img: false,
    threeNextFlag: false,
    threeNextTitleFlag: false,
  };

  // power目录第一个章节
  fourState = {
    fourUpFlag: false,
    fourDownFlag: false,
    fourHaloUpFlag: 'halo',
    fourHaloDownFlag: '',
    fourFullClass: false,
    fourEmptyClass: false,
    fourDownFullClass: false,
    fourUpImg: false,
    fourDown1Img: false,
    fourDown2Img: false,
    fourNextFlag: false,
    fourNextTitleFlag: false,
  };

  // power目录第二个章节
  fiveState = {
    fiveUpFlag: false,
    fiveDownFlag: false,
    fiveHaloUpFlag: 'halo',
    fiveHaloDownFlag: '',
    fiveFullClass: false,
    fiveEmptyClass: false,
    fiveDownFullClass: false,
    fiveUpImg: false,
    fiveDown1Img: false,
    fiveDown2Img: false,
    fiveNextFlag: false,
    fiveNextTitleFlag: false,
  };


  constructor(
    private replaceService: ReplaceService,

  ) { };




  // 点击目录进入不同的子章节
  changeBtn(num) {
    switch (num) {
      case 1:
        this.oneState.oneUpImg = true;
        $('#ascrail2015-hr').hide();
        console.log(this.indexChangeState.sensorIsPass, '999');
        if (this.indexChangeState.sensorIsPass) {
          return;
        };
        this.indexChangeState.backFlag = true;
        this.indexChangeState.bodyFlag = false;
        this.indexChangeState.sensorFlag = true;
        if (window.outerWidth > 1680) {
        } else {
          $(document).ready(function () {
            $('#boxTwoScroll').niceScroll({
              autohidemode: 'leave',
              cursorborder: '5',
              background: '#ccc', // 轨道的背景颜色
              spacebarenabled: true,
              preventmultitouchscrolling: true, // 防止多触点事件引发滚动
              cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
              cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
            });
          });
        }
        if (this.indexChangeState.twoFlag) {
          $('#ascrail2001-hr').hide();
        }
        break;
      case 2:
        if (this.indexChangeState.powerIsPassFlag) {
          return;
        }
        $(document).ready(function () {
          $('#boxscroll').niceScroll({
            // autohidemode: false,
            autohidemode: 'leave',
            cursorborder: '5',
            background: '#ccc', // 轨道的背景颜色
            // boxzoom: true,
            spacebarenabled: true,
            preventmultitouchscrolling: true, // 防止多触点事件引发滚动
            cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
            cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
          });
        });

        this.indexChangeState.backFlag = true;
        this.indexChangeState.bodyFlag = false;
        this.indexChangeState.powerFlag = true;
        break;
      case 3:
        if (this.indexChangeState.caseIsPassFlag) {
          return;
        }
        this.indexChangeState.backFlag = true;
        this.indexChangeState.bodyFlag = false;
        this.indexChangeState.caseFlag = true;
        break;
      default:
        return;
    }
  };

  // 传感器与执行器按章节进入
  sensorChapter(num) {
    switch (num) {
      case 1:
        console.log('2222');
        this.indexChangeState.sensorFlag = true;
        this.indexChangeState.oneFlag = true;
        this.indexChangeState.twoFlag = false;
        this.indexChangeState.threeFlag = false;
        this.indexChangeState.backFlag = true;
        this.indexChangeState.bodyFlag = false;
        this.oneState.oneUpImg = true;
        // this.oneState.oneNextTitleFlag = false;
        break;
      case 2:
        this.indexChangeState.sensorFlag = true;
        this.indexChangeState.twoFlag = true;
        this.indexChangeState.oneFlag = false;
        this.indexChangeState.threeFlag = false;
        this.indexChangeState.backFlag = true;
        this.indexChangeState.bodyFlag = false;
        this.twoState.twoUpImg = true;
        if (window.outerWidth > 1680) {

        } else {
          $(document).ready(function () {
            $('#boxTwoScroll').niceScroll({
              // autohidemode: false,
              autohidemode: 'leave',
              cursorborder: '5',
              background: '#ccc', // 轨道的背景颜色
              // boxzoom: true,
              spacebarenabled: true,
              preventmultitouchscrolling: true, // 防止多触点事件引发滚动
              cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
              cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
            });
          });
        }

        break;
      case 3:
        this.indexChangeState.sensorFlag = true;
        this.indexChangeState.threeFlag = true;
        this.indexChangeState.oneFlag = false;
        this.indexChangeState.twoFlag = false;
        this.indexChangeState.threeFlag = true;
        this.indexChangeState.backFlag = true;
        this.indexChangeState.bodyFlag = false;
        this.threeState.threeDown1Img = true;
        // this.threeState.threeNextTitleFlag = false;
        break;
      default:
        return;
    }
  }

  // 电源与稳压器按章节进入
  powerChapter(num) {
    switch (num) {
      case 1:
        this.indexChangeState.bodyFlag = false;
        this.indexChangeState.powerFlag = true;
        this.indexChangeState.fourFlag = true;
        this.indexChangeState.fiveFlag = false;
        this.indexChangeState.backFlag = true;
        // this.fourState.fourNextTitleFlag = false;
        this.fourState.fourDown1Img = true;
        break;
      case 2:
        this.indexChangeState.bodyFlag = false;
        this.indexChangeState.powerFlag = true;
        this.indexChangeState.fiveFlag = true;
        this.indexChangeState.fourFlag = false;
        this.indexChangeState.backFlag = true;
        // this.fiveState.fiveNextTitleFlag = false;
        this.fiveState.fiveUpImg = true;
        $(document).ready(function () {
          $('#boxscroll').niceScroll({
            // autohidemode: false,
            autohidemode: 'leave',
            cursorborder: '5',
            background: '#ccc', // 轨道的背景颜色
            // boxzoom: true,
            spacebarenabled: true,
            preventmultitouchscrolling: true, // 防止多触点事件引发滚动
            cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
            cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
          });
        });
        break;
      default:
        return;
    }
  }

  // 案例分享按章节进入
  caseChapter(num) {
    switch (num) {
      case 1:
        this.indexChangeState.bodyFlag = false;
        this.indexChangeState.caseFlag = true;
        this.indexChangeState.backFlag = true;
        $(document).ready(function () {
          $('#boxScroll').niceScroll({
            // autohidemode: false,
            autohidemode: 'leave',
            cursorborder: '5',
            background: '#ccc', // 轨道的背景颜色
            // boxzoom: true,
            spacebarenabled: true,
            preventmultitouchscrolling: true, // 防止多触点事件引发滚动
            cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
            cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
          });
        });
        break;
      default:
        return;
    }
  }

  // 传感器与执行器启动停止系统按键E693  作用
  oneUp() {
    this.oneState.oneUpFlag = true;
    this.oneState.oneUpImg = true;
    this.oneState.oneHaloUpFlag = '';
    this.oneState.oneFullClass = true;
    setTimeout(() => {
      this.oneState.oneEmptyClass = true;
      if (this.oneState.oneDownFullClass) {
        this.oneState.oneHaloDownFlag = '';
      } else {
        this.oneState.oneHaloDownFlag = 'halo';
      }
    }, 20);
  };

  // 传感器与执行器启动停止系统按键E693  影响
  oneDown() {
    if (this.oneState.oneEmptyClass) {
      this.oneState.oneHaloDownFlag = '';
      this.oneState.oneDownFullClass = true;
      this.oneState.oneDownFlag = true;
      this.oneState.oneUpImg = false;
      this.oneState.oneDown1Img = true;
      setTimeout(() => {
        this.oneState.oneDown2Img = true;
      }, 15);
    } else {

    }
  };

  // 点击图片显示下一个标题
  oneDownImages() {
    if (this.indexChangeState.sensorIsPass) {
      this.oneState.oneDown1Img = false;
      this.oneState.oneNextFlag = true;
      return;
    }
    this.oneState.oneDown1Img = false;
    this.oneState.oneNextFlag = true;
    this.oneState.oneNextTitleFlag = true;
  };

  // 点击进入下一个章节
  oneNext() {
    if (this.indexChangeState.sensorIsPass) {
      this.twoState.twoUpImg = true;
      this.twoState.twoNextTitleFlag = true;
    }
    this.indexChangeState.oneFlag = false;
    this.indexChangeState.twoFlag = true;
    this.twoState.twoDown1Img = true;
    console.log(this.oneState.oneUpImg);
    if (window.outerWidth > 1680) {

    } else {
      $(document).ready(function () {
        $('#boxTwoScroll').niceScroll({
          // autohidemode: false,
          autohidemode: 'leave',
          cursorborder: '5',
          background: '#ccc', // 轨道的背景颜色
          // boxzoom: true,
          spacebarenabled: true,
          preventmultitouchscrolling: true, // 防止多触点事件引发滚动
          cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
          cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
        });
      });
    }

  };







  // 传感器与执行器蓄电池监控单元J367BDM  作用
  twoUp() {
    if (this.indexChangeState.sensorIsPass) {
      this.oneState.oneDown1Img = false;
      this.oneState.oneUpImg = false;
      this.oneState.oneDown2Img = false;
    }
    this.oneState.oneNextFlag = false;
    this.twoState.twoUpFlag = true;
    this.twoState.twoUpImg = true;
    this.twoState.twoHaloUpFlag = '';
    this.twoState.twoFullClass = true;
    setTimeout(() => {
      this.twoState.twoEmptyClass = true;
      if (this.twoState.twoDownFullClass) {
        this.twoState.twoHaloDownFlag = '';
      } else {
        this.twoState.twoHaloDownFlag = 'halo';
      }
    }, 20);
  };

  // 传感器与执行器蓄电池监控单元J367BDM  影响
  twoDown() {
    setTimeout(() => {
      $('#boxTwoScroll').scrollTop(1000);
      $('#boxTwoScroll').getNiceScroll().resize()
    }, 100)
    if (this.indexChangeState.sensorIsPass) {
      this.oneState.oneDown1Img = false;
      this.oneState.oneUpImg = false;
      this.oneState.oneDown2Img = false;
    }
    if (this.twoState.twoEmptyClass) {
      this.twoState.twoHaloDownFlag = '';
      this.twoState.twoDownFullClass = true;
      this.twoState.twoDownFlag = true;
      this.twoState.twoUpImg = false;
      this.twoState.twoDown1Img = true;
      setTimeout(() => {
        this.twoState.twoDown2Img = true;
      }, 15);
    } else {

    }
  };

  // 点击图片显示下一个标题
  twoDownImages() {
    if (this.indexChangeState.sensorIsPass) {
      this.twoState.twoDown1Img = false;
      this.twoState.twoNextFlag = true;
      // this.twoState.twoNextTitleFlag = false;
      this.threeState.threeNextFlag = true;
      return;
    }
    this.twoState.twoNextTitleFlag = true;
    this.oneState.oneNextFlag = false;
    this.twoState.twoDown1Img = false;
    this.twoState.twoNextFlag = true;
    setTimeout(() => {
      $('#boxTwoScroll').scrollTop(150);
    }, 0);
  };

  // 点击进入下一个章节
  twoNext() {
    if (this.indexChangeState.sensorIsPass) {
      this.threeState.threeDown1Img = true;
      this.threeState.threeNextTitleFlag = true;
    }
    this.threeState.threeDown1Img = true;
    this.indexChangeState.twoFlag = false;
    this.indexChangeState.threeFlag = true;
    $('.nicescroll-rails').hide();
  };






  // 传感器与执行器变速箱空挡位置传感器G701  定义
  threeUp() {
    if (this.indexChangeState.sensorIsPass) {
      // this.indexChangeState.oneFlag = false;
      this.twoState.twoDown1Img = false;
      this.twoState.twoUpImg = false;
      this.twoState.twoDown2Img = false;
      this.oneState.oneDown1Img = false;
      this.oneState.oneDown2Img = false;
      this.oneState.oneUpImg = false;
    }
    this.twoState.twoNextFlag = false;
    this.threeState.threeUpFlag = true;
    this.threeState.threeDown1Img = true;
    this.threeState.threeHaloUpFlag = '';
    this.threeState.threeFullClass = true;
    setTimeout(() => {
      this.threeState.threeEmptyClass = true;
      if (this.threeState.threeDownFullClass) {
        this.threeState.threeHaloDownFlag = '';
      } else {
        this.threeState.threeHaloDownFlag = 'halo';
      }
      this.threeState.threeDown2Img = true;
    }, 15);
  };

  // 点击图片显示下一个标题
  threeDownImages() {
    if (this.indexChangeState.sensorIsPass) {
      this.threeState.threeDown1Img = false;
      this.threeState.threeNextFlag = true;
      // this.threeState.threeNextTitleFlag = false;
      return;
    }
    this.twoState.twoNextFlag = false;
    this.threeState.threeDown1Img = false;
    this.threeState.threeNextFlag = true;
    this.threeState.threeNextTitleFlag = true;
  };

  // 点击进入下一个章节
  threeNext() {
    if (this.indexChangeState.sensorIsPass) {
      this.indexChangeState.fourFlag = true;
      this.indexChangeState.fiveFlag = false;
      this.fourState.fourDown1Img = true;
      this.fourState.fourDown2Img = true;
    }
    this.fourState.fourDown1Img = true;
    this.indexChangeState.sensorIsPass = true;
    this.indexChangeState.powerIsPassFlag = false;
    this.indexChangeState.powerBtnFlag = 'halo';
    this.indexChangeState.powerFullFlag = true;
    this.indexChangeState.sensorBtnFlag = '';
    this.indexChangeState.sensorFlag = false;
    this.indexChangeState.powerFlag = true;
    this.indexChangeState.oneMouse = true;
  };




  // 电源与稳压器EFB蓄电池  注意事项
  fourUp() {
    if (this.indexChangeState.powerIsPass) {
      this.fourState.fourNextFlag = false;
      this.fourState.fourDown1Img = true;
      this.fourState.fourDown2Img = true;
      // this.fourState.fourNextTitleFlag = false;
      return;
    }
    this.fourState.fourUpFlag = true;
    this.fourState.fourDown1Img = true;
    this.fourState.fourHaloUpFlag = '';
    this.fourState.fourFullClass = true;
    this.fourState.fourNextFlag = true;
    this.fourState.fourNextTitleFlag = true;
    this.fourState.fourDown2Img = true;
    setTimeout(() => {
      this.fourState.fourEmptyClass = true;
      if (this.fourState.fourDownFullClass) {
        this.fourState.fourHaloDownFlag = '';
      } else {
        this.fourState.fourHaloDownFlag = 'halo';
      }
    }, 15);
  };

  // 点击图片显示下一个标题
  fourDownImages() {

  };

  // 点击进入下一个章节
  fourNext() {
    this.fiveState.fiveUpImg = true;
    if (this.indexChangeState.powerIsPass) {
      this.fiveState.fiveDown1Img = true;
      this.fiveState.fiveNextTitleFlag = true;
      this.fiveState.fiveUpImg = true;
      this.fiveState.fiveDown1Img = false;
      this.fiveState.fiveDown2Img = false;
    }
    this.indexChangeState.fourFlag = false;
    this.indexChangeState.fiveFlag = true;
    $(document).ready(function () {
      // console.log($('#boxscroll'),"111");
      // setTimeout(() => {
      // console.log($('#boxscroll'),"222");
      $('#boxscroll').niceScroll({
        // autohidemode: false,
        autohidemode: 'leave',
        cursorborder: '5',
        background: '#ccc', // 轨道的背景颜色
        // boxzoom: true,
        spacebarenabled: true,
        preventmultitouchscrolling: true, // 防止多触点事件引发滚动
        cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
        cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
      });
      // }, 10);
    });
  };



  // 电源与稳压器稳压器A19  作用
  fiveUp() {
    setTimeout(() => {
      $('#boxscroll').scrollTop(150);
        $('#boxscroll').getNiceScroll().resize()
    }, 100);
    this.fourState.fourDown1Img = false;
    this.fourState.fourDown2Img = false;
    this.fiveState.fiveUpFlag = true;
    this.fiveState.fiveUpImg = true;
    this.fiveState.fiveHaloUpFlag = '';
    this.fiveState.fiveFullClass = true;
    setTimeout(() => {
      this.fiveState.fiveEmptyClass = true;
      if (this.fiveState.fiveDownFullClass) {
        this.fiveState.fiveHaloDownFlag = '';
      } else {
        this.fiveState.fiveHaloDownFlag = 'halo';
      }
    }, 20);
  };

  // 电源与稳压器稳压器A19  影响
  fiveDown() {
    setTimeout(() => {
      $('#boxscroll').scrollTop(500);
      $('#boxscroll').getNiceScroll().resize()
    }, 100);
    if (this.indexChangeState.powerIsPass) {
      this.fourState.fourDown1Img = false;
      this.fourState.fourDown2Img = false;
      this.fourState.fourDownFlag = false;
    }
    if (this.fiveState.fiveEmptyClass) {
      this.fiveState.fiveHaloDownFlag = '';
      this.fiveState.fiveDownFullClass = true;
      this.fiveState.fiveDownFlag = true;
      this.fiveState.fiveUpImg = false;
      this.fiveState.fiveDown1Img = true;
      setTimeout(() => {
        this.fiveState.fiveDown2Img = true;
      }, 15);
    } else {

    }
  };

  // 点击图片显示下一个标题
  fiveDownImages() {
    if (this.indexChangeState.powerIsPass) {
      // this.fiveState.fiveNextTitleFlag = false;
      this.fiveState.fiveDown1Img = false;
      this.fiveState.fiveNextFlag = true;
      return;
    }
    this.fiveState.fiveDown1Img = false;
    this.fiveState.fiveNextFlag = true;
    this.fiveState.fiveNextTitleFlag = true;
    setTimeout(() => {
      $('#boxscroll').scrollTop(200);
    }, 0);
  };

  // 点击进入下一个章节
  fiveNext() {
    this.indexChangeState.powerIsPassFlag = true;
    this.indexChangeState.powerIsPass = true;
    this.indexChangeState.caseIsPassFlag = true;
    this.indexChangeState.caseIsPass = true;
    this.indexChangeState.caseFullFlag = true;
    this.indexChangeState.twoMouse = true;
    this.indexChangeState.threeMouse = true;
    this.indexChangeState.powerBtnFlag = '';
    this.indexChangeState.caseFlag = true;
    this.indexChangeState.powerFlag = false;
    $(document).ready(function () {
      $('#boxScroll').niceScroll({
        // autohidemode: false,
        autohidemode: 'leave',
        cursorborder: '5',
        background: '#ccc', // 轨道的背景颜色
        // boxzoom: true,
        spacebarenabled: true,
        preventmultitouchscrolling: true, // 防止多触点事件引发滚动
        cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
        cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
      });
    });
    $('.nicescroll-rails').hide();
  };


  // 返回目录首页
  back() {
    this.indexChangeState.sensorFlag = false;
    this.indexChangeState.powerFlag = false;
    this.indexChangeState.caseFlag = false;
    this.indexChangeState.backFlag = false;
    this.indexChangeState.bodyFlag = true;
    $('.nicescroll-rails').hide();
    $('#ascrail2001-hr').hide();
  };



  // 生命周期钩子函数

  // 组件开始加载之前
  ngOnInit() {
    this.replaceChangeState = this.replaceService.getReplaceChangeState();
    this.indexChangeState = this.replaceChangeState[0];
    this.oneState = this.replaceChangeState[1];
    this.twoState = this.replaceChangeState[2];
    this.threeState = this.replaceChangeState[3];
    this.fourState = this.replaceChangeState[4];
    this.fiveState = this.replaceChangeState[5];
    this.indexChangeState.bodyFlag = true;
    window.onresize = function () {
      $(document).ready(function () {
        $('#boxTwoScroll').niceScroll({
          // autohidemode: false,
          autohidemode: 'leave',
          cursorborder: '5',
          background: '#ccc', // 轨道的背景颜色
          // boxzoom: true,
          spacebarenabled: true,
          preventmultitouchscrolling: true, // 防止多触点事件引发滚动
          cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
          cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
        });
      });
    }
  };

  // 组件销毁之前
  ngOnDestroy() {
    this.indexChangeState.sensorFlag = false;
    this.indexChangeState.powerFlag = false;
    this.indexChangeState.caseFlag = false;
    this.indexChangeState.backFlag = false;
    this.indexChangeState.bodyFlag = true;
    $('.nicescroll-rails').hide();
    $('#ascrail2001-hr').hide();

  }
}
