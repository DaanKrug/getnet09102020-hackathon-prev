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
    appTheme: any;
    themeStyle: any;
    appConfig: any;
    appName: string;
    appDescription: string;
    appThemes: string[];
    appPageOrganization: string;
    usePricingPolicy: boolean;
	usePrivacityPolicy: boolean;
	useUsetermsPolicy: boolean;
	useUsecontractPolicy: boolean;
	defaultTheme: string;
	activeTheme: string;
	offline: boolean;
	reloadTime: number;
 
    masterButtons: boolean;
    adminButtons: boolean;
    s3uploadButtons: boolean;
    mailerconfigButtons: boolean;
    simplemailButtonsManager: boolean;
    fileButtonsManager: boolean;
    imageButtonsManager: boolean;
    userButtonsManager: boolean;
    applogButtonsManager: boolean;
    usePolicies: boolean;
    useSiteHeader1: boolean;
    useSiteHeader1Text: boolean;
    useSiteHeader2: boolean;
    useSiteHeader2Text: boolean;
    useSiteHeader3: boolean;
    useSitePolicies1: boolean;
    useSitePolicies2: boolean;
    useSitePolicies3: boolean;
    useSitePolicies4: boolean;
    publicModeView: boolean;
    verifyActivityInterval: any;

	ngOnInit() {
		this.sucessErrorMessages = {
			520: 'Seu navegador est&aacute; sem suporte para esta funcionalidade',
		    602: 'Sua sess&atilde;o expirou ap&oacute;s 20 minutos de inatividade. Efetuando logoff ...'
	    };
		this.cacheDataService.start(15);
		this.messageEmitterService = null;
		this.setInitializationServices(['user','module','apptheme','appconfig','appointmentpage']);
		this.crudService = this.userService;
		this.registerSubscriptions();
		this.viewTitleSeparator = '<i class="fas fa-chevron-right viewTitleSeparator"></i>';
		this.viewTitle = '';
		this.activeMenuIndex = 2;
		this.showMenuOnTop = true;
		this.storageService.localStorageSetItem('_modulesNames_' + this.getAppId(),'wait_loading_modules',false);
		this.storageService.localStorageSetItem('_appconfig_' + this.getAppId(),'wait_loading_appconfig',false);
		this.setMainPageNumber(0);
		this.loadTheme();
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
		this.imageButtonsManager = null;
		this.userButtonsManager = null;
		this.applogButtonsManager = null;
		this.usePolicies = null;
		this.useSiteHeader1 = null;
		this.useSiteHeader1Text = null;
		this.useSiteHeader2 = null;
		this.useSiteHeader2Text = null;
		this.useSiteHeader3 = null;
		this.useSitePolicies1 = null;
		this.useSitePolicies2 = null;
		this.useSitePolicies3 = null;
		this.useSitePolicies4 = null;
		this.publicModeView = null;
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
        this.subscriptions[i++] = this.eventEmitterService.get('printHtml')
                                      .subscribe(data => {this.printHtml(data.html);});
        this.subscriptions[i++] = this.eventEmitterService.get('exportCSV')
                                      .subscribe(data => {this.exportCSV(data.csv,data.filename);});
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
		this.appName = this.appConfig.name;
		this.appDescription = this.appConfig.description;
		this.usePricingPolicy = this.appConfig.usePricingPolicy;
	    this.usePrivacityPolicy = this.appConfig.usePrivacityPolicy;
	    this.useUsetermsPolicy = this.appConfig.useUsetermsPolicy;
	    this.useUsecontractPolicy = this.appConfig.useUsecontractPolicy;
	    this.usePolicies = this.usePricingPolicy || this.useUsetermsPolicy 
                         || this.usePrivacityPolicy || this.useUsecontractPolicy;
	    this.configLayout();
	    window.document.title = this.appName;
	    if(!this.emptyObject(window.parent)){
	    	window.parent.document.title = this.appName;
	    }
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
	
	loadTheme(){
		this.appTheme = null;
		this.offline = false;
		if(!navigator.onLine && !this.isLocalhost){
			this.offline = true;
	    	this.applyTheme();
			return;
		}
		this.appThemeService.invalidateCache();
		this.appThemeService.getAll(-1,-1,null).then(themes => {
		    if(this.emptyArray(themes) || this.emptyObject(themes[0]) 
		    		|| !((themes[0] as any).totalRows >= 0)){
		    	this.offline = true;
		    	this.applyTheme();
		    	return;
		    }
			themes = this.clearRowZeroObjectsValidated(themes);
			this.appTheme = (themes.length > 0) ? themes[0] : this.getOfflineAppTheme();
			this.applyTheme();
		});
	}
	
	applyTheme(){
	    if(this.offline){
	    	this.appTheme = this.getOfflineAppTheme();
	    	this.reloadTime = 30;
	    	setTimeout(() => {this.mainpageView();},30000);
	    	setTimeout(() => {setInterval(() => {this.reloadTime--;},1000)},200);
	    }
	    var jsonTheme = JSON.stringify(this.cloneAppThemeForStorage(this.appTheme));
	    this.storageService.localStorageSetItem('offlineAppTheme_' + this.getAppId(),jsonTheme,true);
		this.defaultTheme = this.appTheme.defaultTheme;
		var cdn = this.storageService.localStorageGetItem('_cdn_' + this.getAppId());
		this.themeStyle = { 
			'background-image': 'url(\'' + cdn + '/headers/' + this.appTheme.image + '\')',
        	'background-position': (this.appTheme.positionX + ' ' + this.appTheme.positionY),
        	'background-repeat': this.appTheme.backgroundRepeat,
        	'background-size': (this.appTheme.backgroundWidth + '% ' + this.appTheme.backgroundHeight + '%'),
        	'width': '100%',
        	'height': (this.appTheme.imageHeight + 'em')
        };
		this.appThemes = this.appTheme.themes.split(',');
		this.appThemes = this.removeFromArray(this.appThemes,'');
		this.appThemes = this.appThemes.sort();
	    this.appPageOrganization = this.appTheme.organization;
	    var storedTheme = this.storageService.localStorageGetItem('_actual_theme_' + this.getAppId());
		this.setTheme(this.emptyString(storedTheme) ? this.defaultTheme : storedTheme);
		this.configLayout();
	}
	
	getOfflineAppTheme(){
		var appTheme = this.storageService.localStorageGetItem('offlineAppTheme_' + this.getAppId());
	    var offlineAppTheme = JSON.parse(appTheme);
	    if(!this.emptyObject(offlineAppTheme)){
	    	return offlineAppTheme;
	    }
	    return this.cloneAppThemeForStorage(null);
	}
	
	cloneAppThemeForStorage(apptheme){
		if(null==apptheme){
			return {
				image: 'hemingway-min.jpg',
				defaultTheme: 'green01',
				themes: 'green01',
				organization: 'mode01',
				imageHeight: 10,
				positionX: 'center',
				positionY: 'center',
				backgroundWidth: 100,
				backgroundHeight: 100,
				backgroundRepeat: 'no-repeat'
			};
		}
		return {
			image: apptheme.image,
			defaultTheme: apptheme.defaultTheme,
			themes: apptheme.themes,
			organization: apptheme.organization,
			imageHeight: apptheme.imageHeight,
			positionX: apptheme.positionX,
			positionY: apptheme.positionY,
			backgroundWidth: apptheme.backgroundWidth,
			backgroundHeight: apptheme.backgroundHeight,
			backgroundRepeat: apptheme.backgroundRepeat
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
			this.configLayout();
		});
	}
	
	configLayout(){
		this.configButtons();
		this.configSiteHeaderAndPolicies();
	}
	
	configButtons(){
		this.masterButtons = false;
		this.adminButtons = false;
		this.s3uploadButtons = false;
		this.mailerconfigButtons = false;
		this.simplemailButtonsManager = false;
		this.fileButtonsManager = false;
		this.imageButtonsManager = false;
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
		
		this.imageButtonsManager = (this.masterButtons 
                                 || (this.adminButtons && this.permissions.includes('image')))
                                 && (this.modulesNames.includes('image') || this.modulesNames.includes('slider'));
		this.userButtonsManager = (this.masterButtons 
                                || (this.adminButtons && this.permissions.includes('user')));
		this.applogButtonsManager = (this.masterButtons 
                                  || (this.adminButtons && this.permissions.includes('applog')));
	}
	
	configSiteHeaderAndPolicies(){
		this.useSiteHeader1 = false;
		this.useSiteHeader1Text = false;
		this.useSiteHeader2 = false;
		this.useSiteHeader2Text = false;
		this.useSiteHeader3 = false;
		this.useSitePolicies1 = false;
		this.useSitePolicies2 = false;
		this.useSitePolicies3 = false;
		this.useSitePolicies4 = false;
		var isLogged = (!this.emptyObject(this.logged) && this.logged.id > 0);
		var enrollUser = isLogged && ['enroll'].includes(this.logged.category);
		var publicAccess = (!isLogged || enrollUser);
		this.publicModeView = (!isLogged && this.mainpageNumber == 0) 
		                    || (this.mainpageNumber >= 0 && enrollUser);
		if(this.emptyString(this.appPageOrganization)){
			return;
		}
		var mode1 = 'mode01' == this.appPageOrganization;
		var mode2 = 'mode02' == this.appPageOrganization;
		var mode3 = 'mode03' == this.appPageOrganization;
		var mode4 = 'mode04' == this.appPageOrganization;
		var mode5 = 'mode05' == this.appPageOrganization;
		var mode6 = 'mode06' == this.appPageOrganization;
		var mode7 = 'mode07' == this.appPageOrganization;
		var mode123 = mode1 || mode2 || mode3;
		var mode45 = mode4 || mode5;
		var mode67 = mode6 || mode7;
		this.useSiteHeader1 = publicAccess && mode45;
		this.useSiteHeader1Text = mode4;
		this.useSiteHeader2 = this.mainpageNumber >= 0 && publicAccess 
		                    && (mode67 || (mode123 && this.mainpageNumber > 0));
        this.useSiteHeader2Text = mode6;
        this.useSiteHeader3 = mode123;
		if(!this.usePolicies || isLogged){
			return;
		}
		this.useSitePolicies1 = mode1;
		this.useSitePolicies2 = mode45 || mode67;
		this.useSitePolicies3 = mode2;
		this.useSitePolicies4 = mode3 && this.mainpageNumber == 0;
	}
		
	downloadFile(link){
		var form = document.getElementById('downloadForm') as HTMLFormElement;
		form.action = link;
		form.submit();
	}
	
	printHtml(html){
		html = html.replace(/<!---->/gi,'');
	    document.getElementById('printDiv').innerHTML = html;
	    document.getElementById('printDiv').style.display = 'block';
	    document.getElementById('noPrintDiv').style.display = 'none';
	    window.print();
	    document.getElementById('noPrintDiv').style.display = 'block';
	    document.getElementById('printDiv').innerHTML = '';
		document.getElementById('printDiv').style.display = 'none';
	}
	
	exportCSV(csv,filename){
		if(filename.indexOf('.csv') == -1){
			filename += '.csv';
		}
		csv = csv.replace(/;/gi,';\n');
		const blob = new Blob([csv],{type: 'text/csv;charset=utf-8;'}); // '\ufeff' + csv
		if(navigator.msSaveBlob){
	        navigator.msSaveBlob(blob,filename);
	        return;
	    } 
		const link = document.createElement('a');
		if(undefined == link.download){
			this.setStatusCode(520);
			this.clearMessages(3000);
			return;
		}
		const url = URL.createObjectURL(blob);
        link.setAttribute('href',url);
        link.setAttribute('download',filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
	
	appthemesView(){ 
		this.navigateTo('appthemes','Temas da Aplica&ccedil;&atilde;o'); 
	}
	
	modulesView(){ 
		this.navigateTo('modules','M&oacute;dulos da Aplica&ccedil;&atilde;o'); 
	}
	
	usersView(){ this.navigateTo('users','Pessoas/Usu&aacute;rios'); }
	
	imagesView(){ this.navigateTo('images','Imagens'); }
	
	filesView(){ this.navigateTo('files','Arquivos'); }
	
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
		this.configLayout();
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
	
	setTheme(name){
	    if(this.emptyString(name) || !(this.appThemes.includes(name))){
	    	name = this.defaultTheme;
	    }
	    var cdn = this.storageService.localStorageGetItem('_cdn_' + this.getAppId());
	    this.activeTheme = name;
	    var el: any = document.getElementById('themeLink');
	    el.href = cdn + '/themes/' + name + '.min.css';
		this.storageService.localStorageSetItem('_actual_theme_' + this.getAppId(),name,true);
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
		this.configLayout();
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
		this.configLayout();
		this.storageService.localStorageClear();
		this.storageService.setAuthUser(null);
		this.cacheDataService.reset();
		window.location.reload();
	}
	
}