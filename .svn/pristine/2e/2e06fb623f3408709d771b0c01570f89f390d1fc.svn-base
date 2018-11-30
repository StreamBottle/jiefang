import { setTimeout } from 'timers';
import { MultimeterService } from './../../components/multimeter/multimeter.service';
import { HandleErrorService } from './../../components/handle_error/handle_error.service';
import { GearPanelService } from './../../components/gear_panel/gear_panel.service';
import { DashboardService } from './../../components/dashboard/dashboard.service';
import { HomeService } from './home.service';
import { ContentComponent } from './../content/content.component';
import { AppdataService } from './../../index/appdata.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AppService } from '../../index/app.service';

declare var $: any;
@Component({
    selector: 'magotan-home',
    providers: [
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild(ContentComponent) paging: ContentComponent;
    isvisibel: boolean = true;
    total: number;
    current: number;
    headertitle: string;
    headeraudio = [];
    Catalogdata = [];
    pages = [];
    ispage: boolean;
    types: string;
    page22: string = '';
    _component: string = 'content';    //content
    isMute: boolean = false;// 是否静音
    outTipIsShow: boolean = false;//退出弹窗是否出现
    studyEnd: boolean = false;//最后一页出现

    constructor(
        public appdataService: AppdataService,
        public homeService: HomeService,
        public dashboardService: DashboardService,
        public gearPanelService: GearPanelService,
        public handleErrorService: HandleErrorService,
        public multimeterService: MultimeterService,
    ) {
    }

    // 生命周期钩子函数
    ngOnInit() {
        // this.appdataService.current = 1;
        this.total = this.appdataService.content.length - 1;
        setTimeout(function () {
            $('#delayimg').fadeIn();
        }, 1000);
        console.log(this.appdataService.content[this.appdataService.current]);
        this.headertitle = this.appdataService.content[this.appdataService.current].title;
        this.Catalogdata = this.appdataService.Catalog;
        for (let i = 0; i < this.Catalogdata.length; i++) {
            this.pages.push({ 'page': this.Catalogdata[i].pagestart });
        }
    }
    ngAfterViewInit() {
        let _this = this;
        $(document).click(function () {
            _this.appdataService.menueIsShow = false;
        });
    }

    // 退出弹窗出现
    outTip() {
        this.outTipIsShow = !this.outTipIsShow;
    }
    // 退出弹窗返回改变参数
    changeParam() {
        this.outTipIsShow = false;
    }
    // 阻止点击目录关闭
    stop(event) {
        if (event.stopPropagation) {
            // 针对 Mozilla 和 Opera 
            event.stopPropagation();
        } else if (window.event) {
            // 针对 IE 
            window.event.cancelBubble = true;
        }
    }
    // 目录导航显示
    showmenu(event) {
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
                    background: 'rgb(244, 244, 244)', // 轨道的背景颜色
                    cursorcolor: "#DCDCDC'",
                    spacebarenabled: true,
                    preventmultitouchscrolling: true, // 防止多触点事件引发滚动
                    cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
                    cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
                });
            });
        } else {
            this.appdataService.menueIsShow = false;
        }
    }

    // 二级导航显示
    isChildNavShow(item) {
        if (event.stopPropagation) {
            // 针对 Mozilla 和 Opera 
            event.stopPropagation();
        } else if (window.event) {
            // 针对 IE 
            window.event.cancelBubble = true;
        }
        if (!item.isGetInfo) return;
        if (JSON.stringify(item.isChildNav) !== '[]') {
            item.isExistence = !item.isExistence;
            return;
        }
        this.homeService.closeAll();
        this.changePageToolIsShow(item.currentPage);
        this.appdataService.current = item.currentPage;
    }
    StartPlay() {
        this.isvisibel = false;
        if (this.appdataService.content[this.appdataService.current].textlist[0].measureList) {
            this.changePageToolIsShow();
        }

    }
    // 翻页是否需要显示工具箱
    changePageToolIsShow(currentPage = this.appdataService.current) {
        if (!this.appdataService.content[currentPage].textlist[0].measureList) return;
        this.appdataService.content[currentPage].textlist[0].measureList.map(((item, index) => {
            this.homeService.toolNavIsShow = item.isShow && item.isShowTool ? true : false;
        }))
    }
    PrevPage() {
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
    }
    NextPage() {
        if (this.appdataService.current == this.appdataService.content.length - 1) {
            this.studyEnd = true;
            return;
        };
        this.ispage = this.paging.IsPaging().isPaging;
        this.types = this.paging.IsPaging().type;
        if (this.ispage) {
            this.page();
        }

    }
    page() {
        if (this.appdataService.current < this.total) {
            this.appdataService.current++;
            this.dashboardService.dashboardStatus = false;
            this.dashboardService.currentSwitch = '';
            this.paging.isAllowPage = this.appdataService.content[this.appdataService.current].currentClickTheSet;
            this.appdataService.Catalog.map((item, index) => {
                if (item.currentPage == this.appdataService.current) {
                    item.isGetInfo = true;
                }
                if (JSON.stringify(item.isChildNav) !== '[]') {
                    item.isChildNav.map((i, j) => {
                        if (i.currentPage < this.appdataService.current) {
                            i.studyState = '3';
                        }
                        if (i.currentPage == this.appdataService.current) {
                            if (i.isGetInfo) return;
                            i.isGetInfo = true;
                            i.studyState = '2';
                        }
                    })
                }
            });
            this.homeService.closeAll();
            if (this.appdataService.content[this.appdataService.current].textlist[0].measureList) {
                this.changePageToolIsShow();
            }
            this.headertitle = this.appdataService.content[this.appdataService.current].title;
            for (let i = 0; i < this.Catalogdata.length; i++) {
                if (this.appdataService.current > this.Catalogdata[i].pagestart && this.appdataService.current < this.Catalogdata[i].pageend) {
                    this.pages[i].page = this.appdataService.current;
                }
            }
        }
    }
    toolShow(str) {
        this.homeService.toolShow(str);
    }

    measureTool(param) {
        this.homeService.platformRouterTurn(param);
    }

    ShowCom(num: string) {
        this._component = this._component === 'help' ? 'content' : 'help';
        $(document).ready(function () {
            $('#niceScrollHelp').niceScroll({
                autohidemode: 'leave',
                cursorborder: '5',
                cursorborderradius: "5px",
                background: 'rgb(244, 244, 244)', // 轨道的背景颜色
                cursorcolor: "#DCDCDC'",
                spacebarenabled: true,
                preventmultitouchscrolling: true, // 防止多触点事件引发滚动
                cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
                cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
            });
        });
    }
    getChildEvent(index) {
        this._component = 'content';
    }
    playaudio() {
        this.isMute = !this.isMute;
        //    静音方法
        //    $('#audio').get(0).muted=this.isMute;
    }

    back() {
        this.studyEnd = false;
    }
    out() {
        this.outTipIsShow = true;
    }
}
