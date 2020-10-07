import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'continue-confirmation',
  templateUrl: './continueconfirmation.component.html'
})
export class ContinueConfirmationComponent implements OnInit, OnDestroy{

  @Input() titlee: string;
  @Input() content: string;
  @Input() noCancel: boolean;
  
  @Output() confirmContinueProcessEmitter = new EventEmitter<void>();
  @Output() cancelContinueProcessEmitter = new EventEmitter<void>();
  
  ngOnInit(){}
  ngOnDestroy(){
      this.titlee = null;
      this.content = null;
      this.noCancel = null;
      this.confirmContinueProcessEmitter = null;
      this.cancelContinueProcessEmitter = null;
  }
  
  confirmContinueProcess(){
  	  this.confirmContinueProcessEmitter.emit();
  }
  
  cancelContinueProcess(){
  	  this.cancelContinueProcessEmitter.emit();
  }
  
}


