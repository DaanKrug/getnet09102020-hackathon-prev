import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseCrudFilterComponent } from '../../base/basecrudfilter.component';


@Component({
	selector: 'fixedcost-root',
	templateUrl: './fixedcost.component.html',
	encapsulation: ViewEncapsulation.None,
	preserveWhitespaces: false
})
export class FixedcostComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{

	total: number;
	type: string;
	
	ngOnInit() {
   		this.setInitializationServices(['fixedcost']);
   		this.crudService = this.fixedcostService;
   		this.type = this.storageService.get()[0];
   		var cu = this.type != 'variant' ? 'Fixo' : 'Variável';
   		this.sucessErrorMessages = {
			200:  'Custo ' + cu + ' adicionado com sucesso.',
			201:  'Custo ' + cu + ' alterado com sucesso.',
			204:  'Custo ' + cu + ' exclu&iacute;do com sucesso.',
			207:  'Custo ' + cu + ' restaurado com sucesso.',
			208:  'Custo ' + cu + ' exclu&iacute;do [PERMANENTE] com sucesso.'
		}; 
		this.listTitle = 'Custos ' + cu + 's';
		this.addTitle = 'Adicionar Custo ' + cu;
		this.editTitle = 'Editar Custo ' + cu;
		this.dataForm = new FormGroup({
			a1_name: new FormControl('', [Validators.required]),
			a2_value: new FormControl('', [Validators.required]),
			a3_qtde: new FormControl('', [Validators.required])
		});    
		super.ngOnInit();
	}

	afterNgOnInit(){
   		this.parameterName = 'a1_name|type:string';        
	}
	
	afterListData(){
		this.total = 0;
		var size = this.objects.length;
		for(var i = 0; i < size; i++){
			this.total += this.objects[i].a2_value;
		}
		this.setProcessing(false);
	}

	ngOnDestroy(){    
		this.type = null;
		this.total = null;
		super.ngOnDestroy();
	}

	setObject(fixedcost){
   		super.setObject(fixedcost);
		this.dataForm.setValue({
			a1_name: fixedcost.a1_name,
			a2_value: ('' + this.mathService.formatNumber(fixedcost.a2_value,2,'.')).replace('.',','),
			a3_qtde: fixedcost.a3_qtde
		}); 
	} 

	getAdditionalConditions(): string{ 
		this.selectedPage = -1;
		this.rowsPerPage = -1;
		var cond = (this.type == 'variant') ? ' xoo a3_qtde > 0 ' : ' xoo a3_qtde = 0 ';
		return ' xoo ownerId = ' +  this.logged.id + ' ' + cond + ' ' + super.getAdditionalConditions();
	} 
	
	prepareData(fixedcost){
		fixedcost.a2_valueLabel = 
			('' + this.mathService.formatNumber(fixedcost.a2_value,2,'.')).replace('.',',');
		return fixedcost;
	}

	prepareToSaveUpdate(fixedcost){
		var value = ('' + this.mathService.formatNumber(fixedcost.a2_value,2,'.')).replace(',','.');
		fixedcost.a2_value = parseFloat(value);
		fixedcost.a3_qtde = (this.type == 'variant') ? fixedcost.a3_qtde : 0;
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
		if(this.type == 'variant' && this.errorRequired('a3_qtde')){
			this.addValidationMessage('Quantidade &eacute; requerida!');
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
		if(target == 'a3_qtde'){
			this.dataForm.patchValue({a3_qtde: value});
		}
   	} 
}


