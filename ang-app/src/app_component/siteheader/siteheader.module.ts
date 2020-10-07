import { NgModule }                               from '@angular/core';
import { CommonModule }                           from '@angular/common';
import { SiteHeaderComponent }                    from './siteheader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SiteHeaderComponent],
  exports: [SiteHeaderComponent]
})
export class SiteHeaderModule { }
