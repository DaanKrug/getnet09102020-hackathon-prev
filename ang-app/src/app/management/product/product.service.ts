import { Product } from './product';
import { BaseCrudService } from '../../../app_base/basecrud.service';

export class ProductService extends BaseCrudService {

	getUrl(){
		return this.getBase() + '/products';
	}

	getUrlForCache(){
		return this.getUrl();
	}

	getEmptyObject(conditions) :Object{
		var ownerId: number = parseInt('0' + this.storageService.localStorageGetItem('_ownerId_' + this.getAppId()));
		return new Product(0,conditions,
		                   null,null,0,null,0,null,
		                   ownerId,
		                   this.storageService.localStorageGetItem('_token_' + this.getAppId()),null);
	}

	getAll(page,rows,conditions): Promise<Product[]> {
		return new Promise<Product[]>(r => r(super.getAll(page,rows,this.getEmptyObject(conditions))));
	}

	load(id): Promise<Product> {
		return new Promise<Product>(r => r(super.load(id)));
	} 

	mergeAnotherInObject(object,anotherObject){
		object.a2_name = super.getChangedValue(anotherObject.a2_name,object.a2_name);
		object.a3_description = super.getChangedValue(anotherObject.a3_description,object.a3_description);
		object.a4_imageid = super.getChangedValue(anotherObject.a4_imageid,object.a4_imageid); 
		object.a5_imagelink = super.getChangedValue(anotherObject.a5_imagelink,object.a5_imagelink); 
		object.a6_categoryid = super.getChangedValue(anotherObject.a6_categoryid,object.a6_categoryid); 
		object.a7_categoryname = super.getChangedValue(anotherObject.a7_categoryname,object.a7_categoryname);
		object.ownerId = super.getChangedValue(anotherObject.ownerId,object.ownerId);
		return object;
	}

}