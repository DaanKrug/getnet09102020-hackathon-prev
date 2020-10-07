import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'site-header',
  templateUrl: './siteheader.component.html'
})
export class SiteHeaderComponent implements OnInit, OnDestroy{

  @Input() themeStyle: object;
  @Input() appName: string;
  @Input() appDescription: string;
  @Input() renderText: boolean;
  @Input() render: boolean;
  
  ngOnInit(){}
  ngOnDestroy(){
      this.themeStyle = null;
      this.appName = null;
      this.appDescription = null;
      this.renderText = null;
      this.render = null;
  }
  
}


