import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  @Input() appHightlight:string = "transparent";
  @HostBinding('style.backgroundColor') bgColor:string = "transparent";
  constructor() { 
  }
  @HostListener('click') clickedElem(){
    this.bgColor = this.appHightlight;
  }
}
