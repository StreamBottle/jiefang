import {
  Component, OnInit, Input, Output, EventEmitter,
  HostListener,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { CloseWindowService } from './close_window.service';
import { CommunicationService } from '../communication/communication.service';
import { AppService } from '../../index/app.service';
import { Router, } from '@angular/router';
declare const $;

@Component({
  selector: 'close-window',
  styleUrls: ['./close_window.component.scss'],

  templateUrl: './close_window.component.html'
})
export class CloseWindowComponent implements OnInit {
  modal;
  @Output() publishEvent = new EventEmitter<void>();
  constructor(
    private closeWindowService: CloseWindowService,
    private communicationService: CommunicationService,
    private appService: AppService,
    private router: Router,
  ) {
    this.modal = true;
  }
  ngOnInit() {
    console.log('注册非正常退出课程事件');
    // 非正常退出课程时,调用退出方法
    window.onbeforeunload = () => {
      this.closeWindow();
    };
  }
  exitStudy() {
    this.modal = true;
  }
  closeWindow() {
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
    setTimeout(() => {
      this.closeWindowService.closeWindow();
    }, 800);
  }
  reStudy() {
    this.modal = false;
    this.publishEvent.emit();
  }
}
