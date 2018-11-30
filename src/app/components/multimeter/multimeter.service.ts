import { Injectable } from "@angular/core";

declare let $: any;
@Injectable()
export class MultimeterService {
  Mdata = {
    multimeterGear: 'OFF',
    dropsuccessNum: "", //  表笔放在热区位置代表的数值 1正常测试，2短路
    redposition: "", //  红表笔在热区的位置
    blackposition: "", // 黑表笔在热区的位置
    multimeterStatus: false,// 万用表的表身显示和隐藏
    multimeterScreenStatus: false, // 万用表的显示屏显示和隐藏
    multimeterScreenNum: "", // 万用表的显示屏数值
    multimeterScreenUnit: "", // 万用表的显示屏中的单位是什么
    multimeterScreenUnitSelf: "", // 万用表的显示屏中的单位是什么
    multimeterScreenrightUnit: "", // 左边单位
    multimeterresdw: "", // 绝缘电阻单位
    resShow: "", // 绝缘电阻显示的数值
    multimetershowDateUnit: "", //  字体为LED，而欧姆单位显示不见，增加一个单位
    SvgStatus: false, // 万用表红表线和红表笔显示和隐藏
    SvgRedStatus: true, // 万用表红表线和红表笔显示和隐藏
    SvgBlackStatus: true, // 万用表黑表线和黑表笔显示和隐藏
    multimeter_drag: "0", // 万用表是否拖动了
    multimeterinsulated: false, // 万用表是否在绝缘电阻档位
    wanyongbiao: "",
    multimeter_body: "1", // 万用表表身是否能拖动，1代表能，0代表不能
    multimeter_red: "1",// 万用表红表笔是否能拖动，1代表能，0代表不能
    multimeter_black: "1", // 万用表黑表笔是否能拖动，1代表能，0代表不能
    svgRecoverStatus: "1", // 万用表的表针时候需要恢复回原处，1代表用，0为不用
    multimeterblackPosition: null, // 存储万用表黑色表笔放在那个控件上
    multimeterredPosition: null, // 存储万用表红色表笔放在那个控件上
    Radrepetition: "0", // 存储万用表红色表笔放在那个热区上
    Blackrepetition: "0", // 存储万用表黑色表笔放在那个热区上
    w_multimeter_redHtml: null, // 万用表红表笔的那个页面
    w_multimeter_blackHtml: null, // 万用表红表笔的那个页面
    Param_redx: "440", // 红色表线起始x坐标\红色表线曲线起始x坐标
    Param_redy: "100", // 红色表线起始y坐标\红色表线曲线起始y坐标
    Param_redcx: "420", // 红色表线曲线拐x坐标
    Param_redcy: "37", // 红色表线曲线拐y坐标
    Param_redpx: "403", // 红色表线曲线结束x坐标
    Param_redpy: "375",// 红色表线曲线结束x坐标
    Param_blackx: "282", // 黑色表线起始x坐标\黑色表线曲线起始x坐标
    Param_blacky: "100", // 黑色表线起始y坐标\黑色表线曲线起始y坐标
    Param_blackcx: "302", // 黑色表线曲线拐x坐标
    Param_blackcy: "37", // 黑色表线曲线拐y坐标
    Param_blackpx: "376", // 黑色表线曲线结束x坐标
    Param_blackpy: "375", // 黑色表线曲线结束x坐标
    multimeterredstartx: "440", // 红色表线起始x坐标\红色表线曲线起始x坐标的恢复值
    multimeterredstarty: "100", // 红色表线起始y坐标\红色表线曲线起始y坐标的恢复值
    multimeterredradianx: "420", // 红色表线曲线拐x坐标的恢复值
    multimeterredradiany: "37", // 红色表线曲线拐y坐标的恢复值
    multimeterredstopx: "403", // 红色表线曲线结束x坐标的恢复值
    multimeterredstopy: "375", // 红色表线曲线结束x坐标的恢复值
    multimeterblackstartx: "282", // 黑色表线起始x坐标\黑色表线曲线起始x坐标的恢复值
    multimeterblackstarty: "100", // 黑色表线起始y坐标\黑色表线曲线起始y坐标的恢复值
    multimeterblackradianx: "302", // 黑色表线曲线拐x坐标的恢复值
    multimeterblackradiany: "37", // 黑色表线曲线拐y坐标的恢复值
    multimeterblackstopx: "376", // 黑色表线曲线结束x坐标的恢复值
    multimeterblackstopy: "375", // 黑色表线曲线结束x坐标的恢复值



    falseconnectStatus: false,
    redPinOut: undefined,
    blackPinOut: undefined,

    modelOrself: "self",
    // 万用表中向仿真模型传输的参数
    Mint: {
      In1NER_Multi_Off_x_x: "1",
      In1NER_Multi_ACVlt_x_x: "0", // 电压交流
      In1NER_Multi_DCVlt_x_x: "0", // 电压直流
      In1NER_Multi_DCmVlt_x_x: "0", // 电压没用
      In1NER_Multi_Pass2Ohm_x_x: "0", // 电阻档时该值为1
      In1NER_Multi_hFE_x_x: "0", //
      In1NER_Multi_Amp_x_x: "0",
      In1NER_Multi_mAmp_x_x: "0",
      In1NER_Multi_mirAmp_x_x: "0",
      In1NER_Multi_Hold_x_x: "0",
      In1NER_Multi_VltRP_x_x: "1",
      In1NER_Multi_AmpMea_x_x: "0",
      In1NER_Multi_mirAmA_x_x: "0",
      In1NER_Multi_COM_x_x: "1",
      In1NER_Multi_Power_x_x: "1",
      In1NER_Multi_Red_x_x: "0", // 红表笔输入
      In1NER_Multi_Black_x_x: "0", // 黑表笔输入
      In1NER_Multi_Insulate_Ohm_x: "0", // 万用表绝缘电阻档位
      In1NER_Multi_Insulate_Switch_x: "0", // 万用表绝缘电阻开关
      In1MultiLogic_x_Black_x_x: "",
      In1MultiLogic_x_Red_x_x: "",
      In1MultiLogic_x_DCmVlt_x_x: ""
    },

    dragStart() {
      var _this = this;
      // 红表笔drag，通过一个小块热区带动红表笔
      $("#hhjmultimeterRed-hotspot").draggable({
        containment: ".multimeter-contain", // 只能在规定范围
        scroll: false, // 不出现滚动条
        iframeFix: true, // 不受iframe的影响
        cursor: "move", // 拖动的鼠标样式
        drag: function (event, ui) {
          $("#hhjmultimeterRed").css(
            "top",
            "" +
            (parseInt(
              $("#hhjmultimeterRed-hotspot")
                .css("top")
                .replace("px", "")
            ) -
              210) +
            "px"
          );
          $("#hhjmultimeterRed").css(
            "left",
            "" +
            parseInt(
              $("#hhjmultimeterRed-hotspot")
                .css("left")
                .replace("px", "")
            ) +
            "px"
          );

          var redLeftInt =
            parseInt(
              $("#hhjmultimeterRed")
                .css("left")
                .replace("px", "")
            ) + 78,
            redTopInt =
              parseInt(
                $("#hhjmultimeterRed")
                  .css("top")
                  .replace("px", "")
              ) + 70,
            topInt =
              parseInt(
                $("#mask-multimeter")
                  .css("top")
                  .replace("px", "")
              ) + 460,
            leftInt =
              parseInt(
                $("#mask-multimeter")
                  .css("left")
                  .replace("px", "")
              ) + 70,
            cl = redLeftInt - 40,
            ct = redTopInt - 80;

          this.multimeterredstartx = leftInt;
          this.multimeterredstarty = topInt;
          this.multimeterredradianx = cl;
          this.multimeterredradiany = ct;
          this.multimeterredstopx = redLeftInt;
          this.multimeterredstopy = redTopInt;

          var redLeftIntt = redLeftInt - 15,
            redTopIntt = redTopInt + 230;
          redTopInt = redTopInt - 65;
          redLeftInt = redLeftInt - 65;
          leftInt = leftInt - 50;
          topInt = topInt - 220;
          $("#path_Red").attr(
            "d",
            "M" +
            redLeftInt +
            " " +
            redTopInt +
            " " +
            leftInt +
            " " +
            topInt
          );
          if (_this.multimeterGear == "V") {
            $('.value').html('0.0');
          }
        },
        stop: function () {
          _this.redHotspotStop(null, null);
        }
      });
      // 黑表笔drag，通过一个小块热区带动红表笔
      $("#hhjmultimeterBlack-hotspot").draggable({
        containment: ".multimeter-contain",
        scroll: false,
        iframeFix: true,
        cursor: "move",
        drag: function (event) {
          $("#hhjmultimeterBlack").css(
            "top",
            "" +
            (parseInt($("#hhjmultimeterBlack-hotspot").css("top")) - 210) +
            "px"
          );
          $("#hhjmultimeterBlack").css(
            "left",
            "" + parseInt($("#hhjmultimeterBlack-hotspot").css("left")) + "px"
          );
          var redLeftInt = parseInt($("#hhjmultimeterBlack").css("left")) + 70,
            redTopInt = parseInt($("#hhjmultimeterBlack").css("top")) + 80,
            topInt = parseInt($("#mask-multimeter").css("top")) + 395,
            leftInt = parseInt($("#mask-multimeter").css("left")) + 85,
            cl = redLeftInt - 40,
            ct = redTopInt - 80;
          //                   $('.clickcircle').css('opacity',1);

          redTopInt = redTopInt - 75;
          redLeftInt = redLeftInt - 60;
          leftInt = leftInt - 70;
          topInt = topInt - 290;
          $("#path_black").attr(
            "d",
            "M" +
            redLeftInt +
            " " +
            redTopInt +
            // ' C' +
            // redLeftInt +
            // ' ' +
            // redTopInt +
            // ' ' +
            // cl +
            // ' ' +
            // ct +
            " " +
            leftInt +
            " " +
            topInt
          );
          if (_this.multimeterGear == "V") {
            $('.value').html('0.0');
          }
        },
        stop: function () {
          _this.blackHotspotStop(null, null);
        }
      });
    },
    multimeterblackRecover() {
      this.multimeterblackPosition = 0;
      var topInt = parseInt($("#mask-multimeter").css("top")),
        leftInt = parseInt($("#mask-multimeter").css("left")),
        toppoint = topInt - 80,
        leftpoint = leftInt - 290;
      $("#path_black").css("stroke", "#656261");
      $("#hhjmultimeterBlack").css("top", "" + (toppoint + 97) + "px");
      $("#hhjmultimeterBlack").css("left", "" + (leftpoint + 272) + "px");
      $("#hhjmultimeterBlack-hotspot").css("top", "" + (toppoint + 315) + "px");
      $("#hhjmultimeterBlack-hotspot").css("left", "" + (leftpoint + 272) + "px");

      this.Param_blackx = leftpoint + 282;
      this.Param_blacky = toppoint + 100;
      this.Param_blackcx = leftpoint + 302;
      this.Param_blackcy = toppoint + 37;
      this.Param_blackpx = leftpoint + 376;
      this.Param_blackpy = toppoint + 375;

      $("#path_black").attr(
        "d",
        "M" +
        this.Param_blackx +
        " " +
        this.Param_blacky +
        " C" +
        this.Param_blackx +
        " " +
        this.Param_blacky +
        " " +
        this.Param_blackcx +
        " " +
        this.Param_blackcy +
        " " +
        this.Param_blackpx +
        " " +
        this.Param_blackpy
      );
    },
    redHotspotStop(top: string, left: string) {
      if (this.svgRecoverStatus == 1) {
        this.multimeterredRecover();
      } else {
        this.svgRecoverStatus = 1;
      }
      if (top && left) {
        this.multimeterredRecover(top, left);
      }
    },
    blackHotspotStop(top: string, left: string) {
      console.log(this.svgRecoverStatus, 'klklklk');
      if (this.svgRecoverStatus == 1) {
        this.multimeterblackRecover();
      } else {
        this.svgRecoverStatus = 1;
      }

      if (top && left) {
        this.multimeterblackRecover(top, left);
      }
    },
    multimeterredRecover() {
      this.multimeterredPosition = 0;
      var topInt = parseInt($("#mask-multimeter").css("top")),
        leftInt = parseInt($("#mask-multimeter").css("left")),
        toppoint = topInt - 80,
        leftpoint = leftInt - 290;
      $("#hhjmultimeterRed").css("top", "" + (toppoint + 97) + "px");
      $("#hhjmultimeterRed").css("left", "" + (leftpoint + 428) + "px");

      $("#hhjmultimeterRed-hotspot").css("top", "" + (toppoint + 311) + "px");
      $("#hhjmultimeterRed-hotspot").css("left", "" + (leftpoint + 431) + "px");

      this.Param_redx = leftpoint + 440 + '';
      this.Param_redy = toppoint + 100 + '';
      this.Param_redcx = leftpoint + 420 + '';
      this.Param_redcy = toppoint + 37 + '';
      this.Param_redpx = leftpoint + 403 + '';
      this.Param_redpy = toppoint + 375 + '';

      $("#path_Red").attr(
        "d",
        "M" +
        this.Param_redx +
        " " +
        this.Param_redy +
        " C" +
        this.Param_redx +
        " " +
        this.Param_redy +
        " " +
        this.Param_redcx +
        " " +
        this.Param_redcy +
        " " +
        this.Param_redpx +
        " " +
        this.Param_redpy
      );
    },
    multimeteroff() {
      if (this.multimeterGear == "OFF") return;
      this.multimeterGear = "OFF";
      $("a").each(function () {
        $(this).attr("rqPosition", "");
      });
      $(".multimeter-bottom").css({
        transform: "rotate(16deg)",
        webkitTransform: "rotate(16deg)",
        MozTransform: "rotate(16deg)",
        msTransform: "rotate(16deg)",
        OTransform: "rotate(16deg)"
      });
      $(".value").html("");
      $(".company").html("");
      this.multimeterblackRecover();
      this.multimeterredRecover();
    },
    multimeterv() {
      if (this.multimeterGear == "V") return;
      $(".company").html("V");
      $(".multimeter-bottom").css({
        transform: "rotate(56deg)",
        webkitTransform: "rotate(56deg)",
        MozTransform: "rotate(56deg)",
        msTransform: "rotate(56deg)",
        OTransform: "rotate(56deg)"
      });
      this.multimeterGear = "V";
      this.isDrop();
    },
    drop() {
      let _this = this;
      setTimeout(function () {
        $("body")
          .find("a")
          .droppable({
            accept: "#hhjmultimeterBlack-hotspot,#hhjmultimeterRed-hotspot",
            tolerance: "pointer",
            greedy: true,
            over: function (event, ui) {
              if (_this.Mint.In1NER_Multi_Pass2Ohm_x_x === "1") {
                if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot") {
                  $("#path_black").css("stroke", "#f69c19");
                }
                if (ui.draggable[0].id == "hhjmultimeterRed-hotspot") {
                  $("#path_Red").css("stroke", "#f69c19");
                }
              } else {
                if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot") {
                  $("#path_black").css("stroke", "#f69c19");
                }
                if (ui.draggable[0].id == "hhjmultimeterRed-hotspot") {
                  $("#path_Red").css("stroke", "#f69c19");
                }
              }
            },
            out: function (event, ui) {
              if (_this.Mint.In1NER_Multi_Pass2Ohm_x_x == "1") {
                if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot") {
                  $("#path_black").css("stroke", "#656261");
                }
                if (ui.draggable[0].id == "hhjmultimeterRed-hotspot") {
                  $("#path_Red").css("stroke", "#e43846");
                }
              } else {
                if (ui.draggable[0].id == "hhjmultimeterBlack-hotspot") {
                  $("#path_black").css("stroke", "#656261");
                  _this.blackposition = "";
                }
                if (ui.draggable[0].id == "hhjmultimeterRed-hotspot") {
                  $("#path_Red").css("stroke", "#e43846");
                  _this.redposition = "";
                }
              }
            },
            drop: function (event, ui) {
              _this.freshHontspotDrop(
                "." +
                $(event.target)
                  .attr("class")
                  .split(" ")[0],
                ui.draggable[0].id,
                $(event.target).attr("id")
              );
            }
          });
      }, 0);
    },
    // 热区吸附后
    freshHontspotDrop(eventID, uiDraggableID) {
      // 红表笔位置的top值，用来判断表笔层级
      var redPositionTop = 0;
      // 黑表笔位置的top值，用来判断表笔层级
      var blackPositionTop = 0;
      //  通过这两个属性进行表笔的定位
      let hTop = $(eventID).attr("h-top"),
        hLeft = $(eventID).attr("h-left");

      if (
        uiDraggableID == "hhjmultimeterRed-hotspot" &&
        this.multimeterblackPosition != $(eventID).attr("wybredPosition")
      ) {
        if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == "1") {
          $("#path_Red").css("stroke", "#db3040");
          this.multimeterScreenUnit = "Ω";
          this.multimeterScreenUnitSelf = "Ω";
        } else {
          $("#path_Red").css("stroke", "#db3040");
        }
        this.redposition = $(eventID).attr("wybredPosition") || 0;
        $("#hhjmultimeterRed-hotspot").css({
          top: "" + (parseInt(hTop) + 20) + "px",
          left: "" + parseInt(hLeft) + "px"
        });
        $("#hhjmultimeterRed").css({
          top:
            "" +
            (parseInt($("#hhjmultimeterRed-hotspot").css("top")) -
              $("#hhjmultimeterRed").height() +
              38) +
            "px",
          left: "" + parseInt($("#hhjmultimeterRed-hotspot").css("left")) + "px"
        });
        $("#hhjmultimeterRed").addClass("multimeterRed-on");
        var redLeftInt = parseInt(hLeft) - 5,
          redTopInt = parseInt(hTop) + 40,
          cl = redLeftInt - 40,
          ct = redTopInt + 80;

        $("#path-Red").attr(
          "d",
          "M" +
          redLeftInt +
          " " +
          redTopInt +
          " 501 210"
        );
        this.multimeter_red = 0;
        this.Mint.In1NER_Multi_Red_x_x = $(eventID).attr("rqPosition");
        this.Radrepetition = $(eventID).attr("rqPosition"); // 记忆已经有一只放在热区上
        this.multimeterredstartx =
          parseInt($("#hhjmultimeterRed").css("left")) + 10 + '';
        this.multimeterredstarty =
          parseInt($("#hhjmultimeterRed").css("top")) + 5 + '';
        this.multimeterredradianx =
          parseInt($("#hhjmultimeterRed").css("left")) - 90 + '';
        this.multimeterredradiany =
          parseInt($("#hhjmultimeterRed").css("top")) - 90 + '';
        this.multimeterredstopx =
          parseInt($("#mask-multimeter").css("left")) + 114 + '';
        this.multimeterredstopy =
          parseInt($("#mask-multimeter").css("top")) + 258 + '';
        this.svgRecoverStatus = 0;
        this.w_multimeter_redHtml = $(eventID).attr("h_href");
        this.multimeterredPosition = $(eventID).attr("wybredPosition");
        this.multimeterredstartx = this.multimeterredstartx - 30;
        this.multimeterredstarty = this.multimeterredstarty;
        this.multimeterredstopx = this.multimeterredstopx - 50;
        this.multimeterredstopy = this.multimeterredstopy - 10;
        $("#path_Red").attr(
          "d",
          "M" +
          this.multimeterredstartx +
          " " +
          this.multimeterredstarty +
          " " +
          this.multimeterredstopx +
          " " +
          this.multimeterredstopy
        );
        $("#hhjmultimeterRed").css(
          "top",
          "" +
          (parseInt(
            $("#hhjmultimeterRed-hotspot")
              .css("top")
              .replace("px", "")
          ) -
            210) +
          "px"
        );
        $("#hhjmultimeterRed").css(
          "left",
          "" +
          parseInt(
            $("#hhjmultimeterRed-hotspot")
              .css("left")
              .replace("px", "")
          ) +
          "px"
        );

        var redLeftInt =
          parseInt(
            $("#hhjmultimeterRed")
              .css("left")
              .replace("px", "")
          ) + 78,
          redTopInt =
            parseInt(
              $("#hhjmultimeterRed")
                .css("top")
                .replace("px", "")
            ) + 70,
          topInt =
            parseInt(
              $("#mask-multimeter")
                .css("top")
                .replace("px", "")
            ) + 460,
          leftInt =
            parseInt(
              $("#mask-multimeter")
                .css("left")
                .replace("px", "")
            ) + 70,
          cl = redLeftInt - 40,
          ct = redTopInt - 80;

        this.multimeterredstartx = leftInt;
        this.multimeterredstarty = topInt;
        this.multimeterredradianx = cl;
        this.multimeterredradiany = ct;
        this.multimeterredstopx = redLeftInt;
        this.multimeterredstopy = redTopInt;

        var redLeftIntt = redLeftInt - 15,
          redTopIntt = redTopInt + 230;
        redTopInt = redTopInt - 65;
        redLeftInt = redLeftInt - 65;
        leftInt = leftInt - 50;
        topInt = topInt - 220;
        $("#path_Red").attr(
          "d",
          "M" +
          redLeftInt +
          " " +
          redTopInt +
          " " +
          leftInt +
          " " +
          topInt
        );
        // 测量点记录
        // 红黑表笔层级判断
        redPositionTop = parseInt($("#hhjmultimeterRed").css("top"));
        blackPositionTop = parseInt($("#hhjmultimeterBlack").css("top"));
      } else if (
        uiDraggableID == "hhjmultimeterBlack-hotspot" &&
        this.multimeterredPosition != $(eventID).attr("wybblackPosition")
      ) {
        if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == "1") {
          $("#path_black").css("stroke", "#656261");
          this.multimeterScreenUnit = "Ω";
          this.multimeterScreenUnitSelf = "Ω";
        } else {
          $("#path_black").css("stroke", "#656261");
        }
        this.blackposition = $(eventID).attr("wybblackPosition") || 0;
        $("#hhjmultimeterBlack-hotspot").css({
          top: "" + (parseInt(hTop) + 20) + "px",
          left: "" + parseInt(hLeft) + "px"
        });
        $("#hhjmultimeterBlack").addClass("multimeterBlack-on");
        $("#hhjmultimeterBlack").css({
          top:
            "" +
            (parseInt($("#hhjmultimeterBlack-hotspot").css("top")) -
              $("#hhjmultimeterBlack").height() +
              38) +
            "px",
          left:
            "" + parseInt($("#hhjmultimeterBlack-hotspot").css("left")) + "px"
        });
        var blackLeftInt = parseInt(hLeft) - 5,
          redTopInt = parseInt(hTop) + 40,
          blackCl = blackLeftInt + 40,
          blackCt = redTopInt + 80;
        $("#path-black").attr(
          "d",
          "M" +
          blackLeftInt +
          " " +
          redTopInt +
          " 501 291 "
        );
        this.multimeter_black = 0;
        this.Blackrepetition = $(eventID).attr("rqPosition"); // 记忆已经有一只放在热区上
        this.multimeterblackstartx =
          parseInt($("#hhjmultimeterBlack").css("left"), 10) + 5;
        this.multimeterblackstarty =
          parseInt($("#hhjmultimeterBlack").css("top"), 10) + 5;
        this.multimeterblackradianx =
          parseInt($("#hhjmultimeterBlack").css("left"), 10) + 90;
        this.multimeterblackradiany =
          parseInt($("#hhjmultimeterBlack").css("top"), 10) - 90;
        this.multimeterblackstopx =
          parseInt($("#mask-multimeter").css("left"), 10) + 90;
        this.multimeterblackstopy =
          parseInt($("#mask-multimeter").css("top"), 10) + 260;
        this.svgRecoverStatus = 0;
        this.Mint.In1NER_Multi_Black_x_x = $(eventID).attr("rqPosition");
        this.w_multimeter_blackHtml = $(eventID).attr("h_href");
        this.multimeterblackPosition = $(eventID).attr("wybblackPosition");
        this.multimeterblackstartx = this.multimeterblackstartx - 50;
        this.multimeterblackstarty = this.multimeterblackstarty - 50;
        this.multimeterblackstopx = this.multimeterblackstopx - 70;
        this.multimeterblackstopy = this.multimeterblackstopy - 150;
        $("#path_black").attr(
          "d",
          "M" +
          this.multimeterblackstartx +
          " " +
          this.multimeterblackstarty +
          " " +
          this.multimeterblackstopx +
          " " +
          this.multimeterblackstopy
        );

        $("#hhjmultimeterBlack").css(
          "top",
          "" +
          (parseInt($("#hhjmultimeterBlack-hotspot").css("top")) - 210) +
          "px"
        );
        $("#hhjmultimeterBlack").css(
          "left",
          "" + parseInt($("#hhjmultimeterBlack-hotspot").css("left")) + "px"
        );
        var redLeftInt = parseInt($("#hhjmultimeterBlack").css("left")) + 70,
          redTopInt = parseInt($("#hhjmultimeterBlack").css("top")) + 80,
          topInt = parseInt($("#mask-multimeter").css("top")) + 395,
          leftInt = parseInt($("#mask-multimeter").css("left")) + 85,
          cl = redLeftInt - 40,
          ct = redTopInt - 80;
        //                   $('.clickcircle').css('opacity',1);

        redTopInt = redTopInt - 75;
        redLeftInt = redLeftInt - 60;
        leftInt = leftInt - 70;
        topInt = topInt - 290;
        $("#path_black").attr(
          "d",
          "M" +
          redLeftInt +
          " " +
          redTopInt +
          // ' C' +
          // redLeftInt +
          // ' ' +
          // redTopInt +
          // ' ' +
          // cl +
          // ' ' +
          // ct +
          " " +
          leftInt +
          " " +
          topInt
        );

        // 红黑表笔层级判断
        redPositionTop = parseInt($("#hhjmultimeterRed").css("top"));
        blackPositionTop = parseInt($("#hhjmultimeterBlack").css("top"));

        // 测量点记录
      } else {
      }
      this.isDrop();

      // 万用表表笔层级判断
      if (blackPositionTop != 0 && redPositionTop != 0) {
        if (blackPositionTop > redPositionTop) {
          $("#hhjmultimeterRed").css("z-index", "10");
          $("#hhjmultimeterBlack").css("z-index", "11");
        } else {
          $("#hhjmultimeterRed").css("z-index", "11");
          $("#hhjmultimeterBlack").css("z-index", "10");
        }
      }

      if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == "1") {
      }

      if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == "1") {
        // setTimeout(() => {
        this.multimeterScreenUnit = "Ω";
        this.multimeterScreenUnitSelf = "Ω";
        // }, 10)
      }
    },
    isDrop() {
      if ((this.multimeterredPosition == 'N1' && this.multimeterblackPosition == 'N2') || (this.multimeterredPosition == 'N3' && this.multimeterblackPosition == 'N4')) {
        if (this.multimeterGear == "V") {
          $('.value').html('24');
        }
      } else if ((this.multimeterredPosition == 'N2' && this.multimeterblackPosition == 'N1') || (this.multimeterredPosition == 'N4' && this.multimeterblackPosition == 'N3')) {
        if (this.multimeterGear == "V") {
          $('.value').html('-24');
        }
      } else if ((this.multimeterredPosition == 'N5' && this.multimeterblackPosition == 'N6') || (this.multimeterredPosition == 'N7' && this.multimeterblackPosition == 'N8')) {
        if (this.multimeterGear == "V") {
          $('.value').html('7');
        }
      } else if ((this.multimeterredPosition == 'N6' && this.multimeterblackPosition == 'N5') || (this.multimeterredPosition == 'N8' && this.multimeterblackPosition == 'N7')) {
        if (this.multimeterGear == "V") {
          $('.value').html('-7');
        }
      } else if ((this.multimeterredPosition == 'N9' && this.multimeterblackPosition == 'N10') || (this.multimeterredPosition == 'N11' && this.multimeterblackPosition == 'N12')) {
        if (this.multimeterGear == "V") {
          $('.value').html('4.7');
        }
      } else if ((this.multimeterredPosition == 'N10' && this.multimeterblackPosition == 'N9') || (this.multimeterredPosition == 'N12' && this.multimeterblackPosition == 'N11')) {
        if (this.multimeterGear == "V") {
          $('.value').html('-4.7');
        }
      } else if (this.multimeterredPosition == 'N13' && this.multimeterblackPosition == 'N14') {
        if (this.multimeterGear == "V") {
          $('.value').html('24');
        }
      } else if (this.multimeterredPosition == 'N14' && this.multimeterblackPosition == 'N13') {
        if (this.multimeterGear == "V") {
          $('.value').html('-24');
        }
      } else if (this.multimeterredPosition == 'N15' && this.multimeterblackPosition == 'N16') {
        if (this.multimeterGear == "V") {
          $('.value').html('4.8');
        }
      } else if (this.multimeterredPosition == 'N16' && this.multimeterblackPosition == 'N15') {
        if (this.multimeterGear == "V") {
          $('.value').html('-4.8');
        }
      } else if (this.multimeterredPosition == 'N17' && this.multimeterblackPosition == 'N18') {
        if (this.multimeterGear == "V") {
          $('.value').html('0.9');
        }
      } else if (this.multimeterredPosition == 'N18' && this.multimeterblackPosition == 'N17') {
        if (this.multimeterGear == "V") {
          $('.value').html('-0.9');
        }
      } else {
        if (this.multimeterGear == "V") {
          $('.value').html('0.0');
        }
      }
    },
    closemultimeter() {
      $(".test1").css("opacity", 0);

      this.multimeterinsulated = false;
      this.dropsuccessNum = "";
      this.redposition = "";
      this.blackposition = "";
      this.multimeterStatus = false;
      this.multimeter_drag = "0";

      this.w_multimeter_blackHtml = null;
      this.SvgStatus = false;
      this.multimeter_red = "0";
      this.multimeter_black = "0";
      this.wanyongbiao = "0";
      this.svgRecoverStatus = "1";
      this.multimeterblackPosition = null;
      this.multimeterredPosition = null;
      this.Radrepetition = "0";
      this.Blackrepetition = "0";
      this.multimeter_red = "1";
      this.multimeter_black = "1";
      this.multimeterredstartx = this.Param_redx = "440"; // 红色表线起始x坐标
      this.multimeterredstarty = this.Param_redy = "100"; // 红色表线起始y坐标
      this.multimeterredradianx = this.Param_redcx = "420"; // 红色表线曲线拐x坐标
      this.multimeterredradiany = this.Param_redcy = "37"; // 红色表线曲线拐y坐标
      this.multimeterredstopx = this.Param_redpx = "403"; // 红色表线曲线结束x坐标
      this.multimeterredstopy = this.Param_redpy = "375"; // 红色表线曲线结束x坐标
      this.multimeterblackstartx = this.Param_blackx = "282";
      this.multimeterblackstarty = this.Param_blacky = "100";
      this.multimeterblackradianx = this.Param_blackcx = "302";
      this.multimeterblackradiany = this.Param_blackcy = "37";
      this.multimeterblackstopx = this.Param_blackpx = "376";
      this.multimeterblackstopy = this.Param_blackpy = "375";
      $("#mask-multimeter").css("top", "80px");
      $("#mask-multimeter").css("left", "290px");
      $("#hhjmultimeterRed").css("top", "97px");
      $("#hhjmultimeterRed").css("left", "515px");
      $("#hhjmultimeterBlack").css("top", "97px");
      $("#hhjmultimeterBlack").css("left", "254px");
      $("#hhjmultimeterRed-hotspot").css("top", "690px");
      $("#hhjmultimeterRed-hotspot").css("left", "695px");
      $("#hhjmultimeterBlack-hotspot").css("top", "690px");
      $("#hhjmultimeterBlack-hotspot").css("left", "262px");
      $(".multimeter-Red").css({
        transform: "rotate(-30deg)",
        right: "62px",
        bottom: "45px"
      });
      $(".multimeter-black").css({ right: "77x" });

      $("#path_Red").attr(
        "d",
        "M" +
        this.multimeterredstartx +
        " " +
        this.multimeterredstarty +
        // ' C' +
        // this.multimeterredstartx +
        // ' ' +
        // this.multimeterredstarty +
        // ' ' +
        // this.multimeterredradianx +
        // ' ' +
        // this.multimeterredradiany +
        " " +
        this.multimeterredstopx +
        " " +
        this.multimeterredstopy
      );
      $("#path_black").attr(
        "d",
        "M" +
        this.multimeterblackstartx +
        " " +
        this.multimeterblackstarty +
        // ' C' +
        // this.multimeterblackstartx +
        // ' ' +
        // this.multimeterblackstarty +
        // ' ' +
        // this.multimeterblackradianx +
        // ' ' +
        // this.multimeterblackradiany +
        " " +
        this.multimeterblackstopx +
        " " +
        this.multimeterblackstopy
      );
      // 去除右侧工具栏的触发状态
      $(".right-multimeter")
        .parent()
        .removeClass("active");
      // 隐藏热区
      //  hideAHot();
      // 把状态码设为0；
      // **multimeterStay = 0;
    },
  }
  constructor(
  ) { }
}
