import { NgModule } 
       from '@angular/core';
import { Routes, RouterModule } 
       from '@angular/router';
import { HandcashComponent } 
       from './handcash.component';

const routes: Routes = [{path: '',component: HandcashComponent}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HandcashRoutingModule { }