import { NgModule }                                   from '@angular/core';
import { CommonModule }                               from '@angular/common';
import { PlyrModule }                                 from 'ngx-plyr';
import { RichPlayerComponent }                        from './richplayer.component';

//npm install --save plyr ngx-plyr
@NgModule({
  imports: [
    CommonModule, PlyrModule
  ],
  declarations: [RichPlayerComponent],
  exports: [RichPlayerComponent]
})
export class RichPlayerModule { }
