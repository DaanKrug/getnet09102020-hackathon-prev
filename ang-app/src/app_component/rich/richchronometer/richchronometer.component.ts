import { Component, EventEmitter, Input, 
	     Output, OnInit, OnDestroy }               from '@angular/core';

import { RichBaseComponent } from '../richbase.component';

@Component({
  selector: 'rich-chronometer',
  templateUrl: './richchronometer.component.html'
})
export class RichChronometerComponent extends RichBaseComponent implements OnInit, OnDestroy{

  @Input() timeLeft: number;
  @Input() fontFamily: string;
  
  @Output() timeZeroEmitter = new EventEmitter<void>();
  
  width: number;
  target: any;
  interval: any;
  hoursLeft: number;
  minutesLeft: number;
  secondsLeft: number;
  
  constructor() {
	  super(null);
  }
  
  ngOnInit(){
	  super.ngOnInit();
	  this.width = 8.5;
	  var now = new Date().getTime();
	  var rand = 1 + (Math.random() * 100000000000);
	  this.id = 'kronometer_' + now + '_' + rand;
	  this.timeLeft = parseInt('0' + (this.timeLeft/1000));
	  this.startInterval();
  }
  
  ngOnDestroy(){
	  this.stopInterval();
	  super.ngOnDestroy();
	  this.width = null;
	  this.fontFamily = null;
	  this.timeLeft = null;
	  this.target = null;
	  this.hoursLeft = null;
	  this.minutesLeft = null;
	  this.secondsLeft = null;
	  this.timeZeroEmitter = null;
	  
  }
  
  private startInterval(){
	  this.stopInterval();
	  this.setTimerInitial();
  }
  
  private stopInterval(){
	  if(null != this.interval){
		  clearInterval(this.interval);
		  this.interval = null;
	  }
  }
  
  private setTime(){
	  if(null == this.timeLeft){
		  return;
	  }
	  if(this.timeLeft <= 0){
		  this.timeZeroEmitter.emit();
		  this.stopInterval();
		  return;
	  }
	  if(null == this.target){
		  this.target = document.getElementById(this.id + '_timer');
	  }
	  var inner = this.calculateTimer();
	  this.timeLeft --;
	  if(null != this.target){
		  this.target.style.fontFamily = this.fontFamily;
		  this.target.innerHTML = inner;
	  }
	  var elem = document.getElementById(this.id + '_label');
	  if(null != elem){
		  elem.style.width = 'calc(100% - ' + (this.width + 1) + 'em)';
	  }
  }
  
  private calculateTimer(){
	  var h = this.leftZeros(this.hoursLeft,2);
	  var m = this.leftZeros(this.minutesLeft,2);
	  var s = this.leftZeros(this.secondsLeft,2);
	  this.setTimerNotInitial();
	  return (h + ':' + m + ':' + s);
  }
  
  private setTimerInitial(){
	  var rest = this.timeLeft;
	  this.hoursLeft = parseInt('0' + (rest/3600));
	  rest = rest - (this.hoursLeft * 3600);
	  this.minutesLeft = parseInt('0' + (rest/60));
	  rest = rest - (this.minutesLeft * 60);
	  this.secondsLeft = rest%60;
	  if(this.hoursLeft > 99){
		  this.width += (('' + this.hoursLeft).length - 2) * 0.75;
	  }
	  setTimeout(() => {this.setTime();},100);
	  this.interval = setInterval(() => {this.setTime();},1000);
  }
  
  private setTimerNotInitial(){
	  if(this.timeLeft <= 0){
		  this.secondsLeft = 0;
		  this.hoursLeft = 0;
		  this.minutesLeft = 0;
		  return;
	  }
	  if(this.secondsLeft > 0){
		  this.secondsLeft --;
		  return;
	  }
	  if(!(this.minutesLeft > 0) && !(this.hoursLeft > 0)){
		  return;
	  }
	  this.secondsLeft = 59;
	  if(this.minutesLeft > 0){
		  this.minutesLeft --;
		  return;
	  }
	  if(!(this.hoursLeft > 0)){
		  return;
	  }
	  this.minutesLeft = 59;
	  this.hoursLeft --;
  }
  
  private leftZeros(value,size){
	  value = '' + value;
	  while(value.length < size){
		  value = '0' + value;
	  }
	  return value;
  }
  
}
