import { Component, OnInit, OnDestroy, 
         AfterViewInit, ViewEncapsulation }     from '@angular/core';
         
import { BaseCrudFilterComponent }              from './base/basecrudfilter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class AppComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy, AfterViewInit{
   
	viewTitle: String;
    view: String;
    mainpageNumber: number;
    subscriptions: any[];
    activeMenuIndex: number;
    showMenuOnTop: boolean;
    appConfig: any;
    usePricingPolicy: boolean;
	usePrivacityPolicy: boolean;
	useUsetermsPolicy: boolean;
	useUsecontractPolicy: boolean;
	offline: boolean;
	reloadTime: number;
 
    masterButtons: boolean;
    adminButtons: boolean;
    s3uploadButtons: boolean;
    mailerconfigButtons: boolean;
    simplemailButtonsManager: boolean;
    fileButtonsManager: boolean;
    fullButtonsManager: boolean;
    userButtonsManager: boolean;
    applogButtonsManager: boolean;
    verifyActivityInterval: any;

	ngOnInit() {
		this.sucessErrorMessages = {
			520: 'Seu navegador est&aacute; sem suporte para esta funcionalidade',
		    602: 'Sua sess&atilde;o expirou ap&oacute;s 20 minutos de inatividade. Efetuando logoff ...'
	    };
		this.cacheDataService.start(15);
		this.messageEmitterService = null;
		this.setInitializationServices(['user','module','appconfig']);
		this.crudService = this.userService;
		this.registerSubscriptions();
		this.viewTitleSeparator = '<i class="fas fa-chevron-right viewTitleSeparator"></i>';
		this.viewTitle = '';
		this.activeMenuIndex = 2;
		this.showMenuOnTop = true;
		this.storageService.localStorageSetItem('_modulesNames_' + this.getAppId(),'wait_loading_modules',false);
		this.storageService.localStorageSetItem('_appconfig_' + this.getAppId(),'wait_loading_appconfig',false);
		this.setMainPageNumber(0);
		this.loadConfig();
		this.loadModules();
	}
	
	ngOnDestroy(){
		this.unregisterSubscriptions();
		this.cacheDataService.ngOnDestroy();
		this.masterButtons = null;
		this.adminButtons = null;
		this.s3uploadButtons = null;
		this.mailerconfigButtons = null;
		this.simplemailButtonsManager = null;
		this.fileButtonsManager = null;
		this.fullButtonsManager = null;
		this.userButtonsManager = null;
		this.applogButtonsManager = null;
		clearInterval(this.verifyActivityInterval);
	  	this.verifyActivityInterval = null;
	}
	
	ngAfterViewInit(){
		this.storageService.localStorageSetItem('loadedApp_' + this.getAppId(),'1',false);
	}
	
	registerSubscriptions(){
		var i = 0;
		this.subscriptions = [];
		this.subscriptions[i++] = this.eventEmitterService.get('addValidationStatusMessage')
		                              .subscribe(objectMsg => {
		                            	  super.addValidationStatusMessage(objectMsg.code,objectMsg.message);});
		this.subscriptions[i++] = this.eventEmitterService.get('clearMessages')
                                      .subscribe(objectTimeout => {super.clearMessages(objectTimeout.time);});
		this.subscriptions[i++] = this.eventEmitterService.get('openMessage')
                                      .subscribe(objectMsg => {
                                    	  super.openMessage(objectMsg.header,objectMsg.message);});
		this.subscriptions[i++] = this.eventEmitterService.get('downloadFile')
                                      .subscribe(data => {this.downloadFile(data.link);});
		this.subscriptions[i++] = this.eventEmitterService.get('home')
		                              .subscribe(data => {this.sucessFullyLogged(data.object);});
		this.subscriptions[i++] = this.eventEmitterService.get('users')
		                              .subscribe(data => {this.usersView();});
		this.subscriptions[i++] = this.eventEmitterService.get('mailerconfigs')
		                              .subscribe(data => {this.mailerconfigsView(data.user);});
		this.subscriptions[i++] = this.eventEmitterService.get('simplemails')
                                      .subscribe(data => {this.simplemailsView(data.origin,data.object);});
        this.subscriptions[i++] = this.eventEmitterService.get('loadModules')
                                      .subscribe(data => {this.loadModules();});
		this.subscriptions[i++] = this.eventEmitterService.get('mainpage')
                                      .subscribe(data => {this.mainpageView();});
		
	}
	
	loadConfig(){
		this.appConfig = null;
		if(!navigator.onLine && !this.isLocalhost){
			this.applyConfig();
			return;
		}
		this.appConfigService.invalidateCache();
		this.appConfigService.getAll(-1,-1,null).then(configs => {
			configs = this.clearRowZeroObjectsValidated(configs);
			this.appConfig = (configs.length > 0) ? configs[0] : null;
			this.applyConfig();
		});
	}
	
	applyConfig(){
	    if(this.emptyObject(this.appConfig)){
	    	this.appConfig = this.getOfflineAppConfig();
	    }
	    var jsonObj = JSON.stringify(this.cloneAppConfigForStorage(this.appConfig));
	    this.storageService.localStorageSetItem('offlineAppConfig_' + this.getAppId(),jsonObj,true);
	    this.storageService.localStorageSetItem('_appconfig_' + this.getAppId(),'loaded',false);
		
		this.usePricingPolicy = this.appConfig.usePricingPolicy;
	    this.usePrivacityPolicy = this.appConfig.usePrivacityPolicy;
	    this.useUsetermsPolicy = this.appConfig.useUsetermsPolicy;
	    this.useUsecontractPolicy = this.appConfig.useUsecontractPolicy;
	    this.configButtons();
	}
	
	getOfflineAppConfig(){
		var appConf = this.storageService.localStorageGetItem('offlineAppConfig_' + this.getAppId());
		var offlineAppConfig = JSON.parse(appConf);
	    if(!this.emptyObject(offlineAppConfig)){
	    	return offlineAppConfig;
	    }
		return this.cloneAppConfigForStorage(null);
	}
	
	cloneAppConfigForStorage(appconfig){
		if(null==appconfig){
			return {
				name: 'App Name',
				description: 'App Description',
				usePricingPolicy: false,
				usePrivacityPolicy: false,
				useUsetermsPolicy: false,
				useUsecontractPolicy: false
			};
		}
		return {
			name: appconfig.name,
			description: appconfig.description,
			usePricingPolicy: appconfig.usePricingPolicy,
			usePrivacityPolicy: appconfig.usePrivacityPolicy,
			useUsetermsPolicy: appconfig.useUsetermsPolicy,
			useUsecontractPolicy: appconfig.useUsecontractPolicy
		};
	}
	
	loadModules(){
		this.modulesNames = [];
		if(!navigator.onLine && !this.isLocalhost){
			return;
		}
		this.moduleService.invalidateCache();
		this.moduleService.getAll(-1,-1,' xoo active = true ').then(modules => {
			modules = this.clearRowZeroObjectsValidated(modules);
			var size = modules.length;
			for(var i = 0; i < size; i++){
			    if(modules[i].active){
			    	this.modulesNames.unshift(modules[i].name);
			    }
			}
			this.storageService.localStorageSetItem('_modulesNames_' + this.getAppId(),
					                                '' + this.modulesNames.join(','),false);
			this.configButtons();
		});
	}
	
	configButtons(){
		this.masterButtons = false;
		this.adminButtons = false;
		this.s3uploadButtons = false;
		this.mailerconfigButtons = false;
		this.simplemailButtonsManager = false;
		this.fileButtonsManager = false;
		this.fullButtonsManager = false;
		this.userButtonsManager = false;
		this.applogButtonsManager = false;
		if(this.emptyObject(this.logged) || !(this.logged.id > 0)){
			return;
		}
		this.masterButtons = ['admin_master'].includes(this.logged.category);
		this.adminButtons = ['admin','system_auditor'].includes(this.logged.category);
		this.s3uploadButtons = this.masterButtons && this.modulesNames.includes('s3upload');
		this.mailerconfigButtons = (this.masterButtons 
				                 || (this.adminButtons && this.permissions.includes('mailerconfig')));
		this.simplemailButtonsManager = (this.masterButtons 
                                      || (this.adminButtons && this.permissions.includes('simplemail')));
		this.fileButtonsManager = (this.masterButtons 
				                || (this.adminButtons && this.permissions.includes('file')))
				                && this.modulesNames.includes('file');
		
		this.fullButtonsManager = ['admin_master','admin','system_auditor','enroll'].includes(this.logged.category);;
		this.userButtonsManager = (this.masterButtons 
                                || (this.adminButtons && this.permissions.includes('user')));
		this.applogButtonsManager = (this.masterButtons 
                                  || (this.adminButtons && this.permissions.includes('applog')));
	}
	
	//navigation control
	homeView(){ 
		this.storageService.clear();
		this.storageService.put(null);
		this.navigateTo('home','In&iacute;cio'); 
	}
	
	simplemailsView(origin,object){
		this.storageService.clear();
		this.storageService.put(origin);
		this.storageService.put(object);
		this.navigateTo('simplemails','Envio de E-mail');
	}
	
	mailerconfigsView(user){ 
		if(this.logged.category == 'admin_master'){
			if(this.emptyObject(user)){
				user = this.logged;
			}
			this.storageService.clear();
			this.storageService.put(user);
		}
		this.navigateTo('mailerconfigs','Configura&ccedil;&otilde;es de E-mail'); 
	}
	
	appconfigsView(){ 
		this.navigateTo('appconfigs','Configura&ccedil;&otilde;es da Aplica&ccedil;&atilde;o'); 
	}
	
	s3configsView(){ 
		this.navigateTo('s3configs','AWS S3 Upload'); 
	}
	
	modulesView(){ 
		this.navigateTo('modules','M&oacute;dulos da Aplica&ccedil;&atilde;o'); 
	}
	
	usersView(){ this.navigateTo('users','Pessoas/Usu&aacute;rios'); }
	
	imagesView(){ this.navigateTo('images','Imagens'); }
	
	filesView(){ this.navigateTo('files','Arquivos'); }
	
	categoryproductsView(){ this.navigateTo('categoryproducts','Categorias de Produtos'); }
	
	productsView(){ this.navigateTo('products','Produtos'); }
	
	fixedcostsView(){ this.navigateTo('fixedcosts','Custo Fixos'); }
	
	supplysView(){ this.navigateTo('supplys','Insumos'); }
	
	applogsView(){ this.navigateTo('applogs','Logs da Aplica&ccedil;&atilde;o'); }
	
    login(){
    	if(!this.emptyObject(this.logged)){
		    return;
	    }
    	this.storageService.clear();
		this.storageService.put(0);
		this.setMainPageNumber(5);
    	this.navigateTo('login','Efetuar Login'); 
	}
    
	register(){
        if(!this.emptyObject(this.logged) || !(this.modulesNames.includes('register'))){
		    return;
	    }
        this.storageService.clear();
		this.storageService.put(1);
		this.setMainPageNumber(5);
        this.navigateTo('register','Registrar-Me'); 
	}
	
	changeMyPassword(){
        if(this.emptyObject(this.logged) || !(this.logged.id > 0)){
		    return;
	    }
        this.storageService.clear();
		this.storageService.put(2);
		this.setMainPageNumber(5);
        this.navigateTo('changePassword','Trocar Senha'); 
	}
	
    navigateTo(path,title){
		if(path != 'blank' && this.userServiceRouter.getLastNavigated() == path){
			return;
		}
		this.setInActivity();
		this.router.navigate([path], { skipLocationChange: true }).then(res => {
			if(res && this.userServiceRouter.getLastNavigated() == path){
				this.view =  path;
				this.viewTitle = title;
				return;
			}
			this.view = this.userServiceRouter.getDefaultPath();
			this.viewTitle = this.userServiceRouter.getDefaultTitle(); 
		});
	}
    
    setMainPageNumber(pageNumber){
    	this.mainpageNumber = pageNumber;
		this.configButtons();
    }
	
    publicHome(){
		if(this.mainpageNumber == 0){
			this.eventEmitterService.get('showMenuContent').emit({id: 0, content: ''});
			return;
		}
		this.setMainPageNumber(0);
		this.storageService.clear();
		this.storageService.put(null);
		this.navigateTo('blank','');
	}
	
	pricingPolicy(){
		this.storageService.clear();
		this.storageService.put(this.appConfig.pricingPolicy);
		this.setMainPageNumber(1);
		this.navigateTo('pricingpolicy','Pol&iacute;tica de Pre&ccedil;os');
	}
	
	userTerms(){
		this.storageService.clear();
		this.storageService.put(this.appConfig.usetermsPolicy);
		this.setMainPageNumber(2);
		this.navigateTo('userterms','Termos de Uso');
	}
	
	privacityPolicy(){
		this.storageService.clear();
		this.storageService.put(this.appConfig.privacityPolicy);
		this.setMainPageNumber(3);
		this.navigateTo('privacitypolicy','Pol&iacute;tica de Privacidade');
	}
	
	useContract(){
		this.storageService.clear();
		this.storageService.put(this.appConfig.usecontractPolicy);
		this.setMainPageNumber(4);
		this.navigateTo('usecontract','Contrato de Usu&aacute;rio');
	}
	
	authorInfo(){
		this.storageService.clear();
		this.storageService.put(this.appConfig.authorInfo);
		this.setMainPageNumber(7);
		this.navigateTo('authorinfo','Sobre o Autor');
	}
	
	showMenuIndex(menuIndex){
		this.activeMenuIndex = menuIndex;
	}
	
	showHideTopMenu(){
		this.showMenuOnTop = !this.showMenuOnTop;
	}
	
	sucessFullyLogged(logged){
		if(this.emptyObject(logged) || !(logged.id > 0)){
			this.logout();
			return;
		}
		if(this.emptyObject(this.verifyActivityInterval)){
			var thisThis = this;
			this.verifyActivityInterval = setInterval(() => {thisThis.verifyInactivity();},30000);
		}
		this.cacheDataService.reset();
		this.setLogged(logged); 
		this.configButtons();
		this.homeView();
	}
	
	verifyInactivity(){
	    const lastActivity = this.storageService.localStorageGetItem('_lastActivity_' + this.getAppId());
	    const lastActivity2 = this.emptyString(lastActivity) ? 0 : parseInt('0' + lastActivity);
	    if(!(lastActivity2 > 0)){
		    this.setInActivity();
		    return;
	    }
	    if((new Date().getTime() - lastActivity2) > 1200000){
		    this.setStatusCode(602);
		    this.clearMessages(4000);
		    this.logout();
	    }
    }
	
	logout(){
	    if(this.emptyObject(this.logged)){
		    return;
	    }
	    this.logged.ownerId = parseInt(this.storageService.localStorageGetItem('_ownerId_' + this.getAppId()));
	    this.logged._token = this.storageService.localStorageGetItem('_token_' + this.getAppId());
	    this.userService.loggofUser(this.logged).then(result => {
	    	if(!this.emptyObject(result)){
	    		this.processObjectAndValidationResult(result,true);
			    return;
		    }
		    this.unregisterSubscriptions();
	    });
    }
	
	unregisterSubscriptions(){
		clearInterval(this.verifyActivityInterval);
		this.verifyActivityInterval = null;
		var size = this.subscriptions.length;
		for(var i = 0; i < size; i++){
			this.subscriptions[i].unsubscribe();
		}
		this.subscriptions = null;
		this.userServiceRouter.setLogged(null);
		this.router.navigate(['/']).then(res => {
			this.mainpageView();
		});
	}
	
	mainpageView(){
		this.setLogged(null);
		this.configButtons();
		this.storageService.localStorageClear();
		this.storageService.setAuthUser(null);
		this.cacheDataService.reset();
		window.location.reload();
	}
	
}