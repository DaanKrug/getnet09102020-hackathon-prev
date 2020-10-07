import { CommonModule }                            from '@angular/common';
import { NgModule }                                from '@angular/core';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { NgbModule }                               from '@ng-bootstrap/ng-bootstrap';
import { AppThemeRoutingModule }                   from './apptheme-routing.module';
import { AppThemeComponent }                       from './apptheme.component';
import { CustomComponentsModule }                  from '../../../app_component/customcomponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    AppThemeRoutingModule,
    CustomComponentsModule
  ],
  declarations: [AppThemeComponent]
})
export class AppThemeModule { }
