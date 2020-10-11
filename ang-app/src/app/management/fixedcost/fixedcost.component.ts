import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseCrudFilterComponent } from '../../base/basecrudfilter.component';

import { FixedcostService } from './fixedcost.service';

@Component({
	selector: 'fixedcost-root',
	templateUrl: './fixedcost.component.html',
	encapsulation: ViewEncapsulation.None,
	preserveWhitespaces: false
})
export class FixedcostComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{

	   
   	fixedcostService: FixedcostService;

	ngOnInit() {
   		this.fixedcostService = new FixedcostService(this.http);
   		this.fixedcostService.setStorageService(this.storageService);
   		this.fixedcostService.setCacheDataService(this.cacheDataService);
   		this.fixedcostService.setMeta(this.meta);
   		this.crudService = this.fixedcostService;
   		this.setInitializationServices([]);
   		this.sucessErrorMessages = {
			200:  'Custo Fixo adicionado com sucesso.',
			201:  'Custo Fixo alterado com sucesso.',
			2010: 'Custo Fixo inativado com sucesso.',
			2011: 'Custo Fixo ativado com sucesso.',
			204:  'Custo Fixo exclu&iacute;do com sucesso.',
			207:  'Custo Fixo restaurado com sucesso.',
			208:  'Custo Fixo exclu&iacute;do [PERMANENTE] com sucesso.'
		}; 
		this.listTitle = 'Custo Fixos';
		this.addTitle = 'Adicionar Custo Fixo';
		this.editTitle = 'Editar Custo Fixo';
		this.dataForm = new FormGroup({
			a1_name: new FormControl('', [Validators.required]),
			a2_value: new FormControl('', [Validators.required])
		});    
		super.ngOnInit();
	}

	afterNgOnInit(){
   		this.parameterName = 'a1_name|type:string';        
	}

	ngOnDestroy(){    
		this.fixedcostService.ngOnDestroy();
		this.fixedcostService = null;
		super.ngOnDestroy();
	}

	setObject(fixedcost){
   		super.setObject(fixedcost);
		this.dataForm.setValue({
			a1_name: fixedcost.a1_name,
			a2_value: ('' + this.mathService.formatNumber(fixedcost.a2_value,2,'.')).replace('.',',')
		}); 
	} 

	getAdditionalConditions(): string{ 
		return ' xoo ownerId = ' +  this.logged.id + ' ' + super.getAdditionalConditions();
	} 
	
	prepareData(fixedcost){
		fixedcost.a2_valueLabel = 
			('' + this.mathService.formatNumber(fixedcost.a2_value,2,'.')).replace('.',',');
		return fixedcost;
	}

	prepareToSaveUpdate(fixedcost){
		var value = ('' + this.mathService.formatNumber(fixedcost.a2_value,2,'.')).replace(',','.');
		fixedcost.a2_value = parseFloat(value);
		return fixedcost;
	}

	makeSelectSearchedItemDestaked(fixedcost,destakSearch): Object{
		fixedcost.a1_name = this.makeDestak(fixedcost.a1_name,destakSearch);
		return fixedcost;
	}

	validateFormFields(): Boolean{
		if(this.errorRequired('a1_name')){
			this.addValidationMessage('Identifica&ccedil;&atilde;o &eacute; requerido!');
		}
		if(this.errorRequired('a2_value')){
			this.addValidationMessage('Valor &eacute; requerido!');
		}
		return !this.inValidationMsgs();
	}

	patchValue(target,value){
   		if(target == 'a1_name'){
			this.dataForm.patchValue({a1_name: value});
		}
		if(target == 'a2_value'){
			this.dataForm.patchValue({a2_value: value});
		}
   	} 
}