import { NgModule } 
       from '@angular/core';
import { Routes, RouterModule } 
       from '@angular/router';
import { SupplyproductComponent } 
       from './supplyproduct.component';

const routes: Routes = [{path: '',component: SupplyproductComponent}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SupplyproductRoutingModule { }