import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'carroussel',
  templateUrl: './carroussel.component.html'
})
export class CarrousselComponent implements OnInit, OnDestroy{

  interval: any;
  counter: number;
  selectedImage: any;
  id: string;
  timeInterval: number;
  
  @Input() render: boolean;
  @Input() carrousselImages: any[];
  @Input() appName: string;
  @Input() appDescription: string;
  
  ngOnInit(){
	  this.selectedImage = (null == this.carrousselImages || this.carrousselImages.length == 0) 
	                     ? null : this.carrousselImages[0];
  	  this.counter = 0;
  	  this.timeInterval = 5000;
  	  this.id = 'carroussel_' + new Date().getTime();
  	  setTimeout(() => {this.nextImage(true);},500);
  }
  
  ngOnDestroy(){
  	  clearInterval(this.interval);
      this.interval = null;
      this.selectedImage = null;
      this.counter = null;
      this.timeInterval = null;
      this.render = null;
      this.carrousselImages = null;
      this.appName = null;
      this.id = null;
      this.appDescription = null;
  }
  
  nextImage(first){
      if(!this.render 
    	 || null == this.carrousselImages 
    	 || this.carrousselImages.length == 0
    	 || null == this.counter
    	 || (!first && null == this.interval)){
          return;
      }
      var container: any = document.getElementById(this.id + '_selectedImageContainer');
      if(null == container){
    	  setTimeout(() => {this.nextImage(first);},10);
    	  return;
      }
      if(first){
    	  this.interval = setInterval(() => {this.nextImage(false);},this.timeInterval);
      }
      this.selectedImage = this.carrousselImages[this.counter];
      this.counter ++;
      if(this.counter >= this.carrousselImages.length){
      	  this.counter = 0;
      }
	  if(!first){
		  container.style.backgroundSize = 'cover';
		  container.style.backgroundRepeat = 'no-repeat';
		  container.style.backgroundImage = "url('" + this.selectedImage.link.trim() + "')";  
	  }
	  this.makeInner(container);
  }
  
  makeInner(container){
	  container.innerHTML = '';
	  var inner = '<img id="' + this.id + '_selectedImageLink" ';
	  inner += 'src="' + this.selectedImage.link.trim() + '" ';
	  inner += 'style="width: 100%; height: 18em; border-radius: .15em; display: none;"/>';
	  inner += '<div id="' + this.id + '_selectedImageCaption" ';
	  inner += 'class="carousel-caption" style="display: none;">';
	  inner += '<h3>' + this.selectedImage.name + '</h3>';
	  if(this.selectedImage.description.trim() != ''){
		  inner += '<p>' + this.selectedImage.description.trim() + '</p>';
	  }
      inner += '</div>';
      container.innerHTML = inner;
      var image = document.getElementById(this.id + '_selectedImageLink');
	  var caption = document.getElementById(this.id + '_selectedImageCaption');
	  this.makeEffects(image,caption);
  }
  
  makeEffects(image,caption){
	  var position = parseInt('0' + (Math.random() * 12 * 1000)) % 13;
	  const transformations = this.getTransformations();
	  const key = 'transformation' + position;
	  const makeEffectsPositionFunction = transformations[key];
	  makeEffectsPositionFunction(image);
	  this.growingOpacity(caption);
  }
  
  // opacity | scale | radius | rotat R | rotat L
  //    1        1        1        0         0
  //    1        1        0        1         0
  //    1        1        0        0         1
  //    1        1        0        0         0
  //    1        0        0        0         0
  //    0        1        0        0         0
  //    0        1        1        0         0
  //    0        1        0        1         0
  //    0        1        0        0         1
  //    1        1        1        1         0
  //    1        1        1        0         1
  //    0        1        1        1         0
  //    0        1        1        0         1
  
  getTransformations(){
	  var thisThis = this;
	  const transformations = {
		  transformation0(elem){
			  thisThis.growingOpacity(elem);
			  thisThis.growingScale(elem,false,false);
			  thisThis.smallingRadius(elem);
		  },
		  transformation1(elem){
			  thisThis.growingOpacity(elem);
			  thisThis.growingScale(elem,true,false);
		  },
		  transformation2(elem){
			  thisThis.growingOpacity(elem);
			  thisThis.growingScale(elem,false,true);
		  },
		  transformation3(elem){
			  thisThis.growingOpacity(elem);
			  thisThis.growingScale(elem,false,false);
		  },
		  transformation4(elem){
			  thisThis.growingOpacity(elem);
		  },
		  transformation5(elem){
			  thisThis.noGrowingOpacity(elem);
			  thisThis.growingScale(elem,false,false);
		  },
		  transformation6(elem){
			  thisThis.noGrowingOpacity(elem);
			  thisThis.growingScale(elem,false,false);
			  thisThis.smallingRadius(elem);
		  },
		  transformation7(elem){
			  thisThis.noGrowingOpacity(elem);
			  thisThis.growingScale(elem,true,false);
		  },
		  transformation8(elem){
			  thisThis.noGrowingOpacity(elem);
			  thisThis.growingScale(elem,false,true);
		  },
		  transformation9(elem){
			  thisThis.growingOpacity(elem);
			  thisThis.growingScale(elem,true,false);
			  thisThis.smallingRadius(elem);
		  },
		  transformation10(elem){
			  thisThis.growingOpacity(elem);
			  thisThis.growingScale(elem,false,true);
			  thisThis.smallingRadius(elem);
		  },
		  transformation11(elem){
			  thisThis.noGrowingOpacity(elem);
			  thisThis.growingScale(elem,true,false);
			  thisThis.smallingRadius(elem);
		  },
		  transformation12(elem){
			  thisThis.noGrowingOpacity(elem);
			  thisThis.growingScale(elem,false,true);
			  thisThis.smallingRadius(elem);
		  }
	  };
	  return transformations;
  }
  
  growingScale(elem,rotateR,rotateL){
	  var timeout = 180;
	  if(!rotateR && !rotateL){
		  elem.style.transform = 'scale(0.15)';
	  }
	  if(rotateR){
		  elem.style.transform = 'scale(0.05) rotate(25deg)';
		  setTimeout(() => {elem.style.transform = 'scale(0.1) rotate(75deg)';},timeout);
		  timeout += 70;
		  setTimeout(() => {elem.style.transform = 'scale(0.15) rotate(150deg)';},timeout);
		  timeout += 70;
		  setTimeout(() => {elem.style.transform = 'scale(0.20) rotate(225deg)';},timeout);
		  timeout += 70;
		  setTimeout(() => {elem.style.transform = 'scale(0.25) rotate(300deg)';},timeout);
		  timeout += 70;
		  setTimeout(() => {elem.style.transform = 'scale(0.30) rotate(360deg)';},timeout);
		  timeout += 70;
	  }
	  if(rotateL){
		  setTimeout(() => {elem.style.transform = 'scale(0.1) rotate(-75deg)';},timeout);
		  timeout += 70;
		  setTimeout(() => {elem.style.transform = 'scale(0.15) rotate(-150deg)';},timeout);
		  timeout += 70;
		  setTimeout(() => {elem.style.transform = 'scale(0.20) rotate(-225deg)';},timeout);
		  timeout += 70;
		  setTimeout(() => {elem.style.transform = 'scale(0.25) rotate(-300deg)';},timeout);
		  timeout += 70;
		  setTimeout(() => {elem.style.transform = 'scale(0.30) rotate(-360deg)';},timeout);
		  timeout += 70;
	  }
	  setTimeout(() => {elem.style.transform = 'scale(0.35)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.4)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.45)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.5)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.55)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.6)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.65)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.7)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.75)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.8)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.85)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.9)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(0.95)'},timeout);
	  timeout += 70;
	  setTimeout(() => {elem.style.transform = 'scale(1)'},timeout);
  }
  
  noGrowingOpacity(elem){
	  elem.style.display = 'block';
	  elem.style.opacity = 1;
  }
  
  growingOpacity(elem){
	  elem.style.display = 'block';
	  elem.style.opacity = 0.3;
	  setTimeout(() => {elem.style.opacity = .35;},180);
	  setTimeout(() => {elem.style.opacity = .4;},250);
	  setTimeout(() => {elem.style.opacity = .45;},310);
	  setTimeout(() => {elem.style.opacity = .5;},375);
	  setTimeout(() => {elem.style.opacity = .55;},440);
	  setTimeout(() => {elem.style.opacity = .6;},500);
	  setTimeout(() => {elem.style.opacity = .65;},560);
	  setTimeout(() => {elem.style.opacity = .7;},625);
	  setTimeout(() => {elem.style.opacity = .75;},690);
	  setTimeout(() => {elem.style.opacity = .8;},750);
	  setTimeout(() => {elem.style.opacity = .85;},810);
	  setTimeout(() => {elem.style.opacity = .9;},875);
	  setTimeout(() => {elem.style.opacity = .95;},945);
	  setTimeout(() => {elem.style.opacity = 1;},1000);
  }
  
  smallingRadius(elem){
	  elem.style.borderRadius = '9em';
	  setTimeout(() => {elem.style.borderRadius = '8em';},180);
	  setTimeout(() => {elem.style.borderRadius = '7.9em';},250);
	  setTimeout(() => {elem.style.borderRadius = '7.8em';},310);
	  setTimeout(() => {elem.style.borderRadius = '7.7em';},375);
	  setTimeout(() => {elem.style.borderRadius = '7.6em';},440);
	  setTimeout(() => {elem.style.borderRadius = '7.5em';},500);
	  setTimeout(() => {elem.style.borderRadius = '7.4em';},560);
	  setTimeout(() => {elem.style.borderRadius = '7.3em';},625);
	  setTimeout(() => {elem.style.borderRadius = '7.2em';},690);
	  setTimeout(() => {elem.style.borderRadius = '7.1em';},750);
	  setTimeout(() => {elem.style.borderRadius = '7em';},810);
	  setTimeout(() => {elem.style.borderRadius = '6.9em';},875);
	  setTimeout(() => {elem.style.borderRadius = '6.4em';},945);
	  setTimeout(() => {elem.style.borderRadius = '.15em';},1000);
  }
  
}