import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseCrudFilterComponent } from '../../base/basecrudfilter.component';

@Component({
	selector: 'handcash-root',
	templateUrl: './handcash.component.html',
	encapsulation: ViewEncapsulation.None,
	preserveWhitespaces: false
})
export class HandcashComponent extends BaseCrudFilterComponent implements OnInit, OnDestroy{

	products: any[];
    supplyProducts: any[];
    supplies: any[];
	fixedCosts: any[];
    inPreview: boolean;
    selectedHandCash: any;
	
	ngOnInit() {
   		this.setInitializationServices(['handcash','product',
   			                            'supplyproduct','supply','fixedcost']);
   		this.crudService = this.handcashService;
   		this.sucessErrorMessages = {
			200:  'Cálculo de Lucro adicionado com sucesso.',
			201:  'Cálculo de Lucro alterado com sucesso.',
			204:  'Cálculo de Lucro exclu&iacute;do com sucesso.',
			207:  'Cálculo de Lucro restaurado com sucesso.',
			208:  'Cálculo de Lucro exclu&iacute;do [PERMANENTE] com sucesso.'
		}; 
		this.listTitle = 'Meus Cálculos de Lucro';
		this.addTitle = 'Adicionar Cálculo de Lucro';
		this.editTitle = 'Editar Cálculo de Lucro';
		this.dataForm = new FormGroup({
			a1_name: new FormControl('', [Validators.required]),
			a2_simulated: new FormControl('', [])
		});    
		super.ngOnInit();
		this.loadProducts();
		this.loadFixedCosts();
	}

	afterNgOnInit(){
   		this.parameterName = 'a1_name|type:string';        
	}

	ngOnDestroy(){ 
		this.products = null;
		this.supplyProducts = null;
		this.supplies = null;
		this.inPreview = false;
		this.selectedHandCash = null;
		this.fixedCosts = null;
		super.ngOnDestroy();
	}

	setObject(handcash){
   		super.setObject(handcash);
		this.dataForm.setValue({
			a1_name: handcash.a1_name,
			a2_simulated: handcash.a2_simulated
		}); 
	} 

	getAdditionalConditions(): string{ 
		return ' xoo ownerId = ' + this.logged.id + ' ' + super.getAdditionalConditions();
	} 
	
	loadFixedCosts(){
		this.products = null;
		this.supplyProducts = null;
		this.supplies = null;
		var conditions = ' xoo ownerId = ' + this.logged.id;
		this.fixedcostService.getAll(-1,-1,conditions).then(fixedcosts => {
			this.fixedCosts = this.clearRowZeroObjectsValidated(fixedcosts);
		});
	}
	
	loadProducts(){
		this.products = null;
		this.supplyProducts = null;
		this.supplies = null;
		var conditions = ' xoo ownerId = ' + this.logged.id;
		this.productService.getAll(-1,-1,conditions).then(products => {
			this.products = this.clearRowZeroObjectsValidated(products);
			if(this.emptyArray(this.products)){
				return;
			}
			var productIds = '0';
			var size = this.products.length;
			for(var i = 0; i < size; i++){
				productIds += ',' + this.products[i].id;
			}
			this.loadSupplyProducts(productIds);
		});
	}
	
	loadSupplyProducts(productIds){
		var conditions = ' xoo a3_productid in(' + productIds + ')';
		this.supplyproductService.getAll(-1,-1,conditions).then(supplyProducts => {
			this.supplyProducts = this.clearRowZeroObjectsValidated(supplyProducts);
			if(this.emptyArray(this.supplyProducts)){
				return;
			}
			var supplyIds = '0';
			var size = this.supplyProducts.length;
			for(var i = 0; i < size; i++){
				supplyIds += ',' + this.supplyProducts[i].a1_supplyid;
			}
			this.loadSupplies(supplyIds);
		});
	}
	
	loadSupplies(supplyIds){
		var conditions = ' xoo id in(' + supplyIds + ')';
		this.supplyService.getAll(-1,-1,conditions).then(supplies => {
			this.supplies = this.clearRowZeroObjectsValidated(supplies);
			this.setProductsSupplies();
		});
	}

	prepareData(handcash){
   		if(handcash.alreadyPrepared){
   			return handcash;
   		}
   		handcash.a2_simulatedLabel = (['true',1,true].includes(handcash.a2_simulated) ? 'Sim' : 'N&atilde;o');
		handcash.alreadyPrepared = true;
		return handcash;
   	}

	prepareToSaveUpdate(handcash){
		handcash.a3_reportdata = this.calculateReport();
		return handcash;
	}

	makeSelectSearchedItemDestaked(handcash,destakSearch): Object{
		handcash.a1_name = this.makeDestak(handcash.a1_name,destakSearch);
		return handcash;
	}

	validateFormFields(): Boolean{
		if(this.errorRequired('a1_name')){
			this.addValidationMessage('Identifica&ccedil;&atilde;o &eacute; requerido!');
		}
		return !this.inValidationMsgs();
	}

	patchValue(target,value){
   		if(target == 'a1_name'){
			this.dataForm.patchValue({a1_name: value});
		}
   	} 
	
	callbackAfterCreate(object){
		var conditions = ' xoo ownerId = ' + this.logged.id;
		this.crudService.getAll(1,1,conditions).then(handCashs => {
			handCashs = this.clearRowZeroObjectsValidated(handCashs);
			if(this.emptyArray(handCashs)){
				this.setProcessing(true);
				return;
			}
			this.preview(handCashs[0].id);
		});
	}
	
	preview(id){
		this.selectedHandCash = null;
		this.setProcessing(true);
		this.crudService.loadFromCache(id).then(handCash => {
			if(!this.processObjectAndValidationResult(handCash,true)){
				this.setProcessing(false);
				return;
			}
			this.selectedHandCash = handCash;
			this.inPreview = true;
			this.setSelectedHandCashData();
		});
	}
	
	private setSelectedHandCashData(){
		setTimeout(() => {
			this.setProcessing(false);
			var elem: any = document.getElementById('selectedHandCashReportContainer');
			elem.innerHTML = this.selectedHandCash.a3_reportdata;
		},1000);
	}
	
	backFromPreview(){
		this.inPreview = false;
		this.selectedHandCash = null;
	}
	
	private calculateReport(){
		var varCosts: any = this.calculateAllProductCost();
		var fixedCosts: any = this.calculateFixedCosts();
		var sellCash: any = this.calculateAllProductSellCash();
		var finalResult: any = (sellCash - varCosts - fixedCosts);
		finalResult = ('' + this.mathService.formatNumber(finalResult,2,'.')).replace('.',',');
		varCosts = ('' + this.mathService.formatNumber(varCosts,2,'.')).replace('.',',');
		fixedCosts = ('' + this.mathService.formatNumber(fixedCosts,2,'.')).replace('.',',');
		sellCash = ('' + this.mathService.formatNumber(sellCash,2,'.')).replace('.',',');
		var fRight = '<div class="field" style="float: right !important; ';
		fRight += ' text-align: right !important; padding-right: .5em;">';
		var html = '<div>';
		html += '<div><div class="field"><strong>Total Custos Variáveis</strong>:</div>';
		html += fRight;
		html += varCosts;
		html += '</div><div class="clear"></div></div>';
		html += '<div><div class="field"><strong>Total Custos Fixos</strong>:</div>';
		html += fRight;
		html += fixedCosts;
		html += '</div><div class="clear"></div></div>';
		html += '<div><div class="field"><strong>Total de Vendas</strong>:</div>';
		html += fRight;
		html += sellCash;
		html += '</div><div class="clear"></div></div>';
		html += '<div><div class="field"><strong>Resultado Financeiro Final</strong>:</div>';
		html += fRight;
		html += finalResult;
		html += '</div><div class="clear"></div></div>';
		html += '</div>';
		return html;
	}
	
	private setProductsSupplies(){
		var size = this.products.length;
		var size2 = this.supplyProducts.length;
		for(var i = 0; i < size; i++){
			var supplies = [];
			var productCost = 0; 
			for(var j = 0; j < size2; j++){
				if(this.supplyProducts[j].a3_productid == this.products[i].id){
					var supply = this.getFromArrayById(this.supplies,this.supplyProducts[j].a1_supplyid,null);
					var supplyy = {
						qtde: this.supplyProducts[j].a4_amount,
						value: supply.a2_value,
						total: (this.supplyProducts[j].a4_amount * supply.a2_value)
					};
					productCost += (this.supplyProducts[j].a4_amount * supply.a2_value);
					supplies = [...supplies,supplyy];
				}
			}
			this.products[i].supplies = supplies;
			this.products[i].productCost = productCost;
		}
	}
	
	private calculateAllProductSellCash(){
		var sellCash = 0;
		var size = this.products.length;
		for(var i = 0; i < size; i++){
			var id = this.products[i].id;
			var elem: any = document.getElementById('qtde_' + id);
			var elem2: any = document.getElementById('price_' + id);
			var qtde = parseInt('0' + elem.value);
			var unitValue = parseFloat(('0' + elem2.value).replace(',','.'));
			sellCash += (qtde * unitValue);
		}
		return sellCash;
	}
	
	private calculateAllProductCost(){
		var cost = 0;
		var size = this.products.length;
		for(var i = 0; i < size; i++){
			var id = this.products[i].id;
			var elem: any = document.getElementById('qtde_' + id);
			var qtde = parseInt('0' + elem.value);
			cost += this.calculateProductCost(id,qtde);
		}
		return cost;
	}
	
	private calculateProductCost(id,qtde){
		var cost = 0;
		var size = this.supplyProducts.length;
		for(var i = 0; i < size; i++){
			if(this.supplyProducts[i].a3_productid == id){
				var supply = this.getFromArrayById(this.supplies,this.supplyProducts[i].a1_supplyid,null);
				cost += (qtde * this.supplyProducts[i].a4_amount * supply.a2_value);
			}
		}
		return cost;
	}
	
	private calculateFixedCosts(){
		var cost = 0;
		var size = this.fixedCosts.length;
		for(var i = 0; i < size; i++){
			cost += parseFloat(this.fixedCosts[i].a2_value);
		}
		return cost;
	}
	
}












