import { setTimeout } from 'timers';
import { MultimeterService } from './../../components/multimeter/multimeter.service';
import { HandleErrorService } from './../../components/handle_error/handle_error.service';
import { GearPanelService } from './../../components/gear_panel/gear_panel.service';
import { DashboardService } from './../../components/dashboard/dashboard.service';
import { TestQuestionsService } from './testQuestions.service';
import { ContentComponent } from './../content/content.component';
import { AppdataService } from './../../index/appdata.service';
import { HomeService } from '../home/home.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AppService } from '../../index/app.service';

declare var $: any;
@Component({
    selector: 'test-questions',
    providers: [
    ],
    templateUrl: './testQuestions.component.html',
    styleUrls: ['./testQuestions.component.scss']
})
export class TestQuestionsComponent implements OnInit {
    @Input('chapter') currentChapter: any;
    currentTestQuestion = [];
    constructor(
        public appdataService: AppdataService,
        public dashboardService: DashboardService,
        public gearPanelService: GearPanelService,
        public handleErrorService: HandleErrorService,
        public multimeterService: MultimeterService,
        public testQuestionsService: TestQuestionsService,
        public homeService: HomeService,
    ) {
    }

    // 生命周期钩子函数
    ngOnInit() {
        this.currentTestQuestion = this.testQuestionsService.testQuestionList[this.currentChapter];
        this.homeService.currentShowHotArea=this.testQuestionsService.testQuestionList[this.currentChapter][0].currentShowHotArea;
    }
    // 点击选中
    slected(item, index, opationItem) {
        item.taskIsShow = true;
        item.taskInfo = opationItem.isRight ? '恭喜你！蒙的真准！' : '上过学吗？这都选错了！'
        item.option.map((i, j) => {
            i.textStyle.backgroundColor = j === index ? 'rgb(0, 156, 255)' : 'rgb(163, 213, 245)';
            i.checked = j === index ? 'true' : 'false';
            i.textStyle.boxShadow = j === index ? '0 0 4px rgb(0, 156, 255)' : 'none';
        })
    }
    // 点击切换下一题
    nextQustion(index) {
        if(this.currentTestQuestion.length==index+1)return;
        this.currentTestQuestion[index].isShow=false;
        this.currentTestQuestion[index].multimeterIsShow=false;
        this.currentTestQuestion[index+1].isShow=true;
        this.currentTestQuestion[index+1].multimeterIsShow=true;
        this.homeService.currentShowHotArea=this.currentTestQuestion[index+1].currentShowHotArea;
        this.homeService.closeAll();
    }
    // 点击切换上一题
    prevQustion(index) {
        if(index==0)return;
        this.currentTestQuestion[index].isShow=false;
        this.currentTestQuestion[index].multimeterIsShow=false;
        this.currentTestQuestion[index-1].isShow=true;
        this.currentTestQuestion[index-1].multimeterIsShow=true;
        this.homeService.currentShowHotArea=this.currentTestQuestion[index-1].currentShowHotArea;
        this.homeService.closeAll();
    }
}
