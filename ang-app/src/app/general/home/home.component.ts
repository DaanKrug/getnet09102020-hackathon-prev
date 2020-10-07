import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { BaseCrudFilterComponent } from '../../base/basecrudfilter.component';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class HomeComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{
	
	ngOnInit(){
		this.setInitializationServices(['user']);
		this.crudService = this.userService;
		super.ngOnInit();
	}
	
	afterNgOnInit(){
		var content = this.storageService.get()[0];
		if(this.emptyString(content)){
			return;
		}
		var elem: any = document.getElementById('contentText');
		elem.innerHTML = content;
	}
	
	ngOnDestroy(){
		super.ngOnDestroy();
	}
	
	listData(){}
}