import { GearPanelService } from './../components/gear_panel/gear_panel.service';
import { DashboardService } from './../components/dashboard/dashboard.service';
import {CommunicationService} from '../components/communication'

import {
  Router,
} from '@angular/router';
import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import Rx from 'rxjs/Rx';


declare var $: any;
/*
 * App Component
 * App Component
 * Top Level Component
 */
require('./app.component.css');

@Component({
  selector: 'support-app',
  styleUrls: [
    './app.component.scss',
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  constructor(
    public appService: AppService,
    private router: Router,
    private elementRef: ElementRef,
    public dashboardService: DashboardService,
    public gearPanelService: GearPanelService,
    public communicationService: CommunicationService,
  ) { }

  ngOnInit() {

    this.router.navigate(['/home']);
    this.communicationService.init();
  }
}


