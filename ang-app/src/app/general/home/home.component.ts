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
		this.setInitializationServices(['user','supply']);
		this.crudService = this.userService;
		super.ngOnInit();
	}
	
	afterNgOnInit(){
		setTimeout(() => {
			this.registerSupplyPreferences();
		},1000);
		var content = this.storageService.get()[0];
		if(this.emptyString(content)){
			return;
		}
		var elem: any = document.getElementById('contentText');
		elem.innerHTML = content;
	}
	
	private registerSupplyPreferences(){
		var conditions = ' xoo ownerId = ' + this.logged.id;
		this.supplyService.getAll(-1,-1,conditions).then(supplies => {
			supplies = this.clearRowZeroObjectsValidated(supplies);
			var preferences = '';
			if(this.emptyObject(supplies)){
				this.registerNetWorkingPreferences(preferences);
			    return;
			}
			var size = supplies.length;
			for(var i = 0; i < size; i++){
				preferences += (preferences == '') ? '' : ',';
				preferences += supplies[i].a1_name;
			}
			this.registerNetWorkingPreferences(preferences);
		});
	}
	
	private registerNetWorkingPreferences(preferences){
		this.storageService.localStorageSetItem('_networking_preferences_' + this.getAppId(),preferences,true);
	}
		
	ngOnDestroy(){
		super.ngOnDestroy();
	}
	
	listData(){}
}