import { NgModule }                                   from '@angular/core';
import { CommonModule }                               from '@angular/common';
import { NgbModule }                                  from '@ng-bootstrap/ng-bootstrap';
import { RichChronometerComponent }                   from './richchronometer.component';

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  declarations: [RichChronometerComponent],
  exports: [RichChronometerComponent]
})
export class RichChronometerModule { }
