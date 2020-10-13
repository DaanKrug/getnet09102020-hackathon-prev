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
	
	units: any[];

	ngOnInit() {
   		this.setInitializationServices(['supply']);
   		this.crudService = this.supplyService;
   		this.sucessErrorMessages = {
			200:  'Insumo adicionado com sucesso.',
			201:  'Insumo alterado com sucesso.',
			204:  'Insumo exclu&iacute;do com sucesso.',
			207:  'Insumo restaurado com sucesso.',
			208:  'Insumo exclu&iacute;do [PERMANENTE] com sucesso.'
		}; 
		this.listTitle = 'Insumos';
		this.addTitle = 'Adicionar Insumo';
		this.editTitle = 'Editar Insumo';
		this.dataForm = new FormGroup({
			a1_name: new FormControl('', [Validators.required]),
			a2_value: new FormControl('', [Validators.required]),
			a3_un: new FormControl('', [])
		});    
		this.units = [
			{value: 'dz' , label: 'Dúzia'},
		    {value: 'm' , label: 'Metros'},
		    {value: 'cm' , label: 'Centímetros'},
		    {value: 'l' , label: 'Litros'},
		    {value: 'ml' , label: 'Mililitros'},
		    {value: 'kg' , label: 'Kilos'},
		    {value: 'g' , label: 'Gramas'}
		];
		super.ngOnInit();
	}

	afterNgOnInit(){
   		this.parameterName = 'a1_name|type:string';        
	}

	ngOnDestroy(){    
		this.units = null;
		super.ngOnDestroy();
	}

	setObject(supply){
   		super.setObject(supply);
		this.dataForm.setValue({
			a1_name: supply.a1_name,
			a2_value: ('' + this.mathService.formatNumber(supply.a2_value,2,'.')).replace('.',','),
			a3_un: supply.a3_un
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
		if(this.errorRequired('a3_un')){
			this.addValidationMessage('Unidade Medida &eacute; requerida!');
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
		if(target == 'a3_un'){
			this.dataForm.patchValue({a3_un: value});
		}
   	} 
}