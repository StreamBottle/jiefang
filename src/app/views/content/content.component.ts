import { AppdataService } from './../../index/appdata.service';
import { GearPanelService } from './../../components/gear_panel/gear_panel.service';
import { DashboardService } from './../../components/dashboard/dashboard.service';
import { HandleErrorService } from './../../components/handle_error/handle_error.service';
import { TestQuestionsService } from '../testQuestions/testQuestions.service';
import { HomeService } from '../home/home.service';
import { AfterViewInit, Component, OnInit, OnDestroy, NgZone, Input, HostListener } from '@angular/core';

declare var $: any;

export class datas {
    video: Array<any>;
    audio: Array<any>;
    title: string;
    describe: string;
    textlist: Array<any>;
    imglist: Array<any>;
    tiplist: Array<any>;
    check: Array<any>;
    type: string;
}

export class parent {
    isPaging: boolean;
    type: string;
}

@Component({
    selector: 'magotan-content',
    providers: [
    ],
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    @Input() current: any;
    isAllowPage: Array<number> = [];
    currentNum = 0;
    childCurrentNum = 0;
    rightnum: number = 0;

    parents: parent;               // 传给父组件
    isPaging: boolean = true;   // 是否翻页
    showone: number = 1;
    appdata: any;
    appboolen: any;

    typetitle: string;
    typedescribe: string;
    typeimglist: any;
    typetextlist: any;
    typetitlelist: any;
    typebtnlist: any;
    typevideo: any;
    typetip: any;
    typecheck: any;
    typeIsAllowPageNum: number;

    Rotatenum: number = 360;   // 3d图初始旋转
    video: any;
    videotimer: any;

    constructor(
        public appdataService: AppdataService,
        private zone: NgZone,
        private dashboardService: DashboardService,
        private gearPanelService: GearPanelService,
        private handleErrorService: HandleErrorService,
        private testQuestionsService: TestQuestionsService,
        private homeService: HomeService,
    ) { }
    AfterViewInit() {

    }
    ngOnDestroy() {

    }

    ngOnInit() {
        this.appdata = new datas();
        this.parents = new parent();
        this.appboolen = this.appdataService.appboolen;
        if (this.showone == 1) {
            this.appdata = this.appdataService.content[this.showone];
            let now = this.appdataService.content[this.showone].type;
            this.swichshow(now, this.appboolen);
        }
    }
    ngOnChanges() {
        this.appboolen = this.appdataService.appboolen;
        this.showone = this.current;
        this.appdata = this.appdataService.content[this.current];
        this.swichshow(this.appdata.type, this.appboolen);
        this.ChoiceTypeContent();
        if (this.typetextlist[0].imglist) {
            this.typetextlist[0].imglist.map((item) => {
                item.divShow = false;
            });
        }
        if (this.typetextlist[0].tiplist) {
            this.typetextlist[0].tiplist.textlist.map((item) => {
                item.isShow = false;
            });
        }
    }
    ChoiceTypeContent() {
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
    }
    swichshow(type, appboolen) {
        for (let key in appboolen) {
            if (key == type) {
                this.appboolen[key] = true;
            } else {
                this.appboolen[key] = false;
                if (type == '') {
                    this.appboolen.error = true;
                }
            }
        }
    }
    // 电机按钮显示内容
    tipContentShow(event, typebtnlist, index) {
        if (typebtnlist[index].style.backgroundColor == 'rgb(227, 227, 227)') return;
        typebtnlist.map((item, index) => {
            item.isShow = false;
        })
        if (!this.isClickNextPage(index)) {
            typebtnlist[index + 1].style.backgroundColor = 'rgb(0, 156, 255)'
            typebtnlist[index].style.backgroundColor = 'rgb(115, 201, 255)'
        } else {
            typebtnlist.map((item, j) => {
                item.isShow = false;
                item.style.backgroundColor = index === j ? 'rgb(115, 201, 255)' : 'rgb(0, 156, 255)'
            })
        }
        typebtnlist[index].isShow = true;
    }
    // 判断本页面是否全部学习完成
    isClickNextPage(index) {
        this.isAllowPage.push(index);
        console.log(this.isAllowPage);
        this.isPaging = Array.from(new Set(this.isAllowPage)).length == this.typeIsAllowPageNum ? true : false;
        this.appdataService.content[this.showone].isPaging = this.isPaging;
        console.log(this.isPaging);
        return this.isPaging;
    }
    // 点击上一页时，判断保存当前页面点击集合
    currentClickTheSet() {
        this.appdataService.content[this.showone].currentClickTheSet = this.isAllowPage;
    }
    // 点击出现弹窗
    tipShow(item, index, boolean) {
        item.twinkle = '';
        item.isShow = !item.isShow;
        if (!boolean) return;
        // this.isClickNextPage(index);
    }
    // 点击关闭二级页面
    childCloseTip(childitem) {
        childitem.isShow = false;
    }
    // 点击旋转导航切换
    rotateNav(item, index) {
        this.currentNum = index;
        this.typetextlist[0].navText.map((i, j) => {
            i.style.color = j === index ? 'rgb(203, 209, 221)' : 'rgb(3, 50, 129)';
        });
        this.typetextlist[0].content.map((i, j) => {
            i.isShow = j === index ? true : false;
        });
        this.typetextlist[0].btnText.map((i, j) => {
            i.isShow = j === index ? true : false;
        });
        this.typetextlist[0].anatomyText.map((i, j) => {
            i.isShow = j === index ? true : false;
        });
        this.typetextlist[0].imglist.map((i, j) => {
            i.isShow = j === index ? true : false;
        });
        this.isShowTool(index);
        if (item.isShow) {
            this.typetextlist[0].measureList.map((i, j) => {
                i.isShow = j === index ? true : false;
            });
        } else {
            this.typetextlist[0].measureList.map((i, j) => {
                i.isShow = false;
            });
        }
        this.homeService.closeAll();
    }
    // 是否显示左侧工具栏
    isShowTool(index) {
        this.typetextlist[0].measureList.map((i, j) => {
            if (j == index && i.isShowTool) {
                this.homeService.toolNavIsShow = true;
            } else {
                this.homeService.toolNavIsShow = false;
            }
        });

    }
    // 子页面点击旋转导航切换
    childRotateNav(childitem, index) {
        this.childCurrentNum = index;
        childitem.childPage.navText.map((i, j) => {
            i.style.color = j === index ? 'rgb(203, 209, 221)' : 'rgb(3, 50, 129)';
        });
        childitem.childPage.content.map((i, j) => {
            i.isShow = j === index ? true : false;
        });
        childitem.childPage.btnText.map((i, j) => {
            i.isShow = j === index ? true : false;
        });
        childitem.childPage.imglist.map((i, j) => {
            i.isShow = j === index ? true : false;
        });
    }
    // 点击旋转
    rotate(event, param) {
        if (event.target.style.backgroundColor === 'rgb(170, 170, 170)') return;
        this.appdataService.content[this.current].rotateImgIsShow = true;
        this.appdataService.content[this.current].anatomyIsShow = false;
        switch (param) {
            case 'left':
                this.typetextlist[0].imglist[this.currentNum].contentList.push(this.typetextlist[0].imglist[this.currentNum].contentList.shift());
                this.typetextlist[0].imglist[this.currentNum].contentList.map((item, index) => {
                    item.isShow = index === 0 ? true : false;
                })
                break;
            case 'right':
                this.typetextlist[0].imglist[this.currentNum].contentList.unshift(this.typetextlist[0].imglist[this.currentNum].contentList.pop());
                this.typetextlist[0].imglist[this.currentNum].contentList.map((item, index) => {
                    item.isShow = index === 0 ? true : false;
                })
                break;
        }
    }
    // 子点击旋转
    childRotate(event, item, childitem) {
        if (event.target.style.backgroundColor === 'rgb(170, 170, 170)') return;
        switch (item.direction) {
            case 'left':
                childitem.childPage.imglist[this.childCurrentNum].contentList.push(childitem.childPage.imglist[this.childCurrentNum].contentList.shift());
                childitem.childPage.imglist[this.childCurrentNum].contentList.map((item, index) => {
                    item.isShow = index === 0 ? true : false;
                })
                break;
            case 'right':
                childitem.childPage.imglist[this.childCurrentNum].contentList.unshift(childitem.childPage.imglist[this.childCurrentNum].contentList.pop());
                childitem.childPage.imglist[this.childCurrentNum].contentList.map((item, index) => {
                    item.isShow = index === 0 ? true : false;
                })
                break;
        }
    }
    // 点击显示解剖图
    anatomyShow(item, index) {
        this.appdataService.content[this.current].rotateImgIsShow = false;
        this.appdataService.content[this.current].anatomyIsShow = true;
    }
    // 顺序点击
    sequentialClicks(event, index, btnitem, item) {
        console.log(btnitem)
        if (btnitem.isShow) {
            console.log(index)
            if (index + 1 <= item.btnTextList.length - 1) {
                item['btnTextList'][index + 1].isShow = true;
            }
            item.btnTextList.map((i, j) => {
                i.contentIsShow = j == index ? true : false;
                i.imgShow = j == index ? true : false;

                i.style.backgroundColor = j == index ? 'rgb(163, 213, 245)' : 'rgb(0, 156, 255)';
                if (!i.isShow) {
                    i.style.backgroundColor = 'rgb(203, 205, 207))';
                }
            });
            item.scrIsShow = false;
            this.isClickNextPage(`${btnitem.splicingParam}_${index}`);
        }
    }

    // 页面内上下翻页
    pageClick(param, item, index) {
        switch (param) {
            case 'prev':
                if (!index) return;
                this.typetextlist[0].imglist[index].isShow = false;
                this.typetextlist[0].imglist[index - 1].isShow = true;
                break;
            case 'next':
                if (index >= this.typetextlist[0].imglist.length - 1) return;
                this.typetextlist[0].imglist[index].isShow = false;
                console.log(this.typetextlist[0].imglist[index + 1])
                this.typetextlist[0].imglist[index + 1].isShow = true;
                break;
        }
    }
    IsPaging() {
        if (this.appdataService.content[this.showone].question) {
            let index = this.appdataService.content[this.showone].textlist[0].measureList[this.appdataService.content[this.showone].textlist[0].measureList.length - 1].chapter;
            this.testQuestionsService.testQuestionList[index].forEach((item, index) => {
                this.appdataService.content[this.showone].isPaging = true;
                this.parents.isPaging = this.appdataService.content[this.showone].isPaging;
                if (item.taskInfo !== '恭喜你！蒙的真准！') {
                    this.appdataService.content[this.showone].isPaging = false;
                    this.parents.isPaging = this.appdataService.content[this.showone].isPaging;
                    return;
                }
            })
            return this.parents;
        } else {
            this.parents.isPaging = this.appdataService.content[this.showone].isPaging;
            this.parents.type = this.appdataService.content[this.current].type;
            return this.parents;
        }
    }

    // 图片切换
    changeImg(item, index) {
        // 未完成学习，没有全部点击完时
        if (this.typetextlist[0].navText.some(x => x.img3IsShow === true)) {
            // 索引为0时
            if (index === 0) {
                this.typetextlist[0].navText.map((i, j) => {
                    if (j === index) {
                        i.img1IsShow = false;
                        i.img2IsShow = true;
                    } else if (!this.typetextlist[0].navText[j].img3IsShow) {
                        i.img1IsShow = true;
                        i.img2IsShow = false;
                    }
                });
                if (this.typetextlist[0].imglist) {
                    this.typetextlist[0].imglist.map((k, l) => {
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
                        this.typetextlist[0].navText.map((i, j) => {
                            if (j < index) {
                                i.img1IsShow = true;
                                i.img2IsShow = false;
                            } else if (j === index) {
                                item['img1IsShow'] = false;
                                item['img2IsShow'] = true;
                            }
                        });
                    } else {
                        // console.log(item['img3IsShow']);
                        this.typetextlist[0].navText.map((i, j) => {
                            if (j === index) {
                                i.img1IsShow = false;
                                i.img2IsShow = true;
                            } else if (!this.typetextlist[0].navText[j].img3IsShow) {
                                i.img1IsShow = true;
                                i.img2IsShow = false;
                            }
                        });
                    }
                    if (this.typetextlist[0].imglist) {
                        this.typetextlist[0].imglist.map((k, l) => {
                            k.isShow = l === index ? true : false;
                        });
                    }
                } else return;
            }
        } else {
            // 全部点击完毕后，可乱序点击
            this.typetextlist[0].navText.map((i, j) => {
                if (j === index) {
                    i.img1IsShow = false;
                    i.img2IsShow = true;
                } else if (!this.typetextlist[0].navText[j].img3IsShow) {
                    i.img1IsShow = true;
                    i.img2IsShow = false;
                }
            });
            if (this.typetextlist[0].imglist) {
                this.typetextlist[0].imglist.map((k, l) => {
                    k.isShow = l === index ? true : false;
                });
            }
        }
    }
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
    startBuffer(item) {
        let currentBuffer = item.buffered.end(0);
        let maxduration = item.duration;
        let perc = 100 * currentBuffer / maxduration;
        $('.bufferBar').css('width', perc + '%');
        if (currentBuffer < maxduration) {
            // setTimeout(this.startBuffer(item), 5000);
        }
    };
    // 播放暂停
    playpause(item) {
        if (item.paused || item.ended) {
            $('.btnPlay').addClass('paused');
            $('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
            item.play();
        } else {
            $('.btnPlay').removeClass('paused');
            $('.btnPlay').find('.icon-pause').removeClass('icon-pause').addClass('icon-play');
            item.pause();
        }
    }
    // 时间格式转换 - 00:00
    timeFormat(seconds) {
        let m = Math.floor(seconds / 60) < 10 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds /
            60);
        let s = Math.floor(seconds - (m * 60)) < 10 ? "0" + Math.floor(seconds - (m * 60)) : Math.floor(
            seconds - (m * 60));
        return m + ":" + s;
    };
    // 更新声音
    updateVolume(item, x, vol) {
        let volume = $('.volume');
        let percentage;
        // 如果volume被指定，直接更新声音
        if (vol) {
            percentage = vol * 100;
        } else {
            let position = x - volume.offset().left;
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
        } else if (item.volume > 0.5) {
            $('.sound').removeClass('muted').addClass('sound2');
        } else {
            $('.sound').removeClass('muted').removeClass('sound2');
        }
    };
    updatebar(item, x) {
        let progress = $('.progress');
        // 计算拖拽位置
        // 并更新当前时间
        let maxduration = item.duration;
        let position = x - progress.offset().left;
        let percentage = 100 * position / progress.width();
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
    videoMethods(item, index, j) {
        this.typetextlist[0].imglist[index].divShow = true;
        this.typetextlist[0].imglist[index].videolist.map((k, l) => {
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
                        $('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass(
                            'icon-play');
                        $(this).unbind('click');
                        // $('.myVideo')[0].play();
                    });
            });
            // 显示当前视频播放时间
            this.video.on('timeupdate', function () {
                if ($('.myVideo')[0]) {
                    let currentPos = $('.myVideo')[0].currentTime;
                    let maxduration = $('.myVideo')[0].duration;
                    let perc = 100 * currentPos / maxduration;
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
                } else if ($.isFunction($('.myVideo')[0].mozRequestFullScreen)) {
                    $('.myVideo')[0].mozRequestFullScreen();
                } else if ($.isFunction($('.myVideo')[0].msRequestFullscreen)) {
                    $('.myVideo')[0].msRequestFullscreen();
                } else if ($.isFunction($('.myVideo')[0].oRequestFullScreen)) {
                    $('.myVideo')[0].oRequestFullscreen();
                } else {
                    console.log("不支持全屏")
                }

            });
            // 点击声音按钮
            $('.sound').click(function () {
                $('.myVideo')[0].muted = !$('.myVideo')[0].muted;
                $(this).toggleClass('muted');
                if ($('.myVideo')[0].muted) {
                    $('.volumeBar').css('width', 0);
                } else {
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
            let completeloaded = false;
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
            let timeDrag = false; /* 检查拖拽事件 */
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
            let volumeDrag = false;
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
    }

    closeVideo(item, index, j) {
        this.typetextlist[0].imglist[index].divShow = false;
        // this.typetextlist[0].imglist[index].videolist.map((k, l) => {
        //     k.isShow = l === j ? true : false;
        // });
    }

}
