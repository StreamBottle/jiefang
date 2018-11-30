import {
  Component,
  Input,
  Output,
  HostListener,
  Directive,
  ElementRef,
  Renderer,
  EventEmitter,
  DoCheck,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { animationOn } from '../../../app-config.animation';
/*
 * 指令
 * XLarge 字体变大
 */
@Directive({
  selector: '[twinkle]' // 用 [ ] 代表 属性
})
export class TwinkleDirective implements OnChanges {
  animation;
  num = 0;
  timer = null;
  @Input('twinkle') twinkle: any;
  private el: HTMLElement;
  @Output() cancelAnimation = new EventEmitter<void>();

  constructor(private element: ElementRef, renderer: Renderer) {
  }
  setStyle() {
    this.element.nativeElement.style.boxShadow = `0px 0px ${this.num}px 0px #00BFFF`;
    let num1 = true;
    this.timer = setInterval(() => {
      if (this.num > 20) {
        num1 = false;
      }
      if (this.num < 0) {
        num1 = true;
      } 
      num1 ? this.num++ : this.num--;
      this.element.nativeElement.style.boxShadow = `0px 0px ${this.num}px 0px #00BFFF`;
    }, 50);
  }
  ngOnChanges() {
    if (!this.twinkle) { 
      clearInterval(this.timer);
      this.element.nativeElement.style.boxShadow = `0px 0px 0px 0px #00BFFF`;
       return
      };
    this.setStyle()
  }
}
