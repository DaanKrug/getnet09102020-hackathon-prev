import { Ccategoryproduct } from './ccategoryproduct';
import { BaseCrudService } from '../../../app_base/basecrud.service';

export class CcategoryproductService extends BaseCrudService {

	getUrl(){
		return this.getBase() + '/ccategoryproducts';
	}

	getUrlForCache(){
		return this.getUrl();
	}

	getEmptyObject(conditions) :Object{
		var ownerId: number = parseInt('0' + this.storageService.localStorageGetItem('_ownerId_' + this.getAppId()));
		return new Ccategoryproduct(0,conditions,
		                            null,
		                            ownerId,
		                            this.storageService.localStorageGetItem('_token_' + this.getAppId()),null);
	}

	getAll(page,rows,conditions): Promise<Ccategoryproduct[]> {
		return new Promise<Ccategoryproduct[]>(r => r(super.getAll(page,rows,
   		                                                                  this.getEmptyObject(conditions))));
	}

	load(id): Promise<Ccategoryproduct> {
		return new Promise<Ccategoryproduct>(r => r(super.load(id)));
	} 

	mergeAnotherInObject(object,anotherObject){
		object.a1_name = super.getChangedValue(anotherObject.a1_name,object.a1_name); 
		object.ownerId = super.getChangedValue(anotherObject.ownerId,object.ownerId);
		return object;
	}

}