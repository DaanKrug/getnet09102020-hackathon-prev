import { Handcash } from './handcash';
import { BaseCrudService } from '../../../app_base/basecrud.service';

export class HandcashService extends BaseCrudService {

	getUrl(){
		return this.getBase() + '/handcashs';
	}

	getUrlForCache(){
		return this.getUrl();
	}

	getEmptyObject(conditions) :Object{
		var ownerId: number = parseInt('0' + this.storageService.localStorageGetItem('_ownerId_' + this.getAppId()));
		return new Handcash(0,conditions,
		                    null,false,null,'false',
		                    ownerId,
		                    this.storageService.localStorageGetItem('_token_' + this.getAppId()),null);
	}

	getAll(page,rows,conditions): Promise<Handcash[]> {
		return new Promise<Handcash[]>(r => r(super.getAll(page,rows,
   		                                                                  this.getEmptyObject(conditions))));
	}

	load(id): Promise<Handcash> {
		return new Promise<Handcash>(r => r(super.load(id)));
	} 

	mergeAnotherInObject(object,anotherObject){
		object.a1_name = super.getChangedValue(anotherObject.a1_name,object.a1_name);
		object.a2_simulated = super.getChangedValue(anotherObject.a2_simulated,object.a2_simulated);
		object.a3_reportdata = super.getChangedValue(anotherObject.a3_reportdata,object.a3_reportdata); 
		object.a2_simulatedLabel = super.getChangedValue(anotherObject.a2_simulatedLabel,object.a2_simulatedLabel);
		object.ownerId = super.getChangedValue(anotherObject.ownerId,object.ownerId);
		return object;
	}

}