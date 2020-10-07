import { NgModule }                               from '@angular/core';
import { CommonModule }                           from '@angular/common';
import { CreditsComponent }                       from './credits.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreditsComponent],
  exports: [CreditsComponent]
})
export class CreditsModule { }
