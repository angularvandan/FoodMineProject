import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'default-buttonn',
  templateUrl: './default-buttonn.component.html',
  styleUrls: ['./default-buttonn.component.css']
})
export class DefaultButtonnComponent {

  @Input()
  type:'submit'|'button'='submit';
  @Input()
  text:string='Submit';
  @Input()
  bgColor='#e72929';
  @Input()
  color='white';
  @Input()
  fontSizeRem=1.3;
  @Input()
  widthRem=12;
  @Output()
  onClick=new EventEmitter();



}
