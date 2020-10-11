import { CommonModule }                       
       from '@angular/common';
import { NgModule }                           
       from '@angular/core';
import { FormsModule, ReactiveFormsModule }   
       from '@angular/forms';
import { NgbModule }                          
       from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule }                      
       from 'ngx-mask';
import { SupplyRoutingModule }                
       from './supply-routing.module';
import { SupplyComponent }                    
       from './supply.component';
import { CustomComponentsModule }             
       from '../../../app_component/customcomponents.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		NgbModule,
		NgxMaskModule.forRoot(),
		SupplyRoutingModule,
		CustomComponentsModule
	],
	declarations: [SupplyComponent]
})
export class SupplyModule { }