import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'credits',
  templateUrl: './credits.component.html'
})
export class CreditsComponent implements OnInit, OnDestroy{
  
  @Input() render: boolean;
  @Input() author: string;
  @Input() sites: string;
  @Input() text: string;
  @Input() thirdParts: string;
  
  fitMode: boolean;
  
  ngOnInit(){
	  this.fitMode = window.innerWidth < 800;
  }
  ngOnDestroy(){
      this.render = null;
      this.author = null;
      this.sites = null;
      this.text = null;
      this.thirdParts = null;
      this.fitMode = null;
  }
 
}


