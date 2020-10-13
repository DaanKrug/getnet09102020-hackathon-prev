import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseCrudFilterComponent } from '../../base/basecrudfilter.component';


@Component({
	selector: 'supplyproduct-root',
	templateUrl: './supplyproduct.component.html',
	encapsulation: ViewEncapsulation.None,
	preserveWhitespaces: false
})
export class SupplyproductComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{

	product: any;
    selectedSupply: any;
    supplies: any[];
	
	ngOnInit() {
   		this.setInitializationServices(['supplyproduct','supply']);
   		this.crudService = this.supplyproductService;
   		this.product = this.storageService.get()[0];
   		this.sucessErrorMessages = {
			200:  'Insumo Do Produto adicionado com sucesso.',
			201:  'Insumo Do Produto alterado com sucesso.',
			204:  'Insumo Do Produto exclu&iacute;do com sucesso.',
			207:  'Insumo Do Produto restaurado com sucesso.',
			208:  'Insumo Do Produto exclu&iacute;do [PERMANENTE] com sucesso.'
		}; 
		this.listTitle = 'Insumos do Produto';
		this.addTitle = 'Adicionar Insumo ao Produto';
		this.editTitle = 'Editar Insumo do Produto';
		this.dataForm = new FormGroup({
			a4_amount: new FormControl('', [Validators.required])
		});    
		this.supplies = null;
		super.ngOnInit();
		this.loadSupplies();
	}
	
	listData(){
		if(null == this.supplies){
			setTimeout(() => {
				this.listData();
			},100);
			return;
		}
		super.listData();
	}

	afterNgOnInit(){
   		this.parameterName = 'a2_supplyname|type:string';        
	}

	ngOnDestroy(){    
		this.product = null;
        this.selectedSupply = null;
        this.supplies = null;
		super.ngOnDestroy();
	}

	setObject(supplyproduct){
   		super.setObject(supplyproduct);
		this.dataForm.setValue({
			a4_amount: supplyproduct.a4_amount
		}); 
	} 

	getAdditionalConditions(): string{ 
		return ' xoo a3_productid = ' + this.product.id + ' ' + super.getAdditionalConditions();
	} 
	
	setSelectedSupply(id){
		this.selectedSupply = this.getFromArrayById(this.supplies,id,null);
	}
	
	loadSupplies(){
		this.selectedSupply = null;
	    this.supplyService.getAll(-1,-1,null).then(supplies => {
		    this.supplies = this.clearRowZeroObjectsValidated(supplies);
		    if(this.emptyObject(this.supplies)){
		    	return;
		    }
		    var size = this.supplies.length;
		    for(var i = 0; i < size; i++){
		    	this.supplies[i].name = this.supplies[i].a1_name;
		    }
		    this.selectedSupply = this.supplies[0];
	    });
	}

	prepareToSaveUpdate(supplyproduct){
		supplyproduct.a1_supplyid = this.selectedSupply.id;
		supplyproduct.a2_supplyname = this.selectedSupply.a1_name;
		supplyproduct.a3_productid = this.product.id;
		return supplyproduct;
	}
	
	setSelectedObject(supplyproduct){
		if(this.emptyObject(supplyproduct)){
			super.setSelectedObject(supplyproduct);
			return;
		}
		super.setSelectedObject(this.prepareData(supplyproduct));
	}
	
	prepareData(supplyproduct){
		var supply = this.getFromArrayById(this.supplies,supplyproduct.a1_supplyid,null);
		if(this.emptyObject(supply)){
			supplyproduct.a3_un = supply.a3_un;
		}
		return supplyproduct;
	}

	makeSelectSearchedItemDestaked(supplyproduct,destakSearch): Object{
		supplyproduct.a2_supplyname = this.makeDestak(supplyproduct.a2_supplyname,destakSearch);
		return supplyproduct;
	}

	validateFormFields(): Boolean{
		if(this.errorRequired('a4_amount')){
			this.addValidationMessage('Quantidade &eacute; requerida!');
		}
		return !this.inValidationMsgs();
	}

	preValidateToSaveUpdate(supplyproduct): boolean{
		if(this.emptyObject(this.product)){
			this.addValidationMessage('Produto &eacute; requerido!');
		}
		if(this.emptyObject(this.selectedSupply)){
			this.addValidationMessage('Insumo &eacute; requerido!');
		}
		return !this.inValidationMsgs();
	}

	backToOrigin(){
		this.crudService.getStorageService().clear();
		this.eventEmitterService.get('products').emit({});
	} 

	patchValue(target,value){
		if(target == 'a4_amount'){
			this.dataForm.patchValue({a4_amount: value});
		}
   	} 
	
}