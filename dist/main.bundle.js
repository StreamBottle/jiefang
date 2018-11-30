var ac_main =
webpackJsonpac__name_([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(43)

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });


var DashboardService = (function () {
    function DashboardService() {
        this.dashboardStatus = false;
        this.currentSwitch = '';
    }
    return DashboardService;
}());
DashboardService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], DashboardService);



/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GearPanelService; });



var GearPanelService = (function () {
    function GearPanelService(dashboardService) {
        this.dashboardService = dashboardService;
        this.pedalIsDown = '释放'; // 刹车当前状态
        this.pedalShowFlag = false;
        // 是否踩下刹车踏板
        this.isBrake = 0;
        // 是否在拖拽
        this.isDrag = 0;
        // 控制中心的按钮在什么档位，1、2、3分别代表r、n、d
        this.controlStalls = 0;
        // 当前档位显示(R,N,D中的一种)，在诊断仪数据流中显示
        this.currentStallText = "N";
        // 档位开关操作面板是否隐藏
        // gearPanelHidden:boolean=true;
        /**
         * 储存踩下制动需要执行哪些外部方法
         *
         *
         * @memberOf GearPanelService
         */
        this.pressBrake = [];
        /**
         * 储存松开制动需要执行哪些外部方法
         *
         *
         * @memberOf GearPanelService
         */
        this.loosenBrake = [];
        /**
         * 储存加油门需要执行哪些外部方法
         *
         *
         * @memberOf GearPanelService
         */
        // tslint:disable-next-line:member-ordering
        this.addAccelerator = [];
        /**
         * 储存减油门需要执行哪些外部方法
         *
         *
         * @memberOf GearPanelService
         */
        // tslint:disable-next-line:member-ordering
        this.minusAccelerator = [];
        /**
         * 储存松开油门需要执行哪些外部方法
         *
         *
         * @memberOf GearPanelService
         */
        // tslint:disable-next-line:member-ordering
        this.loosenAccelerator = [];
        /**
         * 储存匀速油门需要执行哪些外部方法
         *
         *
         * @memberOf GearPanelService
         */
        // tslint:disable-next-line:member-ordering
        this.rackAccelerator = [];
        /**
         * 倒档需要执行哪些外部方法
         *
         *
         * @memberOf GearPanelService
         */
        // tslint:disable-next-line:member-ordering
        this.reverse = [];
        /**
         * 储存空档需要执行哪些外部方法
         *
         *
         * @memberOf GearPanelService
         */
        // tslint:disable-next-line:member-ordering
        this.neutral = [];
        /**
         * 储存前进档需要执行哪些外部方法
         *
         *
         * @memberOf GearPanelService
         */
        // tslint:disable-next-line:member-ordering
        this.drive = [];
        // N档停止动画
        // tslint:disable-next-line:member-ordering
        this.stopanimateArr = [];
    }
    /**
     * 设置制动踏板需要在哪个状态执行外部的什么方法
     *
     * @param {any} status
     * @param {any} fun
     *
     * @memberOf GearPanelService
     */
    GearPanelService.prototype.accDrag = function (newLeft, oldLeft) {
        var speedListener = 0;
        var times = 0;
        // console.log("------------------------------------");
        // 如果是往上滑动，就是减速，减速动画改变
        if ((this.controlStalls === 1 || this.controlStalls === 3) &&
            this.dashboardService.stalls === 1 &&
            this.isBrake === 0 &&
            this.isDrag === 1) {
            if (newLeft === oldLeft) {
                if (this.rackAcceleratorFun()) {
                    this.rackAcceleratorFun();
                }
                // return false;
            }
            else {
                if (oldLeft > newLeft) {
                    if (this.minusAcceleratorFun()) {
                        this.minusAcceleratorFun();
                    }
                    $(".block-slide1").show();
                    $(".block-slide2").hide();
                    // 流向动力电池
                    $(".line-flow1").hide();
                    $(".line-flow2").show();
                }
                else {
                    if (this.addAcceleratorFun()) {
                        this.addAcceleratorFun();
                    }
                    $(".block-slide1").hide();
                    $(".block-slide2").show();
                    // 流向动力电池
                    $(".line-flow1").show();
                    $(".line-flow2").hide();
                }
            }
        }
    };
    GearPanelService.prototype.setBrakesFun = function (status, fun) {
        switch (status) {
            case "press":
                this.pressBrake[this.pressBrakeIndex] = fun;
                this.pressBrakeIndex += 1;
                // console.log(this.lockGear);
                break;
            case "loosen":
                this.loosenBrake[this.loosenBrakeIndex] = fun;
                this.loosenBrakeIndex += 1;
                // console.log(this.onGear);
                break;
            default:
        }
    };
    /**
     * 踩下制动需要执行的哪些方法
     *
     *
     * @memberOf GearPanelService
     */
    GearPanelService.prototype.pressBrakeFun = function () {
        // tslint:disable-next-line:forin
        for (var i in this.pressBrake) {
            this.pressBrake[i]();
        }
    };
    /**
     * 松开制动需要执行的哪些方法
     *
     *
     * @memberOf GearPanelService
     */
    GearPanelService.prototype.loosenBrakeFun = function () {
        // tslint:disable-next-line:forin
        for (var i in this.loosenBrake) {
            this.loosenBrake[i]();
        }
    };
    /**
     * 设置油门需要在哪个状态执行外部的什么方法
     *
     * @param {any} status
     * @param {any} fun
     *
     * @memberOf GearPanelService
     */
    GearPanelService.prototype.setAcceleratorsFun = function (status, fun) {
        switch (status) {
            case "add":
                this.addAccelerator[this.addAcceleratorIndex] = fun;
                this.addAcceleratorIndex += 1;
                // console.log(this.lockGear);
                break;
            case "minus":
                this.minusAccelerator[this.minusAcceleratorIndex] = fun;
                this.minusAcceleratorIndex += 1;
                // console.log(this.onGear);
                break;
            case "loosen":
                this.loosenAccelerator[this.loosenAcceleratorIndex] = fun;
                this.loosenAcceleratorIndex += 1;
                // console.log(this.onGear);
                break;
            case "rack":
                this.rackAccelerator[this.rackAcceleratorIndex] = fun;
                this.rackAcceleratorIndex += 1;
                // console.log(this.onGear);
                break;
            default:
        }
    };
    /**
     * 加油门需要执行的哪些方法
     *
     *
     * @memberOf GearPanelService
     */
    GearPanelService.prototype.addAcceleratorFun = function () {
        // tslint:disable-next-line:forin
        for (var i in this.addAccelerator) {
            this.addAccelerator[i]();
        }
    };
    /**
     * 减油门需要执行的哪些方法
     *
     *
     * @memberOf GearPanelService
     */
    GearPanelService.prototype.minusAcceleratorFun = function () {
        // tslint:disable-next-line:forin
        for (var i in this.minusAccelerator) {
            this.minusAccelerator[i]();
        }
    };
    /*
        * 匀速油门需要执行的哪些方法
        *
        *
        * @memberOf GearPanelService
        */
    GearPanelService.prototype.rackAcceleratorFun = function () {
        // tslint:disable-next-line:forin
        for (var i in this.rackAccelerator) {
            this.rackAccelerator[i]();
        }
    };
    /*
      * 松开油门需要执行的哪些方法
      *
      *
      * @memberOf GearPanelService
      */
    GearPanelService.prototype.loosenAcceleratorFun = function () {
        // tslint:disable-next-line:forin
        for (var i in this.loosenAccelerator) {
            this.loosenAccelerator[i]();
        }
    };
    /**
     * 设置档位开关需要在哪个状态执行外部的什么方法
     *
     * @param {any} gear
     * @param {any} fun
     *
     * @memberOf GearPanelService
     */
    GearPanelService.prototype.setShiftFun = function (gear, fun) {
        // tslint:disable-next-line:switch-default
        switch (gear) {
            case "reverse":
                this.reverse[this.reverseIndex] = fun;
                this.reverseIndex += 1;
                // console.log(this.lockGear);
                break;
            case "neutral":
                this.neutral[this.neutralIndex] = fun;
                this.neutralIndex += 1;
                // console.log(this.onGear);
                break;
            case "drive":
                this.drive[this.driveIndex] = fun;
                this.driveIndex += 1;
                // console.log(this.onGear);
                break;
        }
    };
    /**
     * 倒档需要执行的哪些方法
     *
     *
     * @memberOf GearPanelService
     */
    GearPanelService.prototype.reverseFun = function () {
        // tslint:disable-next-line:forin
        for (var i in this.reverse) {
            this.reverse[i]();
        }
    };
    /**
     * 空档需要执行的哪些方法
     *
     *
     * @memberOf GearPanelService
     */
    GearPanelService.prototype.neutralFun = function () {
        // tslint:disable-next-line:forin
        for (var i in this.neutral) {
            this.neutral[i]();
        }
    };
    /*
      * 前进档需要执行的哪些方法
      *
      *
      * @memberOf GearPanelService
      */
    GearPanelService.prototype.driveFun = function () {
        // tslint:disable-next-line:forin
        for (var i in this.drive) {
            this.drive[i]();
        }
    };
    GearPanelService.prototype.setStopAnimate = function (fun) {
        this.stopanimateArr[this.stopanimateIndex] = fun;
        this.stopanimateIndex += 1;
    };
    GearPanelService.prototype.stopanimate = function () {
        // tslint:disable-next-line:forin
        for (var i in this.stopanimateArr) {
            this.stopanimateArr[i]();
        }
    };
    return GearPanelService;
}());
GearPanelService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__["a" /* DashboardService */]])
], GearPanelService);



/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handle_error_mock__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleErrorService; });




/**
 *
 * 处理错误
 * @export
 * @class HandleErrorService
 */
var HandleErrorService = (function () {
    function HandleErrorService() {
        /**
         * 存放所有的常规错误信息
         *
         * @type {Object[]}
         * @memberOf HandleErrorService
         */
        this.errorMessages = [{}];
        /**
         * 参数，常规错误提示框
         *
         * @type {boolean}
         * @memberOf HandleErrorService
         */
        this.errorPopupHidden = true;
    }
    /**
     * 获取所有的本地储存的常规错误信息
     *
     * @returns {Promise<ErrorMessage[]>}
     *
     * @memberOf HandleErrorService
     */
    HandleErrorService.prototype.getErrorMessages = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__handle_error_mock__["a" /* ErrorMessages */]);
    };
    HandleErrorService.prototype.getError = function (code) {
        this.errorPopupHidden = false;
        this.errorMessages.push(__WEBPACK_IMPORTED_MODULE_2__handle_error_mock__["a" /* ErrorMessages */].find(function (item) {
            return item.code === code;
        }));
    };
    /**
     * 根据code获取某一个本地储存的常规错误信息
     *
     * @param {number} code
     * @returns {Promise<ErrorMessage>}
     *
     * @memberOf HandleErrorService
     */
    HandleErrorService.prototype.getErrorMessage = function (code) {
        var _this = this;
        return this.getErrorMessages()
            .then(function (errorMessages) { return errorMessages.find(function (errorMessage) { return errorMessage.code === code; }); })
            .catch(function (error) { return _this.handleError(error); });
    };
    /**
     * 处理错误方法，分常规错误和非常规
     *
     * @param {*} code
     *
     * @memberOf HandleErrorService
     */
    HandleErrorService.prototype.handleError = function (code) {
        var json = {};
        //是常规错误，在提示框中显示提示文字
        if (typeof (code) === 'number') {
            // this.errorPopupHidden = false;
            // this.closepage = true;
            // this.getErrorMsessage(code)
            // 	.then(errorMessage => {
            // 		if (this.errorMessages.indexOf(errorMessage) === -1) {
            // 			this.errorMessages.push(errorMessage);
            // 		}
            // 	})
            // 	.catch(error => this.handleError(error));
        }
        else {
            //非常规错误，控制台输出错误日志
            this.errorPopupHidden = false;
            this.closepage = false;
            this.errorMessages = [];
            this.errorMessages.push(code);
        }
    };
    /**
     * 关闭错误提示框
     *
     *
     * @memberOf HandleErrorService
     */
    HandleErrorService.prototype.closeErrorPopup = function () {
        this.errorPopupHidden = true;
        this.errorMessages = [];
        // this.closeWindowService.closeWindow();
    };
    return HandleErrorService;
}());
HandleErrorService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], HandleErrorService);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultimeterService; });


var MultimeterService = (function () {
    function MultimeterService() {
        this.Mdata = {
            multimeterGear: 'OFF',
            dropsuccessNum: "",
            redposition: "",
            blackposition: "",
            multimeterStatus: false,
            multimeterScreenStatus: false,
            multimeterScreenNum: "",
            multimeterScreenUnit: "",
            multimeterScreenUnitSelf: "",
            multimeterScreenrightUnit: "",
            multimeterresdw: "",
            resShow: "",
            multimetershowDateUnit: "",
            SvgStatus: false,
            SvgRedStatus: true,
            SvgBlackStatus: true,
            multimeter_drag: "0",
            multimeterinsulated: false,
            wanyongbiao: "",
            multimeter_body: "1",
            multimeter_red: "1",
            multimeter_black: "1",
            svgRecoverStatus: "1",
            multimeterblackPosition: null,
            multimeterredPosition: null,
            Radrepetition: "0",
            Blackrepetition: "0",
            w_multimeter_redHtml: null,
            w_multimeter_blackHtml: null,
            Param_redx: "440",
            Param_redy: "100",
            Param_redcx: "420",
            Param_redcy: "37",
            Param_redpx: "403",
            Param_redpy: "375",
            Param_blackx: "282",
            Param_blacky: "100",
            Param_blackcx: "302",
            Param_blackcy: "37",
            Param_blackpx: "376",
            Param_blackpy: "375",
            multimeterredstartx: "440",
            multimeterredstarty: "100",
            multimeterredradianx: "420",
            multimeterredradiany: "37",
            multimeterredstopx: "403",
            multimeterredstopy: "375",
            multimeterblackstartx: "282",
            multimeterblackstarty: "100",
            multimeterblackradianx: "302",
            multimeterblackradiany: "37",
            multimeterblackstopx: "376",
            multimeterblackstopy: "375",
            falseconnectStatus: false,
            redPinOut: undefined,
            blackPinOut: undefined,
            modelOrself: "self",
            // 万用表中向仿真模型传输的参数
            Mint: {
                In1NER_Multi_Off_x_x: "1",
                In1NER_Multi_ACVlt_x_x: "0",
                In1NER_Multi_DCVlt_x_x: "0",
                In1NER_Multi_DCmVlt_x_x: "0",
                In1NER_Multi_Pass2Ohm_x_x: "0",
                In1NER_Multi_hFE_x_x: "0",
                In1NER_Multi_Amp_x_x: "0",
                In1NER_Multi_mAmp_x_x: "0",
                In1NER_Multi_mirAmp_x_x: "0",
                In1NER_Multi_Hold_x_x: "0",
                In1NER_Multi_VltRP_x_x: "1",
                In1NER_Multi_AmpMea_x_x: "0",
                In1NER_Multi_mirAmA_x_x: "0",
                In1NER_Multi_COM_x_x: "1",
                In1NER_Multi_Power_x_x: "1",
                In1NER_Multi_Red_x_x: "0",
                In1NER_Multi_Black_x_x: "0",
                In1NER_Multi_Insulate_Ohm_x: "0",
                In1NER_Multi_Insulate_Switch_x: "0",
                In1MultiLogic_x_Black_x_x: "",
                In1MultiLogic_x_Red_x_x: "",
                In1MultiLogic_x_DCmVlt_x_x: ""
            },
            dragStart: function () {
                var _this = this;
                // 红表笔drag，通过一个小块热区带动红表笔
                $("#hhjmultimeterRed-hotspot").draggable({
                    containment: ".multimeter-contain",
                    scroll: false,
                    iframeFix: true,
                    cursor: "move",
                    drag: function (event, ui) {
                        $("#hhjmultimeterRed").css("top", "" +
                            (parseInt($("#hhjmultimeterRed-hotspot")
                                .css("top")
                                .replace("px", "")) -
                                210) +
                            "px");
                        $("#hhjmultimeterRed").css("left", "" +
                            parseInt($("#hhjmultimeterRed-hotspot")
                                .css("left")
                                .replace("px", "")) +
                            "px");
                        var redLeftInt = parseInt($("#hhjmultimeterRed")
                            .css("left")
                            .replace("px", "")) + 78, redTopInt = parseInt($("#hhjmultimeterRed")
                            .css("top")
                            .replace("px", "")) + 70, topInt = parseInt($("#mask-multimeter")
                            .css("top")
                            .replace("px", "")) + 460, leftInt = parseInt($("#mask-multimeter")
                            .css("left")
                            .replace("px", "")) + 70, cl = redLeftInt - 40, ct = redTopInt - 80;
                        this.multimeterredstartx = leftInt;
                        this.multimeterredstarty = topInt;
                        this.multimeterredradianx = cl;
                        this.multimeterredradiany = ct;
                        this.multimeterredstopx = redLeftInt;
                        this.multimeterredstopy = redTopInt;
                        var redLeftIntt = redLeftInt - 15, redTopIntt = redTopInt + 230;
                        redTopInt = redTopInt - 65;
                        redLeftInt = redLeftInt - 65;
                        leftInt = leftInt - 50;
                        topInt = topInt - 220;
                        $("#path_Red").attr("d", "M" +
                            redLeftInt +
                            " " +
                            redTopInt +
                            " " +
                            leftInt +
                            " " +
                            topInt);
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
                        $("#hhjmultimeterBlack").css("top", "" +
                            (parseInt($("#hhjmultimeterBlack-hotspot").css("top")) - 210) +
                            "px");
                        $("#hhjmultimeterBlack").css("left", "" + parseInt($("#hhjmultimeterBlack-hotspot").css("left")) + "px");
                        var redLeftInt = parseInt($("#hhjmultimeterBlack").css("left")) + 70, redTopInt = parseInt($("#hhjmultimeterBlack").css("top")) + 80, topInt = parseInt($("#mask-multimeter").css("top")) + 395, leftInt = parseInt($("#mask-multimeter").css("left")) + 85, cl = redLeftInt - 40, ct = redTopInt - 80;
                        //                   $('.clickcircle').css('opacity',1);
                        redTopInt = redTopInt - 75;
                        redLeftInt = redLeftInt - 60;
                        leftInt = leftInt - 70;
                        topInt = topInt - 290;
                        $("#path_black").attr("d", "M" +
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
                            topInt);
                        if (_this.multimeterGear == "V") {
                            $('.value').html('0.0');
                        }
                    },
                    stop: function () {
                        _this.blackHotspotStop(null, null);
                    }
                });
            },
            multimeterblackRecover: function () {
                this.multimeterblackPosition = 0;
                var topInt = parseInt($("#mask-multimeter").css("top")), leftInt = parseInt($("#mask-multimeter").css("left")), toppoint = topInt - 80, leftpoint = leftInt - 290;
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
                $("#path_black").attr("d", "M" +
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
                    this.Param_blackpy);
            },
            redHotspotStop: function (top, left) {
                if (this.svgRecoverStatus == 1) {
                    this.multimeterredRecover();
                }
                else {
                    this.svgRecoverStatus = 1;
                }
                if (top && left) {
                    this.multimeterredRecover(top, left);
                }
            },
            blackHotspotStop: function (top, left) {
                console.log(this.svgRecoverStatus, 'klklklk');
                if (this.svgRecoverStatus == 1) {
                    this.multimeterblackRecover();
                }
                else {
                    this.svgRecoverStatus = 1;
                }
                if (top && left) {
                    this.multimeterblackRecover(top, left);
                }
            },
            multimeterredRecover: function () {
                this.multimeterredPosition = 0;
                var topInt = parseInt($("#mask-multimeter").css("top")), leftInt = parseInt($("#mask-multimeter").css("left")), toppoint = topInt - 80, leftpoint = leftInt - 290;
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
                $("#path_Red").attr("d", "M" +
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
                    this.Param_redpy);
            },
            multimeteroff: function () {
                if (this.multimeterGear == "OFF")
                    return;
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
            multimeterv: function () {
                if (this.multimeterGear == "V")
                    return;
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
            drop: function () {
                var _this = this;
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
                            }
                            else {
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
                            }
                            else {
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
                            _this.freshHontspotDrop("." +
                                $(event.target)
                                    .attr("class")
                                    .split(" ")[0], ui.draggable[0].id, $(event.target).attr("id"));
                        }
                    });
                }, 0);
            },
            // 热区吸附后
            freshHontspotDrop: function (eventID, uiDraggableID) {
                // 红表笔位置的top值，用来判断表笔层级
                var redPositionTop = 0;
                // 黑表笔位置的top值，用来判断表笔层级
                var blackPositionTop = 0;
                //  通过这两个属性进行表笔的定位
                var hTop = $(eventID).attr("h-top"), hLeft = $(eventID).attr("h-left");
                if (uiDraggableID == "hhjmultimeterRed-hotspot" &&
                    this.multimeterblackPosition != $(eventID).attr("wybredPosition")) {
                    if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == "1") {
                        $("#path_Red").css("stroke", "#db3040");
                        this.multimeterScreenUnit = "Ω";
                        this.multimeterScreenUnitSelf = "Ω";
                    }
                    else {
                        $("#path_Red").css("stroke", "#db3040");
                    }
                    this.redposition = $(eventID).attr("wybredPosition") || 0;
                    $("#hhjmultimeterRed-hotspot").css({
                        top: "" + (parseInt(hTop) + 20) + "px",
                        left: "" + parseInt(hLeft) + "px"
                    });
                    $("#hhjmultimeterRed").css({
                        top: "" +
                            (parseInt($("#hhjmultimeterRed-hotspot").css("top")) -
                                $("#hhjmultimeterRed").height() +
                                38) +
                            "px",
                        left: "" + parseInt($("#hhjmultimeterRed-hotspot").css("left")) + "px"
                    });
                    $("#hhjmultimeterRed").addClass("multimeterRed-on");
                    var redLeftInt = parseInt(hLeft) - 5, redTopInt = parseInt(hTop) + 40, cl = redLeftInt - 40, ct = redTopInt + 80;
                    $("#path-Red").attr("d", "M" +
                        redLeftInt +
                        " " +
                        redTopInt +
                        " 501 210");
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
                    $("#path_Red").attr("d", "M" +
                        this.multimeterredstartx +
                        " " +
                        this.multimeterredstarty +
                        " " +
                        this.multimeterredstopx +
                        " " +
                        this.multimeterredstopy);
                    $("#hhjmultimeterRed").css("top", "" +
                        (parseInt($("#hhjmultimeterRed-hotspot")
                            .css("top")
                            .replace("px", "")) -
                            210) +
                        "px");
                    $("#hhjmultimeterRed").css("left", "" +
                        parseInt($("#hhjmultimeterRed-hotspot")
                            .css("left")
                            .replace("px", "")) +
                        "px");
                    var redLeftInt = parseInt($("#hhjmultimeterRed")
                        .css("left")
                        .replace("px", "")) + 78, redTopInt = parseInt($("#hhjmultimeterRed")
                        .css("top")
                        .replace("px", "")) + 70, topInt = parseInt($("#mask-multimeter")
                        .css("top")
                        .replace("px", "")) + 460, leftInt = parseInt($("#mask-multimeter")
                        .css("left")
                        .replace("px", "")) + 70, cl = redLeftInt - 40, ct = redTopInt - 80;
                    this.multimeterredstartx = leftInt;
                    this.multimeterredstarty = topInt;
                    this.multimeterredradianx = cl;
                    this.multimeterredradiany = ct;
                    this.multimeterredstopx = redLeftInt;
                    this.multimeterredstopy = redTopInt;
                    var redLeftIntt = redLeftInt - 15, redTopIntt = redTopInt + 230;
                    redTopInt = redTopInt - 65;
                    redLeftInt = redLeftInt - 65;
                    leftInt = leftInt - 50;
                    topInt = topInt - 220;
                    $("#path_Red").attr("d", "M" +
                        redLeftInt +
                        " " +
                        redTopInt +
                        " " +
                        leftInt +
                        " " +
                        topInt);
                    // 测量点记录
                    // 红黑表笔层级判断
                    redPositionTop = parseInt($("#hhjmultimeterRed").css("top"));
                    blackPositionTop = parseInt($("#hhjmultimeterBlack").css("top"));
                }
                else if (uiDraggableID == "hhjmultimeterBlack-hotspot" &&
                    this.multimeterredPosition != $(eventID).attr("wybblackPosition")) {
                    if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == "1") {
                        $("#path_black").css("stroke", "#656261");
                        this.multimeterScreenUnit = "Ω";
                        this.multimeterScreenUnitSelf = "Ω";
                    }
                    else {
                        $("#path_black").css("stroke", "#656261");
                    }
                    this.blackposition = $(eventID).attr("wybblackPosition") || 0;
                    $("#hhjmultimeterBlack-hotspot").css({
                        top: "" + (parseInt(hTop) + 20) + "px",
                        left: "" + parseInt(hLeft) + "px"
                    });
                    $("#hhjmultimeterBlack").addClass("multimeterBlack-on");
                    $("#hhjmultimeterBlack").css({
                        top: "" +
                            (parseInt($("#hhjmultimeterBlack-hotspot").css("top")) -
                                $("#hhjmultimeterBlack").height() +
                                38) +
                            "px",
                        left: "" + parseInt($("#hhjmultimeterBlack-hotspot").css("left")) + "px"
                    });
                    var blackLeftInt = parseInt(hLeft) - 5, redTopInt = parseInt(hTop) + 40, blackCl = blackLeftInt + 40, blackCt = redTopInt + 80;
                    $("#path-black").attr("d", "M" +
                        blackLeftInt +
                        " " +
                        redTopInt +
                        " 501 291 ");
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
                    $("#path_black").attr("d", "M" +
                        this.multimeterblackstartx +
                        " " +
                        this.multimeterblackstarty +
                        " " +
                        this.multimeterblackstopx +
                        " " +
                        this.multimeterblackstopy);
                    $("#hhjmultimeterBlack").css("top", "" +
                        (parseInt($("#hhjmultimeterBlack-hotspot").css("top")) - 210) +
                        "px");
                    $("#hhjmultimeterBlack").css("left", "" + parseInt($("#hhjmultimeterBlack-hotspot").css("left")) + "px");
                    var redLeftInt = parseInt($("#hhjmultimeterBlack").css("left")) + 70, redTopInt = parseInt($("#hhjmultimeterBlack").css("top")) + 80, topInt = parseInt($("#mask-multimeter").css("top")) + 395, leftInt = parseInt($("#mask-multimeter").css("left")) + 85, cl = redLeftInt - 40, ct = redTopInt - 80;
                    //                   $('.clickcircle').css('opacity',1);
                    redTopInt = redTopInt - 75;
                    redLeftInt = redLeftInt - 60;
                    leftInt = leftInt - 70;
                    topInt = topInt - 290;
                    $("#path_black").attr("d", "M" +
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
                        topInt);
                    // 红黑表笔层级判断
                    redPositionTop = parseInt($("#hhjmultimeterRed").css("top"));
                    blackPositionTop = parseInt($("#hhjmultimeterBlack").css("top"));
                    // 测量点记录
                }
                else {
                }
                this.isDrop();
                // 万用表表笔层级判断
                if (blackPositionTop != 0 && redPositionTop != 0) {
                    if (blackPositionTop > redPositionTop) {
                        $("#hhjmultimeterRed").css("z-index", "10");
                        $("#hhjmultimeterBlack").css("z-index", "11");
                    }
                    else {
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
            isDrop: function () {
                if ((this.multimeterredPosition == 'N1' && this.multimeterblackPosition == 'N2') || (this.multimeterredPosition == 'N3' && this.multimeterblackPosition == 'N4')) {
                    if (this.multimeterGear == "V") {
                        $('.value').html('24');
                    }
                }
                else if ((this.multimeterredPosition == 'N2' && this.multimeterblackPosition == 'N1') || (this.multimeterredPosition == 'N4' && this.multimeterblackPosition == 'N3')) {
                    if (this.multimeterGear == "V") {
                        $('.value').html('-24');
                    }
                }
                else if ((this.multimeterredPosition == 'N5' && this.multimeterblackPosition == 'N6') || (this.multimeterredPosition == 'N7' && this.multimeterblackPosition == 'N8')) {
                    if (this.multimeterGear == "V") {
                        $('.value').html('7');
                    }
                }
                else if ((this.multimeterredPosition == 'N6' && this.multimeterblackPosition == 'N5') || (this.multimeterredPosition == 'N8' && this.multimeterblackPosition == 'N7')) {
                    if (this.multimeterGear == "V") {
                        $('.value').html('-7');
                    }
                }
                else if ((this.multimeterredPosition == 'N9' && this.multimeterblackPosition == 'N10') || (this.multimeterredPosition == 'N11' && this.multimeterblackPosition == 'N12')) {
                    if (this.multimeterGear == "V") {
                        $('.value').html('4.7');
                    }
                }
                else if ((this.multimeterredPosition == 'N10' && this.multimeterblackPosition == 'N9') || (this.multimeterredPosition == 'N12' && this.multimeterblackPosition == 'N11')) {
                    if (this.multimeterGear == "V") {
                        $('.value').html('-4.7');
                    }
                }
                else if (this.multimeterredPosition == 'N13' && this.multimeterblackPosition == 'N14') {
                    if (this.multimeterGear == "V") {
                        $('.value').html('24');
                    }
                }
                else if (this.multimeterredPosition == 'N14' && this.multimeterblackPosition == 'N13') {
                    if (this.multimeterGear == "V") {
                        $('.value').html('-24');
                    }
                }
                else if (this.multimeterredPosition == 'N15' && this.multimeterblackPosition == 'N16') {
                    if (this.multimeterGear == "V") {
                        $('.value').html('4.8');
                    }
                }
                else if (this.multimeterredPosition == 'N16' && this.multimeterblackPosition == 'N15') {
                    if (this.multimeterGear == "V") {
                        $('.value').html('-4.8');
                    }
                }
                else if (this.multimeterredPosition == 'N17' && this.multimeterblackPosition == 'N18') {
                    if (this.multimeterGear == "V") {
                        $('.value').html('0.9');
                    }
                }
                else if (this.multimeterredPosition == 'N18' && this.multimeterblackPosition == 'N17') {
                    if (this.multimeterGear == "V") {
                        $('.value').html('-0.9');
                    }
                }
                else {
                    if (this.multimeterGear == "V") {
                        $('.value').html('0.0');
                    }
                }
            },
            closemultimeter: function () {
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
                $("#path_Red").attr("d", "M" +
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
                    this.multimeterredstopy);
                $("#path_black").attr("d", "M" +
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
                    this.multimeterblackstopy);
                // 去除右侧工具栏的触发状态
                $(".right-multimeter")
                    .parent()
                    .removeClass("active");
                // 隐藏热区
                //  hideAHot();
                // 把状态码设为0；
                // **multimeterStay = 0;
            },
        };
    }
    return MultimeterService;
}());
MultimeterService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], MultimeterService);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appdata_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_resolver__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });






var AppService = (function () {
    function AppService(http, appdataService) {
        this.http = http;
        this.appdataService = appdataService;
        this.returnPricinple = false; // 返回原理页面
        this.showZhizhenAnimatePic = false;
        this.coverBtnL = false;
        this.coverBtnR = false;
        this.appConfigUrl = './assets/appConfig.json'; // URL to get appConfig
        this.state = {
            current: {},
            progress: 0,
        };
        this.recovery = false;
        this.suspendData = {
            'capacityPrinciple': {},
            'principle': {},
            'instruction': {},
            'diagnostic': {},
            'testedCache': {},
            'questionCache': {},
            'elsaWinCache': {},
            router: '',
        };
    }
    // 初始化当前项目
    AppService.prototype.init = function (appConfig) {
        var data = {};
        // console.log('initConfig');
        // this.initConfig(appConfig);
        // this.initState();
        // console.log(this);
        // console.log(confMock);
        // let data = new DataResolver(confMock);
        // if (appConfig) {
        data = new __WEBPACK_IMPORTED_MODULE_5__data_resolver__["a" /* DataResolver */](appConfig);
        // }
        this.pages = data.pageArray;
        this.description = data.description;
        this.chapters = data.chapterArray.filter(function (v, i) {
            if (v.name) {
                return true;
            }
        });
        // console.log(this.chapters);
        this.initState();
    };
    // 页面导航
    AppService.prototype.go2page = function (newPage) {
        // if (!this.nextPage && newPage > this.state.current.pageNumber) return;
        if (!newPage || !this.state.current.isPass
            && newPage > this.state.current.pageNumber)
            return;
        // this.nextPage = true;
        // this.state.current.isPass = true;
        if (newPage > 0 && newPage <= this.pages.length) {
            if (this.state.progress < newPage) {
                this.doCommit();
                this.state.progress = newPage;
                // 保存进度
                // $.xcj.scorm.api.setSuspendData(this.state.progress);
                // console.log('记录', this.state.progress);
            }
            this.cleanPage();
            // setTimeout(() => {
            this.state.current = this.pages[newPage - 1];
            // console.log('当前页面', this.state.current);
            // }, 1);
        }
    };
    // 模拟 异步 获取项目配置
    AppService.prototype.getAppConfigmock = function (configurationFile) {
        return Promise.resolve(configurationFile);
    };
    // 获取项目配置
    AppService.prototype.getAppConfig = function () {
        return this.http.get(this.appConfigUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // 根据当前项目保存的进度初始化状态
    AppService.prototype.initState = function () {
        var saved = 1;
        // ------------------ 获取平台数据 ------------------
        // $.xcj.scorm.api.loadPage();
        // if ($.xcj.scorm.api.getComplete() !== 'incomplete' &&
        //     $.xcj.scorm.api.getComplete() !== 'completed') {
        //     $.xcj.scorm.api.setComplete('not attempted');
        //     $.xcj.scorm.api.doCommit();
        // }
        // const rePage = $.xcj.scorm.api.getSuspendData();
        // if (rePage === '' || rePage === undefined || rePage === 'false') {
        //     // saved = 4;
        // } else {
        //     saved = rePage;
        // }
        // console.log('获取平台数据');
        // -------------------------------------------------
        // console.log(saved);
        this.state.progress = saved;
        this.go2page(this.state.progress);
    };
    // 平台通信
    AppService.prototype.doCommit = function () {
        // ---------------- 平台通信 -------------
        if (this.state.current.pageNumber >= this.state.progress) {
            // console.log('开始提交平台数据');
            var progress = Math.floor((this.state.current.pageNumber / (this.pages.length - 1))
                * 100);
            // $.xcj.scorm.api.setProgress(progress);
            // console.log('进度', progress);
            // $.xcj.scorm.api.doCommit();
            // if (progress === 100) {
            //     $.xcj.scorm.api.setComplete('completed');
            //     $.xcj.scorm.api.doCommit();
            // }
            // console.log('结束提交平台数据');
        }
        // --------------------------------------
    };
    // 处理错误
    AppService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    // 刷新页面
    AppService.prototype.cleanPage = function () {
        this.state.current = {
            pageNumber: this.state.current.pageNumber,
        };
    };
    // 数据回显
    AppService.prototype.echo = function (data) {
        this.appdataService.Catalog = data.catalog ? data.catalog : this.appdataService.Catalog;
        this.appdataService.content = data.content ? data.content : this.appdataService.content;
        this.appdataService.current = data.currentNum ? data.currentNum : this.appdataService.current;
    };
    AppService.prototype.datacallback = function () {
        return this.appdataService.dataBack();
    };
    return AppService;
}());
AppService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
        __WEBPACK_IMPORTED_MODULE_4__appdata_service__["a" /* AppdataService */]])
], AppService);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_testQuestions_testQuestions_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppdataService; });



var AppdataService = (function () {
    function AppdataService(testQuestionsService) {
        this.testQuestionsService = testQuestionsService;
        this.menueIsShow = false;
        this.current = 1;
        this.draggableIS = [
            { 'boolen': false },
            { 'boolen': false },
            { 'boolen': false },
            { 'boolen': false },
            { 'boolen': false },
        ];
        this.appboolen = {
            'type_three': false,
            'type_seven': false,
            'type_eight': false,
            'type_thirtyeight': false,
            'type_fifteen': false,
            'type_text': false,
            'type_changeText': false,
            'type_exclusive': false,
            'type_sequentialClicks': false,
            'type_paging': false,
            'type_imgText': false,
            'type_changeImg': false,
            'type_icontext': false,
        };
        /*
        isExistence 二级导航展开或者闭合状态
        isGetInfo 是否可以进入
        currentPage 点击导航进入对应的页码
        isAllowPageNum 当前点击最大length
        currentClickTheSet 返回上一页时，当前页面点击集合
        */
        this.Catalog = [
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
                isChildNav: []
            },
            {
                navTitle: '服务标准',
                isExistence: false,
                isGetInfo: false,
                currentPage: 3,
                isChildNav: []
            },
            {
                navTitle: '现场管理',
                isExistence: false,
                isGetInfo: false,
                currentPage: 4,
                isChildNav: []
            },
        ];
        this.content = [
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
                'title': '',
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
                                        'textlist': []
                                    },
                                    {
                                        'isShow': false,
                                        'src': './assets/images/project/fourNav-5.png',
                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                            'top': '50px',
                                                            'left': '0px',
                                                            'width': '100%',
                                                        },
                                                        'src': './assets/images/project/10_02.png',
                                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '100px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing1.png',
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '276px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing2.png',
                                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '100px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing1.png',
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '276px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing2.png',
                                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '100px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing1.png',
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '276px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing2.png',
                                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '100px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing1.png',
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '276px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing2.png',
                                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '100px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing1.png',
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '276px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing2.png',
                                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '100px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing1.png',
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '276px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing2.png',
                                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '100px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing1.png',
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '276px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing2.png',
                                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '100px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing1.png',
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '276px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing2.png',
                                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '100px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing1.png',
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '276px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing2.png',
                                                        'textlist': []
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'oneDivStyle': {},
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
                                                        'text': '按照派工单项目或用户现场要求进行维修作业',
                                                        'style': {},
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
                                                        'text': '严格执行汽车维护工艺规范和修理技术标准进行维修作业',
                                                        'style': {},
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
                                                        'text': '严格按照工位工序安全操作规程进行作业，杜绝事故发生',
                                                        'style': {},
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
                                                        'style': {},
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
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '100px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing1.png',
                                                        'textlist': []
                                                    },
                                                    {
                                                        'isShow': true,
                                                        'style': {
                                                            'top': '366px',
                                                            'left': '276px',
                                                            'height': '110px',
                                                        },
                                                        'src': './assets/images/project/changjing2.png',
                                                        'textlist': []
                                                    },
                                                ]
                                            },
                                        ],
                                    }
                                },
                            ]
                        }
                    },
                ],
                'imglist': [],
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
                                'img1Style': {},
                                'img2IsShow': true,
                                'img2': './assets/images/project/nav-1-down.png',
                                'img2Style': {},
                                'img3IsShow': false,
                                'img3': './assets/images/project/nav-1-none.png',
                                'img3Style': {}
                            },
                            {
                                'img1IsShow': false,
                                'img1': './assets/images/project/nav-2-up.png',
                                'img1Style': {},
                                'img2IsShow': false,
                                'img2': './assets/images/project/nav-2-down.png',
                                'img2Style': {},
                                'img3IsShow': true,
                                'img3': './assets/images/project/nav-2-none.png',
                                'img3Style': {}
                            },
                            {
                                'img1IsShow': false,
                                'img1': './assets/images/project/nav-3-up.png',
                                'img1Style': {},
                                'img2IsShow': false,
                                'img2': './assets/images/project/nav-3-down.png',
                                'img2Style': {},
                                'img3IsShow': true,
                                'img3': './assets/images/project/nav-3-none.png',
                                'img3Style': {}
                            },
                            {
                                'img1IsShow': false,
                                'img1': './assets/images/project/nav-4-up.png',
                                'img1Style': {},
                                'img2IsShow': false,
                                'img2': './assets/images/project/nav-4-down.png',
                                'img2Style': {},
                                'img3IsShow': true,
                                'img3': './assets/images/project/nav-4-none.png',
                                'img3Style': {}
                            },
                            {
                                'img1IsShow': false,
                                'img1': './assets/images/project/nav-5-up.png',
                                'img1Style': {},
                                'img2IsShow': false,
                                'img2': './assets/images/project/nav-5-down.png',
                                'img2Style': {},
                                'img3IsShow': true,
                                'img3': './assets/images/project/nav-5-none.png',
                                'img3Style': {}
                            },
                            {
                                'img1IsShow': false,
                                'img1': './assets/images/project/nav-6-up.png',
                                'img1Style': {},
                                'img2IsShow': false,
                                'img2': './assets/images/project/nav-6-down.png',
                                'img2Style': {},
                                'img3IsShow': true,
                                'img3': './assets/images/project/nav-6-none.png',
                                'img3Style': {}
                            },
                            {
                                'img1IsShow': false,
                                'img1': './assets/images/project/nav-7-up.png',
                                'img1Style': {},
                                'img2IsShow': false,
                                'img2': './assets/images/project/nav-7-down.png',
                                'img2Style': {},
                                'img3IsShow': true,
                                'img3': './assets/images/project/nav-7-none.png',
                                'img3Style': {}
                            },
                            {
                                'img1IsShow': false,
                                'img1': './assets/images/project/nav-8-up.png',
                                'img1Style': {},
                                'img2IsShow': false,
                                'img2': './assets/images/project/nav-8-down.png',
                                'img2Style': {},
                                'img3IsShow': true,
                                'img3': './assets/images/project/nav-8-none.png',
                                'img3Style': {}
                            },
                            {
                                'img1IsShow': false,
                                'img1': './assets/images/project/nav-9-up.png',
                                'img1Style': {},
                                'img2IsShow': false,
                                'img2': './assets/images/project/nav-9-down.png',
                                'img2Style': {},
                                'img3IsShow': true,
                                'img3': './assets/images/project/nav-9-none.png',
                                'img3Style': {}
                            },
                        ],
                        'content': [
                            {
                                'isShow': true,
                                'title': '塞尺组成',
                                'style': {},
                                'contentTextList': [
                                    {
                                        isShow: false,
                                        'text': '扁片式塞尺由一套经过精磨的不同厚度的薄片组成，片上印有厚度值，以千分之一英寸或百分之一毫米表示。',
                                        'style': {},
                                    },
                                ],
                            },
                            {
                                'isShow': false,
                                'title': '塞尺用途',
                                'style': {},
                                'contentTextList': [
                                    {
                                        isShow: false,
                                        'text': '塞尺或厚度规常用来测量零件之间的小间隙，可用来测量连杆侧隙，检查活塞与缸壁间隙，或调整气门。',
                                        'style': {},
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
                                'textlist': []
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
                                'textlist': []
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
                                'textlist': []
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
                                'textlist': []
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
                                'textlist': []
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
                                'textlist': []
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
                                'textlist': []
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
                                'textlist': []
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
                                'textlist': []
                            },
                        ],
                    },
                ],
                'imglist': [],
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
                    },
                ],
                'imglist': [{
                        'img': './assets/images/project/xcgj01.png',
                        'imgStyle': {}
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
                    },
                ],
                'imglist': [{
                        'img': './assets/images/project/xcgj02.png',
                        'imgStyle': {}
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
                    },
                ],
                'imglist': [{
                        'img': './assets/images/project/xcgj03.png',
                        'imgStyle': {}
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
                    },
                ],
                'imglist': [{
                        'img': './assets/images/project/xcgj04.png',
                        'imgStyle': {}
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
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
                        'style': {},
                    },
                ],
                'imglist': [{
                        'img': './assets/images/project/xcgj05.png',
                        'imgStyle': {}
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
        ];
    }
    AppdataService.prototype.dataBack = function () {
        return { 'currentNum': this.current, 'catalog': this.Catalog, 'content': this.content };
    };
    return AppdataService;
}());
AppdataService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__views_testQuestions_testQuestions_service__["a" /* TestQuestionsService */]])
], AppdataService);



/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_multimeter_multimeter_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_gear_panel_gear_panel_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_app_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });






var HomeService = (function () {
    function HomeService(dashboardService, gearPanelService, multimeterService, appService) {
        this.dashboardService = dashboardService;
        this.gearPanelService = gearPanelService;
        this.multimeterService = multimeterService;
        this.appService = appService;
        this.toolIsShow = false; //工具箱显示
        this.controlCenterIsShow = false; //工具箱显示
        this.multimeterTaskIsShow = false; //万用表遮罩
        this.toolNavIsShow = false; //左侧工具栏是否显示
        this.currentShowHotArea = ''; // 当前要显示的热区
    }
    // 关闭工具，下方工具框显示
    HomeService.prototype.closeTool = function (param) {
        switch (param) {
            case 'multimeters':
                this.multimeterTaskIsShow = false;
                this.multimeterService.Mdata.multimeterStatus = false;
                break;
        }
    };
    // 控制中心或工具栏显示或隐藏
    HomeService.prototype.platformRouterTurn = function (cont) {
        switch (cont) {
            case 'measureTool':
                this.toolIsShow = !this.toolIsShow;
                break;
            case 'controlCenter':
                if (this.dashboardService.dashboardStatus) {
                    if ($('.contrlcenter').css('display') == 'none') {
                        $('.contrlcenter').css('display', 'block');
                    }
                    else {
                        $('.contrlcenter').css('display', 'none');
                    }
                }
                else {
                    this.dashboardService.dashboardStatus = true;
                }
                break;
        }
    };
    // 切换页面工具箱的工具显示
    HomeService.prototype.closeAll = function () {
        this.closeTool("multimeters");
        this.toolIsShow = false;
    };
    // 根据传进的不同参数显示不同的工具
    HomeService.prototype.toolShow = function (str) {
        // 增加判断条件  只有当工具箱仪器隐藏的时候才可以显示    
        switch (str) {
            case "multimeters":
                if (this.multimeterTaskIsShow)
                    return;
                this.multimeterService.Mdata.multimeterStatus = true;
                this.multimeterTaskIsShow = true;
                break;
            default:
                return;
        }
    };
    return HomeService;
}());
HomeService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_2__components_gear_panel_gear_panel_service__["a" /* GearPanelService */],
        __WEBPACK_IMPORTED_MODULE_1__components_multimeter_multimeter_service__["a" /* MultimeterService */],
        __WEBPACK_IMPORTED_MODULE_5__index_app_service__["a" /* AppService */]])
], HomeService);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_multimeter_multimeter_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_gear_panel_gear_panel_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestQuestionsService; });





var TestQuestionsService = (function () {
    function TestQuestionsService(dashboardService, gearPanelService, multimeterService) {
        this.dashboardService = dashboardService;
        this.gearPanelService = gearPanelService;
        this.multimeterService = multimeterService;
        this.testQuestionList = {
            'chapter-08-2': [
                {
                    'isShow': true,
                    'text': '钥匙门旋转到ON挡位时，拔掉尿素喷嘴电磁阀的插头，利用万用表测量尿素喷嘴电磁阀1号线的电压值，并根据测量结果选出正确答案',
                    'taskIsShow': false,
                    'currentShowHotArea': 'chapter-08-2-01',
                    'multimeterIsShow': true,
                    'taskInfo': '',
                    'option': [
                        {
                            'id': 'chapter-08-2',
                            'text': '7V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '12V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '24V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': true,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '0V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                    ],
                    'src': './assets/images/project/fourNav-35.png'
                },
                {
                    'isShow': false,
                    'text': '钥匙门旋转到ON挡位时，拔掉尿素喷嘴电磁阀的插头，利用万用表测量尿素喷嘴电磁阀1号线的电压值，并根据测量结果选出正确答案',
                    'taskIsShow': false,
                    'currentShowHotArea': 'chapter-08-2-02',
                    'multimeterIsShow': false,
                    'taskInfo': '',
                    'option': [
                        {
                            'id': 'chapter-08-2',
                            'text': '7V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '12V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '24V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '0V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': true,
                            'checked': 'false',
                        },
                    ],
                    'src': './assets/images/project/fourNav-36.png'
                },
                {
                    'isShow': false,
                    'text': '钥匙门旋转到ON挡位时，不拔掉尿素喷嘴电磁阀的插头，利用万用表测量尿素喷嘴电磁阀1号线的电压值，并根据测量结果选出正确答案',
                    'taskIsShow': false,
                    'currentShowHotArea': 'chapter-08-2-03',
                    'multimeterIsShow': false,
                    'taskInfo': '',
                    'option': [
                        {
                            'id': 'chapter-08-2',
                            'text': '7V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': true,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '12V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '24V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '0V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                    ],
                    'src': './assets/images/project/fourNav-35.png'
                },
                {
                    'isShow': false,
                    'text': '钥匙门旋转到ON挡位时，不拔掉尿素喷嘴电磁阀的插头，利用万用表测量尿素喷嘴电磁阀1号线的电压值，并根据测量结果选出正确答案',
                    'taskIsShow': false,
                    'currentShowHotArea': 'chapter-08-2-04',
                    'multimeterIsShow': false,
                    'taskInfo': '',
                    'option': [
                        {
                            'id': 'chapter-08-2',
                            'text': '7V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': true,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '12V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '24V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-08-2',
                            'text': '0V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                    ],
                    'src': './assets/images/project/fourNav-36.png'
                },
            ],
            'chapter-12-1': [
                {
                    'isShow': true,
                    'text': '钥匙门旋转到ON挡位时，拔掉尿素液位温度传感器的插头，利用万用表测量液位信号线的电压值，红表笔接1号脚，黑表笔接2号脚，并根据测量结果选出正确答案',
                    'taskIsShow': false,
                    'currentShowHotArea': 'chapter-12-1-01',
                    'multimeterIsShow': true,
                    'taskInfo': '',
                    'option': [
                        {
                            'id': 'chapter-12-1',
                            'text': '4.7V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': true,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-12-1',
                            'text': '12V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-12-1',
                            'text': '24V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-12-1',
                            'text': '0V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                    ],
                    'src': './assets/images/project/fourNav-37.png'
                },
            ],
            'chapter-13-1': [
                {
                    'isShow': true,
                    'text': '钥匙门旋转到ON挡位时，拔掉尿素液位温度传感器的插头，利用万用表测量温度信号线的电压值，红表笔接3，黑表笔接4号线并根据测量结果选出正确答案',
                    'taskIsShow': false,
                    'currentShowHotArea': 'chapter-13-1-01',
                    'multimeterIsShow': true,
                    'taskInfo': '',
                    'option': [
                        {
                            'id': 'chapter-13-1',
                            'text': '12V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-13-1',
                            'text': '4.7V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': true,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-13-1',
                            'text': '24V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-13-1',
                            'text': '0V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                    ],
                    'src': './assets/images/project/fourNav-38.png'
                },
            ],
            'chapter-15-5': [
                {
                    'isShow': true,
                    'text': '钥匙门旋转到ON挡位时，拔掉氮氧传感器的插头，利用万用表测量1号脚的电压值，并根据测量结果选出正确答案',
                    'taskIsShow': false,
                    'currentShowHotArea': 'chapter-15-5-01',
                    'multimeterIsShow': true,
                    'taskInfo': '',
                    'option': [
                        {
                            'id': 'chapter-15-5',
                            'text': '12V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-15-5',
                            'text': '4.7V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-15-5',
                            'text': '24V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': true,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-15-5',
                            'text': '0V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                    ],
                    'src': './assets/images/project/fourNav-42.png'
                },
            ],
            'chapter-16-4': [
                {
                    'isShow': true,
                    'text': '钥匙门旋转到ON挡位时，拔掉排气温度传感器的插头，利用万用表测量排气温度信号线的电压值，并根据测量结果选出正确答案',
                    'taskIsShow': false,
                    'currentShowHotArea': 'chapter-16-4-01',
                    'multimeterIsShow': true,
                    'taskInfo': '',
                    'option': [
                        {
                            'id': 'chapter-16-4',
                            'text': '4.8V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': true,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-16-4',
                            'text': '12V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-16-4',
                            'text': '24V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-16-4',
                            'text': '0V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                    ],
                    'src': './assets/images/project/fourNav-46.png'
                },
                {
                    'isShow': false,
                    'text': '钥匙门旋转到ON挡位时，不拔掉排气温度传感器的插头，利用万用表测量排气温度信号线的电压值，并根据测量结果选出正确答案',
                    'taskIsShow': false,
                    'currentShowHotArea': 'chapter-16-4-02',
                    'multimeterIsShow': false,
                    'taskInfo': '',
                    'option': [
                        {
                            'id': 'chapter-16-4',
                            'text': '0.9V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': true,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-16-4',
                            'text': '12V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-16-4',
                            'text': '24V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                        {
                            'id': 'chapter-16-4',
                            'text': '0V',
                            'textStyle': {
                                'backgroundColor': 'rgb(163, 213, 245)',
                                'boxShadow': 'none',
                            },
                            'isRight': false,
                            'checked': 'false',
                        },
                    ],
                    'src': './assets/images/project/fourNav-46.png'
                },
            ],
        };
    }
    return TestQuestionsService;
}());
TestQuestionsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_2__components_gear_panel_gear_panel_service__["a" /* GearPanelService */],
        __WEBPACK_IMPORTED_MODULE_1__components_multimeter_multimeter_service__["a" /* MultimeterService */]])
], TestQuestionsService);



/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0ZFNzk5NDlBRkYxMTFFODg1N0JBOEM0OEY0QzU3MjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0ZFNzk5NEFBRkYxMTFFODg1N0JBOEM0OEY0QzU3MjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RkU3OTk0N0FGRjExMUU4ODU3QkE4QzQ4RjRDNTcyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RkU3OTk0OEFGRjExMUU4ODU3QkE4QzQ4RjRDNTcyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psy78jcAAAQgSURBVHja1JvLjtMwFIbtNLBAYs9FzMAGaRaowALQTKeTpswLwHPyBEBzaVmAhDQI1jBDQTwA6yYcD8dgWT5uLnbSHOmoVZJp8sf25z8nnnD85MU1xtgU8hbkZ8iPkAUbSJy9f/Xv+8OnLwP4GEMeQK4hP4Qo7hkeswd5HTIdkkhFnNAS4ab7kDzAllNDHsQHJI5r4mTsCYFnhr8RB8cDasDIIE7EFyHwE+Rbw85jyNMBtN4cG0SPRDBldOP2QQlffkBuIO9pB92BvAL5dUf1zSAnkIG2XTBkCQAqhECxQYj8jp/7yvjjishz3L8LEaC4qSZOgDGHzEDc5bWGyk6xIcPvJ8ofcrxLxY7QVdJS75biulYgLFE3yhZU4wI/72ok3ccfP+9RHMebbwJKroujBKoi9TEpRI4gv/U45kziUhCXUs1NRW6h6/MexMUELVNlaLGqLShjjX3bRNerHdI1ttAyl0BpIpAhXYue6Bpgl9RpKYGY2cTpFKWixO7KCbqWeCc3HsSdYOq0XOI5K/1I1chQaGkYkyc1f6sKLacGceLcK3QpzLVA2ecTwrvOHBp0yluKG7yo2w3qBnUS0ZJzz7RMm/TzJrEippCjllOI9JbcRMsmMAsbXkiBIrnWNTmKZHgDyhpjboa9gBtomTe1iGGLu+2KrjZvuWzSLV10UZ2uGUHXaMs5KG9Zorik7cW5QntG3OnjLXSNDFOBBFni4sJczl1ZTbrOCHGpK3Ftx6AplgrqdbqKeKN5S0bQku2qQOk0GEHXEuExIbxlY1p2JVAtGzANMhy7K/NByy4FqqCQoqjzbOp6yz4hQ4EnIbpdqexnQxXIsMTR2/l9nyC2PErxLsofPscgVZTVW7eJd+1VoHwSn2oOpsAxV6B4k3dNdn2a2FZmyLTjAs3xMNciuygzMINxlt61rOldexVIFmWJqYAy1K4qA04FxoRLSZmlKIstazLoE1d0DRyJa1pmkN514aH80RoyEhSmMkNOPAQzixc1VQaO2tI1bCFuaqFlXftle3V3rOzfdNFFfZYZqPLHtEL5w5lA32WGzELXme8uOidomTh+EpdwmhtEikZ57aMFY8U36rRcevCR7wi6Htaha1hxzEUWWjovMxjoGhHlj610DSq0sBxznKClz0UJpWLrCsOj1gyXcDUSaHuFRTkQn5UBsrhsExlsoWVUg3JdiKRe3cW4Xq2ywJjRRdmM9RfUwogJZdADYiqwFWX7Xu1EvrqDVjy1UVTSatIxLZuAZ6UAUKXrIYgU17iQixOCCrTMO6ClD7qOpLARc/TCvyfwmHrWpR4hUgh8xBy98O8jcAlXRtD1sVzEXbXMsKsiqVd3YyHwp2fj3FWYzMc6ZP9rlTfZ338rOGMDW3GPrVjCmBPM+A35APKXYMgfAQYAAjZTCAIMJMAAAAAASUVORK5CYII="

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAMCAYAAAA3bX6lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzQzNEZBNTY1MDQzMTFFMkI4ODNBMURBREZGNzc4Q0YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzQzNEZBNTc1MDQzMTFFMkI4ODNBMURBREZGNzc4Q0YiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NDM0RkE1NDUwNDMxMUUyQjg4M0ExREFERkY3NzhDRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NDM0RkE1NTUwNDMxMUUyQjg4M0ExREFERkY3NzhDRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PosqxrYAAAGhSURBVHja3NW/S0JRFMDxaxIULUFLOEQgBOKSFEERQovUlpMN0hoRBC1BU9DUEv0Ym1yEkqCgoaXAEBqCfkBDLQUhSP+AUDTY99mRbperXi0XD3z0vvvefecdrx5VqVQqaJ4QgcKWMV+Z65FxI0JNrPmXHMooMK6dDCJvFOi9XyHsmNT7MDbw6nBtRnJl6sw1lMMsMItedGk3Nwv0jl+QrPPAMdxq99DPXWDKmCtYri1UWe+So8zHy7pS6gg7COMRHxjGG3axIsd5+NVPHGMVRTkuqOoRQAbLCGEbazizrA04ztly/ApfeRu/o08eYBqfyGJOihzBTZWbn2PeMfkCZjCLKDYx0coCO7RxUXTLsV8KVVKcLbwdXFTucYiIjK8xqFocXoFpxJDDqOzcJYI4xTj2jXXv8tVc0r6eLpHAnYzH8NzqAs0f8j0GpNE8WJqMN85hyKErxrWmVGkAKfRjUnLF/thkbDlqdlG9syWMAjux1+D/oFdM2pL8ANF/6KK1clgLTGknTyw72KykwzWVh0zXmWsoh95F2zLavsAvAQYAqyaEyv7XYdsAAAAASUVORK5CYII="

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animationOn; });
var a = [
    {
        id: 'halo',
        keyframes: [
            {
                offset: 0,
                style: { opacity: 0.2, },
            },
            {
                offset: 1,
                style: { opacity: 1, },
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 1000,
        easing: '',
        iterations: 'Infinity',
    },
    {
        id: 'ficker1',
        keyframes: [
            {
                offset: 0,
                style: { opacity: 0.2, },
            },
            {
                offset: 1,
                style: { opacity: 1, },
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 300,
        easing: '',
        iterations: 'Infinity',
    },
    {
        id: 'ficker2',
        keyframes: [
            {
                offset: 0,
                style: { opacity: 0.2, },
            },
            {
                offset: 1,
                style: { opacity: 1, },
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 500,
        easing: '',
        iterations: 5,
    },
];
var animationOn = {
    id: {
        keyframes: [],
        options: {},
    },
};
var _loop_1 = function (v) {
    var keyframes = [];
    v.keyframes.forEach(function (element) {
        var keyframe = {};
        if (element.offset) {
            Object.assign(keyframe, {
                offset: +element.offset,
            });
        }
        Object.assign(keyframe, element.style);
        keyframes.push(keyframe);
    });
    var options = {};
    if (v.delay) {
        Object.assign(options, {
            delay: v.delay,
        });
    }
    if (v.direction) {
        Object.assign(options, {
            direction: v.direction,
        });
    }
    if (v.duration) {
        Object.assign(options, {
            duration: +v.duration,
        });
    }
    if (v.easing) {
        Object.assign(options, {
            easing: v.easing,
        });
    }
    if (v.iterations) {
        var iterations = void 0;
        if (v.iterations === 'Infinity') {
            v.iterations = Infinity;
        }
        Object.assign(options, {
            iterations: +v.iterations,
        });
    }
    animationOn[v.id] = {
        keyframes: keyframes,
        options: options,
    };
};
for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
    var v = a_1[_i];
    _loop_1(v);
}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flyIn_animation__ = __webpack_require__(82);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__flyIn_animation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__halo_animation__ = __webpack_require__(83);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__halo_animation__["a"]; });




/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05f164159a780dc7f32558d6d679d41a.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(213)

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(63)

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseWindowService; });


/**
 * 基类
 *
 * @class CloseWindow
 */
var CloseWindow = (function () {
    function CloseWindow() {
    }
    /**
     * 关闭当前标签页
     *
     *
     * @memberOf CloseWindow
     */
    CloseWindow.prototype.closeWindow = function () {
        var userAgent = navigator.userAgent;
        // 兼容谷歌、火狐和其他浏览器
        if (userAgent.indexOf('Firefox') !== -1 || userAgent.indexOf('Chrome') !== -1) {
            top.window.parent.opener = top;
            top.window.parent.open('', '_self', '');
            top.window.parent.close();
            window.location.href = 'about:blank';
        }
        else {
            window.parent.opener = null;
            window.parent.open('', '_self');
            window.parent.close();
            // window.location.href = 'http://content.xiaochejiang.com/warn.html';
        }
    };
    return CloseWindow;
}());
/**
 *
 *
 * @export
 * @class CloseWindowService
 * @extends {CloseWindow}
 */
var CloseWindowService = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](CloseWindowService, _super);
    function CloseWindowService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseWindowService.prototype.closeWindow = function () {
        _super.prototype.closeWindow.call(this);
    };
    return CloseWindowService;
}(CloseWindow));
CloseWindowService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], CloseWindowService);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__close_window_service__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__close_window_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__close_window_component__ = __webpack_require__(86);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__close_window_component__["a"]; });




/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return totalScore; });
// let dtdTs = $.Deferred();
var url, domainUrl, code, question, order = [], totalScore = 0, // 记录获取服务器时间的本地时间节点
studyCodeUrl = 'content/web/api/getStudyCode', // 获取code
studyTsUrl = 'content/web/api/token/getStudyTs', // 获取token，sessionId的服务器接口
startStudyUrl = '/content/api/oper/study/startStudy', // 开始学习的服务器接口
commitStudyUrl = '/content/api/oper/study/commitStudy', // 提交的服务器接口
exitStudyUrl = '/content/api/oper/study/exitStudy', // 退出的服务器接口
studentListUrl = '/api/newcloud/group/students', // 获取所有的学生列表
groupListGetUrl = '/api/newcloud/group/list', // 获取决策分组
groupListSaveUrl = '/api/newcloud/group/save', // 保存决策分组
evaluationScoreListGetUrl = '/api/newcloud/group/score'; // 获取评估页面分数列表
/**
 * 解析url后面的数据的方法
 * @param search 传入url的search数据部分
 * @returns {{urlObj}} 返回一个以数据为属性的对象
 */
var urlParse = function (search) {
    var urlObj = {};
    if (search === '') {
        // window.location.href='http://content.xiaochejiang.com/warn.html';
    }
    if (search.indexOf('?') !== -1) {
        var dataStr = search.substr(1).split('&');
        for (var i = 0, len = dataStr.length; i < len; i++) {
            var dataStrsin = dataStr[i].split('=');
            urlObj[dataStrsin[0]] = dataStrsin[1];
        }
    }
    if (typeof urlObj.courseNumber === 'undefined' ||
        typeof urlObj.faultNumber === 'undefined' ||
        typeof urlObj.domainUrl === 'undefined' ||
        typeof urlObj.userEmail === 'undefined' ||
        typeof urlObj.domainAccount === 'undefined' ||
        typeof urlObj.userCourseClassId === 'undefined') {
        // window.location.href='http://content.xiaochejiang.com/warn.html';
    }
    return urlObj;
};
/**
 * @author  周博宇
 * 定义与后台通信对象
 * @construtor
 */
var Adapter = (function () {
    function Adapter(handleErrorService, appService) {
        this.handleErrorService = handleErrorService;
        this.appService = appService;
        this.domainAccount = ''; // 当前域名
        this.userEmail = ''; // 当前用户email（当前账号唯一标识）
        this.sessionId = ''; // 当前学习过程唯一标识
        this.token = ''; // 当前学习过程口令
        this.courseNumber = ''; // 当前学习课程编号
        this.faultNumber = ''; // 当前学习故障编号
        this.userCourseClassId = ''; // 随机验证码
        this.type = 1; // 课件类型
        this.seconds = 0; // 学习时间
        this.progress = 0; // 进度
        this.score = 0; // 得分
        this.isComplete = 0; // 是否完成
        this.isPass = 0; // 能否通过
        this.characterA = {
            progress: [],
            score: [],
            handle: []
        }; // 进度、得分、动作详细数据
        this.characterB = {}; // 试题集合
        this.characterC = {
            handle: []
        }; // 自定义参数
        this.courseName = ''; // 课件名称
        this.passCondition = 0; // 通过条件
        this.completeCondition = 0; // 完成条件
        this.serverTime = ''; // 服务器返回时间
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
                            }
                        ],
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
            };
        }
    }
    /**
     * @author 周博宇
     * 初始化必要参数
     */
    Adapter.prototype.init = function () {
        var data = urlParse(location.search);
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
    ;
    /**
     * @author 周博宇
     * 获取token，sessionId
     * @param dtd
     */
    Adapter.prototype.getStudyTs = function (dtd) {
        var _this = this;
        var userEmail = this.userEmail;
        var getStudyTsUrl = domainUrl + studyTsUrl;
        var data1 = {
            'email': this.userEmail,
            'courseNumber': this.courseNumber,
            'userCourseClassId': this.userCourseClassId,
        };
        var getStudyCodeUrl = domainUrl + studyCodeUrl;
        $.ajax({
            type: 'get',
            url: getStudyCodeUrl,
            data: data1,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (data) {
                if (data === '') {
                    _this.handleErrorService.handleError(21);
                }
                else {
                    if (data.errCode === '0' || data.errCode === 0) {
                        code = data.code;
                    }
                    else {
                        // console.log(data.errCode);
                        _this.handleErrorService.handleError(+data.errCode);
                    }
                }
            },
            error: function (jqXHR, textStatus, errorMsg) {
                _this.handleErrorService.handleError(20);
                // console.error(errorMsg);
            }
        }).then(function () {
            var data = { 'userEmail': _this.userEmail, 'code': code };
            $.ajax({
                type: 'get',
                url: getStudyTsUrl,
                data: data,
                dataType: 'jsonp',
                jsonp: 'callback',
                // tslint:disable-next-line:no-shadowed-variable
                success: function (data) {
                    if (data === '') {
                        _this.handleErrorService.handleError(21);
                    }
                    else {
                        if (data.errCode === '0' || data.errCode === 0) {
                            _this.sessionId = data.sessionId;
                            _this.token = data.token;
                            dtd.resolve();
                        }
                        else {
                            // console.log(data.errCode);
                            _this.handleErrorService.handleError(+data.errCode);
                        }
                    }
                },
                error: function (jqXHR, textStatus, errorMsg) {
                    _this.handleErrorService.handleError(20);
                    // console.error(errorMsg);
                },
            });
        });
    };
    ;
    /**
     * @author 周博宇
     * 开始学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    Adapter.prototype.startStudy = function () {
        var _this = this;
        var obj = {};
        obj.adapter = JSON.stringify(this);
        url = 'http:\/\/' + location.host + startStudyUrl;
        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            data: obj,
            success: function (data) {
                if (data.errCode === '0' || data.errCode === 0) {
                    totalScore = data.adapter.totalScore;
                    _this.characterB = JSON.parse(data.adapter.characterB);
                    _this.domainAccount = data.adapter.domainAccount;
                    _this.userEmail = data.adapter.userEmail;
                    _this.sessionId = data.adapter.sessionId;
                    _this.token = data.adapter.token;
                    _this.courseNumber = data.adapter.courseNumber;
                    _this.faultNumber = data.adapter.faultNumber;
                    _this.code = data.adapter.code;
                    _this.type = data.adapter.type;
                    _this.seconds = data.adapter.seconds;
                    _this.progress = data.adapter.progress;
                    _this.score = data.adapter.score;
                    _this.isComplete = data.adapter.isComplete;
                    _this.isPass = data.adapter.isPass;
                    _this.courseName = data.adapter.courseName;
                    _this.passCondition = data.adapter.passCondition;
                    _this.completeCondition = data.adapter.completeCondition;
                    if (data.adapter) {
                        _this.serverTime = data.adapter.serverTime;
                    }
                    _this.characterC = JSON.parse(data.adapter.characterC);
                    _this.setCharacterC(_this.characterC);
                    // 设置characterA
                    _this.setCharacterA(data.adapter.characterA);
                    // progress.rate = this.progress;
                    // paper.rate = this.score;
                }
                else {
                    _this.handleErrorService.handleError(+data.errCode);
                }
                if (data === '') {
                    _this.handleErrorService.handleError(21);
                }
                // console.log(data.errCode);
            },
            error: function (jqXHR, textStatus, errorMsg) {
                console.log(jqXHR, textStatus, errorMsg);
                _this.handleErrorService.handleError(20);
                //  console.error(errorMsg);
            }
        });
    };
    ;
    Adapter.prototype.setCharacterA = function (characterA) {
        var _this = this;
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
        this.characterB['question'].map(function (i, iIndex) {
            var obj2 = Object.assign({}, {
                'catalog': i.catalog,
                'sumScore': 0,
                'score': [],
            });
            i['question'].map(function (k, kIndex) {
                obj2['score'].push(Object.assign({}, {
                    handleArray: [],
                    // id: k.id,
                    isRight: 0,
                    // rate: k.rate,
                    optionArray: [],
                    questionID: k.id,
                }));
            });
            _this.characterA['score'].push(obj2);
        });
        this.characterB['score'].map(function (i, iIndex) {
            _this.characterA.score.map(function (k, kIndex) {
                k['score']
                    .filter(function (l, lIndex) {
                    // console.log(l.questionID, i.questionId);
                    return l.questionID === i.questionId;
                })
                    .map(function (m, mIndex) {
                    m.id = i.id;
                    m.rate = i.rate;
                });
            });
        });
    };
    Adapter.prototype.setCharacterC = function (characterC) {
        this.appService.echo(characterC);
    };
    /**
     * @author 周博宇
     * 提交学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    Adapter.prototype.commitStudy = function () {
        var _this = this;
        var obj1 = {};
        this.characterC = this.appService.datacallback();
        obj1.adapter = JSON.stringify(this);
        url = 'http:\/\/' + location.host + commitStudyUrl;
        $.ajax({
            type: 'post',
            url: url,
            data: obj1,
            dataType: 'json',
            success: function (data) {
                if (data === '') {
                    _this.handleErrorService.handleError(21);
                }
                else {
                    if (data.errCode === '0') {
                        if (data) {
                            if (data) {
                                _this.serverTime = data.serverTime;
                            }
                        }
                    }
                    else {
                        _this.handleErrorService.handleError(+data.errCode);
                    }
                }
            },
            error: function (jqXHR, textStatus, errorMsg) {
                _this.handleErrorService.handleError(20);
            }
        });
    };
    ;
    /**
     * @author 周博宇
     * 退出学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    Adapter.prototype.exitStudy = function (progress, paper, handle) {
        var obj2 = {};
        obj2.adapter = JSON.stringify(this);
        url = 'http:\/\/' + location.host + exitStudyUrl;
        $.ajax({
            type: 'post',
            url: url,
            data: obj2,
            dataType: 'json'
        });
    };
    ;
    return Adapter;
}());
/**
 * 分组类
 */
var Group = (function () {
    function Group(handleErrorService) {
        this.handleErrorService = handleErrorService;
        this.domainAccount = ''; // 当前域名
        this.userEmail = ''; // 当前用户email（当前账号唯一标识）
        this.courseNumber = ''; // 当前学习课程编号
        this.faultNumber = ''; // 当前学习故障编号
        this.userCourseClassId = ''; // 随机验证码
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
            'UserInfo': {},
            'Group': []
        };
    }
    /**
     * @author 周博宇
     * 初始化必要参数
     */
    Group.prototype.init = function () {
        var data = urlParse(location.search);
        this.courseNumber = data.courseNumber;
        this.faultNumber = data.faultNumber;
        domainUrl = data.domainUrl;
        this.userEmail = data.userEmail;
        this.domainAccount = data.domainAccount;
        this.userCourseClassId = data.userCourseClassId;
    };
    ;
    /**
     * 获取所有学生列表
     */
    Group.prototype.getStudentList = function () {
        var _this = this;
        var obj = {};
        obj.PractiseNumber = this.userCourseClassId;
        var obj2 = obj;
        url = 'http:\/\/' + location.host + studentListUrl;
        console.log(url);
        $.ajax({
            type: 'get',
            url: url,
            data: obj2,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                if (data === '') {
                    _this.handleErrorService.handleError(21);
                }
                else if (data) {
                    _this.analysisAllStudent(data);
                }
            },
            error: function (jqXHR, textStatus, errorMsg) {
                _this.handleErrorService.handleError(20);
            }
        });
    };
    ;
    /**
     * 解析所有学生列表
     * @param data 返回的所有学生列表数据
     */
    Group.prototype.analysisAllStudent = function (data) {
        var _this = this;
        this.groupAllStudentList = [];
        data.map(function (k, kIndex) {
            var obj = Object.assign({}, {
                ID: k.ID,
                Name: k.Nickname
            });
            _this.groupAllStudentList.push(obj);
        });
    };
    /**
     * 获取分组列表
     */
    Group.prototype.getGroupList = function () {
        var _this = this;
        var obj = {};
        obj.PractiseNumber = this.userCourseClassId;
        obj.CourseNumber = this.courseNumber;
        var obj2 = obj;
        url = 'http:\/\/' + location.host + groupListGetUrl;
        console.log(obj2);
        $.ajax({
            type: 'get',
            url: url,
            data: obj2,
            dataType: 'json',
            success: function (data) {
                if (data === '') {
                    _this.handleErrorService.handleError(21);
                }
                else if (data) {
                    data.CourseNumber = _this.courseNumber;
                    data.PractiseNumber = _this.userCourseClassId;
                    if (data.Group) {
                        data.Group = JSON.parse(data.Group);
                        _this.groupGroupList = data;
                    }
                    else {
                        _this.analysisGroupList(data);
                    }
                }
            },
            error: function (jqXHR, textStatus, errorMsg) {
                _this.handleErrorService.handleError(20);
            }
        });
    };
    /**
     * 获取所有学生列表
     */
    Group.prototype.saveGroupList = function (param) {
        var _this = this;
        var obj = { CloudGroup: '' };
        var obj2 = Object.assign({}, {
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
            success: function (data) {
            },
            error: function (jqXHR, textStatus, errorMsg) {
                console.log(errorMsg);
                _this.handleErrorService.handleError(20);
            }
        });
    };
    /**
     * 获取评估分数列表
     */
    Group.prototype.getEvaluationList = function () {
        var _this = this;
        var obj = {};
        obj.PractiseNumber = this.userCourseClassId;
        obj.CourseNumber = this.courseNumber;
        var obj2 = obj;
        url = 'http:\/\/' + location.host + evaluationScoreListGetUrl;
        $.ajax({
            type: 'get',
            url: url,
            data: obj2,
            dataType: 'json',
            success: function (data) {
                console.log(data, 'getEvaluationList');
                if (data === '') {
                    _this.handleErrorService.handleError(21);
                }
                else if (data) {
                    if (data.Group) {
                        data.Group = JSON.parse(data.Group);
                        _this.evaluationScoreList = data;
                    }
                    else {
                        console.error('当前无列表--adapter;');
                    }
                }
            },
            error: function (jqXHR, textStatus, errorMsg) {
                _this.handleErrorService.handleError(20);
            }
        });
    };
    /**
     * 默认的分组列表
     * @param data 返回的数据，没有返回数据时，需要占位
     */
    Group.prototype.analysisGroupList = function (data) {
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
    };
    return Group;
}());



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handle_error__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_app_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communication__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationService; });





/**
 * 代理通信的服务
 * @export
 * @class CommunicationService
 */
var CommunicationService = (function () {
    function CommunicationService(handleErrorService, appService) {
        this.handleErrorService = handleErrorService;
        this.appService = appService;
        // 初始化通信业务实例时,注入处理错误的服务
        this.communication = new __WEBPACK_IMPORTED_MODULE_4__communication__["a" /* Communication */](this.handleErrorService, this.appService);
    }
    /**
     * 调用实例的初始化方法
     */
    CommunicationService.prototype.init = function () {
        var _this = this;
        this.communication.init();
        // 非正常退出课程时,调用退出方法
        window.onbeforeunload = function () {
            _this.communication.commit('exit');
        };
    };
    ;
    /**
     * 统一的动作入口
     * @param id 动作id /value对象的id
     * @param flag 故障是否修复
     * @param sub 是否扣分
     * @param value value对象要赋予的值
     */
    CommunicationService.prototype.setAction = function (_a) {
        var id = _a.id, flag = _a.flag, sub = _a.sub, value = _a.value;
        if (value === undefined) {
            // 出发动作
            // this.communication.setHandle(id, flag, sub);
        }
        else {
            // 触发数组对象变更数值
            // this.communication.setCondition(id, value, flag);
        }
    };
    /**
     * 提交数据
     * @param mode 判断提交和退出的标识
     */
    CommunicationService.prototype.commit = function (mode) {
        this.communication.commit(mode);
    };
    ;
    /**
     * 设置进度点
     * @param id 进度点id
     */
    CommunicationService.prototype.setProgress = function (id, allChapter) {
        this.communication.setProgress(id, allChapter);
    };
    ;
    /**
     * 答题
     * @param id 题目id
     * @param optionId 选项id
     */
    CommunicationService.prototype.setQuestion = function (id, optionId) {
        this.communication.setQuestion(id, optionId);
    };
    ;
    return CommunicationService;
}());
CommunicationService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__handle_error__["a" /* HandleErrorService */],
        __WEBPACK_IMPORTED_MODULE_3__index_app_service__["a" /* AppService */]])
], CommunicationService);



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__communication_service__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__communication_service__["a"]; });



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handle_error_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__close_window__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_app_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleErrorComponent; });





/**
 *
 * 处理错误component
 * @export
 * @class HandleErrorComponent
 */
var HandleErrorComponent = (function () {
    function HandleErrorComponent(handleErrorService, closeWindowService, appService) {
        this.handleErrorService = handleErrorService;
        this.closeWindowService = closeWindowService;
        this.appService = appService;
    }
    HandleErrorComponent.prototype.ngOnInit = function () {
    };
    HandleErrorComponent.prototype.closeErrorPopup = function () {
        this.handleErrorService.closeErrorPopup();
        if (this.handleErrorService.closepage) {
            this.closeWindowService.closeWindow();
        }
    };
    return HandleErrorComponent;
}());
HandleErrorComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'handle-error',
        styles: [__webpack_require__(179)],
        template: __webpack_require__(161),
        providers: []
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__handle_error_service__["a" /* HandleErrorService */], __WEBPACK_IMPORTED_MODULE_3__close_window__["a" /* CloseWindowService */], __WEBPACK_IMPORTED_MODULE_4__index_app_service__["a" /* AppService */]])
], HandleErrorComponent);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multimeter_component__ = __webpack_require__(94);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__multimeter_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multimeter_service__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__multimeter_service__["a"]; });




/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_appdata_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_gear_panel_gear_panel_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_handle_error_handle_error_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__testQuestions_testQuestions_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(1);
/* unused harmony export datas */
/* unused harmony export parent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });








var datas = (function () {
    function datas() {
    }
    return datas;
}());

var parent = (function () {
    function parent() {
    }
    return parent;
}());

var ContentComponent = (function () {
    function ContentComponent(appdataService, zone, dashboardService, gearPanelService, handleErrorService, testQuestionsService, homeService) {
        this.appdataService = appdataService;
        this.zone = zone;
        this.dashboardService = dashboardService;
        this.gearPanelService = gearPanelService;
        this.handleErrorService = handleErrorService;
        this.testQuestionsService = testQuestionsService;
        this.homeService = homeService;
        this.isAllowPage = [];
        this.currentNum = 0;
        this.childCurrentNum = 0;
        this.rightnum = 0;
        this.isPaging = true; // 是否翻页
        this.showone = 1;
        this.Rotatenum = 360; // 3d图初始旋转
    }
    ContentComponent.prototype.AfterViewInit = function () {
    };
    ContentComponent.prototype.ngOnDestroy = function () {
    };
    ContentComponent.prototype.ngOnInit = function () {
        this.appdata = new datas();
        this.parents = new parent();
        this.appboolen = this.appdataService.appboolen;
        if (this.showone == 1) {
            this.appdata = this.appdataService.content[this.showone];
            var now = this.appdataService.content[this.showone].type;
            this.swichshow(now, this.appboolen);
        }
    };
    ContentComponent.prototype.ngOnChanges = function () {
        this.appboolen = this.appdataService.appboolen;
        this.showone = this.current;
        this.appdata = this.appdataService.content[this.current];
        this.swichshow(this.appdata.type, this.appboolen);
        this.ChoiceTypeContent();
        if (this.typetextlist[0].imglist) {
            this.typetextlist[0].imglist.map(function (item) {
                item.divShow = false;
            });
        }
        if (this.typetextlist[0].tiplist) {
            this.typetextlist[0].tiplist.textlist.map(function (item) {
                item.isShow = false;
            });
        }
    };
    ContentComponent.prototype.ChoiceTypeContent = function () {
        this.typetitle = this.appdataService.content[this.current].title;
        this.typeimglist = this.appdataService.content[this.current].imglist;
        this.typedescribe = this.appdataService.content[this.current].describe;
        this.typetextlist = this.appdataService.content[this.current].textlist;
        this.typebtnlist = this.appdataService.content[this.current].btnlist;
        this.typevideo = this.appdataService.content[this.current].video;
        this.typetip = this.appdataService.content[this.current].tiplist;
        this.typecheck = this.appdataService.content[this.current].check;
        this.typeIsAllowPageNum = this.appdataService.content[this.current].isAllowPageNum;
        this.isPaging = this.appdataService.content[this.current].isPaging;
        this.isAllowPage = this.appdataService.content[this.current].currentClickTheSet;
    };
    ContentComponent.prototype.swichshow = function (type, appboolen) {
        for (var key in appboolen) {
            if (key == type) {
                this.appboolen[key] = true;
            }
            else {
                this.appboolen[key] = false;
                if (type == '') {
                    this.appboolen.error = true;
                }
            }
        }
    };
    // 电机按钮显示内容
    ContentComponent.prototype.tipContentShow = function (event, typebtnlist, index) {
        if (typebtnlist[index].style.backgroundColor == 'rgb(227, 227, 227)')
            return;
        typebtnlist.map(function (item, index) {
            item.isShow = false;
        });
        if (!this.isClickNextPage(index)) {
            typebtnlist[index + 1].style.backgroundColor = 'rgb(0, 156, 255)';
            typebtnlist[index].style.backgroundColor = 'rgb(115, 201, 255)';
        }
        else {
            typebtnlist.map(function (item, j) {
                item.isShow = false;
                item.style.backgroundColor = index === j ? 'rgb(115, 201, 255)' : 'rgb(0, 156, 255)';
            });
        }
        typebtnlist[index].isShow = true;
    };
    // 判断本页面是否全部学习完成
    ContentComponent.prototype.isClickNextPage = function (index) {
        this.isAllowPage.push(index);
        console.log(this.isAllowPage);
        this.isPaging = Array.from(new Set(this.isAllowPage)).length == this.typeIsAllowPageNum ? true : false;
        this.appdataService.content[this.showone].isPaging = this.isPaging;
        console.log(this.isPaging);
        return this.isPaging;
    };
    // 点击上一页时，判断保存当前页面点击集合
    ContentComponent.prototype.currentClickTheSet = function () {
        this.appdataService.content[this.showone].currentClickTheSet = this.isAllowPage;
    };
    // 点击出现弹窗
    ContentComponent.prototype.tipShow = function (item, index, boolean) {
        item.twinkle = '';
        item.isShow = !item.isShow;
        if (!boolean)
            return;
        // this.isClickNextPage(index);
    };
    // 点击关闭二级页面
    ContentComponent.prototype.childCloseTip = function (childitem) {
        childitem.isShow = false;
    };
    // 点击旋转导航切换
    ContentComponent.prototype.rotateNav = function (item, index) {
        this.currentNum = index;
        this.typetextlist[0].navText.map(function (i, j) {
            i.style.color = j === index ? 'rgb(203, 209, 221)' : 'rgb(3, 50, 129)';
        });
        this.typetextlist[0].content.map(function (i, j) {
            i.isShow = j === index ? true : false;
        });
        this.typetextlist[0].btnText.map(function (i, j) {
            i.isShow = j === index ? true : false;
        });
        this.typetextlist[0].anatomyText.map(function (i, j) {
            i.isShow = j === index ? true : false;
        });
        this.typetextlist[0].imglist.map(function (i, j) {
            i.isShow = j === index ? true : false;
        });
        this.isShowTool(index);
        if (item.isShow) {
            this.typetextlist[0].measureList.map(function (i, j) {
                i.isShow = j === index ? true : false;
            });
        }
        else {
            this.typetextlist[0].measureList.map(function (i, j) {
                i.isShow = false;
            });
        }
        this.homeService.closeAll();
    };
    // 是否显示左侧工具栏
    ContentComponent.prototype.isShowTool = function (index) {
        var _this = this;
        this.typetextlist[0].measureList.map(function (i, j) {
            if (j == index && i.isShowTool) {
                _this.homeService.toolNavIsShow = true;
            }
            else {
                _this.homeService.toolNavIsShow = false;
            }
        });
    };
    // 子页面点击旋转导航切换
    ContentComponent.prototype.childRotateNav = function (childitem, index) {
        this.childCurrentNum = index;
        childitem.childPage.navText.map(function (i, j) {
            i.style.color = j === index ? 'rgb(203, 209, 221)' : 'rgb(3, 50, 129)';
        });
        childitem.childPage.content.map(function (i, j) {
            i.isShow = j === index ? true : false;
        });
        childitem.childPage.btnText.map(function (i, j) {
            i.isShow = j === index ? true : false;
        });
        childitem.childPage.imglist.map(function (i, j) {
            i.isShow = j === index ? true : false;
        });
    };
    // 点击旋转
    ContentComponent.prototype.rotate = function (event, param) {
        if (event.target.style.backgroundColor === 'rgb(170, 170, 170)')
            return;
        this.appdataService.content[this.current].rotateImgIsShow = true;
        this.appdataService.content[this.current].anatomyIsShow = false;
        switch (param) {
            case 'left':
                this.typetextlist[0].imglist[this.currentNum].contentList.push(this.typetextlist[0].imglist[this.currentNum].contentList.shift());
                this.typetextlist[0].imglist[this.currentNum].contentList.map(function (item, index) {
                    item.isShow = index === 0 ? true : false;
                });
                break;
            case 'right':
                this.typetextlist[0].imglist[this.currentNum].contentList.unshift(this.typetextlist[0].imglist[this.currentNum].contentList.pop());
                this.typetextlist[0].imglist[this.currentNum].contentList.map(function (item, index) {
                    item.isShow = index === 0 ? true : false;
                });
                break;
        }
    };
    // 子点击旋转
    ContentComponent.prototype.childRotate = function (event, item, childitem) {
        if (event.target.style.backgroundColor === 'rgb(170, 170, 170)')
            return;
        switch (item.direction) {
            case 'left':
                childitem.childPage.imglist[this.childCurrentNum].contentList.push(childitem.childPage.imglist[this.childCurrentNum].contentList.shift());
                childitem.childPage.imglist[this.childCurrentNum].contentList.map(function (item, index) {
                    item.isShow = index === 0 ? true : false;
                });
                break;
            case 'right':
                childitem.childPage.imglist[this.childCurrentNum].contentList.unshift(childitem.childPage.imglist[this.childCurrentNum].contentList.pop());
                childitem.childPage.imglist[this.childCurrentNum].contentList.map(function (item, index) {
                    item.isShow = index === 0 ? true : false;
                });
                break;
        }
    };
    // 点击显示解剖图
    ContentComponent.prototype.anatomyShow = function (item, index) {
        this.appdataService.content[this.current].rotateImgIsShow = false;
        this.appdataService.content[this.current].anatomyIsShow = true;
    };
    // 顺序点击
    ContentComponent.prototype.sequentialClicks = function (event, index, btnitem, item) {
        console.log(btnitem);
        if (btnitem.isShow) {
            console.log(index);
            if (index + 1 <= item.btnTextList.length - 1) {
                item['btnTextList'][index + 1].isShow = true;
            }
            item.btnTextList.map(function (i, j) {
                i.contentIsShow = j == index ? true : false;
                i.imgShow = j == index ? true : false;
                i.style.backgroundColor = j == index ? 'rgb(163, 213, 245)' : 'rgb(0, 156, 255)';
                if (!i.isShow) {
                    i.style.backgroundColor = 'rgb(203, 205, 207))';
                }
            });
            item.scrIsShow = false;
            this.isClickNextPage(btnitem.splicingParam + "_" + index);
        }
    };
    // 页面内上下翻页
    ContentComponent.prototype.pageClick = function (param, item, index) {
        switch (param) {
            case 'prev':
                if (!index)
                    return;
                this.typetextlist[0].imglist[index].isShow = false;
                this.typetextlist[0].imglist[index - 1].isShow = true;
                break;
            case 'next':
                if (index >= this.typetextlist[0].imglist.length - 1)
                    return;
                this.typetextlist[0].imglist[index].isShow = false;
                console.log(this.typetextlist[0].imglist[index + 1]);
                this.typetextlist[0].imglist[index + 1].isShow = true;
                break;
        }
    };
    ContentComponent.prototype.IsPaging = function () {
        var _this = this;
        if (this.appdataService.content[this.showone].question) {
            var index = this.appdataService.content[this.showone].textlist[0].measureList[this.appdataService.content[this.showone].textlist[0].measureList.length - 1].chapter;
            this.testQuestionsService.testQuestionList[index].forEach(function (item, index) {
                _this.appdataService.content[_this.showone].isPaging = true;
                _this.parents.isPaging = _this.appdataService.content[_this.showone].isPaging;
                if (item.taskInfo !== '恭喜你！蒙的真准！') {
                    _this.appdataService.content[_this.showone].isPaging = false;
                    _this.parents.isPaging = _this.appdataService.content[_this.showone].isPaging;
                    return;
                }
            });
            return this.parents;
        }
        else {
            this.parents.isPaging = this.appdataService.content[this.showone].isPaging;
            this.parents.type = this.appdataService.content[this.current].type;
            return this.parents;
        }
    };
    // 图片切换
    ContentComponent.prototype.changeImg = function (item, index) {
        var _this = this;
        // 未完成学习，没有全部点击完时
        if (this.typetextlist[0].navText.some(function (x) { return x.img3IsShow === true; })) {
            // 索引为0时
            if (index === 0) {
                this.typetextlist[0].navText.map(function (i, j) {
                    if (j === index) {
                        i.img1IsShow = false;
                        i.img2IsShow = true;
                    }
                    else if (!_this.typetextlist[0].navText[j].img3IsShow) {
                        i.img1IsShow = true;
                        i.img2IsShow = false;
                    }
                });
                if (this.typetextlist[0].imglist) {
                    this.typetextlist[0].imglist.map(function (k, l) {
                        k.isShow = l === index ? true : false;
                    });
                }
            }
            // 索引不为0时，按顺序依次点击;并且之前点击过的可回跳
            if (index > 0) {
                if (this.typetextlist[0].navText[index - 1].img2IsShow || this.typetextlist[0].navText[index - 1].img1IsShow) {
                    if (item['img3IsShow'] === true) {
                        // console.log(item['img3IsShow']);
                        item['img3IsShow'] = false;
                        this.typetextlist[0].navText.map(function (i, j) {
                            if (j < index) {
                                i.img1IsShow = true;
                                i.img2IsShow = false;
                            }
                            else if (j === index) {
                                item['img1IsShow'] = false;
                                item['img2IsShow'] = true;
                            }
                        });
                    }
                    else {
                        // console.log(item['img3IsShow']);
                        this.typetextlist[0].navText.map(function (i, j) {
                            if (j === index) {
                                i.img1IsShow = false;
                                i.img2IsShow = true;
                            }
                            else if (!_this.typetextlist[0].navText[j].img3IsShow) {
                                i.img1IsShow = true;
                                i.img2IsShow = false;
                            }
                        });
                    }
                    if (this.typetextlist[0].imglist) {
                        this.typetextlist[0].imglist.map(function (k, l) {
                            k.isShow = l === index ? true : false;
                        });
                    }
                }
                else
                    return;
            }
        }
        else {
            // 全部点击完毕后，可乱序点击
            this.typetextlist[0].navText.map(function (i, j) {
                if (j === index) {
                    i.img1IsShow = false;
                    i.img2IsShow = true;
                }
                else if (!_this.typetextlist[0].navText[j].img3IsShow) {
                    i.img1IsShow = true;
                    i.img2IsShow = false;
                }
            });
            if (this.typetextlist[0].imglist) {
                this.typetextlist[0].imglist.map(function (k, l) {
                    k.isShow = l === index ? true : false;
                });
            }
        }
    };
    // changeImg(item, index) {
    // this.typetextlist[0].navText.map((i, j) => {
    //     if (j === index) {
    //         // i.img3IsShow = false;
    //         i.img1IsShow = false;
    //         i.img2IsShow = true;
    //     } else {
    //         i.img1IsShow = true;
    //         i.img2IsShow = false;
    //         // i.img3IsShow = false;
    //     }
    // });
    // this.typetextlist[0].imglist.map((k, l) => {
    //     k.isShow = l === index ? true : false;
    // })
    // this.typetextlist[0].navText.map((i, j) => {
    //     if (j === index) {
    //         i.img1IsShow = false;
    //         i.img2IsShow = true;
    //     } else {
    //         i.img1IsShow = true;
    //         i.img2IsShow = false;
    //     }
    // });
    // this.typetextlist[0].imglist.map((k, l) => {
    //     k.isShow = l === index ? true : false;
    // })
    // }
    // 视频缓冲条
    ContentComponent.prototype.startBuffer = function (item) {
        var currentBuffer = item.buffered.end(0);
        var maxduration = item.duration;
        var perc = 100 * currentBuffer / maxduration;
        $('.bufferBar').css('width', perc + '%');
        if (currentBuffer < maxduration) {
            // setTimeout(this.startBuffer(item), 5000);
        }
    };
    ;
    // 播放暂停
    ContentComponent.prototype.playpause = function (item) {
        if (item.paused || item.ended) {
            $('.btnPlay').addClass('paused');
            $('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
            item.play();
        }
        else {
            $('.btnPlay').removeClass('paused');
            $('.btnPlay').find('.icon-pause').removeClass('icon-pause').addClass('icon-play');
            item.pause();
        }
    };
    // 时间格式转换 - 00:00
    ContentComponent.prototype.timeFormat = function (seconds) {
        var m = Math.floor(seconds / 60) < 10 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds /
            60);
        var s = Math.floor(seconds - (m * 60)) < 10 ? "0" + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
        return m + ":" + s;
    };
    ;
    // 更新声音
    ContentComponent.prototype.updateVolume = function (item, x, vol) {
        var volume = $('.volume');
        var percentage;
        // 如果volume被指定，直接更新声音
        if (vol) {
            percentage = vol * 100;
        }
        else {
            var position = x - volume.offset().left;
            percentage = 100 * position / volume.width();
        }
        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }
        // 更新声音大小显示条，及视频播放声音
        $('.volumeBar').css('width', percentage + '%');
        item.volume = percentage / 100;
        // 根据声音大小更换声音图标
        if (item.volume == 0) {
            $('.sound').removeClass('sound2').addClass('muted');
        }
        else if (item.volume > 0.5) {
            $('.sound').removeClass('muted').addClass('sound2');
        }
        else {
            $('.sound').removeClass('muted').removeClass('sound2');
        }
    };
    ;
    ContentComponent.prototype.updatebar = function (item, x) {
        var progress = $('.progress');
        // 计算拖拽位置
        // 并更新当前时间
        var maxduration = item.duration;
        var position = x - progress.offset().left;
        var percentage = 100 * position / progress.width();
        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }
        $('.timeBar').css('width', percentage + '%');
        $('.thumb').css('margin-left', percentage - 1 + '%');
        item.currentTime = maxduration * percentage / 100;
    };
    ;
    ContentComponent.prototype.videoMethods = function (item, index, j) {
        this.typetextlist[0].imglist[index].divShow = true;
        this.typetextlist[0].imglist[index].videolist.map(function (k, l) {
            k.isShow = l === j ? true : false;
        });
        var _this = this;
        this.videotimer = setTimeout(function () {
            this.video = $('.myVideo');
            this.video[0].removeAttribute("controls");
            $('.control').fadeIn(500);
            $('.caption').fadeIn(500);
            // 一切开始之前
            this.video.on('loadedmetadata', function () {
                // 设置video属性
                setTimeout(function () {
                    $('.current').text(_this.timeFormat(0));
                    $('.duration').text(_this.timeFormat($('.myVideo')[0].duration));
                }, 0);
                _this.updateVolume($('.myVideo')[0], 0, 0.7);
                // 开始获取video缓冲数据
                // setTimeout(_this.startBuffer($('.myVideo')[0]), 150);
                // 绑定video事件
                $('.videoContainer')
                    .hover(function () {
                    // window.event.cancelBubble = true;//停止冒泡
                    // window.event.returnValue = false;//阻止事件的默认行为
                    $('.control').stop().fadeIn();
                    $('.caption').stop().fadeIn();
                }, function () {
                    if (!volumeDrag && !timeDrag) {
                        $('.control').stop().fadeOut();
                        $('.caption').stop().fadeOut();
                    }
                })
                    .on('click', function () {
                    $('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
                    $(this).unbind('click');
                    // $('.myVideo')[0].play();
                });
            });
            // 显示当前视频播放时间
            this.video.on('timeupdate', function () {
                if ($('.myVideo')[0]) {
                    var currentPos = $('.myVideo')[0].currentTime;
                    var maxduration = $('.myVideo')[0].duration;
                    var perc = 100 * currentPos / maxduration;
                    $('.timeBar').css('width', perc + '%');
                    $('.thumb').css('margin-left', perc - 1 + '%');
                    $('.current').text(_this.timeFormat(currentPos));
                }
            });
            // CONTROLS 事件
            // 点击屏幕和播放按钮
            this.video.on('click', function () {
                // console.log("点击");
                _this.playpause($('.myVideo')[0]);
            });
            $('.btnPlay').on('click', function () {
                _this.playpause($('.myVideo')[0]);
            });
            // 点击全屏按钮
            $('.btnFS').on('click', function () {
                if ($.isFunction($('.myVideo')[0].webkitEnterFullscreen)) {
                    $('.myVideo')[0].webkitEnterFullscreen();
                }
                else if ($.isFunction($('.myVideo')[0].mozRequestFullScreen)) {
                    $('.myVideo')[0].mozRequestFullScreen();
                }
                else if ($.isFunction($('.myVideo')[0].msRequestFullscreen)) {
                    $('.myVideo')[0].msRequestFullscreen();
                }
                else if ($.isFunction($('.myVideo')[0].oRequestFullScreen)) {
                    $('.myVideo')[0].oRequestFullscreen();
                }
                else {
                    console.log("不支持全屏");
                }
            });
            // 点击声音按钮
            $('.sound').click(function () {
                $('.myVideo')[0].muted = !$('.myVideo')[0].muted;
                $(this).toggleClass('muted');
                if ($('.myVideo')[0].muted) {
                    $('.volumeBar').css('width', 0);
                }
                else {
                    $('.volumeBar').css('width', $('.myVideo')[0].volume * 100 + '%');
                }
            });
            // VIDEO 事件
            // video canplay 事件
            this.video.on('canplay', function () {
                $('.loading').fadeOut(100);
            });
            // video canplaythrough 事件
            // 解决 Chrome cache 问题
            var completeloaded = false;
            this.video.on('canplaythrough', function () {
                completeloaded = true;
            });
            // video 结束事件
            this.video.on('ended', function () {
                $('.btnPlay').removeClass('paused');
                $('.myVideo')[0].pause();
            });
            // video 寻址中事件
            this.video.on('seeking', function () {
                // 如果video全部加载完,忽略加载中页面
                if (!completeloaded) {
                    $('.loading').fadeIn(200);
                }
            });
            // video 已寻址事件
            this.video.on('seeked', function () { });
            // video 等待更多数据事件
            this.video.on('waiting', function () {
                $('.loading').fadeIn(200);
            });
            // VIDEO 进度条
            // 点击video时间进度条
            var timeDrag = false; /* 检查拖拽事件 */
            $('.progress').on('mousedown', function (e) {
                timeDrag = true;
                _this.updatebar($('.myVideo')[0], e.pageX);
            });
            $(document).on('mouseup', function (e) {
                if (timeDrag) {
                    timeDrag = false;
                    _this.updatebar($('.myVideo')[0], e.pageX);
                }
            });
            $(document).on('mousemove', function (e) {
                if (timeDrag) {
                    _this.updatebar($('.myVideo')[0], e.pageX);
                }
            });
            // 声音调节
            var volumeDrag = false;
            $('.volume').on('mousedown', function (e) {
                volumeDrag = true;
                $('.myVideo')[0].muted = false;
                $('.sound').removeClass('muted');
                _this.updateVolume($('.myVideo')[0], e.pageX);
            });
            $(document).on('mouseup', function (e) {
                if (volumeDrag) {
                    volumeDrag = false;
                    _this.updateVolume($('.myVideo')[0], e.pageX);
                }
            });
            $(document).on('mousemove', function (e) {
                if (volumeDrag) {
                    _this.updateVolume($('.myVideo')[0], e.pageX);
                }
            });
        }, 0);
    };
    ContentComponent.prototype.closeVideo = function (item, index, j) {
        this.typetextlist[0].imglist[index].divShow = false;
        // this.typetextlist[0].imglist[index].videolist.map((k, l) => {
        //     k.isShow = l === j ? true : false;
        // });
    };
    return ContentComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], ContentComponent.prototype, "current", void 0);
ContentComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'magotan-content',
        providers: [],
        template: __webpack_require__(165),
        styles: [__webpack_require__(183)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__index_appdata_service__["a" /* AppdataService */],
        __WEBPACK_IMPORTED_MODULE_7__angular_core__["NgZone"],
        __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_2__components_gear_panel_gear_panel_service__["a" /* GearPanelService */],
        __WEBPACK_IMPORTED_MODULE_4__components_handle_error_handle_error_service__["a" /* HandleErrorService */],
        __WEBPACK_IMPORTED_MODULE_5__testQuestions_testQuestions_service__["a" /* TestQuestionsService */],
        __WEBPACK_IMPORTED_MODULE_6__home_home_service__["a" /* HomeService */]])
], ContentComponent);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });


var HelpComponent = (function () {
    function HelpComponent() {
        this.childEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    // 生命周期钩子函数
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.return = function () {
        this.childEvent.emit(this.values);
    };
    return HelpComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], HelpComponent.prototype, "values", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], HelpComponent.prototype, "childEvent", void 0);
HelpComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'magotan-help',
        providers: [],
        template: __webpack_require__(166),
        styles: [__webpack_require__(184)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], HelpComponent);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(117);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__(18);
/* unused harmony namespace reexport */




/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__replace_component__ = __webpack_require__(118);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__replace_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__replace_service__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__replace_service__["a"]; });




/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replace_mock__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaceService; });



var ReplaceService = (function () {
    function ReplaceService() {
    }
    ReplaceService.prototype.getReplaceChangeState = function () {
        return __WEBPACK_IMPORTED_MODULE_2__replace_mock__["a" /* ReplaceChangeState */];
    };
    return ReplaceService;
}());
ReplaceService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], ReplaceService);



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "12fc160800285847a53d4592b2357737.ttf";

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(211)

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(451)

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(551)

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_app_module__ = __webpack_require__(113);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__index_app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_appdata_service__ = __webpack_require__(15);
/* unused harmony namespace reexport */




/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(212)

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(214)

/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flyIn; });

var flyIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flyIn', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => red', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ background: 'pink' }),
            // style({ opacity: 1, transform: 'translateX(15px)', offset: 0.8 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ background: 'red' })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => pink', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ background: 'red' }),
            // style({ opacity: 1, transform: 'translateX(15px)', offset: 0.8 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ background: 'pink' })
        ])),
    ]),
    // transition('* => void', [
    //     animate(500, keyframes([
    //         style({ opacity: 1, transform: 'translateX(0px)',  }),
    //         style({ opacity: 0, transform: 'translateX(-1000px)',  }),
    //         // style({ opacity: 1, transform: 'translateX(15px)', offset: 0.8 }),
    //     ])),
    // ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => right', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateX(1000px)', offset: 0 }),
            // style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.8 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => down', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateY(-600px)', offset: 0 }),
            // style({ opacity: 1, transform: 'translateY(15px)', offset: 0.8 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => up', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateY(600px)', offset: 0 }),
            // style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.8 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
        ])),
    ]),
    // transition('void => rotate', [
    //   animate(1000, keyframes([
    //     style({ transform: 'rotate(0deg)'}),
    //     style({ transform: 'rotate(-50deg)'})
    //   ])),
    // ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => left130', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(-130px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => right80', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(81px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => right80', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(-61px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(80px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => up210', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(-210px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => up21', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(-21px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => up211', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(-211px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => down36', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(36px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => left400', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(-400px)', }),
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => left170', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(-170px)', }),
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => right440', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(440px)', }),
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => right200', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(200px)', }),
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => leftTop150', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translate(0px,0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translate(-200px,-65px)', }),
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => down80', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(80px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => down40', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(1500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(40px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => down150', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(1500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(150px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => left200', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(1500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(-200px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => leftTop240', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateX(0px)', }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translate(-240px,-120px)', })
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => light3', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(3000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => light2', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(2000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => fadein', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => fadeout', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, }),
        ])),
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('rotate1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotate(15deg)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('rotate2', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'rotate(-50deg)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('rotate1 => rotate2', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s 100ms ease-out')),
]);


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return halo; });

var halo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('haloless', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s linear', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0.2, }),
        ])),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s linear', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0.2, }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, }),
        ])),
    ]),
]);


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_app_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonClickComponent; });




var ButtonClickComponent = (function () {
    function ButtonClickComponent(element, appService) {
        this.appService = appService;
        this.publishEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        // console.log(element);
        this.nativeElement = element.nativeElement;
        this.style = {};
    }
    // @Output('close') closeEvent = new EventEmitter<void>();
    ButtonClickComponent.prototype.onmouseenter = function (e) {
        // console.log(e);
        if (this.data.currentState.style.hover)
            Object.assign(this.data.currentStyle, this.data.currentState.style.hover);
    };
    ButtonClickComponent.prototype.onmouseleave = function (e) {
        // console.log(e);
        Object.assign(this.data.currentStyle, this.data.currentState.style.default);
        // console.log(this.data.currentState.style.default);
    };
    ButtonClickComponent.prototype.ngOnInit = function () {
        this.data = this.dataConf || {};
        // console.log(this.data);
        // Object.assign(this.style, this.data.currentState.style.default);
        // this.style = this.data.currentState.style.currentStyle;
        this.addEvent(this.data.publish);
    };
    // @HostListener('click', ['$event']) onClick(e) {
    //     console.log(e);
    //     this.publishEvent.emit(e);
    //     console.log(this.dataConf);
    // }
    //
    ButtonClickComponent.prototype.setStyle = function (item) {
        // console.log(this.data.style);
        // console.log(this.data.stateArray[this.data.initialStateID].style);
        if (!this.data.currentStyle)
            return;
        var style = this.data.currentStyle;
        // const style = this.style;
        if (!style)
            return;
        var styles = {
            'left': parseInt(style.positionLeft, 10) + 'px',
            'right': parseInt(style.positionRight, 10) + 'px',
            'top': parseInt(style.positionTop, 10) + 'px',
            'width': parseInt(style.width, 10) + 'px',
            'height': parseInt(style.height, 10) + 'px',
            'textAlign': style.textAlign,
            'zIndex': style.zIndex,
            'backgroundImage': 'url("' + style.backgroundImage + '")',
            'backgroundSize': style.backgroundSize,
            'display': style.display,
            'border': style.border,
            'boxShadow': style.boxShadow,
            'backgroundColor': style.backgroundColor,
            'borderRadius': style.borderRadius,
            'cursor': style.cursor,
            'lineHeight': style.lineHeight + 'px',
            'fontWeight': style.fontWeight,
            'color': style.color,
            'fontSize': style.fontSize + 'px',
        };
        return styles;
    };
    ButtonClickComponent.prototype.setTextStyle = function (item) {
        if (!item.style)
            return;
        var styles = {
            'color': item.style.color,
            'fontSize': parseInt(item.style.fontSize, 10) + 'px',
            'fontWeight': item.style.fontWeight,
            'textDecoration': item.style.textDecoration,
            'textAlign': item.style.textAlign,
            'lineHeight': parseInt(item.style.lineHeight, 10) + 'px',
        };
        return styles;
    };
    // 根据属性的值对数组排序
    // 监听事件
    ButtonClickComponent.prototype.addEvent = function (eventObject) {
        var _this = this;
        for (var key in eventObject) {
            if (eventObject.hasOwnProperty(key)) {
                // console.log(key);
                this.nativeElement.addEventListener(key, function (e) {
                    // console.log(e, this);
                    console.log(_this.data);
                    if (_this.data.id === 'page01-returnPricinple' && _this.data.currentStateID === 'state01') {
                        $('.redCircle').show();
                        _this.appService.returnPricinple = false;
                        $('.textInfoBox').hide();
                        $('.theory').hide();
                        setTimeout(function () {
                            $('.textInfoBox').fadeIn(300);
                            $('.theory').fadeIn();
                        }, 500);
                        $('.analysis-pic').show();
                        $('.animate-pic').hide();
                        $('.zhizhen-pic').hide();
                        _this.appService.showZhizhenAnimatePic = false;
                        $('.zhizhen-animate-pic').hide();
                    }
                    _this.publishEvent.emit(e);
                });
            }
        }
    };
    return ButtonClickComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('data'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], ButtonClickComponent.prototype, "dataConf", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])('event'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], ButtonClickComponent.prototype, "publishEvent", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('mouseenter', ['$event']),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [Object]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:returntype", void 0)
], ButtonClickComponent.prototype, "onmouseenter", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('mouseleave', ['$event']),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [Object]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:returntype", void 0)
], ButtonClickComponent.prototype, "onmouseleave", null);
ButtonClickComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'sgm-buttonclick',
        template: __webpack_require__(157),
        styles: [__webpack_require__(175)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* flyIn */],
            __WEBPACK_IMPORTED_MODULE_2__animations__["b" /* halo */],
        ],
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_3__index_app_service__["a" /* AppService */]])
], ButtonClickComponent);



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttonClick_component__ = __webpack_require__(84);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__buttonClick_component__["a"]; });



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__close_window_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communication_communication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_app_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseWindowComponent; });






var CloseWindowComponent = (function () {
    function CloseWindowComponent(closeWindowService, communicationService, appService, router) {
        this.closeWindowService = closeWindowService;
        this.communicationService = communicationService;
        this.appService = appService;
        this.router = router;
        this.publishEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.modal = true;
    }
    CloseWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('注册非正常退出课程事件');
        // 非正常退出课程时,调用退出方法
        window.onbeforeunload = function () {
            _this.closeWindow();
        };
    };
    CloseWindowComponent.prototype.exitStudy = function () {
        this.modal = true;
    };
    CloseWindowComponent.prototype.closeWindow = function () {
        var _this = this;
        this.communicationService.commit('commit');
        // this.appService.datacallback()
        // this.appService.suspendData.router = this.router.routerState.snapshot.url;
        // this.router.navigate(['/home']);
        // debugger
        // 保存进度
        // $.xcj.scorm.api.setSuspendData(JSON.stringify(this.appService.suspendData));
        // 提交数据
        // $.xcj.scorm.api.doCommit();
        // 平台退出
        // $.xcj.scorm.api.doQuit();
        setTimeout(function () {
            _this.closeWindowService.closeWindow();
        }, 800);
    };
    CloseWindowComponent.prototype.reStudy = function () {
        this.modal = false;
        this.publishEvent.emit();
    };
    return CloseWindowComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], CloseWindowComponent.prototype, "publishEvent", void 0);
CloseWindowComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'close-window',
        styles: [__webpack_require__(176)],
        template: __webpack_require__(158)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__close_window_service__["a" /* CloseWindowService */],
        __WEBPACK_IMPORTED_MODULE_3__communication_communication_service__["a" /* CommunicationService */],
        __WEBPACK_IMPORTED_MODULE_4__index_app_service__["a" /* AppService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
], CloseWindowComponent);



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_appdata_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataObject__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Communication; });



/**
 * 通信类
 * @class Communication
 */
var Communication = (function () {
    /**
     * 初始化各个实例，并调用实例的初始化方法
     */
    function Communication(handleErrorService, appService) {
        this.handleErrorService = handleErrorService;
        this.appService = appService;
        this.faultType = '';
        this.questionOrder = [];
        this.seconds = 0;
        this.result = false;
        this.isAuto = true; // 是否自动提交
        this.isAutoSeconds = '120000'; // 自动提交间隔时间
    }
    Communication.prototype.init = function () {
        var _this = this;
        this.appdataService = new __WEBPACK_IMPORTED_MODULE_0__index_appdata_service__["a" /* AppdataService */]();
        this.adapter = new __WEBPACK_IMPORTED_MODULE_1__adapter__["a" /* Adapter */](this.handleErrorService, this.appService);
        this.group = new __WEBPACK_IMPORTED_MODULE_1__adapter__["b" /* Group */](this.handleErrorService);
        this.progressArray = new __WEBPACK_IMPORTED_MODULE_2__dataObject__["a" /* ProgressArray */]();
        this.paper = new __WEBPACK_IMPORTED_MODULE_2__dataObject__["b" /* Paper */]();
        this.handleArray = new __WEBPACK_IMPORTED_MODULE_2__dataObject__["c" /* HandleArray */]();
        this.adapter.init();
        this.group.init();
        var dtd = $.Deferred();
        dtd.promise(this.adapter.getStudyTs);
        this.adapter.getStudyTs.done(function () {
            // this.group.getStudentList();
            // this.group.getGroupList();
            // this.group.getEvaluationList();
            _this.adapter.startStudy();
        });
        this.adapter.getStudyTs(dtd);
        this.faultType = this.adapter.faultNumber || 'SBT_VER_ES_ST_001_FAULT';
        this.clock = new Date().getTime();
        if (this.isAuto) {
            setInterval(function () {
                _this.adapter.characterC = _this.appService.datacallback();
                _this.commit('commit');
            }, this.isAutoSeconds);
        }
    };
    ;
    /**
     * 提交数据
     * @param mode 判断提交和退出的标识
     */
    Communication.prototype.commit = function (mode) {
        this.seconds = Math.round((new Date().getTime() - this.clock) / 1000);
        if (this.seconds > 150) {
        }
        this.adapter.seconds += this.seconds;
        if (mode === 'commit') {
            this.adapter.commitStudy();
        }
        else if (mode === 'exit') {
            this.adapter.exitStudy(this.progressArray, this.paper, this.handleArray);
        }
        this.seconds = 0;
        this.clock = new Date().getTime();
    };
    ;
    /**
     * 设置进度点
     * @param id 进度点id
     */
    Communication.prototype.setProgress = function (id, allChapter) {
        if (id) {
            this.adapter.characterA.progress.push(id);
        }
        this.adapter.characterA.progress = Array.from(new Set(this.adapter.characterA.progress));
        var currentPercent = (this.adapter.characterA.progress.length / allChapter) * 100;
        this.adapter.progress = Number(parseInt(String(currentPercent), 10));
        console.log(this.adapter.characterA.progress.length, allChapter, this.adapter.progress);
    };
    ;
    /**
     * 答题
     * @param id 题目id
     * @param optionId 选项id
     */
    Communication.prototype.setQuestion = function (id, optionId) {
        this.paper.setQuestion(id, optionId);
    };
    ;
    /**
     * 出发动作
     * @param id 动作id
     * @param flag 故障是否修复
     * @param sub 是否扣分
     */
    Communication.prototype.setHandle = function (id, flag, sub) {
        if (this.adapter) {
            var time = this.seconds * 1000 + this.adapter.serverTime;
            this.handleArray.setHandle(id, this.progressArray, this.paper, time, flag, sub);
        }
    };
    ;
    /**
     * 触发数组对象变更数值
     * @param id value对象的id
     * @param value value对象要赋予的值
     * @param flag 故障是否修复
     */
    Communication.prototype.setCondition = function (id, value, flag) {
        var hid = this.handleArray.setCondition(id, value);
        this.setHandle(hid, flag, null);
    };
    return Communication;
}());

// export var communication = new Communication;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__(89);
/* unused harmony export DescriptionObject */
/* unused harmony export ConditionObject */
/* unused harmony export HandleObject */
/* unused harmony export DesOptionObject */
/* unused harmony export OptionObject */
/* unused harmony export ExclusiveObject */
/* unused harmony export QuestionObject */
/* unused harmony export ProgressObject */
/* unused harmony export ScoreObject */
/* unused harmony export ValueObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Paper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HandleArray; });
/**
 * @author  谢国亮
 * @update  bingur
 * 定义对平台数据处理方法
 */


var ProgressArray = (function () {
    function ProgressArray() {
        this.progressMap = new __WEBPACK_IMPORTED_MODULE_1__map__["a" /* XMap */](); // 进度点点对象集合
        this.rate = 0; // array中所有isPass为true的rate之和
        this.progressStr = []; // array中所有isPass为true的id
        this.isUpdate = false; // 是否更新
        // console.log('progre',Map);
    }
    /**
     *
     * 更新progressStr
     */
    ProgressArray.prototype.sumProgressStr = function () {
        var progressArray = [];
        if (this.isUpdate) {
            var progressObject_1 = function (id) {
                this.id = id;
            };
            this.progressMap.eachMap(function (key, value) {
                if (value.isPass) {
                    progressArray.push(new progressObject_1(value.id));
                }
            });
            if (progressArray.length !== 0) {
                this.progressStr = progressArray;
            }
            this.isUpdate = false;
        }
    };
    ;
    /**
     *
     * 进度点汇总方法
     */
    ProgressArray.prototype.sumRate = function () {
        var sum = 0, allRate = 0;
        this.progressMap.eachMap(function (key, value) {
            if (value.isPass) {
                sum += parseFloat(value.rate);
                // console.log('做了的',value);
            }
            // console.log(sum);
            allRate += parseFloat(value.rate);
            // console.log('所有的',value);
            // console.log('allRate-'+allRate);
        });
        this.rate = (sum / allRate * 100).toFixed(2);
        // console.log(sum+'+++++++++='+allRate)
        // console.log(' this.rate--'+ this.rate)
    };
    ;
    /**
     *
     * 触发进度点
     * @param progressID
     */
    ProgressArray.prototype.setProgress = function (progressID) {
        // console.log(progressID)
        if (this.progressMap.find(progressID)) {
            this.progressMap.get(progressID).isPass = true;
            this.isUpdate = true;
        }
    };
    ;
    return ProgressArray;
}());
;
/**
 *
 * 定义进度基本数据对象
 * @param id
 * @param rate
 * @constructor
 */
var ProgressObject = (function () {
    function ProgressObject(id, rate) {
        this.id = id; // 进度点编号
        this.rate = rate; // 所占比例
        this.isPass = false; // 该进度点是否通过
        this.handleArray = []; // 关联动作项集合
    }
    return ProgressObject;
}());
;
/**
 *
 * 定义试题数据对象paper
 * @constructor
 */
var Paper = (function () {
    function Paper() {
        this.scoreMap = new __WEBPACK_IMPORTED_MODULE_1__map__["a" /* XMap */](); // 得分点对象集合
        this.questionArray = []; // 试题对象集合
        this.exclusiveArray = []; // 互斥得分项集合
        this.rate = 0; // 得分
        this.scoresStr = []; // scoreArray数组转换的json
        this.isUpdate = true; // scoresStr是否已更新
    }
    /**
     *  计算rate
     */
    Paper.prototype.sumRate = function () {
        var sumRate = 0, score = 0, flag = false;
        this.scoreMap.eachMap(function (key, value) {
            if (value.rate !== '-5') {
                sumRate += Number(value.rate);
            }
        });
        this.scoreMap.eachMap(function (key, value) {
            if (value.isRight && value.rate !== '-5') {
                score += parseFloat(value.rate / sumRate + '') * __WEBPACK_IMPORTED_MODULE_0__adapter__["c" /* totalScore */];
            }
            if (value.isRight && value.rate === '-5') {
                flag = true;
            }
            else {
                flag = false;
            }
        });
        if (flag) {
            score = score.toFixed(2) - 5;
        }
        this.rate = score.toFixed(2);
        // console.log('this.rate++++'+this.rate<0);
        this.rate = this.rate < 0 ? 0 : this.rate;
        // console.log('sumRate---'+sumRate);
        // console.log('得分---****'+this.rate);
        // 计算互斥得分项有没有同时得分,如果有，在rate中扣除优先级较低的得分项比例；
        if (this.exclusiveArray.length) {
            var priorityId = void 0, flag_1 = true;
            for (var i = 0; i < this.exclusiveArray.length; i++) {
                for (var j = 0; j < this.exclusiveArray[i].idArray.length; j++) {
                    if (!this.scoreMap.get(this.exclusiveArray[i].idArray[j]).isRight) {
                        flag_1 = false;
                    }
                }
                if (flag_1) {
                    for (var k = 0; k < this.exclusiveArray[i].idArray.length; k++) {
                        this.rate - this.scoreMap.get(this.exclusiveArray[i].idArray[k]).rate;
                    }
                }
            }
        }
        this.rate < 0 ? this.rate = 0 : null;
    };
    ;
    /**
     * 更新scoresStr
     */
    Paper.prototype.sumScoresStr = function () {
        var scoreArray = [];
        if (this.isUpdate) {
            var scoreObject_1 = function (id, isRight, questionID, optionArray, handleArray) {
                this.id = id;
                this.isRight = Number(isRight);
                this.questionID = questionID;
                this.optionArray = [];
                this.handleArray = [];
                if (optionArray.length) {
                    for (var i = 0; i < optionArray.length; i++) {
                        var obj = {};
                        obj.id = optionArray[i].id;
                        obj.optionArray = [];
                        if (optionArray[i].optionArray.length) {
                            for (var k = 0; k < optionArray[i].optionArray.length; k++) {
                                obj.optionArray.push(optionArray[i].optionArray[k].id);
                            }
                        }
                        this.optionArray.push(obj);
                    }
                }
                if (handleArray.length) {
                    for (var j = 0; j < handleArray.length; j++) {
                        var obj = {};
                        obj.id = handleArray[j].id;
                        obj.isAction = Number(handleArray[j].isAction);
                        this.handleArray.push(obj);
                    }
                }
            };
            this.scoreMap.eachMap(function (key, value) {
                scoreArray.push(new scoreObject_1(value.id, value.isRight, value.questionID, value.optionArray, value.handleArray));
            });
            if (scoreArray.length !== 0) {
                this.scoresStr = scoreArray;
            }
            this.isUpdate = false;
        }
    };
    ;
    /**
     *
     * @param questionID
     * @param optionIDs
     */
    Paper.prototype.setQuestion = function (questionID, optionIDs) {
        var optionIds = optionIDs.split(',');
        var scoreId, array = [], rightAns = [], rightAnsMap = new __WEBPACK_IMPORTED_MODULE_1__map__["a" /* XMap */]();
        this.scoreMap.eachMap(function (key, value) {
            if (value.questionID === questionID) {
                scoreId = value.id;
            }
        });
        if (scoreId) {
            var scoreObject = this.scoreMap.get(scoreId);
            var questionArray = this.questionArray;
            var optionMap_1 = new __WEBPACK_IMPORTED_MODULE_1__map__["a" /* XMap */]();
            ~function findQuestion(questionArray) {
                for (var i = 0; i < questionArray.length; i++) {
                    if (questionArray[i].id === questionID) {
                        for (var j = 0; j < questionArray[i].optionArray.length; j++) {
                            if (questionArray[i].optionArray[j].isRight === '1') {
                                rightAnsMap.put(questionArray[i].optionArray[j].id, questionArray[i].optionArray[j].id);
                            }
                        }
                        // findOption(questionArray[i].optionArray);
                        var _optionArray = questionArray[i].optionArray;
                        for (var i_1 = 0; i_1 < optionIds.length; i_1++) {
                            for (var j = 0; j < _optionArray.length; j++) {
                                if (_optionArray[j].id === optionIds[i_1]) {
                                    optionMap_1.put(_optionArray[j].id, _optionArray[j]);
                                }
                                if (_optionArray[j]._optionArray.length !== '0') {
                                    for (var k = 0; k < _optionArray[j]._optionArray.length; k++) {
                                        if (_optionArray[j]._optionArray[k].isRight === '1') {
                                            rightAnsMap.put(_optionArray[j]._optionArray[k].id, _optionArray[j]._optionArray[k].id);
                                        }
                                    }
                                    arguments.callee(_optionArray[j]._optionArray);
                                }
                            }
                        }
                    }
                    else {
                        if (questionArray[i].questionArray.length !== '0') {
                            arguments.callee(questionArray[i].questionArray);
                        }
                    }
                }
            }(questionArray);
            rightAnsMap.eachMap(function (key, value) {
                rightAns.push(value);
            });
            optionMap_1.eachMap(function (key, value) {
                array.push(value);
            });
            scoreObject.optionArray = array.concat();
            // 判断用户选择是否正确
            var flag = true;
            for (var i = 0; i < rightAns.length; i++) {
                if (!optionMap_1.find(rightAns[i])) {
                    flag = false;
                }
            }
            if (flag && optionMap_1.size() === rightAns.length) {
                if (!scoreObject.isRight) {
                    scoreObject.isRight = true;
                }
            }
            else {
                if (scoreObject.isRight) {
                    scoreObject.isRight = false;
                }
            }
        }
        this.isUpdate = true;
        // console.log(scoreObject.id+'-----'+scoreObject.isRight+'%%%%'+scoreObject.rate);
    };
    ;
    return Paper;
}());
/**
 * 定义得分基本数据对象scoreObject
 * @param id
 * @param rate
 * @param questionID
 * @constructor
 */
var ScoreObject = (function () {
    function ScoreObject(id, rate, questionID) {
        this.id = id; // 得分点编号
        this.rate = rate; // 所占比例
        this.isRight = false; // 该得分点是否通过
        this.questionID = questionID; // 该得分点是否通过
        this.optionArray = []; // 选项数组
        this.handleArray = []; // 关联动作项集合
    }
    return ScoreObject;
}());
/**
 *
 * @param id
 * @param rate
 * @param type
 * @param description
 * @param kp
 * @param remark
 * @constructor
 */
var QuestionObject = (function () {
    function QuestionObject(id, rate, type, description, kp, remark) {
        this.id = id; // 试题编号
        this.rate = rate; // 所占比例
        this.type = type; // 题型
        this.description = description; // 题干
        this.optionArray = []; // 选项数组
        this.kp = kp; // 知识点
        this.remark = remark; // 备注
        this.questionArray = []; // 子试题数组
    }
    return QuestionObject;
}());
/**
 *
 * 定义互斥得分项对象exclusiveObject
 * @param idArray
 * @param priorityId
 * @constructor
 */
var ExclusiveObject = (function () {
    function ExclusiveObject(idArray, priorityId) {
        this.idArray = idArray; // 得分项数组
        this.priorityId = priorityId; //
    }
    return ExclusiveObject;
}());
/**
 *
 * 定义题干基本数据对象descriptionObject
 * @param tdArray
 * @param optionArray
 * @constructor
 */
var DescriptionObject = (function () {
    function DescriptionObject(tdArray, optionArray) {
        this.tdArray = tdArray; // 数组中每一项表示一个td中的内容
        this.optionArray = optionArray; // 数组中每一项表示为一个td；td内显示option
    }
    return DescriptionObject;
}());
/**
 *
 * 定义选项基本数据对象optionObject
 * @param id
 * @param description
 * @param isRight
 * @constructor
 */
var OptionObject = (function () {
    function OptionObject(id, description, isRight) {
        this.id = id; // 选项编号
        this.description = description; // 描述
        this.isRight = isRight; // 是否是正确答案
        this.optionArray = []; // 子选项集合
    }
    return OptionObject;
}());
/**
 *
 * @param linkOptionID
 * @param description
 * @param isSub
 * @constructor
 */
var DesOptionObject = (function () {
    function DesOptionObject(linkOptionID, description, isSub) {
        this.linkOptionID = linkOptionID; // 关联选项ID
        this.description = description; // 描述
        this.isSub = isSub;
    }
    return DesOptionObject;
}());
/**
 *
 * 定义操作数据对象handleArray
 * @constructor
 */
var HandleArray = (function () {
    function HandleArray() {
        this.handleArray = []; // 操作对象集合，记录用户操作，只进行累加
        this.actionMap = new __WEBPACK_IMPORTED_MODULE_1__map__["a" /* XMap */](); // 对应xml中动作表动作
        this.valueMap = new __WEBPACK_IMPORTED_MODULE_1__map__["a" /* XMap */](); // 作为条件比对的数值对象集合
        this.handleStr = []; // handleArray数组转换的json
        this.isUpdate = false; // handleStr是否已更新
        this.reHandle = new __WEBPACK_IMPORTED_MODULE_1__map__["a" /* XMap */]();
    }
    /**
     * 添加动作
     * @param handleID
     * @param progress
     * @param paper
     * @param time
     * @param flag  是否要计算这个动作的分数
     * @param sub   是否要减去这个动作的分数
     */
    HandleArray.prototype.setHandle = function (handleID, progress, paper, time, flag, sub) {
        flag = flag || 0;
        sub = sub || 0;
        var preIsAction, paperFlag = true, progressFlag = true, isCondition = false;
        if (handleID === '')
            return;
        if (this.actionMap.find(handleID)) {
            this.actionMap.get(handleID).conditionMap.eachMap(function (key, value) {
                value.isAction = false;
            });
            preIsAction = this.actionMap.get(handleID).isAction;
            this.actionMap.get(handleID).isAction = true;
            this.actionMap.get(handleID).time = time;
            if (sub !== '1' && this.handleArray.indexOf(this.actionMap.get(handleID)) === -1) {
                this.handleArray.push(this.actionMap.get(handleID));
            }
            this.isUpdate = true;
            if (flag === '0') {
                if (paper.scoreMap.find(this.actionMap.get(handleID).SID)) {
                    if (!preIsAction) {
                        var handleArray = paper.scoreMap
                            .get(this.actionMap.get(handleID).SID)
                            .handleArray;
                        for (var i = 0; i < handleArray.length; i++) {
                            if (!handleArray[i].isAction) {
                                paperFlag = false;
                            }
                        }
                        if (paperFlag) {
                            paper.scoreMap.get(this.actionMap.get(handleID).SID).isRight = true;
                            // this.actionMap.get(handleID).score=paper.scoreMap.get(this.actionMap.get(handleID).SID).score;
                            paper.isUpdate = true;
                        }
                    }
                }
            }
            if (sub === '1') {
                if (paper.scoreMap.find(this.actionMap.get(handleID).SID)) {
                    this.actionMap.get(handleID).isAction = false;
                    paper.scoreMap.get(this.actionMap.get(handleID).SID).isRight = false;
                    paper.isUpdate = true;
                }
            }
            if (progress.progressMap) {
                if (progress.progressMap.find(this.actionMap.get(handleID).PID)) {
                    if (!preIsAction) {
                        var prehandleArray = progress.progressMap
                            .get(this.actionMap.get(handleID).PID)
                            .handleArray;
                        for (var i = 0; i < prehandleArray.length; i++) {
                            if (!prehandleArray[i].isAction) {
                                progressFlag = false;
                            }
                        }
                        if (progressFlag) {
                            progress.progressMap
                                .get(this.actionMap.get(handleID).PID)
                                .isPass = true;
                            progress.isUpdate = true;
                        }
                    }
                }
            }
        }
    };
    ;
    /**
     * 更新handle
     */
    HandleArray.prototype.sumHandleStr = function () {
        var handleArray = [];
        if (this.isUpdate) {
            var handleObject = function (id, time, score) {
                this.id = id;
                this.time = time;
                this.score = score;
            };
            for (var i = 0; i < this.handleArray.length; i++) {
                handleArray.push(new handleObject(this.handleArray[i].id, this.handleArray[i].time, this.handleArray[i].score));
                // console.log(this.handleArray[i].isAction);
                if (!this.handleArray[i].isAction) {
                    var handle = {
                        id: this.handleArray[i].id,
                        time: this.handleArray[i].time
                    };
                    this.reHandle.put(this.handleArray[i].id, handle);
                }
                else {
                    if (this.reHandle.find(this.handleArray[i].id)) {
                        this.reHandle.delete(this.handleArray[i].id);
                    }
                }
                // console.log(this.reHandle);
            }
            if (handleArray.length !== 0) {
                this.handleStr = handleArray;
            }
            this.isUpdate = false;
        }
    };
    ;
    /**
     *
     * 触发数组对象变更数值
     * @param id
     * @param value
     */
    HandleArray.prototype.setCondition = function (id, value) {
        var arrayHID = '', vid = '';
        var valueObject = this.valueMap, actionMap = this.actionMap;
        if (valueObject.find(id)) {
            valueObject.get(id).value = value;
            valueObject.get(id).cdtMap.eachMap(function (key, value) {
                var tFlag = false;
                if ('cdtValue' in value) {
                    var cdtValueArray = [];
                    if (value.cdtValue) {
                        cdtValueArray = value.cdtValue.split(',');
                    }
                    for (var i = 0; i < cdtValueArray.length; i++) {
                        if (cdtValueArray[i] === valueObject.get(id).value) {
                            tFlag = true;
                        }
                    }
                    value.isAction = tFlag;
                }
                var flag = false;
                if (value.isAction) {
                    actionMap.get(value.linkHID).conditionMap.eachMap(function (ckey, cvalue) {
                        if ('cdtID' in cvalue) {
                            if (valueObject.find(cvalue.cdtID)) {
                                if (valueObject.get(cvalue.cdtID).value !==
                                    valueObject.get(cvalue.linkVID).value) {
                                    cvalue.isAction = true;
                                }
                                else {
                                    cvalue.isAction = false;
                                }
                            }
                        }
                        if (cvalue.isAction !== true) {
                            flag = true;
                        }
                    });
                    if (!flag) {
                        arrayHID = value.linkHID;
                    }
                }
            });
        }
        return arrayHID;
    };
    ;
    return HandleArray;
}());
/**
 *
 * 定义动作基本数据对象handleObject
 * @constructor
 */
var HandleObject = (function () {
    function HandleObject(id, score) {
        this.id = id; // 动作编号
        this.time = ''; // 动作时间
        this.isAction = false; // 是否触发动作
        this.score = score; // 得分
        this.conditionMap = new __WEBPACK_IMPORTED_MODULE_1__map__["a" /* XMap */](); // 关联判定条件计划集合
        this.PID = ''; //
        this.SID = '';
    }
    return HandleObject;
}());
/**
 *
 * 定义条件数据对象
 * @param id
 * @param linkVID
 * @param cdt
 * @param cdtID
 * @param cdtValue
 * @constructor
 */
var ConditionObject = (function () {
    function ConditionObject(id, linkVID, cdt, cdtID, cdtValue) {
        this.id = id; // 条件编号
        this.linkVID = linkVID; // 关联数值对象ID
        this.cdt = cdt; // 条件方式
        this.cdtID = cdtID; // 比对数值对象ID
        this.cdtValue = cdtValue; // 比对数值
        this.linkHID = ''; // 关联动作handleID
        this.isAction = false;
    }
    return ConditionObject;
}());
/**
 *
 * @param id
 * @param description
 * @constructor
 */
var ValueObject = (function () {
    function ValueObject(id, description, value) {
        this.id = id; // 数值对象编号
        this.description = description; // 描述
        this.value = ''; // 默认值
        this.cdtMap = new __WEBPACK_IMPORTED_MODULE_1__map__["a" /* XMap */](); // 用户条件condition
    }
    return ValueObject;
}());



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XMap; });
/**
 * @author  谢国亮
 * @updated bingur
 * 定义模拟map方法 size ， put ， get ， delete ， eachMap
 */
var XMap = (function () {
    function XMap() {
        this.map = {};
    }
    /**
     * 获得map容器的个数
     */
    XMap.prototype.size = function () {
        var sum = 0;
        for (var props in this.map) {
            if (props)
                sum += 1;
        }
        return sum;
    };
    ;
    /**
     * 添加元素
     * @param key
     * @param value
     */
    XMap.prototype.put = function (key, value) {
        this.map[key] = value;
    };
    ;
    /**
     * get 方法 根据key 取得value
     * @param key
     */
    XMap.prototype.get = function (key) {
        return this.map[key];
    };
    ;
    /**
     * find 方法 查找value 是否存在
     * @param key
     * @returns {*}
     */
    XMap.prototype.find = function (key) {
        if (this.map[key] || this.map[key] === 0 || this.map[key] === false) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    /**
     *  map 中的删除方法
     * @param key
     */
    XMap.prototype.delete = function (key) {
        if (this.map[key] || this.map === 0 || this.map === false) {
            delete this.map[key];
        }
    };
    ;
    /**
     * 遍历map 容器的方法
     * @param fn
     */
    XMap.prototype.eachMap = function (fn) {
        for (var props in this.map) {
            if (props)
                fn(props, this.map[props]);
        }
    };
    ;
    return XMap;
}());



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_multimeter__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });





var DashboardComponent = (function () {
    function DashboardComponent(dashboardService, multimeterService) {
        this.dashboardService = dashboardService;
        this.multimeterService = multimeterService;
        this.changeRotate = 'rotate1';
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.switchCar = function (param) {
        switch (param) {
            case 'on':
                this.changeRotate = 'rotate2';
                this.multimeterService.Mdata.dragStart();
                this.multimeterService.Mdata.drop();
                break;
        }
        this.dashboardService.currentSwitch = param;
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "dashboard",
        providers: [],
        styles: [__webpack_require__(177)],
        template: __webpack_require__(159),
        animations: [
            __WEBPACK_IMPORTED_MODULE_4__animations__["a" /* flyIn */],
            __WEBPACK_IMPORTED_MODULE_4__animations__["b" /* halo */],
        ],
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_3__components_multimeter__["a" /* MultimeterService */]])
], DashboardComponent);



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gear_panel_gear_panel_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multimeter_multimeter_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handle_error_handle_error_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GearPanelComponent; });






var GearPanelComponent = (function () {
    function GearPanelComponent(gearPanelService, dashboardService, multimeterService, handleErrorService) {
        this.gearPanelService = gearPanelService;
        this.dashboardService = dashboardService;
        this.multimeterService = multimeterService;
        this.handleErrorService = handleErrorService;
        // 档位开关是否隐藏
        this.gearPanelHidden = true;
        // 是否踩下刹车踏板
        this.isBrake = 0;
        // 是否在拖拽
        this.isDrag = 0;
        // 控制中心的按钮在什么档位，1、2、3分别代表r、n、d
        this.controlStalls = 0;
        // 档位在lock档
        this.stalls = 0;
        this.isaudio = '0';
    }
    GearPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        clearInterval(this.interval); //清楚定时器
        setTimeout(function () {
            _this.dragAcc();
        }, 200);
    };
    GearPanelComponent.prototype.ngOnDestroy = function () {
    };
    GearPanelComponent.prototype.setGearSourcePosition = function (top, left) {
        $(".dragSource").css({ top: top, left: left });
    };
    GearPanelComponent.prototype.setGearAccPosition = function (top, left) {
        $(".accelerator").css({ top: top, left: left });
    };
    /*
     *
     * 面板拖拽
     *
     * */
    GearPanelComponent.prototype.dragDiv = function () {
        // 给新面板加上拖拽事件
        $(".dragSource").draggable({
            containment: ".container",
            cursor: "move"
        });
    };
    /*
     *
     * 关闭面板
     *
     * */
    GearPanelComponent.prototype.closeSwitchPanel = function (param) {
        $(".pedal").css('display', 'block');
        this.gearPanelService.pedalShowFlag = false;
        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "2";
        $("#g_pedal").css('display', 'none');
    };
    /*
     *
     * 控制面板刹车点击
     *
     * */
    GearPanelComponent.prototype.brakeOn = function (_obj) {
        var _top = parseInt($(_obj).css("top"));
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
            }
            else {
                $('.pointer-left').css({
                    'transform': 'rotate(60deg)',
                    '-ms-transform': 'rotate(60deg)',
                    '-moz-transform': 'rotate(60deg)',
                    '-webkit-transform': 'rotate(60deg)',
                });
            }
        }
        else {
            this.gearPanelService.isBrake = 0;
            this.dashboardService.Mint.In1NER_x_BrakeSig_x_x = "0";
            $(_obj).css("top", "40px");
            $(".circuit-brake").attr({ stroke: "#231815" });
            $(".circuit-switch3").attr({ stroke: "#231815", x2: "598.233" });
        }
    };
    //  同步拖动油门开始
    GearPanelComponent.prototype.dragStartAccelerator = function () {
    };
    // 同步拖动油门拖动中
    GearPanelComponent.prototype.dragDragAccelerator = function () {
        // if (this.gearPanelService.controlStalls !== 3) {
        //   // 控制中d心档位在d档
        //   this.handleErrorService.handleError({ message: "请挂D档" });
        //   return;
        // } else 
        if (this.gearPanelService.isBrake == 1) {
            // 控制中d心档位在d档
            this.handleErrorService.handleError({ message: "请松开刹车踏板" });
            return;
        }
        else {
            if (this.gearPanelService.controlStalls != 2 && this.dashboardService.stalls == 2) {
                var _top = parseInt($(".accelerator").css("top"));
                var _end = _top * 210 / 57;
                if (_end < 86) {
                    $('.pointer-left').css({
                        'transform': 'rotate(85deg)',
                        '-ms-transform': 'rotate(85deg)',
                        '-moz-transform': 'rotate(85deg)',
                        '-webkit-transform': 'rotate(85deg)',
                    });
                }
                else {
                    $('.pointer-left').css({
                        'transform': 'rotate(' + _end + 'deg)',
                        '-ms-transform': 'rotate(' + _end + 'deg)',
                        '-moz-transform': 'rotate(' + _end + 'deg)',
                        '-webkit-transform': 'rotate(' + _end + 'deg)',
                    });
                }
                var _right = _top * 120 / 42;
                // console.log(this.gearPanelService.controlStalls);
                if (this.gearPanelService.controlStalls !== 2) {
                    if (_right < 61) {
                        $('.pointer-right').css({
                            'transform': 'rotate(60deg)',
                            '-ms-transform': 'rotate(60deg)',
                            '-moz-transform': 'rotate(60deg)',
                            '-webkit-transform': 'rotate(60deg)',
                        });
                    }
                    else if (_right > 120) {
                        $('.pointer-right').css({
                            'transform': 'rotate(120deg)',
                            '-ms-transform': 'rotate(120deg)',
                            '-moz-transform': 'rotate(120deg)',
                            '-webkit-transform': 'rotate(120deg)',
                        });
                    }
                    else {
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
                }
                else if (_right == 100) {
                    this.isaudio = '4';
                }
                else if (_right == 120) {
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
    };
    // 同步拖动油门停止
    GearPanelComponent.prototype.dragStopAccelerator = function () {
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
    };
    GearPanelComponent.prototype.dragAcc = function () {
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
    };
    /*
     *
     * 档位事件
     *
     * */
    GearPanelComponent.prototype.switchGear = function (id, obj) {
        var _this = this;
        // if (this.dashboardService.Mint.In1Mot_Gear_Signal_x_x == id) {
        //   return;
        // }
        // console.log(this.dashboardService.stalls);
        if (this.dashboardService.stalls == 2) {
            // console.log(this.dashboardService.Mint.In1Mot_Gear_Signal_x_x);
            if (id == 1) {
                var _top = parseInt($('.gear-brake').css("top"));
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
                var titled = $('#typeshow_rd').text();
                if ($('#type_nineteen_audio')) {
                    $('#type_nineteen_audio').attr('src', './assets/audios/39-1.mp3');
                }
                // console.log(titled);
                if (titled == "倒挡制动器" || titled == "制动器B1壳体油道") {
                    var inter_1 = 0;
                    $('.show_delay').css('display', "none");
                    this.interval = setInterval(function () {
                        inter_1++;
                        $('.show' + inter_1).show();
                        if (inter_1 === 4) {
                            clearInterval(_this.interval);
                        }
                    }, 600);
                }
            }
            else if (id == 2) {
                var _top = parseInt($('.gear-brake').css("top"));
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
            }
            else if (id == 3) {
                var _top = parseInt($('.gear-brake').css("top"));
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
                var titled = $('#typeshow_rd').text();
                if ($('#type_nineteen_audio')) {
                    $('#type_nineteen_audio').attr('src', './assets/audios/37-1.mp3');
                }
                // console.log(titled);
                if (titled == "K1离合器") {
                    var inter_2 = 0;
                    $('.show_delay').css('display', "none");
                    this.interval = setInterval(function () {
                        inter_2++;
                        $('.show' + inter_2).show();
                        if (inter_2 === 4) {
                            clearInterval(_this.interval);
                        }
                    }, 600);
                }
            }
            //按钮样式
            $(".state-wrap span").removeClass("active");
            $(obj).addClass("active");
        }
    };
    GearPanelComponent.prototype.Scroll = function (obj, time, direction) {
        var width = parseInt($(obj).css('width'));
        var height = parseInt($(obj).css('height'));
        var _top = 0;
        var _left = 0;
        var offsetTop = parseInt(_top) - parseInt(String(height));
        var resetTop = parseInt(_top) + parseInt(String(height));
        var offsetLeft = parseInt(_left) - parseInt(String(width));
        var resetLeft = parseInt(_left) + parseInt(String(width));
        var up = function () {
            $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;boder-radius:5px;' src='./assets/images/project/tyre_" + obj.split("_")[1] + ".png' />");
            $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'top': offsetTop + 'px' }, time, 'linear', function () { });
            $(obj).find("img").eq(1).css("top", resetTop + 'px').stop().animate({ 'top': _top }, time, 'linear', function () {
                removeDiv();
                up();
            });
        };
        var down = function () {
            $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;boder-radius:5px;' src='./assets/images/project/tyre_" + obj.split("_")[1] + ".png' />");
            $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'top': resetTop + 'px' }, time, 'linear', function () { });
            $(obj).find("img").eq(1).css("top", offsetTop + 'px').stop().animate({ 'top': _top }, time, 'linear', function () {
                removeDiv();
                down();
            });
        };
        var left = function () {
            $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;boder-radius:5px;' src='./assets/images/project/tyre_" + obj.split("_")[1] + ".png' />");
            $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'left': offsetLeft + 'px' }, time, 'linear', function () { });
            $(obj).find("img").eq(1).css("left", resetLeft + 'px').stop().animate({ 'left': _left }, time, 'linear', function () {
                removeDiv();
                left();
            });
        };
        var right = function () {
            $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;boder-radius:5px;' src='./assets/images/project/tyre_" + obj.split("_")[1] + ".png' />");
            $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'left': resetLeft + 'px' }, time, 'linear', function () { });
            $(obj).find("img").eq(1).css("left", offsetLeft + 'px').stop().animate({ 'left': _left }, time, 'linear', function () {
                removeDiv();
                right();
            });
        };
        var stop = function () {
            $(obj).find("img").stop(true).css({ 'top': '0px', 'left': '0px' });
            $(obj).find("img").eq(1).remove();
            $(obj).find("img").eq(2).remove();
        };
        var removeDiv = function () {
            $(obj).find("img").eq(0).remove();
        };
        var toArr = function () {
            var objLen = $(obj).find("img").toArray();
            if (objLen.length == 0) {
                $(obj).append("<img src='images/stripe_" + obj.split("-")[1] + ".png' />");
            }
            else if (objLen.length > 1) {
                objLen.length = 1;
            }
        };
        switch (direction) {
            case 'down':
                down();
                break;
            case 'up':
                up();
                break;
            case 'left':
                left();
                break;
            case 'right':
                right();
                break;
            case 'stop':
                stop();
                break;
            default:
        }
    };
    GearPanelComponent.prototype.unscroll = function () {
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
    };
    return GearPanelComponent;
}());
GearPanelComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "gear-panel",
        styles: [__webpack_require__(178)],
        template: __webpack_require__(160),
        providers: []
    })
    /**
     * 处理错误的组件
     */
    ,
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__gear_panel_gear_panel_service__["a" /* GearPanelService */],
        __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_4__multimeter_multimeter_service__["a" /* MultimeterService */],
        __WEBPACK_IMPORTED_MODULE_5__handle_error_handle_error_service__["a" /* HandleErrorService */]])
], GearPanelComponent);



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessages; });
var ErrorMessages = [
    { code: -1, message: '系统繁忙！请与管理员联系。' },
    { code: 20, message: '与服务器连接失败！请与管理员联系。' },
    { code: 21, message: '当前网络异常，无法获取学习数据。' },
    { code: 22, message: '插件版本较老，请关闭浏览器，再更新插件。' },
    { code: 23, message: '打开了多个课程，本平台不支持同时学习多个课程，请关闭所有课程页面后，重新打开课程。' },
    { code: 24, message: '找不到插件，请关闭浏览器,请安装最新插件或重新启动插件。' },
    { code: 20001, message: '当前非正常打开课件，请重新打开课件。' },
    { code: 30005, message: '该用户在其他地方登陆或打开多个课件。' },
    { code: 0, message: '当前课程出错，请从新打开。' },
    { code: 11, message: '您输入的用户名或密码不正确，请重新输入！' },
    { code: 12, message: '该用户已注册！' },
    { code: 15, message: '该用户已经登录！' },
];


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handle_error_service__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__handle_error_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handle_error_component__ = __webpack_require__(36);
/* unused harmony namespace reexport */




/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_home_home_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multimeter_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultimeterComponent; });





var MultimeterComponent = (function () {
    function MultimeterComponent(multimeterService, homeService, dashboardService) {
        this.multimeterService = multimeterService;
        this.homeService = homeService;
        this.dashboardService = dashboardService;
        this.cancelAnimation = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
    }
    MultimeterComponent.prototype.ngOnInit = function () {
        if (this.dashboardService.currentSwitch != 'on')
            return;
        this.multimeterService.Mdata.dragStart();
        this.multimeterService.Mdata.drop();
    };
    MultimeterComponent.prototype.multimeterv = function () {
        if (this.dashboardService.currentSwitch != 'on')
            return;
        this.multimeterService.Mdata.multimeterv();
    };
    MultimeterComponent.prototype.ngOnDestroy = function () { };
    MultimeterComponent.prototype.closemultimeter = function () {
        this.multimeterService.Mdata.closemultimeter();
        this.homeService.closeTool("multimeters");
    };
    return MultimeterComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('currentShowHotArea'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], MultimeterComponent.prototype, "currentShowHotArea", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], MultimeterComponent.prototype, "cancelAnimation", void 0);
MultimeterComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: "multimeter",
        styles: [__webpack_require__(180)],
        template: __webpack_require__(162),
        providers: []
    }) // @Injectable()
    ,
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__multimeter_service__["a" /* MultimeterService */],
        __WEBPACK_IMPORTED_MODULE_1__views_home_home_service__["a" /* HomeService */],
        __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_service__["a" /* DashboardService */]])
], MultimeterComponent);



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swiper_component__ = __webpack_require__(96);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__swiper_component__["a"]; });



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperComponent; });


var SwiperComponent = (function () {
    function SwiperComponent() {
    }
    ;
    SwiperComponent.prototype.slideshow = function () {
        // alert(1);
        var slideshow = document.getElementsByClassName('bannerPicList')[0];
        var imgs = slideshow.getElementsByTagName('img');
        var current = 0;
        function slideOff() {
            $(imgs[current]).fadeOut(1000);
        }
        function slideOn() {
            $(imgs[current]).fadeIn(2000);
        }
        function changeSlide() {
            slideOff();
            current++;
            if (current >= 4)
                current = 0;
            slideOn();
        }
        changeSlide();
        var slideon = setInterval(changeSlide, 3000);
    };
    SwiperComponent.prototype.ngOnInit = function () { this.slideshow(); };
    ;
    return SwiperComponent;
}());
SwiperComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'home-swiper',
        template: __webpack_require__(163),
        styles: [__webpack_require__(181)],
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], SwiperComponent);



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_animation__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ficker1Directive; });



/*
 * 指令
 * XLarge 字体变大
 */
var Ficker1Directive = (function () {
    function Ficker1Directive(element, renderer) {
        // 设置 font size 成 x-large
        // `nativeElement` 是作用元素
        // element.nativeElement.style.fontSize = 'x-large';
        // console.log(element);
        this.element = element;
        this.cancelAnimation = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        // 为了让 server/webworker 支持 用  renderer 渲染
        // renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
        // console.log(animationOn);
    }
    Ficker1Directive.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // console.log('ngOnChanges');
        // console.log(changes);
        var chng = changes['ficker1'];
        var cur = chng.currentValue;
        var prev = chng.previousValue;
        // console.log(cur);
        // console.log(prev);
        if (cur === prev) {
            console.log('meiy');
            return;
        }
        if (this.ficker1) {
            setTimeout(function () {
                _this.animation = _this.startFicker(_this.ficker1);
            }, 15);
        }
        else {
            if (this.animation)
                this.animation.cancel();
        }
        ;
    };
    Ficker1Directive.prototype.startFicker = function (ficker1) {
        // console.log(this.ficker1);
        // let a: any = new Proxy({}, {
        //     set(v: string) {
        //         console.log('haha');
        //         return true;
        //     },
        // });
        // a.b = 1;
        // if (!this.ficker1) return;
        var elem = this.element.nativeElement;
        return elem.animate(__WEBPACK_IMPORTED_MODULE_2__app_config_animation__["a" /* animationOn */][this.ficker1].keyframes, __WEBPACK_IMPORTED_MODULE_2__app_config_animation__["a" /* animationOn */][this.ficker1].options);
    };
    return Ficker1Directive;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('ficker1'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], Ficker1Directive.prototype, "ficker1", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], Ficker1Directive.prototype, "cancelAnimation", void 0);
Ficker1Directive = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[ficker1]' // 用 [ ] 代表 属性
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], Ficker1Directive);



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_animation__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ficker2Directive; });



var Ficker2Directive = (function () {
    // @HostListener('click') onClick() {
    //     console.log(this.animation);
    //     if (this.animation)
    //         this.animation.cancel();
    //     console.log('end');
    // }
    function Ficker2Directive(element, renderer) {
        // 设置 font size 成 x-large
        // `nativeElement` 是作用元素
        // element.nativeElement.style.fontSize = 'x-large';
        // console.log(element);
        this.element = element;
        this.cancelAnimation = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        // 为了让 server/webworker 支持 用  renderer 渲染
        // renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
        // console.log(animationOn);
    }
    Ficker2Directive.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // console.log('ngOnChanges');
        // console.log(changes);
        var chng = changes['ficker2'];
        var cur = chng.currentValue;
        var prev = chng.previousValue;
        // console.log(cur);
        // console.log(prev);
        if (cur === prev) {
            console.log('meiy');
            return;
        }
        if (this.ficker2) {
            setTimeout(function () {
                _this.animation = _this.startFicker(_this.ficker2);
            }, 15);
        }
        else {
            if (this.animation)
                this.animation.cancel();
        }
        ;
    };
    Ficker2Directive.prototype.startFicker = function (ficker2) {
        // console.log(this.ficker2);
        // let a: any = new Proxy({}, {
        //     set(v: string) {
        //         console.log('haha');
        //         return true;
        //     },
        // });
        // a.b = 1;
        // if (!this.ficker2) return;
        var elem = this.element.nativeElement;
        return elem.animate(__WEBPACK_IMPORTED_MODULE_2__app_config_animation__["a" /* animationOn */][this.ficker2].keyframes, __WEBPACK_IMPORTED_MODULE_2__app_config_animation__["a" /* animationOn */][this.ficker2].options);
    };
    return Ficker2Directive;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('ficker2'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], Ficker2Directive.prototype, "ficker2", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], Ficker2Directive.prototype, "cancelAnimation", void 0);
Ficker2Directive = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[ficker2]' // 用 [ ] 代表 属性
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], Ficker2Directive);



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ficker_directive__ = __webpack_require__(97);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ficker_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ficker2_directive__ = __webpack_require__(98);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ficker2_directive__["a"]; });




/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusDirective; });


// 属性型指令
var FocusDirective = (function () {
    function FocusDirective(elem, render) {
        this.changeHandler = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        // elem.nativeElement.autofocus = true;
    }
    FocusDirective.prototype.onFofus = function () {
        // this.focusHandler.emit();
    };
    FocusDirective.prototype.onkeyup = function (e) {
        // console.log(e)
        this.changeHandler.emit(e);
    };
    FocusDirective.prototype.onkeypress = function () {
        // this.changeHandler.emit();
    };
    return FocusDirective;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('inputFofus'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", String)
], FocusDirective.prototype, "inputFofus", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])('change'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], FocusDirective.prototype, "changeHandler", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('focus'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", []),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:returntype", void 0)
], FocusDirective.prototype, "onFofus", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('keyup', ['$event']),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [Object]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:returntype", void 0)
], FocusDirective.prototype, "onkeyup", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('keypress'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", []),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:returntype", void 0)
], FocusDirective.prototype, "onkeypress", null);
FocusDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[inputFofus]',
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], FocusDirective);



/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__focus_directive__ = __webpack_require__(100);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__focus_directive__["a"]; });



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_animation__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HaloDirective; });



/*
 * 指令
 * XLarge 字体变大
 */
var HaloDirective = (function () {
    // @HostListener('click') onClick() {     console.log(this.animation);     if
    // (this.animation)         this.animation.cancel();     console.log('end'); }
    function HaloDirective(element, renderer) {
        // 设置 font size 成 x-large `nativeElement` 是作用元素
        // element.nativeElement.style.fontSize = 'x-large'; console.log(element); 为了让
        // server/webworker 支持 用  renderer 渲染
        // renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
        this.element = element;
        this.cancelAnimation = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        // console.log(animationOn);
    }
    HaloDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // console.log('ngOnChanges'); console.log(changes);
        var chng = changes['halo'];
        var cur = chng.currentValue;
        var prev = chng.previousValue;
        // console.log(cur); console.log(prev);
        if (cur === prev) {
            console.log('meiy');
            return;
        }
        if (this.halo) {
            setTimeout(function () {
                if (_this.animation)
                    _this.animation.cancel();
                _this.animation = _this.startHalo(_this.halo);
            }, 15);
        }
        else {
            if (this.animation)
                this.animation.cancel();
        }
        ;
    };
    HaloDirective.prototype.startHalo = function (halo) {
        // console.log(this.halo);
        // let a: any = new Proxy({}, {     set(v: string) {
        // console.log('haha');         return true;     }, }); a.b = 1; if (!this.halo)
        // return;
        var elem = this.element.nativeElement;
        if (__WEBPACK_IMPORTED_MODULE_2__app_config_animation__["a" /* animationOn */][this.halo])
            return elem.animate(__WEBPACK_IMPORTED_MODULE_2__app_config_animation__["a" /* animationOn */][this.halo].keyframes, __WEBPACK_IMPORTED_MODULE_2__app_config_animation__["a" /* animationOn */][this.halo].options);
    };
    return HaloDirective;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('halo'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], HaloDirective.prototype, "halo", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], HaloDirective.prototype, "cancelAnimation", void 0);
HaloDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[halo]' // 用 [ ] 代表 属性
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], HaloDirective);



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__halo_directive__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__halo_directive__["a"]; });



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_directive__ = __webpack_require__(105);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__input_directive__["a"]; });



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDirective; });


/*
 * 指令
 * XLarge 字体变大
 */
var InputDirective = (function () {
    function InputDirective(element, renderer) {
        this.element = element;
        this.num = 0;
        this.timer = null;
        this.cancelAnimation = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    InputDirective.prototype.removeCheck = function () {
        if (this.input == 'false') {
            this.element.nativeElement.removeAttribute('checked');
        }
    };
    InputDirective.prototype.ngOnChanges = function () {
        this.removeCheck();
    };
    return InputDirective;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("input"),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], InputDirective.prototype, "input", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], InputDirective.prototype, "cancelAnimation", void 0);
InputDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[input]' // 用 [ ] 代表 属性
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], InputDirective);



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfectScrollbarDirective; });


/**
 * 引入 perfect-scrollbar
 */
var ps = __webpack_require__(141);
__webpack_require__(188);
/*
 * 指令
 */
var PerfectScrollbarDirective = (function () {
    function PerfectScrollbarDirective(element, renderer) {
        renderer.setElementStyle(element.nativeElement, 'position', 'relative');
        setTimeout(function () {
            console.log(ps.initialize);
            ps.initialize(element.nativeElement);
        }, 0);
    }
    return PerfectScrollbarDirective;
}());
PerfectScrollbarDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[PerfectScrollbar]',
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], PerfectScrollbarDirective);



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Perfect_scrollbar_directive__ = __webpack_require__(106);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Perfect_scrollbar_directive__["a"]; });



/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__twinkle_directive__ = __webpack_require__(109);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__twinkle_directive__["a"]; });



/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwinkleDirective; });


/*
 * 指令
 * XLarge 字体变大
 */
var TwinkleDirective = (function () {
    function TwinkleDirective(element, renderer) {
        this.element = element;
        this.num = 0;
        this.timer = null;
        this.cancelAnimation = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    TwinkleDirective.prototype.setStyle = function () {
        var _this = this;
        this.element.nativeElement.style.boxShadow = "0px 0px " + this.num + "px 0px #00BFFF";
        var num1 = true;
        this.timer = setInterval(function () {
            if (_this.num > 20) {
                num1 = false;
            }
            if (_this.num < 0) {
                num1 = true;
            }
            num1 ? _this.num++ : _this.num--;
            _this.element.nativeElement.style.boxShadow = "0px 0px " + _this.num + "px 0px #00BFFF";
        }, 50);
    };
    TwinkleDirective.prototype.ngOnChanges = function () {
        if (!this.twinkle) {
            clearInterval(this.timer);
            this.element.nativeElement.style.boxShadow = "0px 0px 0px 0px #00BFFF";
            return;
        }
        ;
        this.setStyle();
    };
    return TwinkleDirective;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('twinkle'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], TwinkleDirective.prototype, "twinkle", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], TwinkleDirective.prototype, "cancelAnimation", void 0);
TwinkleDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[twinkle]' // 用 [ ] 代表 属性
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], TwinkleDirective);



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__x_large_directive__ = __webpack_require__(111);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__x_large_directive__["a"]; });



/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XLargeDirective; });


/*
 * 指令
 * XLarge 字体变大
 */
var XLargeDirective = (function () {
    function XLargeDirective(element, renderer) {
        // 设置 font size 成 x-large
        // `nativeElement` 是作用元素
        // element.nativeElement.style.fontSize = 'x-large';
        console.log(element);
        // 为了让 server/webworker 支持 用  renderer 渲染
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
    return XLargeDirective;
}());
XLargeDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[xLarge]' // 用 [ ] 代表 属性
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]])
], XLargeDirective);



/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_gear_panel_gear_panel_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_communication__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_fromEvent__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });










/*
 * App Component
 * App Component
 * Top Level Component
 */
__webpack_require__(189);
var AppComponent = (function () {
    function AppComponent(appService, router, elementRef, dashboardService, gearPanelService, communicationService) {
        this.appService = appService;
        this.router = router;
        this.elementRef = elementRef;
        this.dashboardService = dashboardService;
        this.gearPanelService = gearPanelService;
        this.communicationService = communicationService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/home']);
        this.communicationService.init();
    };
    return AppComponent;
}());
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'support-app',
        styles: [
            __webpack_require__(182),
        ],
        template: __webpack_require__(164)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_5__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_1__components_gear_panel_gear_panel_service__["a" /* GearPanelService */],
        __WEBPACK_IMPORTED_MODULE_3__components_communication__["a" /* CommunicationService */]])
], AppComponent);



/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_home_home_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_testQuestions__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_handle_error_handle_error_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_gear_panel_gear_panel_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_gear_panel_gear_panel_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_handle_error_handle_error_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_communication__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_multimeter__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__appdata_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_content_content_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_help_help_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routes__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_resolver__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__views_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_replace__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_close_window__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_buttonClick__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_swiper__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__directives_x_large__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__directives_halo__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__directives_twinkle__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__directives_input__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__directives_focus__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__directives_ficker__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__directives_perfect_scrollbar__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });




















/*
 * 平台和环境引入
 */


// 最外层的组件





/**
 * 内部小组件
 */



/**
 * 指令
 */







// 应用的一些功能提供商
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_23__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_24__app_service__["a" /* AppService */],
    __WEBPACK_IMPORTED_MODULE_27__components_close_window__["a" /* CloseWindowService */],
    __WEBPACK_IMPORTED_MODULE_26__views_replace__["a" /* ReplaceService */],
    __WEBPACK_IMPORTED_MODULE_11__appdata_service__["a" /* AppdataService */], __WEBPACK_IMPORTED_MODULE_10__components_multimeter__["a" /* MultimeterService */], __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_4__components_gear_panel_gear_panel_service__["a" /* GearPanelService */], __WEBPACK_IMPORTED_MODULE_3__components_handle_error_handle_error_service__["a" /* HandleErrorService */], __WEBPACK_IMPORTED_MODULE_1__views_home_home_service__["a" /* HomeService */],
    __WEBPACK_IMPORTED_MODULE_2__views_testQuestions__["a" /* TestQuestionsService */],
    __WEBPACK_IMPORTED_MODULE_9__components_communication__["a" /* CommunicationService */]
]);
/**
 * `AppModule 主入口
 */
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_25__views_home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__views_help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_26__views_replace__["b" /* ReplaceComponent */],
            __WEBPACK_IMPORTED_MODULE_12__views_content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_buttonClick__["a" /* ButtonClickComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_swiper__["a" /* SwiperComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_close_window__["b" /* CloseWindowComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_multimeter__["b" /* MultimeterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_handle_error_handle_error_component__["a" /* HandleErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_gear_panel_gear_panel_component__["a" /* GearPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_2__views_testQuestions__["b" /* TestQuestionsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__directives_x_large__["a" /* XLargeDirective */],
            __WEBPACK_IMPORTED_MODULE_36__directives_perfect_scrollbar__["a" /* PerfectScrollbarDirective */],
            __WEBPACK_IMPORTED_MODULE_31__directives_halo__["a" /* HaloDirective */],
            __WEBPACK_IMPORTED_MODULE_32__directives_twinkle__["a" /* TwinkleDirective */],
            __WEBPACK_IMPORTED_MODULE_34__directives_focus__["a" /* FocusDirective */],
            __WEBPACK_IMPORTED_MODULE_35__directives_ficker__["a" /* Ficker1Directive */],
            __WEBPACK_IMPORTED_MODULE_35__directives_ficker__["b" /* Ficker2Directive */],
            __WEBPACK_IMPORTED_MODULE_33__directives_input__["a" /* InputDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_19__angular_router__["PreloadAllModules"] }),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS
        ]
    })
], AppModule);



/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });




var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], DataResolver);

// 解决路由
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_help_help_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_replace__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });



var ROUTES = [
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_0__views_help_help_component__["a" /* HelpComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__views_home__["a" /* HomeComponent */] },
    { path: 'replace', component: __WEBPACK_IMPORTED_MODULE_2__views_replace__["b" /* ReplaceComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataResolver; });
var DataResolver = (function () {
    function DataResolver(appConfig) {
        this.description = this.parserDescription(appConfig);
        this.pageArray = this.parserPageArray(appConfig);
        this.chapterArray = this.parserChapterArray(appConfig);
        // this.state = {
        //     current: {},
        //     progress: 0,
        //     publishProgress: 0,
        //     isPass: false,
        // };
    }
    // 解析description
    DataResolver.prototype.parserDescription = function (appConfig) {
        var description = appConfig.description;
        return {
            name: description.name,
            courseNumber: description.courseNumber,
            metadata: description.metadata,
            type: description.type,
            types: description.types,
            purpose: description.purpose,
            require: description.require,
            keyword: description.keyword,
            language: description.language,
            version: description.version,
            client: description.client,
            sumScore: description.sumScore,
            passCondition: description.passCondition,
            completeCondition: description.completeCondition,
            entry: description.entry,
        };
    };
    // 解析pageArray
    DataResolver.prototype.parserPageArray = function (appConfig) {
        // return [];
        if (Array.isArray(appConfig.pageArray) && appConfig.pageArray) {
            var pageArray = appConfig.pageArray.sort(this.compare('order'));
            var newPageArray = pageArray.map(function (v, i) {
                appConfig.chapterArray.forEach(function (element, key, arr) {
                    if (element.id === v.chapterID) {
                        if (element.pages === undefined)
                            element.pages = [];
                        // pages.push(element);
                        element.pages.push(v);
                    }
                });
                // console.log(appConfig.chapterArray);
                var pageObject = {};
                Object.defineProperty(pageObject, 'isPass_initial', { value: !!v.isPass });
                Object.assign(pageObject, {
                    id: v.id,
                    order: parseInt(v.order, 10),
                    chapterID: v.chapterID,
                    isPass: !!v.isPass,
                    // isPass_initial: !!v.isPass,
                    pageNumber: ++i,
                    componentArray: v.componentArray,
                    publishArray: v.publishArray,
                    backgroundImageSrc: v.backgroundImageSrc,
                    animation: v.animation,
                });
                return pageObject;
            });
            return newPageArray;
        }
        else {
            return [];
        }
    };
    // 解析chapterArray
    DataResolver.prototype.parserChapterArray = function (appConfig) {
        // return [];
        var count = 1;
        if (Array.isArray(appConfig.chapterArray) && appConfig.chapterArray) {
            var chapterArray = appConfig.chapterArray.sort(this.compare('order'));
            var newChapterArray = chapterArray.map(function (v, i) {
                // const pages = v.pageID.split(',');
                // console.log(this.pageArray);
                // let pages = [];
                // this.pageArray.forEach(element => {
                //     if (element.chapterID === v.id) {
                //         pages.push(element);
                //     }
                // });
                // console.log(v.pages);
                var startPage = count;
                var endPage = count = count + v.pages.length;
                if (Array.isArray(v.childChapterArray) && v.childChapterArray.length > 0) {
                    console.error('数据包含子章节,暂时不对此结构解析');
                }
                else {
                    return {
                        id: v.id,
                        order: parseInt(v.order, 10),
                        name: v.name,
                        description: v.description,
                        startPage: startPage,
                        endPage: endPage - 1,
                        pages: v.pages,
                    };
                }
            });
            return newChapterArray;
        }
        else {
            return [];
        }
    };
    // 根据属性的值对数组排序
    DataResolver.prototype.compare = function (property) {
        return function (a, b) {
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
        };
    };
    return DataResolver;
}());



/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_timers__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_multimeter_multimeter_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_handle_error_handle_error_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_gear_panel_gear_panel_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_content_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_appdata_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });










var HomeComponent = (function () {
    function HomeComponent(appdataService, homeService, dashboardService, gearPanelService, handleErrorService, multimeterService) {
        this.appdataService = appdataService;
        this.homeService = homeService;
        this.dashboardService = dashboardService;
        this.gearPanelService = gearPanelService;
        this.handleErrorService = handleErrorService;
        this.multimeterService = multimeterService;
        this.isvisibel = true;
        this.headeraudio = [];
        this.Catalogdata = [];
        this.pages = [];
        this.page22 = '';
        this._component = 'content'; //content
        this.isMute = false; // 是否静音
        this.outTipIsShow = false; //退出弹窗是否出现
        this.studyEnd = false; //最后一页出现
    }
    // 生命周期钩子函数
    HomeComponent.prototype.ngOnInit = function () {
        // this.appdataService.current = 1;
        this.total = this.appdataService.content.length - 1;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_timers__["setTimeout"])(function () {
            $('#delayimg').fadeIn();
        }, 1000);
        console.log(this.appdataService.content[this.appdataService.current]);
        this.headertitle = this.appdataService.content[this.appdataService.current].title;
        this.Catalogdata = this.appdataService.Catalog;
        for (var i = 0; i < this.Catalogdata.length; i++) {
            this.pages.push({ 'page': this.Catalogdata[i].pagestart });
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $(document).click(function () {
            _this.appdataService.menueIsShow = false;
        });
    };
    // 退出弹窗出现
    HomeComponent.prototype.outTip = function () {
        this.outTipIsShow = !this.outTipIsShow;
    };
    // 退出弹窗返回改变参数
    HomeComponent.prototype.changeParam = function () {
        this.outTipIsShow = false;
    };
    // 阻止点击目录关闭
    HomeComponent.prototype.stop = function (event) {
        if (event.stopPropagation) {
            // 针对 Mozilla 和 Opera 
            event.stopPropagation();
        }
        else if (window.event) {
            // 针对 IE 
            window.event.cancelBubble = true;
        }
    };
    // 目录导航显示
    HomeComponent.prototype.showmenu = function (event) {
        // if (event.stopPropagation) {
        //     // 针对 Mozilla 和 Opera 
        //     event.stopPropagation();
        // } else if (window.event) {
        //     // 针对 IE 
        //     window.event.cancelBubble = true;
        // }
        if (!this.appdataService.menueIsShow) {
            this.appdataService.menueIsShow = true;
            $(document).ready(function () {
                $('#niceScroll').niceScroll({
                    autohidemode: 'leave',
                    cursorborder: '5',
                    background: 'rgb(244, 244, 244)',
                    cursorcolor: "#DCDCDC'",
                    spacebarenabled: true,
                    preventmultitouchscrolling: true,
                    cursoropacitymin: 0,
                    cursoropacitymax: 1,
                });
            });
        }
        else {
            this.appdataService.menueIsShow = false;
        }
    };
    // 二级导航显示
    HomeComponent.prototype.isChildNavShow = function (item) {
        if (event.stopPropagation) {
            // 针对 Mozilla 和 Opera 
            event.stopPropagation();
        }
        else if (window.event) {
            // 针对 IE 
            window.event.cancelBubble = true;
        }
        if (!item.isGetInfo)
            return;
        if (JSON.stringify(item.isChildNav) !== '[]') {
            item.isExistence = !item.isExistence;
            return;
        }
        this.homeService.closeAll();
        this.changePageToolIsShow(item.currentPage);
        this.appdataService.current = item.currentPage;
    };
    HomeComponent.prototype.StartPlay = function () {
        this.isvisibel = false;
        if (this.appdataService.content[this.appdataService.current].textlist[0].measureList) {
            this.changePageToolIsShow();
        }
    };
    // 翻页是否需要显示工具箱
    HomeComponent.prototype.changePageToolIsShow = function (currentPage) {
        var _this = this;
        if (currentPage === void 0) { currentPage = this.appdataService.current; }
        if (!this.appdataService.content[currentPage].textlist[0].measureList)
            return;
        this.appdataService.content[currentPage].textlist[0].measureList.map((function (item, index) {
            _this.homeService.toolNavIsShow = item.isShow && item.isShowTool ? true : false;
        }));
    };
    HomeComponent.prototype.PrevPage = function () {
        if (this.appdataService.current > 1) {
            this.appdataService.current--;
            this.dashboardService.dashboardStatus = false;
            this.dashboardService.currentSwitch = '';
            this.headertitle = this.appdataService.content[this.appdataService.current].title;
            this.paging.currentClickTheSet();
            this.homeService.closeAll();
            if (this.appdataService.content[this.appdataService.current].textlist[0].measureList) {
                this.changePageToolIsShow();
            }
        }
    };
    HomeComponent.prototype.NextPage = function () {
        if (this.appdataService.current == this.appdataService.content.length - 1) {
            this.studyEnd = true;
            return;
        }
        ;
        this.ispage = this.paging.IsPaging().isPaging;
        this.types = this.paging.IsPaging().type;
        if (this.ispage) {
            this.page();
        }
    };
    HomeComponent.prototype.page = function () {
        var _this = this;
        if (this.appdataService.current < this.total) {
            this.appdataService.current++;
            this.dashboardService.dashboardStatus = false;
            this.dashboardService.currentSwitch = '';
            this.paging.isAllowPage = this.appdataService.content[this.appdataService.current].currentClickTheSet;
            this.appdataService.Catalog.map(function (item, index) {
                if (item.currentPage == _this.appdataService.current) {
                    item.isGetInfo = true;
                }
                if (JSON.stringify(item.isChildNav) !== '[]') {
                    item.isChildNav.map(function (i, j) {
                        if (i.currentPage < _this.appdataService.current) {
                            i.studyState = '3';
                        }
                        if (i.currentPage == _this.appdataService.current) {
                            if (i.isGetInfo)
                                return;
                            i.isGetInfo = true;
                            i.studyState = '2';
                        }
                    });
                }
            });
            this.homeService.closeAll();
            if (this.appdataService.content[this.appdataService.current].textlist[0].measureList) {
                this.changePageToolIsShow();
            }
            this.headertitle = this.appdataService.content[this.appdataService.current].title;
            for (var i = 0; i < this.Catalogdata.length; i++) {
                if (this.appdataService.current > this.Catalogdata[i].pagestart && this.appdataService.current < this.Catalogdata[i].pageend) {
                    this.pages[i].page = this.appdataService.current;
                }
            }
        }
    };
    HomeComponent.prototype.toolShow = function (str) {
        this.homeService.toolShow(str);
    };
    HomeComponent.prototype.measureTool = function (param) {
        this.homeService.platformRouterTurn(param);
    };
    HomeComponent.prototype.ShowCom = function (num) {
        this._component = this._component === 'help' ? 'content' : 'help';
        $(document).ready(function () {
            $('#niceScrollHelp').niceScroll({
                autohidemode: 'leave',
                cursorborder: '5',
                cursorborderradius: "5px",
                background: 'rgb(244, 244, 244)',
                cursorcolor: "#DCDCDC'",
                spacebarenabled: true,
                preventmultitouchscrolling: true,
                cursoropacitymin: 0,
                cursoropacitymax: 1,
            });
        });
    };
    HomeComponent.prototype.getChildEvent = function (index) {
        this._component = 'content';
    };
    HomeComponent.prototype.playaudio = function () {
        this.isMute = !this.isMute;
        //    静音方法
        //    $('#audio').get(0).muted=this.isMute;
    };
    HomeComponent.prototype.back = function () {
        this.studyEnd = false;
    };
    HomeComponent.prototype.out = function () {
        this.outTipIsShow = true;
    };
    return HomeComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__content_content_component__["a" /* ContentComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_7__content_content_component__["a" /* ContentComponent */])
], HomeComponent.prototype, "paging", void 0);
HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Component"])({
        selector: 'magotan-home',
        providers: [],
        template: __webpack_require__(167),
        styles: [__webpack_require__(185)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__index_appdata_service__["a" /* AppdataService */],
        __WEBPACK_IMPORTED_MODULE_6__home_service__["a" /* HomeService */],
        __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_4__components_gear_panel_gear_panel_service__["a" /* GearPanelService */],
        __WEBPACK_IMPORTED_MODULE_3__components_handle_error_handle_error_service__["a" /* HandleErrorService */],
        __WEBPACK_IMPORTED_MODULE_2__components_multimeter_multimeter_service__["a" /* MultimeterService */]])
], HomeComponent);



/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replace_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaceComponent; });




var ReplaceComponent = (function () {
    function ReplaceComponent(replaceService) {
        this.replaceService = replaceService;
        this.replaceChangeState = [];
        // 目录状态
        this.indexChangeState = {
            bodyFlag: true,
            oneFlag: true,
            twoFlag: false,
            threeFlag: false,
            fourFlag: true,
            fiveFlag: false,
            sixFlag: false,
            sensorFlag: false,
            powerFlag: false,
            caseFlag: false,
            backFlag: false,
            sensorBtnFlag: 'halo',
            powerBtnFlag: '',
            sensorFullFlag: false,
            powerFullFlag: false,
            caseFullFlag: false,
            powerIsPassFlag: true,
            caseIsPassFlag: true,
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
        this.oneState = {
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
        this.twoState = {
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
        this.threeState = {
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
        this.fourState = {
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
        this.fiveState = {
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
    }
    ;
    // 点击目录进入不同的子章节
    ReplaceComponent.prototype.changeBtn = function (num) {
        switch (num) {
            case 1:
                this.oneState.oneUpImg = true;
                $('#ascrail2015-hr').hide();
                console.log(this.indexChangeState.sensorIsPass, '999');
                if (this.indexChangeState.sensorIsPass) {
                    return;
                }
                ;
                this.indexChangeState.backFlag = true;
                this.indexChangeState.bodyFlag = false;
                this.indexChangeState.sensorFlag = true;
                if (window.outerWidth > 1680) {
                }
                else {
                    $(document).ready(function () {
                        $('#boxTwoScroll').niceScroll({
                            autohidemode: 'leave',
                            cursorborder: '5',
                            background: '#ccc',
                            spacebarenabled: true,
                            preventmultitouchscrolling: true,
                            cursoropacitymin: 0,
                            cursoropacitymax: 1,
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
                        background: '#ccc',
                        // boxzoom: true,
                        spacebarenabled: true,
                        preventmultitouchscrolling: true,
                        cursoropacitymin: 0,
                        cursoropacitymax: 1,
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
    ;
    // 传感器与执行器按章节进入
    ReplaceComponent.prototype.sensorChapter = function (num) {
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
                }
                else {
                    $(document).ready(function () {
                        $('#boxTwoScroll').niceScroll({
                            // autohidemode: false,
                            autohidemode: 'leave',
                            cursorborder: '5',
                            background: '#ccc',
                            // boxzoom: true,
                            spacebarenabled: true,
                            preventmultitouchscrolling: true,
                            cursoropacitymin: 0,
                            cursoropacitymax: 1,
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
    };
    // 电源与稳压器按章节进入
    ReplaceComponent.prototype.powerChapter = function (num) {
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
                        background: '#ccc',
                        // boxzoom: true,
                        spacebarenabled: true,
                        preventmultitouchscrolling: true,
                        cursoropacitymin: 0,
                        cursoropacitymax: 1,
                    });
                });
                break;
            default:
                return;
        }
    };
    // 案例分享按章节进入
    ReplaceComponent.prototype.caseChapter = function (num) {
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
                        background: '#ccc',
                        // boxzoom: true,
                        spacebarenabled: true,
                        preventmultitouchscrolling: true,
                        cursoropacitymin: 0,
                        cursoropacitymax: 1,
                    });
                });
                break;
            default:
                return;
        }
    };
    // 传感器与执行器启动停止系统按键E693  作用
    ReplaceComponent.prototype.oneUp = function () {
        var _this = this;
        this.oneState.oneUpFlag = true;
        this.oneState.oneUpImg = true;
        this.oneState.oneHaloUpFlag = '';
        this.oneState.oneFullClass = true;
        setTimeout(function () {
            _this.oneState.oneEmptyClass = true;
            if (_this.oneState.oneDownFullClass) {
                _this.oneState.oneHaloDownFlag = '';
            }
            else {
                _this.oneState.oneHaloDownFlag = 'halo';
            }
        }, 20);
    };
    ;
    // 传感器与执行器启动停止系统按键E693  影响
    ReplaceComponent.prototype.oneDown = function () {
        var _this = this;
        if (this.oneState.oneEmptyClass) {
            this.oneState.oneHaloDownFlag = '';
            this.oneState.oneDownFullClass = true;
            this.oneState.oneDownFlag = true;
            this.oneState.oneUpImg = false;
            this.oneState.oneDown1Img = true;
            setTimeout(function () {
                _this.oneState.oneDown2Img = true;
            }, 15);
        }
        else {
        }
    };
    ;
    // 点击图片显示下一个标题
    ReplaceComponent.prototype.oneDownImages = function () {
        if (this.indexChangeState.sensorIsPass) {
            this.oneState.oneDown1Img = false;
            this.oneState.oneNextFlag = true;
            return;
        }
        this.oneState.oneDown1Img = false;
        this.oneState.oneNextFlag = true;
        this.oneState.oneNextTitleFlag = true;
    };
    ;
    // 点击进入下一个章节
    ReplaceComponent.prototype.oneNext = function () {
        if (this.indexChangeState.sensorIsPass) {
            this.twoState.twoUpImg = true;
            this.twoState.twoNextTitleFlag = true;
        }
        this.indexChangeState.oneFlag = false;
        this.indexChangeState.twoFlag = true;
        this.twoState.twoDown1Img = true;
        console.log(this.oneState.oneUpImg);
        if (window.outerWidth > 1680) {
        }
        else {
            $(document).ready(function () {
                $('#boxTwoScroll').niceScroll({
                    // autohidemode: false,
                    autohidemode: 'leave',
                    cursorborder: '5',
                    background: '#ccc',
                    // boxzoom: true,
                    spacebarenabled: true,
                    preventmultitouchscrolling: true,
                    cursoropacitymin: 0,
                    cursoropacitymax: 1,
                });
            });
        }
    };
    ;
    // 传感器与执行器蓄电池监控单元J367BDM  作用
    ReplaceComponent.prototype.twoUp = function () {
        var _this = this;
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
        setTimeout(function () {
            _this.twoState.twoEmptyClass = true;
            if (_this.twoState.twoDownFullClass) {
                _this.twoState.twoHaloDownFlag = '';
            }
            else {
                _this.twoState.twoHaloDownFlag = 'halo';
            }
        }, 20);
    };
    ;
    // 传感器与执行器蓄电池监控单元J367BDM  影响
    ReplaceComponent.prototype.twoDown = function () {
        var _this = this;
        setTimeout(function () {
            $('#boxTwoScroll').scrollTop(1000);
            $('#boxTwoScroll').getNiceScroll().resize();
        }, 100);
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
            setTimeout(function () {
                _this.twoState.twoDown2Img = true;
            }, 15);
        }
        else {
        }
    };
    ;
    // 点击图片显示下一个标题
    ReplaceComponent.prototype.twoDownImages = function () {
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
        setTimeout(function () {
            $('#boxTwoScroll').scrollTop(150);
        }, 0);
    };
    ;
    // 点击进入下一个章节
    ReplaceComponent.prototype.twoNext = function () {
        if (this.indexChangeState.sensorIsPass) {
            this.threeState.threeDown1Img = true;
            this.threeState.threeNextTitleFlag = true;
        }
        this.threeState.threeDown1Img = true;
        this.indexChangeState.twoFlag = false;
        this.indexChangeState.threeFlag = true;
        $('.nicescroll-rails').hide();
    };
    ;
    // 传感器与执行器变速箱空挡位置传感器G701  定义
    ReplaceComponent.prototype.threeUp = function () {
        var _this = this;
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
        setTimeout(function () {
            _this.threeState.threeEmptyClass = true;
            if (_this.threeState.threeDownFullClass) {
                _this.threeState.threeHaloDownFlag = '';
            }
            else {
                _this.threeState.threeHaloDownFlag = 'halo';
            }
            _this.threeState.threeDown2Img = true;
        }, 15);
    };
    ;
    // 点击图片显示下一个标题
    ReplaceComponent.prototype.threeDownImages = function () {
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
    ;
    // 点击进入下一个章节
    ReplaceComponent.prototype.threeNext = function () {
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
    ;
    // 电源与稳压器EFB蓄电池  注意事项
    ReplaceComponent.prototype.fourUp = function () {
        var _this = this;
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
        setTimeout(function () {
            _this.fourState.fourEmptyClass = true;
            if (_this.fourState.fourDownFullClass) {
                _this.fourState.fourHaloDownFlag = '';
            }
            else {
                _this.fourState.fourHaloDownFlag = 'halo';
            }
        }, 15);
    };
    ;
    // 点击图片显示下一个标题
    ReplaceComponent.prototype.fourDownImages = function () {
    };
    ;
    // 点击进入下一个章节
    ReplaceComponent.prototype.fourNext = function () {
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
                background: '#ccc',
                // boxzoom: true,
                spacebarenabled: true,
                preventmultitouchscrolling: true,
                cursoropacitymin: 0,
                cursoropacitymax: 1,
            });
            // }, 10);
        });
    };
    ;
    // 电源与稳压器稳压器A19  作用
    ReplaceComponent.prototype.fiveUp = function () {
        var _this = this;
        setTimeout(function () {
            $('#boxscroll').scrollTop(150);
            $('#boxscroll').getNiceScroll().resize();
        }, 100);
        this.fourState.fourDown1Img = false;
        this.fourState.fourDown2Img = false;
        this.fiveState.fiveUpFlag = true;
        this.fiveState.fiveUpImg = true;
        this.fiveState.fiveHaloUpFlag = '';
        this.fiveState.fiveFullClass = true;
        setTimeout(function () {
            _this.fiveState.fiveEmptyClass = true;
            if (_this.fiveState.fiveDownFullClass) {
                _this.fiveState.fiveHaloDownFlag = '';
            }
            else {
                _this.fiveState.fiveHaloDownFlag = 'halo';
            }
        }, 20);
    };
    ;
    // 电源与稳压器稳压器A19  影响
    ReplaceComponent.prototype.fiveDown = function () {
        var _this = this;
        setTimeout(function () {
            $('#boxscroll').scrollTop(500);
            $('#boxscroll').getNiceScroll().resize();
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
            setTimeout(function () {
                _this.fiveState.fiveDown2Img = true;
            }, 15);
        }
        else {
        }
    };
    ;
    // 点击图片显示下一个标题
    ReplaceComponent.prototype.fiveDownImages = function () {
        if (this.indexChangeState.powerIsPass) {
            // this.fiveState.fiveNextTitleFlag = false;
            this.fiveState.fiveDown1Img = false;
            this.fiveState.fiveNextFlag = true;
            return;
        }
        this.fiveState.fiveDown1Img = false;
        this.fiveState.fiveNextFlag = true;
        this.fiveState.fiveNextTitleFlag = true;
        setTimeout(function () {
            $('#boxscroll').scrollTop(200);
        }, 0);
    };
    ;
    // 点击进入下一个章节
    ReplaceComponent.prototype.fiveNext = function () {
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
                background: '#ccc',
                // boxzoom: true,
                spacebarenabled: true,
                preventmultitouchscrolling: true,
                cursoropacitymin: 0,
                cursoropacitymax: 1,
            });
        });
        $('.nicescroll-rails').hide();
    };
    ;
    // 返回目录首页
    ReplaceComponent.prototype.back = function () {
        this.indexChangeState.sensorFlag = false;
        this.indexChangeState.powerFlag = false;
        this.indexChangeState.caseFlag = false;
        this.indexChangeState.backFlag = false;
        this.indexChangeState.bodyFlag = true;
        $('.nicescroll-rails').hide();
        $('#ascrail2001-hr').hide();
    };
    ;
    // 生命周期钩子函数
    // 组件开始加载之前
    ReplaceComponent.prototype.ngOnInit = function () {
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
                    background: '#ccc',
                    // boxzoom: true,
                    spacebarenabled: true,
                    preventmultitouchscrolling: true,
                    cursoropacitymin: 0,
                    cursoropacitymax: 1,
                });
            });
        };
    };
    ;
    // 组件销毁之前
    ReplaceComponent.prototype.ngOnDestroy = function () {
        this.indexChangeState.sensorFlag = false;
        this.indexChangeState.powerFlag = false;
        this.indexChangeState.caseFlag = false;
        this.indexChangeState.backFlag = false;
        this.indexChangeState.bodyFlag = true;
        $('.nicescroll-rails').hide();
        $('#ascrail2001-hr').hide();
    };
    return ReplaceComponent;
}());
ReplaceComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'change-direction',
        providers: [],
        animations: [
            __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* flyIn */]
        ],
        template: __webpack_require__(168),
        styles: [__webpack_require__(186)],
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__replace_service__["a" /* ReplaceService */]])
], ReplaceComponent);



/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaceChangeState; });
// export class ChangeState {
// },
// export class ChangeState {
var ReplaceChangeState = [
    {
        btnNum: 1,
        bodyFlag: true,
        oneFlag: true,
        twoFlag: false,
        threeFlag: false,
        fourFlag: true,
        fiveFlag: false,
        sixFlag: false,
        sensorFlag: false,
        powerFlag: false,
        caseFlag: false,
        backFlag: false,
        sensorBtnFlag: 'halo',
        powerBtnFlag: '',
        sensorFullFlag: false,
        powerFullFlag: false,
        powerEmptyFlag: false,
        caseEmptyFlag: false,
        caseFullFlag: false,
        powerIsPassFlag: true,
        caseIsPassFlag: true,
        sensorIsPass: false,
        powerIsPass: false,
        caseIsPass: false,
        oneMouse: false,
        twoMouse: false,
        threeMouse: false,
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
];


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__testQuestions_component__ = __webpack_require__(121);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__testQuestions_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testQuestions_service__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__testQuestions_service__["a"]; });




/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_multimeter_multimeter_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_handle_error_handle_error_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_gear_panel_gear_panel_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__testQuestions_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_appdata_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestQuestionsComponent; });









var TestQuestionsComponent = (function () {
    function TestQuestionsComponent(appdataService, dashboardService, gearPanelService, handleErrorService, multimeterService, testQuestionsService, homeService) {
        this.appdataService = appdataService;
        this.dashboardService = dashboardService;
        this.gearPanelService = gearPanelService;
        this.handleErrorService = handleErrorService;
        this.multimeterService = multimeterService;
        this.testQuestionsService = testQuestionsService;
        this.homeService = homeService;
        this.currentTestQuestion = [];
    }
    // 生命周期钩子函数
    TestQuestionsComponent.prototype.ngOnInit = function () {
        this.currentTestQuestion = this.testQuestionsService.testQuestionList[this.currentChapter];
        this.homeService.currentShowHotArea = this.testQuestionsService.testQuestionList[this.currentChapter][0].currentShowHotArea;
    };
    // 点击选中
    TestQuestionsComponent.prototype.slected = function (item, index, opationItem) {
        item.taskIsShow = true;
        item.taskInfo = opationItem.isRight ? '恭喜你！蒙的真准！' : '上过学吗？这都选错了！';
        item.option.map(function (i, j) {
            i.textStyle.backgroundColor = j === index ? 'rgb(0, 156, 255)' : 'rgb(163, 213, 245)';
            i.checked = j === index ? 'true' : 'false';
            i.textStyle.boxShadow = j === index ? '0 0 4px rgb(0, 156, 255)' : 'none';
        });
    };
    // 点击切换下一题
    TestQuestionsComponent.prototype.nextQustion = function (index) {
        if (this.currentTestQuestion.length == index + 1)
            return;
        this.currentTestQuestion[index].isShow = false;
        this.currentTestQuestion[index].multimeterIsShow = false;
        this.currentTestQuestion[index + 1].isShow = true;
        this.currentTestQuestion[index + 1].multimeterIsShow = true;
        this.homeService.currentShowHotArea = this.currentTestQuestion[index + 1].currentShowHotArea;
        this.homeService.closeAll();
    };
    // 点击切换上一题
    TestQuestionsComponent.prototype.prevQustion = function (index) {
        if (index == 0)
            return;
        this.currentTestQuestion[index].isShow = false;
        this.currentTestQuestion[index].multimeterIsShow = false;
        this.currentTestQuestion[index - 1].isShow = true;
        this.currentTestQuestion[index - 1].multimeterIsShow = true;
        this.homeService.currentShowHotArea = this.currentTestQuestion[index - 1].currentShowHotArea;
        this.homeService.closeAll();
    };
    return TestQuestionsComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Input"])('chapter'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], TestQuestionsComponent.prototype, "currentChapter", void 0);
TestQuestionsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
        selector: 'test-questions',
        providers: [],
        template: __webpack_require__(169),
        styles: [__webpack_require__(187)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__index_appdata_service__["a" /* AppdataService */],
        __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_service__["a" /* DashboardService */],
        __WEBPACK_IMPORTED_MODULE_3__components_gear_panel_gear_panel_service__["a" /* GearPanelService */],
        __WEBPACK_IMPORTED_MODULE_2__components_handle_error_handle_error_service__["a" /* HandleErrorService */],
        __WEBPACK_IMPORTED_MODULE_1__components_multimeter_multimeter_service__["a" /* MultimeterService */],
        __WEBPACK_IMPORTED_MODULE_5__testQuestions_service__["a" /* TestQuestionsService */],
        __WEBPACK_IMPORTED_MODULE_7__home_home_service__["a" /* HomeService */]])
], TestQuestionsComponent);



/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(56);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),
/* 123 */,
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".com-button {\n  position: absolute;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .com-button span {\n    letter-spacing: normal; }\n  .com-button div {\n    display: none; }\n\ndiv:hover {\n  background-color: #0886ae !important; }\n", ""]);

// exports


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".modal {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -512px;\n  z-index: 9999;\n  width: 1024px;\n  height: 580px;\n  background: #3e4346; }\n  .modal .modal-dialog {\n    position: absolute;\n    width: 335px;\n    height: 170px;\n    background: #fff;\n    left: 50%;\n    margin-left: -167px;\n    top: 50%;\n    margin-top: -85px; }\n    .modal .modal-dialog button {\n      position: absolute;\n      width: 76px;\n      height: 26px;\n      border: 1px solid #069eff;\n      border-radius: 3px;\n      text-align: center;\n      line-height: 26px;\n      color: #fff; }\n      .modal .modal-dialog button.no {\n        color: #069eff;\n        top: 100px;\n        left: 60px; }\n      .modal .modal-dialog button.yes {\n        background-color: #009cff;\n        top: 100px;\n        left: 190px; }\n    .modal .modal-dialog img {\n      position: absolute;\n      top: 50px;\n      left: 70px;\n      width: 20px; }\n    .modal .modal-dialog p {\n      position: absolute;\n      top: 50px;\n      left: 100px; }\n", ""]);

// exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".contrlcenter {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 570px;\n  height: 340px;\n  background: url(" + __webpack_require__(190) + ") no-repeat;\n  background-size: 100%; }\n  .contrlcenter .oilMeterPointer {\n    position: absolute;\n    top: 122px;\n    left: 366px;\n    width: 50px;\n    height: 50px;\n    background: url(" + __webpack_require__(191) + ") no-repeat;\n    background-size: 100%;\n    transform: rotate(15deg);\n    transform-origin: center center; }\n  .contrlcenter .on {\n    position: absolute;\n    top: 283px;\n    left: 283px;\n    width: 30px;\n    height: 12px;\n    background: red;\n    cursor: pointer; }\n", ""]);

// exports


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*控制面板*/\n.gear-wrap {\n  position: absolute;\n  bottom: 48px;\n  left: 630px;\n  width: 290px;\n  height: 157px;\n  background: url(" + __webpack_require__(195) + ") no-repeat;\n  background-size: 100%;\n  z-index: 100; }\n\n.gear-wrap .state-wrap {\n  position: absolute;\n  top: 23px;\n  left: 45px;\n  z-index: 4; }\n\n.gear-wrap .state-wrap span {\n  display: inline-block;\n  margin: 0 5px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  font-size: 18px;\n  line-height: 22px;\n  text-align: center;\n  color: #000cff;\n  background: #e3e4e5;\n  box-shadow: #6d6a6a -1px -2px 2px inset;\n  margin-right: 0px; }\n  .gear-wrap .state-wrap span:nth-child(1) {\n    margin-left: 0px; }\n\n.gear-wrap .state-wrap span.active {\n  background: #666668; }\n\n.gear-switch {\n  position: absolute;\n  top: 43px;\n  left: 36px;\n  width: 100px;\n  height: 86px;\n  background: url(" + __webpack_require__(194) + ") no-repeat;\n  background-size: 100%;\n  transform: rotate(-44deg);\n  background-position: center; }\n\n.gear-accelerator {\n  position: absolute;\n  top: 41px;\n  left: 243px;\n  width: 20px;\n  height: 102px; }\n\n.gear-brake {\n  position: absolute;\n  top: 40px;\n  left: 165px;\n  width: 44px;\n  height: 31px;\n  background: url(" + __webpack_require__(193) + ") no-repeat;\n  background-size: 100%;\n  cursor: pointer; }\n\n.gear-accelerator .accelerator {\n  position: absolute;\n  top: 0px;\n  left: 1px;\n  width: 17px;\n  height: 45px;\n  background: url(" + __webpack_require__(192) + ") no-repeat;\n  background-size: 100%; }\n\n.data-show {\n  position: absolute;\n  top: 10px;\n  left: 220px;\n  width: 50px;\n  height: 25px;\n  font-size: .1rem;\n  color: #000;\n  text-align: center; }\n\n.close {\n  opacity: 1;\n  position: absolute;\n  top: -5px;\n  left: 0px;\n  width: 24px;\n  height: 40px;\n  font: 30px \"microsoft yahei\";\n  line-height: 40px;\n  color: #f1a703;\n  cursor: pointer;\n  text-align: center;\n  z-index: 999; }\n", ""]);

// exports


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".handle-error-body {\n  width: 20%;\n  height: 20%;\n  position: absolute;\n  font-size: 14px;\n  /* font-weight: bold; */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background: url(" + __webpack_require__(196) + ") no-repeat;\n  background-size: 100% 100%; }\n", ""]);

// exports


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: \"UnidreamLED\";\n  src: local(\"UnidreamLED\"), local(\"UnidreamLED\"), url(" + __webpack_require__(43) + ") format(\"truetype\"), url(" + __webpack_require__(139) + "#UnidreamLED) format(\"svg\"), url(" + __webpack_require__(43) + ") format(\"truetype\"), url(" + __webpack_require__(140) + ") format(\"woff\"); }\n\n.multimeter-contain {\n  position: absolute;\n  width: 1024px;\n  height: 470px;\n  top: 0;\n  left: 0;\n  overflow: hidden; }\n\n#mask-multimeter {\n  position: absolute;\n  width: 144px;\n  height: 300px;\n  top: 100px;\n  left: 800px;\n  z-index: 12;\n  overflow: hidden; }\n\n.multimeter {\n  position: absolute;\n  left: 0px;\n  width: 143px;\n  height: 320px;\n  float: left;\n  overflow: hidden;\n  background: url(" + __webpack_require__(200) + ") no-repeat 0 0; }\n\n.multimeter-top {\n  position: absolute;\n  width: 97px;\n  height: 74px;\n  top: 21px;\n  font-size: 40px;\n  left: 18px;\n  line-height: 90px;\n  overflow: hidden;\n  text-align: left;\n  color: #454545;\n  font-family: \"UnidreamLED\";\n  text-align: center; }\n\n.showDateUnit {\n  position: absolute;\n  width: 44px;\n  height: 44px;\n  top: 38px;\n  left: 84px;\n  line-height: 44px;\n  overflow: hidden;\n  text-align: center;\n  color: #454545;\n  font-size: 13px;\n  font-weight: bold;\n  font-family: \"Microsoft YaHei\"; }\n\n.circleinfobox {\n  width: 41px;\n  height: 16px;\n  border-radius: 16px;\n  position: absolute;\n  left: 51px;\n  top: 120px;\n  background: #f00;\n  display: none;\n  opacity: 0.3; }\n\n.multimeter-hotarea {\n  width: 41px;\n  height: 16px;\n  border-radius: 16px;\n  position: absolute;\n  left: 51px;\n  top: 120px;\n  z-index: 6; }\n\n.multimeter-topUnit {\n  position: absolute;\n  width: 40px;\n  height: 20px;\n  top: 80px;\n  right: 23px;\n  line-height: 20px;\n  overflow: hidden;\n  text-align: right;\n  color: #454545;\n  font-size: 18px;\n  font-weight: bold;\n  font-family: \"Microsoft YaHei\"; }\n\n.multimeter-rightUnit {\n  position: absolute;\n  width: 40px;\n  height: 20px;\n  top: 73px;\n  right: 75px;\n  line-height: 20px;\n  overflow: hidden;\n  text-align: right;\n  color: #454545;\n  font-size: 12px;\n  font-weight: bold;\n  font-family: \"Microsoft YaHei\"; }\n\n.multimeter-off {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 189px;\n  right: 106px;\n  background: #000;\n  opacity: 0; }\n\n.multimeter-vv {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 161px;\n  right: 99px;\n  background: #000;\n  opacity: 0; }\n\n.multimeter-mv {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 134px;\n  right: 73px;\n  background: #000;\n  opacity: 0; }\n\n.multimeter-v {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 158px;\n  right: 96px;\n  background: #000;\n  opacity: 0; }\n\n.multimeter-nofine {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 145px;\n  right: 37px;\n  background: #000;\n  opacity: 0; }\n\n.multimeter-mA {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 160px;\n  right: 28px;\n  background: #000;\n  opacity: 0; }\n\n.multimeter-res {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  top: 174px;\n  right: 27px;\n  background: #000;\n  opacity: 0; }\n\n.multimeter-bottom {\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: 158px;\n  left: 34px;\n  overflow: hidden;\n  background: url(" + __webpack_require__(203) + ") no-repeat 0 0;\n  transform-origin: center;\n  transform: rotate(16deg); }\n\n.multimeter-Red {\n  position: absolute;\n  width: 30px;\n  height: 70px;\n  bottom: 15px;\n  right: 6px;\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n  background: url(" + __webpack_require__(202) + ") no-repeat 0 0;\n  transform-origin: center; }\n\n.multimeter-black {\n  position: absolute;\n  width: 30px;\n  height: 50px;\n  bottom: 19px;\n  right: 35px;\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n  background: url(" + __webpack_require__(201) + ") no-repeat 0 0;\n  transform-origin: center; }\n\n.multimeter-coe {\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  color: orange;\n  font-weight: bold;\n  font-size: 20px;\n  background: url(" + __webpack_require__(199) + ") no-repeat center center; }\n\n.multimeterRed {\n  position: absolute;\n  width: 27px;\n  height: 244px;\n  top: 117px;\n  left: 940px;\n  z-index: 11;\n  background: url(" + __webpack_require__(197) + ") no-repeat 0 0; }\n\n.multimeterBlack {\n  position: absolute;\n  width: 27px;\n  height: 244px;\n  top: 117px;\n  left: 780px;\n  z-index: 11;\n  background: url(" + __webpack_require__(198) + ") no-repeat 0 0;\n  overflow: hidden; }\n\n.hhjmultimeterBlack-hotspot {\n  position: absolute;\n  top: 320px;\n  left: 781px;\n  width: 20px;\n  height: 40px;\n  background: #000;\n  opacity: 0;\n  z-index: 20;\n  background: #f00;\n  filter: alpha(opacity=0);\n  cursor: pointer; }\n\n.hhjmultimeterRed-hotspot {\n  position: absolute;\n  top: 320px;\n  left: 942px;\n  width: 20px;\n  height: 40px;\n  background: #000;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: 20;\n  cursor: pointer; }\n\n.value {\n  width: 80px;\n  height: 70px;\n  position: absolute;\n  top: 145px;\n  left: 830px;\n  z-index: 100;\n  font-size: 30px;\n  font-family: \"UnidreamLED\"; }\n\n.company {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 170px;\n  z-index: 100;\n  left: 900px;\n  font-size: 20px;\n  font-weight: bold; }\n\n#mask-svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1024px;\n  height: 460px;\n  z-index: 2; }\n\na {\n  width: 23px;\n  height: 23px;\n  position: absolute;\n  z-index: 6;\n  border-radius: 50%;\n  background: red; }\n\n.chapter-08-2-01 .N1 {\n  left: 507px;\n  top: 223px; }\n\n.chapter-08-2-01 .N2 {\n  left: 675px;\n  top: 210px; }\n\n.chapter-08-2-02 .N3 {\n  left: 570px;\n  top: 223px; }\n\n.chapter-08-2-02 .N4 {\n  left: 675px;\n  top: 210px; }\n\n.chapter-08-2-03 .N5 {\n  left: 507px;\n  top: 223px; }\n\n.chapter-08-2-03 .N6 {\n  left: 675px;\n  top: 210px; }\n\n.chapter-08-2-04 .N7 {\n  left: 570px;\n  top: 223px; }\n\n.chapter-08-2-04 .N8 {\n  left: 675px;\n  top: 210px; }\n\n.chapter-12-1-01 .N9 {\n  left: 484px;\n  top: 223px; }\n\n.chapter-12-1-01 .N10 {\n  left: 520px;\n  top: 223px; }\n\n.chapter-13-1-01 .N11 {\n  left: 557px;\n  top: 223px; }\n\n.chapter-13-1-01 .N12 {\n  left: 593px;\n  top: 223px; }\n\n.chapter-15-5-01 .N13 {\n  left: 473px;\n  top: 223px; }\n\n.chapter-15-5-01 .N14 {\n  left: 506px;\n  top: 223px; }\n\n.chapter-16-4-01 .N15 {\n  left: 506px;\n  top: 223px; }\n\n.chapter-16-4-01 .N16 {\n  left: 570px;\n  top: 223px; }\n\n.chapter-16-4-02 .N17 {\n  left: 506px;\n  top: 223px; }\n\n.chapter-16-4-02 .N18 {\n  left: 570px;\n  top: 223px; }\n", ""]);

// exports


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1670px) {\n  .bannerPicList {\n    padding: 0;\n    position: relative; }\n  .bannerPicList li {\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .bannerPicList li.active {\n    display: block;\n    padding: 10px 0px 20px; }\n  .bannerPicList li img {\n    width: 1200px;\n    height: 680px; } }\n\n@media screen and (max-width: 1670px) {\n  .bannerPicList {\n    padding: 0;\n    position: relative; }\n  .bannerPicList li {\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .bannerPicList li.active {\n    display: block;\n    padding: 10px 0px 20px; }\n  .bannerPicList li img {\n    width: 944px;\n    height: 516px; } }\n", ""]);

// exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".container {\n  position: relative;\n  top: 0;\n  left: 0;\n  margin: 0 auto;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  padding: 0;\n  box-sizing: border-box;\n  overflow: hidden; }\n", ""]);

// exports


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "img {\n  display: block;\n  height: auto; }\n\n.f-fl {\n  float: left; }\n\n.g-wA5 {\n  width: 5%; }\n\n.g-wA10 {\n  width: 10%; }\n\n.g-wA15 {\n  width: 15%; }\n\n.g-wA18 {\n  width: 18%; }\n\n.g-wA20 {\n  width: 20%; }\n\n.g-wA27 {\n  width: 27%; }\n\n.g-wA25 {\n  width: 25%; }\n\n.g-wA30 {\n  width: 30%; }\n\n.g-wA40 {\n  width: 40%; }\n\n.g-wA40 {\n  width: 40%; }\n\n.g-wA50 {\n  width: 50%; }\n\n.g-wA60 {\n  width: 60%; }\n\n.g-wA70 {\n  width: 70%; }\n\n.g-wA80 {\n  width: 80%; }\n\n.g-wA90 {\n  width: 90%; }\n\n.g-wA100 {\n  width: 100%; }\n\n.f-mc {\n  margin: auto;\n  text-align: center; }\n\n.f-tac {\n  text-align: center; }\n\n.fs-pl2 {\n  padding-left: 2%; }\n\n.f-pt5 {\n  padding-top: 5px; }\n\n.f-pt20 {\n  padding-top: 20px; }\n\n.f-pt30 {\n  padding-top: 30px; }\n\n.f-pt40 {\n  padding-top: 40px; }\n\n.f-pt80 {\n  padding-top: 80px; }\n\n.f-pt90 {\n  padding-top: 90px; }\n\n.f-pt100 {\n  padding-top: 100px; }\n\n.f-pt110 {\n  padding-top: 110px; }\n\n.f-pt126 {\n  padding-top: 126px; }\n\n.f-pt156 {\n  padding-top: 156px; }\n\n.f-pt130 {\n  padding-top: 130px; }\n\n.f-pt160 {\n  padding-top: 160px; }\n\n.f-pt135 {\n  padding-top: 135px; }\n\n.f-pt192 {\n  padding-top: 192px; }\n\n.f-mt10 {\n  margin-top: 10px; }\n\n.f-mt30 {\n  margin-top: 30px; }\n\n.f-mt50 {\n  margin-top: 50px; }\n\n.f-mt15 {\n  margin-top: 15px; }\n\n.f-mt70 {\n  margin-top: 70px; }\n\n.f-mt75 {\n  margin-top: 75px; }\n\n.f-mt27 {\n  margin-top: 27px; }\n\n.f-fs16 {\n  font-size: 16px; }\n\n.f-pr {\n  position: relative; }\n\n.f-pa {\n  position: absolute; }\n\n.f-dn {\n  display: none; }\n\n.f-csp {\n  cursor: pointer; }\n\n.type_seven {\n  width: 100%; }\n  .type_seven .tip {\n    margin-top: 35px;\n    margin-left: 105px; }\n  .type_seven .table {\n    float: left;\n    width: 450px;\n    padding-left: 50px; }\n    .type_seven .table table {\n      margin-top: 40px;\n      background: #f4f4f4;\n      line-height: 24px;\n      font-size: 14px;\n      width: 450px; }\n      .type_seven .table table tr td {\n        padding: 3px 15px;\n        width: 195px; }\n      .type_seven .table table tr:nth-child(2n) {\n        background: #c1dcf5; }\n      .type_seven .table table tr:first-child {\n        background: #0174dc;\n        color: #fff; }\n    .type_seven .table ul div {\n      font-size: 16px; }\n    .type_seven .table ul li {\n      line-height: 30px;\n      font-size: 14px; }\n  .type_seven .img {\n    float: left;\n    width: 400px;\n    margin: 0 auto;\n    text-align: center;\n    margin-top: 40px; }\n    .type_seven .img img {\n      width: 310px;\n      margin: 0 auto; }\n\n.type_eight {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n  .type_eight .button {\n    position: absolute;\n    right: 70px;\n    bottom: 60px; }\n    .type_eight .button button {\n      width: 110px;\n      line-height: 45px;\n      color: #fff;\n      background: #0174dc;\n      border: none;\n      text-align: center;\n      font-size: 18px;\n      border-radius: 4px; }\n  .type_eight .error {\n    position: absolute;\n    right: 70px;\n    bottom: 30px;\n    color: #ff5d5d; }\n  .type_eight .main {\n    padding-top: 60px;\n    margin-left: 110px; }\n    .type_eight .main .bottom {\n      margin-top: 35px; }\n    .type_eight .main .left {\n      float: left;\n      width: 35%; }\n    .type_eight .main .right {\n      float: left;\n      width: 34%;\n      padding-top: 5px; }\n      .type_eight .main .right img {\n        max-height: 290px; }\n    .type_eight .main table tr td div {\n      border-radius: 4px;\n      background: #c1dcf5;\n      padding: 10px 30px;\n      padding-right: 60px;\n      margin: 5px 0px;\n      font-size: 16px;\n      color: #000; }\n    .type_eight .main table tr td .active {\n      background: #0174dc;\n      color: #fff; }\n    .type_eight .main .title {\n      font-size: 20px;\n      color: #000; }\n      .type_eight .main .title span {\n        font-size: 18px;\n        color: #666;\n        margin-left: 5px; }\n\n.type_thirtyeight {\n  width: 100%;\n  height: 100%;\n  margin: 0px auto;\n  text-align: center;\n  position: relative; }\n  .type_thirtyeight img {\n    position: absolute;\n    width: 100%; }\n  .type_thirtyeight ul li {\n    position: absolute;\n    top: 100px;\n    left: 200px;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #ffbf00;\n    cursor: pointer; }\n  .type_thirtyeight ul div {\n    position: absolute;\n    padding: 2px 15px;\n    border: 2px solid #197dc4;\n    border-radius: 4px;\n    color: #365e93;\n    background-color: #fff; }\n    .type_thirtyeight ul div::before {\n      content: '';\n      position: absolute;\n      top: 23px;\n      right: 12px;\n      width: 0;\n      height: 0;\n      border-top: 8px solid #197dc4;\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent; }\n    .type_thirtyeight ul div::after {\n      content: '';\n      position: absolute;\n      top: 22px;\n      right: 14px;\n      width: 0;\n      height: 0;\n      border-top: 6px solid #fff;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent; }\n\n.type_fifteen {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n  .type_fifteen button {\n    position: absolute;\n    right: 70px;\n    bottom: 60px;\n    width: 110px;\n    line-height: 45px;\n    color: #fff;\n    background: #0174dc;\n    border: none;\n    text-align: center;\n    font-size: 18px;\n    border-radius: 4px; }\n  .type_fifteen .error {\n    position: absolute;\n    right: 70px;\n    bottom: 30px;\n    color: #ff5d5d; }\n  .type_fifteen .main {\n    height: 100%;\n    margin-left: 110px; }\n    .type_fifteen .main .left {\n      margin-top: 35px;\n      width: 30%;\n      position: relative;\n      float: left;\n      height: 300px; }\n      .type_fifteen .main .left .blockdiv {\n        width: 85px;\n        border-radius: 4px;\n        background: #c1dcf5;\n        /* padding: 10px 0px; */\n        padding-left: 15px;\n        margin: 5px 0px;\n        font-size: 14px;\n        color: #000;\n        cursor: pointer;\n        /* text-align: center; */\n        line-height: 30px; }\n    .type_fifteen .main .right {\n      position: relative;\n      width: 70%;\n      float: left;\n      height: 100%; }\n      .type_fifteen .main .right img {\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1; }\n      .type_fifteen .main .right ul {\n        width: 100%;\n        height: 100%; }\n        .type_fifteen .main .right ul div {\n          width: 1px;\n          height: 100px;\n          background: #c1dcf5;\n          position: absolute;\n          z-index: 2;\n          cursor: pointer; }\n        .type_fifteen .main .right ul li {\n          border-radius: 4px;\n          width: 100px;\n          height: 30px;\n          border: 1px solid #c1dcf5;\n          position: absolute;\n          z-index: 2;\n          font-size: 14px;\n          text-align: center;\n          line-height: 30px; }\n    .type_fifteen .main table {\n      position: absolute;\n      z-index: 9; }\n    .type_fifteen .main .title {\n      padding-top: 60px;\n      font-size: 20px;\n      color: #000; }\n      .type_fifteen .main .title span {\n        font-size: 18px;\n        color: #666;\n        margin-left: 5px; }\n\n.type_width {\n  width: 100%;\n  height: 100%;\n  margin: 0px auto;\n  text-align: center;\n  position: relative; }\n  .type_width .return {\n    width: 40px;\n    right: 50px;\n    bottom: 30px;\n    z-index: 99;\n    position: absolute;\n    cursor: pointer; }\n  .type_width .returnimg {\n    width: 60px;\n    position: absolute;\n    right: 30px;\n    bottom: 50px;\n    z-index: 99;\n    cursor: pointer; }\n  .type_width .width1 {\n    width: 128px;\n    height: 51px;\n    line-height: 49px;\n    text-align: center;\n    z-index: 2; }\n  .type_width .width2 {\n    width: 248px;\n    height: 51px;\n    line-height: 49px;\n    text-align: center;\n    z-index: 2; }\n  .type_width .width3 {\n    height: 50px;\n    line-height: 48px;\n    text-align: center;\n    z-index: 2; }\n\n.type-text {\n  width: 100%;\n  height: 100%; }\n  .type-text div {\n    position: absolute;\n    width: 100px;\n    color: #040404;\n    font-size: 14px; }\n\n.type-icontext {\n  width: 100%;\n  height: 100%; }\n  .type-icontext img {\n    position: absolute;\n    top: 116px;\n    left: 100px;\n    width: 90%; }\n  .type-icontext ul {\n    position: absolute;\n    top: 118px;\n    left: 100px;\n    font-size: 12px;\n    text-align: justify; }\n    .type-icontext ul li {\n      width: 420px;\n      color: #999999;\n      line-height: 17px; }\n      .type-icontext ul li div {\n        display: inline-block; }\n        .type-icontext ul li div.one {\n          width: 12px;\n          height: 6px;\n          background-color: #ffbf00;\n          margin-bottom: 18px;\n          margin-right: 6px; }\n        .type-icontext ul li div.two {\n          width: 89%; }\n\n.type-changeText {\n  width: 100%;\n  height: 100%; }\n  .type-changeText div {\n    position: absolute;\n    width: 90px;\n    color: #040404;\n    font-size: 14px; }\n  .type-changeText ul {\n    width: 480px;\n    position: relative;\n    bottom: -370px;\n    left: 495px;\n    background: #fff;\n    border-radius: 5px; }\n    .type-changeText ul li {\n      height: 20px;\n      line-height: 0;\n      color: dimgray;\n      text-align: center; }\n\n.type_exclusive {\n  width: 100%;\n  height: 100%; }\n  .type_exclusive img {\n    position: absolute; }\n  .type_exclusive .stickborder {\n    position: absolute;\n    width: 2px;\n    height: 262px;\n    top: 166px;\n    left: 500px;\n    background: #dadcd9; }\n  .type_exclusive .nav {\n    position: absolute;\n    width: 860px;\n    height: 30px;\n    top: 58px;\n    left: 100px;\n    z-index: 6; }\n    .type_exclusive .nav span {\n      font-weight: bold;\n      margin-right: 20px;\n      cursor: pointer;\n      font-size: 15px; }\n  .type_exclusive ul {\n    position: absolute;\n    left: 500px;\n    top: 140px;\n    padding-left: 60px; }\n    .type_exclusive ul li {\n      width: 410px;\n      color: #999999;\n      margin-bottom: 5px; }\n      .type_exclusive ul li div {\n        display: inline-block; }\n        .type_exclusive ul li div.one {\n          width: 12px;\n          height: 6px;\n          background-color: #ffbf00;\n          margin-bottom: 21px;\n          margin-right: 10px; }\n        .type_exclusive ul li div.two {\n          width: 94%; }\n  .type_exclusive .btn ul {\n    position: absolute;\n    top: 300px;\n    left: 100px;\n    z-index: 1; }\n    .type_exclusive .btn ul li {\n      width: 190px;\n      height: 30px;\n      color: #fff;\n      background-color: #009cff;\n      text-align: center;\n      line-height: 30px;\n      border-radius: 5px;\n      font-weight: bold;\n      cursor: pointer; }\n  .type_exclusive .anatomy ul {\n    position: absolute;\n    top: 370px;\n    left: 100px;\n    z-index: 1; }\n    .type_exclusive .anatomy ul li {\n      width: 190px;\n      height: 30px;\n      color: #fff;\n      background: #009cff;\n      text-align: center;\n      line-height: 30px;\n      border-radius: 5px;\n      font-weight: bold;\n      cursor: pointer; }\n  .type_exclusive .tip ul li {\n    position: absolute;\n    top: 100px;\n    left: 200px;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #ffbf00;\n    cursor: pointer; }\n  .type_exclusive .tip ul div {\n    position: absolute;\n    padding: 2px 15px;\n    border: 2px solid #197dc4;\n    border-radius: 4px;\n    color: #365e93;\n    background-color: #fff;\n    white-space: nowrap; }\n    .type_exclusive .tip ul div::before {\n      content: '';\n      position: absolute;\n      top: 23px;\n      right: 12px;\n      width: 0;\n      height: 0;\n      border-top: 8px solid #197dc4;\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent; }\n    .type_exclusive .tip ul div::after {\n      content: '';\n      position: absolute;\n      top: 22px;\n      right: 14px;\n      width: 0;\n      height: 0;\n      border-top: 6px solid #fff;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent; }\n  .type_exclusive .childPage {\n    position: absolute;\n    width: 100%;\n    z-index: 6; }\n    .type_exclusive .childPage .anatomyDot {\n      position: absolute;\n      top: 100px;\n      left: 200px;\n      width: 30px;\n      height: 113px;\n      cursor: pointer; }\n    .type_exclusive .childPage .childClose {\n      width: 30px;\n      height: 30px;\n      position: absolute;\n      top: 75px;\n      right: 33px;\n      background: url(" + __webpack_require__(21) + ") no-repeat;\n      background-size: 100%;\n      z-index: 2;\n      font-size: 30px; }\n    .type_exclusive .childPage .childtitle {\n      z-index: 2;\n      color: #06397c;\n      position: absolute;\n      top: 2px;\n      left: 0px;\n      width: 300px;\n      font-size: 20px;\n      font-weight: bold; }\n    .type_exclusive .childPage .contain {\n      position: absolute;\n      top: -192px;\n      left: -500px;\n      width: 1024px;\n      height: 520px;\n      background: url(" + __webpack_require__(26) + ") no-repeat;\n      z-index: 1;\n      background-size: 100%; }\n      .type_exclusive .childPage .contain .tip img {\n        position: absolute; }\n      .type_exclusive .childPage .contain .tip .stickborder {\n        position: absolute;\n        width: 2px;\n        height: 262px;\n        top: 166px;\n        left: 500px;\n        background: #aad893; }\n      .type_exclusive .childPage .contain .tip .changjing {\n        top: 166px;\n        left: 100px; }\n      .type_exclusive .childPage .contain .text {\n        position: absolute;\n        width: 100%;\n        top: 50px; }\n        .type_exclusive .childPage .contain .text ul {\n          position: absolute;\n          left: 500px;\n          top: 140px;\n          padding-left: 60px; }\n          .type_exclusive .childPage .contain .text ul li {\n            width: 410px;\n            line-height: 30px;\n            color: #999999;\n            margin-bottom: 5px; }\n            .type_exclusive .childPage .contain .text ul li div {\n              display: inline-block; }\n              .type_exclusive .childPage .contain .text ul li div.one {\n                width: 0;\n                height: 0;\n                border-top: 7px solid #ffffff;\n                border-left: 9px solid #fede80;\n                border-bottom: 7px solid #ffffff;\n                margin-bottom: -1px;\n                margin-right: 10px; }\n              .type_exclusive .childPage .contain .text ul li div.two {\n                width: 94%; }\n      .type_exclusive .childPage .contain .childBtn ul {\n        position: absolute;\n        top: 344px;\n        left: 100px;\n        z-index: 1; }\n        .type_exclusive .childPage .contain .childBtn ul li {\n          width: 190px;\n          height: 30px;\n          color: #fff;\n          background: #009cff;\n          text-align: center;\n          line-height: 30px;\n          border-radius: 5px;\n          font-weight: bold;\n          cursor: pointer;\n          margin-bottom: 20px; }\n\n.type_imgText {\n  width: 100%;\n  height: 100%; }\n  .type_imgText img {\n    position: absolute; }\n  .type_imgText .stickborder {\n    position: absolute;\n    width: 2px;\n    height: 262px;\n    top: 166px;\n    left: 500px;\n    background: #dadcd9; }\n  .type_imgText .changjing {\n    top: 116px;\n    left: 100px;\n    width: 110px; }\n  .type_imgText .changjing1 {\n    top: 316px;\n    left: 100px;\n    width: 160px;\n    height: 110px; }\n  .type_imgText .changjing2 {\n    top: 316px;\n    left: 276px;\n    width: 160px;\n    height: 110px; }\n  .type_imgText .nav {\n    position: absolute;\n    width: 860px;\n    height: 30px;\n    top: 58px;\n    left: 100px;\n    z-index: 6; }\n    .type_imgText .nav span {\n      font-weight: bold;\n      margin-right: 20px;\n      cursor: pointer;\n      font-size: 15px; }\n  .type_imgText ul {\n    position: absolute;\n    left: 500px;\n    top: 140px;\n    padding-left: 60px; }\n    .type_imgText ul li {\n      width: 410px;\n      line-height: 30px;\n      color: #999999;\n      margin-bottom: 5px; }\n      .type_imgText ul li div {\n        display: inline-block; }\n        .type_imgText ul li div.one {\n          width: 0;\n          height: 0;\n          border-top: 7px solid #ffffff;\n          border-left: 9px solid #fede80;\n          border-bottom: 7px solid #ffffff;\n          margin-bottom: -1px;\n          margin-right: 10px; }\n        .type_imgText ul li div.two {\n          width: 94%; }\n  .type_imgText .btn ul {\n    position: absolute;\n    top: 300px;\n    left: 100px;\n    z-index: 1; }\n    .type_imgText .btn ul li {\n      width: 190px;\n      height: 30px;\n      color: #fff;\n      background-color: #009cff;\n      text-align: center;\n      line-height: 30px;\n      border-radius: 5px;\n      font-weight: bold;\n      cursor: pointer; }\n  .type_imgText .anatomy ul {\n    position: absolute;\n    top: 370px;\n    left: 100px;\n    z-index: 1; }\n    .type_imgText .anatomy ul li {\n      width: 190px;\n      height: 30px;\n      color: #fff;\n      background: #009cff;\n      text-align: center;\n      line-height: 30px;\n      border-radius: 5px;\n      font-weight: bold;\n      cursor: pointer; }\n  .type_imgText .tip ul li {\n    position: absolute;\n    top: 100px;\n    left: 200px;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #ffbf00;\n    cursor: pointer; }\n  .type_imgText .tip ul div {\n    position: absolute;\n    padding: 2px 15px;\n    border: 2px solid #197dc4;\n    border-radius: 4px;\n    color: #365e93;\n    background-color: #fff;\n    white-space: nowrap; }\n    .type_imgText .tip ul div::before {\n      content: '';\n      position: absolute;\n      top: 23px;\n      right: 12px;\n      width: 0;\n      height: 0;\n      border-top: 8px solid #197dc4;\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent; }\n    .type_imgText .tip ul div::after {\n      content: '';\n      position: absolute;\n      top: 22px;\n      right: 14px;\n      width: 0;\n      height: 0;\n      border-top: 6px solid #fff;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent; }\n  .type_imgText .childPage {\n    position: absolute;\n    width: 100%;\n    z-index: 6; }\n    .type_imgText .childPage .anatomyDot {\n      position: absolute;\n      top: 100px;\n      left: 200px;\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      background: #ffbf00;\n      cursor: pointer; }\n    .type_imgText .childPage .childClose {\n      width: 30px;\n      height: 30px;\n      position: absolute;\n      top: 75px;\n      right: 33px;\n      background: url(" + __webpack_require__(21) + ") no-repeat;\n      background-size: 100%;\n      z-index: 2;\n      font-size: 30px; }\n    .type_imgText .childPage .childtitle {\n      z-index: 2;\n      color: #06397c;\n      position: absolute;\n      top: 2px;\n      left: 0px;\n      width: 300px;\n      font-size: 20px;\n      font-weight: bold; }\n    .type_imgText .childPage .contain {\n      position: absolute;\n      top: -170px;\n      left: -100px;\n      width: 1024px;\n      height: 520px;\n      background: url(" + __webpack_require__(26) + ") no-repeat;\n      z-index: 1;\n      background-size: 100%; }\n      .type_imgText .childPage .contain .tip img {\n        position: absolute;\n        top: 171px;\n        left: 94px;\n        width: 89%; }\n      .type_imgText .childPage .contain .text ul {\n        position: absolute;\n        top: 208px;\n        left: 100px; }\n        .type_imgText .childPage .contain .text ul li {\n          width: 300px;\n          color: #999999;\n          margin-bottom: 3px; }\n          .type_imgText .childPage .contain .text ul li div {\n            width: 88%;\n            display: inline-block; }\n      .type_imgText .childPage .contain .childBtn ul {\n        position: absolute;\n        top: 344px;\n        left: 100px;\n        z-index: 1; }\n        .type_imgText .childPage .contain .childBtn ul li {\n          width: 190px;\n          height: 30px;\n          color: #fff;\n          background: #009cff;\n          text-align: center;\n          line-height: 30px;\n          border-radius: 5px;\n          font-weight: bold;\n          cursor: pointer;\n          margin-bottom: 20px; }\n\n.type_sequentialClicks {\n  width: 100%;\n  height: 100%; }\n  .type_sequentialClicks img {\n    position: absolute;\n    top: 116px;\n    left: 100px;\n    width: 90%; }\n  .type_sequentialClicks .nav {\n    position: absolute;\n    width: 390px;\n    height: 30px;\n    top: 58px;\n    left: 100px;\n    z-index: 6; }\n    .type_sequentialClicks .nav span {\n      font-weight: bold;\n      margin-right: 20px;\n      cursor: pointer;\n      font-size: 15px; }\n  .type_sequentialClicks ul {\n    position: absolute;\n    top: 118px;\n    left: 100px; }\n    .type_sequentialClicks ul li {\n      width: 300px;\n      color: #999999;\n      margin-bottom: 5px; }\n      .type_sequentialClicks ul li div {\n        display: inline-block; }\n        .type_sequentialClicks ul li div.one {\n          width: 12px;\n          height: 6px;\n          background-color: #ffbf00;\n          margin-bottom: 21px;\n          margin-right: 10px; }\n        .type_sequentialClicks ul li div.two {\n          width: 89%; }\n  .type_sequentialClicks .btn ul {\n    position: absolute;\n    top: 110px;\n    left: 100px;\n    z-index: 1; }\n    .type_sequentialClicks .btn ul li {\n      width: 190px;\n      height: 30px;\n      color: #fff;\n      text-align: center;\n      line-height: 30px;\n      border-radius: 5px;\n      font-weight: bold;\n      cursor: pointer;\n      z-index: 2;\n      position: relative;\n      margin-bottom: 14px;\n      top: 15px; }\n    .type_sequentialClicks .btn ul .content {\n      position: absolute;\n      top: 170px; }\n      .type_sequentialClicks .btn ul .content .contentIcon {\n        width: 300px;\n        display: inline-block; }\n        .type_sequentialClicks .btn ul .content .contentIcon.one {\n          width: 12px;\n          height: 6px;\n          background-color: #ffbf00;\n          margin-top: 7px;\n          margin-right: 10px; }\n        .type_sequentialClicks .btn ul .content .contentIcon.two {\n          width: 89%; }\n    .type_sequentialClicks .btn ul img {\n      position: absolute;\n      width: 1000px;\n      top: 6px;\n      left: -76px; }\n\n.type-paging img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%; }\n\n.type-paging .page {\n  position: absolute;\n  z-index: 100; }\n  .type-paging .page .prev {\n    position: absolute;\n    top: 182px;\n    left: 79px;\n    width: 80px;\n    cursor: pointer; }\n  .type-paging .page .next {\n    position: absolute;\n    top: 284px;\n    left: 76px;\n    width: 80px;\n    cursor: pointer; }\n\n.show1,\n.show2,\n.show3,\n.show4,\n.show5,\n.show6 {\n  display: none; }\n\n.scalenarrow {\n  animation: scalenarrow 2s ease; }\n\n@keyframes scalenarrow {\n  from {\n    transform: scale(1.6, 1.6); }\n  to {\n    transform: scale(1, 1); } }\n\n.removescale {\n  animation: removescale 2s ease; }\n\n@keyframes removescale {\n  from {\n    transform: scale(1.6, 1.6);\n    position: absolute;\n    left: 40%;\n    top: 5%; }\n  to {\n    transform: scale(1, 1);\n    position: absolute;\n    left: 0;\n    top: 0; } }\n\n.showopa {\n  animation: showopa 2s ease; }\n\n@keyframes showopa {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.topIn {\n  animation: topIn 2s ease; }\n\n@keyframes topIn {\n  from {\n    transform: translateY(60px);\n    opacity: 0; }\n  to {\n    transform: translateY(0px);\n    opacity: 1; } }\n\n.topleft {\n  animation: topleft 2s ease; }\n\n@keyframes topleft {\n  from {\n    transform: translateX(-160px);\n    opacity: 0; }\n  to {\n    transform: translateX(0px);\n    opacity: 1; } }\n\n.topright {\n  animation: topright 2s ease; }\n\n@keyframes topright {\n  from {\n    transform: translateX(160px);\n    opacity: 0; }\n  to {\n    transform: translateX(0px);\n    opacity: 1; } }\n\n.btn-twinkle {\n  border: none;\n  animation: twinkle 1s ease alternate infinite; }\n\n@keyframes twinkle {\n  from {\n    opacity: 0.3; }\n  to {\n    opacity: 1; } }\n\n.move-twinkle {\n  border: none;\n  animation: movetwinkle 1.5s ease alternate infinite; }\n\n@keyframes movetwinkle {\n  from {\n    transform: translateY(0px);\n    opacity: 0.3; }\n  to {\n    transform: translateY(-9px);\n    opacity: 1; } }\n\n.f-cb:after,\n.f-cbli li:after {\n  display: block;\n  clear: both;\n  visibility: hidden;\n  height: 0;\n  overflow: hidden;\n  content: \".\"; }\n\n.f-cb,\n.f-cbli li {\n  zoom: 1; }\n\n.f-cpt {\n  cursor: pointer; }\n\n.title {\n  position: absolute;\n  top: 25px;\n  left: 40px;\n  color: #999999;\n  font-size: 16px;\n  font-weight: bold;\n  z-index: 10; }\n\n.type_changeImg {\n  height: 100px;\n  width: 100%;\n  position: absolute;\n  background: url(" + __webpack_require__(209) + ") no-repeat;\n  background-size: 100%; }\n\n.type_changeImg .toptitle {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 16px;\n  margin-left: 36px;\n  color: white; }\n\n.type_changeImg ul {\n  list-style: none;\n  margin-left: 70px;\n  margin-top: 16px;\n  width: 880px;\n  background: #ffffff; }\n\n.type_changeImg .text li {\n  display: inline-block;\n  height: 77px;\n  width: 98px;\n  margin: 0px -2px; }\n\n.type_changeImg img {\n  width: 98px;\n  height: 77px; }\n\n.type_changeImg .videoImg {\n  height: 100px;\n  width: 100%;\n  position: absolute;\n  list-style: none;\n  margin-left: 30px;\n  margin-top: 30px; }\n\n.type_changeImg .videoImg li {\n  display: inline-block;\n  line-height: 40px;\n  margin: 0px -2px; }\n\n.type_changeImg .videoImg .poster {\n  width: 150px;\n  height: 144px;\n  margin-right: 20px; }\n\n.type_changeImg .videoImg span {\n  font-weight: bold; }\n\n.type_changeImg .videoList {\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  position: absolute;\n  background-color: #ffffff; }\n\n.type_changeImg .videoList video {\n  width: 80%;\n  margin: 0 auto;\n  left: 10%;\n  top: 2px;\n  position: relative; }\n\n.type_rotate {\n  width: 100%;\n  height: 100%; }\n  .type_rotate img {\n    position: absolute;\n    top: 116px;\n    left: 100px;\n    width: 90%; }\n  .type_rotate .nav {\n    position: absolute;\n    width: 390px;\n    height: 30px;\n    top: 58px;\n    left: 100px;\n    z-index: 6; }\n    .type_rotate .nav span {\n      font-weight: bold;\n      margin-right: 20px;\n      cursor: pointer;\n      font-size: 15px; }\n  .type_rotate ul {\n    position: absolute;\n    top: 118px;\n    left: 100px; }\n    .type_rotate ul li {\n      width: 300px;\n      color: #999999;\n      margin-bottom: 5px; }\n      .type_rotate ul li div {\n        display: inline-block; }\n        .type_rotate ul li div.one {\n          width: 12px;\n          height: 6px;\n          background-color: #ffbf00;\n          margin-bottom: 21px;\n          margin-right: 10px; }\n        .type_rotate ul li div.two {\n          width: 89%; }\n  .type_rotate .btn ul {\n    position: absolute;\n    top: 300px;\n    left: 100px;\n    z-index: 1; }\n    .type_rotate .btn ul li {\n      width: 190px;\n      height: 30px;\n      color: #fff;\n      background-color: #009cff;\n      text-align: center;\n      line-height: 30px;\n      border-radius: 5px;\n      font-weight: bold;\n      cursor: pointer; }\n  .type_rotate .anatomy ul {\n    position: absolute;\n    top: 370px;\n    left: 100px;\n    z-index: 1; }\n    .type_rotate .anatomy ul li {\n      width: 190px;\n      height: 30px;\n      color: #fff;\n      background: #009cff;\n      text-align: center;\n      line-height: 30px;\n      border-radius: 5px;\n      font-weight: bold;\n      cursor: pointer; }\n  .type_rotate .tip ul li {\n    position: absolute;\n    top: 100px;\n    left: 200px;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #ffbf00;\n    cursor: pointer; }\n  .type_rotate .tip ul div {\n    position: absolute;\n    padding: 2px 15px;\n    border: 2px solid #197dc4;\n    border-radius: 4px;\n    color: #365e93;\n    background-color: #fff;\n    white-space: nowrap; }\n    .type_rotate .tip ul div::before {\n      content: '';\n      position: absolute;\n      top: 23px;\n      right: 12px;\n      width: 0;\n      height: 0;\n      border-top: 8px solid #197dc4;\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent; }\n    .type_rotate .tip ul div::after {\n      content: '';\n      position: absolute;\n      top: 22px;\n      right: 14px;\n      width: 0;\n      height: 0;\n      border-top: 6px solid #fff;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent; }\n  .type_rotate .childPage {\n    position: absolute;\n    width: 100%;\n    z-index: 6; }\n    .type_rotate .childPage .anatomyDot {\n      position: absolute;\n      top: 100px;\n      left: 200px;\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      background: #ffbf00;\n      cursor: pointer; }\n    .type_rotate .childPage .childClose {\n      width: 30px;\n      height: 30px;\n      position: absolute;\n      top: 75px;\n      right: 33px;\n      background: url(" + __webpack_require__(21) + ") no-repeat;\n      background-size: 100%;\n      z-index: 2;\n      font-size: 30px; }\n    .type_rotate .childPage .childtitle {\n      z-index: 2;\n      color: #06397c;\n      position: absolute;\n      top: 2px;\n      left: 0px;\n      width: 300px;\n      font-size: 20px;\n      font-weight: bold; }\n    .type_rotate .childPage .contain {\n      position: absolute;\n      top: -170px;\n      left: -100px;\n      width: 1024px;\n      height: 520px;\n      background: url(" + __webpack_require__(26) + ") no-repeat;\n      z-index: 1;\n      background-size: 100%; }\n      .type_rotate .childPage .contain .tip img {\n        position: absolute;\n        top: 171px;\n        left: 94px;\n        width: 89%; }\n      .type_rotate .childPage .contain .text ul {\n        position: absolute;\n        top: 208px;\n        left: 100px; }\n        .type_rotate .childPage .contain .text ul li {\n          width: 300px;\n          color: #999999;\n          margin-bottom: 3px; }\n          .type_rotate .childPage .contain .text ul li div {\n            width: 88%;\n            display: inline-block; }\n      .type_rotate .childPage .contain .childBtn ul {\n        position: absolute;\n        top: 344px;\n        left: 100px;\n        z-index: 1; }\n        .type_rotate .childPage .contain .childBtn ul li {\n          width: 190px;\n          height: 30px;\n          color: #fff;\n          background: #009cff;\n          text-align: center;\n          line-height: 30px;\n          border-radius: 5px;\n          font-weight: bold;\n          cursor: pointer;\n          margin-bottom: 20px; }\n\n.videoList {\n  /* video container */\n  /* video caption css */\n  /*** VIDEO CONTROLS CSS ***/\n  /* control holder */\n  /* control bottom part */\n  /* PROGRESS BAR CSS */\n  /* Progress bar */\n  /* VOLUME BAR CSS */\n  /* volume bar */ }\n  .videoList .videoClose {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    cursor: pointer;\n    background: url(" + __webpack_require__(21) + ") no-repeat;\n    background-size: 100%;\n    z-index: 2;\n    font-size: 30px; }\n  .videoList .videoContainer {\n    width: 800px;\n    height: 100%;\n    position: relative;\n    overflow: hidden;\n    background: #000;\n    color: #ccc;\n    border: 1px solid rgba(0, 0, 0, 0.8);\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n    margin: 50px auto 0; }\n  .videoList .videoContainer:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3);\n    z-index: 6;\n    border-radius: 6px;\n    pointer-events: none; }\n  .videoList .caption {\n    display: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 5px 10px;\n    color: #ddd;\n    font-size: 14px;\n    font-weight: 300;\n    text-align: center;\n    background: rgba(0, 0, 0, 0.4);\n    text-transform: uppercase;\n    border-radius: 6px 6px 0 0;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    -ms-backface-visibility: hidden; }\n  .videoList .control {\n    color: #ccc;\n    position: absolute;\n    bottom: -20px;\n    width: 100%;\n    z-index: 10;\n    /* display: none; */ }\n  .videoList .btmControl {\n    clear: both; }\n  .videoList .control .btnPlay {\n    float: left;\n    width: 24px;\n    height: 30px;\n    padding: 5px;\n    background: rgba(0, 0, 0, 0.5);\n    cursor: pointer;\n    border-radius: 6px 0 0 6px;\n    border: 1px solid rgba(0, 0, 0, 0.7);\n    box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.5); }\n  .videoList .control .icon-play {\n    background: url(" + __webpack_require__(22) + ") no-repeat -11px 0;\n    width: 6px;\n    height: 9px;\n    display: block;\n    margin: 4px 0 0 8px; }\n  .videoList .control .icon-pause {\n    background: url(" + __webpack_require__(22) + ") no-repeat -34px -1px;\n    width: 8px;\n    height: 9px;\n    display: block;\n    margin: 4px 0 0 8px; }\n  .videoList .control .selected {\n    font-size: 15px;\n    color: #ccc; }\n  .videoList .control .timeUpdate {\n    float: left;\n    font-size: 12px;\n    width: 80px;\n    height: 30px;\n    padding: 6px 2px;\n    background: rgba(0, 0, 0, 0.5); }\n  .videoList .control .sound {\n    width: 30px;\n    height: 30px;\n    float: left;\n    background: rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(0, 0, 0, 0.7);\n    border-left: none;\n    box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.5);\n    cursor: pointer; }\n  .videoList .control .icon-sound {\n    background: url(" + __webpack_require__(22) + ") no-repeat -19px 0;\n    width: 13px;\n    height: 10px;\n    display: block;\n    margin: 8px 0 0 8px; }\n  .videoList .control .muted .icon-sound {\n    width: 7px !important; }\n  .videoList .control .btnFS {\n    width: 30px;\n    height: 30px;\n    border-radius: 0 6px 6px 0;\n    float: left;\n    background: rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(0, 0, 0, 0.7);\n    border-left: none;\n    box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.5); }\n  .videoList .control .icon-fullscreen {\n    background: url(" + __webpack_require__(22) + ") no-repeat 0 0;\n    width: 10px;\n    height: 10px;\n    display: block;\n    margin: 8px 0 0 9px; }\n  .videoList .progress-bar {\n    height: 30px;\n    padding: 10px;\n    padding-left: 0px;\n    background: rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(0, 0, 0, 0.7);\n    border-left: none;\n    float: left; }\n  .videoList .progress {\n    width: 606px;\n    height: 7px;\n    position: relative;\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.4);\n    /* fallback */\n    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 1px 1px black;\n    border-radius: 10px; }\n  .videoList .progress span {\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    border-radius: 10px; }\n  .videoList .progress span.thumb {\n    display: block;\n    width: 50px;\n    height: 20px;\n    margin-top: -5px;\n    z-index: 10;\n    background: url(" + __webpack_require__(204) + ") no-repeat;\n    background-size: 100%; }\n  .videoList .progress .timeBar {\n    z-index: 10;\n    width: 0;\n    background: #6bcce2;\n    background: -webkit-linear-gradient(top, #6bcce2 0%, #1da3d0 100%);\n    background: -moz-linear-gradient(top, #6bcce2 0%, #1da3d0 100%);\n    background: -o-linear-gradient(top, #6bcce2 0%, #1da3d0 100%);\n    background: -ms-linear-gradient(top, #6bcce2 0%, #1da3d0 100%);\n    box-shadow: 0 0 7px rgba(107, 204, 226, 0.5); }\n  .videoList .bufferBar {\n    z-index: 10;\n    width: 0;\n    background: rgba(255, 255, 255, 0.2); }\n  .videoList .volume {\n    position: relative;\n    cursor: pointer;\n    width: 70px;\n    height: 10px;\n    float: right;\n    margin-top: 10px;\n    margin-right: 10px; }\n  .videoList .volumeBar {\n    display: block;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: #eee;\n    z-index: 10; }\n", ""]);

// exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "img {\n  max-width: 100%;\n  display: block;\n  height: auto; }\n\n.type_width {\n  width: 560px;\n  height: 390px;\n  margin: 0px auto;\n  text-align: center;\n  position: absolute;\n  top: 10px;\n  right: 40px;\n  border: 3px solid #607692;\n  border-radius: 5px;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  z-index: 10;\n  background: #fff; }\n  .type_width::before {\n    content: '';\n    position: absolute;\n    top: -13px;\n    right: 57px;\n    width: 0;\n    height: 0;\n    border-bottom: 13px solid #607692;\n    border-left: 18px solid transparent;\n    border-right: 18px solid transparent; }\n  .type_width::after {\n    content: '';\n    position: absolute;\n    top: -9px;\n    right: 59px;\n    width: 0;\n    height: 0;\n    border-bottom: 13px solid #fff;\n    border-left: 16px solid transparent;\n    border-right: 16px solid transparent; }\n  .type_width .title {\n    width: 100%;\n    height: 13%;\n    line-height: 40px;\n    color: #b3b3b3;\n    text-align: left;\n    border-bottom: 1px solid #f2f2f2; }\n  .type_width .content {\n    width: 100%;\n    padding: 10px 0px 0 20px;\n    height: 83%;\n    box-sizing: border-box; }\n    .type_width .content ul {\n      width: 100%;\n      height: 100%; }\n      .type_width .content ul li {\n        line-height: 40px;\n        height: 42px; }\n        .type_width .content ul li div:nth-child(1) {\n          float: left; }\n          .type_width .content ul li div:nth-child(1) img {\n            display: inline-block;\n            vertical-align: middle;\n            width: 30px; }\n        .type_width .content ul li div:nth-child(2) {\n          text-align: left;\n          float: right;\n          width: 88%;\n          border-bottom: 1px solid #f2f2f2; }\n          .type_width .content ul li div:nth-child(2) span {\n            margin-right: 10px; }\n            .type_width .content ul li div:nth-child(2) span:nth-child(1) {\n              color: #373737;\n              font-weight: bold;\n              width: 100px;\n              display: inline-block; }\n            .type_width .content ul li div:nth-child(2) span:nth-child(2) {\n              color: #d4d4d4;\n              font-weight: bold; }\n", ""]);

// exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nimg {\n  max-width: 100%;\n  display: block;\n  height: auto; }\n\n.f-csp {\n  cursor: pointer; }\n\n.f-dn {\n  display: none; }\n\n.container {\n  overflow: hidden;\n  position: relative;\n  top: 0;\n  left: 0;\n  margin: 0 auto;\n  border: none;\n  width: 1024px;\n  height: 580px;\n  background-color: #fff;\n  box-shadow: 5px 0px 5px -5px #aaa, -5px 0px 5px -5px #aaa; }\n\n.header {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  color: #555;\n  background: #e60012; }\n  .header .logo {\n    float: left;\n    margin-top: 5px;\n    margin-left: 30px; }\n  .header .title {\n    float: left;\n    margin-top: 14px;\n    margin-left: 30px;\n    font-size: 18px;\n    line-height: 30px;\n    color: #fff;\n    font-weight: bold; }\n  .header .menu {\n    float: right;\n    width: 400px;\n    height: 60px;\n    line-height: 60px; }\n    .header .menu ul li {\n      float: right;\n      width: 25px;\n      margin-top: 17px;\n      margin-right: 40px; }\n\n.foot {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  width: 100%;\n  height: 50px;\n  font-size: 16px;\n  box-shadow: 0 3px 0 #a6a6a6 inset;\n  -moz-box-shadow: 5px 5px 5px #eee;\n  box-shadow: 5px 5px 5px #eee;\n  background: #06397c; }\n  .foot .foot_menu {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    height: 50px;\n    line-height: 50px;\n    color: #fff; }\n    .foot .foot_menu img {\n      margin-top: 10px; }\n    .foot .foot_menu div {\n      float: left;\n      margin-left: 2%;\n      font-size: 20px;\n      font-weight: bold; }\n  .foot .foot_red {\n    width: 40%;\n    height: 50px;\n    position: relative; }\n    .foot .foot_red .foot_red_pozistion {\n      position: absolute;\n      top: 0;\n      right: -50px; }\n    .foot .foot_red .triangle_border_down {\n      width: 0;\n      height: 0;\n      /*灰 透明 透明 */\n      position: relative; }\n    .foot .foot_red .triangle_border_down span {\n      display: block;\n      width: 0;\n      height: 0;\n      /*黄 透明 透明 */\n      position: absolute;\n      top: -48px;\n      left: -48px; }\n  .foot .foot_Paging {\n    float: right;\n    margin-right: 40px; }\n    .foot .foot_Paging ul {\n      height: 25px;\n      line-height: 25px;\n      margin-top: 12px;\n      font-size: 14px;\n      text-align: center; }\n      .foot .foot_Paging ul .f-ma4 {\n        margin: 0px 10px; }\n      .foot .foot_Paging ul li {\n        float: left;\n        min-width: 25px; }\n        .foot .foot_Paging ul li input {\n          width: 25px;\n          text-align: center;\n          color: #fff; }\n        .foot .foot_Paging ul li a {\n          display: block;\n          color: #fff;\n          width: 100%; }\n        .foot .foot_Paging ul li img {\n          margin: 0 auto;\n          width: 25px;\n          text-align: center; }\n\n.main {\n  position: relative;\n  overflow: hidden;\n  width: 1024px;\n  height: 467px;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center top; }\n  .main .main-menu {\n    position: absolute;\n    float: left;\n    width: 90px;\n    text-align: center;\n    height: 470px;\n    z-index: 6; }\n    .main .main-menu ul {\n      padding-top: 35%;\n      height: 470px;\n      box-sizing: border-box; }\n      .main .main-menu ul li {\n        margin-top: 80%; }\n        .main .main-menu ul li img {\n          margin: 0 auto;\n          text-align: center; }\n  .main .main-content {\n    position: absolute;\n    width: 1024px;\n    height: 470px; }\n\n.course_menue {\n  width: 280px;\n  height: 430px;\n  position: absolute;\n  bottom: 50px;\n  left: 0;\n  background: #f4f4f4;\n  z-index: 111;\n  text-align: center;\n  border-radius: 2px;\n  font-size: 10px;\n  font-weight: bold;\n  color: #6c6c6c;\n  cursor: pointer; }\n  .course_menue h2 {\n    font-size: 16px;\n    line-height: 60px; }\n  .course_menue .catalogNav {\n    padding: 0 20px; }\n    .course_menue .catalogNav li {\n      width: 100%;\n      height: 50px;\n      border-bottom: 1px #e3e3e3 solid;\n      line-height: 50px; }\n      .course_menue .catalogNav li div:nth-child(1) {\n        float: left; }\n      .course_menue .catalogNav li div:nth-child(2) {\n        float: right;\n        margin-top: 17px; }\n        .course_menue .catalogNav li div:nth-child(2) img {\n          width: 70%; }\n    .course_menue .catalogNav .childNav {\n      padding: 20px 0 0 0; }\n      .course_menue .catalogNav .childNav li {\n        border-bottom: none;\n        height: 30px;\n        line-height: 30px; }\n\n.cover {\n  top: 0;\n  left: 0;\n  position: relative;\n  overflow: hidden;\n  width: 1024px;\n  height: 580px;\n  background-image: url(" + __webpack_require__(205) + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n  z-index: 1; }\n  .cover .showimg {\n    width: 360px;\n    position: absolute;\n    top: 300px;\n    left: 90px; }\n  .cover .delayimg {\n    width: 200px;\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    display: none; }\n  .cover a {\n    width: 160px;\n    height: 34px;\n    background-image: url(" + __webpack_require__(206) + ");\n    background-size: 100%;\n    background-repeat: no-repeat;\n    position: absolute;\n    top: 468px;\n    right: 60px;\n    display: block;\n    color: #fff;\n    text-align: center;\n    line-height: 42px;\n    font-size: 16px; }\n\n.f-cb:after,\n.f-cbli li:after {\n  display: block;\n  clear: both;\n  visibility: hidden;\n  height: 0;\n  overflow: hidden;\n  content: \".\"; }\n\n.f-cb,\n.f-cbli li {\n  zoom: 1; }\n\n.controlCenter {\n  z-index: 100;\n  width: 30%;\n  height: 20%;\n  position: absolute;\n  bottom: 0;\n  left: 35%;\n  display: none; }\n  .controlCenter li {\n    float: left;\n    margin-right: 2%;\n    width: 48%;\n    height: 100%;\n    background-color: #0174dc; }\n    .controlCenter li div {\n      width: 80%;\n      margin: 0 auto;\n      text-align: center;\n      font-weight: bold;\n      line-height: 34px;\n      font-size: 14px;\n      color: #fff; }\n      .controlCenter li div img {\n        margin-top: 15px;\n        width: 100%; }\n  .controlCenter i {\n    font-style: normal;\n    position: absolute;\n    right: -15px;\n    font-size: 16px;\n    color: #0174dc;\n    font-weight: bold;\n    cursor: pointer; }\n\n.tool {\n  background: url(" + __webpack_require__(208) + ") no-repeat;\n  background-size: 100%;\n  width: 500px;\n  height: 51%;\n  position: absolute;\n  top: 153px;\n  left: 88px;\n  z-index: 101; }\n  .tool ul {\n    width: 95%;\n    height: 85%;\n    top: 44px;\n    left: 9px;\n    position: absolute;\n    right: 43%;\n    border-radius: 5px;\n    padding: 15px; }\n    .tool ul li {\n      background: url(" + __webpack_require__(207) + ") no-repeat;\n      background-size: 100%;\n      width: 100px;\n      height: 100px;\n      float: left;\n      cursor: pointer; }\n      .tool ul li span {\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        background-color: rgba(170, 170, 170, 0.4); }\n\n.xiaob {\n  display: none;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 1024px;\n  height: 700px;\n  margin: 0 auto;\n  z-index: 101; }\n  .xiaob .alert {\n    width: 600px;\n    height: 300px;\n    /* margin: 60px auto; */\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-top: -150px;\n    margin-left: -300px; }\n    .xiaob .alert h1 {\n      width: 100%;\n      height: 15%;\n      background-color: #f98c27; }\n      .xiaob .alert h1 span {\n        display: inline-block;\n        width: 38px;\n        height: 38px;\n        font-size: 28px;\n        font-weight: bold;\n        color: #fff;\n        float: right; }\n    .xiaob .alert p {\n      width: 100%;\n      height: 85%;\n      background-color: #fff;\n      font-size: 18px;\n      line-height: 160px;\n      text-align: center; }\n    .xiaob .alert button {\n      position: absolute;\n      width: 80px;\n      height: 36px;\n      background-color: red;\n      line-height: 36px;\n      font-size: 18px;\n      bottom: 28px;\n      right: 30px;\n      color: #fff; }\n\n.studyEnd {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000; }\n  .studyEnd img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .studyEnd span {\n    position: absolute;\n    cursor: pointer;\n    background-image: url(\"data:image/gif; base64,AAAA\"); }\n    .studyEnd span.out {\n      width: 150px;\n      height: 32px;\n      border-radius: 20px;\n      bottom: 80px;\n      right: 63px; }\n    .studyEnd span.back {\n      width: 80px;\n      height: 18px;\n      bottom: 57px;\n      right: 94px; }\n", ""]);

// exports


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1670px) {\n  .change-direction {\n    width: 100%;\n    height: 100%;\n    padding: 30px 40px 0px;\n    box-sizing: border-box;\n    font-size: 24px; }\n    .change-direction .body {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      overflow: hidden; }\n      .change-direction .body .q-title {\n        position: absolute;\n        top: 10px;\n        left: 20px;\n        font-weight: bold;\n        color: #333f48;\n        font-size: 28px; }\n      .change-direction .body .q-body {\n        width: 100%;\n        height: 100%;\n        padding: 120px 50px 0 50px;\n        box-sizing: border-box; }\n        .change-direction .body .q-body .q-body-left {\n          float: left; }\n          .change-direction .body .q-body .q-body-left div {\n            margin-bottom: 50px; }\n            .change-direction .body .q-body .q-body-left div:nth-child(1) .text span {\n              display: block;\n              width: 335px;\n              height: 50px;\n              line-height: 50px;\n              text-align: center;\n              background: #00b5e2;\n              font-size: 26px;\n              color: #fff;\n              border-radius: 10px;\n              cursor: pointer; }\n              .change-direction .body .q-body .q-body-left div:nth-child(1) .text span:hover {\n                -webkit-transform-origin: center center;\n                -webkit-transform: scale(1.1, 1.1);\n                -ms-transform-origin: center center;\n                -ms-transform: scale(1.1, 1.1); }\n            .change-direction .body .q-body .q-body-left div:nth-child(1) .task {\n              display: none;\n              width: 335px;\n              background: #00b5e2;\n              position: absolute;\n              top: 118px;\n              left: 402px;\n              border: 1px black solid;\n              border-radius: 5px; }\n              .change-direction .body .q-body .q-body-left div:nth-child(1) .task span {\n                display: block;\n                width: 335px;\n                height: 50px;\n                line-height: 50px;\n                color: #fff;\n                text-align: center;\n                font-size: 20px;\n                cursor: pointer; }\n                .change-direction .body .q-body .q-body-left div:nth-child(1) .task span:hover {\n                  background: #0070c0; }\n            .change-direction .body .q-body .q-body-left div:nth-child(1):hover .task {\n              display: block; }\n            .change-direction .body .q-body .q-body-left div:nth-child(2) .text span {\n              display: block;\n              width: 335px;\n              height: 50px;\n              line-height: 50px;\n              text-align: center;\n              background: #d9d9d9;\n              font-size: 26px;\n              color: #fff;\n              border-radius: 10px;\n              cursor: pointer; }\n              .change-direction .body .q-body .q-body-left div:nth-child(2) .text span:hover {\n                transform-origin: center center;\n                transform: scale(1.1, 1.1); }\n            .change-direction .body .q-body .q-body-left div:nth-child(2) .task {\n              display: none;\n              width: 335px;\n              background: #00b5e2;\n              position: absolute;\n              top: 220px;\n              left: 402px;\n              border: 1px black solid;\n              border-radius: 5px; }\n              .change-direction .body .q-body .q-body-left div:nth-child(2) .task span {\n                display: block;\n                width: 335px;\n                height: 50px;\n                line-height: 50px;\n                color: #fff;\n                text-align: center;\n                font-size: 20px;\n                cursor: pointer; }\n                .change-direction .body .q-body .q-body-left div:nth-child(2) .task span:hover {\n                  background: #0070c0; }\n            .change-direction .body .q-body .q-body-left div:nth-child(2):hover .task {\n              display: block; }\n            .change-direction .body .q-body .q-body-left div:nth-child(3) .text span {\n              display: block;\n              width: 335px;\n              height: 50px;\n              line-height: 50px;\n              text-align: center;\n              background: #d9d9d9;\n              font-size: 26px;\n              color: #fff;\n              border-radius: 10px;\n              cursor: pointer; }\n              .change-direction .body .q-body .q-body-left div:nth-child(3) .text span:hover {\n                transform-origin: center center;\n                transform: scale(1.1, 1.1); }\n            .change-direction .body .q-body .q-body-left div:nth-child(3) .task {\n              display: none;\n              width: 335px;\n              background: #00b5e2;\n              position: absolute;\n              top: 321px;\n              left: 402px;\n              border: 1px black solid;\n              border-radius: 5px; }\n              .change-direction .body .q-body .q-body-left div:nth-child(3) .task span {\n                display: block;\n                width: 335px;\n                height: 50px;\n                line-height: 50px;\n                color: #fff;\n                text-align: center;\n                font-size: 20px;\n                cursor: pointer; }\n                .change-direction .body .q-body .q-body-left div:nth-child(3) .task span:hover {\n                  background: #0070c0; }\n            .change-direction .body .q-body .q-body-left div:nth-child(3):hover .task {\n              display: block; }\n          .change-direction .body .q-body .q-body-left .full {\n            background: #00b5e2 !important; }\n          .change-direction .body .q-body .q-body-left .empty {\n            display: inline-block;\n            z-index: 100;\n            width: 6px;\n            height: 6px;\n            border: 5px #00b5e2 solid !important; }\n        .change-direction .body .q-body .q-body-right {\n          float: right;\n          margin: -20px 60px 0 0; }\n          .change-direction .body .q-body .q-body-right img {\n            width: 120%; }\n      .change-direction .body .redCircle {\n        position: absolute;\n        bottom: 80px;\n        left: 0px; }\n        .change-direction .body .redCircle img {\n          width: 40px;\n          height: 40px;\n          cursor: pointer; }\n        .change-direction .body .redCircle div {\n          display: none;\n          position: absolute;\n          bottom: -48px;\n          left: 50px;\n          width: 920px;\n          height: 150px;\n          font-size: 18px;\n          text-indent: 30px;\n          padding: 14px 10px;\n          border: 1px #00b5e2 solid;\n          background: #fff;\n          line-height: 38px;\n          border-radius: 6px; }\n          .change-direction .body .redCircle div span {\n            display: block;\n            color: green;\n            margin-top: 20px; }\n        .change-direction .body .redCircle:hover div {\n          display: block; }\n    .change-direction .back {\n      position: absolute;\n      bottom: -47px;\n      left: 88px;\n      z-index: 100;\n      width: 30px;\n      height: 30px;\n      background-image: url(" + __webpack_require__(45) + ");\n      background-size: 100%;\n      cursor: pointer; }\n      .change-direction .back .tip {\n        display: none;\n        position: absolute;\n        bottom: 40px;\n        left: 0;\n        z-index: 1000;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n        border-radius: 2px;\n        padding: 0 25px;\n        height: 50px;\n        font-size: 16px;\n        line-height: 24px;\n        text-align: center;\n        white-space: nowrap;\n        color: #000;\n        background-color: #fff;\n        -moz-box-shadow: 0 0 2px 0;\n        box-shadow: 0 0 2px 0;\n        -ms-box-shadow: 0 0 2px 0; }\n      .change-direction .back:hover {\n        background-image: url(" + __webpack_require__(46) + ");\n        background-size: 100%; }\n        .change-direction .back:hover .tip {\n          display: block; }\n    .change-direction .sensor {\n      width: 100%;\n      height: 100%; }\n      .change-direction .sensor .sensorLeft {\n        width: 630px;\n        height: 600px;\n        overflow-x: inherit !important;\n        float: left; }\n        .change-direction .sensor .sensorLeft .one h5 {\n          font-size: 24px;\n          font-weight: bold;\n          margin: 30px 0 0 48px;\n          color: #333f48; }\n        .change-direction .sensor .sensorLeft .one .startStop {\n          padding: 50px 50px 0 50px; }\n          .change-direction .sensor .sensorLeft .one .startStop .up {\n            height: 180px; }\n            .change-direction .sensor .sensorLeft .one .startStop .up div {\n              font-size: 18px;\n              font-weight: bold;\n              margin: 0 0 10px 0;\n              cursor: pointer; }\n              .change-direction .sensor .sensorLeft .one .startStop .up div span {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                border: 5px #00b5e2 solid;\n                vertical-align: sub; }\n              .change-direction .sensor .sensorLeft .one .startStop .up div .full {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                background: #00b5e2;\n                vertical-align: sub; }\n            .change-direction .sensor .sensorLeft .one .startStop .up p {\n              font-size: 18px;\n              line-height: 34px; }\n          .change-direction .sensor .sensorLeft .one .startStop .down {\n            height: 120px; }\n            .change-direction .sensor .sensorLeft .one .startStop .down div {\n              font-size: 18px;\n              font-weight: bold;\n              margin-bottom: 8px;\n              cursor: pointer; }\n              .change-direction .sensor .sensorLeft .one .startStop .down div span {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                border: 5px #d3daea solid;\n                vertical-align: sub; }\n              .change-direction .sensor .sensorLeft .one .startStop .down div .empty {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                border: 5px #00b5e2 solid;\n                vertical-align: sub; }\n              .change-direction .sensor .sensorLeft .one .startStop .down div .full {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                background: #00b5e2;\n                vertical-align: sub; }\n            .change-direction .sensor .sensorLeft .one .startStop .down p {\n              font-size: 18px;\n              line-height: 34px; }\n        .change-direction .sensor .sensorLeft .one .next {\n          position: absolute;\n          bottom: 30px;\n          left: 90px; }\n          .change-direction .sensor .sensorLeft .one .next span {\n            display: block;\n            width: 335px;\n            height: 50px;\n            line-height: 50px;\n            text-align: center;\n            background: #00b5e2;\n            font-size: 22px;\n            color: #fff;\n            border-radius: 10px;\n            cursor: pointer; }\n            .change-direction .sensor .sensorLeft .one .next span:hover {\n              transform-origin: center center;\n              transform: scale(1.1, 1.1); }\n          .change-direction .sensor .sensorLeft .one .next .task {\n            display: none;\n            position: absolute;\n            bottom: 60px;\n            left: 300px;\n            width: 80%;\n            height: 48px;\n            font-weight: normal;\n            text-align: center;\n            line-height: 26px;\n            font-size: 18px;\n            padding: 6px 6px;\n            background: #fff;\n            color: black;\n            border: 1px #00b5e2 solid; }\n          .change-direction .sensor .sensorLeft .one .next:hover .task {\n            display: block; }\n        .change-direction .sensor .sensorLeft .two h5 {\n          font-size: 24px;\n          font-weight: bold;\n          margin: 30px 0 0 48px;\n          color: #333f48; }\n        .change-direction .sensor .sensorLeft .two .startStop {\n          padding: 50px 50px 40px 50px;\n          box-sizing: border-box; }\n          .change-direction .sensor .sensorLeft .two .startStop .up {\n            height: 200px; }\n            .change-direction .sensor .sensorLeft .two .startStop .up div {\n              font-size: 18px;\n              font-weight: bold;\n              margin: 0 0 10px 0;\n              cursor: pointer; }\n              .change-direction .sensor .sensorLeft .two .startStop .up div span {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                border: 5px #00b5e2 solid;\n                vertical-align: sub; }\n              .change-direction .sensor .sensorLeft .two .startStop .up div .full {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                background: #00b5e2;\n                vertical-align: sub; }\n            .change-direction .sensor .sensorLeft .two .startStop .up p {\n              font-size: 18px;\n              line-height: 40px; }\n          .change-direction .sensor .sensorLeft .two .startStop .down {\n            height: 166px; }\n            .change-direction .sensor .sensorLeft .two .startStop .down div {\n              font-size: 18px;\n              font-weight: bold;\n              margin: 96px 0 8px 0;\n              cursor: pointer; }\n              .change-direction .sensor .sensorLeft .two .startStop .down div span {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                border: 5px #d3daea solid;\n                vertical-align: sub; }\n              .change-direction .sensor .sensorLeft .two .startStop .down div .empty {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                border: 5px #00b5e2 solid;\n                vertical-align: sub; }\n              .change-direction .sensor .sensorLeft .two .startStop .down div .full {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                background: #00b5e2;\n                vertical-align: sub; }\n            .change-direction .sensor .sensorLeft .two .startStop .down p {\n              font-size: 18px;\n              line-height: 40px; }\n        .change-direction .sensor .sensorLeft .two .next {\n          position: absolute;\n          bottom: 30px;\n          left: 90px; }\n          .change-direction .sensor .sensorLeft .two .next span {\n            display: block;\n            width: 335px;\n            height: 50px;\n            line-height: 50px;\n            text-align: center;\n            background: #00b5e2;\n            font-size: 22px;\n            color: #fff;\n            border-radius: 10px;\n            cursor: pointer; }\n            .change-direction .sensor .sensorLeft .two .next span:hover {\n              transform-origin: center center;\n              transform: scale(1.1, 1.1); }\n          .change-direction .sensor .sensorLeft .two .next .task {\n            display: none;\n            position: absolute;\n            bottom: 60px;\n            left: 300px;\n            width: 80%;\n            height: 48px;\n            font-weight: normal;\n            text-align: center;\n            line-height: 26px;\n            font-size: 18px;\n            padding: 6px 6px;\n            background: #fff;\n            color: black;\n            border: 1px #00b5e2 solid; }\n          .change-direction .sensor .sensorLeft .two .next:hover .task {\n            display: block; }\n        .change-direction .sensor .sensorLeft .three h5 {\n          font-size: 24px;\n          font-weight: bold;\n          margin: 30px 0 0 48px;\n          color: #333f48; }\n        .change-direction .sensor .sensorLeft .three .startStop {\n          padding: 50px 50px 0 50px; }\n          .change-direction .sensor .sensorLeft .three .startStop .up {\n            height: 200px; }\n            .change-direction .sensor .sensorLeft .three .startStop .up div {\n              font-size: 18px;\n              font-weight: bold;\n              margin: 0 0 10px 0;\n              cursor: pointer; }\n              .change-direction .sensor .sensorLeft .three .startStop .up div span {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                border: 5px #00b5e2 solid;\n                vertical-align: sub; }\n              .change-direction .sensor .sensorLeft .three .startStop .up div .full {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                background: #00b5e2;\n                vertical-align: sub; }\n            .change-direction .sensor .sensorLeft .three .startStop .up p {\n              font-size: 18px;\n              line-height: 40px; }\n        .change-direction .sensor .sensorLeft .three .next {\n          position: absolute;\n          bottom: 30px;\n          left: 90px; }\n          .change-direction .sensor .sensorLeft .three .next span {\n            display: block;\n            width: 335px;\n            height: 50px;\n            line-height: 50px;\n            text-align: center;\n            background: #00b5e2;\n            font-size: 22px;\n            color: #fff;\n            border-radius: 10px;\n            cursor: pointer; }\n            .change-direction .sensor .sensorLeft .three .next span:hover {\n              transform-origin: center center;\n              transform: scale(1.1, 1.1); }\n          .change-direction .sensor .sensorLeft .three .next .task {\n            display: none;\n            position: absolute;\n            bottom: 60px;\n            left: 300px;\n            width: 80%;\n            height: 48px;\n            font-weight: normal;\n            text-align: center;\n            line-height: 26px;\n            font-size: 18px;\n            padding: 6px 6px;\n            background: #fff;\n            color: black;\n            border: 1px #00b5e2 solid; }\n          .change-direction .sensor .sensorLeft .three .next:hover .task {\n            display: block; }\n      .change-direction .sensor .sensorRight {\n        float: right;\n        width: 400px;\n        height: 400px; }\n        .change-direction .sensor .sensorRight .one .upImg {\n          width: 300px;\n          height: 400px;\n          margin: 120px 0 1000px -20px; }\n          .change-direction .sensor .sensorRight .one .upImg img {\n            width: 100%;\n            height: 100%; }\n        .change-direction .sensor .sensorRight .one .down1Img {\n          position: relative;\n          width: 300px;\n          height: 400px;\n          margin: 120px 0 1000px -20px; }\n          .change-direction .sensor .sensorRight .one .down1Img img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .one .down1Img .upImg {\n            width: 126px;\n            height: 104px;\n            position: absolute;\n            top: 22px;\n            left: 131px;\n            cursor: pointer; }\n        .change-direction .sensor .sensorRight .one .circuit {\n          position: relative;\n          top: 60px;\n          left: -30px;\n          width: 440px;\n          height: 550px;\n          margin-bottom: 1000px; }\n          .change-direction .sensor .sensorRight .one .circuit img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .one .circuit div {\n            position: absolute;\n            top: 316px;\n            left: 100px;\n            width: 14px;\n            height: 14px;\n            background: red;\n            border-radius: 50%;\n            cursor: pointer; }\n            .change-direction .sensor .sensorRight .one .circuit div span {\n              display: none;\n              position: absolute;\n              top: -50px;\n              left: -76px;\n              text-align: center;\n              font-weight: normal;\n              line-height: 40px;\n              width: 165px;\n              height: 40px;\n              background: #fff;\n              border: 1px #00b5e2 solid;\n              font-size: 16px;\n              z-index: 100;\n              border-radius: 6px; }\n            .change-direction .sensor .sensorRight .one .circuit div:nth-child(2) {\n              top: 212px;\n              left: 100px; }\n              .change-direction .sensor .sensorRight .one .circuit div:nth-child(2) span {\n                top: -50px;\n                left: -80px; }\n            .change-direction .sensor .sensorRight .one .circuit div:nth-child(3) {\n              top: 211px;\n              left: 247px; }\n              .change-direction .sensor .sensorRight .one .circuit div:nth-child(3) span {\n                width: 190px;\n                top: -50px;\n                left: -88px; }\n            .change-direction .sensor .sensorRight .one .circuit div:nth-child(4) {\n              top: 212px;\n              left: 322px; }\n              .change-direction .sensor .sensorRight .one .circuit div:nth-child(4) span {\n                width: 212px;\n                top: -40px;\n                left: -98px; }\n            .change-direction .sensor .sensorRight .one .circuit div:nth-child(5) {\n              top: 258px;\n              left: 202px; }\n              .change-direction .sensor .sensorRight .one .circuit div:nth-child(5) span {\n                top: -50px;\n                left: -78px; }\n            .change-direction .sensor .sensorRight .one .circuit div:nth-child(6) {\n              top: 317px;\n              left: 322px; }\n              .change-direction .sensor .sensorRight .one .circuit div:nth-child(6) span {\n                width: 212px;\n                top: -40px;\n                left: -98px; }\n            .change-direction .sensor .sensorRight .one .circuit div:hover span {\n              display: block; }\n        .change-direction .sensor .sensorRight .two .upImg {\n          width: 400px;\n          height: 410px;\n          margin: 120px 0 1000px -20px; }\n          .change-direction .sensor .sensorRight .two .upImg img {\n            width: 100%;\n            height: 100%; }\n        .change-direction .sensor .sensorRight .two .down1Img {\n          position: relative;\n          width: 400px;\n          height: 410px;\n          margin: 120px 0 1000px -20px; }\n          .change-direction .sensor .sensorRight .two .down1Img img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .two .down1Img div .upImg {\n            width: 67px;\n            height: 145px;\n            position: absolute;\n            top: 113px;\n            cursor: pointer;\n            left: 65px; }\n          .change-direction .sensor .sensorRight .two .down1Img div span {\n            position: absolute;\n            display: none;\n            top: 152px;\n            left: 10px;\n            width: 258px;\n            height: 50px;\n            background: #fff;\n            border: 1px #00b5e2 solid;\n            text-align: center;\n            line-height: 24px;\n            font-size: 16px;\n            font-weight: bold;\n            border-radius: 6px;\n            padding: 6px; }\n          .change-direction .sensor .sensorRight .two .down1Img div:hover span {\n            display: block; }\n        .change-direction .sensor .sensorRight .two .circuit {\n          position: relative;\n          top: 50px;\n          right: 50px;\n          width: 390px;\n          height: 542px;\n          margin-bottom: 1000px; }\n          .change-direction .sensor .sensorRight .two .circuit img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .two .circuit div {\n            position: absolute;\n            top: 353px;\n            left: 131px;\n            width: 14px;\n            height: 14px;\n            background: red;\n            border-radius: 50%;\n            cursor: pointer; }\n            .change-direction .sensor .sensorRight .two .circuit div span {\n              display: none;\n              position: absolute;\n              top: -50px;\n              left: -66px;\n              font-size: 16px;\n              font-weight: normal;\n              text-align: center;\n              line-height: 40px;\n              width: 145px;\n              height: 40px;\n              background: #fff;\n              border: 1px #00b5e2 solid;\n              z-index: 100;\n              border-radius: 6px; }\n            .change-direction .sensor .sensorRight .two .circuit div:nth-child(2) {\n              top: 78px;\n              left: 131px; }\n              .change-direction .sensor .sensorRight .two .circuit div:nth-child(2) span {\n                top: -50px;\n                left: -68px; }\n            .change-direction .sensor .sensorRight .two .circuit div:nth-child(3) {\n              top: 280px;\n              left: 315px; }\n              .change-direction .sensor .sensorRight .two .circuit div:nth-child(3) span {\n                top: -50px;\n                left: -58px; }\n            .change-direction .sensor .sensorRight .two .circuit div:nth-child(4) {\n              top: 315px;\n              left: 333px; }\n              .change-direction .sensor .sensorRight .two .circuit div:nth-child(4) span {\n                width: 210px;\n                top: -52px;\n                left: -94px; }\n            .change-direction .sensor .sensorRight .two .circuit div:nth-child(5) {\n              top: 348px;\n              left: 315px; }\n              .change-direction .sensor .sensorRight .two .circuit div:nth-child(5) span {\n                width: 200px;\n                top: -50px;\n                left: -86px; }\n            .change-direction .sensor .sensorRight .two .circuit div:nth-child(6) {\n              top: 275px;\n              left: 131px; }\n              .change-direction .sensor .sensorRight .two .circuit div:nth-child(6) span {\n                width: 162px;\n                top: -54px;\n                left: -78px; }\n            .change-direction .sensor .sensorRight .two .circuit div:hover span {\n              display: block; }\n        .change-direction .sensor .sensorRight .three .upImg {\n          width: 420px;\n          height: 380px;\n          margin: 120px 0 1000px 0;\n          cursor: pointer; }\n          .change-direction .sensor .sensorRight .three .upImg img {\n            width: 100%;\n            height: 100%; }\n        .change-direction .sensor .sensorRight .three .down1Img {\n          position: relative;\n          width: 420px;\n          height: 380px;\n          margin: 120px 0 1000px -20px; }\n          .change-direction .sensor .sensorRight .three .down1Img img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .three .down1Img div .upImg {\n            width: 83px;\n            height: 45px;\n            position: absolute;\n            top: 39px;\n            left: 63px; }\n          .change-direction .sensor .sensorRight .three .down1Img div span {\n            position: absolute;\n            display: none;\n            top: 72px;\n            left: 10px;\n            width: 250px;\n            height: 50px;\n            background: #fff;\n            border: 1px #00b5e2 solid;\n            text-align: center;\n            line-height: 48px;\n            font-size: 16px;\n            font-weight: bold;\n            border-radius: 6px; }\n          .change-direction .sensor .sensorRight .three .down1Img div:hover span {\n            display: block; }\n        .change-direction .sensor .sensorRight .three .circuit {\n          position: relative;\n          top: 30px;\n          right: 50px;\n          width: 400px;\n          height: 570px;\n          margin-bottom: 1000px; }\n          .change-direction .sensor .sensorRight .three .circuit img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .three .circuit div {\n            position: absolute;\n            top: 227px;\n            left: 86px;\n            width: 14px;\n            height: 14px;\n            background: red;\n            border-radius: 50%;\n            cursor: pointer; }\n            .change-direction .sensor .sensorRight .three .circuit div span {\n              display: none;\n              position: absolute;\n              top: -34px;\n              left: -66px;\n              text-align: center;\n              line-height: 40px;\n              font-size: 16px;\n              font-weight: normal;\n              width: 145px;\n              height: 40px;\n              background: #fff;\n              border: 1px #00b5e2 solid;\n              z-index: 100;\n              border-radius: 6px; }\n            .change-direction .sensor .sensorRight .three .circuit div:nth-child(2) {\n              top: 297px;\n              left: 80px; }\n              .change-direction .sensor .sensorRight .three .circuit div:nth-child(2) span {\n                top: -50px;\n                left: -68px; }\n            .change-direction .sensor .sensorRight .three .circuit div:nth-child(3) {\n              top: 297Px;\n              left: 274px; }\n              .change-direction .sensor .sensorRight .three .circuit div:nth-child(3) span {\n                top: -50px;\n                left: -58px; }\n            .change-direction .sensor .sensorRight .three .circuit div:nth-child(4) {\n              top: 366px;\n              left: 274px; }\n              .change-direction .sensor .sensorRight .three .circuit div:nth-child(4) span {\n                width: 162px;\n                top: -51px;\n                left: -74px; }\n            .change-direction .sensor .sensorRight .three .circuit div:nth-child(5) {\n              top: 348px;\n              left: 100px; }\n              .change-direction .sensor .sensorRight .three .circuit div:nth-child(5) span {\n                width: 220px;\n                top: -47px;\n                left: -106px; }\n            .change-direction .sensor .sensorRight .three .circuit div:hover span {\n              display: block; }\n    .change-direction .power {\n      width: 100%;\n      height: 100%; }\n      .change-direction .power .powerLeft {\n        width: 630px;\n        height: 600px;\n        float: left; }\n        .change-direction .power .powerLeft .one h5 {\n          font-size: 24px;\n          font-weight: bold;\n          margin: 30px 0 0 48px;\n          color: #333f48; }\n        .change-direction .power .powerLeft .one .startStop {\n          padding: 50px 50px 0 50px; }\n          .change-direction .power .powerLeft .one .startStop .up {\n            height: 190px; }\n            .change-direction .power .powerLeft .one .startStop .up div {\n              font-size: 18px;\n              font-weight: bold;\n              margin: 0 0 10px 0;\n              cursor: pointer; }\n              .change-direction .power .powerLeft .one .startStop .up div span {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                border: 5px #00b5e2 solid;\n                vertical-align: sub; }\n              .change-direction .power .powerLeft .one .startStop .up div .full {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                background: #00b5e2;\n                vertical-align: sub; }\n            .change-direction .power .powerLeft .one .startStop .up p {\n              font-size: 18px;\n              line-height: 40px; }\n        .change-direction .power .powerLeft .one .next {\n          position: absolute;\n          bottom: 30px;\n          left: 90px; }\n          .change-direction .power .powerLeft .one .next span {\n            display: block;\n            width: 335px;\n            height: 50px;\n            line-height: 50px;\n            text-align: center;\n            background: #00b5e2;\n            font-size: 22px;\n            color: #fff;\n            border-radius: 10px;\n            cursor: pointer; }\n            .change-direction .power .powerLeft .one .next span:hover {\n              transform-origin: center center;\n              transform: scale(1.1, 1.1); }\n          .change-direction .power .powerLeft .one .next .task {\n            display: none;\n            position: absolute;\n            bottom: 60px;\n            left: 300px;\n            width: 80%;\n            height: 48px;\n            font-weight: normal;\n            text-align: center;\n            line-height: 26px;\n            font-size: 18px;\n            padding: 6px 6px;\n            background: #fff;\n            color: black;\n            border: 1px #00b5e2 solid; }\n          .change-direction .power .powerLeft .one .next:hover .task {\n            display: block; }\n        .change-direction .power .powerLeft .two h5 {\n          font-size: 24px;\n          font-weight: bold;\n          margin: 30px 0 0 48px;\n          color: #333f48; }\n        .change-direction .power .powerLeft .two .startStop {\n          padding: 0 50px 0 50px;\n          box-sizing: border-box;\n          height: 420px;\n          margin-top: 50px;\n          overflow: hidden; }\n          .change-direction .power .powerLeft .two .startStop .up {\n            height: 270px; }\n            .change-direction .power .powerLeft .two .startStop .up div {\n              font-size: 18px;\n              font-weight: bold;\n              margin: 0 0 10px 0;\n              cursor: pointer; }\n              .change-direction .power .powerLeft .two .startStop .up div span {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                border: 5px #00b5e2 solid;\n                vertical-align: sub; }\n              .change-direction .power .powerLeft .two .startStop .up div .full {\n                display: inline-block;\n                width: 10px;\n                height: 10px;\n                background: #00b5e2;\n                vertical-align: sub; }\n            .change-direction .power .powerLeft .two .startStop .up p {\n              font-size: 18px;\n              line-height: 40px; }\n          .change-direction .power .powerLeft .two .startStop .down div {\n            font-size: 18px;\n            font-weight: bold;\n            margin: 60px 0 10px 0;\n            cursor: pointer; }\n            .change-direction .power .powerLeft .two .startStop .down div span {\n              display: inline-block;\n              width: 10px;\n              height: 10px;\n              border: 5px #d3daea solid;\n              vertical-align: sub; }\n            .change-direction .power .powerLeft .two .startStop .down div .empty {\n              display: inline-block;\n              width: 10px;\n              height: 10px;\n              border: 5px #00b5e2 solid;\n              vertical-align: sub; }\n            .change-direction .power .powerLeft .two .startStop .down div .full {\n              display: inline-block;\n              width: 10px;\n              height: 10px;\n              background: #00b5e2;\n              vertical-align: sub; }\n          .change-direction .power .powerLeft .two .startStop .down p {\n            font-size: 18px;\n            line-height: 40px; }\n        .change-direction .power .powerLeft .two .next {\n          position: absolute;\n          bottom: 30px;\n          left: 90px; }\n          .change-direction .power .powerLeft .two .next span {\n            display: block;\n            width: 335px;\n            height: 50px;\n            line-height: 50px;\n            text-align: center;\n            background: #00b5e2;\n            font-size: 22px;\n            color: #fff;\n            border-radius: 10px;\n            cursor: pointer; }\n            .change-direction .power .powerLeft .two .next span:hover {\n              transform-origin: center center;\n              transform: scale(1.1, 1.1); }\n          .change-direction .power .powerLeft .two .next .task {\n            display: none;\n            position: absolute;\n            bottom: 60px;\n            left: 300px;\n            width: 80%;\n            height: 48px;\n            font-weight: normal;\n            text-align: center;\n            line-height: 26px;\n            font-size: 18px;\n            padding: 6px 6px;\n            background: #fff;\n            color: black;\n            border: 1px #00b5e2 solid; }\n          .change-direction .power .powerLeft .two .next:hover .task {\n            display: block; }\n      .change-direction .power .powerRight {\n        float: right;\n        width: 400px;\n        height: 400px; }\n        .change-direction .power .powerRight .one .upImg {\n          width: 430px;\n          height: 380px;\n          margin: 120px 0 1000px -30px; }\n          .change-direction .power .powerRight .one .upImg img {\n            width: 100%;\n            height: 100%; }\n        .change-direction .power .powerRight .one .down1Img {\n          position: relative;\n          width: 430px;\n          height: 380px;\n          margin: 120px 0 1000px -30px; }\n          .change-direction .power .powerRight .one .down1Img img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .power .powerRight .one .down1Img div .upImg {\n            width: 33px;\n            height: 43px;\n            position: absolute;\n            top: 93px;\n            left: 421px;\n            cursor: pointer; }\n          .change-direction .power .powerRight .one .down1Img div span {\n            position: absolute;\n            display: none;\n            top: 142px;\n            left: 170px;\n            width: 250px;\n            height: 50px;\n            background: #fff;\n            border: 1px #00b5e2 solid;\n            text-align: center;\n            line-height: 24px;\n            font-size: 14px;\n            font-weight: bold;\n            border-radius: 6px; }\n          .change-direction .power .powerRight .one .down1Img div:hover span {\n            display: block; }\n        .change-direction .power .powerRight .two .upImg {\n          width: 430px;\n          height: 380px;\n          margin: 120px 0 1000px -30px; }\n          .change-direction .power .powerRight .two .upImg img {\n            width: 100%;\n            height: 100%; }\n        .change-direction .power .powerRight .two .down1Img {\n          position: relative;\n          width: 430px;\n          height: 380px;\n          margin: 120px 0 1000px -30px; }\n          .change-direction .power .powerRight .two .down1Img img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .power .powerRight .two .down1Img div .upImg {\n            width: 193px;\n            height: 285px;\n            position: absolute;\n            top: -81px;\n            left: 141px;\n            cursor: pointer; }\n          .change-direction .power .powerRight .two .down1Img div span {\n            position: absolute;\n            display: none;\n            top: -28px;\n            left: 10px;\n            width: 290px;\n            height: 50px;\n            background: #fff;\n            border: 1px #00b5e2 solid;\n            text-align: center;\n            line-height: 48px;\n            font-size: 16px;\n            font-weight: bold;\n            border-radius: 6px;\n            padding: 0 6px; }\n          .change-direction .power .powerRight .two .down1Img div:hover span {\n            display: block; }\n        .change-direction .power .powerRight .two .circuit {\n          position: relative;\n          top: 50px;\n          width: 350px;\n          height: 530px;\n          margin-bottom: 1000px; }\n          .change-direction .power .powerRight .two .circuit img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .power .powerRight .two .circuit div {\n            position: absolute;\n            top: 321px;\n            left: 48px;\n            width: 14px;\n            height: 14px;\n            background: red;\n            border-radius: 50%;\n            cursor: pointer; }\n            .change-direction .power .powerRight .two .circuit div span {\n              display: none;\n              position: absolute;\n              top: -64px;\n              left: -76px;\n              text-align: center;\n              line-height: 40px;\n              font-size: 16px;\n              font-weight: normal;\n              width: 165px;\n              height: 40px;\n              background: #fff;\n              border: 1px #00b5e2 solid;\n              border-radius: 6px;\n              z-index: 100;\n              padding: 6px 6px; }\n            .change-direction .power .powerRight .two .circuit div:nth-child(2) {\n              top: 256px;\n              left: 48px; }\n              .change-direction .power .powerRight .two .circuit div:nth-child(2) span {\n                height: 40px;\n                line-height: 20px;\n                top: -70px;\n                left: -80px; }\n            .change-direction .power .powerRight .two .circuit div:nth-child(3) {\n              top: 288px;\n              left: 70px; }\n              .change-direction .power .powerRight .two .circuit div:nth-child(3) span {\n                top: -60px;\n                left: -58px; }\n            .change-direction .power .powerRight .two .circuit div:nth-child(4) {\n              top: 256px;\n              left: 273px; }\n              .change-direction .power .powerRight .two .circuit div:nth-child(4) span {\n                width: 162px;\n                height: 40px;\n                line-height: 20px;\n                top: -60px;\n                left: -78px; }\n            .change-direction .power .powerRight .two .circuit div:nth-child(5) {\n              top: 323px;\n              left: 273px; }\n              .change-direction .power .powerRight .two .circuit div:nth-child(5) span {\n                top: -60px;\n                left: -78px; }\n            .change-direction .power .powerRight .two .circuit div:nth-child(6) {\n              top: 323px;\n              left: 198px; }\n              .change-direction .power .powerRight .two .circuit div:nth-child(6) span {\n                width: 162px;\n                top: -60px;\n                left: -78px; }\n            .change-direction .power .powerRight .two .circuit div:hover span {\n              display: block; }\n    .change-direction .case {\n      width: 100%;\n      height: 100%; }\n      .change-direction .case .caseTitle {\n        font-size: 24px;\n        font-weight: bold;\n        margin: 30px 0 0 8px; }\n      .change-direction .case .caseContent {\n        width: 100%;\n        height: 500px;\n        border: 1px #00b5e2 solid;\n        margin: 20px 0 0 8px;\n        padding: 10px 30px;\n        box-sizing: border-box;\n        overflow: hidden; }\n        .change-direction .case .caseContent .boxScorll {\n          width: 100%;\n          height: 100%; }\n          .change-direction .case .caseContent .boxScorll .content {\n            box-sizing: border-box;\n            line-height: 30px;\n            font-size: 18px; }\n            .change-direction .case .caseContent .boxScorll .content ul li span {\n              display: inline-block;\n              width: 16px;\n              height: 16px;\n              border-radius: 50%;\n              text-align: center;\n              line-height: 16px;\n              background: #333f48;\n              color: #fff;\n              margin-right: 10px; }\n            .change-direction .case .caseContent .boxScorll .content div {\n              margin-bottom: 30px; }\n              .change-direction .case .caseContent .boxScorll .content div .img1 {\n                margin-left: 200px;\n                width: 280px; }\n              .change-direction .case .caseContent .boxScorll .content div .img2 {\n                width: 610px;\n                margin-left: 210px; } }\n\n@media screen and (max-width: 1670px) {\n  .change-direction {\n    width: 100%;\n    height: 100%;\n    margin: 0 auto; }\n    .change-direction .body {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      overflow: hidden; }\n      .change-direction .body .q-title {\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        font-size: 18px;\n        font-weight: bold;\n        color: #333f48; }\n      .change-direction .body .q-body {\n        width: 100%;\n        height: 100%;\n        padding: 120px 10px 0 80px;\n        box-sizing: border-box; }\n        .change-direction .body .q-body .q-body-left {\n          float: left; }\n          .change-direction .body .q-body .q-body-left div {\n            margin-bottom: 50px; }\n            .change-direction .body .q-body .q-body-left div:nth-child(1) .text span {\n              display: block;\n              width: 275px;\n              height: 40px;\n              line-height: 40px;\n              text-align: center;\n              background: #00b5e2;\n              font-size: 20px;\n              color: #fff;\n              border-radius: 10px;\n              cursor: pointer; }\n              .change-direction .body .q-body .q-body-left div:nth-child(1) .text span:hover {\n                -webkit-transform-origin: center center;\n                -webkit-transform: scale(1.1, 1.1);\n                -ms-transform-origin: center center;\n                -ms-transform: scale(1.1, 1.1); }\n            .change-direction .body .q-body .q-body-left div:nth-child(1) .task {\n              display: none;\n              width: 275px;\n              background: #00b5e2;\n              position: absolute;\n              top: 118px;\n              left: 369px;\n              border-radius: 5px; }\n              .change-direction .body .q-body .q-body-left div:nth-child(1) .task span {\n                display: block;\n                width: 275px;\n                height: 40px;\n                line-height: 40px;\n                color: #fff;\n                text-align: center;\n                font-size: 16px;\n                cursor: pointer; }\n                .change-direction .body .q-body .q-body-left div:nth-child(1) .task span:hover {\n                  background: #0070c0; }\n            .change-direction .body .q-body .q-body-left div:nth-child(1):hover .task {\n              display: block; }\n            .change-direction .body .q-body .q-body-left div:nth-child(2) .text span {\n              display: block;\n              width: 275px;\n              height: 40px;\n              line-height: 40px;\n              text-align: center;\n              background: #d9d9d9;\n              font-size: 20px;\n              color: #fff;\n              border-radius: 10px;\n              cursor: pointer; }\n              .change-direction .body .q-body .q-body-left div:nth-child(2) .text span:hover {\n                transform-origin: center center;\n                transform: scale(1.1, 1.1); }\n            .change-direction .body .q-body .q-body-left div:nth-child(2) .task {\n              display: none;\n              width: 275px;\n              background: #00b5e2;\n              position: absolute;\n              top: 208px;\n              left: 369px;\n              border-radius: 5px; }\n              .change-direction .body .q-body .q-body-left div:nth-child(2) .task span {\n                display: block;\n                width: 275px;\n                height: 40px;\n                line-height: 40px;\n                color: #fff;\n                text-align: center;\n                font-size: 16px;\n                cursor: pointer; }\n                .change-direction .body .q-body .q-body-left div:nth-child(2) .task span:hover {\n                  background: #0070c0; }\n            .change-direction .body .q-body .q-body-left div:nth-child(2):hover .task {\n              display: block; }\n            .change-direction .body .q-body .q-body-left div:nth-child(3) .text span {\n              display: block;\n              width: 275px;\n              height: 40px;\n              line-height: 40px;\n              text-align: center;\n              background: #d9d9d9;\n              font-size: 20px;\n              color: #fff;\n              border-radius: 10px;\n              cursor: pointer; }\n              .change-direction .body .q-body .q-body-left div:nth-child(3) .text span:hover {\n                transform-origin: center center;\n                transform: scale(1.1, 1.1); }\n            .change-direction .body .q-body .q-body-left div:nth-child(3) .task {\n              display: none;\n              width: 275px;\n              background: #00b5e2;\n              position: absolute;\n              top: 300px;\n              left: 369px;\n              border-radius: 5px; }\n              .change-direction .body .q-body .q-body-left div:nth-child(3) .task span {\n                display: block;\n                width: 275px;\n                height: 40px;\n                line-height: 40px;\n                color: #fff;\n                text-align: center;\n                font-size: 16px;\n                cursor: pointer; }\n                .change-direction .body .q-body .q-body-left div:nth-child(3) .task span:hover {\n                  background: #0070c0; }\n            .change-direction .body .q-body .q-body-left div:nth-child(3):hover .task {\n              display: block; }\n          .change-direction .body .q-body .q-body-left .full {\n            background: #00b5e2 !important; }\n          .change-direction .body .q-body .q-body-left .empty {\n            display: inline-block;\n            z-index: 100;\n            width: 6px;\n            height: 6px;\n            border: 5px #00b5e2 solid !important; }\n        .change-direction .body .q-body .q-body-right {\n          float: right; }\n      .change-direction .body .redCircle {\n        position: absolute;\n        bottom: 120px;\n        left: 60px; }\n        .change-direction .body .redCircle img {\n          width: 30px;\n          height: 30px;\n          cursor: pointer; }\n        .change-direction .body .redCircle div {\n          display: none;\n          position: absolute;\n          bottom: -48px;\n          left: 50px;\n          width: 764px;\n          height: 100px;\n          font-size: 14px;\n          text-indent: 30px;\n          padding: 14px 10px;\n          border: 1px #00b5e2 solid;\n          background: #fff;\n          line-height: 30px;\n          border-radius: 6px; }\n          .change-direction .body .redCircle div span {\n            display: block;\n            color: green;\n            font-weight: bold;\n            margin-top: 10px; }\n        .change-direction .body .redCircle:hover div {\n          display: block; }\n    .change-direction .back {\n      position: absolute;\n      bottom: 6px;\n      left: 88px;\n      z-index: 100;\n      width: 30px;\n      height: 30px;\n      background-image: url(" + __webpack_require__(45) + ");\n      background-size: 100%;\n      cursor: pointer; }\n      .change-direction .back .tip {\n        display: none;\n        position: absolute;\n        bottom: 40px;\n        left: 0;\n        z-index: 1000;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n        border-radius: 2px;\n        padding: 0 25px;\n        height: 50px;\n        font-size: 16px;\n        line-height: 24px;\n        text-align: center;\n        white-space: nowrap;\n        color: #000;\n        background-color: #fff;\n        -moz-box-shadow: 0 0 2px 0;\n        box-shadow: 0 0 2px 0;\n        -ms-box-shadow: 0 0 2px 0; }\n      .change-direction .back:hover {\n        background-image: url(" + __webpack_require__(46) + ");\n        background-size: 100%; }\n        .change-direction .back:hover .tip {\n          display: block; }\n    .change-direction .sensor {\n      width: 100%;\n      height: 100%; }\n      .change-direction .sensor .sensorLeft {\n        width: 500px;\n        height: 490px;\n        margin-top: 10px;\n        overflow: hidden;\n        overflow-x: hidden;\n        float: left; }\n        .change-direction .sensor .sensorLeft .one h5 {\n          font-size: 18px;\n          font-weight: bold;\n          margin: 20px 0 0 48px;\n          color: #333f48; }\n        .change-direction .sensor .sensorLeft .one .startStop {\n          padding: 40px 50px 0 50px; }\n          .change-direction .sensor .sensorLeft .one .startStop .up {\n            height: 120px; }\n            .change-direction .sensor .sensorLeft .one .startStop .up div {\n              font-size: 14px;\n              font-weight: bold;\n              margin: 0px 0 10px 0;\n              cursor: pointer; }\n              .change-direction .sensor .sensorLeft .one .startStop .up div span {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                border: 4px #00b5e2 solid; }\n              .change-direction .sensor .sensorLeft .one .startStop .up div .full {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                background: #00b5e2; }\n            .change-direction .sensor .sensorLeft .one .startStop .up p {\n              font-size: 14px;\n              line-height: 30px;\n              margin-bottom: 10px; }\n          .change-direction .sensor .sensorLeft .one .startStop .down {\n            height: 120px; }\n            .change-direction .sensor .sensorLeft .one .startStop .down div {\n              font-size: 14px;\n              font-weight: bold;\n              margin: 22px 0 10px 0;\n              cursor: pointer; }\n              .change-direction .sensor .sensorLeft .one .startStop .down div span {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                border: 4px #d3daea solid; }\n              .change-direction .sensor .sensorLeft .one .startStop .down div .empty {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                border: 4px #00b5e2 solid; }\n              .change-direction .sensor .sensorLeft .one .startStop .down div .full {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                background: #00b5e2; }\n            .change-direction .sensor .sensorLeft .one .startStop .down p {\n              font-size: 14px;\n              line-height: 30px;\n              margin-bottom: 10px; }\n        .change-direction .sensor .sensorLeft .one .next {\n          position: absolute;\n          bottom: 80px;\n          left: 48px; }\n          .change-direction .sensor .sensorLeft .one .next span {\n            display: block;\n            width: 275px;\n            height: 40px;\n            line-height: 40px;\n            text-align: center;\n            background: #00b5e2;\n            font-size: 16px;\n            color: #fff;\n            border-radius: 10px;\n            cursor: pointer; }\n            .change-direction .sensor .sensorLeft .one .next span:hover {\n              transform-origin: center center;\n              transform: scale(1.1, 1.1); }\n          .change-direction .sensor .sensorLeft .one .next .task {\n            display: none;\n            position: absolute;\n            bottom: 50px;\n            left: 254px;\n            width: 80%;\n            height: 38px;\n            font-weight: normal;\n            text-align: center;\n            line-height: 20px;\n            font-size: 14px;\n            padding: 6px 6px;\n            background: #fff;\n            color: black;\n            border: 1px #00b5e2 solid; }\n          .change-direction .sensor .sensorLeft .one .next:hover .task {\n            display: block; }\n        .change-direction .sensor .sensorLeft .two h5 {\n          font-size: 18px;\n          font-weight: bold;\n          margin: 20px 0 0 48px;\n          color: #333f48; }\n        .change-direction .sensor .sensorLeft .two .startStop {\n          padding: 0px 30px 0 50px;\n          box-sizing: border-box;\n          height: 320px;\n          overflow: hidden;\n          margin: 44px 0;\n          width: 440px; }\n          .change-direction .sensor .sensorLeft .two .startStop .up {\n            height: 200px; }\n            .change-direction .sensor .sensorLeft .two .startStop .up div {\n              font-size: 14px;\n              font-weight: bold;\n              margin: 0px 0 10px 0;\n              cursor: pointer; }\n              .change-direction .sensor .sensorLeft .two .startStop .up div span {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                border: 4px #00b5e2 solid; }\n              .change-direction .sensor .sensorLeft .two .startStop .up div .full {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                background: #00b5e2; }\n            .change-direction .sensor .sensorLeft .two .startStop .up p {\n              font-size: 14px;\n              line-height: 30px; }\n          .change-direction .sensor .sensorLeft .two .startStop .down div {\n            font-size: 14px;\n            font-weight: bold;\n            margin: 50px 0 10px 0;\n            cursor: pointer; }\n            .change-direction .sensor .sensorLeft .two .startStop .down div span {\n              display: inline-block;\n              width: 6px;\n              height: 6px;\n              border: 4px #d3daea solid; }\n            .change-direction .sensor .sensorLeft .two .startStop .down div .empty {\n              display: inline-block;\n              width: 6px;\n              height: 6px;\n              border: 4px #00b5e2 solid; }\n            .change-direction .sensor .sensorLeft .two .startStop .down div .full {\n              display: inline-block;\n              width: 6px;\n              height: 6px;\n              background: #00b5e2; }\n          .change-direction .sensor .sensorLeft .two .startStop .down p {\n            font-size: 14px;\n            line-height: 30px; }\n        .change-direction .sensor .sensorLeft .two .next {\n          position: absolute;\n          bottom: 80px;\n          left: 48px; }\n          .change-direction .sensor .sensorLeft .two .next span {\n            display: block;\n            width: 275px;\n            height: 40px;\n            line-height: 40px;\n            text-align: center;\n            background: #00b5e2;\n            font-size: 16px;\n            color: #fff;\n            border-radius: 10px;\n            cursor: pointer; }\n            .change-direction .sensor .sensorLeft .two .next span:hover {\n              transform-origin: center center;\n              transform: scale(1.1, 1.1); }\n          .change-direction .sensor .sensorLeft .two .next .task {\n            display: none;\n            position: absolute;\n            bottom: 50px;\n            left: 254px;\n            width: 80%;\n            height: 38px;\n            font-weight: normal;\n            text-align: center;\n            line-height: 20px;\n            font-size: 14px;\n            padding: 6px 6px;\n            background: #fff;\n            color: black;\n            border: 1px #00b5e2 solid;\n            z-index: 100; }\n          .change-direction .sensor .sensorLeft .two .next:hover .task {\n            display: block; }\n        .change-direction .sensor .sensorLeft .three h5 {\n          font-size: 18px;\n          font-weight: bold;\n          margin: 20px 0 0 48px;\n          color: #333f48; }\n        .change-direction .sensor .sensorLeft .three .startStop {\n          padding: 20px 50px; }\n          .change-direction .sensor .sensorLeft .three .startStop .up {\n            height: 200px; }\n            .change-direction .sensor .sensorLeft .three .startStop .up div {\n              font-size: 14px;\n              font-weight: bold;\n              margin: 20px 0 10px 0;\n              cursor: pointer; }\n              .change-direction .sensor .sensorLeft .three .startStop .up div span {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                border: 4px #00b5e2 solid; }\n              .change-direction .sensor .sensorLeft .three .startStop .up div .full {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                background: #00b5e2; }\n            .change-direction .sensor .sensorLeft .three .startStop .up p {\n              font-size: 14px;\n              line-height: 30px;\n              width: 360px; }\n        .change-direction .sensor .sensorLeft .three .next {\n          position: absolute;\n          bottom: 80px;\n          left: 48px; }\n          .change-direction .sensor .sensorLeft .three .next span {\n            display: block;\n            width: 275px;\n            height: 40px;\n            line-height: 40px;\n            text-align: center;\n            background: #00b5e2;\n            font-size: 16px;\n            color: #fff;\n            border-radius: 10px;\n            cursor: pointer; }\n            .change-direction .sensor .sensorLeft .three .next span:hover {\n              transform-origin: center center;\n              transform: scale(1.1, 1.1); }\n          .change-direction .sensor .sensorLeft .three .next .task {\n            display: none;\n            position: absolute;\n            bottom: 50px;\n            left: 254px;\n            width: 80%;\n            height: 38px;\n            font-weight: normal;\n            text-align: center;\n            line-height: 20px;\n            font-size: 14px;\n            padding: 6px 6px;\n            background: #fff;\n            color: black;\n            border: 1px #00b5e2 solid; }\n          .change-direction .sensor .sensorLeft .three .next:hover .task {\n            display: block; }\n      .change-direction .sensor .sensorRight {\n        float: right;\n        width: 400px;\n        height: 400px; }\n        .change-direction .sensor .sensorRight .one .upImg {\n          width: 250px;\n          height: 310px;\n          margin: 110px 0 1000px 50px; }\n          .change-direction .sensor .sensorRight .one .upImg img {\n            width: 100%;\n            height: 100%; }\n        .change-direction .sensor .sensorRight .one .down1Img {\n          position: relative;\n          width: 250px;\n          height: 310px;\n          margin: 110px 0 1000px 50px; }\n          .change-direction .sensor .sensorRight .one .down1Img img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .one .down1Img .upImg {\n            width: 93px;\n            height: 85px;\n            position: absolute;\n            top: -1px;\n            cursor: pointer;\n            left: 49px; }\n        .change-direction .sensor .sensorRight .one .circuit {\n          position: relative;\n          top: 60px;\n          width: 380px;\n          height: 400px;\n          margin-bottom: 1000px; }\n          .change-direction .sensor .sensorRight .one .circuit img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .one .circuit div {\n            position: absolute;\n            top: 227px;\n            left: 86px;\n            width: 10px;\n            height: 10px;\n            background: red;\n            border-radius: 50%;\n            cursor: pointer; }\n            .change-direction .sensor .sensorRight .one .circuit div span {\n              display: none;\n              position: absolute;\n              top: -34px;\n              left: -66px;\n              text-align: center;\n              line-height: 30px;\n              width: 145px;\n              height: 30px;\n              background: #fff;\n              border: 1px #00b5e2 solid;\n              border-radius: 4px; }\n            .change-direction .sensor .sensorRight .one .circuit div:nth-child(2) {\n              top: 157px;\n              left: 87px; }\n              .change-direction .sensor .sensorRight .one .circuit div:nth-child(2) span {\n                top: -40px;\n                left: -80px; }\n            .change-direction .sensor .sensorRight .one .circuit div:nth-child(3) {\n              top: 157px;\n              left: 214px; }\n              .change-direction .sensor .sensorRight .one .circuit div:nth-child(3) span {\n                top: -40px;\n                left: -58px; }\n            .change-direction .sensor .sensorRight .one .circuit div:nth-child(4) {\n              top: 157px;\n              left: 277px; }\n              .change-direction .sensor .sensorRight .one .circuit div:nth-child(4) span {\n                width: 162px;\n                top: -40px;\n                left: -58px; }\n            .change-direction .sensor .sensorRight .one .circuit div:nth-child(5) {\n              top: 190px;\n              left: 180px; }\n              .change-direction .sensor .sensorRight .one .circuit div:nth-child(5) span {\n                top: -40px;\n                left: -58px; }\n            .change-direction .sensor .sensorRight .one .circuit div:nth-child(6) {\n              top: 226px;\n              left: 278px; }\n              .change-direction .sensor .sensorRight .one .circuit div:nth-child(6) span {\n                width: 162px;\n                top: -40px;\n                left: -58px; }\n            .change-direction .sensor .sensorRight .one .circuit div:hover span {\n              display: block; }\n        .change-direction .sensor .sensorRight .two .upImg {\n          width: 330px;\n          height: 310px;\n          margin: 110px 0 1000px 0px; }\n          .change-direction .sensor .sensorRight .two .upImg img {\n            width: 100%;\n            height: 100%; }\n        .change-direction .sensor .sensorRight .two .down1Img {\n          position: relative;\n          width: 330px;\n          height: 310px;\n          margin: 110px 0 1000px 0px; }\n          .change-direction .sensor .sensorRight .two .down1Img img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .two .down1Img div .upImg {\n            width: 53px;\n            height: 112px;\n            position: absolute;\n            top: 65px;\n            cursor: pointer;\n            left: 38px; }\n          .change-direction .sensor .sensorRight .two .down1Img div span {\n            position: absolute;\n            display: none;\n            top: 112px;\n            left: 10px;\n            width: 250px;\n            height: 50px;\n            background: #fff;\n            border: 1px #00b5e2 solid;\n            border-radius: 4px;\n            text-align: center;\n            line-height: 24px;\n            font-size: 14px; }\n          .change-direction .sensor .sensorRight .two .down1Img div:hover span {\n            display: block; }\n        .change-direction .sensor .sensorRight .two .circuit {\n          position: relative;\n          top: 60px;\n          width: 300px;\n          height: 400px;\n          margin-bottom: 1000px; }\n          .change-direction .sensor .sensorRight .two .circuit img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .two .circuit div {\n            position: absolute;\n            top: 203px;\n            left: 101px;\n            width: 10px;\n            height: 10px;\n            background: red;\n            border-radius: 50%;\n            cursor: pointer; }\n            .change-direction .sensor .sensorRight .two .circuit div span {\n              display: none;\n              position: absolute;\n              top: -34px;\n              left: -66px;\n              text-align: center;\n              line-height: 30px;\n              width: 145px;\n              height: 30px;\n              background: #fff;\n              border: 1px #00b5e2 solid;\n              border-radius: 4px; }\n            .change-direction .sensor .sensorRight .two .circuit div:nth-child(2) {\n              top: 40px;\n              left: 100px; }\n              .change-direction .sensor .sensorRight .two .circuit div:nth-child(2) span {\n                top: -40px;\n                left: -68px; }\n            .change-direction .sensor .sensorRight .two .circuit div:nth-child(3) {\n              top: 206px;\n              left: 242px; }\n              .change-direction .sensor .sensorRight .two .circuit div:nth-child(3) span {\n                top: -40px;\n                left: -58px; }\n            .change-direction .sensor .sensorRight .two .circuit div:nth-child(4) {\n              top: 230px;\n              left: 256px; }\n              .change-direction .sensor .sensorRight .two .circuit div:nth-child(4) span {\n                width: 162px;\n                top: -12px;\n                left: 16px; }\n            .change-direction .sensor .sensorRight .two .circuit div:nth-child(5) {\n              top: 256px;\n              left: 242px; }\n              .change-direction .sensor .sensorRight .two .circuit div:nth-child(5) span {\n                width: 200px;\n                top: 13px;\n                left: -86px; }\n            .change-direction .sensor .sensorRight .two .circuit div:nth-child(6) {\n              top: 260px;\n              left: 101px; }\n              .change-direction .sensor .sensorRight .two .circuit div:nth-child(6) span {\n                width: 162px;\n                top: 12px;\n                left: -78px; }\n            .change-direction .sensor .sensorRight .two .circuit div:hover span {\n              display: block; }\n        .change-direction .sensor .sensorRight .three .upImg {\n          width: 250px;\n          height: 310px;\n          margin: 110px 0 1000px 0;\n          cursor: pointer; }\n          .change-direction .sensor .sensorRight .three .upImg img {\n            width: 100%;\n            height: 100%; }\n        .change-direction .sensor .sensorRight .three .down1Img {\n          position: relative;\n          width: 350px;\n          height: 280px;\n          margin: 110px 0 1000px 0px; }\n          .change-direction .sensor .sensorRight .three .down1Img img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .three .down1Img div .upImg {\n            width: 65px;\n            height: 32px;\n            position: absolute;\n            top: 7px;\n            left: 56px; }\n          .change-direction .sensor .sensorRight .three .down1Img div span {\n            position: absolute;\n            display: none;\n            top: 62px;\n            left: 10px;\n            width: 200px;\n            height: 40px;\n            background: #fff;\n            border: 1px #00b5e2 solid;\n            text-align: center;\n            line-height: 40px;\n            font-size: 14px;\n            border-radius: 4px; }\n          .change-direction .sensor .sensorRight .three .down1Img div:hover span {\n            display: block; }\n        .change-direction .sensor .sensorRight .three .circuit {\n          position: relative;\n          top: 60px;\n          width: 300px;\n          height: 400px;\n          margin-bottom: 1000px; }\n          .change-direction .sensor .sensorRight .three .circuit img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .sensor .sensorRight .three .circuit div {\n            position: absolute;\n            top: 227px;\n            left: 86px;\n            width: 10px;\n            height: 10px;\n            background: red;\n            border-radius: 50%;\n            cursor: pointer; }\n            .change-direction .sensor .sensorRight .three .circuit div span {\n              display: none;\n              position: absolute;\n              top: -34px;\n              left: -66px;\n              text-align: center;\n              line-height: 30px;\n              width: 145px;\n              height: 30px;\n              background: #fff;\n              border: 1px #00b5e2 solid;\n              border-radius: 4px; }\n            .change-direction .sensor .sensorRight .three .circuit div:nth-child(2) {\n              top: 208px;\n              left: 60px; }\n              .change-direction .sensor .sensorRight .three .circuit div:nth-child(2) span {\n                top: -40px;\n                left: -68px; }\n            .change-direction .sensor .sensorRight .three .circuit div:nth-child(3) {\n              top: 208px;\n              left: 207px; }\n              .change-direction .sensor .sensorRight .three .circuit div:nth-child(3) span {\n                top: -40px;\n                left: -58px; }\n            .change-direction .sensor .sensorRight .three .circuit div:nth-child(4) {\n              top: 256px;\n              left: 206px; }\n              .change-direction .sensor .sensorRight .three .circuit div:nth-child(4) span {\n                width: 162px;\n                top: -42px;\n                left: -84px; }\n            .change-direction .sensor .sensorRight .three .circuit div:nth-child(5) {\n              top: 242px;\n              left: 70px; }\n              .change-direction .sensor .sensorRight .three .circuit div:nth-child(5) span {\n                width: 200px;\n                top: -37px;\n                left: -86px; }\n            .change-direction .sensor .sensorRight .three .circuit div:hover span {\n              display: block; }\n    .change-direction .power {\n      width: 100%;\n      height: 100%; }\n      .change-direction .power .powerLeft {\n        width: 500px;\n        height: 490px;\n        float: left;\n        margin-top: 10px;\n        overflow: hidden; }\n        .change-direction .power .powerLeft .one h5 {\n          font-size: 18px;\n          font-weight: bold;\n          margin: 20px 0 0 48px;\n          color: #333f48; }\n        .change-direction .power .powerLeft .one .startStop {\n          padding: 50px 50px;\n          width: 420px; }\n          .change-direction .power .powerLeft .one .startStop .up {\n            height: 120px; }\n            .change-direction .power .powerLeft .one .startStop .up div {\n              font-size: 14px;\n              font-weight: bold;\n              margin: -10px 0 10px 0;\n              cursor: pointer; }\n              .change-direction .power .powerLeft .one .startStop .up div span {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                border: 4px #00b5e2 solid; }\n              .change-direction .power .powerLeft .one .startStop .up div .full {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                background: #00b5e2; }\n            .change-direction .power .powerLeft .one .startStop .up p {\n              font-size: 14px;\n              line-height: 30px;\n              width: 360px; }\n          .change-direction .power .powerLeft .one .startStop .down {\n            height: 120px; }\n            .change-direction .power .powerLeft .one .startStop .down div {\n              font-size: 14px;\n              font-weight: bold;\n              margin: 20px 0 10px 0; }\n              .change-direction .power .powerLeft .one .startStop .down div span {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                border: 4px #d3daea solid; }\n              .change-direction .power .powerLeft .one .startStop .down div .empty {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                border: 4px #00b5e2 solid; }\n              .change-direction .power .powerLeft .one .startStop .down div .full {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                background: #00b5e2; }\n            .change-direction .power .powerLeft .one .startStop .down p {\n              font-size: 14px;\n              line-height: 30px; }\n        .change-direction .power .powerLeft .one .next {\n          position: absolute;\n          bottom: 80px;\n          left: 48px; }\n          .change-direction .power .powerLeft .one .next span {\n            display: block;\n            width: 275px;\n            height: 40px;\n            line-height: 40px;\n            text-align: center;\n            background: #00b5e2;\n            font-size: 16px;\n            color: #fff;\n            border-radius: 10px;\n            cursor: pointer; }\n            .change-direction .power .powerLeft .one .next span:hover {\n              transform-origin: center center;\n              transform: scale(1.1, 1.1); }\n          .change-direction .power .powerLeft .one .next .task {\n            display: none;\n            position: absolute;\n            bottom: 50px;\n            left: 254px;\n            width: 80%;\n            height: 38px;\n            font-weight: normal;\n            text-align: center;\n            line-height: 20px;\n            font-size: 14px;\n            padding: 6px 6px;\n            background: #fff;\n            color: black;\n            border: 1px #00b5e2 solid; }\n          .change-direction .power .powerLeft .one .next:hover .task {\n            display: block; }\n        .change-direction .power .powerLeft .two h5 {\n          font-size: 18px;\n          font-weight: bold;\n          margin: 20px 0 0 48px;\n          color: #333f48; }\n        .change-direction .power .powerLeft .two .startStop {\n          padding: 0 50px 0 50px;\n          box-sizing: border-box;\n          height: 320px;\n          width: 420px;\n          overflow: hidden;\n          margin: 26px 0; }\n          .change-direction .power .powerLeft .two .startStop .up {\n            height: 120px; }\n            .change-direction .power .powerLeft .two .startStop .up div {\n              font-size: 14px;\n              font-weight: bold;\n              margin: 20px 0 10px 0;\n              cursor: pointer; }\n              .change-direction .power .powerLeft .two .startStop .up div span {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                border: 4px #00b5e2 solid; }\n              .change-direction .power .powerLeft .two .startStop .up div .full {\n                display: inline-block;\n                width: 6px;\n                height: 6px;\n                background: #00b5e2; }\n            .change-direction .power .powerLeft .two .startStop .up p {\n              font-size: 14px;\n              line-height: 30px; }\n          .change-direction .power .powerLeft .two .startStop .down div {\n            font-size: 14px;\n            font-weight: bold;\n            margin: 192px 0 10px 0;\n            cursor: pointer; }\n            .change-direction .power .powerLeft .two .startStop .down div span {\n              display: inline-block;\n              width: 6px;\n              height: 6px;\n              border: 4px #d3daea solid; }\n            .change-direction .power .powerLeft .two .startStop .down div .empty {\n              display: inline-block;\n              width: 6px;\n              height: 6px;\n              border: 4px #00b5e2 solid; }\n            .change-direction .power .powerLeft .two .startStop .down div .full {\n              display: inline-block;\n              width: 6px;\n              height: 6px;\n              background: #00b5e2; }\n          .change-direction .power .powerLeft .two .startStop .down p {\n            font-size: 14px;\n            line-height: 30px; }\n        .change-direction .power .powerLeft .two .next {\n          position: absolute;\n          bottom: 80px;\n          left: 48px; }\n          .change-direction .power .powerLeft .two .next span {\n            display: block;\n            width: 275px;\n            height: 40px;\n            line-height: 40px;\n            text-align: center;\n            background: #00b5e2;\n            font-size: 16px;\n            color: #fff;\n            border-radius: 10px;\n            cursor: pointer; }\n            .change-direction .power .powerLeft .two .next span:hover {\n              transform-origin: center center;\n              transform: scale(1.1, 1.1); }\n          .change-direction .power .powerLeft .two .next .task {\n            display: none;\n            position: absolute;\n            bottom: 50px;\n            left: 254px;\n            width: 80%;\n            height: 38px;\n            font-weight: normal;\n            text-align: center;\n            line-height: 20px;\n            font-size: 14px;\n            padding: 6px 6px;\n            background: #fff;\n            color: black;\n            border: 1px #00b5e2 solid;\n            z-index: 100; }\n          .change-direction .power .powerLeft .two .next:hover .task {\n            display: block; }\n      .change-direction .power .powerRight {\n        float: right;\n        width: 400px;\n        height: 400px; }\n        .change-direction .power .powerRight .one .upImg {\n          width: 250px;\n          height: 310px;\n          margin: 110px 0 1000px 50px; }\n          .change-direction .power .powerRight .one .upImg img {\n            width: 100%;\n            height: 100%; }\n        .change-direction .power .powerRight .one .down1Img {\n          position: relative;\n          width: 340px;\n          height: 280px;\n          margin: 110px 0 1000px 0px; }\n          .change-direction .power .powerRight .one .down1Img img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .power .powerRight .one .down1Img div .upImg {\n            width: 23px;\n            height: 27px;\n            position: absolute;\n            top: 49px;\n            left: 261px;\n            cursor: pointer; }\n          .change-direction .power .powerRight .one .down1Img div span {\n            position: absolute;\n            display: none;\n            top: 92px;\n            left: 80px;\n            width: 250px;\n            height: 50px;\n            background: #fff;\n            border: 1px #00b5e2 solid;\n            text-align: center;\n            line-height: 24px;\n            font-size: 14px;\n            border-radius: 4px; }\n          .change-direction .power .powerRight .one .down1Img div:hover span {\n            display: block; }\n        .change-direction .power .powerRight .two .upImg {\n          width: 310px;\n          height: 300px;\n          margin: 110px 0 1000px 0; }\n          .change-direction .power .powerRight .two .upImg img {\n            width: 100%;\n            height: 100%; }\n        .change-direction .power .powerRight .two .down1Img {\n          position: relative;\n          width: 310px;\n          height: 300px;\n          margin: 110px 0 1000px 0; }\n          .change-direction .power .powerRight .two .down1Img img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .power .powerRight .two .down1Img div .upImg {\n            width: 133px;\n            height: 225px;\n            position: absolute;\n            top: -81px;\n            left: 91px;\n            cursor: pointer; }\n          .change-direction .power .powerRight .two .down1Img div span {\n            position: absolute;\n            display: none;\n            top: -28px;\n            left: 10px;\n            width: 250px;\n            height: 50px;\n            background: #fff;\n            border: 1px #00b5e2 solid;\n            border-radius: 4px;\n            text-align: center;\n            line-height: 48px;\n            font-size: 14px; }\n          .change-direction .power .powerRight .two .down1Img div:hover span {\n            display: block; }\n        .change-direction .power .powerRight .two .circuit {\n          position: relative;\n          top: 60px;\n          width: 327px;\n          height: 400px;\n          margin-left: 30px;\n          margin-bottom: 1000px; }\n          .change-direction .power .powerRight .two .circuit img {\n            width: 100%;\n            height: 100%; }\n          .change-direction .power .powerRight .two .circuit div {\n            position: absolute;\n            top: 243px;\n            left: 46px;\n            width: 10px;\n            height: 10px;\n            background: red;\n            border-radius: 50%;\n            cursor: pointer; }\n            .change-direction .power .powerRight .two .circuit div span {\n              display: none;\n              position: absolute;\n              top: -34px;\n              left: -66px;\n              text-align: center;\n              line-height: 30px;\n              width: 145px;\n              height: 30px;\n              background: #fff;\n              border: 1px #00b5e2 solid;\n              border-radius: 4px; }\n            .change-direction .power .powerRight .two .circuit div:nth-child(2) {\n              top: 193px;\n              left: 47px; }\n              .change-direction .power .powerRight .two .circuit div:nth-child(2) span {\n                height: 40px;\n                line-height: 20px;\n                top: -40px;\n                left: -80px; }\n            .change-direction .power .powerRight .two .circuit div:nth-child(3) {\n              top: 216px;\n              left: 67px; }\n              .change-direction .power .powerRight .two .circuit div:nth-child(3) span {\n                top: -40px;\n                left: -58px; }\n            .change-direction .power .powerRight .two .circuit div:nth-child(4) {\n              top: 193px;\n              left: 257px; }\n              .change-direction .power .powerRight .two .circuit div:nth-child(4) span {\n                width: 162px;\n                height: 40px;\n                line-height: 20px;\n                top: -40px;\n                left: -58px; }\n            .change-direction .power .powerRight .two .circuit div:nth-child(5) {\n              top: 243px;\n              left: 257px; }\n              .change-direction .power .powerRight .two .circuit div:nth-child(5) span {\n                top: -40px;\n                left: -58px; }\n            .change-direction .power .powerRight .two .circuit div:nth-child(6) {\n              top: 243px;\n              left: 187px; }\n              .change-direction .power .powerRight .two .circuit div:nth-child(6) span {\n                width: 162px;\n                top: -40px;\n                left: -58px; }\n            .change-direction .power .powerRight .two .circuit div:hover span {\n              display: block; }\n    .change-direction .case {\n      width: 100%;\n      height: 100%; }\n      .change-direction .case .caseTitle {\n        font-size: 18px;\n        font-weight: bold;\n        margin: 20px 0 0 48px; }\n      .change-direction .case .caseContent {\n        width: 90%;\n        height: 400px;\n        border: 1px #00b5e2 solid;\n        margin: 20px 0 0 48px;\n        padding: 10px 30px;\n        box-sizing: border-box;\n        overflow: hidden; }\n        .change-direction .case .caseContent .boxScorll {\n          width: 100%;\n          height: 100%; }\n          .change-direction .case .caseContent .boxScorll .content {\n            box-sizing: border-box;\n            line-height: 30px;\n            font-size: 14px; }\n            .change-direction .case .caseContent .boxScorll .content ul li span {\n              display: inline-block;\n              width: 16px;\n              height: 16px;\n              border-radius: 50%;\n              text-align: center;\n              line-height: 16px;\n              background: #333f48;\n              color: #fff;\n              margin-right: 10px; }\n            .change-direction .case .caseContent .boxScorll .content div {\n              margin-bottom: 30px; }\n              .change-direction .case .caseContent .boxScorll .content div .img1,\n              .change-direction .case .caseContent .boxScorll .content div .img2 {\n                margin-left: 200px; }\n              .change-direction .case .caseContent .boxScorll .content div .img2 {\n                width: 480px;\n                height: 360px; } }\n", ""]);

// exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".testQuestion {\n  position: absolute;\n  top: 100px;\n  width: 90%;\n  height: 78%;\n  left: 95px; }\n  .testQuestion .titleName {\n    position: absolute; }\n    .testQuestion .titleName img {\n      display: inline-block;\n      width: 20px;\n      vertical-align: sub; }\n    .testQuestion .titleName h2 {\n      display: inline-block;\n      color: #113662; }\n  .testQuestion .content .questionTitle {\n    margin-top: 41px;\n    margin-left: 26px;\n    color: #9a9a9a;\n    width: 252px; }\n  .testQuestion .content img {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0; }\n  .testQuestion .content form {\n    position: absolute;\n    z-index: 6;\n    top: 133px;\n    left: 26px; }\n    .testQuestion .content form label {\n      display: block;\n      margin-bottom: 10px; }\n      .testQuestion .content form label input {\n        display: inline-block; }\n      .testQuestion .content form label span {\n        width: 150px;\n        height: 28px;\n        line-height: 28px;\n        text-align: center;\n        border-radius: 4px;\n        color: #fff;\n        margin-left: 15px;\n        display: inline-block; }\n  .testQuestion .content .task {\n    color: red;\n    position: absolute;\n    bottom: 70px;\n    left: 60px; }\n  .testQuestion .content .prev,\n  .testQuestion .content .next {\n    position: absolute;\n    z-index: 6;\n    bottom: 70px;\n    left: 210px;\n    color: green; }\n    .testQuestion .content .prev.next,\n    .testQuestion .content .next.next {\n      left: 260px; }\n", ""]);

// exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "/* perfect-scrollbar v0.7.0 */\r\n\r\n.ps {\r\n  -ms-touch-action: auto;\r\n  touch-action: auto;\r\n  overflow: hidden !important;\r\n  -ms-overflow-style: none\r\n}\r\n\r\n@supports (-ms-overflow-style: none) {\r\n  .ps {\r\n    overflow: auto !important\r\n  }\r\n}\r\n\r\n@media screen and (-ms-high-contrast: active),\r\n(-ms-high-contrast: none) {\r\n  .ps {\r\n    overflow: auto !important\r\n  }\r\n}\r\n\r\n.ps.ps--active-x>.ps__scrollbar-x-rail,\r\n.ps.ps--active-y>.ps__scrollbar-y-rail {\r\n  display: block;\r\n  background-color: transparent\r\n}\r\n\r\n.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail {\r\n  background-color: #eee;\r\n  opacity: .9\r\n}\r\n\r\n.ps.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x {\r\n  background-color: #999;\r\n  height: 11px\r\n}\r\n\r\n.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail {\r\n  background-color: #eee;\r\n  opacity: .9\r\n}\r\n\r\n.ps.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y {\r\n  background-color: #999;\r\n  width: 11px\r\n}\r\n\r\n.ps>.ps__scrollbar-x-rail {\r\n  display: none;\r\n  position: absolute;\r\n  opacity: 0;\r\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\r\n  -o-transition: background-color .2s linear, opacity .2s linear;\r\n  -moz-transition: background-color .2s linear, opacity .2s linear;\r\n  transition: background-color .2s linear, opacity .2s linear;\r\n  bottom: 0px;\r\n  height: 0px\r\n}\r\n\r\n.ps>.ps__scrollbar-x-rail>.ps__scrollbar-x {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #aaa;\r\n  -webkit-border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n  border-radius: 6px;\r\n  -webkit-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;\r\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;\r\n  -o-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\r\n  -moz-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;\r\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\r\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -webkit-border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;\r\n  bottom: 0px;\r\n  height: 0px\r\n}\r\n\r\n.ps>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x,\r\n.ps>.ps__scrollbar-x-rail:active>.ps__scrollbar-x {\r\n  height: 11px\r\n}\r\n\r\n.ps>.ps__scrollbar-y-rail {\r\n  display: none;\r\n  position: absolute;\r\n  opacity: 0;\r\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\r\n  -o-transition: background-color .2s linear, opacity .2s linear;\r\n  -moz-transition: background-color .2s linear, opacity .2s linear;\r\n  transition: background-color .2s linear, opacity .2s linear;\r\n  right: 0;\r\n  width: 15px\r\n}\r\n\r\n.ps>.ps__scrollbar-y-rail>.ps__scrollbar-y {\r\n  position: absolute;\r\n  background-color: #aaa;\r\n  -webkit-border-radius: 6px;\r\n  -moz-border-radius: 6px;\r\n  border-radius: 6px;\r\n  -webkit-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;\r\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, -webkit-border-radius .2s ease-in-out;\r\n  -o-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\r\n  -moz-transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;\r\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\r\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out, -webkit-border-radius .2s ease-in-out, -moz-border-radius .2s ease-in-out;\r\n  right: 2px;\r\n  width: 6px\r\n}\r\n\r\n.ps>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y,\r\n.ps>.ps__scrollbar-y-rail:active>.ps__scrollbar-y {\r\n  width: 11px\r\n}\r\n\r\n.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail {\r\n  background-color: #eee;\r\n  opacity: .9\r\n}\r\n\r\n.ps:hover.ps--in-scrolling.ps--x>.ps__scrollbar-x-rail>.ps__scrollbar-x {\r\n  background-color: #999;\r\n  height: 11px\r\n}\r\n\r\n.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail {\r\n  background-color: #eee;\r\n  opacity: .9\r\n}\r\n\r\n.ps:hover.ps--in-scrolling.ps--y>.ps__scrollbar-y-rail>.ps__scrollbar-y {\r\n  background-color: #999;\r\n  width: 11px\r\n}\r\n\r\n.ps:hover>.ps__scrollbar-x-rail,\r\n.ps:hover>.ps__scrollbar-y-rail {\r\n  opacity: .6\r\n}\r\n\r\n.ps:hover>.ps__scrollbar-x-rail:hover {\r\n  background-color: #eee;\r\n  opacity: .9\r\n}\r\n\r\n.ps:hover>.ps__scrollbar-x-rail:hover>.ps__scrollbar-x {\r\n  background-color: #999\r\n}\r\n\r\n.ps:hover>.ps__scrollbar-y-rail:hover {\r\n  background-color: #eee;\r\n  opacity: .9\r\n}\r\n\r\n.ps:hover>.ps__scrollbar-y-rail:hover>.ps__scrollbar-y {\r\n  background-color: #999\r\n}\r\n", ""]);

// exports


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nspan.active {\r\n  background-color: gray;\r\n}\r\n\r\nbody,\r\ndiv,\r\ndl,\r\ndt,\r\ndd,\r\nul,\r\nol,\r\nli,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\npre,\r\ncode,\r\nform,\r\nfieldset,\r\nlegend,\r\ninput,\r\nbutton,\r\ntextarea,\r\nblockquote,\r\nth,\r\ntd,\r\np {\r\n  margin: 0;\r\n  border: none;\r\n  padding: 0;\r\n  background: none;\r\n  -moz-user-select: none;\r\n  /*火狐*/\r\n  -webkit-user-select: none;\r\n  /*webkit浏览器*/\r\n  -ms-user-select: none;\r\n  /*IE10*/\r\n  -khtml-user-select: none;\r\n  /*早期浏览器*/\r\n  user-select: none;\r\n  font-family: Microsoft YaHei !important;\r\n}\r\n\r\ninput,\r\nbutton,\r\nselect,\r\ntextarea {\r\n  outline: none;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nimg {\r\n  border: none;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n}\r\n\r\nbody {\r\n  word-wrap: break-word;\r\n  word-break: break-all;\r\n  color: #000;\r\n  background: #fff;\r\n}\r\n\r\nbody {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n  font-family: \\5FAE\\8F6F\\96C5\\9ED1, Verdana, Arial;\r\n  font-size: 14px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #305999;\r\n  outline: none;\r\n}\r\n\r\n* {\r\n  word-break: break-word;\r\n}\r\n\r\n\r\n/*comm========================================================================================================*/\r\n\r\n.hide-important {\r\n  display: none !important;\r\n}\r\n\r\n.cursor-pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.z-index-100 {\r\n  z-index: 100;\r\n}\r\n\r\n.opacity {\r\n  opacity: 0;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eb170d3770efdc23f8854b61f4013cdb.svg";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "500ec1b84b23550832782436c4ced8f9.woff";

/***/ }),
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(module, exports) {

module.exports = "<div class=\"com-button\" [ngStyle]=\"setStyle()\" halo [halo]=\"data?.currentState?.animation?.animationOnID\" [ficker1]=\"data?.currentState?.animation?.animationOnID\"\r\n  [ficker2]=\"data?.currentState?.animation?.animationOnID\" *ngIf=\"!(data.currentStyle?.display==='none')\">\r\n  {{data?.currentState?.buttonText}}\r\n</div>\r\n"

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = "<!-- 关闭按钮的弹窗 -->\r\n<div class=\"modal\" *ngIf=\"modal\">\r\n    <div class=\"modal-dialog\">\r\n        <img src=\"./assets/images/project/closeIcon.png\" alt=\"\">\r\n        <p>您是否要退出课程学习？</p>\r\n\r\n        <button class=\"no\" (click)=\"reStudy()\">否</button>\r\n        <button class=\"yes\" (click)=\"closeWindow()\">是</button>\r\n    </div>\r\n</div>"

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = "<div class=\"contrlcenter\">\r\n    <span (click)='switchCar(\"on\")' class=\"on\"></span>\r\n    <div class=\"oilMeterPointer\" [@flyIn]='this.changeRotate'></div>\r\n</div>"

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = "<!--档位操控面板-->\r\n<div class=\"gear-wrap dragSource z-index-100\">\r\n  <button class=\"close cursor-pointer\" (click)=\" closeSwitchPanel('pedal') \">X</button>\r\n\r\n  <div class=\"state-wrap\">\r\n    <span class=\"stateR cursor-pointer\" (click)=\"switchGear(1,'.stateR',R)\">R</span>\r\n    <span class=\"stateN cursor-pointer\" (click)=\"switchGear(2,'.stateN',N)\">N</span>\r\n    <span class=\"stateD1 cursor-pointer\" (click)=\"switchGear(3,'.stateD1',D)\">D</span>\r\n  </div>\r\n  <div class=\"gear-switch\"></div>\r\n  <div class=\"gear-accelerator\">\r\n    <div class=\"accelerator\"></div>\r\n  </div>\r\n  <!--<audio *ngIf=\"isaudio == '3'\" autoplay=\"autoplay\" loop=\"loop\" src=\"./assets/audios/bk1500.mp3\" style=\"width: 0; height: 0;\"></audio>\r\n  <audio *ngIf=\"isaudio == '4'\" autoplay=\"autoplay\" loop=\"loop\" src=\"./assets/audios/bk2500.mp3\" style=\"width: 0; height: 0;\"></audio>\r\n  <audio *ngIf=\"isaudio == '5'\" autoplay=\"autoplay\" loop=\"loop\" src=\"./assets/audios/bk3500.mp3\" style=\"width: 0; height: 0;\"></audio>-->\r\n  <div class=\"gear-brake\" (click)=\"brakeOn('.gear-brake')\"></div>\r\n\r\n</div>\r\n"

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;height:100%;position:fixed;top: 0;left:0; margin:auto;z-index:9000; background: rgba(0,0,0,0.5);\"\r\n  id=\"overspread\" *ngIf=\"!handleErrorService.errorPopupHidden\">\r\n  <div class=\"handle-error-body\">\r\n    <div id=\"error_close\" style=\"position: absolute; width: 30px;\r\n    height: 25px; cursor: pointer; right: 0; top: 0;\" (click)=\"closeErrorPopup()\"></div>\r\n    <div style=\"position: absolute; margin: 7px 10px;text-align: center;line-height:10px;\">\r\n      <div *ngFor=\" let errorMessage of handleErrorService.errorMessages\">{{errorMessage.message}}</div>\r\n    </div>\r\n    <div id=\"error_ensure\" style=\"position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 25px;\r\n    cursor: pointer;\" (click)=\"closeErrorPopup()\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = "<div class=\"multimeter-contain\">\r\n    <div id=\"mask-multimeter\">\r\n        <div class=\"multimeter\" id=\"hehhe\">\r\n            <div id=\"multimeter-bottom\" class=\"multimeter-bottom\"></div>\r\n            <div class=\"multimeter-off cursor-pointer\" (click)=\"this.Mdata.multimeteroff();\"></div>\r\n            <div class=\"multimeter-v cursor-pointer\" (click)=\"multimeterv()\"></div>\r\n            <div class=\"multimeter-Red\"></div>\r\n            <div class=\"multimeter-black\"></div>\r\n            <div class=\"multimeter-coe close cursor-pointer\" style='cursor:pointer;' (click)=\"closemultimeter();\">X</div>\r\n        </div>\r\n    </div>\r\n    <div id=\"hhjmultimeterRed-hotspot\" class=\"hhjmultimeterRed-hotspot ui-draggable\"></div>\r\n    <div id=\"hhjmultimeterRed\" class=\"multimeterRed\"></div>\r\n    <div id=\"hhjmultimeterBlack-hotspot\" class=\"hhjmultimeterBlack-hotspot ui-draggable\"></div>\r\n    <div id=\"hhjmultimeterBlack\" class=\"multimeterBlack\"></div>\r\n    <span class=\"value\"></span>\r\n    <span class=\"company\"></span>\r\n</div>\r\n<div id=\"mask-svg\" style=\"overflow:hidden\">\r\n    <svg width='1024px' height='460px' version='1.1' xmlns='http://www.w3.org/2000/svg' id='svg'>\r\n              <path d='M950 120 C950 120 720 50 900 400' style='fill:none;stroke:#d83747;stroke-width:5' id='path_Red' \r\n              />\r\n              <path d='M790 120 C790 120 820 50 900 400' style='fill:none;stroke:#656261;stroke-width:5' id='path_black' \r\n              />\r\n   </svg>\r\n</div>\r\n<div class=\"chapter-08-2-01\" *ngIf=\"this.currentShowHotArea=='chapter-08-2-01'\">\r\n    <a class=\"N1 hot\" title=\"N90\" id='3' wybredPosition=\"N1\" wybblackPosition=\"N1\" rqPosition=\"2013\" h-left=\"509\" h-top=\"187\"></a>\r\n    <a class=\"N2 hot\" title=\"N95\" id=\"4\" wybredPosition=\"N2\" wybblackPosition=\"N2\" rqPosition=\"2013\" h-left=\"677\" h-top=\"173\"></a>\r\n</div>\r\n<div class=\"chapter-08-2-02\" *ngIf=\"this.currentShowHotArea=='chapter-08-2-02'\">\r\n    <a class=\"N3 hot\" title=\"N90\" id='3' wybredPosition=\"N3\" wybblackPosition=\"N3\" rqPosition=\"2013\" h-left=\"572\" h-top=\"187\"></a>\r\n    <a class=\"N4 hot\" title=\"N95\" id=\"4\" wybredPosition=\"N4\" wybblackPosition=\"N4\" rqPosition=\"2013\" h-left=\"677\" h-top=\"173\"></a>\r\n</div>\r\n<div class=\"chapter-08-2-03\" *ngIf=\"this.currentShowHotArea=='chapter-08-2-03'\">\r\n    <a class=\"N5 hot\" title=\"N90\" id='3' wybredPosition=\"N5\" wybblackPosition=\"N5\" rqPosition=\"2013\" h-left=\"509\" h-top=\"187\"></a>\r\n    <a class=\"N6 hot\" title=\"N95\" id=\"4\" wybredPosition=\"N6\" wybblackPosition=\"N6\" rqPosition=\"2013\" h-left=\"677\" h-top=\"173\"></a>\r\n</div>\r\n<div class=\"chapter-08-2-04\" *ngIf=\"this.currentShowHotArea=='chapter-08-2-04'\">\r\n    <a class=\"N7 hot\" title=\"N90\" id='3' wybredPosition=\"N7\" wybblackPosition=\"N7\" rqPosition=\"2013\" h-left=\"572\" h-top=\"187\"></a>\r\n    <a class=\"N8 hot\" title=\"N95\" id=\"4\" wybredPosition=\"N8\" wybblackPosition=\"N8\" rqPosition=\"2013\" h-left=\"677\" h-top=\"173\"></a>\r\n</div>\r\n<div class=\"chapter-12-1-01\" *ngIf=\"this.currentShowHotArea=='chapter-12-1-01'\">\r\n    <a class=\"N9 hot\" title=\"N90\" id='3' wybredPosition=\"N9\" wybblackPosition=\"N9\" rqPosition=\"2013\" h-left=\"486\" h-top=\"187\"></a>\r\n    <a class=\"N10 hot\" title=\"N95\" id=\"4\" wybredPosition=\"N10\" wybblackPosition=\"N10\" rqPosition=\"2013\" h-left=\"522\" h-top=\"186\"></a>\r\n</div>\r\n<div class=\"chapter-13-1-01\" *ngIf=\"this.currentShowHotArea=='chapter-13-1-01'\">\r\n    <a class=\"N11 hot\" title=\"N90\" id='3' wybredPosition=\"N11\" wybblackPosition=\"N11\" rqPosition=\"2013\" h-left=\"559\" h-top=\"187\"></a>\r\n    <a class=\"N12 hot\" title=\"N95\" id=\"4\" wybredPosition=\"N12\" wybblackPosition=\"N12\" rqPosition=\"2013\" h-left=\"595\" h-top=\"186\"></a>\r\n</div>\r\n<div class=\"chapter-15-5-01\" *ngIf=\"this.currentShowHotArea=='chapter-15-5-01'\">\r\n    <a class=\"N13 hot\" title=\"N90\" id='3' wybredPosition=\"N13\" wybblackPosition=\"N13\" rqPosition=\"2013\" h-left=\"474\" h-top=\"187\"></a>\r\n    <a class=\"N14 hot\" title=\"N95\" id=\"4\" wybredPosition=\"N14\" wybblackPosition=\"N14\" rqPosition=\"2013\" h-left=\"508\" h-top=\"186\"></a>\r\n</div>\r\n<div class=\"chapter-16-4-01\" *ngIf=\"this.currentShowHotArea=='chapter-16-4-01'\">\r\n    <a class=\"N15 hot\" title=\"N90\" id='3' wybredPosition=\"N15\" wybblackPosition=\"N15\" rqPosition=\"2013\" h-left=\"507\" h-top=\"187\"></a>\r\n    <a class=\"N16 hot\" title=\"N95\" id=\"4\" wybredPosition=\"N16\" wybblackPosition=\"N16\" rqPosition=\"2013\" h-left=\"572\" h-top=\"186\"></a>\r\n</div>\r\n<div class=\"chapter-16-4-02\" *ngIf=\"this.currentShowHotArea=='chapter-16-4-02'\">\r\n    <a class=\"N17 hot\" title=\"N90\" id='3' wybredPosition=\"N17\" wybblackPosition=\"N17\" rqPosition=\"2013\" h-left=\"507\" h-top=\"187\"></a>\r\n    <a class=\"N18 hot\" title=\"N95\" id=\"4\" wybredPosition=\"N18\" wybblackPosition=\"N18\" rqPosition=\"2013\" h-left=\"572\" h-top=\"186\"></a>\r\n</div>"

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = "<div class=\"bannerContainer\">\r\n  <ul class=\"bannerPicList\">\r\n    <li>\r\n      <img src=\"assets/images/swiper/1.jpg\" style='display:block;' />\r\n    </li>\r\n    <li>\r\n      <img src=\"assets/images/swiper/2.jpg\" style='display:none;' />\r\n    </li>\r\n    <li>\r\n      <img src=\"assets/images/swiper/3.jpg\" style='display:none;' />\r\n    </li>\r\n    <li>\r\n      <img src=\"assets/images/swiper/4.jpg\" style='display:none;' />\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"type_width\" *ngIf=\"appboolen.type_three\">\r\n    <video src=\"{{typevideo[0].mp4}}\" id=\"type_three_video\" height=\"380\"></video>\r\n    <div class=\"returnimg f-csp\" (click)=\"ClickShow('1')\"><img src=\"./assets/images/project/img15_2.png\" /></div>\r\n</div>\r\n\r\n<div class=\"type_seven\" *ngIf=\"appboolen.type_seven\">\r\n    <div class=\"f-cb\" [ngStyle]='{\"padding-top\":typetip[0].top}'>\r\n        <div class=\"table\">\r\n            <table>\r\n                <tr *ngFor=\"let data of typetip; let i = index;\">\r\n                    <td>{{data.title}}</td>\r\n                    <td>{{data.content}}</td>\r\n                </tr>\r\n                <tr *ngFor=\"let data of typetextlist; let i = index;\">\r\n                    <td class=\"f-cpt\" (click)=\"ClickDisplay(i,'seven')\">{{data.title}}</td>\r\n                    <td *ngIf=\"data.boolen\">{{data.content}}</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"img\"><img src=\"{{typeimglist[0].img}}\" /></div>\r\n    </div>\r\n    <div class=\"tip f-cb\" *ngIf=\"!isPaging\">\r\n        <div class=\"move-twinkle f-fl\" id=\"type_seven_pointer\"><img src=\"./assets/images/project/pointer.jpg\" width=\"20px\" /></div>\r\n        <div class=\"f-fl\" style=\"padding-top:5px;padding-left:20px;\">请用鼠标点击参数名称</div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"type_eight\" *ngIf=\"appboolen.type_eight\">\r\n    <div *ngFor=\"let data of typeeightcheck; let i = index;\">\r\n        <div *ngIf=\"data.isvisible\">\r\n            <div class=\"main\">\r\n                <div class=\"title\">{{data.title}}<span>({{data.check}})</span></div>\r\n                <div class=\"f-cb bottom\">\r\n                    <div class=\"left\">\r\n                        <table>\r\n                            <tr *ngFor=\"let item of data.content; let x = index;\">\r\n                                <td (click)=\"CheckOn(i,x,data.check)\">\r\n                                    <div class=\"f-csp\" id=\"check_{{i}}_{{x}}\">{{item.title}}</div>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"right\" *ngIf=\"typeeightimgis\"><img src=\"{{typeeightimg[0].img}}\" /></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"button\"><button class=\"f-csp\" (click)=\"SummitBox(i,data.content)\">提交</button></div>\r\n            <div class=\"error\" *ngIf=\"typeeighterror\">* 错误啦 !</div>\r\n            <div class=\"error\" *ngIf=\"typeeightright\">* 正确,可以翻页啦 !</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"type_fifteen\" *ngIf=\"appboolen.type_fifteen\">\r\n    <div class=\"main\" id=\"dragarea\">\r\n        <div class=\"title\">DNR执行器的组成</div>\r\n        <div class=\"f-cb\">\r\n            <div class=\"left\" id=\"draggable\">\r\n                <div class=\"blockdiv\" *ngFor=\"let data of typetextlist; let i = index;\" id=\"draggable_{{i}}\">{{data.title}}</div>\r\n            </div>\r\n            <div class=\"right\">\r\n                <img src=\"{{typeimglist[0].img}}\" />\r\n                <ul id=\"Droppable\">\r\n                    <li *ngFor=\"let data of typetextlist; let i = index;\" [ngStyle]='{\"left\":typetextlist[i].left,\"top\":typetextlist[i].top}' id=\"droppable_{{i}}\"></li>\r\n                    <div *ngFor=\"let data of typetip; let i = index;\" [ngStyle]='{\"left\":typetip[i].left,\"top\":typetip[i].top}'></div>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"button\"><button (click)=\"Summitdrag()\">提交</button></div>\r\n    <div class=\"error\" *ngIf=\"isvisibles == '1'\">* 错误啦 !</div>\r\n    <div class=\"error\" *ngIf=\"isvisibletwo == '1'\">* 正确,可以翻页啦 !</div>\r\n</div> -->\r\n<!-- 点击出现弹框 -->\r\n<!-- [twinkle]=\"'twinkle'\" 闪烁指令 -->\r\n<div class=\"type_thirtyeight\" *ngIf=\"appboolen.type_thirtyeight\">\r\n  <img class=\"f-mc g-wA80 f-pt60\" src=\"{{typedescribe}}\" />\r\n  <ul>\r\n    <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist'>\r\n      <li (click)='tipShow(item,i,true)' [twinkle]=\"item.twinkle\" [ngStyle]='item.style'></li>\r\n      <div *ngIf='item.isShow' [ngStyle]='item.content.style'>{{item.content.text}}</div>\r\n    </ng-template>\r\n  </ul>\r\n</div>\r\n<!-- 课程目标等静态页面 -->\r\n<div class=\"type-text\" *ngIf='appboolen.type_text'>\r\n  <img [ngStyle]='typeimglist[0].imgStyle' src=\"{{typeimglist[0].img}}\" alt=\"\">\r\n  <ng-template ngFor let-item [ngForOf]='this.typetextlist'>\r\n    <div [ngStyle]='item.titleStyle'>{{item.title}}</div>\r\n  </ng-template>\r\n</div>\r\n<!-- 现场管理等静态页面 -->\r\n<div class=\"type-icontext\" *ngIf='appboolen.type_icontext'>\r\n  <img [ngStyle]='typeimglist[0].imgStyle' src=\"{{typeimglist[0].img}}\" alt=\"\">\r\n  <ul class=\"icontextlist\">\r\n    <ng-template ngFor let-item [ngForOf]='this.typetextlist'>\r\n      <li>\r\n        <div *ngIf='item.isShow' [ngStyle]='item.oneDivStyle' class=\"one\"></div>\r\n        <div [ngStyle]='item.style' class=\"two\">{{item.text}}</div>\r\n      </li>\r\n      <!-- <img *ngIf='btnitem.imgShow' [ngStyle]='btnitem.srcStyle' src=\"{{btnitem.src}}\" alt=\"\"> -->\r\n    </ng-template>\r\n  </ul>\r\n</div>\r\n<!-- 课程目标等静态页面 -->\r\n<div class=\"type-changeText\" *ngIf='appboolen.type_changeText'>\r\n  <img [ngStyle]='typeimglist[0].imgStyle' src=\"{{typeimglist[0].img}}\" alt=\"\">\r\n  <ng-template ngFor let-item [ngForOf]='this.typetitlelist'>\r\n    <div [ngStyle]='item.titleStyle'>{{item.title}}</div>\r\n  </ng-template>\r\n  <ng-template ngFor let-i='index' let-btnitem [ngForOf]='this.typebtnlist'>\r\n    <div [ngStyle]='btnitem.style' (click)='tipContentShow($event,typebtnlist,i)'>{{btnitem.text}}</div>\r\n    <ul *ngIf='btnitem.isShow'>\r\n      <img [ngStyle]='btnitem.arrowStyle' src=\"./assets/images/project/arrow1.png\" alt=\"\">\r\n      <ng-template ngFor let-btnContentItem [ngForOf]='btnitem.content'>\r\n        <li [ngStyle]='btnContentItem.style'>{{btnContentItem.text}}</li>\r\n      </ng-template>\r\n    </ul>\r\n  </ng-template>\r\n</div>\r\n\r\n<!-- 岗位描述等静态页面 -->\r\n<div class=\"type_imgText\" *ngIf='appboolen.type_imgText'>\r\n  <div class=\"nav\">\r\n    <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].navText'>\r\n      <span (click)='rotateNav(item,i)' [ngStyle]='item.style'>{{item.text}}</span>\r\n    </ng-template>\r\n  </div>\r\n  <ng-template ngFor let-='index' let-item [ngForOf]='typetextlist[0].content'>\r\n    <div *ngIf='item.isShow'>\r\n      <div [ngStyle]='item.style'>\r\n        <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentTitleList'>\r\n          <div [ngStyle]='item.style'>{{item.text}}</div>\r\n        </ng-template>\r\n        <div class=\"stickborder\"></div>\r\n      </div>\r\n      <ul [ngStyle]='item.style'>\r\n        <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentTextList'>\r\n          <li>\r\n            <div [twinkle]=\"item.twinkle\" *ngIf='item.isShow' [ngStyle]='item.oneDivStyle' class=\"one\"></div>\r\n            <div class=\"two\" [ngStyle]='item.style'>{{item.text}}</div>\r\n          </li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].btnText'>\r\n    <div class=\"btn\" *ngIf='item.isShow'>\r\n      <ul>\r\n        <ng-template ngFor let-i='index' let-item [ngForOf]='item.btnTextList'>\r\n          <li (click)='rotate($event,item.direction)' [ngStyle]='item.style'>{{item.text}}</li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].anatomyText'>\r\n    <div class=\"anatomy\" *ngIf='item.isShow'>\r\n      <ul>\r\n        <ng-template ngFor let-i='index' let-item [ngForOf]='item.anatomyTextList'>\r\n          <li (click)='anatomyShow(item,i)' [ngStyle]='item.style'>\r\n            {{item.text}}\r\n          </li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf='this.appdataService.content[this.current].rotateImgIsShow' class=\"tip\">\r\n    <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].imglist'>\r\n      <div *ngIf='item.isShow'>\r\n        <!-- <img [ngStyle]='item.style' src=\"{{item.backgroundList[0].src}}\" alt=\"\"> -->\r\n        <img class=\"changjing\" [ngStyle]='item.style' src=\"{{item.contentList[0].src}}\" alt=\"\">\r\n        <img class=\"changjing1\" src=\"./assets/images/project/changjing1.png\" alt=\"\">\r\n        <img class=\"changjing2\" src=\"./assets/images/project/changjing2.png\" alt=\"\">\r\n        <ul>\r\n          <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentList'>\r\n            <span *ngIf='item.isShow'>\r\n              <ng-template ngFor let-i='index' let-item [ngForOf]='item.textlist'>\r\n                <li (click)='tipShow(item,i,false)' [twinkle]=\"item.twinkle\" [ngStyle]='item.style'></li>\r\n                <div *ngIf='item.isShow' [ngStyle]='item.content.style'>{{item.content.text}}</div>\r\n              </ng-template>\r\n            </span>\r\n          </ng-template>\r\n        </ul>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"childPage\" *ngIf='this.appdataService.content[this.current].anatomyIsShow'>\r\n    <img src=\"{{typetextlist[0].tiplist.src}}\" alt=\"\">\r\n    <ul>\r\n      <ng-template ngFor let-i='index' let-childitem [ngForOf]='typetextlist[0].tiplist.textlist'>\r\n        <div class=\"childtitle\" *ngIf='childitem.isShow'>{{childitem.title}}</div>\r\n        <li class=\"anatomyDot\" (click)='tipShow(childitem,i,false)' [ngStyle]='childitem.style'></li>\r\n        <div class=\"contain\" *ngIf='childitem.isShow'>\r\n          <div (click)='childCloseTip(childitem)' class=\"childClose\"></div>\r\n          <div style=\"top:110px\" class=\"nav\">\r\n            <ng-template ngFor let-i='index' let-item [ngForOf]='childitem.childPage.navText'>\r\n              <span (click)='childRotateNav(childitem,i)' [ngStyle]='item.style'>{{item.text}}</span>\r\n            </ng-template>\r\n          </div>\r\n          <ng-template ngFor let-='index' let-item [ngForOf]='childitem.childPage.content'>\r\n            <div class=\"text\" *ngIf='item.isShow'>\r\n              <ul [ngStyle]='item.style'>\r\n                <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentTextList'>\r\n                  <li>\r\n                    <div *ngIf='item.isShow' [ngStyle]='item.oneDivStyle'></div>\r\n                    <div [ngStyle]='item.style'>{{item.text}}</div>\r\n                  </li>\r\n                </ng-template>\r\n              </ul>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template ngFor let-i='index' let-item [ngForOf]='childitem.childPage.btnText'>\r\n            <div class=\"childBtn\" *ngIf='item.isShow'>\r\n              <ul>\r\n                <ng-template ngFor let-i='index' let-item [ngForOf]='item.btnTextList'>\r\n                  <li (click)='childRotate($event,item,childitem)' [ngStyle]='item.style'>{{item.text}}</li>\r\n                </ng-template>\r\n              </ul>\r\n            </div>\r\n          </ng-template>\r\n          <div class=\"tip\">\r\n            <ng-template ngFor let-i='index' let-item [ngForOf]='childitem.childPage.imglist'>\r\n              <div *ngIf='item.isShow'>\r\n                <img src=\"{{item.contentList[0].src}}\" alt=\"\"> {{item.contentList.textlist}}\r\n                <ul>\r\n                  <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentList'>\r\n                    <span *ngIf='item.isShow'>\r\n                      <ng-template ngFor let-i='index' let-item [ngForOf]='item.textlist'>\r\n                        <li [twinkle]=\"item.twinkle\" (click)='tipShow(item,i,false)' [ngStyle]='item.style'></li>\r\n                        <div *ngIf='item.isShow' [ngStyle]='item.content.style'>{{item.content.text}}</div>\r\n                      </ng-template>\r\n                    </span>\r\n                  </ng-template>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ul>\r\n  </div>\r\n  <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].measureList'>\r\n    <div *ngIf='item.isShow'>\r\n      <test-questions [chapter]='item.chapter'></test-questions>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n<!-- 点击旋转 -->\r\n<div class=\"type_exclusive\" *ngIf='appboolen.type_exclusive'>\r\n  <div class=\"nav\">\r\n    <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].navText'>\r\n      <span (click)='rotateNav(item,i)' [ngStyle]='item.style'>{{item.text}}</span>\r\n    </ng-template>\r\n  </div>\r\n  <ng-template ngFor let-='index' let-item [ngForOf]='typetextlist[0].content'>\r\n    <div *ngIf='item.isShow'>\r\n      <ul [ngStyle]='item.style'>\r\n        <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentTextList'>\r\n          <li>\r\n            <div *ngIf='item.isShow' [ngStyle]='item.oneDivStyle' class=\"one\"></div>\r\n            <div class=\"two\" [ngStyle]='item.style'>{{item.text}}</div>\r\n          </li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].btnText'>\r\n    <div class=\"btn\" *ngIf='item.isShow'>\r\n      <ul>\r\n        <ng-template ngFor let-i='index' let-item [ngForOf]='item.btnTextList'>\r\n          <li (click)='rotate($event,item.direction)' [ngStyle]='item.style'>{{item.text}}</li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].anatomyText'>\r\n    <div class=\"anatomy\" *ngIf='item.isShow'>\r\n      <ul>\r\n        <ng-template ngFor let-i='index' let-item [ngForOf]='item.anatomyTextList'>\r\n          <li (click)='anatomyShow(item,i)' [ngStyle]='item.style'>\r\n            {{item.text}}\r\n          </li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf='this.appdataService.content[this.current].rotateImgIsShow' class=\"tip\">\r\n    <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].imglist'>\r\n      <div *ngIf='item.isShow'>\r\n        <img [ngStyle]='item.style' src=\"{{item.contentList[0].src}}\" alt=\"\">\r\n        <ul>\r\n          <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentList'>\r\n            <span *ngIf='item.isShow'>\r\n              <ng-template ngFor let-i='index' let-item [ngForOf]='item.textlist'>\r\n                <li (click)='tipShow(item,i,false)' [twinkle]=\"item.twinkle\" [ngStyle]='item.style'></li>\r\n                <div *ngIf='item.isShow' [ngStyle]='item.content.style'>{{item.content.text}}</div>\r\n              </ng-template>\r\n            </span>\r\n          </ng-template>\r\n        </ul>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"childPage\" *ngIf='this.appdataService.content[this.current].anatomyIsShow'>\r\n    <img src=\"{{typetextlist[0].tiplist.src}}\" width=\"100%\" alt=\"\">\r\n    <ul>\r\n      <ng-template ngFor let-i='index' let-childitem [ngForOf]='typetextlist[0].tiplist.textlist'>\r\n        <div class=\"childtitle\" *ngIf='childitem.isShow'>{{childitem.title}}</div>\r\n        <li class=\"anatomyDot\" [twinkle]=\"childitem.twinkle\" (click)='tipShow(childitem,i,true)' [ngStyle]='childitem.style'>{{childitem.text}}</li>\r\n        <!-- <li class=\"anatomyDot\" (click)='tipShow(childitem,i,false)' [ngStyle]='childitem.style'></li> -->\r\n        <div class=\"contain\" *ngIf='childitem.isShow'>\r\n          <div (click)='childCloseTip(childitem)' class=\"childClose\"></div>\r\n          <div style=\"top:110px\" class=\"nav\">\r\n            <ng-template ngFor let-i='index' let-item [ngForOf]='childitem.childPage.navText'>\r\n              <span (click)='childRotateNav(childitem,i)' [ngStyle]='item.style'>{{item.text}}</span>\r\n            </ng-template>\r\n          </div>\r\n          <ng-template ngFor let-='index' let-item [ngForOf]='childitem.childPage.content'>\r\n            <div class=\"text\" *ngIf='item.isShow'>\r\n              <div [ngStyle]='item.style'>\r\n                <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentTitleList'>\r\n                  <div [ngStyle]='item.style'>{{item.text}}</div>\r\n                </ng-template>\r\n                <div class=\"stickborder\"></div>\r\n              </div>\r\n              <ul [ngStyle]='item.style'>\r\n                <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentTextList'>\r\n                  <li>\r\n                    <div [twinkle]=\"item.twinkle\" *ngIf='item.isShow' [ngStyle]='item.oneDivStyle' class=\"one\"></div>\r\n                    <div class=\"two\" [ngStyle]='item.style'>{{item.text}}</div>\r\n                  </li>\r\n                </ng-template>\r\n              </ul>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template ngFor let-i='index' let-item [ngForOf]='childitem.childPage.btnText'>\r\n            <div class=\"childBtn\" *ngIf='item.isShow'>\r\n              <ul>\r\n                <ng-template ngFor let-i='index' let-item [ngForOf]='item.btnTextList'>\r\n                  <li (click)='childRotate($event,item,childitem)' [ngStyle]='item.style'>{{item.text}}</li>\r\n                </ng-template>\r\n              </ul>\r\n            </div>\r\n          </ng-template>\r\n          <div class=\"tip\">\r\n            <ng-template ngFor let-i='index' let-item [ngForOf]='childitem.childPage.imglist'>\r\n              <div *ngIf='item.isShow'>\r\n                <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentList'>\r\n                  <img class=\"changjing\" [ngStyle]='item.style' src=\"{{item.src}}\" alt=\"\">\r\n                </ng-template>\r\n                <ul>\r\n                  <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentList'>\r\n                    <span *ngIf='item.isShow'>\r\n                      <ng-template ngFor let-i='index' let-item [ngForOf]='item.textlist'>\r\n                        <li [twinkle]=\"item.twinkle\" (click)='tipShow(item,i,false)' [ngStyle]='item.style'></li>\r\n                        <div *ngIf='item.isShow' [ngStyle]='item.content.style'>{{item.content.text}}</div>\r\n                      </ng-template>\r\n                    </span>\r\n                  </ng-template>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ul>\r\n  </div>\r\n  <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].measureList'>\r\n    <div *ngIf='item.isShow'>\r\n      <test-questions [chapter]='item.chapter'></test-questions>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<!-- 顺序点击 -->\r\n\r\n<div class=\"type_sequentialClicks\" *ngIf='appboolen.type_sequentialClicks'>\r\n  <div class=\"nav\">\r\n    <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].navText'>\r\n      <span (click)='rotateNav(item,i)' [ngStyle]='item.style'>{{item.text}}</span>\r\n    </ng-template>\r\n  </div>\r\n  <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].btnText'>\r\n    <div class=\"btn\" *ngIf='item.isShow'>\r\n      <img *ngIf='item.scrIsShow' src=\"{{item.src}}\" alt=\"\">\r\n      <ul>\r\n        <ng-template ngFor let-i='index' let-btnitem [ngForOf]='item.btnTextList'>\r\n          <li (click)='sequentialClicks($event,i,btnitem,item,btnindex)' [ngStyle]='btnitem.style'>{{btnitem.text}}</li>\r\n          <div [ngStyle]='btnitem.contentStyle' class=\"content\" *ngIf='btnitem.contentIsShow'>\r\n            <ng-template ngFor let-i='index' let-item [ngForOf]='btnitem.content'>\r\n              <div class=\"contentIcon\">\r\n                <div *ngIf='item.oneIsShow' class=\"icon\"></div>\r\n                <div class=\"text\">{{item.text}}</div>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n          <img *ngIf='btnitem.imgShow' [ngStyle]='btnitem.srcStyle' src=\"{{btnitem.src}}\" alt=\"\">\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n<div class=\"type-paging\" *ngIf='appboolen.type_paging'>\r\n  <ng-template ngFor let-item let-i='index' [ngForOf]='typetextlist[0].imglist'>\r\n    <div class=\"page\" *ngIf='item.isShow'>\r\n      <img *ngIf='i!=0' class=\"prev\" (click)=\"pageClick('prev',item,i)\" src=\"./assets/images/project/prevPageS.png\" alt=\"\">\r\n      <img *ngIf='i==0' class=\"prev\" (click)=\"pageClick('prev',item,i)\" src=\"./assets/images/project/prevPageH.png\" alt=\"\">\r\n      <img *ngIf='i>=0&&i!=typetextlist[0].imglist.length-1' class=\"next\" (click)=\"pageClick('next',item,i)\" src=\"./assets/images/project/nextPageS.png\"\r\n        alt=\"\">\r\n      <img *ngIf='i==typetextlist[0].imglist.length-1' class=\"next\" (click)=\"pageClick('next',item,i)\" src=\"./assets/images/project/nextPageH.png\"\r\n        alt=\"\">\r\n    </div>\r\n    <img *ngIf='item.isShow' [ngStyle]='item.srcStyle' src=\"{{item.src}}\" alt=\"\">\r\n  </ng-template>\r\n</div>\r\n<div class=\"title\">{{typetitle}}</div>\r\n\r\n<!-- 选项卡切换图片更换 -->\r\n<div class=\"type_changeImg\" *ngIf='appboolen.type_changeImg '>\r\n  <div class=\"toptitle\">{{this.typetextlist[0].title}}</div>\r\n  <ul class=\"text\">\r\n    <ng-template ngFor let-item let-i='index ' [ngForOf]='this.typetextlist[0].navText '>\r\n      <li (click)='changeImg(item,i) '>\r\n        <img *ngIf='item.img1IsShow ' [ngStyle]='item.img1Style ' src=\"{{item.img1}}\" alt=\"\">\r\n        <img *ngIf='item.img2IsShow ' [ngStyle]='item.img2Style ' src=\"{{item.img2}}\" alt=\"\">\r\n        <img *ngIf='item.img3IsShow ' [ngStyle]='item.img3Style ' src=\"{{item.img3}}\" alt=\"\">\r\n      </li>\r\n    </ng-template>\r\n  </ul>\r\n  <ul class=\"content\">\r\n    <ng-template ngFor let-item let-i='index' [ngForOf]='this.typetextlist[0].imglist '>\r\n      <li>\r\n        <ul *ngIf='item.isShow' class=\"videoImg\">\r\n          <ng-template ngFor let-item let-j='index' [ngForOf]='item.imgsrc'>\r\n            <li (click)=\"videoMethods(item,i,j)\">\r\n              <img class='poster' *ngIf='item.isShow' src=\"{{item.src}}\" alt=\"\">\r\n              <span>{{item.text}}</span>\r\n            </li>\r\n          </ng-template>\r\n        </ul>\r\n        <div class=\"videoList\" *ngIf='item.divShow'>\r\n          <ng-template ngFor let-item let-j='index' [ngForOf]='item.videolist'>\r\n            <button *ngIf='item.isShow' id=\"close\" class=\"videoClose\" (click)=\"closeVideo(item,i,j)\"></button>\r\n            <div class=\"videoContainer\" *ngIf='item.isShow'>\r\n              <video class=\"myVideo\" id=\"myVideo\" controls autoplay preload=\"auto\" poster=\"\" width=\"380\">\r\n                <source src=\"{{item.src}}\" type=\"video/mp4\" />\r\n              </video>\r\n              <!-- <div class=\"caption\">{{item.text}}</div> -->\r\n              <div class=\"control\">\r\n                <div class=\"btmControl\">\r\n                  <div class=\"btnPlay btn\" title=\"播放/暂停视频\"><span class=\"icon-play\"></span></div>\r\n                  <div class=\"timeUpdate\">\r\n                    <span class=\"current\"></span>\r\n                    <span>/</span>\r\n                    <span class=\"duration\"></span>\r\n                  </div>\r\n                  <div class=\"progress-bar\">\r\n                    <div class=\"progress\">\r\n                      <span class=\"bufferBar\"></span>\r\n                      <span class=\"timeBar\"></span>\r\n                      <span class=\"thumb\"></span>\r\n                    </div>\r\n                  </div>\r\n                  <!--<div class=\"volume\" title=\"Set volume\">\r\n                        <span class=\"volumeBar\"></span>\r\n                        </div>-->\r\n                  <div class=\"sound sound2 btn\" title=\"关闭/开启声音\"><span class=\"icon-sound\"></span></div>\r\n                  <div class=\"btnFS btn\" title=\"切换到全屏\"><span class=\"icon-fullscreen\"></span></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <video *ngIf='item.isShow' [ngStyle]='item.style' src=\"{{item.src}}\" controls></video> -->\r\n          </ng-template>\r\n        </div>\r\n        <!-- <ul *ngIf='item.isShow' class=\"videolist\">\r\n          <ng-template ngFor let-item let-i='index' [ngForOf]='item.videolist'>\r\n            <li (click)=\"videoMethods(item,i,k)\">\r\n              <img *ngIf='item.isShow' src=\"{{item.imgsrc}}\" alt=\"\">\r\n            </li>\r\n            <video [ngStyle]='item.style' src=\"{{item.src}}\" class='video' style='width:100%;height:100%; display:none' controls></video>\r\n          </ng-template>\r\n        </ul> -->\r\n      </li>\r\n    </ng-template>\r\n  </ul>\r\n</div>\r\n\r\n<!-- 点击旋转 -->\r\n<div class=\"type_rotate\" *ngIf='appboolen.type_rotate'>\r\n  <div class=\"nav\">\r\n    <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].navText'>\r\n      <span (click)='rotateNav(item,i)' [ngStyle]='item.style'>{{item.text}}</span>\r\n    </ng-template>\r\n  </div>\r\n  <ng-template ngFor let-='index' let-item [ngForOf]='typetextlist[0].content'>\r\n    <div *ngIf='item.isShow'>\r\n      <ul [ngStyle]='item.style'>\r\n        <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentTextList'>\r\n          <li>\r\n            <div *ngIf='item.isShow' [ngStyle]='item.oneDivStyle' class=\"one\"></div>\r\n            <div class=\"two\" [ngStyle]='item.style'>{{item.text}}</div>\r\n          </li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].btnText'>\r\n    <div class=\"btn\" *ngIf='item.isShow'>\r\n      <ul>\r\n        <ng-template ngFor let-i='index' let-item [ngForOf]='item.btnTextList'>\r\n          <li (click)='rotate($event,item.direction)' [ngStyle]='item.style'>{{item.text}}</li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].anatomyText'>\r\n    <div class=\"anatomy\" *ngIf='item.isShow'>\r\n      <ul>\r\n        <ng-template ngFor let-i='index' let-item [ngForOf]='item.anatomyTextList'>\r\n          <li (click)='anatomyShow(item,i)' [ngStyle]='item.style'>\r\n            {{item.text}}\r\n          </li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf='this.appdataService.content[this.current].rotateImgIsShow' class=\"tip\">\r\n    <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].imglist'>\r\n      <div *ngIf='item.isShow'>\r\n        <img [ngStyle]='item.style' src=\"{{item.contentList[0].src}}\" alt=\"\">\r\n        <ul>\r\n          <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentList'>\r\n            <span *ngIf='item.isShow'>\r\n              <ng-template ngFor let-i='index' let-item [ngForOf]='item.textlist'>\r\n                <li (click)='tipShow(item,i,false)' [twinkle]=\"item.twinkle\" [ngStyle]='item.style'></li>\r\n                <div *ngIf='item.isShow' [ngStyle]='item.content.style'>{{item.content.text}}</div>\r\n              </ng-template>\r\n            </span>\r\n          </ng-template>\r\n        </ul>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"childPage\" *ngIf='this.appdataService.content[this.current].anatomyIsShow'>\r\n    <img src=\"{{typetextlist[0].tiplist.src}}\" alt=\"\">\r\n    <ul>\r\n      <ng-template ngFor let-i='index' let-childitem [ngForOf]='typetextlist[0].tiplist.textlist'>\r\n        <div class=\"childtitle\" *ngIf='childitem.isShow'>{{childitem.title}}</div>\r\n        <li class=\"anatomyDot\" (click)='tipShow(childitem,i,false)' [ngStyle]='childitem.style'></li>\r\n        <div class=\"contain\" *ngIf='childitem.isShow'>\r\n          <div (click)='childCloseTip(childitem)' class=\"childClose\"></div>\r\n          <div style=\"top:110px\" class=\"nav\">\r\n            <ng-template ngFor let-i='index' let-item [ngForOf]='childitem.childPage.navText'>\r\n              <span (click)='childRotateNav(childitem,i)' [ngStyle]='item.style'>{{item.text}}</span>\r\n            </ng-template>\r\n          </div>\r\n          <ng-template ngFor let-='index' let-item [ngForOf]='childitem.childPage.content'>\r\n            <div class=\"text\" *ngIf='item.isShow'>\r\n              <ul [ngStyle]='item.style'>\r\n                <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentTextList'>\r\n                  <li>\r\n                    <div *ngIf='item.isShow' [ngStyle]='item.oneDivStyle'></div>\r\n                    <div [ngStyle]='item.style'>{{item.text}}</div>\r\n                  </li>\r\n                </ng-template>\r\n              </ul>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template ngFor let-i='index' let-item [ngForOf]='childitem.childPage.btnText'>\r\n            <div class=\"childBtn\" *ngIf='item.isShow'>\r\n              <ul>\r\n                <ng-template ngFor let-i='index' let-item [ngForOf]='item.btnTextList'>\r\n                  <li (click)='childRotate($event,item,childitem)' [ngStyle]='item.style'>{{item.text}}</li>\r\n                </ng-template>\r\n              </ul>\r\n            </div>\r\n          </ng-template>\r\n          <div class=\"tip\">\r\n            <ng-template ngFor let-i='index' let-item [ngForOf]='childitem.childPage.imglist'>\r\n              <div *ngIf='item.isShow'>\r\n                <img src=\"{{item.contentList[0].src}}\" alt=\"\"> {{item.contentList.textlist}}\r\n                <ul>\r\n                  <ng-template ngFor let-i='index' let-item [ngForOf]='item.contentList'>\r\n                    <span *ngIf='item.isShow'>\r\n                      <ng-template ngFor let-i='index' let-item [ngForOf]='item.textlist'>\r\n                        <li [twinkle]=\"item.twinkle\" (click)='tipShow(item,i,false)' [ngStyle]='item.style'></li>\r\n                        <div *ngIf='item.isShow' [ngStyle]='item.content.style'>{{item.content.text}}</div>\r\n                      </ng-template>\r\n                    </span>\r\n                  </ng-template>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ul>\r\n  </div>\r\n  <ng-template ngFor let-i='index' let-item [ngForOf]='typetextlist[0].measureList'>\r\n    <div *ngIf='item.isShow'>\r\n      <test-questions [chapter]='item.chapter'></test-questions>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = "<div class=\"type_width\">\r\n  <div class=\"title\">\r\n    <h3>帮助中心</h3>\r\n  </div>\r\n  <div id=\"niceScrollHelp\" class=\"content\">\r\n    <ul>\r\n      <li>\r\n        <div><img src=\"./assets/images/project/icon1.png\" alt=\"\"></div>\r\n        <div class=\"right\">\r\n          <span>工具箱按钮</span>\r\n          <span>可使用本按钮调用相关维修工具</span>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div><img src=\"./assets/images/project/icon2.png\" alt=\"\"></div>\r\n        <div class=\"right\">\r\n          <span>控制中心按钮</span>\r\n          <span>可使用本按钮进行车辆控制相关操作</span>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div><img src=\"./assets/images/project/icon3.png\" alt=\"\"></div>\r\n        <div class=\"right\">\r\n          <span>参考文件按钮</span>\r\n          <span>可使用本按钮查看课程需要的参考文件</span>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div><img src=\"./assets/images/project/icon4.png\" alt=\"\"></div>\r\n        <div>\r\n          <span>课程目录按钮</span>\r\n          <span>点击后可查看并选择相应的课程内容</span>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div><img src=\"./assets/images/project/icon5.png\" alt=\"\"></div>\r\n        <div>\r\n          <span>声音按钮按钮</span>\r\n          <span>点击后可关闭课程背景音乐,再次点击可打开</span>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div><img src=\"./assets/images/project/icon6.png\" alt=\"\"></div>\r\n        <div>\r\n          <span>帮助按钮</span>\r\n          <span>点击后可查看帮助内容</span>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div><img src=\"./assets/images/project/icon7.png\" alt=\"\"></div>\r\n        <div>\r\n          <span>退出按钮</span>\r\n          <span>点击后会退出课程,并记录当前学习进度</span>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div><img src=\"./assets/images/project/icon8.png\" alt=\"\"></div>\r\n        <div>\r\n          <span>上一页按钮</span>\r\n          <span>通过该按钮,可以操作课件上翻页</span>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div><img src=\"./assets/images/project/icon9.png\" alt=\"\"></div>\r\n        <div>\r\n          <span>下一页按钮</span>\r\n          <span>通过该按钮,可以操作课件下翻页</span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <handle-error></handle-error>\r\n  <dashboard style=\"position:absolute;z-index:11;top:143px;left:88px\" *ngIf='this.dashboardService.dashboardStatus'></dashboard>\r\n  <multimeter [currentShowHotArea]='this.homeService.currentShowHotArea' *ngIf='this.multimeterService.Mdata.multimeterStatus'\r\n    class=\"appinmultimeter\" style=\"position:absolute;top:73px;left:-5px;z-index:6\"></multimeter>\r\n  <!-- <audio autoplay id=\"audio\" src=\"./assets/audios/on.mp3\"></audio> -->\r\n  <!-- 最后一页，学习完成 -->\r\n  <div *ngIf='this.studyEnd' class=\"studyEnd\">\r\n    <img src=\"./assets/images/project/studyEnd.png\" alt=\"\">\r\n    <span (click)='out()' class=\"out\"></span>\r\n    <span (click)='back()' class=\"back\"></span>\r\n  </div>\r\n  <div *ngIf=\"isvisibel\" class=\"cover\" id=\"header_obj\">\r\n    <a href=\"javascript:;\" (click)=\"StartPlay()\"></a>\r\n  </div>\r\n  <div *ngIf=\"!isvisibel\">\r\n    <div class=\"header f-cb\">\r\n      <div class=\"title\">一汽解放经销服务商</div>\r\n      <div class=\"menu\">\r\n        <ul class=\"f-cb\">\r\n          <li (click)='outTip()'>\r\n            <a class=\"f-csp\"><img src=\"./assets/images/project/out.png\" /></a>\r\n          </li>\r\n          <li (click)=\"ShowCom('help')\">\r\n            <a class=\"f-csp\"><img src=\"./assets/images/project/help.png\" /></a>\r\n          </li>\r\n          <li>\r\n            <a class=\"f-csp\" (click)=\"playaudio()\" id=\"header_audio\">\r\n              <img *ngIf='!this.isMute' src=\"./assets/images/project/voice.png\" />\r\n              <img *ngIf='this.isMute' src=\"./assets/images/project/mute.png\" />\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"main f-cb\">\r\n      <div class=\"main-menu\" *ngIf='this.homeService.toolNavIsShow'>\r\n        <ul>\r\n          <li (click)='measureTool(\"measureTool\")'>\r\n            <a class=\"f-csp\"><img src=\"./assets/images/project/tool.png\" width=\"45%\" /></a>\r\n          </li>\r\n          <li (click)='measureTool(\"controlCenter\")'>\r\n            <a class=\"f-csp\"><img src=\"./assets/images/project/control.png\" width=\"45%\" /></a>\r\n          </li>\r\n          <li>\r\n            <a class=\"f-csp\"><img src=\"./assets/images/project/data.png\" width=\"45%\" /></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"bmain-content\" *ngIf=\"_component  == 'help'\">\r\n        <magotan-help [values]='_component'></magotan-help>\r\n      </div>\r\n      <div class=\"main-content\">\r\n        <magotan-content [current]=\"this.appdataService.current\"></magotan-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"foot\">\r\n    <div class=\"foot_red\">\r\n      <div class=\"foot_red_pozistion\">\r\n        <div class=\"triangle_border_down\">\r\n          <span></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div (click)='stop($event)' class=\"foot_menu f-cb\">\r\n      <div style=\"width: 45px\" class=\"f-csp\" (click)=\"showmenu($event)\"><img src=\"./assets/images/project/logo.png\" /></div>\r\n      <div>|</div>\r\n      <div>一汽解放</div>\r\n      <div class=\"foot_Paging\" style=\"float:right;\" *ngIf=\"!isvisibel\">\r\n        <ul class=\"f-cb\">\r\n          <li class=\"f-ma4 f-csp\" (click)=\"PrevPage()\">\r\n            <img *ngIf='this.appdataService.current!=1' src=\"./assets/images/project/prev.png\" />\r\n            <img *ngIf='this.appdataService.current==1' src=\"./assets/images/project/prevH.png\" />\r\n          </li>\r\n          <li><input [(ngModel)]=\"this.appdataService.current\" name=\"current\" readonly /></li>\r\n          <li>/</li>\r\n          <li>{{total}}</li>\r\n          <li class=\"f-ma4 f-csp\" (click)=\"NextPage()\">\r\n            <img *ngIf='this.appdataService.content[this.appdataService.current].isPaging&&this.appdataService.current<this.appdataService.content.length-1'\r\n              src=\"./assets/images/project/next.png\" />\r\n            <img *ngIf='!this.appdataService.content[this.appdataService.current].isPaging||this.appdataService.current==this.appdataService.content.length-1'\r\n              src=\"./assets/images/project/nextH.png\" />\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"course_menue\" (click)='stop($event)' id=\"niceScroll\" *ngIf='this.appdataService.menueIsShow'>\r\n    <h2>课程目录</h2>\r\n    <ul class=\"catalogNav\">\r\n      <ng-template ngFor let-item [ngForOf]='Catalogdata'>\r\n        <li (click)='isChildNavShow(item)'>\r\n          <div>{{item.navTitle}}</div>\r\n          <div>\r\n            <img *ngIf='!item.isExistence' src=\"./assets/images/project/arrowLeft.png\" alt=\"\">\r\n            <img style=\"margin:5px 0 0 0\" *ngIf='item.isExistence' src=\"./assets/images/project/arrowDown.png\" alt=\"\">\r\n          </div>\r\n        </li>\r\n        <ul class=\"childNav\" *ngIf='item.isExistence'>\r\n          <ng-template ngFor let-childItem [ngForOf]='item.isChildNav'>\r\n            <li (click)='isChildNavShow(childItem)'>\r\n              <div>{{childItem.title}}</div>\r\n              <div>\r\n                <img *ngIf='childItem.studyState==\"1\"' src=\"./assets/images/project/unlearned.png\" alt=\"\">\r\n                <img *ngIf='childItem.studyState==\"2\"' src=\"./assets/images/project/studying.png\" alt=\"\">\r\n                <img *ngIf='childItem.studyState==\"3\"' src=\"./assets/images/project/finishStudying.png\" alt=\"\">\r\n              </div>\r\n            </li>\r\n          </ng-template>\r\n        </ul>\r\n      </ng-template>\r\n    </ul>\r\n  </div>\r\n\r\n\r\n  <!-- 工具箱下面的子内容 -->\r\n  <div class=\"tool\" *ngIf='this.homeService.toolIsShow'>\r\n    <ul>\r\n      <li class=\"multimeters\" (click)=\"toolShow('multimeters')\">\r\n        <span *ngIf='this.homeService.multimeterTaskIsShow'></span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <!-- 校表动画 -->\r\n  <div class=\"xiaob\">\r\n    <div class=\"alert\">\r\n      <h1>\r\n      </h1>\r\n      <p>使用万用表前请先校表</p>\r\n      <button (click)=\"isPlay()\">确认</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 退出弹窗 -->\r\n<div class=\"outTip\" *ngIf='this.outTipIsShow'>\r\n  <close-window (publishEvent)='changeParam()'></close-window>\r\n</div>\r\n"

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = "<div class=\"change-direction\">\r\n  <!-- 目录 -->\r\n  <div *ngIf=\"indexChangeState.bodyFlag\" class=\"body\">\r\n    <p class=\"q-title\">课程预览</p>\r\n    <div class=\"q-body\">\r\n      <div class=\"q-body-left\">\r\n        <div (click)=\"changeBtn(1)\">\r\n          <div class=\"text\">\r\n            <span>传感器与执行器</span>\r\n          </div>\r\n          <div class=\"task\" *ngIf='indexChangeState.oneMouse'>\r\n            <span (click)=\"sensorChapter(1)\">启动停止系统按键E693</span>\r\n            <span (click)=\"sensorChapter(2)\">蓄电池监控单元J367BDM</span>  \r\n            <span (click)=\"sensorChapter(3)\">变速箱空挡位置传感器G701</span>\r\n          </div>\r\n        </div>\r\n        <div (click)=\"changeBtn(2)\">\r\n          <div class=\"text\">\r\n            <span [ngClass]=\"{'full':indexChangeState.powerFullFlag}\">电源与稳压器</span>\r\n          </div>\r\n          <div class=\"task\" *ngIf='indexChangeState.twoMouse'>\r\n            <span (click)=\"powerChapter(1)\">EFB蓄电池</span>\r\n            <span (click)=\"powerChapter(2)\">稳压器A19</span>\r\n          </div>\r\n        </div>\r\n        <div (click)=\"changeBtn(3)\">\r\n          <div class=\"text\">\r\n            <span [ngClass]=\"{'full':indexChangeState.caseFullFlag}\">案例分享</span>\r\n          </div>\r\n          <div class=\"task\" *ngIf='indexChangeState.threeMouse'>\r\n            <span (click)=\"caseChapter(1)\">案例分享</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"q-body-right\">\r\n        <img src=\"./assets/images/replace/index.png\" alt=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"redCircle\">\r\n      <img src=\"./assets/images/replace/redCircle.png\" alt=\"\">\r\n      <div class=\"text\">\r\n        启动停止系统是第二代蓝驱技术体系中的一部分。该系统在停车阶段可以自动关闭发动机，而在驾驶员想要启步时又会自动启动发动机，从而达到节油的目的。由于系统所需的控制逻辑，参与该功能的电气原件与普通车辆不同。\r\n        <span>请点击目录中的三个内容学习各原件的检修方法。</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 目录下章节展示部分 -->\r\n  <div *ngIf=\"indexChangeState.backFlag\">\r\n\r\n    <!-- 传感器和执行器-->\r\n    <div *ngIf='indexChangeState.sensorFlag' class=\"sensor\">\r\n\r\n      <!-- 左侧文字 -->\r\n      <div id='boxSensorScroll' class=\"sensorLeft\">\r\n        <!-- 第一个子章节 -->\r\n        <div *ngIf=\"indexChangeState.oneFlag\" class=\"one\">\r\n          <h5>传感器与执行器（启动停止系统按键E693)</h5>\r\n          <div class=\"startStop\">\r\n            <div class=\"up\">\r\n              <div (click)='oneUp()'>\r\n                <span [ngClass]=\"{'full':oneState.oneFullClass}\" [halo]=\"oneState.oneHaloUpFlag\"></span> 作用:\r\n              </div>\r\n              <p [@flyIn]=\"'fadein'\" *ngIf='oneState.oneUpFlag'>\r\n                在行车过程中，驾驶员可以用该按键开启或关闭启动停止系统。 \r\n              </p>\r\n              <p [@flyIn]=\"'fadein'\" *ngIf='oneState.oneUpFlag'>\r\n                  只要是手动“打开点火开关”，那么停车启步系统就会自动开启。一旦满足前面提到的工作条件，该系统就会自动工作。\r\n              </p>\r\n             \r\n            </div>\r\n            <div class=\"down\">\r\n              <div *ngIf='oneState.oneEmptyClass' (click)=\"oneDown()\">\r\n                <span  [halo]=\"oneState.oneHaloDownFlag\" [ngClass]=\"{ 'empty':oneState.oneEmptyClass,'full':oneState.oneDownFullClass}\"></span>                影响:\r\n              </div>\r\n              <p [@flyIn]=\"'fadein'\" *ngIf='oneState.oneDownFlag'>\r\n                如果F416出现故障，那么发动机控制单元就会关闭启动停止系统。 \r\n              </p>\r\n              <p [@flyIn]=\"'fadein'\" *ngIf='oneState.oneDownFlag'>\r\n                发动机控制单元故障存储器内会记录一条故障信息。\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div (click)=\"oneNext()\" *ngIf='oneState.oneNextTitleFlag' class=\"next\">\r\n            <span>\r\n                 蓄电池监控单元J367BDM\r\n              </span>\r\n            <span class=\"task\">您可以选择继续学习当前内容或单击该内容学习下一章节</span>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!-- 第二个子章节 -->\r\n        <div *ngIf=\"indexChangeState.twoFlag\" class=\"two\">\r\n          <h5>传感器与执行器（蓄电池监控单元J367BDM）</h5>\r\n          <div id=\"boxTwoScroll\" class=\"startStop\">\r\n              <div class=\"up\">\r\n                <div  (click)='twoUp()'>\r\n                  <span [ngClass]=\"{'full':twoState.twoFullClass}\" [halo]=\"twoState.twoHaloUpFlag\"></span> 作用:\r\n                </div>\r\n                <p [@flyIn]=\"'fadein'\" *ngIf='twoState.twoUpFlag'>\r\n                  蓝驱车型上采用新的线束来连接蓄电池负极，线束中有一个集成在蓄电池监控控制单元内的新型蓄电池传感器，它通过LIN总线与数据总线诊断接口相连。其作用是用来检测蓄电池温度、电压、电流信息，借助于这些数据，就可以将充电调节情况和充电电压与蓄电池的充电和工作状态进行匹配。通过对蓄电池的详细数据分析，来提升启动停止系统的有效性。\r\n                </p>\r\n              </div>\r\n              <div class=\"down\">\r\n                <div *ngIf='twoState.twoEmptyClass' (click)=\"twoDown()\">\r\n                  <span [halo]=\"twoState.twoHaloDownFlag\" [ngClass]=\"{ 'empty':twoState.twoEmptyClass,'full':twoState.twoDownFullClass}\"></span>                  影响:\r\n                </div>\r\n                <p [@flyIn]=\"'fadein'\" *ngIf='twoState.twoDownFlag'>\r\n                  如果蓄电池传感器损坏，则无法获知蓄电池状态的正确信息。于是数据总线诊断接口的故障存储器内会记录一条故障信息。启动停止系统被关闭。\r\n                </p>\r\n              </div>\r\n          </div>\r\n          <div (click)=\"twoNext()\" *ngIf='twoState.twoNextTitleFlag' class=\"next\">\r\n            <span> 变速箱空挡位置传感器G701</span>\r\n            <span class=\"task\">您可以选择继续学习当前内容或单击该内容学习下一章节</span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- 第三个子章节 -->\r\n        <div *ngIf=\"indexChangeState.threeFlag\" class=\"three\">\r\n          <h5>传感器与执行器（变速箱空挡位置传感器G701）</h5>\r\n          <div class=\"startStop\">\r\n            <div class=\"up\">\r\n              <div (click)='threeUp()'>\r\n                <span [ngClass]=\"{'full':threeState.threeFullClass}\" [halo]=\"threeState.threeHaloUpFlag\"></span> 定义:\r\n              </div>\r\n              <p [@flyIn]=\"'fadein'\" *ngIf='threeState.threeUpFlag'>\r\n                要想在配备手动变速箱的蓝驱车型上实现启动停止系统功能，就必须增加一个传感器，系统需要利用这个传感器来识别换挡杆的空挡位置。这就是变速箱空挡位置传感器G701。该传感器是从变速箱上方拧入到变速箱壳体中的，它以非接触方式识别选挡轴的位置。\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div (click)=\"threeNext()\" *ngIf='threeState.threeNextTitleFlag' class=\"next\">\r\n            <span>电源与稳压器（EFB蓄电池）</span>\r\n            <span class=\"task\">您可以选择继续学习当前内容或单击该内容学习下一章节</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 右侧图片 -->\r\n      <div class=\"sensorRight \">\r\n        <!-- 第一个子章节图片 -->\r\n        <div class=\"one\" *ngIf=\"indexChangeState.oneFlag\">\r\n          <div class=\"upImg\" *ngIf='oneState.oneUpImg'>\r\n            <img src=\"./assets/images/replace/1.jpg \" alt=\" \">\r\n          </div>\r\n          <div class=\"down1Img\" *ngIf='oneState.oneDown1Img'>\r\n            <img src=\"./assets/images/replace/1.jpg\" alt=\" \">\r\n            <img (click)=\"oneDownImages()\" *ngIf=\"oneState.oneDown2Img\" class=\"upImg\" [halo]=\"'halo'\" src=\"./assets/images/replace/3.png\"\r\n              alt=\"\">\r\n          </div>\r\n          <div *ngIf=\"oneState.oneNextFlag\" class=\"circuit\">\r\n            <img src=\"./assets/images/replace/2.jpg\" alt=\"\">\r\n            <div>\r\n              <span>开关信号线-T6e/5</span>\r\n            </div>\r\n            <div>\r\n              <span>开关功能提示灯-T6e/1</span>\r\n            </div>\r\n            <div>\r\n              <span>按钮照明灯电源线-T6e/3</span>\r\n            </div>\r\n            <div>\r\n              <span>启停模式按钮-E693</span>\r\n            </div>\r\n            <div>\r\n              <span>按钮照明灯接地线-T6e/6</span>\r\n            </div>\r\n            <div>\r\n              <span>开关15供电-T6e/4</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- 第二个子章节图片 -->\r\n        <div class=\"two\" *ngIf=\"indexChangeState.twoFlag\">\r\n          <div class=\"upImg\" *ngIf='twoState.twoUpImg'>\r\n            <img src=\"./assets/images/replace/13.png \" alt=\" \">\r\n          </div>\r\n          <div class=\"down1Img\" *ngIf='twoState.twoDown1Img'>\r\n            <img src=\"./assets/images/replace/13.png\" alt=\" \">\r\n            <div>\r\n              <img (click)=\"twoDownImages()\" *ngIf=\"twoState.twoDown2Img\" class=\"upImg\" [halo]=\"'halo'\" src=\"./assets/images/replace/10.png\"\r\n                alt=\"\">\r\n              <span>\r\n                  蓄电池监控控制单元内的蓄电池传感器，连接在接地线的负极接线柱上\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"twoState.twoNextFlag\" class=\"circuit\">\r\n            <img src=\"./assets/images/replace/5.jpg\" alt=\"\">\r\n            <div>\r\n              <span>蓄电池</span>\r\n            </div>\r\n            <div>\r\n              <span>供电线30-T2h/2</span>\r\n            </div>\r\n            <div>\r\n              <span>蓄电池监测控制单元 J367</span>\r\n            </div>\r\n            <div>\r\n              <span>LIN数据通讯线30-T2h/1</span>\r\n            </div>\r\n            <div>\r\n              <span>接地端31</span>\r\n            </div>\r\n            <div>\r\n              <span>连接蓄电池负极</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- 第三个子章节图片 -->\r\n        <div class=\"three\" *ngIf=\"indexChangeState.threeFlag\">\r\n          <div class=\"down1Img\" *ngIf='threeState.threeDown1Img'>\r\n            <img src=\"./assets/images/replace/14.png\" alt=\" \">\r\n            <div>\r\n              <img (click)=\"threeDownImages()\" *ngIf=\"threeState.threeDown2Img\" class=\"upImg\" [halo]=\"'halo'\" src=\"./assets/images/replace/12.png\"\r\n                alt=\"\">\r\n              <span>\r\n                变速箱空挡位置传感器G701\r\n                </span>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"threeState.threeNextFlag\" class=\"circuit\">\r\n            <img src=\"./assets/images/replace/6.jpg\" alt=\"\">\r\n            <div>\r\n              <span>空挡信号-T3n/2</span>\r\n            </div>\r\n            <div>\r\n              <span>供电线-T3n/1</span>\r\n            </div>\r\n            <div>\r\n              <span>接地线31-T3n/3</span>\r\n            </div>\r\n            <div>\r\n              <span>变速箱空挡位置传感器G701</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <!-- 电源和稳压器 -->\r\n    <div *ngIf='indexChangeState.powerFlag' class=\"power \">\r\n\r\n      <!-- 左侧文字 -->\r\n      <div id=\"boxPowerScroll\" class=\"powerLeft\">\r\n\r\n        <!-- 第一个子章节 -->\r\n        <div *ngIf=\"indexChangeState.fourFlag\" class=\"one\">\r\n          <h5>电源与稳压器（EFB蓄电池）</h5>\r\n          <div class=\"startStop\">\r\n            <div class=\"up\">\r\n              <div (click)='fourUp()'>\r\n                <span [ngClass]=\"{'full':fourState.fourFullClass}\" [halo]=\"fourState.fourHaloUpFlag\"></span> 注意事项:\r\n              </div>\r\n              <p [@flyIn]=\"'fadein'\" *ngIf='fourState.fourUpFlag'>\r\n                启停系统中，外接充电器充电时，充电器的负极不能接在蓄电池的负极上，必须连接到发动机(车身)的接地。这是因为蓄电池负极连接了BDM，如果接蓄电池的负极，电流没有经过BDM，BDM不能检测到电流，需要时间重新计算蓄电池充电状态。\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div (click)=\"fourNext()\" *ngIf='fourState.fourNextTitleFlag' class=\"next\">\r\n            <span>稳压器A19</span>\r\n            <span class=\"task\">您可以选择继续学习当前内容或单击该内容学习下一章节</span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- 第二个子章节 -->\r\n        <div *ngIf=\"indexChangeState.fiveFlag\" class=\"two\">\r\n          <h5>电源与稳压器（稳压器A19）</h5>\r\n          <div class=\"startStop\" id=\"boxscroll\">\r\n            <div class=\"up\">\r\n              <div (click)='fiveUp()'>\r\n                <span [ngClass]=\"{'full':fiveState.fiveFullClass}\" [halo]=\"fiveState.fiveHaloUpFlag\"></span> 作用:  \r\n              </div>\r\n              <p [@flyIn]=\"'fadein'\" *ngIf='fiveState.fiveUpFlag'>\r\n                其作用就是在特定情况下（比如启动停止系统工作时），将车载网络（接线端30）的电压稳定在约12V。由于启动停止系统在工作时需要很大的启动电流，这将导致车上其它用电器的电压波动很大，因此就需要有这样一个稳压器来稳定电压。\r\n              </p>\r\n              <p [@flyIn]=\"'fadein'\" *ngIf='fiveState.fiveUpFlag'>\r\n                如果没有这个稳压器，那么受影响的控制单元就会重置设备并会记录下例如“车载电压，信号太小”这样的故障。而使用了稳压器就可避免出现这种情况。\r\n              </p>\r\n            </div>\r\n            <div class=\"down\">\r\n              <div *ngIf='fiveState.fiveEmptyClass' (click)=\"fiveDown()\">\r\n                <span [halo]=\"fiveState.fiveHaloDownFlag\" [ngClass]=\"{ 'empty':fiveState.fiveEmptyClass,'full':fiveState.fiveDownFullClass}\"></span>                影响:\r\n              </div>\r\n              <p [@flyIn]=\"'fadein'\" *ngIf='fiveState.fiveDownFlag'>\r\n                如果稳压器损坏，在启动机工作时就会导致收音机、导航、组合仪表以及电话的工作电压不足，那么这些设备就会被重置。当启动停止系统处于工作状态时，每次启动发动机，上述设备就出现重置，这就说明稳压器出现损坏。但目前不会在如诊断接口或者车载电网控制单元的故障存储器内出现直接的故障记录。\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div (click)=\"fiveNext()\" *ngIf='fiveState.fiveNextTitleFlag' class=\"next\">\r\n            <span>案例分享</span>\r\n            <span class=\"task\">您可以选择继续学习当前内容或单击该内容学习下一章节</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 右侧图片 -->\r\n      <div class=\"powerRight \">\r\n        <!-- 第一个子章节图片 -->\r\n        <div class=\"one\" *ngIf=\"indexChangeState.fourFlag\">\r\n          <div class=\"down1Img\" *ngIf='fourState.fourDown1Img'>\r\n            <img src=\"./assets/images/replace/9.png\" alt=\" \">\r\n            <div>\r\n              <img (click)=\"fourDownImages()\" *ngIf=\"fourState.fourDown2Img\" class=\"upImg\" [halo]=\"'halo'\" src=\"./assets/images/replace/11.png\"\r\n                alt=\"\">\r\n              <span>车身接线柱子，链接充电器及启动跨接线都需要接在此接线柱上</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- 第二个子章节图片 -->\r\n        <div class=\"two\" *ngIf=\"indexChangeState.fiveFlag\">\r\n          <div class=\"upImg\" *ngIf='fiveState.fiveUpImg'>\r\n            <img src=\"./assets/images/replace/7.png \" alt=\" \">\r\n          </div>\r\n          <div class=\"down1Img\" *ngIf='fiveState.fiveDown1Img'>\r\n            <img src=\"./assets/images/replace/7.png\" alt=\" \">\r\n            <div>\r\n              <img (click)=\"fiveDownImages()\" *ngIf=\"fiveState.fiveDown2Img\" class=\"upImg\" [halo]=\"'halo'\" src=\"./assets/images/replace/button05-four-01-3.png\"\r\n                alt=\"\">\r\n              <span>200W稳压器A19，安装在手套箱后面</span>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngIf=\"fiveState.fiveNextFlag\" class=\"circuit\">\r\n            <img src=\"./assets/images/replace/8.jpg\" alt=\"\">\r\n            <div>\r\n              <span>输出30(稳定电压供仪表.收音机等)-T12d/7</span>\r\n            </div>\r\n            <div>\r\n              <span>稳压器-A19</span>\r\n            </div>\r\n            <div>\r\n              <span>50R(启动时:12V电压信号)-T12d/4</span>\r\n            </div>\r\n            <div>\r\n              <span>接地线-T12d/2</span>\r\n            </div>\r\n            <div>\r\n              <span>供电(15)-T12d/3</span>\r\n            </div>\r\n            <div>\r\n              <span>输入30供电-T12d/1</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <!-- 案例分享 -->\r\n    <div *ngIf='indexChangeState.caseFlag' class=\"case\">\r\n      <div class=\"caseTitle\">案例分享</div>\r\n      <div class=\"caseContent\">\r\n        <div class=\"boxScorll\" id=\"boxScroll\">\r\n          <div [@flyIn]=\"'fadein'\" class=\"content\">\r\n            <p>在发动机数据流中，和启动功能相关的有以下五组数据：</p>\r\n            <ul>\r\n              <li><span>1</span>用于发动机的停止障碍因素Binary 8 Bit</li>\r\n              <li><span>2</span>至发动机的启动请求Binary 8 Bit</li>\r\n              <li><span>3</span>激活的用户的启动要求Binary 16 Bit</li>\r\n              <li><span>4</span>激活的用户的停止阻碍因素Binary 16 Bit</li>\r\n              <li><span>5</span>启动设备启动/停止系统故障Binary 16 Bit</li>\r\n            </ul>\r\n            <h4>下面我们来看一个具体故障案例：</h4>\r\n            <div>\r\n              途安L1.4T启停功能无法使用<br> 故障现象：经试车在启停功能开启条件、蓄电池电压、车门关闭、空调关闭、发动机水温正常都满足\r\n              <br> 的情况下，启停功能仍无法开启，诊断仪检测无故障码。\r\n              <br> 年款：2016\r\n              <br> 发动机：CSSA\r\n              <br> 变速箱：QTB\r\n              <br> 交货时间：2016-10-09\r\n              <br> 底盘号：LSVRB60R9GN011463\r\n              <br> 行驶里程：10817km\r\n            </div>\r\n            <div>\r\n              诊断分析<br> 通过读取和启停相关的数据流，可通过当前启停功能信息判断客户抱怨原因。发动机数据流中关于启<br>停功能相关数据流：\r\n              <br>\r\n              <img class=\"img1\" src=\"./assets/images/replace/case-1.png\" alt=\"\">\r\n              <br>我们发现在和启停系统相关的五组数据流中，“激活的用户的停止阻碍因素”这一组里，Bit3显示<br>为1，即表明此项系统存在故障。\r\n              <br>\r\n              <img class=\"img2\" src=\"./assets/images/replace/case-2.png\" alt=\"\">\r\n              <br> 通过对比每个数据具体对应的系统，我们发现Bit3所对应系统为能量管理系统，因此判断该车蓄电\r\n              <br>池应存在故障，后更换蓄电池，故障排除。 <br> 我们在判断故障原因时，除结合故障现象以外，还应该更多利用诊断数据，以便更准确更快速地找<br>到故障原因。\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- 返回按钮 -->\r\n    <div class=\"back\" (click)=\"back()\">\r\n      <div class=\"tip\" style='line-height:50px;'>\r\n        【重新选择】按钮，点击将返回本节内容首页\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = "<div class=\"testQuestion\">\r\n    <div class=\"titleName\">\r\n        <img src=\"./assets/images/project/testIcon.png\" alt=\"\">\r\n        <h2>测试题</h2>\r\n    </div>\r\n    <ng-template ngFor let-i='index' let-item [ngForOf]='currentTestQuestion'>\r\n        <div class=\"content\" *ngIf='item.isShow'>\r\n            <div class=\"questionTitle\">{{item.text}}</div>\r\n            <img src=\"{{item.src}}\" alt=\"\">\r\n            <form>\r\n                <ng-template ngFor let-i='index' let-opationItem [ngForOf]='item.option'>\r\n                    <label (click)='slected(item,i,opationItem)' for=\"{{opationItem.id}}-{{i}}\">\r\n                            <input checked [input]=\"opationItem.checked\"  id=\"{{opationItem.id}}-{{i}}\" name='{{opationItem.id}}' type=\"radio\">\r\n                            <span [ngStyle]='opationItem.textStyle'>{{opationItem.text}}</span>\r\n                        </label>\r\n                </ng-template>\r\n            </form>\r\n            <div class=\"task\" *ngIf='item.taskIsShow'>\r\n                {{item.taskInfo}}\r\n            </div>\r\n            <div class=\"prev\" *ngIf='currentTestQuestion.length>1' (click)='prevQustion(i)'>上一题</div>\r\n            <div class=\"next\" *ngIf='currentTestQuestion.length>1' (click)='nextQustion(i)'>下一题</div>\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),
/* 170 */,
/* 171 */,
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(44)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./perfect-scrollbar.min.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./perfect-scrollbar.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(44)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./app.component.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./app.component.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 174 */,
/* 175 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(124);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(125);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(126);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(127);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(128);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(129);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(130);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(131);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(132);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(133);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(134);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(135);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(136);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(172);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(173);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ede87adaff971a9ae4cfa44e62364f25.png";

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAyCAYAAAC+oOBfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpERTk0RTVENjYyM0VFNjExQTZERkZDNjc1RUJCOUY4QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QTIzRDVGQzY0NDcxMUU2ODZEQkQxNjEwQ0I1QjA3MSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QTIzRDVGQjY0NDcxMUU2ODZEQkQxNjEwQ0I1QjA3MSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQwNjZhOTAtZWY0Zi0wZDRhLWJkOTctNDdhNjU1ZGQ5NWE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRFOTRFNUQ2NjIzRUU2MTFBNkRGRkM2NzVFQkI5RjhDIi8+IDwvcmRmOkRlc2Ny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"

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAdCAYAAADRoo4JAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpERTk0RTVENjYyM0VFNjExQTZERkZDNjc1RUJCOUY4QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4N0RGQTk3NzY0NDcxMUU2ODhDRkI0QzlERTM0RDU5OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4N0RGQTk3NjY0NDcxMUU2ODhDRkI0QzlERTM0RDU5OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQwNjZhOTAtZWY0Zi0wZDRhLWJkOTctNDdhNjU1ZGQ5NWE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRFOTRFNUQ2NjIzRUU2MTFBNkRGRkM2NzVFQkI5RjhDIi8+IDwvcmRmOkRlc2Ny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"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABCCAYAAAAIY7vrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpERTk0RTVENjYyM0VFNjExQTZERkZDNjc1RUJCOUY4QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NjAwMERDRTY0NDcxMUU2QTE4MkM3MEUyMUVGRTlCOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NjAwMERDRDY0NDcxMUU2QTE4MkM3MEUyMUVGRTlCOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQwNjZhOTAtZWY0Zi0wZDRhLWJkOTctNDdhNjU1ZGQ5NWE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRFOTRFNUQ2NjIzRUU2MTFBNkRGRkM2NzVFQkI5RjhDIi8+IDwvcmRmOkRlc2Ny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"

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "da32440570cc6fff0ad4f33345730c5a.png";

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXUAAADgCAYAAAD8IfaMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM0NDQ5MUJCNDQ4MTFFNUExRjNDQjA0QUVCQjE0MDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDM0NDQ5MUNCNDQ4MTFFNUExRjNDQjA0QUVCQjE0MDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzQ0NDkxOUI0NDgxMUU1QTFGM0NCMDRBRUJCMTQwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzQ0NDkxQUI0NDgxMUU1QTFGM0NCMDRBRUJCMTQwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjjojxcAAAiTSURBVHja7N1/jNd1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"

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ad6c512adfab33e6f74247741124d007.png";

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "66a3d21b72cc7283a15944c3adca99a8.png";

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA2CAYAAADDGGkNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDJFQjQ2Q0Y2QkMzMTFFNDlGQUM4MzFBNjFCNzk2NkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDJFQjQ2Q0U2QkMzMTFFNDlGQUM4MzFBNjFCNzk2NkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IjFBMTdCM0NEMDUyNjEzQzZBQjVBREU4RThCNzhBRDMwIiBzdFJlZjpkb2N1bWVudElEPSIxQTE3QjNDRDA1MjYxM0M2QUI1QURFOEU4Qjc4QUQzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlRSX0QAAAnjSURBVHjaXFdJq11ZFV67Oe29eW1eKkm9V6HAgVCm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"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA8CAYAAABig0prAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAouSURBVHjatJfbj2XHVcZ/tapq384+c7rn3nOx3caWDLLj4ESgMZBYRFEIQeYhUngIQki88oD4KxAPSEgo8MITQkJWHhACGSlPiAiMxSiDxjEe22Im47l0uz093X1u+1JVi4d9TntiGWUs4ZK29t6ltb9a9a1Va33bvPzCV6jrmle/+x1ee+01Lky2eeWVV7h99yZ1XTL9cIfu6MhO79/76u7u7q8//9KL+FMnfvjB/OCf57OWq1d/xKmTZ/mtX3qFsix548a/8s4772C+8uWvklJiPp9S+IzcGopeyffnbEb90mVX/vG5yfjVuijqGCOzds60b9lfzHcepPBnXZX/xW67XKZJSVeVfDibkmUZ5sqLL6OqWGuwGAgdRa/PPFuf+t72ePL1y65k7C2EgHOOnkAncNS13J4e8t7ezu29vv3ug9T8sB9VdM6SUsJeOn+GEVBrYOPgiKfj8g9+bXLy73+5GP38i8nxc4uWs82SyXzKieWck23LqbbhSWN5KhguF/nETo9+1zezB8TFf+5bgxjFPnXpMrmxhGbJpi/+8NlL5/9q+8xWVgaFWUMeEiF0iBVCioQYiZpoux7rM6hLRufO2LtH+9+aSvrRrKpupJSwv3DpEvXhnMsh/savbp7725eajCcXkc02MEqKk4TGiHEGJ4IFvMLIZvigpOWSUW/YLif0Ow9/c1fD910I+9L3PUA9mUy+V1UVZVnSti0pJYwxhBW3MUbatmVlT9M0qCrrMRqN2Nramlhr/7SqKqSKcEn87/yiHW0/vYiU8wWZCKpKINF7YUGk00gwSjKgUVA1tE1Pjse2HXnTs+1rvpyyV0/M+4sCUJbl7xdFgbUWVSWlhKoePz/6DhBjXGWSRUQAUFXyPGdzc9Mul8tvubwL5dm6uPJklyHa0NmAVRAMAEYVUNabTilhtMPjILXYPuE1QlB8bjgfHc+UG18SEdmuqso6536Ks7WHj84ZY0gpHT/HGOm6DmMMqkqMERHhueeeu+icc5Msy0gkbC+kkDAJ5GO84SO7AreCQYgaSSZhSBQJIoqmxKgsuLG7NxGgCyEcA3xyfHJu7XUIARE5fl9n0WKx4OTJk4euCf3eYbdkeqJkvDAU0X/qAjYO96ABEUsbI9ZZUopoUqwIWadonXP7o723JaV0O4RwmGUZj/L8KMePcq2qOOeQVUquPRURYoxUVbWsqurPZe4t/90c/MstjSw2azSLiOlxKWFjpDeRIIlkIxDwNjGf7uMLQ0g9nUaSOB4YuH/2ND8x9i/verkreZ7TNM1f37x5kxACRVEcRxzAWnvM49rzPM8JIaCqFEVBCIGqqogx7s/n8z8REWTe97RW/ulhmL9/++Eus6RoWaHjEa0V2rYndYkiGmxUbBroMEmJAk1Uurri8FTNf7UHf/Ruf7R3/pmnEWstQMyy7PrBwQH37t1jOp0iIhRFQVEUOOeO+V1zaq3Fe894PGZ7e5u2bb9/586dv3nw4AG3bt3CVVVFFgNlUdbSRGZNw6L7iKpZMB6PKa1FCXTSI07oM0tvDcZa8hOniZub/Pvy4B/+7vb137tdRmJZ8OHtW7grV67w4ds/xj6c1iLCinP29/c5PDyktJbMWLwknHM0NrFIAWMtxTISDg933vzJzd/eXe6SnTvHYdfhbIGbLjvOnN7itClq/2BBkB5feFSUpmlY9GEIHpEuDRUOZ8mqCaOYmFp7vf7CCzy/9Ss0asjraii1b7zxBk+XFXlichaG/EzDmc/znKhDDwtJEZQi9wSGzKjrmvuz2dWd2SHvTncwRUUTh3rtrnzhJTY+OmDr7l49lhyTtbgYKcSgxtJFpTOQrMVHyKOgajldn2aBpbH++jwq3SKS9UpdjBAR3Hg8ZnbrDiGEOqWEt4JzDmuHOivJIRrBRGKM2ADWDnncti3j8fjqC5cv8OSZTVIUFm0zUHH7vfd4xvpsA5udEIcG8FhyMxzbXgZuPZGoETSRSYFkGfulW77z8P77b925wTz3OBmRuRzvPW53d5fTUtQi9vikWcAZN3huFEJP0KECGifHXURErl+8eDFWG8/Rj0cYLbDGYa3FfeObX6O4ebfm1h3iYcPEl2DAZh6fZTg1WAlov8RYi6kMxjv62rO/OLh2r++J/YSjO4F529CnSEoJ9/rrr/NSOZlUTc/WxgbMF8d1d6i3q50ki4mGruvIvSPLMsL86Nq9vXvsx3s0KlQnxiy7Fuccrnx4yKl8XD9jcpqDIzLxGGNY+ozkM3yEngQIkoQi8+S5p21aitns6hOd4QmXoTZHGkMN0IUhK7z3dTdryfMcE4dcTqsObJJizNBYRYRExHtPLxKrqnp7wwuSFYivSCkxsT3GGNw3nOfUItQqHhMDLgacEVT7oZIJqPT4lNCUSL7AkVGG8P6peZidsgYTO+bNISZzpC4fmoG1FjFSG2N49Fq3+nX31VVfW9dnTXrtuCfqx/3QrGSD2+wjIxvqrI9EDNEJWIMaUAMoSFQiQyCNs+AtXZuuqeE4sBkOnxyq3aBLVh5OPqknPq1Li8jxparXHn1/VBUZY3DeCcaauvUGYwZdkQwog34waaCBFDGacNbgrUAM17wYvAouQKEgKRF0oNKtVqlTGoTKeuW04vlRr9edw1q7o6o71lokKUY/5na9A3cieKxk9TJFEglnDGIMwSiGRDIJNQl1g7TSTNFMrwfbk3wkprByYtB4RRIMFuecw4qr15oihY9Vpoj8lFZbKx9jzFVVPZ5bzwNIAIMMwMakeh4XtG0LM6VtW5auH1JLErk4TpQFeVaSGSgN1ysMagSi4p2iOqRihgAJ1/c9McZJ27YcHR0hi5U2Y8jbEFvaBLFZslgs2JrUWGuvFkUxcEmBWEU14pyjUDcErx87QhPrWgqKzDCSySBY8kFCLWZHzGYz2tDTdj0jYek2Ru/32dmBhswT0iBP1TnmuSf5DLe5ucne/Z16rW3Xukz8kJNUFd57kmGtJq8/OR7H8tQGIkJVDn8CWeExInSZwxQlbuepc8z6RZ3vG4plZDo9IssyvAxSKwVFI8RRweJESbh87qr/5teQ8xNaDMsyH5zxg0o1VUn0OW5ra4sPPrg/6cNDDg+P6I8aRqMR48wf/y11XUfMLFBy4cKF6+Nnn4XzEwgRrAGzukIA7/DicPbStl3+x41yc5qR/Cb92YESjKBBkSjY6DBa0NsRZuPMVcYTUlYRMgExaLJkEYwHtIEI7vQTT1TESNA4tKRkIUG7UvmIxZUW+h5/d4+TJ0++zVptWn984mKMOOchAsZgVJVrz3/9KeAmP3vc/+JbP7jwGHasQs8GjzcePqbdMfDmY9offF7ADz4v4M+Nio8+K/DjBu/uZwU++Ri2DfDu/zcVCuwB//NZgYufYdcD7wAfflbgOcNh/L/GIfAmcPRZgf8N2P+U7YfVoj9e2fSPC+xW99eAl4FvAxZYrrzcWdWQfwTe/OJbP9DHBf7fAQBZLoFwvW8kywAAAABJRU5ErkJggg=="

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9e05bf24c5bef8545496071bff308105.png";

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fd78744419cf9ce30c5cc872e8e3e183.png";

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "96db73a42c5e63d50b0782a5e9e30ac2.png";

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAAA+CAYAAACY/4YrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkNBN0NFMTNBRjFFMTFFOEI5OTFERDAzMUJFRjI0M0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkNBN0NFMTRBRjFFMTFFOEI5OTFERDAzMUJFRjI0M0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQ0E3Q0UxMUFGMUUxMUU4Qjk5MUREMDMxQkVGMjQzRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQ0E3Q0UxMkFGMUUxMUU4Qjk5MUREMDMxQkVGMjQzRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqEdiyoAABO0SURBVHja7J0JeBRV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"

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "105cf4cbef402906971554cb70129b9c.png";

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b55d159d5e28e958eee403d89459713.png";

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9b0043460070d09fa817f03501b1fbb0.png";

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(0)

/***/ }),
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(210)

/***/ }),
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(443)

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(500)

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(98)

/***/ })
],[122]);
//# sourceMappingURL=main.bundle.js.map