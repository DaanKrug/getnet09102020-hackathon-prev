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
import { ProductRoutingModule }                
       from './product-routing.module';
import { ProductComponent }                    
       from './product.component';
import { CustomComponentsModule }             
       from '../../../app_component/customcomponents.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		NgbModule,
		NgxMaskModule.forRoot(),
		ProductRoutingModule,
		CustomComponentsModule
	],
	declarations: [ProductComponent]
})
export class ProductModule { }