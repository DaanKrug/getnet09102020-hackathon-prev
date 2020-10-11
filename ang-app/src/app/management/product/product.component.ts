import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseCrudFilterComponent } from '../../base/basecrudfilter.component';


@Component({
	selector: 'product-root',
	templateUrl: './product.component.html',
	encapsulation: ViewEncapsulation.None,
	preserveWhitespaces: false
})
export class ProductComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{

	tabObjects: Object[];  
    images: any[];
    categories: any[];
    selectedCategory: any;
    selectedImage: any;
   	
	ngOnInit() {
   		this.setInitializationServices(['product','categoryproduct','image']);
   		this.crudService = this.productService;
   		this.sucessErrorMessages = {
			200:  'Produto adicionado com sucesso.',
			201:  'Produto alterado com sucesso.',
			2010: 'Produto inativado com sucesso.',
			2011: 'Produto ativado com sucesso.',
			204:  'Produto exclu&iacute;do com sucesso.',
			207:  'Produto restaurado com sucesso.',
			208:  'Produto exclu&iacute;do [PERMANENTE] com sucesso.'
		}; 
		this.tabObjects = [
			                  {value: '0', label: 'Dados Gerais (*)', title: 'Dados Gerais'},
			                  {value: '1', label: 'Descricao', title: 'Descricao do Produto'},
			                  {value: '2', label: 'Imagem', title: 'Imagem do Produto'},
		                  ];
		this.listTitle = 'Produtos';
		this.addTitle = 'Adicionar Produto';
		this.editTitle = 'Editar Produto';
		this.dataForm = new FormGroup({
			a2_name: new FormControl('', [Validators.required]),
			a3_description: new FormControl('', [Validators.required])
		    a8_disponibility: new FormControl('', [Validators.required])
			a9_deliverytime: new FormControl('', [Validators.required])
		    a10_sellprice: new FormControl('', [Validators.required])
		});    
		super.ngOnInit();
		this.loadImages();
		this.loadCategories();
	}

	afterNgOnInit(){
   		this.parameterName = 'a2_name|type:string';        
	}

	ngOnDestroy(){ 
		this.tabObjects = null; 
		this.images = null;
		this.categories = null;
		this.selectedCategory = null;
		this.selectedImage = null;
		super.ngOnDestroy();
	}

	setObject(product){
   		super.setObject(product);
   		this.setSelectedImage(product.a4_imageid);
   		this.setSelectedCategory(product.a6_categoryid);
		this.dataForm.setValue({
			a2_name: product.a2_name,
			a3_description: product.a3_description
			a8_disponibility: product.a8_disponibility,
			a9_deliverytime: product.a9_deliverytime,
			a10_sellprice: product.a10_sellprice
		}); 
	} 
	
	setSelectedObject(product){
		super.setSelectedObject(product);
		if(this.emptyObject(product)){
			return;
		}
		this.setSelectedImageSrc(product.a5_imagelink);
	}
	
	setSelectedImage(id){
		this.selectedImage = this.getFromArrayById(this.images,id,null);
		if(this.emptyObject(this.selectedImage)){
			return;
		}
		this.setImageSrc();
	}
	
	private setImageSrc(){
		if(this.emptyObject(this.selectedImage)){
			return;
		}
		var elem: any = document.getElementById('selectImageNewImage');
		if(this.emptyObject(elem)){
			setTimeout(() => {this.setImageSrc();},100);
			return;
		}
		elem.src = this.selectedImage.link;
	}
	
	private setSelectedImageSrc(url){
		var elem: any = document.getElementById('selectedObjectLink');
		if(this.emptyObject(elem)){
			setTimeout(() => {this.setSelectedImageSrc(url);},100);
			return;
		}
		elem.src = url;
	}
	
	loadImages(){
		this.selectedImage = null;
		if(this.emptyObject(this.logged)){
			setTimeout(() => {this.loadImages();},100);
			return;
		}
	    var conditions = ' xoo ownerId = ' + this.logged.id;
	    this.imageService.getAll(-1,-1,conditions).then(images => {
		    this.images = this.clearRowZeroObjectsValidated(images);
		    if(this.emptyObject(this.images)){
		    	return;
		    }
		    this.selectedImage = this.images[0];
	    });
	}
	
	setSelectedCategory(id){
		this.selectedCategory = this.getFromArrayById(this.categories,id,null);;
	}
	
	loadCategories(){
		this.selectedCategory = null;
	    this.ccategoryproductService.getAll(-1,-1,null).then(categories => {
		    this.categories = this.clearRowZeroObjectsValidated(categories);
		    if(this.emptyObject(this.categories)){
		    	return;
		    }
		    var size = this.categories.length;
		    for(var i = 0; i < size; i++){
		    	this.categories[i].name = this.categories[i].a1_name;
		    }
		    this.selectedCategory = this.categories[0];
	    });
	}
	
	getAdditionalConditions(): string{ 
		return ' xoo ownerId = ' + this.logged.id + ' ' + super.getAdditionalConditions();
	} 

	prepareData(product){
   		if(product.alreadyPrepared){
   			return product;
   		}
		product.alreadyPrepared = true;
		return product;
   	}

	prepareToSaveUpdate(product){
		product.a4_imageid = this.selectedImage.id;
		product.a5_imagelink = this.selectedImage.link;
		product.a6_categoryid = this.selectedCategory.id;
		product.a7_categoryname = this.selectedCategory.a1_name;
		return product;
	}

	makeSelectSearchedItemDestaked(product,destakSearch): Object{
		product.a2_name = this.makeDestak(product.a2_name,destakSearch);
		return product;
	}

	validateFormFields(): Boolean{
		if(this.errorRequired('a2_name')){
			this.addValidationMessage('Identifica&ccedil;&atilde;o &eacute; requerido!');
		}
		if(this.errorRequired('a3_description')){
			this.addValidationMessage('Descri&ccedil;&atilde;o &eacute; requerido!');
		}
		if(this.errorRequired('a8_disponibility')){
			this.addValidationMessage('Disponibilidade &eacute; requerida!');
		}
		if(this.errorRequired('a9_deliverytime')){
			this.addValidationMessage('Tempo de Entrega (dias) &eacute; requerido!');
		}
		if(this.errorRequired('a10_sellprice')){
			this.addValidationMessage('Preço de Venda &eacute; requerido!');
		}
		return !this.inValidationMsgs();
	}

	preValidateToSaveUpdate(product): boolean{
		if(this.emptyObject(this.selectedImage)){
			this.addValidationMessage('Imagem é requerida!');
		}
		if(this.emptyObject(this.selectedCategory)){
			this.addValidationMessage('Categoria é requerida!');
		}
		return !this.inValidationMsgs();
	}

	patchValue(target,value){
		if(target == 'a2_name'){
			this.dataForm.patchValue({a2_name: value});
		}
		if(target == 'a3_description'){
			this.dataForm.patchValue({a3_description: value});
		}
		if(target == 'a8_disponibility'){
			this.dataForm.patchValue({a8_disponibility: value});
		}
		if(target == 'a9_deliverytime'){
			this.dataForm.patchValue({a9_deliverytime: value});
		}
		if(target == 'a10_sellprice'){
			this.dataForm.patchValue({a10_sellprice: value});
		}
   	} 
	
}
