import { Component, OnInit, OnDestroy } from "@angular/core";
import { GearPanelService } from "../gear_panel/gear_panel.service";
import { DashboardService } from "../dashboard/dashboard.service";
import { MultimeterService } from "../multimeter/multimeter.service";
import { HandleErrorService } from "../handle_error/handle_error.service";

declare let $: any, stallsRAnimate: any, stallsDAnimate: any, io: any;

@Component({
  selector: "gear-panel",
  styleUrls: ["./gear_panel.component.scss"],
  templateUrl: "./gear_panel.component.html",
  providers: []
})
/**
 * 处理错误的组件
 */
export class GearPanelComponent implements OnDestroy, OnInit {

  // 档位开关是否隐藏
  gearPanelHidden: boolean = true;
  // 是否踩下刹车踏板
  isBrake = 0;
  // 是否在拖拽
  isDrag = 0;
  // 控制中心的按钮在什么档位，1、2、3分别代表r、n、d
  controlStalls = 0;
  // 档位在lock档
  stalls = 0;
  interval: any;    //定时器
  isaudio: string = '0';

  constructor(
    private gearPanelService: GearPanelService,
    private dashboardService: DashboardService,
    private multimeterService: MultimeterService,
    private handleErrorService: HandleErrorService,
  ) { }

  ngOnInit() {
    clearInterval(this.interval);   //清楚定时器
    setTimeout(() => {
      this.dragAcc();
    }, 200);
  }
  ngOnDestroy() {
  }

  setGearSourcePosition(top, left) {
    $(".dragSource").css({ top: top, left: left });
  }

  setGearAccPosition(top, left) {
    $(".accelerator").css({ top: top, left: left });
  }

  /*
   *
   * 面板拖拽
   *
   * */
  dragDiv() {
    // 给新面板加上拖拽事件
    $(".dragSource").draggable({
      containment: ".container",
      cursor: "move"
    });
  }
  /*
   *
   * 关闭面板
   *
   * */

  closeSwitchPanel(param) {
    $(".pedal").css('display', 'block');
    this.gearPanelService.pedalShowFlag = false;
    this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "2";
    $("#g_pedal").css('display', 'none');
  }
  /*
   *
   * 控制面板刹车点击
   *
   * */
  brakeOn(_obj) {
    let _top = parseInt($(_obj).css("top"));
    if (_top == 40) {
      this.gearPanelService.isBrake = 1;
      this.dashboardService.Mint.In1NER_x_BrakeSig_x_x = "1";
      $(_obj).css("top", "113px");
      $(".circuit-brake").attr({ stroke: "#E50012" });
      $(".circuit-switch3").attr({ stroke: "#E50012", x2: "589.988" });
      $('.accelerator').css("top", '0');
      $('.pointer-right').css({
        'transform': 'rotate(60deg)',
        '-ms-transform': 'rotate(60deg)',
        '-moz-transform': 'rotate(60deg)',
        '-webkit-transform': 'rotate(60deg)',
      });

      if (this.dashboardService.stalls == 2) {
        $('.pointer-left').css({
          'transform': 'rotate(85deg)',
          '-ms-transform': 'rotate(85deg)',
          '-moz-transform': 'rotate(85deg)',
          '-webkit-transform': 'rotate(85deg)',
        });
      } else {
        $('.pointer-left').css({
          'transform': 'rotate(60deg)',
          '-ms-transform': 'rotate(60deg)',
          '-moz-transform': 'rotate(60deg)',
          '-webkit-transform': 'rotate(60deg)',
        });
      }
    } else {
      this.gearPanelService.isBrake = 0;
      this.dashboardService.Mint.In1NER_x_BrakeSig_x_x = "0";

      $(_obj).css("top", "40px");

      $(".circuit-brake").attr({ stroke: "#231815" });

      $(".circuit-switch3").attr({ stroke: "#231815", x2: "598.233" });

    }
  }
  //  同步拖动油门开始
  dragStartAccelerator() {
  }

  // 同步拖动油门拖动中
  dragDragAccelerator() {

    // if (this.gearPanelService.controlStalls !== 3) {
    //   // 控制中d心档位在d档
    //   this.handleErrorService.handleError({ message: "请挂D档" });
    //   return;
    // } else 
    if (this.gearPanelService.isBrake == 1) {
      // 控制中d心档位在d档
      this.handleErrorService.handleError({ message: "请松开刹车踏板" });
      return;
    } else {
      if (this.gearPanelService.controlStalls != 2 && this.dashboardService.stalls == 2) {
        let _top = parseInt($(".accelerator").css("top"));
        let _end = _top * 210 / 57;
        if (_end < 86) {
          $('.pointer-left').css({
            'transform': 'rotate(85deg)',
            '-ms-transform': 'rotate(85deg)',
            '-moz-transform': 'rotate(85deg)',
            '-webkit-transform': 'rotate(85deg)',
          });
        } else {
          $('.pointer-left').css({
            'transform': 'rotate(' + _end + 'deg)',
            '-ms-transform': 'rotate(' + _end + 'deg)',
            '-moz-transform': 'rotate(' + _end + 'deg)',
            '-webkit-transform': 'rotate(' + _end + 'deg)',
          });
        }

        let _right = _top * 120 / 42;
        // console.log(this.gearPanelService.controlStalls);
        if (this.gearPanelService.controlStalls !== 2) {
          if (_right < 61) {
            $('.pointer-right').css({
              'transform': 'rotate(60deg)',
              '-ms-transform': 'rotate(60deg)',
              '-moz-transform': 'rotate(60deg)',
              '-webkit-transform': 'rotate(60deg)',
            });
          } else if (_right > 120) {
            $('.pointer-right').css({
              'transform': 'rotate(120deg)',
              '-ms-transform': 'rotate(120deg)',
              '-moz-transform': 'rotate(120deg)',
              '-webkit-transform': 'rotate(120deg)',
            });
          } else {
            $('.pointer-right').css({
              'transform': 'rotate(' + _right + 'deg)',
              '-ms-transform': 'rotate(' + _right + 'deg)',
              '-moz-transform': 'rotate(' + _right + 'deg)',
              '-webkit-transform': 'rotate(' + _right + 'deg)',
            });
          }
        }
        if (_right == 80) {
          this.isaudio = '3';
        } else if (_right == 100) {
          this.isaudio = '4';
        } else if (_right == 120) {
          this.isaudio = '5';
        }
      }

    }

    // if (this.gearPanelService.isBrake == 1 && this.gearPanelService.currentStallText != 'N'&&!this.dashboardService.stalls) {
    //   this.handleErrorService.handleError({
    //     message: "请确认刹车踏板已松开"
    //   });
    //   return;
    // }else{
    //   // $('.pointer-left').css('transform', 'rotate(210deg)');
    // }

  }

  // 同步拖动油门停止
  dragStopAccelerator() {
    //this.gearPanelService.controlStalls !== 3  ||
    this.isaudio = '0';
    $(".accelerator").css("top", "0");
    $('.pointer-left').css({
      'transform': 'rotate(85deg)',
      '-ms-transform': 'rotate(85deg)',
      '-moz-transform': 'rotate(85deg)',
      '-webkit-transform': 'rotate(85deg)',
    });
    $('.pointer-right').css({
      'transform': 'rotate(60deg)',
      '-ms-transform': 'rotate(60deg)',
      '-moz-transform': 'rotate(60deg)',
      '-webkit-transform': 'rotate(60deg)',
    });
  }

  dragAcc(): void {
    var _this = this;
    //给新面板加上拖拽事件
    $(".accelerator").draggable({
      containment: ".gear-accelerator",
      cursor: "move",
      axis: "y",
      start: function () {
        _this.dragStartAccelerator();
      },
      drag: function () {
        _this.dragDragAccelerator();
      },
      stop: function () {
        _this.dragStopAccelerator();
      }
    });
  }
  /*
   *
   * 档位事件
   *
   * */
  switchGear(id, obj) {
    // if (this.dashboardService.Mint.In1Mot_Gear_Signal_x_x == id) {
    //   return;
    // }
    // console.log(this.dashboardService.stalls);
    if (this.dashboardService.stalls == 2) {
      // console.log(this.dashboardService.Mint.In1Mot_Gear_Signal_x_x);
      if (id == 1) {
        let _top = parseInt($('.gear-brake').css("top"));
        if (this.gearPanelService.isBrake == 0 || _top == 40) {
          this.handleErrorService.handleError({
            message: "请确认刹车踏板已踩下"
          });
          return;
        }
        $(".pointer-left").css({
          transform: "rotate(85deg)",
          "-ms-transform": "rotate(85deg)",
          "-moz-transform": "rotate(85deg)",
          "-webkit-transform": "rotate(85deg)"
        });
        $('.accelerator').css("top", '0');
        this.gearPanelService.controlStalls = 1;
        this.gearPanelService.currentStallText = "R";
        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "1";
        $(".gear-switch").css("transform", "rotate(-90deg)");
        $(".circuit-stalls").attr("stroke", "#231815");
        $(".circuit-r").attr("stroke", "#28C2FF");
        $(".gear-stalls").html("R");

        this.unscroll();
        this.Scroll('.tyre_trail1', 'slow', 'down');
        this.Scroll('.tyre_trail2', 'slow', 'down');
        this.Scroll('.tyre_trail3', 'slow', 'down');
        this.Scroll('.tyre_trail4', 'slow', 'down');
        this.Scroll('.tyre_trail5', 'slow', 'down');
        this.Scroll('.tyre_trail6', 'slow', 'up');
        this.Scroll('.tyre_trail7', 'slow', 'up');
        this.Scroll('.tyre_trail8', 'slow', 'down');
        this.Scroll('.tyre_trail9', 'slow', 'up');
        this.Scroll('.tyre_trail10', 'slow', 'down');
        this.Scroll('.tyre_trail11', 'slow', 'up');
        this.Scroll('.tyre_trail14', 'slow', 'stop');
        $('.tyre_trail12').css('display', "none");
        $('.tyre_trail13').css('display', "block");
        $('#type_nineteen_box0').css('display', "none");
        $('#type_nineteen_box1').css('display', "block");
        $('#type_nineteen_box2').css('display', "none");
        $('#type_nineteen_box3').css('display', "none");
        let titled = $('#typeshow_rd').text();
        if ($('#type_nineteen_audio')) {
          $('#type_nineteen_audio').attr('src', './assets/audios/39-1.mp3');
        }
        // console.log(titled);
        if (titled == "倒挡制动器" || titled == "制动器B1壳体油道") {
          let inter = 0;
          $('.show_delay').css('display', "none");
          this.interval = setInterval(() => {
            inter++;
            $('.show' + inter).show();
            if (inter === 4) {
              clearInterval(this.interval);
            }
          }, 600);
        }
      } else if (id == 2) {
        let _top = parseInt($('.gear-brake').css("top"));
        if (this.gearPanelService.isBrake == 0 || _top == 40) {
          this.handleErrorService.handleError({
            message: "请确认刹车踏板已踩下"
          });
          return;
        }
        this.gearPanelService.controlStalls = 2;

        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "2";

        $(".gear-switch").css("transform", "rotate(-44deg)");

        $(".circuit-stalls").attr("stroke", "#231815");

        $(".circuit-n").attr("stroke", "#28C2FF");

        $(".gear-stalls").html("N");
        this.unscroll();
        this.Scroll('.tyre_trail1', 'slow', 'stop');
        this.Scroll('.tyre_trail2', 'slow', 'down');
        this.Scroll('.tyre_trail3', 'slow', 'down');
        this.Scroll('.tyre_trail4', 'slow', 'down');
        this.Scroll('.tyre_trail5', 'slow', 'down');
        this.Scroll('.tyre_trail6', 'slow', 'up');
        this.Scroll('.tyre_trail7', 'slow', 'stop');
        this.Scroll('.tyre_trail8', 'slow', 'stop');
        this.Scroll('.tyre_trail9', 'slow', 'stop');
        this.Scroll('.tyre_trail10', 'slow', 'down');
        this.Scroll('.tyre_trail11', 'slow', 'stop');
        this.Scroll('.tyre_trail14', 'slow', 'down');
        $('.tyre_trail12').css('display', "none");
        $('.tyre_trail13').css('display', "none");

        $('#type_nineteen_box0').css('display', "none");
        $('#type_nineteen_box1').css('display', "none");
        $('#type_nineteen_box2').css('display', "none");
        $('#type_nineteen_box3').css('display', "block");

        if ($('#type_nineteen_audio')) {
          $('#type_nineteen_audio').attr('src', './assets/audios/41-1.mp3');
        }
      } else if (id == 3) {
        let _top = parseInt($('.gear-brake').css("top"));
        if (this.gearPanelService.isBrake == 0 || _top == 40) {
          this.handleErrorService.handleError({
            message: "请确认刹车踏板已踩下"
          });
          return;
        }
        this.gearPanelService.controlStalls = 3;

        this.gearPanelService.currentStallText = "D";
        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "3";
        $(".gear-switch").css("transform", "rotate(0deg)");
        $(".circuit-stalls").attr("stroke", "#231815");
        $(".circuit-d").attr("stroke", "#28C2FF");
        $(".gear-stalls").html("D");

        $(".pointer-left").css({
          transform: "rotate(85deg)",
          "-ms-transform": "rotate(85deg)",
          "-moz-transform": "rotate(85deg)",
          "-webkit-transform": "rotate(85deg)"
        });
        $('.accelerator').draggable("enable");
        this.unscroll();
        this.Scroll('.tyre_trail1', 'slow', 'up');
        this.Scroll('.tyre_trail2', 'slow', 'down');
        this.Scroll('.tyre_trail3', 'slow', 'down');
        this.Scroll('.tyre_trail4', 'slow', 'down');
        this.Scroll('.tyre_trail5', 'slow', 'down');
        this.Scroll('.tyre_trail6', 'slow', 'down');
        this.Scroll('.tyre_trail7', 'slow', 'down');
        this.Scroll('.tyre_trail8', 'slow', 'up');
        this.Scroll('.tyre_trail9', 'slow', 'down');
        this.Scroll('.tyre_trail10', 'slow', 'down');
        this.Scroll('.tyre_trail11', 'slow', 'down');
        this.Scroll('.tyre_trail14', 'slow', 'down');
        $('.tyre_trail12').css('display', "block");
        $('.tyre_trail13').css('display', "none");

        $('#type_nineteen_box0').css('display', "none");
        $('#type_nineteen_box1').css('display', "none");
        $('#type_nineteen_box2').css('display', "block");
        $('#type_nineteen_box3').css('display', "none");

        let titled = $('#typeshow_rd').text();
        if ($('#type_nineteen_audio')) {
          $('#type_nineteen_audio').attr('src', './assets/audios/37-1.mp3');
        }
        // console.log(titled);
        if (titled == "K1离合器") {
          let inter = 0;
          $('.show_delay').css('display', "none");
          this.interval = setInterval(() => {
            inter++;
            $('.show' + inter).show();
            if (inter === 4) {
              clearInterval(this.interval);
            }
          }, 600);
        }
      }

      //按钮样式
      $(".state-wrap span").removeClass("active");
      $(obj).addClass("active");



    }
  }
  Scroll(obj, time, direction) {
    var width = parseInt($(obj).css('width'));
    var height = parseInt($(obj).css('height'));


    var _top: any = 0;
    var _left: any = 0;
    var offsetTop = parseInt(_top) - parseInt(String(height));
    var resetTop = parseInt(_top) + parseInt(String(height));
    var offsetLeft = parseInt(_left) - parseInt(String(width));
    var resetLeft = parseInt(_left) + parseInt(String(width));

    let up = function () {
      $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;boder-radius:5px;' src='./assets/images/project/tyre_" + obj.split("_")[1] + ".png' />");
      $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'top': offsetTop + 'px' }, time, 'linear', function () { });
      $(obj).find("img").eq(1).css("top", resetTop + 'px').stop().animate({ 'top': _top }, time, 'linear', function () {
        removeDiv();
        up();
      });

    };
    let down = function () {
      $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;boder-radius:5px;' src='./assets/images/project/tyre_" + obj.split("_")[1] + ".png' />");
      $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'top': resetTop + 'px' }, time, 'linear', function () { });
      $(obj).find("img").eq(1).css("top", offsetTop + 'px').stop().animate({ 'top': _top }, time, 'linear', function () {
        removeDiv();
        down();
      });
    };
    let left = function () {
      $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;boder-radius:5px;' src='./assets/images/project/tyre_" + obj.split("_")[1] + ".png' />");

      $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'left': offsetLeft + 'px' }, time, 'linear', function () { });
      $(obj).find("img").eq(1).css("left", resetLeft + 'px').stop().animate({ 'left': _left }, time, 'linear', function () {
        removeDiv();
        left();
      });
    };
    let right = function () {
      $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;boder-radius:5px;' src='./assets/images/project/tyre_" + obj.split("_")[1] + ".png' />");
      $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'left': resetLeft + 'px' }, time, 'linear', function () { });
      $(obj).find("img").eq(1).css("left", offsetLeft + 'px').stop().animate({ 'left': _left }, time, 'linear', function () {
        removeDiv();
        right();
      });
    };
    let stop = function () {
      $(obj).find("img").stop(true).css({ 'top': '0px', 'left': '0px' });
      $(obj).find("img").eq(1).remove();
      $(obj).find("img").eq(2).remove();
    };
    let removeDiv = function () {
      $(obj).find("img").eq(0).remove();
    };

    var toArr = function () {
      var objLen = $(obj).find("img").toArray();
      if (objLen.length == 0) {
        $(obj).append("<img src='images/stripe_" + obj.split("-")[1] + ".png' />");
      } else if (objLen.length > 1) {
        objLen.length = 1;
      }
    }
    switch (direction) {
      case 'down': down(); break;
      case 'up': up(); break;
      case 'left': left(); break;
      case 'right': right(); break;
      case 'stop': stop(); break;
      default:
    }

  }

  unscroll() {
    this.Scroll('.tyre_trail1', 1000, 'stop');
    this.Scroll('.tyre_trail2', 1000, 'stop');
    this.Scroll('.tyre_trail3', 1000, 'stop');
    this.Scroll('.tyre_trail4', 1000, 'stop');
    this.Scroll('.tyre_trail5', 1000, 'stop');
    this.Scroll('.tyre_trail6', 1000, 'stop');
    this.Scroll('.tyre_trail7', 1000, 'stop');
    this.Scroll('.tyre_trail8', 1000, 'stop');
    this.Scroll('.tyre_trail9', 1000, 'stop');
    this.Scroll('.tyre_trail10', 1000, 'stop');
    this.Scroll('.tyre_trail11', 1000, 'stop');
    this.Scroll('.tyre_trail14', 1000, 'stop');
  }
}
