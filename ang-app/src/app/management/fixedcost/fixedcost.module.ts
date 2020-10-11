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
import { FixedcostRoutingModule }                
       from './fixedcost-routing.module';
import { FixedcostComponent }                    
       from './fixedcost.component';
import { CustomComponentsModule }             
       from '../../../app_component/customcomponents.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		NgbModule,
		NgxMaskModule.forRoot(),
		FixedcostRoutingModule,
		CustomComponentsModule
	],
	declarations: [FixedcostComponent]
})
export class FixedcostModule { }