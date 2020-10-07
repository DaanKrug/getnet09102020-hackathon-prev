import { NgModule }                               from '@angular/core';
import { CommonModule }                           from '@angular/common';
import { NgbModule }                              from '@ng-bootstrap/ng-bootstrap';
import { SitePoliciesComponent }                  from './sitepolicies.component';

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  declarations: [SitePoliciesComponent],
  exports: [SitePoliciesComponent]
})
export class SitePoliciesModule { }
