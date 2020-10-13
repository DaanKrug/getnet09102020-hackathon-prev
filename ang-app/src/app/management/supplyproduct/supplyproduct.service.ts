import { Supplyproduct } from './supplyproduct';
import { BaseCrudService } from '../../../app_base/basecrud.service';

export class SupplyproductService extends BaseCrudService {

	getUrl(){
		return this.getBase() + '/supplyproducts';
	}

	getUrlForCache(){
		return this.getUrl();
	}

	getEmptyObject(conditions) :Object{
		var ownerId: number = parseInt('0' + this.storageService.localStorageGetItem('_ownerId_' + this.getAppId()));
		return new Supplyproduct(0,conditions,0,null,0,0,
		                         ownerId,
		                         this.storageService.localStorageGetItem('_token_' + this.getAppId()),null);
	}

	getAll(page,rows,conditions): Promise<Supplyproduct[]> {
		return new Promise<Supplyproduct[]>(r => r(super.getAll(page,rows,this.getEmptyObject(conditions))));
	}

	load(id): Promise<Supplyproduct> {
		return new Promise<Supplyproduct>(r => r(super.load(id)));
	} 

	mergeAnotherInObject(object,anotherObject){
		object.a1_supplyid = super.getChangedValue(anotherObject.a1_supplyid,object.a1_supplyid);
		object.a2_supplyname = super.getChangedValue(anotherObject.a2_supplyname,object.a2_supplyname);
		object.a3_productid = super.getChangedValue(anotherObject.a3_productid,object.a3_productid);
		object.a4_amount = super.getChangedValue(anotherObject.a4_amount,object.a4_amount);
		object.ownerId = super.getChangedValue(anotherObject.ownerId,object.ownerId);
		return object;
	}

}