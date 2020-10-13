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
import { SupplyproductRoutingModule }                
       from './supplyproduct-routing.module';
import { SupplyproductComponent }                    
       from './supplyproduct.component';
import { CustomComponentsModule }             
       from '../../../app_component/customcomponents.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		NgbModule,
		NgxMaskModule.forRoot(),
		SupplyproductRoutingModule,
		CustomComponentsModule
	],
	declarations: [SupplyproductComponent]
})
export class SupplyproductModule { }