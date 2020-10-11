import { NgModule } 
       from '@angular/core';
import { Routes, RouterModule } 
       from '@angular/router';
import { FixedcostComponent } 
       from './fixedcost.component';

const routes: Routes = [{path: '',component: FixedcostComponent}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FixedcostRoutingModule { }