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
import { CcategoryproductRoutingModule }                
       from './ccategoryproduct-routing.module';
import { CcategoryproductComponent }                    
       from './ccategoryproduct.component';
import { CustomComponentsModule }             
       from '../../../app_component/customcomponents.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		NgbModule,
		NgxMaskModule.forRoot(),
		CcategoryproductRoutingModule,
		CustomComponentsModule
	],
	declarations: [CcategoryproductComponent]
})
export class CcategoryproductModule { }