import { Fixedcost } from './fixedcost';
import { BaseCrudService } from '../../../app_base/basecrud.service';

export class FixedcostService extends BaseCrudService {

	getUrl(){
		return this.getBase() + '/fixedcosts';
	}

	getUrlForCache(){
		return this.getUrl();
	}

	getEmptyObject(conditions) :Object{
		var ownerId: number = parseInt('0' + this.storageService.localStorageGetItem('_ownerId_' + this.getAppId()));
		return new Fixedcost(0,conditions,
		                     null,0,'0',
		                     ownerId,
		                     this.storageService.localStorageGetItem('_token_' + this.getAppId()),null);
	}

	getAll(page,rows,conditions): Promise<Fixedcost[]> {
		return new Promise<Fixedcost[]>(r => r(super.getAll(page,rows,
   		                                                                  this.getEmptyObject(conditions))));
	}

	load(id): Promise<Fixedcost> {
		return new Promise<Fixedcost>(r => r(super.load(id)));
	} 

	mergeAnotherInObject(object,anotherObject){
		object.a1_name = super.getChangedValue(anotherObject.a1_name,object.a1_name);
		object.a2_value = super.getChangedValue(anotherObject.a2_value,object.a2_value); 
		object.a2_valueLabel = super.getChangedValue(anotherObject.a2_valueLabel,object.a2_valueLabel);
		object.ownerId = super.getChangedValue(anotherObject.ownerId,object.ownerId);
		return object;
	}

}