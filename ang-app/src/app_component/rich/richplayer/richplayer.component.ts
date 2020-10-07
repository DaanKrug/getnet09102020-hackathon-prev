import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, AfterViewInit }  from '@angular/core';

import { RichBaseComponent } from '../richbase.component';

@Component({
  selector: 'rich-player',
  templateUrl: './richplayer.component.html'
})
export class RichPlayerComponent extends RichBaseComponent implements OnInit, OnDestroy, AfterViewInit{

  @Input() videoSources: Plyr.Source[];
  @Output() setPlayerEmitter = new EventEmitter<any>();
    
  player: any;
  counter: number;
  videoSourcesPlayList: Plyr.Source[];
  alreadyBinded: boolean;
  videoSourcesPlayListInfo: string[];
  finishedd: boolean;
  nexting: boolean;
  plyrHeight: number;
  plyrWidth: number;
  fitMode: boolean;
  
  constructor() {
	  super(null);
	  this.fitMode = window.innerWidth < 800;
	  this.adjustSize();
  }
  
  //@ViewChild(PlyrComponent)
  //plyr: PlyrComponent;
  
  ngOnInit(){
	  super.ngOnInit();
  }
  
  ngOnDestroy(){
	  if(null != this.player){
		  this.player.reConfig = null;
		  this.player.destroy();
		  this.player = null;
	  }
	  this.setPlayerEmitter.emit(null);
	  super.ngOnDestroy();
	  this.videoSources = null;
	  this.videoSourcesPlayList = null;
	  this.counter = null;
	  this.alreadyBinded = null;
	  this.videoSourcesPlayListInfo = null;
	  this.finishedd = null;
	  this.nexting = null;
	  this.plyrHeight = null;
	  this.plyrWidth = null;
	  this.fitMode = null;
  }
  
  adjustSize(){
	  this.plyrHeight = parseInt(('' + (window.innerHeight * 0.8)).split('.')[0]);
	  this.plyrWidth = parseInt(('' + (this.plyrHeight * 1.777)).split('.')[0]);
	  if(this.plyrWidth > window.innerWidth){
		  this.plyrWidth = parseInt(('' + (window.innerWidth * 0.85)).split('.')[0]);
		  this.plyrHeight = parseInt(('' + (this.plyrWidth * 9/16)).split('.')[0]);
	  }
  }
  
  ngAfterViewInit(){
	  this.initializePlayList();
	  this.bindPlayer();
  }
  
  private initializePlayList(){
	  this.counter = 0;
	  var thisThis = this;
	  setTimeout(() => {thisThis.setPlayList();},100);
  }
  
  private played(event: Plyr.PlyrEvent) {
	  this.finishedd = false;
  }
  
  private finished(event: Plyr.PlyrEvent){
	  if(this.finishedd){
		  return;
	  }
	  this.finishedd = true;
	  setTimeout(() => {this.setPlayList();},200);
  }
  
  nextVideo(){
	  if(this.nexting){
		  return;
	  }
	  this.nexting = true;
	  this.finishedd = true;
	  setTimeout(() => {this.setPlayList();},200);
	  setTimeout(() => {this.nexting = false;},3000);
  }
	 
  private play(): void {
	  this.player.play();
  }
  
  private setPlayList(){
	  this.videoSourcesPlayList = [];
	  this.videoSourcesPlayListInfo = [];
	  if(null == this.videoSources){
		  return;
	  }
	  if(this.counter >= this.videoSources.length){
		  return;
	  }
	  var source: any = this.videoSources[this.counter];
	  this.videoSourcesPlayList = [source];
	  this.videoSourcesPlayListInfo = source.info;
	  this.counter ++;
  }
  
  private bindPlayer(){
	  if(this.alreadyBinded){
		  return;
	  }
	  var thisThis = this;
	  if(null == this.player){
		  setTimeout(() => {thisThis.bindPlayer();},300);
		  return;
	  }
	  this.alreadyBinded = true;
	  this.player.reConfig = (videoSources) => {thisThis.reConfig(videoSources);};
	  this.setPlayerEmitter.emit(this.player);
  }
  
  private reConfig(videoSources){
	  this.videoSources = videoSources;
	  this.initializePlayList();
  }
  
}
