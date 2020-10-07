import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppThemeComponent } from './apptheme.component';

const routes: Routes = [{path: '',component: AppThemeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppThemeRoutingModule { }