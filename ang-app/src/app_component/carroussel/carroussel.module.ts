import { NgModule }                               from '@angular/core';
import { CommonModule }                           from '@angular/common';
import { CarrousselComponent }                    from './carroussel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarrousselComponent],
  exports: [CarrousselComponent]
})
export class CarrousselModule { }
