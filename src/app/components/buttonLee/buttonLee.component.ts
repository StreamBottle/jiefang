import {
    Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';
import { flyIn, halo } from '../../animations';
declare const $;

@Component({
    selector: 'sgm-buttonlee',
    templateUrl: './buttonLee.component.html',
    styleUrls: ['./buttonLee.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class ButtonLeeComponent implements OnInit {
    data: any;
    nativeElement: any;
    style: any;
    @Input('data') dataConf: any;

    @Output('event') publishEvent = new EventEmitter<void>();

    @HostListener('mouseenter', ['$event']) onmouseenter(e) {
        if (this.data.currentState.style.hover)
            Object.assign(this.data.currentStyle, this.data.currentState.style.hover);
    }
    @HostListener('mouseleave', ['$event']) onmouseleave(e) {
        Object.assign(this.data.currentStyle, this.data.currentState.style.default);
    }

    constructor(
        element: ElementRef,
    ) {
        this.nativeElement = element.nativeElement;
        this.style = {};
    }

    ngOnInit() {

        this.data = this.dataConf || {};

        this.addEvent(this.data.publish);

    }

    //
    setStyle(item) {
        // console.log(this.data.style);
        // console.log(this.data.stateArray[this.data.initialStateID].style);
        if (!this.data.currentStyle) return;
        const style = this.data.currentStyle;
        // const style = this.style;
        if (!style) return;
        const styles = {
            'left': parseInt(style.positionLeft, 10) + 'px',
            'top': parseInt(style.positionTop, 10) + 'px',
            'width': parseInt(style.width, 10) + 'px',
            'height': parseInt(style.height, 10) + 'px',
            'textAlign': style.textAlign,
            'zIndex': style.zIndex,
            'backgroundColor': style.backgroundColor,
            'borderRadius': style.borderRadius,
            'color': '#fff',
            'display': style.display,
            'cursor': style.cursor,
            'border': style.border,
            'vertical-align': style.verticalAlign,
        };
        return styles;
    }

    mouseoverPrompt(item) {
        // console.log(this.data.style);
        // console.log(this.data.stateArray[this.data.initialStateID].style);
        // console.log(this.data.currentState);
        if (!this.data.currentState.mouseoverPrompt01Style) return;
        const style = this.data.currentState.mouseoverPrompt01Style.style;
        // const style = this.style;
        if (!style) return;
        const styles = {
            'position': style.position,
            'left': parseInt(style.positionLeft, 10) + 'px',
            'top': parseInt(style.positionTop, 10) + 'px',
            'width': parseInt(style.width, 10) + 'px',
            'height': parseInt(style.height, 10) + 'px',
            'textAlign': style.textAlign,
            'zIndex': style.zIndex,
            'backgroundColor': style.backgroundColor,
            'borderRadius': style.borderRadius,
            'color': '#fff',
            'display': style.display,
            'cursor': style.cursor,
            'border': style.border,
            'vertical-align': style.verticalAlign,
        };
        return styles;
    }


    setTextStyle(item) {
        if (!item.style) return;
        const styles = {
            'color': item.style.color,
            'fontSize': parseInt(item.style.fontSize, 10) + 'px',
            'fontWeight': item.style.fontWeight,
            // 'display': item.isLF ? 'block' : 'inline',
            // 'lineHeight': parseInt(item.style.lineHeight, 10) + 'px',
            'textDecoration': item.style.textDecoration,
            'textAlign': item.style.textAlign,
            'position': 'relative',
            'display': item.style.display,
            'left': parseInt(item.style.positionLeft, 10) + 'px',
            'top': parseInt(item.style.positionTop, 10) + 'px',
            'width': item.style.width ? parseInt(item.style.width, 10) + 'px' : '855px',
            'marginLeft': item.style.marginLeft,
            'text-indent': item.style.textIndent + 'px',
        };
        return styles;
    }

    // 根据属性的值对数组排序



    // 监听事件
    private addEvent(eventObject) {
        for (let key in eventObject) {
            if (eventObject.hasOwnProperty(key)) {
                // console.log(key);

                this.nativeElement.addEventListener(key, (e) => {
                    // console.log(e, this);
                    console.log(this.data);

                    if ((this.data.id === 'page01-button01-big') && (this.data.currentStateID === 'state02' || this.data.currentStateID === 'state06' || this.data.currentStateID === 'state05' || this.data.currentStateID === 'state07')) {
                        $('.analysis-pic').hide();
                        $('.animate-pic').show();
                        $('.animate-pic img').attr('src', './assets/images/capacity_principle/test.gif');

                        $('.zhizhen-pic').show();
                        $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button01-zhizhen.png');
                        $('.redCircle').hide();
                        // if (this.data.currentStateID === 'state02') {
                        //     $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button01-zhizhen.gif');
                        // }
                        $('.zhizhen-animate-pic img').attr('src', './assets/images/capacity_principle/button01-gif.gif');
                        // alert(1);
                    } else if (this.data.id === 'page01-button02-big' && (this.data.currentStateID === 'state03' || this.data.currentStateID === 'state06' || this.data.currentStateID === 'state05' || this.data.currentStateID === 'state07')) {
                        $('.redCircle').hide();
                        $('.analysis-pic').hide();
                        $('.animate-pic').show();
                        $('.animate-pic img').attr('src', './assets/images/capacity_principle/button02-big.png');

                        $('.zhizhen-pic').show();
                        $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button02-zhizhen.png');
                        if (this.data.currentStateID === 'state03') {
                            // $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button02-zhizhen.gif');
                        }
                        $('.zhizhen-animate-pic img').attr('src', './assets/images/capacity_principle/button02-gif.gif');
                        // alert(2);
                    } else if (this.data.id === 'page01-button03-big' && (this.data.currentStateID === 'state03' || this.data.currentStateID === 'state06' || this.data.currentStateID === 'state05' || this.data.currentStateID === 'state07')) {
                        $('.redCircle').hide();
                        $('.analysis-pic').hide();
                        $('.animate-pic').show();
                        $('.animate-pic img').attr('src', './assets/images/capacity_principle/button03-big.jpg');
                        $('.zhizhen-pic').show();
                        $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button03-zhizhen.png');
                        if (this.data.currentStateID === 'state03') {
                            // $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button03-zhizhen.gif');
                        }
                        $('.zhizhen-animate-pic img').attr('src', './assets/images/capacity_principle/button03-gif.gif');
                        // alert(3);
                    } else if (this.data.id === 'page01-button04-big' && (this.data.currentStateID === 'state03' || this.data.currentStateID === 'state06' || this.data.currentStateID === 'state05' || this.data.currentStateID === 'state07')) {
                        $('.redCircle').hide();
                        $('.analysis-pic').hide();
                        $('.animate-pic').show();
                        $('.animate-pic img').attr('src', './assets/images/capacity_principle/button04-big.jpg');

                        $('.zhizhen-pic').show();
                        $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button04-zhizhen.png');
                        if (this.data.currentStateID === 'state03') {
                            // $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button04-zhizhen.gif');
                        }
                        $('.zhizhen-animate-pic img').attr('src', './assets/images/capacity_principle/button04-gif.gif');
                        // alert(4);
                    } else if (this.data.id === 'page01-button05-big' && (this.data.currentStateID === 'state03' || this.data.currentStateID === 'state06' || this.data.currentStateID === 'state05' || this.data.currentStateID === 'state07')) {
                        $('.redCircle').hide();
                        $('.analysis-pic').hide();
                        $('.animate-pic').show();
                        $('.animate-pic img').attr('src', './assets/images/capacity_principle/button05-big.jpg');

                        $('.zhizhen-pic').show();
                        $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button05-zhizhen.png');
                        if (this.data.currentStateID === 'state03') {
                            // $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button05-zhizhen.gif');
                        }
                        $('.zhizhen-animate-pic img').attr('src', './assets/images/capacity_principle/button05-gif.gif');
                        // alert(5);
                    } else if (this.data.id === 'page01-button06-big' && (this.data.currentStateID === 'state03' || this.data.currentStateID === 'state06' || this.data.currentStateID === 'state05' || this.data.currentStateID === 'state07')) {
                        $('.redCircle').hide();
                        $('.analysis-pic').hide();
                        $('.animate-pic').show();
                        $('.animate-pic img').attr('src', './assets/images/capacity_principle/button06-big.png');
                        $('.zhizhen-pic').show();
                        $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button06-zhizhen.png');
                        if (this.data.currentStateID === 'state03') {
                            // $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button06-zhizhen.gif');
                        }
                        $('.zhizhen-animate-pic img').attr('src', './assets/images/capacity_principle/button06-gif.gif');
                        // alert(6);
                    } else if (this.data.id === 'page01-button07-big' && (this.data.currentStateID === 'state03' || this.data.currentStateID === 'state06' || this.data.currentStateID === 'state05' || this.data.currentStateID === 'state07')) {
                        $('.redCircle').hide();
                        $('.analysis-pic').hide();
                        $('.animate-pic').show();
                        $('.animate-pic img').attr('src', './assets/images/capacity_principle/button07-big.jpg');

                        $('.zhizhen-pic').show();
                        $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button07-zhizhen.png');
                        if (this.data.currentStateID === 'state03') {
                            // $('.zhizhen-pic img').attr('src', './assets/images/capacity_principle/button07-zhizhen.gif');
                        }
                        $('.zhizhen-animate-pic img').attr('src', './assets/images/capacity_principle/button07-gif.gif');
                        // alert(7);
                    }
                    this.publishEvent.emit(e);
                });
            }
        }
    }
}
