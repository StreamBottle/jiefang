import { MultimeterService } from './../../components/multimeter/multimeter.service';
import { GearPanelService } from './../../components/gear_panel/gear_panel.service';
import { DashboardService } from './../../components/dashboard/dashboard.service';
import { Injectable } from "@angular/core";
import { AppService } from "../../index/app.service";

declare var $: any;
@Injectable()
export class HomeService {
  toolIsShow: boolean = false;//工具箱显示
  controlCenterIsShow: boolean = false;//工具箱显示
  multimeterTaskIsShow: boolean = false;//万用表遮罩
  toolNavIsShow:boolean=false //左侧工具栏是否显示
  currentShowHotArea:string='';// 当前要显示的热区
  constructor(
    private dashboardService: DashboardService,
    private gearPanelService: GearPanelService,
    private multimeterService: MultimeterService,
    private appService: AppService
  ) { }
  // 关闭工具，下方工具框显示
  closeTool(param) {
    switch(param){
      case 'multimeters':
      this.multimeterTaskIsShow=false;
      this.multimeterService.Mdata.multimeterStatus=false;
      break;
    }
  }
  // 控制中心或工具栏显示或隐藏
  platformRouterTurn(cont) {
    switch (cont) {
      case 'measureTool':
      this.toolIsShow=!this.toolIsShow;
        break;
      case 'controlCenter':
      if(this.dashboardService.dashboardStatus){
        if( $('.contrlcenter').css('display')=='none'){
          $('.contrlcenter').css('display','block');
        }else{
          $('.contrlcenter').css('display','none');
        }
      }else{
        this.dashboardService.dashboardStatus=true;
      }
        break;
    }
  }
  // 切换页面工具箱的工具显示
  closeAll() {
    this.closeTool("multimeters");
    this.toolIsShow=false;
  }
  // 根据传进的不同参数显示不同的工具
  toolShow(str) {
    // 增加判断条件  只有当工具箱仪器隐藏的时候才可以显示    
    switch (str) {
      case "multimeters":
      if( this.multimeterTaskIsShow)return;
        this.multimeterService.Mdata.multimeterStatus=true;
        this.multimeterTaskIsShow=true;
        break;
      default:
        return;
    }
  }
}
