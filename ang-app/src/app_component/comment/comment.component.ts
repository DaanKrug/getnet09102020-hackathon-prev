import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit, OnDestroy{

  @Input() comment: any;
  
  ngOnInit(){}
  ngOnDestroy(){
      this.comment = null;
  }
  
}


