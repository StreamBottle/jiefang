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
  selector: '[input]' // 用 [ ] 代表 属性
})
export class InputDirective implements OnChanges {
  animation;
  num = 0;
  timer = null;
  @Input("input") input: any;
  private el: HTMLElement;
  @Output() cancelAnimation = new EventEmitter<void>();

  constructor(private element: ElementRef, renderer: Renderer) {
  }
  removeCheck() {
    if(this.input=='false'){
      this.element.nativeElement.removeAttribute('checked');
    }
  }
  ngOnChanges() {
    this.removeCheck();
  }
}
