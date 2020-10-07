import { AppTheme } from './apptheme';
import { BaseCrudService } from '../../../app_base/basecrud.service';
 
export class AppThemeService extends BaseCrudService {
	
  getUrl(){
	  return this.getBase() + '/appthemes';
  }
  
  getEmptyObject(conditions) :Object{
	  var ownerId: number = parseInt('0' + this.storageService.localStorageGetItem('_ownerId_' + this.getAppId()));
	  return new AppTheme(0,conditions,null,null,'green01','green01','mode01',10,'center','center',10,10,'no-repeat',false,
			              ownerId,
			              this.storageService.localStorageGetItem('_token_' + this.getAppId()),null);
  }
  
  getAll(page,rows,conditions): Promise<AppTheme[]> {
	  return new Promise<AppTheme[]>(r => r(super.getAll(page,rows,this.getEmptyObject(conditions))));
  }
  
  load(id): Promise<AppTheme> {
	  return new Promise<AppTheme>(r => r(super.load(id)));
  }
  
  mergeAnotherInObject(object,anotherObject){
	  object.name = super.getChangedValue(anotherObject.name,object.name);
	  object.image = super.getChangedValue(anotherObject.image,object.image);
	  object.defaultTheme = super.getChangedValue(anotherObject.defaultTheme,object.defaultTheme);
	  object.themes = super.getChangedValue(anotherObject.themes,object.themes);
	  object.organization = super.getChangedValue(anotherObject.organization,object.organization);
	  object.imageHeight = super.getChangedValue(anotherObject.imageHeight,object.imageHeight);
	  object.positionX = super.getChangedValue(anotherObject.positionX,object.positionX);
	  object.positionY = super.getChangedValue(anotherObject.positionY,object.positionY);
	  object.backgroundWidth = super.getChangedValue(anotherObject.backgroundWidth,object.backgroundWidth);
	  object.backgroundHeight = super.getChangedValue(anotherObject.backgroundHeight,object.backgroundHeight);
	  object.backgroundRepeat = super.getChangedValue(anotherObject.backgroundRepeat,object.backgroundRepeat);
	  object.active = super.getChangedValue(anotherObject.active,object.active);
	  object.ownerId = super.getChangedValue(anotherObject.ownerId,object.ownerId);
  	  return object;
  }
  
}