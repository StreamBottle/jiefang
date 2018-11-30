webpackJsonp([0],{

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mediator_commonObject_1 = __webpack_require__(24);
var multimeter_service_1 = __webpack_require__(165);
var multimeter_controller_1 = __webpack_require__(467);
var AbstractMultimeterPreconditionObject = /** @class */ (function () {
    function AbstractMultimeterPreconditionObject() {
        this.commonFacade = new mediator_commonObject_1.CommonFacade();
        this.preconditionStatus = new multimeter_service_1.PreconditionProcessingMethod();
    }
    return AbstractMultimeterPreconditionObject;
}());
var MultimeterPreconditionObject = /** @class */ (function (_super) {
    __extends(MultimeterPreconditionObject, _super);
    function MultimeterPreconditionObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultimeterPreconditionObject.prototype.multimeterPreconditionObjectKeySwitch = function () {
        var keySwitchObject = this.commonFacade.preconditionObjectKeySwitch();
        return keySwitchObject;
    };
    MultimeterPreconditionObject.prototype.multimeterPreconditionObjectSensor = function (filterObject) {
        var sensor = this.commonFacade.preconditionObjectSensor();
        return this.preconditionStatus.sensorInstallInfluence(sensor, filterObject);
    };
    MultimeterPreconditionObject.prototype.multimeterPreconditionObjectFault = function (filterObject) {
        var fault = this.commonFacade.preconditionObjectFault();
        return this.preconditionStatus.currentFaultInfluence(fault, filterObject);
    };
    MultimeterPreconditionObject.prototype.multimeterPreconditionObjectActiveTest = function (filterObject) {
        var activeTest = this.commonFacade.preconditionObjectActiveTest();
        return this.preconditionStatus.obdActiveTestInfulence(activeTest, filterObject);
    };
    return MultimeterPreconditionObject;
}(AbstractMultimeterPreconditionObject));
exports.MultimeterPreconditionObject = MultimeterPreconditionObject;
//万用表输出
var MultimeterScreenOut = /** @class */ (function () {
    function MultimeterScreenOut() {
        this.multimeterScreen = new multimeter_controller_1.MultimeterMeasureData();
    }
    MultimeterScreenOut.prototype.getMultimeterScreen = function () {
        var measureValue = this.multimeterScreen.getMultimeterMeasureData();
        //console.log('measureValue:',measureValue)
        return measureValue;
    };
    return MultimeterScreenOut;
}());
exports.MultimeterScreenOut = MultimeterScreenOut;


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(25);
//前置条件处理方法
var PreconditionProcessingMethod = /** @class */ (function () {
    function PreconditionProcessingMethod() {
    }
    PreconditionProcessingMethod.prototype.currentFaultInfluence = function (sourceData, filterData) {
        if (_.isMatch(sourceData, filterData))
            return 'normal';
        else
            return 'unnormal';
    };
    PreconditionProcessingMethod.prototype.sensorInstallInfluence = function (sourceData, filterData) {
        if (_.isMatch(sourceData, filterData))
            return 'install';
        else
            return 'uninstall';
    };
    PreconditionProcessingMethod.prototype.obdActiveTestInfulence = function (sourceData, filterData) {
        if (_.isMatch(sourceData, filterData))
            return 'notActiveTest';
        else
            return 'ActiveTest';
    };
    return PreconditionProcessingMethod;
}());
exports.PreconditionProcessingMethod = PreconditionProcessingMethod;
/**
 * @inner
 * @template A
 * @template S
 * @function findObjectMethods 对象数组查找方法
 * @param {A} data  当前要查取的对象数组
 * @param {A} filterObject 当前要查取对象数组的对象
 * @param {S} prop1  当前要查取对象数组的属性值
 * @returns
 */
function findObjectMethods(data, filterObject, prop1) {
    return _.result(_.find(data, filterObject), prop1);
}
/**
 * @inner
 * @template A
 * @template S
 * @function spliceObjectMethods 对象拼接方法
 * @param {A} obj    当前对象
 * @param {S} prop1  当前对象的属性值
 * @returns
 */
function spliceObjectMethods1(proconditionList, currentPrecondition, prop1, prop2, prop3) {
    var id = findObjectMethods(proconditionList, currentPrecondition, prop1);
    return _.assign({ multimeterRedProbe: prop2 }, { name: prop3 }, { precondition_id: id });
}
/**
 * @inner
 * @template A
 * @template S
 * @function filterObjectMethods 对象数组过滤方法
 * @param {A} data  当前对象数组
 * @param {S} obj   当前对象数组的对象
 * @returns
 */
function filterObjectMethods(data, obj) {
    return _.filter(data, obj);
}
/**
 * @export 万用表表笔拾取值和测量的传感器名称
 * @template A
 * @template S
 * @template O
 * @param {A[]} data 需要处理的数据对象
 * @param {O} filter 参考对象
 * @param {S} prop1  需要处理的数据对象的属性
 * @returns
 */
function probeValueAndSensorNameFilter(data, filter, prop1) {
    return _.result(_.find(data, filter), prop1); // _.result(_.filter(data,filter),prop1)
}
exports.probeValueAndSensorNameFilter = probeValueAndSensorNameFilter;
/**
 * @template A
 * @template S
 * @function combineObjectMethods 组装对象方法
 * @param {S} measurePointId 传感器测量点id
 * @param {S} measureSensorName 传感器名称
 * @param {S} PreconditionId  前置条件id
 * @returns
 */
function combineObjectMethods(measurePointId, measureSensorName, PreconditionId) {
    return _.assign({ 'sensorMeasurePoint_id': measurePointId, 'name': measureSensorName }, { 'precondition_id': PreconditionId });
}
exports.combineObjectMethods = combineObjectMethods;
function combineObjectMethods2(measurePointId, measureSensorName, PreconditionId) {
    return _.assign({ 'sensorMeasurePoint_id2': measurePointId, 'name2': measureSensorName }, { 'precondition_id': PreconditionId });
}
exports.combineObjectMethods2 = combineObjectMethods2;
/**
 * @export 组装测量点对象
 * @template A
 * @param {A} probe 万用表当前测量点
 * @param
 * @returns
 */
function measureHotObject(probe) {
    return { 'measurePoint': probe };
}
exports.measureHotObject = measureHotObject;
//查找符合条件的万用表电压测量方法
var FindMeetConditionMeasureData = /** @class */ (function () {
    function FindMeetConditionMeasureData() {
    }
    FindMeetConditionMeasureData.prototype.probeValueAndSensorNameFilter = function (data, filterObject, prop1) {
        return _.result(_.filter(data, filterObject), prop1);
    };
    FindMeetConditionMeasureData.prototype.combineObjectMethods = function (measurePointId, measureSensorName, PreconditionId) {
        return _.assign({ 'sensorMeasurePoint_id': measurePointId, 'sensorName': measureSensorName }, { 'precondition_id': PreconditionId });
    };
    FindMeetConditionMeasureData.prototype.measureHotObject = function (probe) {
        return { 'measurePoint': probe };
    };
    return FindMeetConditionMeasureData;
}());
//暂时没有使用
function multimeterMeasureMethods(currentProbe, currentSensor, proconditionList, currentPrecondition, currentDataList, prop1) {
    var meetDataObject = spliceObjectMethods1(proconditionList, currentPrecondition, prop1, currentProbe, currentSensor);
    var dataObject = filterObjectMethods(currentDataList, meetDataObject);
    //  return  _.chain(currentDataList)
    //               .map(function(o:any){
    //                   return [o.name,o.value];
    //               })
    //               .fromPairs()
    //               .value(); 
}
function getMeasurePointId(sensorObject, currentProbeMeasureSensor, measureHotPointObject) {
    var measurePointId;
    _.forIn(sensorObject, function (value, key) {
        if (_.isEqual(key, currentProbeMeasureSensor)) {
            //let measurePointId = multimeterMeasureMethod.probeValueAndSensorNameFilter(value,measureHotPointObject,'id');
            //let measurePointId = probeValueAndSensorNameFilter(value,measureHotPointObject,'id');
            measurePointId = _.result(_.find(value, measureHotPointObject), 'id');
            //filterCondition.redProbeMeasureValue(measurePointId,currentProbeMeasureSensor);    
        }
    });
    return measurePointId;
}
exports.getMeasurePointId = getMeasurePointId;


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var instrumentPanel_controller_1 = __webpack_require__(463);
var onBoardDiagnostics_mediator_1 = __webpack_require__(59);
var multimeter_mediator_1 = __webpack_require__(164);
var data_commonModuleParameter_1 = __webpack_require__(61);
var mediator_service_1 = __webpack_require__(476);
var AbstractInMediator = /** @class */ (function () {
    function AbstractInMediator() {
    }
    return AbstractInMediator;
}());
var AbstratInColleague = /** @class */ (function () {
    function AbstratInColleague(mediator) {
        this.mediator = mediator;
    }
    AbstratInColleague.prototype.getMediator = function () {
        return this.mediator;
    };
    return AbstratInColleague;
}());
var KeySwitchWebData = /** @class */ (function (_super) {
    __extends(KeySwitchWebData, _super);
    function KeySwitchWebData(mediator) {
        return _super.call(this, mediator) || this;
    }
    Object.defineProperty(KeySwitchWebData.prototype, "setKeySwitchStatus", {
        set: function (keySwitchStatus) {
            this.keySwitchStatus = keySwitchStatus;
            this.getMediator().webDatachange(this);
        },
        enumerable: true,
        configurable: true
    });
    KeySwitchWebData.prototype.getKeySwitchStatus = function () {
        var key = this.keySwitchStatus;
        //console.log('getKeySwitchStatus():',key)
        return key;
    };
    return KeySwitchWebData;
}(AbstratInColleague));
var SensorWebData = /** @class */ (function (_super) {
    __extends(SensorWebData, _super);
    function SensorWebData(mediator) {
        return _super.call(this, mediator) || this;
    }
    Object.defineProperty(SensorWebData.prototype, "setSensorStatus", {
        set: function (sensorStatus) {
            this.sensorStatus = sensorStatus;
            this.getMediator().webDatachange(this);
        },
        enumerable: true,
        configurable: true
    });
    SensorWebData.prototype.getSensorStatus = function () {
        return this.sensorStatus;
    };
    return SensorWebData;
}(AbstratInColleague));
var FaultWebData = /** @class */ (function (_super) {
    __extends(FaultWebData, _super);
    function FaultWebData(mediator) {
        return _super.call(this, mediator) || this;
    }
    Object.defineProperty(FaultWebData.prototype, "setFaultStatus", {
        set: function (faultStatus) {
            this.faultStatus = faultStatus;
            this.getMediator().webDatachange(this);
        },
        enumerable: true,
        configurable: true
    });
    FaultWebData.prototype.getFaultStatus = function () {
        var fault = this.faultStatus;
        //console.log('getFaultStatus():',fault)
        return fault;
    };
    return FaultWebData;
}(AbstratInColleague));
var AcceleratorPedalWebData = /** @class */ (function (_super) {
    __extends(AcceleratorPedalWebData, _super);
    function AcceleratorPedalWebData(mediator) {
        return _super.call(this, mediator) || this;
    }
    Object.defineProperty(AcceleratorPedalWebData.prototype, "setAcceleratorPedalStatus", {
        set: function (acceleratorPedalStatus) {
            this.acceleratorPedalStatus = acceleratorPedalStatus;
            this.getMediator().webDatachange(this);
        },
        enumerable: true,
        configurable: true
    });
    AcceleratorPedalWebData.prototype.getAcceleratorPedalStatus = function () {
        return this.acceleratorPedalStatus;
    };
    return AcceleratorPedalWebData;
}(AbstratInColleague));
var MultimeterProbeWebData = /** @class */ (function (_super) {
    __extends(MultimeterProbeWebData, _super);
    function MultimeterProbeWebData(mediator) {
        return _super.call(this, mediator) || this;
    }
    Object.defineProperty(MultimeterProbeWebData.prototype, "setMultimeterProbeStatus", {
        set: function (multimeterProbeStatus) {
            this.multimeterProbeStatus = multimeterProbeStatus;
            this.getMediator().webDatachange(this);
        },
        enumerable: true,
        configurable: true
    });
    MultimeterProbeWebData.prototype.getMultimeterProbeStatus = function () {
        return this.multimeterProbeStatus;
    };
    return MultimeterProbeWebData;
}(AbstratInColleague));
var MultimeterStallsWebData = /** @class */ (function (_super) {
    __extends(MultimeterStallsWebData, _super);
    function MultimeterStallsWebData(mediator) {
        return _super.call(this, mediator) || this;
    }
    Object.defineProperty(MultimeterStallsWebData.prototype, "setMultimeterStallsStatus", {
        set: function (multimeterStallsStatus) {
            this.multimeterStallsStatus = multimeterStallsStatus;
            this.getMediator().webDatachange(this);
        },
        enumerable: true,
        configurable: true
    });
    MultimeterStallsWebData.prototype.getMultimeterStallsStatus = function () {
        return this.multimeterStallsStatus;
    };
    return MultimeterStallsWebData;
}(AbstratInColleague));
var WebDataMediator = /** @class */ (function (_super) {
    __extends(WebDataMediator, _super);
    function WebDataMediator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDataMediator.prototype.setKeySwitchWebData = function (keySwitchWebData) {
        this.keySwitchWebData = keySwitchWebData;
    };
    WebDataMediator.prototype.setFaultWebData = function (faultWebData) {
        this.faultWebData = faultWebData;
    };
    WebDataMediator.prototype.setSensorWebData = function (sensorWebData) {
        this.sensorWebData = sensorWebData;
    };
    WebDataMediator.prototype.setAcceleratorPedalWebData = function (acceleratorPedalWebData) {
        this.acceleratorPedalWebData = acceleratorPedalWebData;
    };
    WebDataMediator.prototype.setMultimeterProbeWebData = function (multimeterProbeWebData) {
        this.multimeterProbeWebData = multimeterProbeWebData;
    };
    WebDataMediator.prototype.setMultimeterStallsWebData = function (multimeterStallsWebData) {
        this.multimeterStallsWebData = multimeterStallsWebData;
    };
    WebDataMediator.prototype.webDatachange = function (colleague) {
        switch (colleague) {
            case this.keySwitchWebData:
                //console.log('colleague-key :',<KeySwitchWebData>colleague)               
                this.updateKeySwitchList(colleague);
                break;
            case this.faultWebData:
                // console.log('colleague-fault :',<FaultWebData>colleague) 
                this.updateFaultList(colleague);
                break;
            case this.sensorWebData:
                // console.log('colleague-sensor :',<FaultWebData>colleague) 
                this.updateSensorList(colleague);
                break;
            case this.acceleratorPedalWebData:
                // console.log('colleague-app :',<AcceleratorPedalWebData>colleague) 
                this.updateAcceleratorPedal(colleague);
                break;
            case this.multimeterProbeWebData:
                this.updateMultimeterProbeList(colleague);
                break;
            case this.multimeterStallsWebData:
                this.updateMultimeterStallsList(colleague);
                break;
            default:
                break;
        }
        // if(colleague == this.keySwitchWebData){
        //     this.updateKeySwitchList(<KeySwitchWebData>colleague);
        // }else if(colleague == this.faultWebData){
        //     this.updateFaultList(<FaultWebData>colleague);
        // }else if(colleague == this.sensorWebData) {
        //     this.updateSensorList(<SensorWebData>colleague); 
        // }else if(colleague == this.acceleratorPedalWebData){
        //     this.updateAcceleratorPedal(<AcceleratorPedalWebData>colleague);
        // }else if(colleague == this.multimeterWebData){
        //     this.updateMultimeterProbeList(<MultimeterWebData>colleague);
        // }
    };
    WebDataMediator.prototype.updateKeySwitchList = function (keySwitchWebData) {
        var data = keySwitchWebData.getKeySwitchStatus();
        //console.log('data-key :',data)
        // console.log('updateKeySwitchList-keySwitchWebData:',keySwitchWebData)       
        mediator_service_1.webDataProcessing(data_commonModuleParameter_1.keySwitch, data, 'name', 'status');
        //console.log('updateKeySwitchList-keySwitch :',keySwitch)
    };
    WebDataMediator.prototype.updateFaultList = function (faultWebData) {
        var data = faultWebData.getFaultStatus();
        //console.log('data-fault:',data)
        // console.log('updateFaultList-faultWebData:',faultWebData) 
        mediator_service_1.webDataProcessing(data_commonModuleParameter_1.fault, data, 'name', 'status');
        // console.log('updateFaultList-fault:',fault)     
    };
    WebDataMediator.prototype.updateSensorList = function (sensorWebData) {
        var data = sensorWebData.getSensorStatus();
        //console.log('data-sensor:',data)
        mediator_service_1.webDataProcessing(data_commonModuleParameter_1.sensor, data, 'name', 'status');
        //console.log('updateSensorList-sensor:',sensor)
    };
    WebDataMediator.prototype.updateAcceleratorPedal = function (acceleratorPedalWebData) {
        var data = acceleratorPedalWebData.getAcceleratorPedalStatus();
        // console.log('data-app:',data)
        mediator_service_1.webDataProcessing(data_commonModuleParameter_1.acceleratorPedal, data, 'name', 'value');
        // console.log('updateAcceleratorPedal-acceleratorPedal:',acceleratorPedal)
    };
    WebDataMediator.prototype.updateMultimeterProbeList = function (multimeterProbeWebData) {
        var data = multimeterProbeWebData.getMultimeterProbeStatus();
        // console.log('data-multiProbe:',data)
        mediator_service_1.webDataProcessing2(data_commonModuleParameter_1.multimeterProbe, data, 'name', 'displayFlag', 'value');
        //console.log('updateMultimeterProbeList-multimeterProbe:',multimeterProbe)
    };
    WebDataMediator.prototype.updateMultimeterStallsList = function (multimeterStallsWebData) {
        var data = multimeterStallsWebData.getMultimeterStallsStatus();
        //console.log('data-multiStalls:',data)
        mediator_service_1.webDataProcessing2(data_commonModuleParameter_1.multimeterStalls, data, 'name', 'displayFlag', 'value');
        //console.log('updateMultimeterStallsList-multimeterStalls:',multimeterStalls)
    };
    return WebDataMediator;
}(AbstractInMediator));
var WebTransferData = /** @class */ (function () {
    function WebTransferData() {
        //this.setWebTransferData = {"key":"off"};
        this.mediator = new WebDataMediator();
        this.keySwitchStatus = new KeySwitchWebData(this.mediator);
        this.faultStatus = new FaultWebData(this.mediator);
        this.sensorStatus = new SensorWebData(this.mediator);
        this.accleratorPedalStatus = new AcceleratorPedalWebData(this.mediator);
        this.multimeterProbeStatus = new MultimeterProbeWebData(this.mediator);
        this.multimeterStallsStatus = new MultimeterStallsWebData(this.mediator);
        this.mediator.setKeySwitchWebData(this.keySwitchStatus);
        this.mediator.setFaultWebData(this.faultStatus);
        this.mediator.setSensorWebData(this.sensorStatus);
        this.mediator.setAcceleratorPedalWebData(this.accleratorPedalStatus);
        this.mediator.setMultimeterProbeWebData(this.multimeterProbeStatus);
        this.mediator.setMultimeterStallsWebData(this.multimeterStallsStatus);
    }
    Object.defineProperty(WebTransferData.prototype, "setWebTransferData", {
        set: function (webDataObject) {
            //console.log('setWebTransferData():',this.webDataObject)
            this.webDataObject = webDataObject;
            var judgeFlag = mediator_service_1.singleArrayObjectdataProcessingMethods(this.webDataObject, 'flagName');
            switch (judgeFlag) {
                case 'keySwitchStatus':
                    this.keySwitchStatus.setKeySwitchStatus = this.webDataObject;
                    break;
                case 'faultStatus':
                    this.faultStatus.setFaultStatus = this.webDataObject;
                    break;
                case 'sensorStatus':
                    // console.log('adapter-sensorStatus:',this.webDataObject)
                    this.sensorStatus.setSensorStatus = this.webDataObject;
                    break;
                case 'acceleratorStatus':
                    this.accleratorPedalStatus.setAcceleratorPedalStatus = this.webDataObject;
                    break;
                case 'multimeterProbeStatus':
                    this.multimeterProbeStatus.setMultimeterProbeStatus = this.webDataObject;
                    break;
                case 'multimeterStallsStatus':
                    this.multimeterStallsStatus.setMultimeterStallsStatus = this.webDataObject;
                    break;
                default:
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    return WebTransferData;
}());
exports.WebTransferData = WebTransferData;
//输出到页面的数据
var AbstractOutMediator = /** @class */ (function () {
    function AbstractOutMediator() {
        this.instrumentPanelLedData = new instrumentPanel_controller_1.FilterMeetConditionInstrumentPanelData();
        this.obdData = new onBoardDiagnostics_mediator_1.FindOnBoardDiagnosticsData();
        this.multimeter = new multimeter_mediator_1.MultimeterScreenOut();
    }
    return AbstractOutMediator;
}());
var ModelDataMediator = /** @class */ (function (_super) {
    __extends(ModelDataMediator, _super);
    function ModelDataMediator() {
        var _this = _super.call(this) || this;
        _this.instrumentPanelDataList = [];
        _this.onBoardDiagnosticsDataList = [];
        _this.multimeterDataList = [];
        return _this;
    }
    ModelDataMediator.prototype.modelDataExecute = function (str) {
        switch (str) {
            case 'instrumentPanel':
                return this.instrumentPanelData();
            case 'obdData':
                return this.onBoardDiagnosticsData();
            case 'multimeter':
                return this.multimeterOut();
            default:
                return { 'default is happen': 'true' };
        }
    };
    ModelDataMediator.prototype.instrumentPanelData = function () {
        var ledMil = this.instrumentPanelLedData.instrumentPanelLedMIL();
        var ledABS = this.instrumentPanelLedData.instrumentPanelLedABS();
        var ledBrake = this.instrumentPanelLedData.instrumentPanelLedBrake();
        var ledSafeBag = this.instrumentPanelLedData.instrumentPanelLedSafeBag();
        var ledOilPressure = this.instrumentPanelLedData.instrumentPanelLedOilPressure();
        var ledBatt = this.instrumentPanelLedData.instrumentPanelLedBatt();
        var ledSafeBelt = this.instrumentPanelLedData.instrumentPanelLedSafeBelt();
        var engineSpeed = this.instrumentPanelLedData.instrumentPanelLedEngineSpeed();
        var vehicleSpeed = this.instrumentPanelLedData.instrumentPanelLedVehicleSpeed();
        var coolantTemp = this.instrumentPanelLedData.instrumentPanelLedCoolantTemp();
        var oilVolume = this.instrumentPanelLedData.instrumentPanelLedOilVolume();
        var instrumentPanelData1 = this.instrumentPanelDataList.push(ledMil, ledABS, ledBrake, ledSafeBag, ledOilPressure, ledBatt, ledSafeBelt, engineSpeed, vehicleSpeed, coolantTemp, oilVolume);
        //另外一种返回数据的方法
        //let instrumentPanelData2 = ledMil.concat(ledABS,ledBrake,ledSafeBag,ledOilPressure,ledBatt,ledSafeBelt,engineSpeed)
        console.log('instrumentPanelData:', this.instrumentPanelDataList);
        return this.instrumentPanelDataList; //instrumentPanelData2
    };
    ModelDataMediator.prototype.onBoardDiagnosticsData = function () {
        var obdEngSpeed = this.obdData.obdEngineSpeed();
        var obdMAF = this.obdData.obdMAF();
        var obdInjectorTime = this.obdData.obdInjectorTime();
        var obdVehicleSpeed = this.obdData.getVehicleSpeed();
        var obdCoolantTemp = this.obdData.getCoolantTemp();
        var obdIntakeAir = this.obdData.getIntakeAir();
        var obdBattVolt = this.obdData.getBattVolt();
        var obdAccelerateSensorNo1 = this.obdData.getAccelerateSensorNo1();
        var obdAccelerateSensorNo2 = this.obdData.getAccelerateSensorNo2();
        var obdTpsSensorVolt = this.obdData.getTpsSensorVolt();
        var obdTpsSensor2Volt = this.obdData.getTpsSensor2Volt();
        var obdEvapVsv = this.obdData.getEvapVsv();
        var obdEvapPurgeFlow = this.obdData.getEvapPurgeFlow();
        var obdEvapPurgeDensityLearnValue = this.obdData.getEvapPurgeDensityLearnValue();
        var obdEvapPurgeVSV = this.obdData.getEvapPurgeVSV();
        var obdTargetAFRatio = this.obdData.getTargetAFRatio();
        var obdAFLambadaB1S1 = this.obdData.getAFLambadaB1S1();
        var obdAFVoltB1S1 = this.obdData.getAFVoltB1S1();
        var obdAFCurrentB1S1 = this.obdData.getAFCurrentB1S1();
        var obdFuelSFT = this.obdData.getFuelSFT();
        var obdFuelLFT = this.obdData.getFuelLFT();
        var obdIgnAdvance = this.obdData.getIgnAdvance();
        var obdIgnCount = this.obdData.getIgnCount();
        var obdCylinder1MisCount = this.obdData.getCylinder1MisCount();
        var obdCylinder2MisCount = this.obdData.getCylinder2MisCount();
        var obdCylinder3MisCount = this.obdData.getCylinder3MisCount();
        var obdCylinder4MisCount = this.obdData.getCylinder4MisCount();
        var onBoardDiagnosticsData = this.onBoardDiagnosticsDataList.push(obdEngSpeed, obdMAF, obdInjectorTime, obdVehicleSpeed, obdCoolantTemp, obdIntakeAir, obdBattVolt, obdAccelerateSensorNo1, obdAccelerateSensorNo2, obdTpsSensorVolt, obdTpsSensor2Volt, obdEvapVsv, obdEvapPurgeFlow, obdEvapPurgeDensityLearnValue, obdEvapPurgeVSV, obdTargetAFRatio, obdAFLambadaB1S1, obdAFVoltB1S1, obdAFVoltB1S1, obdAFCurrentB1S1, obdFuelSFT, obdFuelLFT, obdIgnAdvance, obdIgnCount, obdCylinder1MisCount, obdCylinder2MisCount, obdCylinder3MisCount, obdCylinder4MisCount);
        console.log('onBoardDiagnosticsData:', this.onBoardDiagnosticsDataList);
        return this.onBoardDiagnosticsDataList;
    };
    ModelDataMediator.prototype.multimeterOut = function () {
        var multimeter = this.multimeter.getMultimeterScreen();
        var data = this.multimeterDataList.push(multimeter);
        console.log('multimeterDataList:', this.multimeterDataList);
        return this.multimeterDataList;
    };
    return ModelDataMediator;
}(AbstractOutMediator));
exports.ModelDataMediator = ModelDataMediator;
var AbstractOutColleague = /** @class */ (function () {
    function AbstractOutColleague(mediator) {
        this.mediator = mediator;
    }
    return AbstractOutColleague;
}());
var ModelDataColleague = /** @class */ (function (_super) {
    __extends(ModelDataColleague, _super);
    function ModelDataColleague(mediator) {
        return _super.call(this, mediator) || this;
    }
    ModelDataColleague.prototype.getModelOutData = function (str) {
        return this.mediator.modelDataExecute(str);
    };
    return ModelDataColleague;
}(AbstractOutColleague));
exports.ModelDataColleague = ModelDataColleague;
var OBDDataColleague = /** @class */ (function (_super) {
    __extends(OBDDataColleague, _super);
    function OBDDataColleague(mediator) {
        return _super.call(this, mediator) || this;
    }
    OBDDataColleague.prototype.getOBDOutData = function (str) {
        return this.mediator.modelDataExecute(str);
    };
    return OBDDataColleague;
}(AbstractOutColleague));
exports.OBDDataColleague = OBDDataColleague;
var MultimeterDataColleague = /** @class */ (function (_super) {
    __extends(MultimeterDataColleague, _super);
    function MultimeterDataColleague(mediator) {
        return _super.call(this, mediator) || this;
    }
    MultimeterDataColleague.prototype.getMultimeter = function (str) {
        return this.mediator.modelDataExecute(str);
    };
    return MultimeterDataColleague;
}(AbstractOutColleague));
exports.MultimeterDataColleague = MultimeterDataColleague;


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var data_controller_1 = __webpack_require__(471);
var CommonObjectAbstractMediator = /** @class */ (function () {
    function CommonObjectAbstractMediator() {
        this.common = new data_controller_1.CommonObjectHandle();
    }
    return CommonObjectAbstractMediator;
}());
var CommonObjectMediator = /** @class */ (function (_super) {
    __extends(CommonObjectMediator, _super);
    function CommonObjectMediator() {
        return _super.call(this) || this;
    }
    CommonObjectMediator.prototype.commonObjectExecute = function (str) {
        switch (str) {
            case "keySwitchSourceData":
                //console.log('this.common.keySwitchObject() :',this.common.keySwitchObject())
                return this.common.keySwitchObject();
            case "sensorSourceData":
                return this.common.sensorObject();
            case "faultSourceData":
                //console.log('this.common.currentFaultObject():',this.common.currentFaultObject())
                return this.common.currentFaultObject();
            case "activeTestSourceData":
                return this.common.onBoardDiagnosticsObject();
            case "multimeterSourceData":
                return this.common.multimeterObject();
            case "acceleratorPedalSourceData":
                return this.common.acceleratorPedalObject();
            default:
                return "nothing happen";
        }
    };
    return CommonObjectMediator;
}(CommonObjectAbstractMediator));
var AbstractColleague = /** @class */ (function () {
    function AbstractColleague(mediator) {
        this.mediator = mediator;
    }
    AbstractColleague.prototype.keySwitchSourceData = function () {
        return this.mediator.commonObjectExecute("keySwitchSourceData");
    };
    AbstractColleague.prototype.sensorSourceData = function () {
        return this.mediator.commonObjectExecute("sensorSourceData");
    };
    AbstractColleague.prototype.faultSourceData = function () {
        return this.mediator.commonObjectExecute("faultSourceData");
    };
    AbstractColleague.prototype.activeTestSourceData = function () {
        return this.mediator.commonObjectExecute("activeTestSourceData");
    };
    AbstractColleague.prototype.acceleratorPedalSourceData = function () {
        return this.mediator.commonObjectExecute("acceleratorPedalSourceData");
    };
    return AbstractColleague;
}());
var CommonObjectColleague = /** @class */ (function (_super) {
    __extends(CommonObjectColleague, _super);
    function CommonObjectColleague() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   constructor(mediator:CommonObjectAbstractMediator){
    //       super(mediator);
    //   }
    CommonObjectColleague.prototype.keySwitchSourceData = function () {
        return _super.prototype.keySwitchSourceData.call(this);
    };
    CommonObjectColleague.prototype.sensorSourceData = function () {
        return _super.prototype.sensorSourceData.call(this);
    };
    CommonObjectColleague.prototype.faultSourceData = function () {
        return _super.prototype.faultSourceData.call(this);
    };
    CommonObjectColleague.prototype.activeTestSourceData = function () {
        return _super.prototype.activeTestSourceData.call(this);
    };
    CommonObjectColleague.prototype.acceleratorPedalSourceData = function () {
        return _super.prototype.acceleratorPedalSourceData.call(this);
    };
    return CommonObjectColleague;
}(AbstractColleague));
var Client = /** @class */ (function () {
    function Client() {
        this.mediator = new CommonObjectMediator();
        this.preconditionObject = new CommonObjectColleague(this.mediator);
    }
    return Client;
}());
exports.Client = Client;
var CommonFacade = /** @class */ (function () {
    function CommonFacade() {
        this.mediator = new CommonObjectMediator();
        this.preconditionObject = new CommonObjectColleague(this.mediator);
    }
    CommonFacade.prototype.preconditionObjectKeySwitch = function () {
        return this.preconditionObject.keySwitchSourceData();
    };
    CommonFacade.prototype.preconditionObjectSensor = function () {
        return this.preconditionObject.sensorSourceData();
    };
    CommonFacade.prototype.preconditionObjectFault = function () {
        return this.preconditionObject.faultSourceData();
    };
    CommonFacade.prototype.preconditionObjectActiveTest = function () {
        return this.preconditionObject.activeTestSourceData();
    };
    CommonFacade.prototype.preconditionObjectAPP = function () {
        return this.preconditionObject.acceleratorPedalSourceData();
    };
    return CommonFacade;
}());
exports.CommonFacade = CommonFacade;


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.4';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
      rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        if (isObject(srcValue)) {
          stack || (stack = new Stack);
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = object[key],
          srcValue = source[key],
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(args) {
      args.push(undefined, customDefaultsAssignIn);
      return apply(assignInWith, undefined, args);
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(163), __webpack_require__(461)(module)))

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mediator_mediator_1 = __webpack_require__(167);
var my1 = { 'flagName': 'keySwitchStatus', 'name': 'keySwitchPostion', 'status': 'start' };
var my2 = { 'flagName': 'faultStatus', 'name': 'TPS_Body_Fault', 'status': 'normal' };
var my3 = { 'flagName': 'sensorStatus', 'name': 'APPConnector', 'status': 'install' };
var my4 = { 'flagName': 'acceleratorStatus', 'name': 'GetAPPCurrentPostion', 'value': 32 };
var my5 = { 'flagName': 'multimeterProbeStatus', 'name': 'multimeterRedProbe', 'displayFlag': 'BATTConnector', 'value': 2 };
var my7 = { 'flagName': 'multimeterProbeStatus', 'name': 'multimeterBlackProbe', 'displayFlag': 'BATTConnector', 'value': 1 };
var my6 = { 'flagName': 'multimeterStallsStatus', 'name': 'DCVolt', 'displayFlag': 'V', 'value': 1 };
// class RunMethods{
//     protected webInData:WebTransferData;
//     protected modelOutDataMediator:ModelDataMediator;
//     protected modelOutData:ModelDataColleague;
//     protected obdOutData:OBDDataColleague;
//     constructor(){
//         this.webInData = new WebTransferData();
//         this.modelOutDataMediator = new ModelDataMediator();
//         this.modelOutData = new ModelDataColleague(modelOutDataMediator);
//         this.obdOutData = new OBDDataColleague(modelOutDataMediator);
//     }
//     getRunData(){
//          let webInData = new WebTransferData();
//          let modelOutDataMediator = new ModelDataMediator();
//          let modelOutData:ModelDataColleague = new ModelDataColleague(modelOutDataMediator);
//          let obdOutData:OBDDataColleague = new OBDDataColleague(modelOutDataMediator);
//     }
// }
var webInData = new mediator_mediator_1.WebTransferData();
webInData.setWebTransferData = my1;
webInData.setWebTransferData = my2;
webInData.setWebTransferData = my3;
webInData.setWebTransferData = my4;
webInData.setWebTransferData = my5;
webInData.setWebTransferData = my7;
webInData.setWebTransferData = my6;
var modelOutDataMediator = new mediator_mediator_1.ModelDataMediator();
var modelOutData = new mediator_mediator_1.ModelDataColleague(modelOutDataMediator);
var obdOutData = new mediator_mediator_1.OBDDataColleague(modelOutDataMediator);
var multimeter = new mediator_mediator_1.MultimeterDataColleague(modelOutDataMediator);
var my8 = modelOutData.getModelOutData('instrumentPanel');
var my9 = obdOutData.getOBDOutData('obdData');
var my10 = multimeter.getMultimeter('multimeter');
//console.log('my8:',my9)


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var instrumentPanel_mediator_1 = __webpack_require__(466);
//导入前置条件方法
var instrumentPanel_service_1 = __webpack_require__(58);
var InstrumentPanelDisplay = /** @class */ (function (_super) {
    __extends(InstrumentPanelDisplay, _super);
    function InstrumentPanelDisplay() {
        var _this = _super.call(this) || this;
        _this.colleague = new instrumentPanel_mediator_1.Colleague(_this.mediator);
        return _this;
    }
    return InstrumentPanelDisplay;
}(instrumentPanel_mediator_1.CreateMediator));
//发动机故障灯
var InstrumentPanelLedMIL = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedMIL, _super);
    function InstrumentPanelLedMIL() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelLedMIL.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelLedMIL;
}(InstrumentPanelDisplay));
//ABS灯
var InstrumentPanelLedABS = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedABS, _super);
    function InstrumentPanelLedABS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelLedABS.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelLedABS;
}(InstrumentPanelDisplay));
//制动灯
var InstrumentPanelLedBrake = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedBrake, _super);
    function InstrumentPanelLedBrake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelLedBrake.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelLedBrake;
}(InstrumentPanelDisplay));
//安全气囊灯
var InstrumentPanelLedSafeBag = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedSafeBag, _super);
    function InstrumentPanelLedSafeBag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelLedSafeBag.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelLedSafeBag;
}(InstrumentPanelDisplay));
//油压灯
var InstrumentPanelLedOilPressure = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedOilPressure, _super);
    function InstrumentPanelLedOilPressure() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelLedOilPressure.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelLedOilPressure;
}(InstrumentPanelDisplay));
//蓄电池灯
var InstrumentPanelLedBatt = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedBatt, _super);
    function InstrumentPanelLedBatt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelLedBatt.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelLedBatt;
}(InstrumentPanelDisplay));
//安全带灯
var InstrumentPanelLedSafeBelt = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedSafeBelt, _super);
    function InstrumentPanelLedSafeBelt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelLedSafeBelt.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelLedSafeBelt;
}(InstrumentPanelDisplay));
//仪表显示发动机转速
var InstrumentPanelEngineSpeed = /** @class */ (function (_super) {
    __extends(InstrumentPanelEngineSpeed, _super);
    function InstrumentPanelEngineSpeed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelEngineSpeed.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelEngineSpeed;
}(InstrumentPanelDisplay));
//仪表显示水温
var InstrumentPanelCoolantTemperature = /** @class */ (function (_super) {
    __extends(InstrumentPanelCoolantTemperature, _super);
    function InstrumentPanelCoolantTemperature() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelCoolantTemperature.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelCoolantTemperature;
}(InstrumentPanelDisplay));
//仪表显示车速
var InstrumentPanelVehicleSpeed = /** @class */ (function (_super) {
    __extends(InstrumentPanelVehicleSpeed, _super);
    function InstrumentPanelVehicleSpeed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelVehicleSpeed.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelVehicleSpeed;
}(InstrumentPanelDisplay));
//仪表显示油量
var InstrumentPanelOilVolume = /** @class */ (function (_super) {
    __extends(InstrumentPanelOilVolume, _super);
    function InstrumentPanelOilVolume() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    InstrumentPanelOilVolume.prototype.preconditionObject = function () {
        return {
            keySwitchPostion: this.colleague.keySwitchPostion(),
            installState: this.colleague.installState(this.sensorInstallMatchObject),
            fault: this.colleague.fault(this.currentFaultMatchObject),
            activeTest: this.colleague.activeTest(this.obdActiveTestMatchObject)
        };
    };
    return InstrumentPanelOilVolume;
}(InstrumentPanelDisplay));
//抽象仪表灯工厂
var InstrumentPanelFactory = /** @class */ (function () {
    function InstrumentPanelFactory() {
    }
    return InstrumentPanelFactory;
}());
//仪表灯工厂
var InstrumentPanelLedMILFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedMILFactory, _super);
    function InstrumentPanelLedMILFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelLedMILFactory.prototype.create = function () {
        var mil = new InstrumentPanelLedMIL();
        return mil;
    };
    return InstrumentPanelLedMILFactory;
}(InstrumentPanelFactory));
var InstrumentPanelLedABSFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedABSFactory, _super);
    function InstrumentPanelLedABSFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelLedABSFactory.prototype.create = function () {
        var abs = new InstrumentPanelLedABS();
        return abs;
    };
    return InstrumentPanelLedABSFactory;
}(InstrumentPanelFactory));
var InstrumentPanelLedBrakeFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedBrakeFactory, _super);
    function InstrumentPanelLedBrakeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelLedBrakeFactory.prototype.create = function () {
        var brake = new InstrumentPanelLedBrake();
        return brake;
    };
    return InstrumentPanelLedBrakeFactory;
}(InstrumentPanelFactory));
var InstrumentPanelLedSafeBagFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedSafeBagFactory, _super);
    function InstrumentPanelLedSafeBagFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelLedSafeBagFactory.prototype.create = function () {
        var safeBag = new InstrumentPanelLedSafeBag();
        return safeBag;
    };
    return InstrumentPanelLedSafeBagFactory;
}(InstrumentPanelFactory));
var InstrumentPanelLedOilPressureFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedOilPressureFactory, _super);
    function InstrumentPanelLedOilPressureFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelLedOilPressureFactory.prototype.create = function () {
        var oilPressure = new InstrumentPanelLedOilPressure();
        return oilPressure;
    };
    return InstrumentPanelLedOilPressureFactory;
}(InstrumentPanelFactory));
var InstrumentPanelLedBattFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedBattFactory, _super);
    function InstrumentPanelLedBattFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelLedBattFactory.prototype.create = function () {
        var batt = new InstrumentPanelLedBatt();
        return batt;
    };
    return InstrumentPanelLedBattFactory;
}(InstrumentPanelFactory));
var InstrumentPanelLedSafeBeltFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelLedSafeBeltFactory, _super);
    function InstrumentPanelLedSafeBeltFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelLedSafeBeltFactory.prototype.create = function () {
        var safeBelt = new InstrumentPanelLedSafeBelt();
        return safeBelt;
    };
    return InstrumentPanelLedSafeBeltFactory;
}(InstrumentPanelFactory));
var InstrumentPanelEngineSpeedFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelEngineSpeedFactory, _super);
    function InstrumentPanelEngineSpeedFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelEngineSpeedFactory.prototype.create = function () {
        var engineSpeed = new InstrumentPanelEngineSpeed();
        return engineSpeed;
    };
    return InstrumentPanelEngineSpeedFactory;
}(InstrumentPanelFactory));
var InstrumentPanelVehicleSpeedFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelVehicleSpeedFactory, _super);
    function InstrumentPanelVehicleSpeedFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelVehicleSpeedFactory.prototype.create = function () {
        return new InstrumentPanelVehicleSpeed();
        //let vehicleSpeed = new InstrumentPanelVehicleSpeed();   
        //return vehicleSpeed;
    };
    return InstrumentPanelVehicleSpeedFactory;
}(InstrumentPanelFactory));
var InstrumentPanelCoolantTemperatureFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelCoolantTemperatureFactory, _super);
    function InstrumentPanelCoolantTemperatureFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelCoolantTemperatureFactory.prototype.create = function () {
        var coolantTemp = new InstrumentPanelCoolantTemperature();
        return coolantTemp;
    };
    return InstrumentPanelCoolantTemperatureFactory;
}(InstrumentPanelFactory));
var InstrumentPanelOilVolumeFactory = /** @class */ (function (_super) {
    __extends(InstrumentPanelOilVolumeFactory, _super);
    function InstrumentPanelOilVolumeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstrumentPanelOilVolumeFactory.prototype.create = function () {
        var oilVolume = new InstrumentPanelOilVolume();
        return oilVolume;
    };
    return InstrumentPanelOilVolumeFactory;
}(InstrumentPanelFactory));
var InstrumentPanelDataOut = /** @class */ (function (_super) {
    __extends(InstrumentPanelDataOut, _super);
    function InstrumentPanelDataOut() {
        var _this = _super.call(this) || this;
        _this.mil = new InstrumentPanelLedMILFactory().create();
        _this.abs = new InstrumentPanelLedABSFactory().create();
        _this.brake = new InstrumentPanelLedBrakeFactory().create();
        _this.safeBag = new InstrumentPanelLedSafeBagFactory().create();
        _this.oilPressure = new InstrumentPanelLedOilPressureFactory().create();
        _this.batt = new InstrumentPanelLedBattFactory().create();
        _this.safeBelt = new InstrumentPanelLedSafeBeltFactory().create();
        _this.instrumentPanelEngineSpeed = new InstrumentPanelEngineSpeedFactory().create();
        _this.ledColleague = new instrumentPanel_mediator_1.LedColleague(_this.mediator);
        _this.instrumentPanelDataColleague = new instrumentPanel_mediator_1.InstrumentPanelDataColleague(_this.mediator);
        _this.dataOverload = new instrumentPanel_service_1.DataStreamComputerOverload();
        _this.vehicleSpeed = new InstrumentPanelVehicleSpeedFactory().create();
        _this.coolTemp = new InstrumentPanelCoolantTemperatureFactory().create();
        _this.oilVolume = new InstrumentPanelOilVolumeFactory().create();
        return _this;
    }
    return InstrumentPanelDataOut;
}(instrumentPanel_mediator_1.CreateMediator));
//获取满足条件的数据对象,存储到相应位置
var FilterMeetConditionInstrumentPanelData = /** @class */ (function (_super) {
    __extends(FilterMeetConditionInstrumentPanelData, _super);
    function FilterMeetConditionInstrumentPanelData() {
        var _this = _super.call(this) || this;
        _this.meetDataMIL = { 'name': 'mInstrumentPanelLedMIL' };
        _this.meetDataABS = { 'name': 'mInstrumentPanelLedABS' };
        _this.meetDataBrake = { 'name': 'mInstrumentPanelLedBrake' };
        _this.meetDataSafeBag = { 'name': 'mInstrumentPanelLedSafeBag' };
        _this.meetDataOilPressure = { 'name': 'mInstrumentPanelLedOilPressure' };
        _this.meetDataBatt = { 'name': 'mInstrumentPanelLedBatt' };
        _this.meetDataSafeBelt = { 'name': 'mInstrumentPanelLedSafeBelt' };
        _this.meetDataSpeed = { 'name': 'mInstrumentPanelEngineSpeed' };
        _this.meetDataVehicleSpeed = { 'name': 'mInstrumentPanelVehicleSpeed' };
        _this.meetDataCoolant = { 'name': 'mInstrumentPanelCoolantTemp' };
        _this.meetDataOilVolume = { 'name': 'mInstrumentPanelOilVolume' };
        return _this;
    }
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedMIL = function () {
        var mil = this.ledColleague.ledDataComputer(this.mil.preconditionObject(), this.meetDataMIL);
        //console.log('mil',mil)
        return mil;
    };
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedABS = function () {
        var abs = this.ledColleague.ledDataComputer(this.abs.preconditionObject(), this.meetDataABS);
        //console.log('abs',abs)
        return abs;
    };
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedBrake = function () {
        return this.ledColleague.ledDataComputer(this.brake.preconditionObject(), this.meetDataBrake);
    };
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedSafeBag = function () {
        return this.ledColleague.ledDataComputer(this.safeBag.preconditionObject(), this.meetDataSafeBag);
    };
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedOilPressure = function () {
        return this.ledColleague.ledDataComputer(this.oilPressure.preconditionObject(), this.meetDataOilPressure);
    };
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedBatt = function () {
        return this.ledColleague.ledDataComputer(this.batt.preconditionObject(), this.meetDataBatt);
    };
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedSafeBelt = function () {
        return this.ledColleague.ledDataComputer(this.safeBelt.preconditionObject(), this.meetDataSafeBelt);
    };
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedEngineSpeed = function () {
        var speedObject = this.ledColleague.engineSpeedDataObject(this.instrumentPanelEngineSpeed.preconditionObject(), this.meetDataSpeed);
        var newSpeedObject = this.dataOverload.overloadMethods(speedObject, 'rule', 'value', 'linearComputer', this.instrumentPanelDataColleague.engineSpeedDataCaculator());
        // console.log('newSpeedObject',newSpeedObject)
        return newSpeedObject;
    };
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedVehicleSpeed = function () {
        var speedObject = this.ledColleague.vehicleSpeedDataObject(this.vehicleSpeed.preconditionObject(), this.meetDataVehicleSpeed);
        var newSpeedObject = this.dataOverload.overloadMethods(speedObject, 'rule', 'value', 'linearComputer', this.instrumentPanelDataColleague.vehicleSpeedDataCaculator());
        // console.log('newSpeedObject',newSpeedObject)
        return newSpeedObject;
    };
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedCoolantTemp = function () {
        var speedObject = this.ledColleague.vehicleSpeedDataObject(this.coolTemp.preconditionObject(), this.meetDataCoolant);
        var newSpeedObject = this.dataOverload.overloadMethods(speedObject, 'rule', 'value', 'linearComputer', this.instrumentPanelDataColleague.coolantTempDataCaculator());
        // console.log('newSpeedObject',newSpeedObject)
        return newSpeedObject;
    };
    FilterMeetConditionInstrumentPanelData.prototype.instrumentPanelLedOilVolume = function () {
        var speedObject = this.ledColleague.vehicleSpeedDataObject(this.oilVolume.preconditionObject(), this.meetDataOilVolume);
        var newSpeedObject = this.dataOverload.overloadMethods(speedObject, 'rule', 'value', 'linearComputer', this.instrumentPanelDataColleague.oilVolumeDataCaculator());
        // console.log('newSpeedObject',newSpeedObject)
        return newSpeedObject;
    };
    return FilterMeetConditionInstrumentPanelData;
}(InstrumentPanelDataOut));
exports.FilterMeetConditionInstrumentPanelData = FilterMeetConditionInstrumentPanelData;


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mediator_commonObject_1 = __webpack_require__(24);
//数据流计算方法
var EngineSpeedComputerMethod = /** @class */ (function () {
    function EngineSpeedComputerMethod() {
        this.accelerator = new mediator_commonObject_1.Client();
    }
    EngineSpeedComputerMethod.prototype.engineSpeedCaculator = function () {
        var k = 20;
        return k * this.accelerator.preconditionObject.acceleratorPedalSourceData();
    };
    EngineSpeedComputerMethod.prototype.vehicleSpeedCaculator = function () {
        var speed = this.engineSpeedCaculator();
        var k = 100;
        var vehicleSpeed = speed / k;
        return vehicleSpeed;
    };
    EngineSpeedComputerMethod.prototype.coolantTempCaculator = function () {
        var speed = this.engineSpeedCaculator();
        var k = 100;
        var coolantTemp = speed / k * 2;
        return coolantTemp;
    };
    EngineSpeedComputerMethod.prototype.oilVolumeCaculator = function () {
        var oilVolume = 0.5;
        return oilVolume;
    };
    return EngineSpeedComputerMethod;
}());
exports.EngineSpeedComputerMethod = EngineSpeedComputerMethod;


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var instrumentPanel_service_1 = __webpack_require__(58);
var mediator_commonObject_1 = __webpack_require__(24);
var NullValueProcessing = /** @class */ (function () {
    function NullValueProcessing() {
        this.offLedDataObject = { 'id': 0, 'precondition_id': 9, 'name': 'mInstrumentPanelLedMIL', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' };
        this.onLedDataObject = { 'id': 0, 'precondition_id': 9, 'name': 'mInstrumentPanelLedMIL', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' };
        this.offDataStreamObject = { 'id': 0, 'precondition_id': 9, 'name': 'mInstrumentPanelEngineSpeed', 'value': 0, 'max': 0, 'min': 0, 'rule': 'fixed' };
        this.arr = [
            { 'id': 0, 'precondition_id': 9, 'name': 'mInstrumentPanelLedMIL', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
            { 'id': 0, 'precondition_id': 9, 'name': 'mInstrumentPanelLedABS', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
        ];
        this.client = new mediator_commonObject_1.Client();
    }
    NullValueProcessing.prototype.nullValueProcessingMethods = function (filterObject, key /*,key1:any*/) {
        var keySwitch = this.client.preconditionObject.keySwitchSourceData();
        switch (keySwitch) {
            case 'on':
                return instrumentPanel_service_1.nullProcessing(this.onLedDataObject, filterObject, key);
            default:
                //return nullProcessing1(filterObject,key,key1,this.arr)
                return instrumentPanel_service_1.nullProcessing(this.offLedDataObject, filterObject, key);
        }
    };
    NullValueProcessing.prototype.dataStreamNullValueProcessingMethods = function (filterObject, key) {
        var keySwitch = this.client.preconditionObject.keySwitchSourceData();
        switch (keySwitch) {
            case 'on':
                return instrumentPanel_service_1.nullProcessing(this.offDataStreamObject, filterObject, key);
            default:
                return instrumentPanel_service_1.nullProcessing(this.offDataStreamObject, filterObject, key);
        }
    };
    return NullValueProcessing;
}());
exports.NullValueProcessing = NullValueProcessing;


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mediator_commonObject_1 = __webpack_require__(24);
var data_instrumentPanelModuleData_1 = __webpack_require__(473);
var instrumentPanel_service_1 = __webpack_require__(58);
var instrumentPanel_dataCaculator_1 = __webpack_require__(464);
var instrumentPanel_init_1 = __webpack_require__(465);
// import{
//   nullProcessing1,
// } from '../instrumentPanel/instrumentPanel.service'
/**
 * @inner
 * @class AbstractMediator 抽象中介方法，定义父类构造函数和抽象的执行方法
 * @returns
 */
var AbstractMediator = /** @class */ (function () {
    function AbstractMediator() {
        this.instrumentPanel = new mediator_commonObject_1.Client();
        this.preconditionStatus = new instrumentPanel_service_1.PreconditionProcessingMethod();
        this.dataOutput = new instrumentPanel_service_1.FindMeetConditionData();
        // this.dataOverload = new DataStreamComputerOverload();
        this.dataCaculator = new instrumentPanel_dataCaculator_1.EngineSpeedComputerMethod();
    }
    return AbstractMediator;
}());
/**
 * @inner
 * @class Mediator 抽象中介方法的实现，主要用来和外部模块交换信息，内部模块数据处理
 * @returns
 */
var Mediator = /** @class */ (function (_super) {
    __extends(Mediator, _super);
    function Mediator() {
        return _super.call(this) || this;
    }
    Mediator.prototype.execute = function (str, filterObject) {
        switch (str) {
            case "sensorObject":
                var sensorObject = this.instrumentPanel.preconditionObject.sensorSourceData();
                return this.preconditionStatus.sensorInstallInfluence(sensorObject, filterObject);
            case "faultObject":
                var faultObject = this.instrumentPanel.preconditionObject.faultSourceData();
                return this.preconditionStatus.currentFaultInfluence(faultObject, filterObject);
            case "activeObject":
                var activeObject = this.instrumentPanel.preconditionObject.activeTestSourceData();
                return this.preconditionStatus.obdActiveTestInfulence(activeObject, filterObject);
            default:
                return "execute methods nothing happen";
        }
    };
    Mediator.prototype.execute2 = function (str) {
        switch (str) {
            case "keySwitchObject":
                return this.instrumentPanel.preconditionObject.keySwitchSourceData();
            case "acceleratorPedalObject":
                return this.instrumentPanel.preconditionObject.acceleratorPedalSourceData();
            default:
                return "execute2 methods nothing happen";
        }
    };
    Mediator.prototype.execute3 = function (str, preconditionObject, filterObject) {
        var nullValue = new instrumentPanel_init_1.NullValueProcessing();
        switch (str) {
            case "Led":
                var led = this.dataOutput.filterMethods(data_instrumentPanelModuleData_1.instrumentPanelLedPrecondition, preconditionObject, data_instrumentPanelModuleData_1.InstrumentPanelLed, filterObject, 'id');
                if (led.length == 0) {
                    //let nullValue = new NullValueProcessing();                      
                    led = nullValue.nullValueProcessingMethods(filterObject, 'name');
                    //let led = nullValue.nullValueProcessingMethods(filterObject,'name','value')
                }
                return led;
            case "InstrumentPanelEngineSpeed":
                var speed = this.dataOutput.filterMethods(data_instrumentPanelModuleData_1.instrumentPanelLedPrecondition, preconditionObject, data_instrumentPanelModuleData_1.InstrumentPanelData, filterObject, 'id');
                if (speed.length == 0) {
                    //let nullValue = new NullValueProcessing();                      
                    speed = nullValue.dataStreamNullValueProcessingMethods(filterObject, 'name');
                }
                return speed;
            case "InstrumentPanelVehicleSpeed":
                var vehicleSpeed = this.dataOutput.filterMethods(data_instrumentPanelModuleData_1.instrumentPanelLedPrecondition, preconditionObject, data_instrumentPanelModuleData_1.InstrumentPanelData, filterObject, 'id');
                if (vehicleSpeed.length == 0) {
                    vehicleSpeed = nullValue.dataStreamNullValueProcessingMethods(filterObject, 'name');
                }
                return vehicleSpeed;
            default:
                return "execute3 methods nothing happen";
        }
    };
    Mediator.prototype.execute4 = function (str) {
        switch (str) {
            case "engineSpeedCaculator":
                //this.dataCaculator.acceleratorPedalPosition = this.execute2("acceleratorPedalObject");                   
                return this.dataCaculator.engineSpeedCaculator();
            case "vehicleSpeedCaculator":
                return this.dataCaculator.vehicleSpeedCaculator();
            case "coolantTempCaculator":
                return this.dataCaculator.coolantTempCaculator();
            case "oilVolumeCaculator":
                return this.dataCaculator.oilVolumeCaculator();
            default:
                return "execute method nothing happen";
        }
    };
    return Mediator;
}(AbstractMediator));
/**
 * @inner
 * @class AbstractColleague 抽象成员类
 * @returns
 */
var AbstractColleague = /** @class */ (function () {
    function AbstractColleague(mediator) {
        this.mediator = mediator;
    }
    return AbstractColleague;
}());
/**
 * @inner
 * @class Colleague 具体成员类，实现各自的方法,此处为公共对象的实现类
 * @returns
 */
var Colleague = /** @class */ (function (_super) {
    __extends(Colleague, _super);
    function Colleague(mediator) {
        return _super.call(this, mediator) || this;
    }
    Colleague.prototype.keySwitchPostion = function () {
        return this.mediator.execute2("keySwitchObject");
    };
    Colleague.prototype.installState = function (filterObject) {
        return this.mediator.execute("sensorObject", filterObject);
    };
    Colleague.prototype.fault = function (filterObject) {
        return this.mediator.execute("faultObject", filterObject);
    };
    Colleague.prototype.activeTest = function (filterObject) {
        return this.mediator.execute("activeObject", filterObject);
    };
    return Colleague;
}(AbstractColleague));
exports.Colleague = Colleague;
/**
 * @inner
 * @class LedColleague 具体成员类，实现各自的方法,此处为仪表灯的实现类
 * @returns
 */
var LedColleague = /** @class */ (function (_super) {
    __extends(LedColleague, _super);
    function LedColleague(mediator) {
        return _super.call(this, mediator) || this;
    }
    LedColleague.prototype.ledDataComputer = function (preconditionObject, filterObject) {
        return this.mediator.execute3('Led', preconditionObject, filterObject);
    };
    //   acceleratorPedalPosition(){
    //       return this.mediator.execute2("acceleratorPedalObject");
    //   }   
    LedColleague.prototype.engineSpeedDataObject = function (preconditionObject, filterObject) {
        return this.mediator.execute3('InstrumentPanelEngineSpeed', preconditionObject, filterObject);
    };
    LedColleague.prototype.vehicleSpeedDataObject = function (preconditionObject, filterObject) {
        return this.mediator.execute3('InstrumentPanelVehicleSpeed', preconditionObject, filterObject);
    };
    return LedColleague;
}(AbstractColleague));
exports.LedColleague = LedColleague;
/**
 * @inner
 * @class InstrumentPanelDataColleague 具体成员类，实现各自的方法,此处为仪表转速的实现类
 * @returns
 */
var InstrumentPanelDataColleague = /** @class */ (function (_super) {
    __extends(InstrumentPanelDataColleague, _super);
    function InstrumentPanelDataColleague(mediator) {
        return _super.call(this, mediator) || this;
    }
    InstrumentPanelDataColleague.prototype.engineSpeedDataCaculator = function () {
        return this.mediator.execute4('engineSpeedCaculator');
    };
    InstrumentPanelDataColleague.prototype.vehicleSpeedDataCaculator = function () {
        return this.mediator.execute4('vehicleSpeedCaculator');
    };
    InstrumentPanelDataColleague.prototype.coolantTempDataCaculator = function () {
        return this.mediator.execute4('coolantTempCaculator');
    };
    InstrumentPanelDataColleague.prototype.oilVolumeDataCaculator = function () {
        return this.mediator.execute4('oilVolumeCaculator');
    };
    return InstrumentPanelDataColleague;
}(AbstractColleague));
exports.InstrumentPanelDataColleague = InstrumentPanelDataColleague;
/**
 * @inner
 * @class  场景类，增加中介者，传递到具体成员类中
 * @returns
 */
var CreateMediator = /** @class */ (function () {
    function CreateMediator() {
        this.mediator = new Mediator();
    }
    return CreateMediator;
}());
exports.CreateMediator = CreateMediator;
// class MyCilent1 extends CreateMediator{
//     my1 = new Colleague(this.mediator);//示例1
// }
// class MyClient2 extends CreateMediator{
//     my2 = new LedColleague(this.mediator); //示例2
// }


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(25);
//导入数据库中仪表数据
var data_sensorModuleMeasureData_1 = __webpack_require__(474);
//导入前置条件方法
var multimeter_service_1 = __webpack_require__(165);
var data_commonModuleParameter_1 = __webpack_require__(61);
var multimeter_mediator_1 = __webpack_require__(164);
//抽象万用表对象类
var MultimeterPrecondition = /** @class */ (function () {
    function MultimeterPrecondition() {
        this.preconditionObject = new multimeter_mediator_1.MultimeterPreconditionObject();
    }
    return MultimeterPrecondition;
}());
//万用表
var MultimeterRedMeasurePrecondition = /** @class */ (function (_super) {
    __extends(MultimeterRedMeasurePrecondition, _super);
    function MultimeterRedMeasurePrecondition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    MultimeterRedMeasurePrecondition.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.multimeterPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.multimeterPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.multimeterPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.multimeterPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return MultimeterRedMeasurePrecondition;
}(MultimeterPrecondition));
var MultimeterBlackMeasurePrecondition = /** @class */ (function (_super) {
    __extends(MultimeterBlackMeasurePrecondition, _super);
    function MultimeterBlackMeasurePrecondition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    MultimeterBlackMeasurePrecondition.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.multimeterPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.multimeterPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.multimeterPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.multimeterPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return MultimeterBlackMeasurePrecondition;
}(MultimeterPrecondition));
//抽象仪表灯工厂
var MultimeterFactory = /** @class */ (function () {
    function MultimeterFactory() {
    }
    return MultimeterFactory;
}());
var MultimeterRedMeasureFactory = /** @class */ (function (_super) {
    __extends(MultimeterRedMeasureFactory, _super);
    function MultimeterRedMeasureFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultimeterRedMeasureFactory.prototype.create = function () {
        var multimeter = new MultimeterRedMeasurePrecondition();
        return multimeter;
    };
    return MultimeterRedMeasureFactory;
}(MultimeterFactory));
var MultimeterBlackMeasureFactory = /** @class */ (function (_super) {
    __extends(MultimeterBlackMeasureFactory, _super);
    function MultimeterBlackMeasureFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultimeterBlackMeasureFactory.prototype.create = function () {
        var multimeter = new MultimeterBlackMeasurePrecondition();
        return multimeter;
    };
    return MultimeterBlackMeasureFactory;
}(MultimeterFactory));
var PreconditionObjectFacade = /** @class */ (function () {
    function PreconditionObjectFacade() {
        this.multimeterRedPrecondition = new MultimeterRedMeasureFactory().create();
        this.multimeterBlackPrecondition = new MultimeterBlackMeasureFactory().create();
        // getPrecondition(str:String){
        //     switch(str){
        //         case 'Red':
        //            this.multimeterRedPrecondition.getPreconditionObject();
        //            break;
        //         case 'Black':
        //            this.multimeterBlackPrecondition.getPreconditionObject();
        //            break;
        //         default :
        //            break;
        //     }
        // }   
    }
    //private multimeterMeasureMethod = new FindMeetConditionMeasureData();
    PreconditionObjectFacade.prototype.getPreconditionRed = function () {
        var preconditionObject = this.multimeterRedPrecondition.getPreconditionObject();
        return preconditionObject;
    };
    PreconditionObjectFacade.prototype.getPreconditionBlack = function () {
        var preconditionObject = this.multimeterBlackPrecondition.getPreconditionObject();
        return preconditionObject;
    };
    return PreconditionObjectFacade;
}());
var MultimeterProbeAndMeasureSensor = /** @class */ (function () {
    function MultimeterProbeAndMeasureSensor() {
        this.redProbeObject = { 'name': 'multimeterRedProbe' };
        this.blackProbeObject = { 'name': 'multimeterBlackProbe' };
    }
    MultimeterProbeAndMeasureSensor.prototype.redProbe = function () {
        return multimeter_service_1.probeValueAndSensorNameFilter(data_commonModuleParameter_1.multimeterProbe, this.redProbeObject, 'value');
    };
    MultimeterProbeAndMeasureSensor.prototype.blackProbe = function () {
        return multimeter_service_1.probeValueAndSensorNameFilter(data_commonModuleParameter_1.multimeterProbe, this.blackProbeObject, 'value');
    };
    MultimeterProbeAndMeasureSensor.prototype.redMeasureSensor = function () {
        return multimeter_service_1.probeValueAndSensorNameFilter(data_commonModuleParameter_1.multimeterProbe, this.redProbeObject, 'displayFlag');
    };
    MultimeterProbeAndMeasureSensor.prototype.blackMeasureSensor = function () {
        return multimeter_service_1.probeValueAndSensorNameFilter(data_commonModuleParameter_1.multimeterProbe, this.blackProbeObject, 'displayFlag');
    };
    return MultimeterProbeAndMeasureSensor;
}());
var MultimeterMeasureHotObject = /** @class */ (function () {
    function MultimeterMeasureHotObject() {
    }
    MultimeterMeasureHotObject.prototype.measureHotZone = function (probe) {
        return multimeter_service_1.measureHotObject(probe);
    };
    return MultimeterMeasureHotObject;
}());
var MeasurePrecondition = /** @class */ (function () {
    function MeasurePrecondition() {
        this.preconditionFacade = new PreconditionObjectFacade();
    }
    // construct(){
    //    this.preconditionFacade = new PreconditionObjectFacade();       
    // }
    MeasurePrecondition.prototype.getMeasurePreconditionIdRed = function () {
        var measurePrecondition = this.preconditionFacade.getPreconditionRed();
        var measurePreconditionId = multimeter_service_1.probeValueAndSensorNameFilter(data_sensorModuleMeasureData_1.sensorMeasurePrecondition, measurePrecondition, 'id');
        return measurePreconditionId;
    };
    MeasurePrecondition.prototype.getMeasurePreconditionIdBlack = function () {
        var measurePrecondition = this.preconditionFacade.getPreconditionBlack();
        var measurePreconditionId = multimeter_service_1.probeValueAndSensorNameFilter(data_sensorModuleMeasureData_1.sensorMeasurePrecondition, measurePrecondition, 'id');
        return measurePreconditionId;
    };
    return MeasurePrecondition;
}());
var AbstractMultimeterMeasure = /** @class */ (function () {
    function AbstractMultimeterMeasure() {
        this.currentMeasureSensor = new MultimeterProbeAndMeasureSensor();
    }
    return AbstractMultimeterMeasure;
}());
var MultimeterProbeMeasureSensorAndPointId = /** @class */ (function (_super) {
    __extends(MultimeterProbeMeasureSensorAndPointId, _super);
    function MultimeterProbeMeasureSensorAndPointId() {
        var _this = _super.call(this) || this;
        _this.sensorObject = { 'BATTConnector': data_sensorModuleMeasureData_1.BATTConnector, 'MAFConnector': data_sensorModuleMeasureData_1.MAFConnector, 'APPConnector': data_sensorModuleMeasureData_1.APPConnector, 'TPSConnector': data_sensorModuleMeasureData_1.TPSConnector, 'MAFBody': data_sensorModuleMeasureData_1.MAFBody, 'TPSBody': data_sensorModuleMeasureData_1.TPSBody };
        _this.currentProbe = new MultimeterMeasureHotObject();
        return _this;
    }
    MultimeterProbeMeasureSensorAndPointId.prototype.getMeasurePointIdRed = function () {
        var currentProbeMeasureSensor = this.currentMeasureSensor.redMeasureSensor();
        var probe = this.currentMeasureSensor.redProbe();
        var measureHotPointObject = this.currentProbe.measureHotZone(probe);
        var measurePointId = multimeter_service_1.getMeasurePointId(this.sensorObject, currentProbeMeasureSensor, measureHotPointObject);
        return measurePointId;
    };
    MultimeterProbeMeasureSensorAndPointId.prototype.getMeasurePointIdBlack = function () {
        var currentProbeMeasureSensor = this.currentMeasureSensor.blackMeasureSensor();
        var probe = this.currentMeasureSensor.blackProbe();
        var measureHotPointObject = this.currentProbe.measureHotZone(probe);
        var measurePointId = multimeter_service_1.getMeasurePointId(this.sensorObject, currentProbeMeasureSensor, measureHotPointObject);
        return measurePointId;
    };
    MultimeterProbeMeasureSensorAndPointId.prototype.getMeasureSensorNameRed = function () {
        var currentRedProbeMeasureSensor = this.currentMeasureSensor.redMeasureSensor();
        return currentRedProbeMeasureSensor;
    };
    MultimeterProbeMeasureSensorAndPointId.prototype.getMeasureSensorNameBlack = function () {
        var currentRedProbeMeasureSensor = this.currentMeasureSensor.blackMeasureSensor();
        return currentRedProbeMeasureSensor;
    };
    return MultimeterProbeMeasureSensorAndPointId;
}(AbstractMultimeterMeasure));
var MultimeterMeasureCombineCondition = /** @class */ (function () {
    function MultimeterMeasureCombineCondition() {
        this.measure = new MultimeterProbeMeasureSensorAndPointId();
        this.precondition = new MeasurePrecondition();
    }
    MultimeterMeasureCombineCondition.prototype.getRedProbeMeasureCondition = function () {
        var measurePointId = this.measure.getMeasurePointIdRed();
        if (measurePointId == undefined) {
            return 9999;
        }
        var sensorName = this.measure.getMeasureSensorNameRed();
        var preconditionId = this.precondition.getMeasurePreconditionIdRed();
        var measureCondition = multimeter_service_1.combineObjectMethods(measurePointId, sensorName, preconditionId);
        return measureCondition;
    };
    MultimeterMeasureCombineCondition.prototype.getBlackProbeMeasureCondition = function () {
        var measurePointId = this.measure.getMeasurePointIdBlack();
        if (measurePointId == undefined) {
            return 9999;
        }
        var sensorName = this.measure.getMeasureSensorNameBlack();
        var preconditionId = this.precondition.getMeasurePreconditionIdBlack();
        var measureCondition = multimeter_service_1.combineObjectMethods(measurePointId, sensorName, preconditionId);
        return measureCondition;
    };
    MultimeterMeasureCombineCondition.prototype.getOhmRedProbeMeasureCondition = function () {
        var measurePointId = this.measure.getMeasurePointIdRed();
        if (measurePointId == undefined) {
            return 9999;
        }
        var sensorName = this.measure.getMeasureSensorNameRed();
        var preconditionId = this.precondition.getMeasurePreconditionIdRed();
        var measureCondition = multimeter_service_1.combineObjectMethods(measurePointId, sensorName, preconditionId);
        return measureCondition;
    };
    MultimeterMeasureCombineCondition.prototype.getOhmBlackProbeMeasureCondition = function () {
        var measurePointId = this.measure.getMeasurePointIdBlack();
        if (measurePointId == undefined) {
            return 9999;
        }
        var sensorName = this.measure.getMeasureSensorNameBlack();
        var preconditionId = this.precondition.getMeasurePreconditionIdBlack();
        var measureCondition = multimeter_service_1.combineObjectMethods2(measurePointId, sensorName, preconditionId);
        return measureCondition;
    };
    MultimeterMeasureCombineCondition.prototype.getOhmMeasureCondition = function () {
        var red = this.getOhmRedProbeMeasureCondition();
        var black = this.getOhmBlackProbeMeasureCondition();
        var ohmMeasureCondition = _.assign(red, black);
        return ohmMeasureCondition;
    };
    return MultimeterMeasureCombineCondition;
}());
var MultimeterMeasureData = /** @class */ (function () {
    function MultimeterMeasureData() {
        this.multimeterStallsObject = { 'value': 1 };
        this.combineCondition = new MultimeterMeasureCombineCondition();
    }
    MultimeterMeasureData.prototype.getMultimeterMeasureData = function () {
        var stalls = multimeter_service_1.probeValueAndSensorNameFilter(data_commonModuleParameter_1.multimeterStalls, this.multimeterStallsObject, 'name');
        if (this.combineCondition.getRedProbeMeasureCondition() == 9999 || this.combineCondition.getBlackProbeMeasureCondition() == 9999 || this.combineCondition.getOhmRedProbeMeasureCondition() == 9999 || this.combineCondition.getOhmBlackProbeMeasureCondition() == 9999) {
            return 0;
        }
        if ('DCVolt' == stalls) {
            var redMeasureCondition = this.combineCondition.getRedProbeMeasureCondition();
            var redVolt = multimeter_service_1.probeValueAndSensorNameFilter(data_sensorModuleMeasureData_1.sensorMeasureVolt, redMeasureCondition, 'value');
            var blackVolt = multimeter_service_1.probeValueAndSensorNameFilter(data_sensorModuleMeasureData_1.sensorMeasureVolt, this.combineCondition.getBlackProbeMeasureCondition(), 'value');
            this.multimeterVoltValue = _.subtract(redVolt, blackVolt);
            if (undefined === this.multimeterVoltValue) {
                this.multimeterVoltValue = 0;
            }
            //console.log('this.multimeterVoltValue :',this.multimeterVoltValue)
            return this.multimeterVoltValue;
        }
        if ('Pass2Ohm' == stalls) {
            var redMeasureCondition = this.combineCondition.getOhmMeasureCondition();
            var ohmId = multimeter_service_1.probeValueAndSensorNameFilter(data_sensorModuleMeasureData_1.sensorMeasureOhm, redMeasureCondition, 'OhmTable_id');
            var multimeterOhmListObject = { 'id': ohmId };
            this.multimterOhmValue = multimeter_service_1.probeValueAndSensorNameFilter(data_sensorModuleMeasureData_1.OhmTable, multimeterOhmListObject, 'value');
            if (undefined === this.multimterOhmValue) {
                this.multimterOhmValue = 0;
            }
            // console.log('this.multimterOhmValue :',this.multimterOhmValue)
            return this.multimterOhmValue;
        }
    };
    return MultimeterMeasureData;
}());
exports.MultimeterMeasureData = MultimeterMeasureData;
// let my = new MultimeterMeasureData();
// let my0 = my.findMeasureData();
// let my1 = my.getVoltValue();
// let my2 = my.getOhmValue();
// console.log('my0:',my0)
// console.log('my1:',my1)
// console.log('my2:',my2)


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//导入数据库中诊断仪数据
var data_engineModuleRundata_1 = __webpack_require__(472);
var onBoardDiagnostics_service_1 = __webpack_require__(60);
var onBoardDiagnostics_mediator_1 = __webpack_require__(59);
var onBoardDiagnostics_init_1 = __webpack_require__(470);
//抽象诊断仪对象类
var OnBoardDiagnosticsObjectPrecondition = /** @class */ (function () {
    function OnBoardDiagnosticsObjectPrecondition() {
        this.preconditionObject = new onBoardDiagnostics_mediator_1.OnBoardDiagnosticsPreconditionObject();
    }
    return OnBoardDiagnosticsObjectPrecondition;
}());
//诊断仪发动机转速
var ProconditionEngineSpeed = /** @class */ (function (_super) {
    __extends(ProconditionEngineSpeed, _super);
    function ProconditionEngineSpeed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionEngineSpeed.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionEngineSpeed;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionMAF = /** @class */ (function (_super) {
    __extends(ProconditionMAF, _super);
    function ProconditionMAF() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionMAF.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionMAF;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionInjectorTime = /** @class */ (function (_super) {
    __extends(ProconditionInjectorTime, _super);
    function ProconditionInjectorTime() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionInjectorTime.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionInjectorTime;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionVehicleSpeed = /** @class */ (function (_super) {
    __extends(ProconditionVehicleSpeed, _super);
    function ProconditionVehicleSpeed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionVehicleSpeed.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionVehicleSpeed;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionCoolantTemp = /** @class */ (function (_super) {
    __extends(ProconditionCoolantTemp, _super);
    function ProconditionCoolantTemp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionCoolantTemp.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionCoolantTemp;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionIntakeAir = /** @class */ (function (_super) {
    __extends(ProconditionIntakeAir, _super);
    function ProconditionIntakeAir() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionIntakeAir.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionIntakeAir;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionBattVolt = /** @class */ (function (_super) {
    __extends(ProconditionBattVolt, _super);
    function ProconditionBattVolt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionBattVolt.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionBattVolt;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionAccelerateSensorNo1 = /** @class */ (function (_super) {
    __extends(ProconditionAccelerateSensorNo1, _super);
    function ProconditionAccelerateSensorNo1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionAccelerateSensorNo1.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionAccelerateSensorNo1;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionAccelerateSensorNo2 = /** @class */ (function (_super) {
    __extends(ProconditionAccelerateSensorNo2, _super);
    function ProconditionAccelerateSensorNo2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionAccelerateSensorNo2.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionAccelerateSensorNo2;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionTpsSensorVolt = /** @class */ (function (_super) {
    __extends(ProconditionTpsSensorVolt, _super);
    function ProconditionTpsSensorVolt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionTpsSensorVolt.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionTpsSensorVolt;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionTpsSensor2Volt = /** @class */ (function (_super) {
    __extends(ProconditionTpsSensor2Volt, _super);
    function ProconditionTpsSensor2Volt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionTpsSensor2Volt.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionTpsSensor2Volt;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionEvapVsv = /** @class */ (function (_super) {
    __extends(ProconditionEvapVsv, _super);
    function ProconditionEvapVsv() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionEvapVsv.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionEvapVsv;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionEvapPurgeFlow = /** @class */ (function (_super) {
    __extends(ProconditionEvapPurgeFlow, _super);
    function ProconditionEvapPurgeFlow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionEvapPurgeFlow.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionEvapPurgeFlow;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionEvapPurgeDensityLearnValue = /** @class */ (function (_super) {
    __extends(ProconditionEvapPurgeDensityLearnValue, _super);
    function ProconditionEvapPurgeDensityLearnValue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionEvapPurgeDensityLearnValue.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionEvapPurgeDensityLearnValue;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionEvapPurgeVSV = /** @class */ (function (_super) {
    __extends(ProconditionEvapPurgeVSV, _super);
    function ProconditionEvapPurgeVSV() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionEvapPurgeVSV.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionEvapPurgeVSV;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionTargetAFRatio = /** @class */ (function (_super) {
    __extends(ProconditionTargetAFRatio, _super);
    function ProconditionTargetAFRatio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionTargetAFRatio.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionTargetAFRatio;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionAFLambadaB1S1 = /** @class */ (function (_super) {
    __extends(ProconditionAFLambadaB1S1, _super);
    function ProconditionAFLambadaB1S1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionAFLambadaB1S1.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionAFLambadaB1S1;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionAFVoltB1S1 = /** @class */ (function (_super) {
    __extends(ProconditionAFVoltB1S1, _super);
    function ProconditionAFVoltB1S1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionAFVoltB1S1.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionAFVoltB1S1;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionAFCurrentB1S1 = /** @class */ (function (_super) {
    __extends(ProconditionAFCurrentB1S1, _super);
    function ProconditionAFCurrentB1S1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionAFCurrentB1S1.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionAFCurrentB1S1;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionFuelSFT = /** @class */ (function (_super) {
    __extends(ProconditionFuelSFT, _super);
    function ProconditionFuelSFT() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionFuelSFT.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionFuelSFT;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionFuelLFT = /** @class */ (function (_super) {
    __extends(ProconditionFuelLFT, _super);
    function ProconditionFuelLFT() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionFuelLFT.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionFuelLFT;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionIgnAdvance = /** @class */ (function (_super) {
    __extends(ProconditionIgnAdvance, _super);
    function ProconditionIgnAdvance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionIgnAdvance.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionIgnAdvance;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionIgnCount = /** @class */ (function (_super) {
    __extends(ProconditionIgnCount, _super);
    function ProconditionIgnCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionIgnCount.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionIgnCount;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionCylinder1MisCount = /** @class */ (function (_super) {
    __extends(ProconditionCylinder1MisCount, _super);
    function ProconditionCylinder1MisCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionCylinder1MisCount.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionCylinder1MisCount;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionCylinder2MisCount = /** @class */ (function (_super) {
    __extends(ProconditionCylinder2MisCount, _super);
    function ProconditionCylinder2MisCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionCylinder2MisCount.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionCylinder2MisCount;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionCylinder3MisCount = /** @class */ (function (_super) {
    __extends(ProconditionCylinder3MisCount, _super);
    function ProconditionCylinder3MisCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionCylinder3MisCount.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionCylinder3MisCount;
}(OnBoardDiagnosticsObjectPrecondition));
var ProconditionCylinder4MisCount = /** @class */ (function (_super) {
    __extends(ProconditionCylinder4MisCount, _super);
    function ProconditionCylinder4MisCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentFaultMatchObject = { 'TPS_Body_Fault': 'normal' };
        _this.sensorInstallMatchObject = { 'BATTConnector': 'install' };
        _this.obdActiveTestMatchObject = { 'ActiveTest': 'notActiveTest' };
        return _this;
    }
    ProconditionCylinder4MisCount.prototype.getPreconditionObject = function () {
        return {
            keySwitchPostion: this.preconditionObject.obdPreconditionObjectKeySwitch(),
            installState: this.preconditionObject.obdPreconditionObjectSensor(this.sensorInstallMatchObject),
            fault: this.preconditionObject.obdPreconditionObjectFault(this.currentFaultMatchObject),
            activeTest: this.preconditionObject.obdPreconditionObjectActiveTest(this.obdActiveTestMatchObject)
        };
    };
    return ProconditionCylinder4MisCount;
}(OnBoardDiagnosticsObjectPrecondition));
//抽象工厂
var onBoardDiagnosticsFactory = /** @class */ (function () {
    function onBoardDiagnosticsFactory() {
    }
    return onBoardDiagnosticsFactory;
}());
var OnBoardDiagnosticsFactoryEngineSpeed = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryEngineSpeed, _super);
    function OnBoardDiagnosticsFactoryEngineSpeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryEngineSpeed.prototype.create = function () {
        var engineSpeed = new ProconditionEngineSpeed();
        return engineSpeed;
    };
    return OnBoardDiagnosticsFactoryEngineSpeed;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryMAF = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryMAF, _super);
    function OnBoardDiagnosticsFactoryMAF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryMAF.prototype.create = function () {
        var MAF = new ProconditionMAF();
        return MAF;
    };
    return OnBoardDiagnosticsFactoryMAF;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryInjectorTime = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryInjectorTime, _super);
    function OnBoardDiagnosticsFactoryInjectorTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryInjectorTime.prototype.create = function () {
        var injector = new ProconditionInjectorTime();
        return injector;
    };
    return OnBoardDiagnosticsFactoryInjectorTime;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryVehicleSpeed = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryVehicleSpeed, _super);
    function OnBoardDiagnosticsFactoryVehicleSpeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryVehicleSpeed.prototype.create = function () {
        var data = new ProconditionVehicleSpeed();
        return data;
    };
    return OnBoardDiagnosticsFactoryVehicleSpeed;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryCoolantTemp = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryCoolantTemp, _super);
    function OnBoardDiagnosticsFactoryCoolantTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryCoolantTemp.prototype.create = function () {
        var data = new ProconditionCoolantTemp();
        return data;
    };
    return OnBoardDiagnosticsFactoryCoolantTemp;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryIntakeAir = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryIntakeAir, _super);
    function OnBoardDiagnosticsFactoryIntakeAir() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryIntakeAir.prototype.create = function () {
        var data = new ProconditionIntakeAir();
        return data;
    };
    return OnBoardDiagnosticsFactoryIntakeAir;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryBattVolt = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryBattVolt, _super);
    function OnBoardDiagnosticsFactoryBattVolt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryBattVolt.prototype.create = function () {
        var data = new ProconditionBattVolt();
        return data;
    };
    return OnBoardDiagnosticsFactoryBattVolt;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryAccelerateSensorNo1 = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryAccelerateSensorNo1, _super);
    function OnBoardDiagnosticsFactoryAccelerateSensorNo1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryAccelerateSensorNo1.prototype.create = function () {
        var data = new ProconditionAccelerateSensorNo1();
        return data;
    };
    return OnBoardDiagnosticsFactoryAccelerateSensorNo1;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryAccelerateSensorNo2 = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryAccelerateSensorNo2, _super);
    function OnBoardDiagnosticsFactoryAccelerateSensorNo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryAccelerateSensorNo2.prototype.create = function () {
        var data = new ProconditionAccelerateSensorNo2();
        return data;
    };
    return OnBoardDiagnosticsFactoryAccelerateSensorNo2;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryTpsSensorVolt = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryTpsSensorVolt, _super);
    function OnBoardDiagnosticsFactoryTpsSensorVolt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryTpsSensorVolt.prototype.create = function () {
        var data = new ProconditionTpsSensorVolt();
        return data;
    };
    return OnBoardDiagnosticsFactoryTpsSensorVolt;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryTpsSensor2Volt = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryTpsSensor2Volt, _super);
    function OnBoardDiagnosticsFactoryTpsSensor2Volt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryTpsSensor2Volt.prototype.create = function () {
        var data = new ProconditionTpsSensor2Volt();
        return data;
    };
    return OnBoardDiagnosticsFactoryTpsSensor2Volt;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryEvapVsv = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryEvapVsv, _super);
    function OnBoardDiagnosticsFactoryEvapVsv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryEvapVsv.prototype.create = function () {
        var data = new ProconditionEvapVsv();
        return data;
    };
    return OnBoardDiagnosticsFactoryEvapVsv;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryEvapPurgeFlow = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryEvapPurgeFlow, _super);
    function OnBoardDiagnosticsFactoryEvapPurgeFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryEvapPurgeFlow.prototype.create = function () {
        var data = new ProconditionEvapPurgeFlow();
        return data;
    };
    return OnBoardDiagnosticsFactoryEvapPurgeFlow;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryEvapPurgeDensityLearnValue = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryEvapPurgeDensityLearnValue, _super);
    function OnBoardDiagnosticsFactoryEvapPurgeDensityLearnValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryEvapPurgeDensityLearnValue.prototype.create = function () {
        var data = new ProconditionEvapPurgeDensityLearnValue();
        return data;
    };
    return OnBoardDiagnosticsFactoryEvapPurgeDensityLearnValue;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryEvapPurgeVSV = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryEvapPurgeVSV, _super);
    function OnBoardDiagnosticsFactoryEvapPurgeVSV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryEvapPurgeVSV.prototype.create = function () {
        var data = new ProconditionEvapPurgeVSV();
        return data;
    };
    return OnBoardDiagnosticsFactoryEvapPurgeVSV;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryTargetAFRatio = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryTargetAFRatio, _super);
    function OnBoardDiagnosticsFactoryTargetAFRatio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryTargetAFRatio.prototype.create = function () {
        var data = new ProconditionTargetAFRatio();
        return data;
    };
    return OnBoardDiagnosticsFactoryTargetAFRatio;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryAFLambadaB1S1 = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryAFLambadaB1S1, _super);
    function OnBoardDiagnosticsFactoryAFLambadaB1S1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryAFLambadaB1S1.prototype.create = function () {
        var data = new ProconditionAFLambadaB1S1();
        return data;
    };
    return OnBoardDiagnosticsFactoryAFLambadaB1S1;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryAFVoltB1S1 = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryAFVoltB1S1, _super);
    function OnBoardDiagnosticsFactoryAFVoltB1S1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryAFVoltB1S1.prototype.create = function () {
        var data = new ProconditionAFVoltB1S1();
        return data;
    };
    return OnBoardDiagnosticsFactoryAFVoltB1S1;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryAFCurrentB1S1 = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryAFCurrentB1S1, _super);
    function OnBoardDiagnosticsFactoryAFCurrentB1S1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryAFCurrentB1S1.prototype.create = function () {
        var data = new ProconditionAFCurrentB1S1();
        return data;
    };
    return OnBoardDiagnosticsFactoryAFCurrentB1S1;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryFuelSFT = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryFuelSFT, _super);
    function OnBoardDiagnosticsFactoryFuelSFT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryFuelSFT.prototype.create = function () {
        var data = new ProconditionFuelSFT();
        return data;
    };
    return OnBoardDiagnosticsFactoryFuelSFT;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryFuelLFT = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryFuelLFT, _super);
    function OnBoardDiagnosticsFactoryFuelLFT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryFuelLFT.prototype.create = function () {
        var data = new ProconditionFuelLFT();
        return data;
    };
    return OnBoardDiagnosticsFactoryFuelLFT;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryIgnAdvance = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryIgnAdvance, _super);
    function OnBoardDiagnosticsFactoryIgnAdvance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryIgnAdvance.prototype.create = function () {
        var data = new ProconditionIgnAdvance();
        return data;
    };
    return OnBoardDiagnosticsFactoryIgnAdvance;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryIgnCount = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryIgnCount, _super);
    function OnBoardDiagnosticsFactoryIgnCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryIgnCount.prototype.create = function () {
        var data = new ProconditionIgnCount();
        return data;
    };
    return OnBoardDiagnosticsFactoryIgnCount;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryCylinder1MisCount = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryCylinder1MisCount, _super);
    function OnBoardDiagnosticsFactoryCylinder1MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryCylinder1MisCount.prototype.create = function () {
        var data = new ProconditionCylinder1MisCount();
        return data;
    };
    return OnBoardDiagnosticsFactoryCylinder1MisCount;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryCylinder2MisCount = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryCylinder2MisCount, _super);
    function OnBoardDiagnosticsFactoryCylinder2MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryCylinder2MisCount.prototype.create = function () {
        var data = new ProconditionCylinder2MisCount();
        return data;
    };
    return OnBoardDiagnosticsFactoryCylinder2MisCount;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryCylinder3MisCount = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryCylinder3MisCount, _super);
    function OnBoardDiagnosticsFactoryCylinder3MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryCylinder3MisCount.prototype.create = function () {
        var data = new ProconditionCylinder3MisCount();
        return data;
    };
    return OnBoardDiagnosticsFactoryCylinder3MisCount;
}(onBoardDiagnosticsFactory));
var OnBoardDiagnosticsFactoryCylinder4MisCount = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsFactoryCylinder4MisCount, _super);
    function OnBoardDiagnosticsFactoryCylinder4MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnBoardDiagnosticsFactoryCylinder4MisCount.prototype.create = function () {
        var data = new ProconditionCylinder4MisCount();
        return data;
    };
    return OnBoardDiagnosticsFactoryCylinder4MisCount;
}(onBoardDiagnosticsFactory));
//前置条件门面方法
var PreconditionObjectFacade = /** @class */ (function () {
    function PreconditionObjectFacade() {
        this.engineSpeed = new OnBoardDiagnosticsFactoryEngineSpeed().create();
        this.MAF = new OnBoardDiagnosticsFactoryMAF().create();
        this.injector = new OnBoardDiagnosticsFactoryInjectorTime().create();
        this.obdVehicleSpeed = new OnBoardDiagnosticsFactoryVehicleSpeed().create();
        this.obdCoolantTemp = new OnBoardDiagnosticsFactoryCoolantTemp().create();
        this.obdIntakeAir = new OnBoardDiagnosticsFactoryIntakeAir().create();
        this.obdBattVolt = new OnBoardDiagnosticsFactoryBattVolt().create();
        this.obdAccelerateSensorNo1 = new OnBoardDiagnosticsFactoryAccelerateSensorNo1().create();
        this.obdAccelerateSensorNo2 = new OnBoardDiagnosticsFactoryAccelerateSensorNo2().create();
        this.obdTpsSensorVolt = new OnBoardDiagnosticsFactoryTpsSensorVolt().create();
        this.obdTpsSensor2Volt = new OnBoardDiagnosticsFactoryTpsSensor2Volt().create();
        this.obdEvapVsv = new OnBoardDiagnosticsFactoryEvapVsv().create();
        this.obdEvapPurgeFlow = new OnBoardDiagnosticsFactoryEvapPurgeFlow().create();
        this.obdEvapPurgeDensityLearnValue = new OnBoardDiagnosticsFactoryEvapPurgeDensityLearnValue().create();
        this.obdEvapPurgeVSV = new OnBoardDiagnosticsFactoryEvapPurgeVSV().create();
        this.obdTargetAFRatio = new OnBoardDiagnosticsFactoryTargetAFRatio().create();
        this.obdAFLambadaB1S1 = new OnBoardDiagnosticsFactoryAFLambadaB1S1().create();
        this.obdAFVoltB1S1 = new OnBoardDiagnosticsFactoryAFVoltB1S1().create();
        this.obdAFCurrentB1S1 = new OnBoardDiagnosticsFactoryAFCurrentB1S1().create();
        this.obdFuelSFT = new OnBoardDiagnosticsFactoryFuelSFT().create();
        this.obdFuelLFT = new OnBoardDiagnosticsFactoryFuelLFT().create();
        this.obdIgnAdvance = new OnBoardDiagnosticsFactoryIgnAdvance().create();
        this.obdIgnCount = new OnBoardDiagnosticsFactoryIgnCount().create();
        this.obdCylinder1MisCount = new OnBoardDiagnosticsFactoryCylinder1MisCount().create();
        this.obdCylinder2MisCount = new OnBoardDiagnosticsFactoryCylinder2MisCount().create();
        this.obdCylinder3MisCount = new OnBoardDiagnosticsFactoryCylinder3MisCount().create();
        this.obdCylinder4MisCount = new OnBoardDiagnosticsFactoryCylinder4MisCount().create();
    }
    PreconditionObjectFacade.prototype.getPreconditionEngineSpeed = function () {
        return this.engineSpeed.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getPreconditionMAF = function () {
        return this.MAF.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getPreconditionInjectorTime = function () {
        return this.injector.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getVehicleSpeed = function () {
        return this.obdVehicleSpeed.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getCoolantTemp = function () {
        return this.obdCoolantTemp.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getIntakeAir = function () {
        return this.obdIntakeAir.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getBattVolt = function () {
        return this.obdBattVolt.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getAccelerateSensorNo1 = function () {
        return this.obdAccelerateSensorNo1.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getAccelerateSensorNo2 = function () {
        return this.obdAccelerateSensorNo2.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getTpsSensorVolt = function () {
        return this.obdTpsSensorVolt.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getTpsSensor2Volt = function () {
        return this.obdTpsSensor2Volt.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getEvapVsv = function () {
        return this.obdEvapVsv.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getEvapPurgeFlow = function () {
        return this.obdEvapPurgeFlow.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getEvapPurgeDensityLearnValue = function () {
        return this.obdEvapPurgeDensityLearnValue.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getEvapPurgeVSV = function () {
        return this.obdEvapPurgeVSV.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getTargetAFRatio = function () {
        return this.obdTargetAFRatio.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getAFLambadaB1S1 = function () {
        return this.obdAFLambadaB1S1.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getAFVoltB1S1 = function () {
        return this.obdAFVoltB1S1.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getAFCurrentB1S1 = function () {
        return this.obdAFCurrentB1S1.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getFuelSFT = function () {
        return this.obdFuelSFT.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getFuelLFT = function () {
        return this.obdFuelLFT.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getIgnAdvance = function () {
        return this.obdIgnAdvance.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getIgnCount = function () {
        return this.obdIgnCount.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getCylinder1MisCount = function () {
        return this.obdCylinder1MisCount.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getCylinder2MisCount = function () {
        return this.obdCylinder2MisCount.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getCylinder3MisCount = function () {
        return this.obdCylinder3MisCount.getPreconditionObject();
    };
    PreconditionObjectFacade.prototype.getCylinder4MisCount = function () {
        return this.obdCylinder4MisCount.getPreconditionObject();
    };
    return PreconditionObjectFacade;
}());
exports.PreconditionObjectFacade = PreconditionObjectFacade;
/**
 *
 * 诊断仪查表实现部分
 */
//诊断仪抽象方法
var OnBoardDiagnostics = /** @class */ (function () {
    function OnBoardDiagnostics() {
        this.dataOutput = new onBoardDiagnostics_service_1.FindMeetConditionData();
        this.initMethodsOBD = new onBoardDiagnostics_init_1.InitMethodsOBD();
    }
    return OnBoardDiagnostics;
}());
//诊断仪转速查表
var OBDEngineSpeed = /** @class */ (function (_super) {
    __extends(OBDEngineSpeed, _super);
    function OBDEngineSpeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDEngineSpeed.prototype.engineSpeed = function (preconditionObject, filterObject) {
        var speed = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (speed.length == 0) {
            speed = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return speed;
    };
    return OBDEngineSpeed;
}(OnBoardDiagnostics));
//诊断仪空气流量查表
var OBDMAF = /** @class */ (function (_super) {
    __extends(OBDMAF, _super);
    function OBDMAF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDMAF.prototype.MAF = function (preconditionObject, filterObject) {
        var MAF = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (MAF.length == 0) {
            MAF = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return MAF;
    };
    return OBDMAF;
}(OnBoardDiagnostics));
//诊断仪喷油脉宽查表
var OBDEngineInjectorTime = /** @class */ (function (_super) {
    __extends(OBDEngineInjectorTime, _super);
    function OBDEngineInjectorTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDEngineInjectorTime.prototype.injectorTime = function (preconditionObject, filterObject) {
        var inject = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (inject.length == 0) {
            inject = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return inject;
    };
    return OBDEngineInjectorTime;
}(OnBoardDiagnostics));
//诊断仪车速
var OBDVehicleSpeed = /** @class */ (function (_super) {
    __extends(OBDVehicleSpeed, _super);
    function OBDVehicleSpeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDVehicleSpeed.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDVehicleSpeed;
}(OnBoardDiagnostics));
//诊断仪冷却水温
var OBDCoolantTemp = /** @class */ (function (_super) {
    __extends(OBDCoolantTemp, _super);
    function OBDCoolantTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDCoolantTemp.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDCoolantTemp;
}(OnBoardDiagnostics));
//诊断仪进气温度
var OBDIntakeAir = /** @class */ (function (_super) {
    __extends(OBDIntakeAir, _super);
    function OBDIntakeAir() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDIntakeAir.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDIntakeAir;
}(OnBoardDiagnostics));
//诊断仪蓄电池电压
var OBDBattVolt = /** @class */ (function (_super) {
    __extends(OBDBattVolt, _super);
    function OBDBattVolt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDBattVolt.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDBattVolt;
}(OnBoardDiagnostics));
//诊断仪加速踏板位置1
var OBDAccelerateSensorNo1 = /** @class */ (function (_super) {
    __extends(OBDAccelerateSensorNo1, _super);
    function OBDAccelerateSensorNo1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDAccelerateSensorNo1.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDAccelerateSensorNo1;
}(OnBoardDiagnostics));
//诊断仪加速踏板位置2
var OBDAccelerateSensorNo2 = /** @class */ (function (_super) {
    __extends(OBDAccelerateSensorNo2, _super);
    function OBDAccelerateSensorNo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDAccelerateSensorNo2.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDAccelerateSensorNo2;
}(OnBoardDiagnostics));
//诊断仪节气门电压1
var OBDTpsSensorVolt = /** @class */ (function (_super) {
    __extends(OBDTpsSensorVolt, _super);
    function OBDTpsSensorVolt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDTpsSensorVolt.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDTpsSensorVolt;
}(OnBoardDiagnostics));
//诊断仪节气门电压2
var OBDTpsSensor2Volt = /** @class */ (function (_super) {
    __extends(OBDTpsSensor2Volt, _super);
    function OBDTpsSensor2Volt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDTpsSensor2Volt.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDTpsSensor2Volt;
}(OnBoardDiagnostics));
//诊断仪蒸发电磁阀占空比
var OBDEvapVsv = /** @class */ (function (_super) {
    __extends(OBDEvapVsv, _super);
    function OBDEvapVsv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDEvapVsv.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDEvapVsv;
}(OnBoardDiagnostics));
//诊断仪EVAP净化流量
var OBDEvapPurgeFlow = /** @class */ (function (_super) {
    __extends(OBDEvapPurgeFlow, _super);
    function OBDEvapPurgeFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDEvapPurgeFlow.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDEvapPurgeFlow;
}(OnBoardDiagnostics));
//诊断仪净化流量学习值
var OBDEvapPurgeDensityLearnValue = /** @class */ (function (_super) {
    __extends(OBDEvapPurgeDensityLearnValue, _super);
    function OBDEvapPurgeDensityLearnValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDEvapPurgeDensityLearnValue.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDEvapPurgeDensityLearnValue;
}(OnBoardDiagnostics));
//诊断仪电磁阀占空比状态
var OBDEvapPurgeVSV = /** @class */ (function (_super) {
    __extends(OBDEvapPurgeVSV, _super);
    function OBDEvapPurgeVSV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDEvapPurgeVSV.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDEvapPurgeVSV;
}(OnBoardDiagnostics));
//诊断仪目标空燃比
var OBDTargetAFRatio = /** @class */ (function (_super) {
    __extends(OBDTargetAFRatio, _super);
    function OBDTargetAFRatio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDTargetAFRatio.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDTargetAFRatio;
}(OnBoardDiagnostics));
//诊断仪实际空燃比
var OBDAFLambadaB1S1 = /** @class */ (function (_super) {
    __extends(OBDAFLambadaB1S1, _super);
    function OBDAFLambadaB1S1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDAFLambadaB1S1.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDAFLambadaB1S1;
}(OnBoardDiagnostics));
//诊断仪空燃比传感器电压
var OBDAFVoltB1S1 = /** @class */ (function (_super) {
    __extends(OBDAFVoltB1S1, _super);
    function OBDAFVoltB1S1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDAFVoltB1S1.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDAFVoltB1S1;
}(OnBoardDiagnostics));
//诊断仪空燃比传感器电流
var OBDAFCurrentB1S1 = /** @class */ (function (_super) {
    __extends(OBDAFCurrentB1S1, _super);
    function OBDAFCurrentB1S1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDAFCurrentB1S1.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDAFCurrentB1S1;
}(OnBoardDiagnostics));
//诊断仪短期燃油修正
var OBDFuelSFT = /** @class */ (function (_super) {
    __extends(OBDFuelSFT, _super);
    function OBDFuelSFT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDFuelSFT.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDFuelSFT;
}(OnBoardDiagnostics));
//诊断仪长期燃油修正
var OBDFuelLFT = /** @class */ (function (_super) {
    __extends(OBDFuelLFT, _super);
    function OBDFuelLFT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDFuelLFT.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDFuelLFT;
}(OnBoardDiagnostics));
//诊断仪点火提前角
var OBDIgnAdvance = /** @class */ (function (_super) {
    __extends(OBDIgnAdvance, _super);
    function OBDIgnAdvance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDIgnAdvance.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDIgnAdvance;
}(OnBoardDiagnostics));
//诊断仪点火计数器
var OBDIgnCount = /** @class */ (function (_super) {
    __extends(OBDIgnCount, _super);
    function OBDIgnCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDIgnCount.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDIgnCount;
}(OnBoardDiagnostics));
//诊断仪失火计数
var OBDCylinder1MisCount = /** @class */ (function (_super) {
    __extends(OBDCylinder1MisCount, _super);
    function OBDCylinder1MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDCylinder1MisCount.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDCylinder1MisCount;
}(OnBoardDiagnostics));
//诊断仪失火计数
var OBDCylinder2MisCount = /** @class */ (function (_super) {
    __extends(OBDCylinder2MisCount, _super);
    function OBDCylinder2MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDCylinder2MisCount.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDCylinder2MisCount;
}(OnBoardDiagnostics));
//诊断仪失火计数
var OBDCylinder3MisCount = /** @class */ (function (_super) {
    __extends(OBDCylinder3MisCount, _super);
    function OBDCylinder3MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDCylinder3MisCount.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDCylinder3MisCount;
}(OnBoardDiagnostics));
//诊断仪失火计数
var OBDCylinder4MisCount = /** @class */ (function (_super) {
    __extends(OBDCylinder4MisCount, _super);
    function OBDCylinder4MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OBDCylinder4MisCount.prototype.findDataList = function (preconditionObject, filterObject) {
        var data = this.dataOutput.filterMethods(data_engineModuleRundata_1.engineModuleDataComputerPrecondition, preconditionObject, data_engineModuleRundata_1.engineModuleData, filterObject, 'id');
        if (data.length == 0) {
            data = this.initMethodsOBD.dataStreamNullValueProcessingMethods(filterObject, 'name', 'displayFlag');
        }
        return data;
    };
    return OBDCylinder4MisCount;
}(OnBoardDiagnostics));
//诊断仪数据流查表前置条件对象门面方法
var OBDDataOutFacade = /** @class */ (function () {
    function OBDDataOutFacade() {
        this.obdEngineSpeed = new OBDEngineSpeed();
        this.obdMAF = new OBDMAF();
        this.obdEngineInjectorTime = new OBDEngineInjectorTime();
        this.obdVehicleSpeed = new OBDVehicleSpeed();
        this.obdCoolantTemp = new OBDCoolantTemp();
        this.obdIntakeAir = new OBDIntakeAir();
        this.obdBattVolt = new OBDBattVolt();
        this.obdAccelerateSensorNo1 = new OBDAccelerateSensorNo1();
        this.obdAccelerateSensorNo2 = new OBDAccelerateSensorNo2();
        this.obdTpsSensorVolt = new OBDTpsSensorVolt();
        this.obdTpsSensor2Volt = new OBDTpsSensor2Volt();
        this.obdEvapVsv = new OBDEvapVsv();
        this.obdEvapPurgeFlow = new OBDEvapPurgeFlow();
        this.obdEvapPurgeDensityLearnValue = new OBDEvapPurgeDensityLearnValue();
        this.obdEvapPurgeVSV = new OBDEvapPurgeVSV();
        this.obdTargetAFRatio = new OBDTargetAFRatio();
        this.obdAFLambadaB1S1 = new OBDAFLambadaB1S1();
        this.obdAFVoltB1S1 = new OBDAFVoltB1S1();
        this.obdAFCurrentB1S1 = new OBDAFCurrentB1S1();
        this.obdFuelSFT = new OBDFuelSFT();
        this.obdFuelLFT = new OBDFuelLFT();
        this.obdIgnAdvance = new OBDIgnAdvance();
        this.obdIgnCount = new OBDIgnCount();
        this.obdCylinder1MisCount = new OBDCylinder1MisCount();
        this.obdCylinder2MisCount = new OBDCylinder2MisCount();
        this.obdCylinder3MisCount = new OBDCylinder3MisCount();
        this.obdCylinder4MisCount = new OBDCylinder4MisCount();
    }
    OBDDataOutFacade.prototype.getOBDEngineSpeed = function (preconditionObject, filterObject) {
        return this.obdEngineSpeed.engineSpeed(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getOBDMAF = function (preconditionObject, filterObject) {
        return this.obdMAF.MAF(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getOBDEngineInjectorTime = function (preconditionObject, filterObject) {
        return this.obdEngineInjectorTime.injectorTime(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getVehicleSpeed = function (preconditionObject, filterObject) {
        return this.obdVehicleSpeed.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getCoolantTemp = function (preconditionObject, filterObject) {
        return this.obdCoolantTemp.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getIntakeAir = function (preconditionObject, filterObject) {
        return this.obdIntakeAir.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getBattVolt = function (preconditionObject, filterObject) {
        return this.obdBattVolt.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getAccelerateSensorNo1 = function (preconditionObject, filterObject) {
        return this.obdAccelerateSensorNo1.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getAccelerateSensorNo2 = function (preconditionObject, filterObject) {
        return this.obdAccelerateSensorNo2.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getTpsSensorVolt = function (preconditionObject, filterObject) {
        return this.obdTpsSensorVolt.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getTpsSensor2Volt = function (preconditionObject, filterObject) {
        return this.obdTpsSensor2Volt.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getEvapVsv = function (preconditionObject, filterObject) {
        return this.obdEvapVsv.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getEvapPurgeFlow = function (preconditionObject, filterObject) {
        return this.obdEvapPurgeFlow.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getEvapPurgeDensityLearnValue = function (preconditionObject, filterObject) {
        return this.obdEvapPurgeDensityLearnValue.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getEvapPurgeVSV = function (preconditionObject, filterObject) {
        return this.obdEvapPurgeVSV.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getTargetAFRatio = function (preconditionObject, filterObject) {
        return this.obdTargetAFRatio.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getAFLambadaB1S1 = function (preconditionObject, filterObject) {
        return this.obdAFLambadaB1S1.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getAFVoltB1S1 = function (preconditionObject, filterObject) {
        return this.obdAFVoltB1S1.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getAFCurrentB1S1 = function (preconditionObject, filterObject) {
        return this.obdAFCurrentB1S1.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getFuelSFT = function (preconditionObject, filterObject) {
        return this.obdFuelSFT.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getFuelLFT = function (preconditionObject, filterObject) {
        return this.obdFuelLFT.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getIgnAdvance = function (preconditionObject, filterObject) {
        return this.obdIgnAdvance.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getIgnCount = function (preconditionObject, filterObject) {
        return this.obdIgnCount.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getCylinder1MisCount = function (preconditionObject, filterObject) {
        return this.obdCylinder1MisCount.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getCylinder2MisCount = function (preconditionObject, filterObject) {
        return this.obdCylinder2MisCount.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getCylinder3MisCount = function (preconditionObject, filterObject) {
        return this.obdCylinder3MisCount.findDataList(preconditionObject, filterObject);
    };
    OBDDataOutFacade.prototype.getCylinder4MisCount = function (preconditionObject, filterObject) {
        return this.obdCylinder4MisCount.findDataList(preconditionObject, filterObject);
    };
    return OBDDataOutFacade;
}());
exports.OBDDataOutFacade = OBDDataOutFacade;
/**
 *
 * 数据动态计算实现部分
 */
// //动态计算抽象方法
// abstract class OnBoardDiagnosticsDataCalculator{
//     protected dataCaculator:DynamicCalculatorFacade; 
//     constructor(){
//     this.dataCaculator = new DynamicCalculatorFacade();
//     }   
// } 
// export class OBDDataCalculatorFacade extends OnBoardDiagnosticsDataCalculator{     
//      getDynamicCalculatorEngineSpeed(){
//         return this.dataCaculator.getSpeed();
//      }
//      getDynamicCalculatorMAF(){
//          return this.dataCaculator.getMAF();
//      }
//      getDynamicCalculatorInjectorTime(){
//          return this.dataCaculator.getInjectorTime();
//      }
// }  


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var onBoardDiagnostics_mediator_1 = __webpack_require__(59);
//数据流计算方法
var AccleratorPedal = /** @class */ (function () {
    function AccleratorPedal() {
    }
    Object.defineProperty(AccleratorPedal.prototype, "acceleratorPedalPosition", {
        set: function (inAcceleratorPedalPosition) {
            this.outAcceleratorPedalPosition = inAcceleratorPedalPosition;
        },
        enumerable: true,
        configurable: true
    });
    AccleratorPedal.prototype.getAcceleratorPedalPosition = function () {
        return this.outAcceleratorPedalPosition;
    };
    return AccleratorPedal;
}());
var CaculatorMethod = /** @class */ (function () {
    function CaculatorMethod() {
        this.accleratorPedalCurrentPosition = new onBoardDiagnostics_mediator_1.InstrumentPanelInput();
        this.acceleratorPedalPostion = new AccleratorPedal();
    }
    CaculatorMethod.prototype.getAPP = function () {
        this.acceleratorPedalPostion.acceleratorPedalPosition = this.accleratorPedalCurrentPosition.getAcceleratorPanel();
        return this.acceleratorPedalPostion.getAcceleratorPedalPosition();
    };
    return CaculatorMethod;
}());
var DynamicCalculatorFacade = /** @class */ (function () {
    function DynamicCalculatorFacade() {
        this.engineSpeed = new CalculatorEngineSpeed();
        this.maf = new CaculatorMAF();
        this.inject = new CalculatorInjectorTime();
        this.obdVehicleSpeed = new CalculatorVehicleSpeed();
        this.obdCoolantTemp = new CalculatorCoolantTemp();
        this.obdIntakeAir = new CalculatorIntakeAir();
        this.obdBattVolt = new CalculatorBattVolt();
        this.obdAccelerateSensorNo1 = new CalculatorAccelerateSensorNo1();
        this.obdAccelerateSensorNo2 = new CalculatorAccelerateSensorNo2();
        this.obdTpsSensorVolt = new CalculatorTpsSensorVolt();
        this.obdTpsSensor2Volt = new CalculatorTpsSensor2Volt();
        this.obdEvapVsv = new CalculatorEvapVsv();
        this.obdEvapPurgeFlow = new CalculatorEvapPurgeFlow();
        this.obdEvapPurgeDensityLearnValue = new CalculatorEvapPurgeDensityLearnValue();
        this.obdEvapPurgeVSV = new CalculatorEvapPurgeVSV();
        this.obdTargetAFRatio = new CalculatorTargetAFRatio();
        this.obdAFLambadaB1S1 = new CalculatorAFLambadaB1S1();
        this.obdAFVoltB1S1 = new CalculatorAFVoltB1S1();
        this.obdAFCurrentB1S1 = new CalculatorAFCurrentB1S1();
        this.obdFuelSFT = new CalculatorFuelSFT();
        this.obdFuelLFT = new CalculatorFuelLFT();
        this.obdIgnAdvance = new CalculatorIgnAdvance();
        this.obdIgnCount = new CalculatorIgnCount();
        this.obdCylinder1MisCount = new CalculatorCylinder1MisCount();
        this.obdCylinder2MisCount = new CalculatorCylinder2MisCount();
        this.obdCylinder3MisCount = new CalculatorCylinder3MisCount();
        this.obdCylinder4MisCount = new CalculatorCylinder4MisCount();
    }
    DynamicCalculatorFacade.prototype.getSpeed = function () {
        return this.engineSpeed.engineSpeed();
    };
    DynamicCalculatorFacade.prototype.getMAF = function () {
        return this.maf.airFlow();
    };
    DynamicCalculatorFacade.prototype.getInjectorTime = function () {
        return this.inject.injectorTime();
    };
    DynamicCalculatorFacade.prototype.getVehicleSpeed = function () {
        return this.obdVehicleSpeed.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getCoolantTemp = function () {
        return this.obdCoolantTemp.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getIntakeAir = function () {
        return this.obdIntakeAir.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getBattVolt = function () {
        return this.obdBattVolt.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getAccelerateSensorNo1 = function () {
        return this.obdAccelerateSensorNo1.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getAccelerateSensorNo2 = function () {
        return this.obdAccelerateSensorNo2.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getTpsSensorVolt = function () {
        return this.obdTpsSensorVolt.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getTpsSensor2Volt = function () {
        return this.obdTpsSensor2Volt.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getEvapVsv = function () {
        return this.obdEvapVsv.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getEvapPurgeFlow = function () {
        return this.obdEvapPurgeFlow.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getEvapPurgeDensityLearnValue = function () {
        return this.obdEvapPurgeDensityLearnValue.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getEvapPurgeVSV = function () {
        return this.obdEvapPurgeVSV.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getTargetAFRatio = function () {
        return this.obdTargetAFRatio.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getAFLambadaB1S1 = function () {
        return this.obdAFLambadaB1S1.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getAFVoltB1S1 = function () {
        return this.obdAFVoltB1S1.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getAFCurrentB1S1 = function () {
        return this.obdAFCurrentB1S1.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getFuelSFT = function () {
        return this.obdFuelSFT.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getFuelLFT = function () {
        return this.obdFuelLFT.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getIgnAdvance = function () {
        return this.obdIgnAdvance.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getIgnCount = function () {
        return this.obdIgnCount.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getCylinder1MisCount = function () {
        return this.obdCylinder1MisCount.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getCylinder2MisCount = function () {
        return this.obdCylinder2MisCount.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getCylinder3MisCount = function () {
        return this.obdCylinder3MisCount.dataCaculator();
    };
    DynamicCalculatorFacade.prototype.getCylinder4MisCount = function () {
        return this.obdCylinder4MisCount.dataCaculator();
    };
    return DynamicCalculatorFacade;
}());
exports.DynamicCalculatorFacade = DynamicCalculatorFacade;
var CalculatorEngineSpeed = /** @class */ (function (_super) {
    __extends(CalculatorEngineSpeed, _super);
    function CalculatorEngineSpeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(){
    //     super();
    // }
    CalculatorEngineSpeed.prototype.engineSpeed = function () {
        var k = 20;
        var speed = k * _super.prototype.getAPP.call(this);
        return speed;
    };
    return CalculatorEngineSpeed;
}(CaculatorMethod));
var CaculatorMAF = /** @class */ (function (_super) {
    __extends(CaculatorMAF, _super);
    function CaculatorMAF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //  constructor(){
    //      super();
    //  }
    CaculatorMAF.prototype.airFlow = function () {
        var k = 0.01;
        var MAF = k * _super.prototype.engineSpeed.call(this);
        return MAF;
    };
    return CaculatorMAF;
}(CalculatorEngineSpeed));
var CalculatorInjectorTime = /** @class */ (function (_super) {
    __extends(CalculatorInjectorTime, _super);
    function CalculatorInjectorTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorInjectorTime.prototype.injectorTime = function () {
        var k = 0.002;
        var inject = k * _super.prototype.engineSpeed.call(this);
        return inject;
    };
    return CalculatorInjectorTime;
}(CalculatorEngineSpeed));
var CalculatorVehicleSpeed = /** @class */ (function (_super) {
    __extends(CalculatorVehicleSpeed, _super);
    function CalculatorVehicleSpeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorVehicleSpeed.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorVehicleSpeed;
}(CalculatorEngineSpeed));
var CalculatorCoolantTemp = /** @class */ (function (_super) {
    __extends(CalculatorCoolantTemp, _super);
    function CalculatorCoolantTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorCoolantTemp.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorCoolantTemp;
}(CalculatorEngineSpeed));
var CalculatorIntakeAir = /** @class */ (function (_super) {
    __extends(CalculatorIntakeAir, _super);
    function CalculatorIntakeAir() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorIntakeAir.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorIntakeAir;
}(CalculatorEngineSpeed));
var CalculatorBattVolt = /** @class */ (function (_super) {
    __extends(CalculatorBattVolt, _super);
    function CalculatorBattVolt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorBattVolt.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorBattVolt;
}(CalculatorEngineSpeed));
var CalculatorAccelerateSensorNo1 = /** @class */ (function (_super) {
    __extends(CalculatorAccelerateSensorNo1, _super);
    function CalculatorAccelerateSensorNo1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorAccelerateSensorNo1.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorAccelerateSensorNo1;
}(CalculatorEngineSpeed));
var CalculatorAccelerateSensorNo2 = /** @class */ (function (_super) {
    __extends(CalculatorAccelerateSensorNo2, _super);
    function CalculatorAccelerateSensorNo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorAccelerateSensorNo2.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorAccelerateSensorNo2;
}(CalculatorEngineSpeed));
var CalculatorTpsSensorVolt = /** @class */ (function (_super) {
    __extends(CalculatorTpsSensorVolt, _super);
    function CalculatorTpsSensorVolt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorTpsSensorVolt.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorTpsSensorVolt;
}(CalculatorEngineSpeed));
var CalculatorTpsSensor2Volt = /** @class */ (function (_super) {
    __extends(CalculatorTpsSensor2Volt, _super);
    function CalculatorTpsSensor2Volt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorTpsSensor2Volt.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorTpsSensor2Volt;
}(CalculatorEngineSpeed));
var CalculatorEvapVsv = /** @class */ (function (_super) {
    __extends(CalculatorEvapVsv, _super);
    function CalculatorEvapVsv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorEvapVsv.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorEvapVsv;
}(CalculatorEngineSpeed));
var CalculatorEvapPurgeFlow = /** @class */ (function (_super) {
    __extends(CalculatorEvapPurgeFlow, _super);
    function CalculatorEvapPurgeFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorEvapPurgeFlow.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorEvapPurgeFlow;
}(CalculatorEngineSpeed));
var CalculatorEvapPurgeDensityLearnValue = /** @class */ (function (_super) {
    __extends(CalculatorEvapPurgeDensityLearnValue, _super);
    function CalculatorEvapPurgeDensityLearnValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorEvapPurgeDensityLearnValue.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorEvapPurgeDensityLearnValue;
}(CalculatorEngineSpeed));
var CalculatorEvapPurgeVSV = /** @class */ (function (_super) {
    __extends(CalculatorEvapPurgeVSV, _super);
    function CalculatorEvapPurgeVSV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorEvapPurgeVSV.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorEvapPurgeVSV;
}(CalculatorEngineSpeed));
var CalculatorTargetAFRatio = /** @class */ (function (_super) {
    __extends(CalculatorTargetAFRatio, _super);
    function CalculatorTargetAFRatio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorTargetAFRatio.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorTargetAFRatio;
}(CalculatorEngineSpeed));
var CalculatorAFLambadaB1S1 = /** @class */ (function (_super) {
    __extends(CalculatorAFLambadaB1S1, _super);
    function CalculatorAFLambadaB1S1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorAFLambadaB1S1.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorAFLambadaB1S1;
}(CalculatorEngineSpeed));
var CalculatorAFVoltB1S1 = /** @class */ (function (_super) {
    __extends(CalculatorAFVoltB1S1, _super);
    function CalculatorAFVoltB1S1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorAFVoltB1S1.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorAFVoltB1S1;
}(CalculatorEngineSpeed));
var CalculatorAFCurrentB1S1 = /** @class */ (function (_super) {
    __extends(CalculatorAFCurrentB1S1, _super);
    function CalculatorAFCurrentB1S1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorAFCurrentB1S1.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorAFCurrentB1S1;
}(CalculatorEngineSpeed));
var CalculatorFuelSFT = /** @class */ (function (_super) {
    __extends(CalculatorFuelSFT, _super);
    function CalculatorFuelSFT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorFuelSFT.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorFuelSFT;
}(CalculatorEngineSpeed));
var CalculatorFuelLFT = /** @class */ (function (_super) {
    __extends(CalculatorFuelLFT, _super);
    function CalculatorFuelLFT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorFuelLFT.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorFuelLFT;
}(CalculatorEngineSpeed));
var CalculatorIgnAdvance = /** @class */ (function (_super) {
    __extends(CalculatorIgnAdvance, _super);
    function CalculatorIgnAdvance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorIgnAdvance.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorIgnAdvance;
}(CalculatorEngineSpeed));
var CalculatorIgnCount = /** @class */ (function (_super) {
    __extends(CalculatorIgnCount, _super);
    function CalculatorIgnCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorIgnCount.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorIgnCount;
}(CalculatorEngineSpeed));
var CalculatorCylinder1MisCount = /** @class */ (function (_super) {
    __extends(CalculatorCylinder1MisCount, _super);
    function CalculatorCylinder1MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorCylinder1MisCount.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorCylinder1MisCount;
}(CalculatorEngineSpeed));
var CalculatorCylinder2MisCount = /** @class */ (function (_super) {
    __extends(CalculatorCylinder2MisCount, _super);
    function CalculatorCylinder2MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorCylinder2MisCount.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorCylinder2MisCount;
}(CalculatorEngineSpeed));
var CalculatorCylinder3MisCount = /** @class */ (function (_super) {
    __extends(CalculatorCylinder3MisCount, _super);
    function CalculatorCylinder3MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorCylinder3MisCount.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorCylinder3MisCount;
}(CalculatorEngineSpeed));
var CalculatorCylinder4MisCount = /** @class */ (function (_super) {
    __extends(CalculatorCylinder4MisCount, _super);
    function CalculatorCylinder4MisCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorCylinder4MisCount.prototype.dataCaculator = function () {
        var k = 0.002;
        var data = k * _super.prototype.engineSpeed.call(this);
        return data;
    };
    return CalculatorCylinder4MisCount;
}(CalculatorEngineSpeed));


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var onBoardDiagnostics_service_1 = __webpack_require__(60);
var InitMethodsOBD = /** @class */ (function () {
    function InitMethodsOBD() {
        this.obdDataStreamObject = { 'id': 0, 'precondition_id': 0, 'name': 'mEngineModuleEngineSpeed', 'displayFlag': '发动机转速', 'value': 0, 'max': 0, 'min': 0, 'unit': 'rpm', 'rule': 'fixed' };
        this.arr = [
            { 'id': 0, 'precondition_id': 9, 'name': 'mInstrumentPanelLedMIL', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
            { 'id': 0, 'precondition_id': 9, 'name': 'mInstrumentPanelLedABS', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
        ];
    }
    InitMethodsOBD.prototype.dataStreamNullValueProcessingMethods = function (filterObject, key, key1) {
        return onBoardDiagnostics_service_1.obdNullProcessing(this.obdDataStreamObject, filterObject, key, key1);
    };
    return InitMethodsOBD;
}());
exports.InitMethodsOBD = InitMethodsOBD;


/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_service_1 = __webpack_require__(475);
var data_commonModuleParameter_1 = __webpack_require__(61);
//公共对象提取处理类
var CommonObjectHandle = /** @class */ (function () {
    function CommonObjectHandle() {
    }
    CommonObjectHandle.prototype.sensorObject = function () {
        return data_service_1.multiArrayObjectdataProcessingMethods(data_commonModuleParameter_1.sensor, 'name', 'status');
    };
    CommonObjectHandle.prototype.onBoardDiagnosticsObject = function () {
        return data_service_1.multiArrayObjectdataProcessingMethods(data_commonModuleParameter_1.onBoardDiagnostics, 'name', 'status');
    };
    CommonObjectHandle.prototype.currentFaultObject = function () {
        // console.log('data.controller-currentFaultObject() :',fault) 
        return data_service_1.multiArrayObjectdataProcessingMethods(data_commonModuleParameter_1.fault, 'name', 'status');
    };
    CommonObjectHandle.prototype.multimeterObject = function () {
        return data_service_1.multiArrayObjectdataProcessingMethods(data_commonModuleParameter_1.multimeterProbe, 'name', 'value');
    };
    CommonObjectHandle.prototype.keySwitchObject = function () {
        //console.log('data.controller-keySwitch :',keySwitch)    
        var keySwitchObject1 = data_service_1.multiArrayObjectdataProcessingMethods(data_commonModuleParameter_1.keySwitch, 'name', 'status');
        //return _.get(keySwitchObject,'keySwitchPostion') //其中一种处理返回值的方法
        return data_service_1.singleArrayObjectdataProcessingMethods(keySwitchObject1, 'keySwitchPostion');
    };
    CommonObjectHandle.prototype.acceleratorPedalObject = function () {
        var acceleratorPedalObject = data_service_1.multiArrayObjectdataProcessingMethods(data_commonModuleParameter_1.acceleratorPedal, 'name', 'value');
        //return _.get(acceleratorPedalObject,'GetAPPCurrentPostion')
        return data_service_1.singleArrayObjectdataProcessingMethods(acceleratorPedalObject, 'GetAPPCurrentPostion');
    };
    return CommonObjectHandle;
}());
exports.CommonObjectHandle = CommonObjectHandle;


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//发动机数据流前置条件
exports.engineModuleDataComputerPrecondition = [
    { 'id': 1, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 2, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 3, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 4, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 5, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 6, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 7, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 8, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 9, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 10, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 11, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 12, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 13, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 14, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 15, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 16, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 17, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 18, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 19, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 20, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 21, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 22, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 23, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 24, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'activeTest' },
];
//诊断仪发动机数据流
exports.engineModuleData = [
    //正常ON档位数据流
    { 'id': 1, 'precondition_id': 9, 'name': 'mEngineModuleVehicleSpeed', 'displayFlag': '车速', 'value': 0, 'max': 0, 'min': 0, 'unit': 'km/h', 'rule': 'fixed' },
    { 'id': 2, 'precondition_id': 9, 'name': 'mEngineModuleEngineSpeed', 'displayFlag': '发动机转速', 'value': 0, 'max': 0, 'min': 0, 'unit': 'rpm', 'rule': 'fixed' },
    { 'id': 3, 'precondition_id': 9, 'name': 'mEngineModuleMAF', 'displayFlag': '空气流量', 'value': 0.17, 'max': 0.17, 'min': 0, 'unit': 'gm/s', 'rule': 'fixed' },
    { 'id': 4, 'precondition_id': 9, 'name': 'mEngineModuleCoolantTemp', 'displayFlag': '冷却液温度', 'value': 35, 'max': 35, 'min': 0, 'unit': '℃', 'rule': 'fixed' },
    { 'id': 5, 'precondition_id': 9, 'name': 'mEngineModuleIntakeAir', 'displayFlag': '进气温度', 'value': 16, 'max': 16, 'min': 0, 'unit': '℃', 'rule': 'fixed' },
    { 'id': 6, 'precondition_id': 9, 'name': 'mEngineModuleBattVolt', 'displayFlag': '蓄电池电压', 'value': 12.6, 'max': 12.6, 'min': 0, 'unit': 'V', 'rule': 'fixed' },
    { 'id': 7, 'precondition_id': 9, 'name': 'mEngineModuleAccelerateSensorNo1', 'displayFlag': '加速踏板位置传感器1', 'value': 16, 'max': 100, 'min': 16, 'unit': '%', 'rule': 'linear' },
    { 'id': 8, 'precondition_id': 9, 'name': 'mEngineModuleAccelerateSensorNo2', 'displayFlag': '发动机转速', 'value': 32, 'max': 100, 'min': 32, 'unit': '%', 'rule': 'linear' },
    { 'id': 9, 'precondition_id': 9, 'name': 'mEngineModuleTpsSensorVolt', 'displayFlag': '节气门位置传感器1', 'value': 15.1, 'max': 100, 'min': 15.1, 'unit': '%', 'rule': 'linear' },
    { 'id': 10, 'precondition_id': 9, 'name': 'mEngineModuleTpsSensor2Volt', 'displayFlag': '节气门位置传感器2', 'value': 45, 'max': 100, 'min': 45, 'unit': '%', 'rule': 'linear' },
    { 'id': 11, 'precondition_id': 9, 'name': 'mEngineModuleInjectorTime', 'displayFlag': '喷油时间', 'value': 0, 'max': 0, 'min': 0, 'unit': 'ms', 'rule': 'fixed' },
    { 'id': 12, 'precondition_id': 9, 'name': 'mEngineModuleEvapVsv', 'displayFlag': '炭罐电磁阀占空比', 'value': 0, 'max': 0, 'min': 0, 'unit': '%', 'rule': 'fixed' },
    { 'id': 13, 'precondition_id': 9, 'name': 'mEngineModuleEvapPurgeFlow', 'displayFlag': 'EVAP净化流量', 'value': 0, 'max': 0, 'min': 0, 'unit': '%', 'rule': 'fixed' },
    { 'id': 14, 'precondition_id': 9, 'name': 'mEngineModuleEvapPurgeDensityLearnValue', 'displayFlag': '净化密度学习值', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'fixed' },
    { 'id': 15, 'precondition_id': 9, 'name': 'mEngineModuleEvapPurgeVSV', 'displayFlag': '清污阀占空比状态', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'fixed' },
    { 'id': 16, 'precondition_id': 9, 'name': 'mEngineModuleTargetAFRatio', 'displayFlag': '目标空燃比', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'fixed' },
    { 'id': 17, 'precondition_id': 9, 'name': 'mEngineModuleAFLambadaB1S1', 'displayFlag': '空燃比', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'fixed' },
    { 'id': 18, 'precondition_id': 9, 'name': 'mEngineModuleAFVoltB1S1', 'displayFlag': '空燃比传感器电压', 'value': 0, 'max': 0, 'min': 0, 'unit': 'V', 'rule': 'fixed' },
    { 'id': 19, 'precondition_id': 9, 'name': 'mEngineModuleAFCurrentB1S1', 'displayFlag': '空燃比传感器电流', 'value': 0, 'max': 0, 'min': 0, 'unit': 'mA', 'rule': 'fixed' },
    { 'id': 20, 'precondition_id': 9, 'name': 'mEngineModuleFuelSFT', 'displayFlag': '短期燃油修正', 'value': 0, 'max': 0, 'min': 0, 'unit': '%', 'rule': 'fixed' },
    { 'id': 21, 'precondition_id': 9, 'name': 'mEngineModuleFuelLFT', 'displayFlag': '长期燃油修正', 'value': 0, 'max': 0, 'min': 0, 'unit': '%', 'rule': 'fixed' },
    { 'id': 22, 'precondition_id': 9, 'name': 'mEngineModuleIgnAdvance', 'displayFlag': '点火提前角', 'value': 0, 'max': 0, 'min': 0, 'unit': 'deg', 'rule': 'fixed' },
    { 'id': 23, 'precondition_id': 9, 'name': 'mEngineModuleIgnCount', 'displayFlag': '点火计数器', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'fixed' },
    { 'id': 24, 'precondition_id': 9, 'name': 'mEngineModuleCylinder1MisCount', 'displayFlag': '1缸失火数', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'fixed' },
    { 'id': 25, 'precondition_id': 9, 'name': 'mEngineModuleCylinder2MisCount', 'displayFlag': '2缸失火数', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'fixed' },
    { 'id': 26, 'precondition_id': 9, 'name': 'mEngineModuleCylinder3MisCount', 'displayFlag': '3缸失火数', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'fixed' },
    { 'id': 27, 'precondition_id': 9, 'name': 'mEngineModuleCylinder4MisCount', 'displayFlag': '4缸失火数', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'fixed' },
    //故障时ON档位数据
    { 'id': 28, 'precondition_id': 13, 'name': 'mEngineModuleTpsSensorVolt', 'displayFlag': '节气门位置传感器1', 'value': 15.3, 'max': 15.3, 'min': 15.3, 'unit': '%', 'rule': 'fixed' },
    { 'id': 29, 'precondition_id': 13, 'name': 'mEngineModuleTpsSensor2Volt', 'displayFlag': '节气门位置传感器2', 'value': 46.7, 'max': 46.7, 'min': 46.7, 'unit': '%', 'rule': 'fixed' },
    //正常START档位数据流
    { 'id': 30, 'precondition_id': 17, 'name': 'mEngineModuleVehicleSpeed', 'displayFlag': '车速', 'value': 0, 'max': 0, 'min': 0, 'unit': 'km/h', 'rule': 'fixed' },
    { 'id': 31, 'precondition_id': 17, 'name': 'mEngineModuleEngineSpeed', 'displayFlag': '发动机转速', 'value': 660, 'max': 6000, 'min': 550, 'unit': 'rpm', 'rule': 'linearComputer' },
    { 'id': 32, 'precondition_id': 17, 'name': 'mEngineModuleMAF', 'displayFlag': '空气流量', 'value': 2.05, 'max': 35, 'min': 2, 'unit': 'gm/s', 'rule': 'linearComputer' },
    { 'id': 33, 'precondition_id': 17, 'name': 'mEngineModuleCoolantTemp', 'displayFlag': '冷却液温度', 'value': 35, 'max': 95, 'min': 0, 'unit': '℃', 'rule': 'linearComputer' },
    { 'id': 34, 'precondition_id': 17, 'name': 'mEngineModuleIntakeAir', 'displayFlag': '进气温度', 'value': 16, 'max': 35, 'min': 16, 'unit': '℃', 'rule': 'linearComputer' },
    { 'id': 35, 'precondition_id': 17, 'name': 'mEngineModuleBattVolt', 'displayFlag': '蓄电池电压', 'value': 13.8, 'max': 13.8, 'min': 0, 'unit': 'V', 'rule': 'fixed' },
    { 'id': 36, 'precondition_id': 17, 'name': 'mEngineModuleAccelerateSensorNo1', 'displayFlag': '加速踏板位置传感器1', 'value': 16, 'max': 100, 'min': 16, 'unit': '%', 'rule': 'linear' },
    { 'id': 37, 'precondition_id': 17, 'name': 'mEngineModuleAccelerateSensorNo2', 'displayFlag': '加速踏板位置传感器2', 'value': 32, 'max': 100, 'min': 32, 'unit': '%', 'rule': 'linear' },
    { 'id': 38, 'precondition_id': 17, 'name': 'mEngineModuleTpsSensorVolt', 'displayFlag': '节气门位置传感器1', 'value': 15.1, 'max': 100, 'min': 15.1, 'unit': '%', 'rule': 'linear' },
    { 'id': 39, 'precondition_id': 17, 'name': 'mEngineModuleTpsSensor2Volt', 'displayFlag': '节气门位置传感器2', 'value': 45, 'max': 100, 'min': 45, 'unit': '%', 'rule': 'linear' },
    { 'id': 40, 'precondition_id': 17, 'name': 'mEngineModuleInjectorTime', 'displayFlag': '喷油时间', 'value': 2.02, 'max': 27.0, 'min': 2.0, 'unit': 'ms', 'rule': 'linearComputer' },
    { 'id': 41, 'precondition_id': 17, 'name': 'mEngineModuleEvapVsv', 'displayFlag': '炭罐电磁阀占空比', 'value': 1.6, 'max': 68, 'min': 0, 'unit': '%', 'rule': 'linearComputer' },
    { 'id': 42, 'precondition_id': 17, 'name': 'mEngineModuleEvapPurgeFlow', 'displayFlag': 'EVAP净化流量', 'value': 0, 'max': 10, 'min': 0, 'unit': '%', 'rule': 'random' },
    { 'id': 43, 'precondition_id': 17, 'name': 'mEngineModuleEvapPurgeDensityLearnValue', 'displayFlag': '净化密度学习值', 'value': 0, 'max': 0, 'min': -3.0, 'unit': '', 'rule': 'linearComputer' },
    { 'id': 44, 'precondition_id': 17, 'name': 'mEngineModuleEvapPurgeVSV', 'displayFlag': '清污阀占空比状态', 'value': 1, 'max': 1, 'min': 0, 'unit': '', 'rule': 'fixed' },
    { 'id': 45, 'precondition_id': 17, 'name': 'mEngineModuleTargetAFRatio', 'displayFlag': '目标空燃比', 'value': 0.998, 'max': 1, 'min': 0, 'unit': '', 'rule': 'fixed' },
    { 'id': 46, 'precondition_id': 17, 'name': 'mEngineModuleAFLambadaB1S1', 'displayFlag': '空燃比', 'value': 0.997, 'max': 1.2, 'min': 0, 'unit': '', 'rule': 'linear' },
    { 'id': 47, 'precondition_id': 17, 'name': 'mEngineModuleAFVoltB1S1', 'displayFlag': '空燃比传感器电压', 'value': 3.31, 'max': 5, 'min': 0, 'unit': 'V', 'rule': 'linear' },
    { 'id': 48, 'precondition_id': 17, 'name': 'mEngineModuleAFCurrentB1S1', 'displayFlag': '空燃比传感器电流', 'value': 0, 'max': 0, 'min': 0, 'unit': 'mA', 'rule': 'linear' },
    { 'id': 49, 'precondition_id': 17, 'name': 'mEngineModuleFuleSFT', 'displayFlag': '短期燃油修正', 'value': 0.5, 'max': 20, 'min': 0, 'unit': '%', 'rule': 'linear' },
    { 'id': 50, 'precondition_id': 17, 'name': 'mEngineModuleFuelLFT', 'displayFlag': '长期燃油修正', 'value': 4.3, 'max': 20, 'min': -20, 'unit': '%', 'rule': 'linear' },
    { 'id': 51, 'precondition_id': 17, 'name': 'mEngineModuleIgnAdvance', 'displayFlag': '点火提前角', 'value': 8.5, 'max': 0, 'min': 0, 'unit': 'deg', 'rule': 'linear' },
    { 'id': 52, 'precondition_id': 17, 'name': 'mEngineModuleIgnCount', 'displayFlag': '点火计数器', 'value': 0, 'max': 400, 'min': 0, 'unit': '', 'rule': 'count' },
    { 'id': 53, 'precondition_id': 17, 'name': 'mEngineModuleCylinder1MisCount', 'displayFlag': '1缸失火数', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'count' },
    { 'id': 54, 'precondition_id': 17, 'name': 'mEngineModuleCylinder2MisCount', 'displayFlag': '2缸失火数', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'count' },
    { 'id': 55, 'precondition_id': 17, 'name': 'mEngineModuleCylinder3MisCount', 'displayFlag': '3缸失火数', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'count' },
    { 'id': 56, 'precondition_id': 17, 'name': 'mEngineModuleCylinder4MisCount', 'displayFlag': '4缸失火数', 'value': 0, 'max': 0, 'min': 0, 'unit': '', 'rule': 'count' },
    //故障时START档位数据
    { 'id': 57, 'precondition_id': 21, 'name': 'mEngineModuleEngineSpeed', 'displayFlag': '发动机转速', 'value': 1000, 'max': 1100, 'min': 990, 'unit': 'rpm', 'rule': 'linearComputer' },
    { 'id': 58, 'precondition_id': 21, 'name': 'mEngineModuleMAF', 'displayFlag': '空气流量', 'value': 4.30, 'max': 4.50, 'min': 4.28, 'unit': 'gm/s', 'rule': 'fixed' },
    { 'id': 59, 'precondition_id': 21, 'name': 'mEngineModuleTpsSensorVolt', 'displayFlag': '节气门位置传感器1', 'value': 15.3, 'max': 15.3, 'min': 15.3, 'unit': '%', 'rule': 'linear' },
    { 'id': 60, 'precondition_id': 21, 'name': 'mEngineModuleTpsSensor2Volt', 'displayFlag': '节气门位置传感器2', 'value': 46.7, 'max': 46.7, 'min': 46.7, 'unit': '%', 'rule': 'linear' },
    { 'id': 61, 'precondition_id': 21, 'name': 'mEngineModuleInjectorTime', 'displayFlag': '喷油时间', 'value': 3.75, 'max': 3.90, 'min': 3.70, 'unit': 'ms', 'rule': 'fixed' },
];
//诊断仪发动机模块故障码,细节后续需要详细思考一下，此处似乎考虑的不完善
exports.engineModuleFaultCode = [
    //点火钥匙ON档位故障码
    { 'id': 1, 'precondition_id': 13, 'obd_clearCode_id': 1, 'name': 'mEngineModuleFaultCodeP0122', 'displayFlag': 'P0122 节气门/ 踏板位置传感器/ 开关“A”电路低输入', 'rule': 'logicalComputer' },
    { 'id': 2, 'precondition_id': 13, 'obd_clearCode_id': 1, 'name': 'mEngineModuleFaultCodeP0222', 'displayFlag': 'P0222 节气门/ 踏板位置传感器/ 开关“B”电路低输入', 'rule': 'logicalComputer' },
    { 'id': 3, 'precondition_id': 13, 'obd_clearCode_id': 1, 'name': 'mEngineModuleFaultCodeP2135', 'displayFlag': 'P2135 节气门/ 踏板位置传感器/ 开关“A” / “B”电压相关性', 'rule': 'logicalComputer' },
    { 'id': 4, 'precondition_id': 13, 'obd_clearCode_id': 1, 'name': 'mEngineModuleFaultCodeP0121', 'displayFlag': 'P0121 节气门/ 踏板位置传感器/ 开关“A”电路范围/ 性能故障', 'rule': 'logicalComputer' },
    //点火钥匙START档位故障码
    { 'id': 5, 'precondition_id': 21, 'obd_clearCode_id': 1, 'name': 'mEngineModuleFaultCodeP0122', 'displayFlag': 'P0122 节气门/ 踏板位置传感器/ 开关“A”电路低输入', 'rule': 'logicalComputer' },
    { 'id': 6, 'precondition_id': 21, 'obd_clearCode_id': 1, 'name': 'mEngineModuleFaultCodeP0222', 'displayFlag': 'P0222 节气门/ 踏板位置传感器/ 开关“B”电路低输入', 'rule': 'logicalComputer' },
    { 'id': 7, 'precondition_id': 21, 'obd_clearCode_id': 1, 'name': 'mEngineModuleFaultCodeP2135', 'displayFlag': 'P2135 节气门/ 踏板位置传感器/ 开关“A” / “B”电压相关性', 'rule': 'logicalComputer' },
    { 'id': 8, 'precondition_id': 21, 'obd_clearCode_id': 1, 'name': 'mEngineModuleFaultCodeP0121', 'displayFlag': 'P0121 节气门/ 踏板位置传感器/ 开关“A”电路范围/ 性能故障', 'rule': 'logicalComputer' },
];


/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//仪表灯显示前置条件
exports.instrumentPanelLedPrecondition = [
    { 'id': 1, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 2, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 3, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 4, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 5, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 6, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 7, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 8, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 9, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 10, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 11, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 12, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 13, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 14, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 15, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 16, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 17, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 18, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 19, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 20, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 21, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 22, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 23, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 24, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'activeTest' },
];
exports.InstrumentPanelLed = [
    //仪表板ON档位显示
    { 'id': 1, 'precondition_id': 9, 'name': 'mInstrumentPanelLedABS', 'value': 1, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 2, 'precondition_id': 9, 'name': 'mInstrumentPanelLedBrake', 'value': 1, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 3, 'precondition_id': 9, 'name': 'mInstrumentPanelLedSafeBag', 'value': 1, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 4, 'precondition_id': 9, 'name': 'mInstrumentPanelLedMIL', 'value': 1, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 5, 'precondition_id': 9, 'name': 'mInstrumentPanelLedOilPressure', 'value': 1, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 6, 'precondition_id': 9, 'name': 'mInstrumentPanelLedBatt', 'value': 1, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 7, 'precondition_id': 9, 'name': 'mInstrumentPanelLedSafeBelt', 'value': 1, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    //仪表板STRAT显示
    { 'id': 8, 'precondition_id': 17, 'name': 'mInstrumentPanelLedABS', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 9, 'precondition_id': 17, 'name': 'mInstrumentPanelLedBrake', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 10, 'precondition_id': 17, 'name': 'mInstrumentPanelLedSafeBag', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 11, 'precondition_id': 17, 'name': 'mInstrumentPanelLedMIL', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 12, 'precondition_id': 17, 'name': 'mInstrumentPanelLedOilPressure', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 13, 'precondition_id': 17, 'name': 'mInstrumentPanelLedBatt', 'value': 0, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    { 'id': 14, 'precondition_id': 17, 'name': 'mInstrumentPanelLedSafeBelt', 'value': 1, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
    //仪表板START档位故障时显示
    { 'id': 15, 'precondition_id': 21, 'name': 'mInstrumentPanelLedMIL', 'value': 1, 'max': 1, 'min': 0, 'rule': 'logicalComputer' },
];
exports.InstrumentPanelData = [
    //仪表板ON档位时显示
    { 'id': 1, 'precondition_id': 9, 'name': 'mInstrumentPanelVehicleSpeed', 'value': 0, 'max': 0, 'min': 0, 'rule': 'fixed' },
    { 'id': 2, 'precondition_id': 9, 'name': 'mInstrumentPanelEngineSpeed', 'value': 0, 'max': 0, 'min': 0, 'rule': 'fixed' },
    { 'id': 3, 'precondition_id': 9, 'name': 'mInstrumentPanelCoolantTemp', 'value': 0, 'max': 0, 'min': 0, 'rule': 'fixed' },
    { 'id': 4, 'precondition_id': 9, 'name': 'mInstrumentPanelOilVolume', 'value': 0.5, 'max': 1, 'min': 0, 'rule': 'fixed' },
    //仪表板START档位时显示
    { 'id': 5, 'precondition_id': 17, 'name': 'mInstrumentPanelVehicleSpeed', 'value': 0, 'max': 0, 'min': 0, 'rule': 'fixed' },
    { 'id': 6, 'precondition_id': 17, 'name': 'mInstrumentPanelEngineSpeed', 'value': 660, 'max': 6000, 'min': 550, 'rule': 'linearComputer' },
    { 'id': 7, 'precondition_id': 17, 'name': 'mInstrumentPanelCoolantTemp', 'value': 2.05, 'max': 35, 'min': 2, 'rule': 'linearComputer' },
    { 'id': 8, 'precondition_id': 17, 'name': 'mInstrumentPanelOilVolume', 'value': 35, 'max': 95, 'min': 0, 'rule': 'linearComputer' },
    //故障时仪表板显示
    { 'id': 9, 'precondition_id': 21, 'name': 'mInstrumentPanelEngineSpeed', 'value': 1000, 'max': 1100, 'min': 990, 'rule': 'linearComputer' },
];


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//测量出一个值需要满足哪些条件(此处通用条件不包含不同的传感影响的值不同的情况，后面需要单独拆开传感器安装，故障及主动测试的多组合排列表)
exports.sensorMeasurePrecondition = [
    { 'id': 1, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 2, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 3, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 4, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 5, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 6, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 7, 'keySwitchPostion': 'off', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 8, 'keySwitchPostion': 'off', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 9, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 10, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 11, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 12, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 13, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 14, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 15, 'keySwitchPostion': 'on', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 16, 'keySwitchPostion': 'on', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 17, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 18, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'notActiveTest' },
    { 'id': 19, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 20, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'normal', 'activeTest': 'activeTest' },
    { 'id': 21, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 22, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'notActiveTest' },
    { 'id': 23, 'keySwitchPostion': 'start', 'installState': 'install', 'fault': 'unnormal', 'activeTest': 'activeTest' },
    { 'id': 24, 'keySwitchPostion': 'start', 'installState': 'uninstall', 'fault': 'unnormal', 'activeTest': 'activeTest' },
];
//传感器测量点
exports.BATTConnector = [
    { 'id': 1, 'measurePoint': 1, 'name': 'battPostive' },
    { 'id': 2, 'measurePoint': 2, 'name': 'battNegtive' },
    { 'id': 3, 'measurePoint': 14, 'name': 'battPin3' },
    { 'id': 4, 'measurePoint': 18, 'name': 'battPin4' },
    { 'id': 5, 'measurePoint': 4, 'name': 'battin5' },
    { 'id': 6, 'measurePoint': 4, 'name': 'battin6' },
    { 'id': 7, 'measurePoint': 12, 'name': 'battPin7' },
    { 'id': 8, 'measurePoint': 12, 'name': 'battPin8' },
    { 'id': 9, 'measurePoint': 12, 'name': 'ecmPin20' },
    { 'id': 10, 'measurePoint': 2050, 'name': 'ecmPin28' },
    { 'id': 11, 'measurePoint': 18, 'name': 'ecmPin44' },
    { 'id': 12, 'measurePoint': 4, 'name': 'ecmPin104' },
];
//每个测量点条件的影响不同
var BATTConnector1 = [
    { 'id': 1, 'measurePoint': 1, 'name': 'battPostive', 'condition': { 'BATTConnector': 'install', 'BATT_Conn_Open_Pin1': 'normal' } },
    { 'id': 2, 'measurePoint': 2, 'name': 'battNegtive' },
    { 'id': 3, 'measurePoint': 14, 'name': 'battPin3' },
    { 'id': 4, 'measurePoint': 18, 'name': 'battPin4' },
    { 'id': 5, 'measurePoint': 4, 'name': 'battin5' },
    { 'id': 6, 'measurePoint': 4, 'name': 'battin6' },
    { 'id': 7, 'measurePoint': 12, 'name': 'battPin7' },
    { 'id': 8, 'measurePoint': 12, 'name': 'battPin8' },
    { 'id': 9, 'measurePoint': 12, 'name': 'ecmPin20' },
    { 'id': 10, 'measurePoint': 2050, 'name': 'ecmPin28' },
    { 'id': 11, 'measurePoint': 18, 'name': 'ecmPin44' },
    { 'id': 12, 'measurePoint': 4, 'name': 'ecmPin104' },
];
exports.MAFConnector = [
    { 'id': 13, 'measurePoint': 30, 'name': 'mafPin1' },
    { 'id': 14, 'measurePoint': 32, 'name': 'mafPin2' },
    { 'id': 15, 'measurePoint': 34, 'name': 'mafPin3' },
    { 'id': 16, 'measurePoint': 36, 'name': 'mafPin4' },
    { 'id': 17, 'measurePoint': 38, 'name': 'mafPin5' },
    { 'id': 18, 'measurePoint': 40, 'name': 'ecmPin65' },
    { 'id': 19, 'measurePoint': 42, 'name': 'ecmPin88' },
    { 'id': 20, 'measurePoint': 44, 'name': 'ecmPin116' },
    { 'id': 21, 'measurePoint': 46, 'name': 'ecmPin118' },
];
exports.APPConnector = [
    { 'id': 22, 'measurePoint': 3004, 'name': 'appPin1' },
    { 'id': 23, 'measurePoint': 3006, 'name': 'appPin2' },
    { 'id': 24, 'measurePoint': 3008, 'name': 'appPin3' },
    { 'id': 25, 'measurePoint': 3010, 'name': 'appPin4' },
    { 'id': 26, 'measurePoint': 3012, 'name': 'appPin5' },
    { 'id': 27, 'measurePoint': 3014, 'name': 'appPin6' },
    { 'id': 28, 'measurePoint': 3016, 'name': 'ecmPin58' },
    { 'id': 29, 'measurePoint': 3018, 'name': 'ecmPin60' },
    { 'id': 30, 'measurePoint': 3020, 'name': 'ecmPin56' },
    { 'id': 31, 'measurePoint': 3022, 'name': 'ecmPin57' },
    { 'id': 32, 'measurePoint': 3024, 'name': 'ecmPin59' },
    { 'id': 33, 'measurePoint': 3026, 'name': 'ecmPin55' },
];
exports.TPSConnector = [
    { 'id': 34, 'measurePoint': 3040, 'name': 'tpsPin1' },
    { 'id': 35, 'measurePoint': 3002, 'name': 'tpsPin2' },
    { 'id': 36, 'measurePoint': 3042, 'name': 'tpsPin3' },
    { 'id': 37, 'measurePoint': 3044, 'name': 'tpsPin4' },
    { 'id': 38, 'measurePoint': 3046, 'name': 'tpsPin5' },
    { 'id': 39, 'measurePoint': 3048, 'name': 'tpsPin6' },
    { 'id': 40, 'measurePoint': 3028, 'name': 'ecmPin41' },
    { 'id': 41, 'measurePoint': 3030, 'name': 'ecmPin42' },
    { 'id': 42, 'measurePoint': 3032, 'name': 'ecmPin91' },
    { 'id': 43, 'measurePoint': 3034, 'name': 'ecmPin114' },
    { 'id': 44, 'measurePoint': 3036, 'name': 'ecmPin67' },
    { 'id': 45, 'measurePoint': 3038, 'name': 'ecmPin115' },
];
exports.MAFBody = [
    { 'id': 46, 'measurePoint': 4011, 'name': 'mafBodyPin1' },
    { 'id': 47, 'measurePoint': 4012, 'name': 'mafBodyPin2' },
];
exports.TPSBody = [
    { 'id': 48, 'measurePoint': 4064, 'name': 'tpsBodyPin1' },
    { 'id': 49, 'measurePoint': 4065, 'name': 'tpsBodyPin2' },
];
//传感器电压测量
exports.sensorMeasureVolt = [
    //点火钥匙off档位
    { 'id': 1, 'sensorMeasurePoint_id': 1, 'name': 'BATTConnector', 'precondition_id': 1, 'value': 12.5, 'max': 12.5, 'min': 12.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 2, 'sensorMeasurePoint_id': 2, 'name': 'BATTConnector', 'precondition_id': 1, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 3, 'sensorMeasurePoint_id': 3, 'name': 'BATTConnector', 'precondition_id': 1, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 5, 'sensorMeasurePoint_id': 5, 'name': 'BATTConnector', 'precondition_id': 1, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 6, 'sensorMeasurePoint_id': 7, 'name': 'BATTConnector', 'precondition_id': 1, 'value': 12.5, 'max': 12.5, 'min': 12.5, 'unit': 'v', 'rule': 'fixed' },
    //点火钥匙on档位
    { 'id': 41, 'sensorMeasurePoint_id': 1, 'name': 'BATTConnector', 'precondition_id': 9, 'value': 12.5, 'max': 12.5, 'min': 12.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 42, 'sensorMeasurePoint_id': 2, 'name': 'BATTConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 43, 'sensorMeasurePoint_id': 3, 'name': 'BATTConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 44, 'sensorMeasurePoint_id': 4, 'name': 'BATTConnector', 'precondition_id': 9, 'value': 12.5, 'max': 12.5, 'min': 12.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 45, 'sensorMeasurePoint_id': 5, 'name': 'BATTConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 46, 'sensorMeasurePoint_id': 7, 'name': 'BATTConnector', 'precondition_id': 9, 'value': 12.5, 'max': 12.5, 'min': 12.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 47, 'sensorMeasurePoint_id': 10, 'name': 'BATTConnector', 'precondition_id': 9, 'value': 12.5, 'max': 12.5, 'min': 12.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 48, 'sensorMeasurePoint_id': 13, 'name': 'MAFConnector', 'precondition_id': 9, 'value': 0.5, 'max': 3.4, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    { 'id': 49, 'sensorMeasurePoint_id': 14, 'name': 'MAFConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 50, 'sensorMeasurePoint_id': 15, 'name': 'MAFConnector', 'precondition_id': 9, 'value': 12.5, 'max': 12.5, 'min': 12.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 51, 'sensorMeasurePoint_id': 16, 'name': 'MAFConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 52, 'sensorMeasurePoint_id': 17, 'name': 'MAFConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 53, 'sensorMeasurePoint_id': 18, 'name': 'MAFConnector', 'precondition_id': 9, 'value': 0.5, 'max': 3.4, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    { 'id': 54, 'sensorMeasurePoint_id': 19, 'name': 'MAFConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 55, 'sensorMeasurePoint_id': 20, 'name': 'MAFConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 56, 'sensorMeasurePoint_id': 21, 'name': 'MAFConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 57, 'sensorMeasurePoint_id': 22, 'name': 'APPConnector', 'precondition_id': 9, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 58, 'sensorMeasurePoint_id': 23, 'name': 'APPConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 59, 'sensorMeasurePoint_id': 24, 'name': 'APPConnector', 'precondition_id': 9, 'value': 1.2, 'max': 5, 'min': 1.2, 'unit': 'v', 'rule': 'linear' },
    { 'id': 60, 'sensorMeasurePoint_id': 25, 'name': 'APPConnector', 'precondition_id': 9, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 61, 'sensorMeasurePoint_id': 26, 'name': 'APPConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 62, 'sensorMeasurePoint_id': 27, 'name': 'APPConnector', 'precondition_id': 9, 'value': 0.5, 'max': 4.5, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    { 'id': 63, 'sensorMeasurePoint_id': 28, 'name': 'APPConnector', 'precondition_id': 9, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 64, 'sensorMeasurePoint_id': 29, 'name': 'APPConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 65, 'sensorMeasurePoint_id': 30, 'name': 'APPConnector', 'precondition_id': 9, 'value': 1.2, 'max': 5, 'min': 1.2, 'unit': 'v', 'rule': 'linear' },
    { 'id': 66, 'sensorMeasurePoint_id': 31, 'name': 'APPConnector', 'precondition_id': 9, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 67, 'sensorMeasurePoint_id': 32, 'name': 'APPConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 68, 'sensorMeasurePoint_id': 33, 'name': 'APPConnector', 'precondition_id': 9, 'value': 0.5, 'max': 4.5, 'min': 0.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 69, 'sensorMeasurePoint_id': 34, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 70, 'sensorMeasurePoint_id': 35, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 71, 'sensorMeasurePoint_id': 36, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 72, 'sensorMeasurePoint_id': 37, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 2.1, 'max': 4.8, 'min': 2.1, 'unit': 'v', 'rule': 'linear' },
    { 'id': 73, 'sensorMeasurePoint_id': 38, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 74, 'sensorMeasurePoint_id': 39, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 0.5, 'max': 4.5, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    { 'id': 75, 'sensorMeasurePoint_id': 40, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 76, 'sensorMeasurePoint_id': 41, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 77, 'sensorMeasurePoint_id': 42, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 78, 'sensorMeasurePoint_id': 43, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 2.1, 'max': 4.8, 'min': 2.1, 'unit': 'v', 'rule': 'linear' },
    { 'id': 79, 'sensorMeasurePoint_id': 44, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 80, 'sensorMeasurePoint_id': 45, 'name': 'TPSConnector', 'precondition_id': 9, 'value': 0.5, 'max': 4.5, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    //点火钥匙on档位故障
    { 'id': 81, 'sensorMeasurePoint_id': 37, 'name': 'TPSConnector', 'precondition_id': 13, 'value': 0.2, 'max': 0.2, 'min': 0.2, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 82, 'sensorMeasurePoint_id': 39, 'name': 'TPSConnector', 'precondition_id': 13, 'value': 0.2, 'max': 0.2, 'min': 0.2, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 83, 'sensorMeasurePoint_id': 43, 'name': 'TPSConnector', 'precondition_id': 13, 'value': 0.2, 'max': 0.2, 'min': 0.2, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 84, 'sensorMeasurePoint_id': 45, 'name': 'TPSConnector', 'precondition_id': 13, 'value': 0.2, 'max': 0.2, 'min': 0.2, 'unit': 'v', 'rule': 'fixed' },
    //点火钥匙start档位
    { 'id': 85, 'sensorMeasurePoint_id': 1, 'name': 'BATTConnector', 'precondition_id': 17, 'value': 13.5, 'max': 13.5, 'min': 13.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 86, 'sensorMeasurePoint_id': 2, 'name': 'BATTConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 87, 'sensorMeasurePoint_id': 3, 'name': 'BATTConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 88, 'sensorMeasurePoint_id': 4, 'name': 'BATTConnector', 'precondition_id': 17, 'value': 12.5, 'max': 12.5, 'min': 12.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 89, 'sensorMeasurePoint_id': 5, 'name': 'BATTConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 90, 'sensorMeasurePoint_id': 7, 'name': 'BATTConnector', 'precondition_id': 17, 'value': 13.5, 'max': 13.5, 'min': 13.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 91, 'sensorMeasurePoint_id': 10, 'name': 'BATTConnector', 'precondition_id': 17, 'value': 13.5, 'max': 13.5, 'min': 13.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 92, 'sensorMeasurePoint_id': 13, 'name': 'MAFConnector', 'precondition_id': 17, 'value': 0.5, 'max': 3.4, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    { 'id': 93, 'sensorMeasurePoint_id': 14, 'name': 'MAFConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 94, 'sensorMeasurePoint_id': 15, 'name': 'MAFConnector', 'precondition_id': 17, 'value': 12.5, 'max': 12.5, 'min': 12.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 95, 'sensorMeasurePoint_id': 16, 'name': 'MAFConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 96, 'sensorMeasurePoint_id': 17, 'name': 'MAFConnector', 'precondition_id': 17, 'value': 0.5, 'max': 3.5, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    { 'id': 97, 'sensorMeasurePoint_id': 18, 'name': 'MAFConnector', 'precondition_id': 17, 'value': 0.5, 'max': 3.4, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    { 'id': 98, 'sensorMeasurePoint_id': 19, 'name': 'MAFConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 99, 'sensorMeasurePoint_id': 20, 'name': 'MAFConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 100, 'sensorMeasurePoint_id': 21, 'name': 'MAFConnector', 'precondition_id': 17, 'value': 0.5, 'max': 3.5, 'min': 0.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 101, 'sensorMeasurePoint_id': 22, 'name': 'APPConnector', 'precondition_id': 17, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 102, 'sensorMeasurePoint_id': 23, 'name': 'APPConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 103, 'sensorMeasurePoint_id': 24, 'name': 'APPConnector', 'precondition_id': 17, 'value': 1.2, 'max': 5, 'min': 1.2, 'unit': 'v', 'rule': 'linear' },
    { 'id': 104, 'sensorMeasurePoint_id': 25, 'name': 'APPConnector', 'precondition_id': 17, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 105, 'sensorMeasurePoint_id': 26, 'name': 'APPConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 106, 'sensorMeasurePoint_id': 27, 'name': 'APPConnector', 'precondition_id': 17, 'value': 0.5, 'max': 4.5, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    { 'id': 107, 'sensorMeasurePoint_id': 28, 'name': 'APPConnector', 'precondition_id': 17, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 108, 'sensorMeasurePoint_id': 29, 'name': 'APPConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 109, 'sensorMeasurePoint_id': 30, 'name': 'APPConnector', 'precondition_id': 17, 'value': 1.2, 'max': 5, 'min': 1.2, 'unit': 'v', 'rule': 'linear' },
    { 'id': 110, 'sensorMeasurePoint_id': 31, 'name': 'APPConnector', 'precondition_id': 17, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 111, 'sensorMeasurePoint_id': 32, 'name': 'APPConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 112, 'sensorMeasurePoint_id': 33, 'name': 'APPConnector', 'precondition_id': 17, 'value': 0.5, 'max': 4.5, 'min': 0.5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 113, 'sensorMeasurePoint_id': 34, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 114, 'sensorMeasurePoint_id': 35, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 115, 'sensorMeasurePoint_id': 36, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 116, 'sensorMeasurePoint_id': 37, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 2.1, 'max': 4.8, 'min': 2.1, 'unit': 'v', 'rule': 'linear' },
    { 'id': 117, 'sensorMeasurePoint_id': 38, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 118, 'sensorMeasurePoint_id': 39, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 0.5, 'max': 4.5, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    { 'id': 119, 'sensorMeasurePoint_id': 40, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 120, 'sensorMeasurePoint_id': 41, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 121, 'sensorMeasurePoint_id': 42, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 0, 'max': 0, 'min': 0, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 122, 'sensorMeasurePoint_id': 43, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 2.1, 'max': 4.8, 'min': 2.1, 'unit': 'v', 'rule': 'linear' },
    { 'id': 123, 'sensorMeasurePoint_id': 44, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 5, 'max': 5, 'min': 5, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 124, 'sensorMeasurePoint_id': 45, 'name': 'TPSConnector', 'precondition_id': 17, 'value': 0.5, 'max': 4.5, 'min': 0.5, 'unit': 'v', 'rule': 'linear' },
    //点火钥匙start档位故障
    { 'id': 125, 'sensorMeasurePoint_id': 37, 'name': 'TPSConnector', 'precondition_id': 21, 'value': 0.2, 'max': 0.2, 'min': 0.2, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 126, 'sensorMeasurePoint_id': 39, 'name': 'TPSConnector', 'precondition_id': 21, 'value': 0.2, 'max': 0.2, 'min': 0.2, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 127, 'sensorMeasurePoint_id': 43, 'name': 'TPSConnector', 'precondition_id': 21, 'value': 0.2, 'max': 0.2, 'min': 0.2, 'unit': 'v', 'rule': 'fixed' },
    { 'id': 128, 'sensorMeasurePoint_id': 45, 'name': 'TPSConnector', 'precondition_id': 21, 'value': 0.2, 'max': 0.2, 'min': 0.2, 'unit': 'v', 'rule': 'fixed' },
];
//电阻值表
exports.OhmTable = [
    { 'id': 1, 'name': '零值', 'value': 0, 'max': 0, 'min': 0, 'unit': 'Ω', 'rule': '' },
    { 'id': 2, 'name': '无穷大', 'value': 10e9, 'max': 10e9, 'min': 0, 'unit': '1.', 'rule': '' },
    { 'id': 3, 'name': '空气流量计部件1和2管脚之间电阻', 'value': 2.21, 'max': 2.69, 'min': 2.21, 'unit': 'kΩ', 'rule': 'linear' },
    { 'id': 4, 'name': '节气门部件1和2管脚之间电阻', 'value': 2, 'max': 5, 'min': 2, 'unit': 'Ω', 'rule': 'linear' },
];
//传感器电阻测量
// export let sensorMeasureOhm:SensorMeasureOhmType[] = [
//     {'id':1,'sensorMeasurePoint_id':4011,'name':'MAFBody','precondition_id':1,'sensorMeasurePoint_id2':4012,'name2':'MAFBody','OhmTable_id':3},
//     {'id':2,'sensorMeasurePoint_id':4012,'name':'MAFBody','precondition_id':1,'sensorMeasurePoint_id2':4011,'name2':'MAFBody','OhmTable_id':3},
//     {'id':3,'sensorMeasurePoint_id':4064,'name':'TPSBody','precondition_id':1,'sensorMeasurePoint_id2':4065,'name2':'MAFBody','OhmTable_id':4},
//     {'id':4,'sensorMeasurePoint_id':4065,'name':'TPSBody','precondition_id':1,'sensorMeasurePoint_id2':4064,'name2':'MAFBody','OhmTable_id':4},
// ];
exports.sensorMeasureOhm = [
    { 'id': 1, 'sensorMeasurePoint_id': 46, 'name': 'MAFBody', 'precondition_id': 1, 'sensorMeasurePoint_id2': 47, 'name2': 'MAFBody', 'OhmTable_id': 3 },
    { 'id': 2, 'sensorMeasurePoint_id': 47, 'name': 'MAFBody', 'precondition_id': 1, 'sensorMeasurePoint_id2': 46, 'name2': 'MAFBody', 'OhmTable_id': 3 },
    { 'id': 3, 'sensorMeasurePoint_id': 48, 'name': 'TPSBody', 'precondition_id': 1, 'sensorMeasurePoint_id2': 49, 'name2': 'MAFBody', 'OhmTable_id': 4 },
    { 'id': 4, 'sensorMeasurePoint_id': 49, 'name': 'TPSBody', 'precondition_id': 1, 'sensorMeasurePoint_id2': 48, 'name2': 'MAFBody', 'OhmTable_id': 4 },
];


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(25);
/**
 * @export
 * @template T
 * @template S
 * @function {T} multiArrayObjectdataProcessingMethods 筛选数据库对象数组表的抽象方法,主要用来提取对象数组的特征元素，组成新的对象
 * @param {T} data  点火钥匙，传感器，故障，诊断仪，油门踏板等公用模块的数组对象表
 * @param {S} prop1 获取第一个属性
 * @param {S} prop2 获取第二个属性
 * @returns
 */
function multiArrayObjectdataProcessingMethods(data, prop1, prop2) {
    return _.chain(data)
        .map(function (data) {
        return [data[prop1], data[prop2]]; //用于对象数组传感器，诊断仪，故障筛选
    })
        .fromPairs()
        .value();
}
exports.multiArrayObjectdataProcessingMethods = multiArrayObjectdataProcessingMethods;
/**
 * @export 筛选对象的特征方法:singleArrayObjectdataProcessingMethods,
 *         主要用来提取对象的特征值
 * @template T
 * @template S
 * @param {T} obj  单个对象，如点火钥匙，油门踏板，制动踏板对象的处理等
 * @param {S} key  获取key属性
 * @returns
 */
function singleArrayObjectdataProcessingMethods(obj, key) {
    return obj[key];
}
exports.singleArrayObjectdataProcessingMethods = singleArrayObjectdataProcessingMethods;


/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function webDataProcessing(dataObject, webDataObject, key1, key2) {
    //_.forEach(dataObject,function(){         
    for (var i in dataObject) {
        //if(typeof webDataObject !== 'undefined' ){
        // console.log('webDataObject',webDataObject)
        if (dataObject[i][key1] == webDataObject[key1]) {
            dataObject[i][key2] = webDataObject[key2];
        }
        //}
    }
    //return dataObject
    //})            
    return dataObject;
}
exports.webDataProcessing = webDataProcessing;
function webDataProcessing2(dataObject, webDataObject, key1, key2, key3) {
    //_.forEach(dataObject,function(){         
    for (var i in dataObject) {
        //if(typeof webDataObject !== 'undefined' ){
        // console.log('webDataObject',webDataObject)
        if (dataObject[i][key1] == webDataObject[key1]) {
            dataObject[i][key2] = webDataObject[key2];
            dataObject[i][key3] = webDataObject[key3];
        }
        //}
    }
    //return dataObject
    //})            
    return dataObject;
}
exports.webDataProcessing2 = webDataProcessing2;
/**
 * @export 筛选对象的特征方法:singleArrayObjectdataProcessingMethods,
 *         主要用来提取对象的特征值
 * @template T
 * @template S
 * @param {T} obj  单个对象，如点火钥匙，油门踏板，制动踏板对象的处理等
 * @param {S} key  获取key属性
 * @returns
 */
function singleArrayObjectdataProcessingMethods(obj, key) {
    return obj[key];
}
exports.singleArrayObjectdataProcessingMethods = singleArrayObjectdataProcessingMethods;


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(25);
/**
 * @export
 * @template T
 * @class PreconditionProcessingMethod 前置条件处理方法类
 * @param {T} sourceData 当前故障列表，传感器列表，诊断仪列表对象
 * @param {T} filterData 不同的故障，传感器安装，主动测试影响对象
 * @returns
 */
var PreconditionProcessingMethod = /** @class */ (function () {
    function PreconditionProcessingMethod() {
    }
    PreconditionProcessingMethod.prototype.currentFaultInfluence = function (sourceData, filterData) {
        if (_.isMatch(sourceData, filterData))
            return 'normal';
        else
            return 'unnormal';
    };
    PreconditionProcessingMethod.prototype.sensorInstallInfluence = function (sourceData, filterData) {
        if (_.isMatch(sourceData, filterData))
            return 'install';
        else
            return 'uninstall';
    };
    PreconditionProcessingMethod.prototype.obdActiveTestInfulence = function (sourceData, filterData) {
        if (_.isMatch(sourceData, filterData))
            return 'notActiveTest';
        else
            return 'ActiveTest';
    };
    return PreconditionProcessingMethod;
}());
exports.PreconditionProcessingMethod = PreconditionProcessingMethod;
/**
 * @inner
 * @template A
 * @template S
 * @function findObjectMethods 对象数组查找方法
 * @param {A} data  当前要查取的对象数组
 * @param {A} filterObject 当前要查取对象数组的对象
 * @param {S} prop1  当前要查取对象数组的属性值
 * @returns
 */
function findObjectMethods(data, filterObject, prop1) {
    return _.result(_.find(data, filterObject), prop1);
}
/**
 * @inner
 * @template A
 * @template S
 * @function spliceObjectMethods 对象拼接方法
 * @param {A} obj    当前对象
 * @param {S} prop1  当前对象的属性值
 * @returns
 */
function spliceObjectMethods(obj, prop1) {
    return _.assign(obj, { precondition_id: prop1 });
}
/**
 * @inner
 * @template A
 * @template S
 * @function filterObjectMethods 对象数组过滤方法
 * @param {A} data  当前对象数组
 * @param {S} obj   当前对象数组的对象
 * @returns
 */
function filterObjectMethods(data, obj) {
    return _.filter(data, obj);
}
/**
* @inner
* @template A
* @template S
* @function recombiningObjectMethods 对象重新组合方法
* @param {A} data  当前要查取的对象数组
* @param {S} prop1  当前要查取数组对象属性
* @param {S} prop2  当前要查取数组对象属性
* @returns
*/
// function recombiningObjectMethods<A extends ArrayObjectInterface, S extends keyof A>(data:A[], prop1: S, prop2: S) {
//   return _.chain(data)
//     .map(function (data:A) {
//       return [data[prop1], data[prop2]]  
//     })
//     .fromPairs()
//     .value();
// }
/**
 * @export 筛选对象的特征方法:singleArrayObjectdataProcessingMethods,
 *         主要用来提取对象的特征值
 * @template T
 * @template S
 * @param {T} obj  单个对象，如点火钥匙，油门踏板，制动踏板对象的处理等
 * @param {S} key  获取key属性
 * @returns
 */
// function singleArrayObjectdataProcessingMethods<T extends ArrayObjectInterface,S extends keyof T>(obj:T,key:S){
//         return obj[key];
// }
/**
 * @export
 * @template A
 * @template S
 * @template O
 * @class FindMeetConditionData 数据输出处理类
 * @param {A} proconditionList 前置条件对象数组
 * @param {O} precondition 当前的前置条件对象
 * @param {A} dataList 当前要查取的数组对象表
 * @param {A} meetData 当前要获取数组对象表里数据的具体对象
 * @returns
 */
var FindMeetConditionData = /** @class */ (function () {
    function FindMeetConditionData() {
    }
    FindMeetConditionData.prototype.filterMethods = function (proconditionList, precondition, dataList, meetData, prop1) {
        var id = findObjectMethods(proconditionList, precondition, prop1);
        var meetDataObject = spliceObjectMethods(meetData, id);
        var dataObject = filterObjectMethods(dataList, meetDataObject);
        return dataObject;
    };
    return FindMeetConditionData;
}());
exports.FindMeetConditionData = FindMeetConditionData;
//转速数据查找方法
// export class FindMeetConditionDataStream<A extends ArrayObjectInterface,O,S extends keyof A>{
//     engineSpeed(proconditionList:A[],precondition:O,dataList:A[],meetData:O,prop1:S){    
//      let id = findObjectMethods(proconditionList,precondition,prop1);    
//      let meetDataObject = spliceObjectMethods(meetData,id);
//      let dataObject = filterObjectMethods(dataList,meetDataObject);
//      return dataObject;
//     }
// }
/**
 * @export
 * @template A
 * @template S
 * @template O
 * @class DataStreamComputerOverload 数据流动态计算类
 * @param {A} dataObject 对象数组
 * @param {O} param1 动态计算值
 * @param {A} key 对象数组的属性一
 * @param {A} key1 对象数组的属性二
 * @param {A} needEditProp2 对象数组的属性值
 * @returns
 */
var DataStreamComputerOverload = /** @class */ (function () {
    function DataStreamComputerOverload() {
    }
    DataStreamComputerOverload.prototype.overloadMethods = function (dataObject, key, key2, needEditProp2, param1) {
        _.forEach(dataObject, function (dataObject) {
            if (dataObject[key] === needEditProp2) {
                dataObject[key2] = param1;
            }
        });
        //return JSON.stringify(dataObject);  
        return dataObject;
    };
    return DataStreamComputerOverload;
}());
exports.DataStreamComputerOverload = DataStreamComputerOverload;
/**
 *
 * @export
 * @template A
 * @template O
 * @template S
 * @template A
 * @param {A} filterObject 初始化对象，主要用来查表为空时的处理方法
 * @param {S} key  对象数组的属性一
 * @param {S} key1 对象数组的属性二
 * @param {A[]} arr 包装成数组对象
 * @returns
 */
function nullProcessing(dataObject, filterObject, key) {
    _.forEach(dataObject, function () {
        dataObject[key] = filterObject[key];
    });
    //let a =JSON.stringify(dataObject);
    var arr = new Array();
    arr.push(dataObject);
    return arr;
}
exports.nullProcessing = nullProcessing;
/**
 *
 * @param filterObject 临时测试页面传递数组更改数组对象表的方法
 * @param key
 * @param key1
 * @param arr
 */
function nullProcessing1(/*dataObject:A,*/ filterObject, key, key1, arr) {
    _.forEach(arr, function () {
        for (var i in arr) {
            if (arr[i][key] == filterObject[key]) {
                //arr[i][key] = filterObject[key];
                arr[i][key1] = filterObject[key1];
            }
        }
        return arr;
    });
    console.log('newArr', arr);
    return arr;
}
exports.nullProcessing1 = nullProcessing1;


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mediator_commonObject_1 = __webpack_require__(24);
var onBoardDiagnostics_service_1 = __webpack_require__(60);
var onBoardDiagnostics_controller_1 = __webpack_require__(468);
var onBoardDiagnostics_dataCalculator_1 = __webpack_require__(469);
/**
 * 数据输入部分
 */
var AbstractOnBoardDiagnosticsObject = /** @class */ (function () {
    function AbstractOnBoardDiagnosticsObject() {
        this.commonFacade = new mediator_commonObject_1.CommonFacade();
        this.preconditionStatus = new onBoardDiagnostics_service_1.PreconditionProcessingMethod();
    }
    return AbstractOnBoardDiagnosticsObject;
}());
var OnBoardDiagnosticsPreconditionObject = /** @class */ (function (_super) {
    __extends(OnBoardDiagnosticsPreconditionObject, _super);
    function OnBoardDiagnosticsPreconditionObject() {
        return _super.call(this) || this;
    }
    // onBoardDiagnosticsPreconditionObject(str:String,filterObject:Object){
    //     switch(str){
    //      case "keySwitchObject":
    //         return this.commonFacade.preconditionObjectKeySwitch();           
    //      case "sensorObject" :
    //          let sensorObject = this.commonFacade.preconditionObjectSensor();
    //          return this.preconditionStatus.sensorInstallInfluence(sensorObject,filterObject);
    //      case "faultObject" :
    //          let faultObject = this.commonFacade.preconditionObjectFault();
    //          return this.preconditionStatus.currentFaultInfluence(faultObject,filterObject);             
    //      case "activeObject" :
    //          let activeObject = this.commonFacade.preconditionObjectActiveTest();
    //          return this.preconditionStatus.obdActiveTestInfulence(activeObject,filterObject);       
    //      default :             
    //          return "onBoardDiagnosticsPrecondition methods nothing happen";
    //      }        
    // }  
    OnBoardDiagnosticsPreconditionObject.prototype.obdPreconditionObjectKeySwitch = function () {
        return this.commonFacade.preconditionObjectKeySwitch();
    };
    OnBoardDiagnosticsPreconditionObject.prototype.obdPreconditionObjectSensor = function (filterObject) {
        var sensorObject = this.commonFacade.preconditionObjectSensor();
        return this.preconditionStatus.sensorInstallInfluence(sensorObject, filterObject);
    };
    OnBoardDiagnosticsPreconditionObject.prototype.obdPreconditionObjectFault = function (filterObject) {
        var faultObject = this.commonFacade.preconditionObjectFault();
        return this.preconditionStatus.currentFaultInfluence(faultObject, filterObject);
    };
    OnBoardDiagnosticsPreconditionObject.prototype.obdPreconditionObjectActiveTest = function (filterObject) {
        var activeObject = this.commonFacade.preconditionObjectActiveTest();
        return this.preconditionStatus.obdActiveTestInfulence(activeObject, filterObject);
    };
    return OnBoardDiagnosticsPreconditionObject;
}(AbstractOnBoardDiagnosticsObject));
exports.OnBoardDiagnosticsPreconditionObject = OnBoardDiagnosticsPreconditionObject;
var InstrumentPanelInput = /** @class */ (function (_super) {
    __extends(InstrumentPanelInput, _super);
    function InstrumentPanelInput() {
        return _super.call(this) || this;
    }
    InstrumentPanelInput.prototype.getAcceleratorPanel = function () {
        return this.commonFacade.preconditionObjectAPP();
    };
    return InstrumentPanelInput;
}(AbstractOnBoardDiagnosticsObject));
exports.InstrumentPanelInput = InstrumentPanelInput;
/**
 * 数据输出部分
 */
var OnBoardDiagnosticsDataOut = /** @class */ (function () {
    function OnBoardDiagnosticsDataOut() {
        this.obdDataOutFacade = new onBoardDiagnostics_controller_1.OBDDataOutFacade();
        this.preconditionObjectFacade = new onBoardDiagnostics_controller_1.PreconditionObjectFacade();
        this.obdDataCalculatorFacade = new onBoardDiagnostics_dataCalculator_1.DynamicCalculatorFacade();
        this.dataOverloadCalculator = new onBoardDiagnostics_service_1.DataStreamComputerOverload();
    }
    return OnBoardDiagnosticsDataOut;
}());
//诊断仪数据输出
var FindOnBoardDiagnosticsData = /** @class */ (function (_super) {
    __extends(FindOnBoardDiagnosticsData, _super);
    function FindOnBoardDiagnosticsData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.meetDataEngineSpeed = { 'name': 'mEngineModuleEngineSpeed', 'displayFlag': '发动机转速' };
        _this.meetDataMAF = { 'name': 'mEngineModuleMAF', 'displayFlag': '空气流量' };
        _this.meetDataInjectorTime = { 'name': 'mEngineModuleInjectorTime', 'displayFlag': '喷油时间' };
        _this.obdVehicleSpeed = { 'name': 'mEngineModuleVehicleSpeed', 'displayFlag': '车速' };
        _this.obdCoolantTemp = { 'name': 'mEngineModuleCoolantTemp', 'displayFlag': '冷却液温度' };
        _this.obdIntakeAir = { 'name': 'mEngineModuleIntakeAir', 'displayFlag': '进气温度' };
        _this.obdBattVolt = { 'name': 'mEngineModuleBattVolt', 'displayFlag': '蓄电池电压' };
        _this.obdAccelerateSensorNo1 = { 'name': 'mEngineModuleAccelerateSensorNo1', 'displayFlag': '加速踏板位置传感器1' };
        _this.obdAccelerateSensorNo2 = { 'name': 'mEngineModuleAccelerateSensorNo2', 'displayFlag': '加速踏板位置传感器2' };
        _this.obdTpsSensorVolt = { 'name': 'mEngineModuleTpsSensorVolt', 'displayFlag': '节气门位置传感器1' };
        _this.obdTpsSensor2Volt = { 'name': 'mEngineModuleTpsSensor2Volt', 'displayFlag': '节气门位置传感器2' };
        _this.obdEvapVsv = { 'name': 'mEngineModuleEvapVsv', 'displayFlag': '炭罐电磁阀占空比' };
        _this.obdEvapPurgeFlow = { 'name': 'mEngineModuleEvapPurgeFlow', 'displayFlag': 'EVAP净化流量' };
        _this.obdEvapPurgeDensityLearnValue = { 'name': 'mEngineModuleEvapPurgeDensityLearnValue', 'displayFlag': '净化密度学习值' };
        _this.obdEvapPurgeVSV = { 'name': 'mEngineModuleEvapPurgeVSV', 'displayFlag': '清污阀占空比状态' };
        _this.obdTargetAFRatio = { 'name': 'mEngineModuleTargetAFRatio', 'displayFlag': '目标空燃比' };
        _this.obdAFLambadaB1S1 = { 'name': 'mEngineModuleAFLambadaB1S1', 'displayFlag': '空燃比' };
        _this.obdAFVoltB1S1 = { 'name': 'mEngineModuleAFVoltB1S1', 'displayFlag': '空燃比传感器电压' };
        _this.obdAFCurrentB1S1 = { 'name': 'mEngineModuleAFCurrentB1S1', 'displayFlag': '空燃比传感器电流' };
        _this.obdFuelSFT = { 'name': 'mEngineModuleFuleSFT', 'displayFlag': '短期燃油修正' };
        _this.obdFuelLFT = { 'name': 'mEngineModuleFuelLFT', 'displayFlag': '长期燃油修正' };
        _this.obdIgnAdvance = { 'name': 'mEngineModuleIgnAdvance', 'displayFlag': '点火提前角' };
        _this.obdIgnCount = { 'name': 'mEngineModuleIgnCount', 'displayFlag': '点火计数器' };
        _this.obdCylinder1MisCount = { 'name': 'mEngineModuleCylinder1MisCount', 'displayFlag': '1缸失火数' };
        _this.obdCylinder2MisCount = { 'name': 'mEngineModuleCylinder2MisCount', 'displayFlag': '2缸失火数' };
        _this.obdCylinder3MisCount = { 'name': 'mEngineModuleCylinder3MisCount', 'displayFlag': '3缸失火数' };
        _this.obdCylinder4MisCount = { 'name': 'mEngineModuleCylinder4MisCount', 'displayFlag': '4缸失火数' };
        return _this;
    }
    FindOnBoardDiagnosticsData.prototype.obdEngineSpeed = function () {
        var engineSpeedList = this.obdDataOutFacade.getOBDEngineSpeed(this.preconditionObjectFacade.getPreconditionEngineSpeed(), this.meetDataEngineSpeed);
        var speedMethods = this.obdDataCalculatorFacade.getSpeed();
        var calculotorEngineSpeed = this.dataOverloadCalculator.overloadMethods(engineSpeedList, 'rule', 'value', 'linearComputer', speedMethods);
        return calculotorEngineSpeed;
    };
    FindOnBoardDiagnosticsData.prototype.obdMAF = function () {
        var airFlowList = this.obdDataOutFacade.getOBDMAF(this.preconditionObjectFacade.getPreconditionMAF(), this.meetDataMAF);
        var airFlowMethods = this.obdDataCalculatorFacade.getMAF();
        //console.log('airFlowMethods:',airFlowMethods)
        var calculatorMAF = this.dataOverloadCalculator.overloadMethods(airFlowList, 'rule', 'value', 'linearComputer', airFlowMethods);
        return calculatorMAF;
    };
    FindOnBoardDiagnosticsData.prototype.obdInjectorTime = function () {
        var injectList = this.obdDataOutFacade.getOBDEngineInjectorTime(this.preconditionObjectFacade.getPreconditionInjectorTime(), this.meetDataInjectorTime);
        var injectMethods = this.obdDataCalculatorFacade.getInjectorTime();
        var calculatorInject = this.dataOverloadCalculator.overloadMethods(injectList, 'rule', 'value', 'linearComputer', injectMethods);
        return calculatorInject;
    };
    FindOnBoardDiagnosticsData.prototype.getVehicleSpeed = function () {
        var meetData = this.meetDataInjectorTime;
        var precondition = this.preconditionObjectFacade.getVehicleSpeed();
        var dataList = this.obdDataOutFacade.getVehicleSpeed(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getVehicleSpeed();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getCoolantTemp = function () {
        var meetData = this.obdCoolantTemp;
        var precondition = this.preconditionObjectFacade.getCoolantTemp();
        var dataList = this.obdDataOutFacade.getCoolantTemp(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getCoolantTemp();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getIntakeAir = function () {
        var meetData = this.obdIntakeAir;
        var precondition = this.preconditionObjectFacade.getIntakeAir();
        var dataList = this.obdDataOutFacade.getIntakeAir(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getIntakeAir();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getBattVolt = function () {
        var meetData = this.obdBattVolt;
        var precondition = this.preconditionObjectFacade.getBattVolt();
        var dataList = this.obdDataOutFacade.getBattVolt(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getBattVolt();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getAccelerateSensorNo1 = function () {
        var meetData = this.obdAccelerateSensorNo1;
        var precondition = this.preconditionObjectFacade.getAccelerateSensorNo1();
        var dataList = this.obdDataOutFacade.getAccelerateSensorNo1(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getAccelerateSensorNo1();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getAccelerateSensorNo2 = function () {
        var meetData = this.obdAccelerateSensorNo2;
        var precondition = this.preconditionObjectFacade.getAccelerateSensorNo2();
        var dataList = this.obdDataOutFacade.getAccelerateSensorNo2(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getAccelerateSensorNo2();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getTpsSensorVolt = function () {
        var meetData = this.obdTpsSensorVolt;
        var precondition = this.preconditionObjectFacade.getTpsSensorVolt();
        var dataList = this.obdDataOutFacade.getTpsSensorVolt(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getTpsSensorVolt();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getTpsSensor2Volt = function () {
        var meetData = this.obdTpsSensor2Volt;
        var precondition = this.preconditionObjectFacade.getTpsSensor2Volt();
        var dataList = this.obdDataOutFacade.getTpsSensor2Volt(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getTpsSensor2Volt();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getEvapVsv = function () {
        var meetData = this.obdEvapVsv;
        var precondition = this.preconditionObjectFacade.getEvapVsv();
        var dataList = this.obdDataOutFacade.getEvapVsv(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getEvapVsv();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getEvapPurgeFlow = function () {
        var meetData = this.obdEvapPurgeFlow;
        var precondition = this.preconditionObjectFacade.getEvapPurgeFlow();
        var dataList = this.obdDataOutFacade.getEvapPurgeFlow(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getEvapPurgeFlow();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getEvapPurgeDensityLearnValue = function () {
        var meetData = this.obdEvapPurgeDensityLearnValue;
        var precondition = this.preconditionObjectFacade.getEvapPurgeDensityLearnValue();
        var dataList = this.obdDataOutFacade.getEvapPurgeDensityLearnValue(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getEvapPurgeDensityLearnValue();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getEvapPurgeVSV = function () {
        var meetData = this.obdEvapPurgeVSV;
        var precondition = this.preconditionObjectFacade.getEvapPurgeVSV();
        var dataList = this.obdDataOutFacade.getEvapPurgeVSV(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getEvapPurgeVSV();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getTargetAFRatio = function () {
        var meetData = this.obdTargetAFRatio;
        var precondition = this.preconditionObjectFacade.getTargetAFRatio();
        var dataList = this.obdDataOutFacade.getTargetAFRatio(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getTargetAFRatio();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getAFLambadaB1S1 = function () {
        var meetData = this.obdAFLambadaB1S1;
        var precondition = this.preconditionObjectFacade.getAFLambadaB1S1();
        var dataList = this.obdDataOutFacade.getAFLambadaB1S1(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getAFLambadaB1S1();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getAFVoltB1S1 = function () {
        var meetData = this.obdAFVoltB1S1;
        var precondition = this.preconditionObjectFacade.getAFVoltB1S1();
        var dataList = this.obdDataOutFacade.getAFVoltB1S1(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getAFVoltB1S1();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getAFCurrentB1S1 = function () {
        var meetData = this.obdAFCurrentB1S1;
        var precondition = this.preconditionObjectFacade.getAFCurrentB1S1();
        var dataList = this.obdDataOutFacade.getAFCurrentB1S1(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getAFCurrentB1S1();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getFuelSFT = function () {
        var meetData = this.obdFuelSFT;
        var precondition = this.preconditionObjectFacade.getFuelSFT();
        var dataList = this.obdDataOutFacade.getFuelSFT(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getFuelSFT();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getFuelLFT = function () {
        var meetData = this.obdFuelLFT;
        var precondition = this.preconditionObjectFacade.getFuelLFT();
        var dataList = this.obdDataOutFacade.getFuelLFT(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getFuelLFT();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getIgnAdvance = function () {
        var meetData = this.obdIgnAdvance;
        var precondition = this.preconditionObjectFacade.getIgnAdvance();
        var dataList = this.obdDataOutFacade.getIgnAdvance(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getIgnAdvance();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getIgnCount = function () {
        var meetData = this.obdIgnCount;
        var precondition = this.preconditionObjectFacade.getIgnCount();
        var dataList = this.obdDataOutFacade.getIgnCount(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getIgnCount();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getCylinder1MisCount = function () {
        var meetData = this.obdCylinder1MisCount;
        var precondition = this.preconditionObjectFacade.getCylinder1MisCount();
        var dataList = this.obdDataOutFacade.getCylinder1MisCount(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getCylinder1MisCount();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getCylinder2MisCount = function () {
        var meetData = this.obdCylinder2MisCount;
        var precondition = this.preconditionObjectFacade.getCylinder2MisCount();
        var dataList = this.obdDataOutFacade.getCylinder2MisCount(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getCylinder2MisCount();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getCylinder3MisCount = function () {
        var meetData = this.obdCylinder3MisCount;
        var precondition = this.preconditionObjectFacade.getCylinder3MisCount();
        var dataList = this.obdDataOutFacade.getCylinder3MisCount(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getCylinder3MisCount();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    FindOnBoardDiagnosticsData.prototype.getCylinder4MisCount = function () {
        var meetData = this.obdCylinder4MisCount;
        var precondition = this.preconditionObjectFacade.getCylinder4MisCount();
        var dataList = this.obdDataOutFacade.getCylinder4MisCount(precondition, meetData);
        var calculator = this.obdDataCalculatorFacade.getCylinder4MisCount();
        var result = this.dataOverloadCalculator.overloadMethods(dataList, 'rule', 'value', 'linearComputer', calculator);
        return result;
    };
    return FindOnBoardDiagnosticsData;
}(OnBoardDiagnosticsDataOut));
exports.FindOnBoardDiagnosticsData = FindOnBoardDiagnosticsData;


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(25);
//前置条件处理方法
var PreconditionProcessingMethod = /** @class */ (function () {
    function PreconditionProcessingMethod() {
    }
    PreconditionProcessingMethod.prototype.currentFaultInfluence = function (sourceData, filterData) {
        if (_.isMatch(sourceData, filterData))
            return 'normal';
        else
            return 'unnormal';
    };
    PreconditionProcessingMethod.prototype.sensorInstallInfluence = function (sourceData, filterData) {
        if (_.isMatch(sourceData, filterData))
            return 'install';
        else
            return 'uninstall';
    };
    PreconditionProcessingMethod.prototype.obdActiveTestInfulence = function (sourceData, filterData) {
        if (_.isMatch(sourceData, filterData))
            return 'notActiveTest';
        else
            return 'ActiveTest';
    };
    return PreconditionProcessingMethod;
}());
exports.PreconditionProcessingMethod = PreconditionProcessingMethod;
/**
 * @inner
 * @template A
 * @template S
 * @function findObjectMethods 对象数组查找方法
 * @param {A} data  当前要查取的对象数组
 * @param {A} filterObject 当前要查取对象数组的对象
 * @param {S} prop1  当前要查取对象数组的属性值
 * @returns
 */
function findObjectMethods(data, filterObject, prop1) {
    return _.result(_.find(data, filterObject), prop1);
}
/**
 * @inner
 * @template A
 * @template S
 * @function spliceObjectMethods 对象拼接方法
 * @param {A} obj    当前对象
 * @param {S} prop1  当前对象的属性值
 * @returns
 */
function spliceObjectMethods(obj, prop1) {
    return _.assign(obj, { precondition_id: prop1 });
}
/**
 * @inner
 * @template A
 * @template S
 * @function filterObjectMethods 对象数组过滤方法
 * @param {A} data  当前对象数组
 * @param {S} obj   当前对象数组的对象
 * @returns
 */
function filterObjectMethods(data, obj) {
    return _.filter(data, obj);
}
/**
* @inner
* @template A
* @template S
* @function recombiningObjectMethods 对象重新组合方法
* @param {A} data  当前要查取的对象数组
* @param {S} prop1  当前要查取数组对象属性
* @param {S} prop2  当前要查取数组对象属性
* @returns
*/
// function recombiningObjectMethods<A extends ArrayObjectInterface, S extends keyof A>(data:A[], prop1: S, prop2: S) {
//   return _.chain(data)
//     .map(function (data:A) {
//       return [data[prop1], data[prop2]]  
//     })
//     .fromPairs()
//     .value();
// }
/**
 * @export 筛选对象的特征方法:singleArrayObjectdataProcessingMethods,
 *         主要用来提取对象的特征值
 * @template T
 * @template S
 * @param {T} obj  单个对象，如点火钥匙，油门踏板，制动踏板对象的处理等
 * @param {S} key  获取key属性
 * @returns
 */
// function singleArrayObjectdataProcessingMethods<T extends ArrayObjectInterface,S extends keyof T>(obj:T,key:S){
//         return obj[key];
// }
/**
 * @export
 * @template A
 * @template S
 * @template O
 * @class FindMeetConditionData 数据输出处理类
 * @param {A} proconditionList 前置条件对象数组
 * @param {O} precondition 当前的前置条件对象
 * @param {A} dataList 当前要查取的数组对象表
 * @param {A} meetData 当前要获取数组对象表里数据的具体对象
 * @returns
 */
var FindMeetConditionData = /** @class */ (function () {
    function FindMeetConditionData() {
    }
    FindMeetConditionData.prototype.filterMethods = function (proconditionList, precondition, dataList, meetData, prop1) {
        var id = findObjectMethods(proconditionList, precondition, prop1);
        var meetDataObject = spliceObjectMethods(meetData, id);
        var dataObject = filterObjectMethods(dataList, meetDataObject);
        return dataObject;
    };
    return FindMeetConditionData;
}());
exports.FindMeetConditionData = FindMeetConditionData;
//转速数据查找方法
// export class FindMeetConditionDataStream<A extends ArrayObjectInterface,O,S extends keyof A>{
//     engineSpeed(proconditionList:A[],precondition:O,dataList:A[],meetData:O,prop1:S){    
//      let id = findObjectMethods(proconditionList,precondition,prop1);    
//      let meetDataObject = spliceObjectMethods(meetData,id);
//      let dataObject = filterObjectMethods(dataList,meetDataObject);
//      return dataObject;
//     }
// }
/**
 * @export
 * @template A
 * @template S
 * @template O
 * @class DataStreamComputerOverload 数据流动态计算类
 * @param {A} dataObject 对象数组
 * @param {O} param1 动态计算值
 * @param {A} key 对象数组的属性一
 * @param {A} key1 对象数组的属性二
 * @param {A} needEditProp2 对象数组的属性值
 * @returns
 */
var DataStreamComputerOverload = /** @class */ (function () {
    function DataStreamComputerOverload() {
    }
    DataStreamComputerOverload.prototype.overloadMethods = function (dataObject, key, key2, needEditProp2, param1) {
        _.forEach(dataObject, function (dataObject) {
            if (dataObject[key] === needEditProp2) {
                dataObject[key2] = param1;
            }
        });
        //return JSON.stringify(dataObject);  
        return dataObject;
    };
    return DataStreamComputerOverload;
}());
exports.DataStreamComputerOverload = DataStreamComputerOverload;
/**
 *
 * @export
 * @template A
 * @template O
 * @template S
 * @template A
 * @param {A} filterObject 初始化对象，主要用来查表为空时的处理方法
 * @param {A} dataObject 初始化对象，主要用来查表为空时的处理方法
 * @param {S} key  对象数组的属性一
 * @param {S} key1 对象数组的属性二
 * @param {A[]} arr 包装成数组对象
 * @returns
 */
function nullProcessing(dataObject, filterObject, key) {
    _.forEach(dataObject, function () {
        dataObject[key] = filterObject[key];
    });
    //let a =JSON.stringify(dataObject);
    var arr = new Array();
    arr.push(dataObject);
    return arr;
}
exports.nullProcessing = nullProcessing;
/**
*
* @export
* @template A
* @template O
* @template S
* @template A
* @param {A} filterObject 初始化对象，主要用来查表为空时的处理方法
* @param {A} dataObject 初始化对象，主要用来查表为空时的处理方法
* @param {S} key  对象数组的属性一
* @param {S} key1 对象数组的属性二
* @param {A[]} arr 包装成数组对象
* @returns */
function nullProcessing1(/*dataObject:A,*/ filterObject, key, key1, arr) {
    _.forEach(arr, function () {
        for (var i in arr) {
            if (arr[i][key] == filterObject[key]) {
                //arr[i][key] = filterObject[key];
                arr[i][key1] = filterObject[key1];
            }
        }
        return arr;
    });
    console.log('newArr', arr);
    return arr;
}
exports.nullProcessing1 = nullProcessing1;
/**
*
* @export
* @template A
* @template O
* @template S
* @template A
* @param {A} filterObject 初始化对象，主要用来查表为空时的处理方法
* @param {S} key  对象数组的属性一
* @param {S} key1 对象数组的属性二
* @param {A[]} arr 包装成数组对象
* @returns
*/
function obdNullProcessing(dataObject, filterObject, key, key1) {
    _.forEach(dataObject, function () {
        dataObject[key] = filterObject[key];
        dataObject[key1] = filterObject[key1];
    });
    //let a =JSON.stringify(dataObject);
    var arr = new Array();
    arr.push(dataObject);
    return arr;
}
exports.obdNullProcessing = obdNullProcessing;


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//点火钥匙
exports.keySwitch = [
    { 'id': 1, 'name': 'keySwitchPostion', 'status': 'off' },
];
//故障点列表
exports.fault = [
    { 'id': 1, 'name': 'TPS_Body_Fault', 'status': 'normal' },
    { 'id': 2, 'name': 'TPS_Conn_Open_Pin1', 'status': 'normal' }
];
//故障影响传感器测量点，影响哪些点，改变那些点的故障状态，故障不一定影响传感器所有的测量点,所以是否改成测量点
var fault_link_sensor_TPSConnector = [
    { 'id': 1, 'fault_id': 1, 'sensor_id': 3, 'sensorMeasurePoint_id': 43 },
    { 'id': 2, 'fault_id': 1, 'sensor_id': 3, 'sensorMeasurePoint_id': 45 },
    { 'id': 3, 'fault_id': 1, 'sensor_id': 5, 'sensorMeasurePoint_id': 37 },
    { 'id': 4, 'fault_id': 1, 'sensor_id': 5, 'sensorMeasurePoint_id': 39 },
];
//传感器列表
exports.sensor = [
    { 'id': 1, 'name': 'BATTConnector', 'status': 'install' },
    { 'id': 2, 'name': 'MAFConnector', 'status': 'install' },
    { 'id': 3, 'name': 'TPSConnector', 'status': 'install' },
    { 'id': 4, 'name': 'APPConnector', 'status': 'install' },
    { 'id': 5, 'name': 'ECMConnector', 'status': 'install' },
    { 'id': 6, 'name': 'TPSBody', 'status': 'install' },
    { 'id': 7, 'name': 'ECMBody', 'status': 'install' },
];
//诊断仪
exports.onBoardDiagnostics = [
    { 'id': 1, 'name': 'ClearEngineModuleFaultCode', 'displayFlag': '清除故障码', 'status': 'notClearCode', 'interval': 2, 'rule': 'fixed' },
    { 'id': 2, 'name': 'ReadEngineModuleFaultCode', 'displayFlag': '读取故障码', 'status': 'notReadCode', 'interval': 2, 'rule': 'fixed' },
    { 'id': 3, 'name': 'ReadEngineModuleEngineData', 'displayFlag': '读取数据流', 'status': 'notReadEngineData', 'interval': 2, 'rule': 'fixed' },
    { 'id': 4, 'name': 'ActiveTest', 'displayFlag': '主动测试', 'status': 'notActiveTest', 'rule': 'fixed' },
];
exports.acceleratorPedal = [
    { 'id': 1, 'name': 'GetAPPCurrentPostion', 'displayFlag': '油门踏板', 'value': 16, 'max': 100, 'min': 0, 'rule': 'linear' },
];
exports.multimeterProbe = [
    { 'id': 1, 'name': 'multimeterRedProbe', 'displayFlag': 'BATTConnector', 'value': 0, 'max': 5000, 'min': 0, 'rule': 'dynamic' },
    { 'id': 2, 'name': 'multimeterBlackProbe', 'displayFlag': 'BATTConnector', 'value': 0, 'max': 5000, 'min': 0, 'rule': 'dynamic' },
];
exports.multimeterStalls = [
    { 'id': 2, 'name': 'Off', 'displayFlag': '无', 'value': 0, 'max': 1, 'min': 0, 'rule': 'fixed' },
    { 'id': 3, 'name': 'ACVolt', 'displayFlag': '~V', 'value': 0, 'max': 1, 'min': 0, 'rule': 'fixed' },
    { 'id': 4, 'name': 'DCVolt', 'displayFlag': 'V', 'value': 0, 'max': 1, 'min': 0, 'rule': 'fixed' },
    { 'id': 5, 'name': 'DCmVolt', 'displayFlag': 'mV', 'value': 0, 'max': 1, 'min': 0, 'rule': 'fixed' },
    { 'id': 6, 'name': 'Pass2Ohm', 'displayFlag': 'Ω', 'value': 0, 'max': 1, 'min': 0, 'rule': 'fixed' },
    { 'id': 7, 'name': 'hFE', 'displayFlag': '无', 'value': 0, 'max': 1, 'min': 0, 'rule': 'fixed' },
    { 'id': 8, 'name': 'Ampere', 'displayFlag': 'A', 'value': 0, 'max': 1, 'min': 0, 'rule': 'fixed' },
    { 'id': 9, 'name': 'mAmpere', 'displayFlag': 'mA', 'value': 0, 'max': 1, 'min': 0, 'rule': 'fixed' },
    { 'id': 10, 'name': 'microAmpere', 'displayFlag': '无', 'value': 0, 'max': 1, 'min': 0, 'rule': 'fixed' },
];


/***/ })

},[462]);
//# sourceMappingURL=main.js.map