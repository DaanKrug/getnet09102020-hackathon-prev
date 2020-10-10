import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseCrudFilterComponent } from '../../base/basecrudfilter.component';


@Component({
	selector: 'ccategoryproduct-root',
	templateUrl: './ccategoryproduct.component.html',
	encapsulation: ViewEncapsulation.None,
	preserveWhitespaces: false
})
export class CcategoryproductComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{

	ngOnInit() {
   		this.setInitializationServices(['categoryproduct']);
   		this.crudService = this.ccategoryproductService;
   		this.sucessErrorMessages = {
			200:  'Categoria Produto adicionado com sucesso.',
			201:  'Categoria Produto alterado com sucesso.',
			2010: 'Categoria Produto inativado com sucesso.',
			2011: 'Categoria Produto ativado com sucesso.',
			204:  'Categoria Produto exclu&iacute;do com sucesso.',
			207:  'Categoria Produto restaurado com sucesso.',
			208:  'Categoria Produto exclu&iacute;do [PERMANENTE] com sucesso.'
		}; 
		this.listTitle = 'Categoria Produtos';
		this.addTitle = 'Adicionar Categoria Produto';
		this.editTitle = 'Editar Categoria Produto';
		this.dataForm = new FormGroup({
			a1_name: new FormControl('', [Validators.required])
		});    
		super.ngOnInit();
	}

	afterNgOnInit(){
   		this.parameterName = '';        
	}

	ngOnDestroy(){    
		super.ngOnDestroy();
	}

	setObject(ccategoryproduct){
   		super.setObject(ccategoryproduct);
		this.dataForm.setValue({
			a1_name: ccategoryproduct.a1_name
		}); 
	} 

	getAdditionalConditions(): string{ 
		return ' ' + super.getAdditionalConditions();
	} 

	prepareData(ccategoryproduct){
   		if(ccategoryproduct.alreadyPrepared){
   			return ccategoryproduct;
   		}
   		// set and transform some needed data before to show in table in view
   		
		ccategoryproduct.alreadyPrepared = true;
		return ccategoryproduct;
   	}

	prepareToSaveUpdate(ccategoryproduct){
		// set and transform some needed data before to send to server save 
		
		return ccategoryproduct;
	}

	makeSelectSearchedItemDestaked(ccategoryproduct,destakSearch): Object{
		
		return ccategoryproduct;
	}

	validateFormFields(): Boolean{
		if(this.errorRequired('a1_name')){
			this.addValidationMessage('Identifica&ccedil;&atilde;o &eacute; requerida!');
		}
		return !this.inValidationMsgs();
	}

	preValidateToSaveUpdate(ccategoryproduct): boolean{
		//verify object data here and validate in view before send to server 
		return !this.inValidationMsgs();
	}

	patchValue(target,value){
   		if(target == 'a1_name'){
			this.dataForm.patchValue({a1_name: value});
		}
   	} 
}