import { HomeService } from './../../views/home/home.service';
import {
  Component,
  Injectable,
  OnDestroy,
  AfterContentInit,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { MultimeterService } from "./multimeter.service";
import { DashboardService } from "../dashboard/dashboard.service";

declare var $: any;
declare var io: any;
@Component({
  selector: "multimeter",
  styleUrls: ["./multimeter.component.scss"],
  templateUrl: "./multimeter.component.html",
  providers: []
}) // @Injectable()
export class MultimeterComponent implements OnDestroy, OnInit {
  //校验方法
  @Input('currentShowHotArea') currentShowHotArea:any;
  @Output() cancelAnimation = new EventEmitter<void>();

  constructor(
    public multimeterService: MultimeterService,
    public homeService: HomeService,
    public dashboardService: DashboardService,
  ) { }
  ngOnInit() {
    if(this.dashboardService.currentSwitch!='on')return;
      this.multimeterService.Mdata.dragStart();
      this.multimeterService.Mdata.drop();
  }
  multimeterv(){
    if(this.dashboardService.currentSwitch!='on')return;
    this.multimeterService.Mdata.multimeterv();
  }
  ngOnDestroy() { }
  closemultimeter() {
    this.multimeterService.Mdata.closemultimeter();
    this.homeService.closeTool("multimeters");
  }
}
