import { Component, EventEmitter, Input, Output, OnInit, OnDestroy }     from '@angular/core';

@Component({
  selector: 'site-policies',
  templateUrl: './sitepolicies.component.html'
})
export class SitePoliciesComponent implements OnInit, OnDestroy{

  @Input() render: boolean;
  @Input() dropdown: boolean;
  @Input() className: string;
  @Input() styleClass: string;
  @Input() usePricingPolicy: boolean;
  @Input() useUsetermsPolicy: boolean;
  @Input() usePrivacityPolicy: boolean;
  @Input() useUsecontractPolicy: boolean;
  @Input() mainpageNumber: number;
  
  @Output() pricingPolicyEmitter = new EventEmitter<void>();
  @Output() userTermsEmitter = new EventEmitter<void>();
  @Output() privacityPolicyEmitter = new EventEmitter<void>();
  @Output() useContractEmitter = new EventEmitter<void>();
  
  constructor(){}
  
  ngOnInit(){}
  ngOnDestroy(){
      this.render = null;
      this.dropdown = null;
      this.className = null;
      this.styleClass = null;
      this.usePricingPolicy = null;
      this.useUsetermsPolicy = null;
      this.usePrivacityPolicy = null;
      this.useUsecontractPolicy = null;
      this.mainpageNumber = null;
      this.pricingPolicyEmitter = null;
      this.userTermsEmitter = null;
      this.privacityPolicyEmitter = null;
      this.useContractEmitter = null;
  }
  
  pricingPolicy(){
      this.pricingPolicyEmitter.emit();
  }
  
  userTerms(){
      this.userTermsEmitter.emit();
  }
  
  privacityPolicy(){
      this.privacityPolicyEmitter.emit();
  }
  
  useContract(){
      this.useContractEmitter.emit();
  }
  
}


