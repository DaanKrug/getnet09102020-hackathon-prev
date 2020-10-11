import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseCrudFilterComponent } from '../../base/basecrudfilter.component';


@Component({
	selector: 'supply-root',
	templateUrl: './supply.component.html',
	encapsulation: ViewEncapsulation.None,
	preserveWhitespaces: false
})
export class SupplyComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{

	ngOnInit() {
   		this.setInitializationServices(['supply']);
   		this.crudService = this.supplyService;
   		this.sucessErrorMessages = {
			200:  'Insumo adicionado com sucesso.',
			201:  'Insumo alterado com sucesso.',
			2010: 'Insumo inativado com sucesso.',
			2011: 'Insumo ativado com sucesso.',
			204:  'Insumo exclu&iacute;do com sucesso.',
			207:  'Insumo restaurado com sucesso.',
			208:  'Insumo exclu&iacute;do [PERMANENTE] com sucesso.'
		}; 
		this.listTitle = 'Insumos';
		this.addTitle = 'Adicionar Insumo';
		this.editTitle = 'Editar Insumo';
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
		super.ngOnDestroy();
	}

	setObject(supply){
   		super.setObject(supply);
		this.dataForm.setValue({
			a1_name: supply.a1_name,
			a2_value: ('' + this.mathService.formatNumber(supply.a2_value,2,'.')).replace('.',',')
		}); 
	} 

	getAdditionalConditions(): string{ 
		return ' xoo ownerId = ' +  this.logged.id + ' ' + super.getAdditionalConditions();
	} 
	
	prepareData(supply){
		supply.a2_valueLabel = 
			('' + this.mathService.formatNumber(supply.a2_value,2,'.')).replace('.',',');
		return supply;
	}

	prepareToSaveUpdate(supply){
		var value = ('' + this.mathService.formatNumber(supply.a2_value,2,'.')).replace(',','.');
		supply.a2_value = parseFloat(value);
		return supply;
	}

	makeSelectSearchedItemDestaked(supply,destakSearch): Object{
		supply.a1_name = this.makeDestak(supply.a1_name,destakSearch);
		return supply;
	}

	validateFormFields(): Boolean{
		if(this.errorRequired('a1_name')){
			this.addValidationMessage('Identifica&ccedil;&atilde;o &eacute; requerido!');
		}
		if(this.errorRequired('a2_value')){
			this.addValidationMessage('Valor Unitário &eacute; requerido!');
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