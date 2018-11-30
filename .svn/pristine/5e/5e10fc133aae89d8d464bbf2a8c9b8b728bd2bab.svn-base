import { Component, OnDestroy } from "@angular/core";
import { DashboardService } from "../dashboard/dashboard.service";

import { MultimeterService } from "../../components/multimeter";
import { flyIn, halo } from '../../animations';


declare let $: any;
@Component({
  selector: "dashboard",
  providers: [],
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html",
  animations: [
    flyIn,
    halo,
],
})
export class DashboardComponent {
  changeRotate='rotate1';
  constructor(
    public dashboardService: DashboardService,
    public multimeterService: MultimeterService,
  ) { }
  ngOnInit() {

  }
  switchCar(param) {
    switch (param) {
      case 'on':
      this.changeRotate='rotate2';
        this.multimeterService.Mdata.dragStart();
        this.multimeterService.Mdata.drop();
        break;
    }
    this.dashboardService.currentSwitch = param;
  }
  ngOnDestroy() {

  }

}