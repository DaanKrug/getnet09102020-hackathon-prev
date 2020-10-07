import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseCrudFilterComponent } from '../../base/basecrudfilter.component';

@Component({
  selector: 'apptheme-root',
  templateUrl: './apptheme.component.html',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class AppThemeComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{
	
  organizations: Object[];
  positionsX: Object[];
  positionsY: Object[];
  backgroundRepeats: Object[];
  themeimages: Object[];
  selectedThemes: string[];
  atualImage: any;
  selectedImage: any;	
	
  ngOnInit() {
	  this.setInitializationServices(['apptheme']);
	  this.crudService = this.appThemeService;
	  this.sucessErrorMessages = {
		  200:  'Tema Aplicação adicionado com sucesso.',
		  201:  'Tema Aplicação alterado com sucesso.',
		  2010: 'Tema Aplicação inativado com sucesso.',
		  2011: 'Tema Aplicação ativado com sucesso.',
		  204:  'Tema Aplicação excluído com sucesso.',
		  207:  'Tema Aplicação restaurado com sucesso.',
		  208:  'Tema Aplicação excluído [PERMANENTE] com sucesso.',
	  };
	  this.listTitle = 'Temas';
	  this.addTitle = 'Adicionar Tema Aplicação';
	  this.editTitle = 'Editar Tema Aplicação';
	  this.formInfo = ['** Propriedades da imagem.'];
	  this.dataForm = new FormGroup({
          name: new FormControl('', [Validators.required]),
          defaultTheme:  new FormControl('', [Validators.required]),
          organization:  new FormControl('', [Validators.required]),
          imageHeight:  new FormControl('', [Validators.required]),
          positionX:  new FormControl('', [Validators.required]),
          positionY:  new FormControl('', [Validators.required]),
          backgroundWidth:  new FormControl('', [Validators.required]),
          backgroundHeight:  new FormControl('', [Validators.required]),
          backgroundRepeat:  new FormControl('', [Validators.required])
      });
      this.organizations = [
		  {value: 'mode01' , label: 'Navegação no Topo, Políticas Acima Navegação'},
		  {value: 'mode02' , label: 'Navegação no Topo, Políticas Abaixo Navegação'},
		  {value: 'mode03' , label: 'Navegação no Topo, Políticas no Rodapé'},
		  {value: 'mode04' , label: 'Título e Descrição + Imagem Acima, Navegação + Políticas Abaixo Imagem'},
		  {value: 'mode05' , label: 'Imagem Acima, Navegação + Políticas Abaixo Imagem'},
		  {value: 'mode06' , label: 'Navegação + Políticas Acima, Título e Descrição + Imagem Abaixo Navegação'},
		  {value: 'mode07' , label: 'Navegação + Políticas Acima, Imagem Abaixo Navegação'}
	  ];
	  this.positionsX = [
		  {value: 'left' , label: 'A esquerda'},
		  {value: 'center' , label: 'Centralizar'},
		  {value: 'right' , label: 'A direita'}
	  ];
	  this.positionsY = [
		  {value: 'top' , label: 'Acima'},
		  {value: 'center' , label: 'Centralizar'},
		  {value: 'bottom' , label: 'Abaixo'}
	  ];
	  this.backgroundRepeats = [
		  {value: 'repeat' , label: 'Repetir'},
		  {value: 'no-repeat' , label: 'Não Repetir'}
	  ];
      this.themeimages = [
		  {value: 'aircity-min.jpg' , label: 'Aircity'},
		  {value: 'aircity2-min.jpg' , label: 'Aircity 2'},
		  {value: 'autumforest-min.jpg' , label: 'Autum Forest'},
		  {value: 'bardcup-min.jpg' , label: 'Bard Cup'},
		  {value: 'calw01-min.jpg' , label: 'Calw 01 - Deutschland'},
		  {value: 'calw02-min.jpg' , label: 'Calw 02 - Deutschland'},
		  {value: 'calw03-min.jpg' , label: 'Calw 03 - Deutschland'},
		  {value: 'calw04-min.jpg' , label: 'Calw 04 - Deutschland'},
		  {value: 'calw05-min.jpg' , label: 'Calw 05 - Deutschland'},
		  {value: 'camping-min.jpg' , label: 'Camping'},
		  {value: 'citylogic-min.jpg' , label: 'City Logic'},
		  {value: 'cups-min.jpg' , label: 'Cups'},
		  {value: 'curvedsunset-min.jpg' , label: 'Curved Sunset'},
		  {value: 'dresden01-min.jpg' , label: 'Dresden 01 - Deutschland'},
		  {value: 'dresden02-min.jpeg' , label: 'Dresden 02 - Deutschland'},
		  {value: 'dresden03-min.jpg' , label: 'Dresden 03 - Deutschland'},
		  {value: 'dresden04-min.jpg' , label: 'Dresden 04 - Deutschland'},
		  {value: 'dresden05-min.jpg' , label: 'Dresden 05 - Deutschland'},
		  {value: 'dresden06-min.jpg' , label: 'Dresden 06 - Deutschland'},
		  {value: 'dresden07-min.jpg' , label: 'Dresden 07 - Deutschland'},
		  {value: 'dresden08-min.jpg' , label: 'Dresden 08 - Deutschland'},
		  {value: 'dresden09-min.jpg' , label: 'Dresden 09 - Deutschland'},
		  {value: 'flow-min.jpg' , label: 'Flow'},
		  {value: 'flowermountain-min.jpg' , label: 'Spring Mountain'},
		  {value: 'hemingway-min.jpg' , label: 'Hemingway'},
		  {value: 'lanterns-min.jpg' , label: 'Lanterns'},
		  {value: 'lowforest-min.jpg' , label: 'Low Forest'},
		  {value: 'nightcity-min.jpg' , label: 'Night City'},
		  {value: 'path-min.jpg' , label: 'Tree Weg'},
		  {value: 'pinkbridge-min.jpg' , label: 'Pink Bridge'},
	      {value: 'rivercity-min.jpg' , label: 'River City'},
	      {value: 'road-min.jpg' , label: 'Road'},
	      {value: 'schneestrasse-min.jpg' , label: 'Schnee Strasse'},
	      {value: 'smogpark-min.jpg' , label: 'Smog Park'},
	      {value: 'sunset-min.jpg' , label: 'Sunset'},
	      {value: 'sunshineonroad-min.jpg' , label: 'Sunshine On Road'},
	      {value: 'venicesunshine-min.jpg' , label: 'Venice Sunshine'},
	      {value: 'wintermountain-min.jpg' , label: 'Winter Mountain'}
	  ];
      super.ngOnInit();
  }
  
  afterNgOnInit(){
	  this.parameterName = 'name';
  }
  
  ngOnDestroy(){
      this.organizations = null;
      this.positionsX = null;
      this.positionsY = null;
	  this.backgroundRepeats = null;
      this.themeimages = null;
      this.selectedThemes = null;
      this.atualImage = null;
      this.selectedImage = null;
	  super.ngOnDestroy();
  }
  
  checkTheme(theme){
	  this.selectedThemes = this.checkObjectOnOptions(this.selectedThemes,theme);
  }
  
  uncheckTheme(theme){
	  this.selectedThemes = this.uncheckObjectOnOptions(this.selectedThemes,theme);
  }
  
  setObject(apptheme){
	  super.setObject(apptheme);
	  this.dataForm.setValue({
	      name: apptheme.name,
	      defaultTheme: apptheme.defaultTheme,
	      organization: apptheme.organization,
	      imageHeight: apptheme.imageHeight,
	      positionX: apptheme.positionX,
	      positionY: apptheme.positionY,
	      backgroundWidth: apptheme.backgroundWidth,
	      backgroundHeight: apptheme.backgroundHeight,
	      backgroundRepeat: apptheme.backgroundRepeat
	  });
	  this.selectedThemes = [];
	  this.atualImage = null;
	  this.selectedImage = null;
	  if(null!=apptheme && null!=apptheme.id && apptheme.id > 0){
	      var cdn = this.storageService.localStorageGetItem('_cdn_' + this.getAppId());
	      this.atualImage = {
	    	  name: this.getLabelForKey(this.themeimages,apptheme.image),
	    	  link: cdn + '/headers/' + apptheme.image,
	    	  image: apptheme.image
	      };
	  	  this.selectedThemes = apptheme.themes.split(",");
	  }
  }
  
  setSelectedObject(apptheme){
	  super.setSelectedObject(apptheme);
	  this.atualImage = null;
	  if(null!=apptheme && null!=apptheme.id && apptheme.id > 0){
		  var cdn = this.storageService.localStorageGetItem('_cdn_' + this.getAppId());
	      this.atualImage = {
	          name: this.getLabelForKey(this.themeimages,apptheme.image),
		      link: cdn + '/headers/' + apptheme.image,
		      image: apptheme.image
		  };
	  }
  }
  
  setSelectedImage(image){
	  var cdn = this.storageService.localStorageGetItem('_cdn_' + this.getAppId());
  	  this.selectedImage = {
	      name: this.getLabelForKey(this.themeimages,image),
		  link: cdn + '/headers/' + image,
		  image: image
	  };
  }
 
  makeSelectSearchedItemDestaked(apptheme,destakSearch): Object{
	  apptheme.name = this.makeDestak(apptheme.name,destakSearch);
	  return apptheme;
  }
  
  prepareToSaveUpdate(apptheme){
	  this.checkObjectOnOptions(this.selectedThemes,apptheme.defaultTheme);
      apptheme.themes = this.selectedThemes.join(',');
      var imgImage = (null==this.selectedImage) ? this.atualImage : this.selectedImage;
      apptheme.image = (null != imgImage && null != imgImage.image) ?  imgImage.image : '';
	  return apptheme;
  }
  
  preValidateToSaveUpdate(apptheme): boolean{
	  if(this.emptyObject(this.selectedImage) && this.emptyObject(this.atualImage)){
		  this.addValidationMessage('Imagem é requerida!');
	  }
	  return !this.inValidationMsgs();
  }
  
  validateFormFields(): Boolean{
	  if(this.errorRequired('name')){
		  this.addValidationMessage('Identificação é requerida!');
	  }
	  if(this.errorRequired('defaultTheme')){
		  this.addValidationMessage('Skin Default é requerida!');
	  }
	  if(this.errorRequired('organization')){
		  this.addValidationMessage('Organização Layout é requerida!');
	  }
	  if(this.errorRequired('imageHeight')){
		  this.addValidationMessage('Altura Cabeçalho Imagem é requerida!');
	  }
	  if(this.errorRequired('positionX')){
		  this.addValidationMessage('Posição X Imagem é requerida!');
	  }
	  if(this.errorRequired('positionY')){
		  this.addValidationMessage('Posição Y Imagem é requerida!');
	  }
	  if(this.errorRequired('backgroundWidth')){
		  this.addValidationMessage('Largura Imagem é requerida!');
	  }
	  if(this.errorRequired('backgroundHeight')){
		  this.addValidationMessage('Altura Imagem é requerida!');
	  }
	  if(this.errorRequired('backgroundRepeat')){
		  this.addValidationMessage('Repetir Imagem é requerida!');
	  }
	  return !this.inValidationMsgs();
  }
  
  callbackAfterUpdate(object){
      this.listDataNoCache();
      this.eventEmitterService.get('loadAppConfig').emit({});
  }
  
}






