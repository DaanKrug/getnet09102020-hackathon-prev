(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{i8vR:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),c=i("3Pt+"),s=i("1kSV"),a=i("tyNb"),o=i("kYp3"),r=i("fXoL"),l=i("zT7k"),b=i("IVaK"),d=i("ZMR0"),u=i("fFX4"),m=i("n/9U"),f=i("fcMv"),h=i("Ca8N"),g=i("/eUb");function p(e,t){if(1&e){const e=r.Ub();r.Tb(0,"button",8),r.fc("click",(function(t){return r.wc(e),r.hc().cancelContinueProcess()})),r.Pb(1,"i",10),r.Gc(2," Cancelar "),r.Sb()}}let S=(()=>{class e{constructor(){this.confirmContinueProcessEmitter=new r.n,this.cancelContinueProcessEmitter=new r.n}ngOnInit(){}ngOnDestroy(){this.titlee=null,this.content=null,this.noCancel=null,this.confirmContinueProcessEmitter=null,this.cancelContinueProcessEmitter=null}confirmContinueProcess(){this.confirmContinueProcessEmitter.emit()}cancelContinueProcess(){this.cancelContinueProcessEmitter.emit()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Ib({type:e,selectors:[["continue-confirmation"]],inputs:{titlee:"titlee",content:"content",noCancel:"noCancel"},outputs:{confirmContinueProcessEmitter:"confirmContinueProcessEmitter",cancelContinueProcessEmitter:"cancelContinueProcessEmitter"},decls:20,vars:3,consts:[[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],[1,"modal-body"],[1,"table","tableInfo"],[1,"noBorderRight",2,"font-size",".9em"],[1,"modal-footer"],[1,"buttons","clear"],["class","btn btn-primary clickable",3,"click",4,"ngIf"],[1,"btn","btn-primary","clickable",3,"click"],[1,"fas","fa-check-double"],[1,"fas","fa-ban"]],template:function(e,t){1&e&&(r.Tb(0,"div",0),r.Tb(1,"h4",1),r.Gc(2," Confirma\xe7\xe3o Necess\xe1ria "),r.Sb(),r.Sb(),r.Tb(3,"div",2),r.Tb(4,"table",3),r.Tb(5,"thead"),r.Tb(6,"tr"),r.Tb(7,"th"),r.Tb(8,"h5"),r.Gc(9),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(10,"tbody"),r.Tb(11,"tr"),r.Tb(12,"td",4),r.Gc(13),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(14,"div",5),r.Tb(15,"div",6),r.Ec(16,p,3,0,"button",7),r.Tb(17,"button",8),r.fc("click",(function(e){return t.confirmContinueProcess()})),r.Pb(18,"i",9),r.Gc(19," Confirmar e Continuar "),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.zb(9),r.Hc(t.titlee),r.zb(4),r.Ic(" ",t.content," "),r.zb(3),r.kc("ngIf",!t.noCancel))},directives:[n.j],encapsulation:2}),e})();const E=function(){return{value:"0",label:"Endere\xe7os",title:"Endere\xe7os"}},T=function(){return{value:"1",label:"Mensagem",title:"Mensagem"}},v=function(e,t){return[e,t]};function j(e,t){if(1&e){const e=r.Ub();r.Tb(0,"section",8),r.Tb(1,"rich-tab-bar",9),r.fc("setTabEmitter",(function(t){return r.wc(e),r.hc().setTab(t)})),r.Sb(),r.Tb(2,"form",10),r.fc("ngSubmit",(function(t){return r.wc(e),r.hc().onObjectFormSubmit()})),r.Tb(3,"div"),r.Tb(4,"div"),r.Pb(5,"rich-input-text",11),r.Sb(),r.Tb(6,"div"),r.Pb(7,"rich-input-text",12),r.Pb(8,"rich-editor",13),r.Sb(),r.Pb(9,"div",14),r.Sb(),r.Tb(10,"form-action",15),r.fc("cancelDataEmitter",(function(t){return r.wc(e),r.hc().cancelData()})),r.Sb(),r.Sb(),r.Sb()}if(2&e){const e=r.hc();r.zb(1),r.kc("objects",r.qc(16,v,r.oc(14,E),r.oc(15,T)))("selectedTab",e.tab),r.zb(1),r.kc("formGroup",e.dataForm),r.zb(2),r.Bb(0==e.tab?"":"none"),r.zb(1),r.kc("formGroup",e.dataForm),r.zb(1),r.Bb(1==e.tab?"":"none"),r.zb(1),r.kc("formGroup",e.dataForm),r.zb(1),r.kc("formGroup",e.dataForm),r.zb(2),r.kc("validationMessages",e.validationMessages)("processValidation",e.processValidation)}}function O(e,t){1&e&&(r.Tb(0,"th",29),r.Gc(1,"A\xe7\xf5es"),r.Sb())}function w(e,t){1&e&&(r.Tb(0,"th",30),r.Gc(1,"A\xe7\xf5es"),r.Sb())}function P(e,t){1&e&&r.Pb(0,"i",42)}function D(e,t){if(1&e){const e=r.Ub();r.Tb(0,"button",43),r.fc("click",(function(t){r.wc(e);const i=r.hc().$implicit,n=r.hc(3),c=r.vc(13);return n.reSend(i.id,c)})),r.Pb(1,"i",44),r.Sb()}if(2&e){const e=r.hc().$implicit,t=r.hc(3);r.kc("disabled",t.logged.id!=e.ownerId||0==e.failTotal||e.successTotal>0||"finished"!=e.status)}}const k=function(){return["admin_master"]},C=function(){return["admin"]};function I(e,t){if(1&e){const e=r.Ub();r.Tb(0,"tr",31),r.Pb(1,"td",32),r.Tb(2,"td",33),r.Ec(3,P,1,0,"i",34),r.Pb(4,"span",35),r.Sb(),r.Pb(5,"td",36),r.Tb(6,"td",37),r.Gc(7),r.Sb(),r.Tb(8,"td",38),r.Tb(9,"div",39),r.Ec(10,D,2,1,"button",40),r.Tb(11,"edit-delete-action",41),r.fc("showObjectEmitter",(function(t){return r.wc(e),r.hc(3).showObject(t)}))("editObjectEmitter",(function(t){return r.wc(e),r.hc(3).editObject(t)}))("deleteObjectEmitter",(function(t){return r.wc(e),r.hc(3).deleteObject(t)}))("unDeleteObjectEmitter",(function(t){return r.wc(e),r.hc(3).unDeleteObject(t)})),r.Sb(),r.Sb(),r.Sb(),r.Sb()}if(2&e){const e=t.$implicit,i=r.hc(3),n=r.vc(9),c=r.vc(11),s=r.vc(7);r.zb(1),r.kc("innerHtml",e.updated_at,r.xc),r.zb(2),r.kc("ngIf","finished"==e.status&&!(null==e.failMessages||""==e.failMessages)),r.zb(1),r.kc("innerHtml",i.getLabelForKey(i.status,e.status),r.xc),r.zb(1),r.kc("innerHtml",e.subject,r.xc),r.zb(2),r.Jc("",e.successTotal,"/",e.failTotal,""),r.zb(3),r.kc("ngIf",!i.auditingExclusions),r.zb(1),r.kc("auditingExclusions",i.auditingExclusions)("object",e)("logged",i.logged)("noAction",!(r.oc(14,k).includes(i.logged.category)||r.oc(15,C).includes(i.logged.category)&&i.permissions.includes("simplemail_write")))("objectDeleteConfirmation",n)("objectUnDeleteConfirmation",c)("objectDetail",s)}}function y(e,t){if(1&e){const e=r.Ub();r.Tb(0,"table",18),r.Tb(1,"thead",19),r.Tb(2,"tr"),r.Tb(3,"th",20),r.Gc(4,"\xdaltimo Re/Envio"),r.Sb(),r.Tb(5,"th",21),r.Gc(6,"Status"),r.Sb(),r.Tb(7,"th",22),r.Gc(8,"Assunto"),r.Sb(),r.Tb(9,"th",23),r.Gc(10,"Suc./Falh."),r.Sb(),r.Ec(11,O,2,0,"th",24),r.Ec(12,w,2,0,"th",25),r.Sb(),r.Sb(),r.Tb(13,"tbody"),r.Ec(14,I,12,16,"tr",26),r.Tb(15,"tr"),r.Tb(16,"td",27),r.Tb(17,"table-navigator",28),r.fc("previousPageEmitter",(function(t){return r.wc(e),r.hc(2).previousPage()}))("setPageEmitter",(function(t){return r.wc(e),r.hc(2).setPage(t)}))("nextPageEmitter",(function(t){return r.wc(e),r.hc(2).nextPage()})),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()}if(2&e){const e=r.hc(2);r.zb(11),r.kc("ngIf",!e.auditingExclusions),r.zb(1),r.kc("ngIf",e.auditingExclusions),r.zb(2),r.kc("ngForOf",e.objects)("ngForTrackBy",e.trackById),r.zb(3),r.kc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("totalPages",e.totalPages)("totalRows",e.totalRows)}}function M(e,t){if(1&e&&(r.Tb(0,"section",16),r.Ec(1,y,18,11,"table",17),r.Sb()),2&e){const e=r.hc();r.zb(1),r.kc("ngIf",e.objects)}}function z(e,t){if(1&e&&(r.Tb(0,"tr"),r.Tb(1,"th",45),r.Gc(2,"Assunto:"),r.Sb(),r.Pb(3,"td",36),r.Sb(),r.Tb(4,"tr"),r.Tb(5,"th",45),r.Gc(6,"Conte\xfado:"),r.Sb(),r.Tb(7,"td",33),r.Pb(8,"div",46),r.Sb(),r.Sb(),r.Tb(9,"tr"),r.Tb(10,"th",45),r.Gc(11,"\xdaltimo Re/Envio:"),r.Sb(),r.Tb(12,"td",33),r.Gc(13),r.Sb(),r.Sb(),r.Tb(14,"tr"),r.Tb(15,"th",45),r.Gc(16,"Status:"),r.Sb(),r.Tb(17,"td",33),r.Gc(18),r.Sb(),r.Sb(),r.Tb(19,"tr"),r.Tb(20,"th",45),r.Gc(21,"Alertas:"),r.Sb(),r.Tb(22,"td",33),r.Pb(23,"div",47),r.Sb(),r.Sb()),2&e){const e=r.hc();r.zb(3),r.kc("innerHtml",e.selectedObject.subject,r.xc),r.zb(10),r.Hc(e.selectedObject.updated_at),r.zb(5),r.Hc(e.getLabelForKey(e.status,e.selectedObject.status))}}function x(e,t){}function F(e,t){if(1&e&&(r.Tb(0,"table",56),r.Tb(1,"tbody"),r.Ec(2,x,0,0,"ng-template",57),r.Sb(),r.Sb()),2&e){const e=r.hc(2),t=r.vc(5);r.zb(2),r.kc("ngTemplateOutlet",t)("selectedObject",e.selectedObject)}}function G(e,t){if(1&e&&(r.Tb(0,"div",58),r.Gc(1),r.Sb()),2&e){const e=r.hc(2);r.zb(1),r.Ic(" ",e.selectedObject.tosAddress," ")}}function A(e,t){if(1&e&&(r.Tb(0,"div",58),r.Gc(1),r.Sb()),2&e){const e=r.hc(2);r.zb(1),r.Ic(" ",e.selectedObject.successAddress," ")}}function R(e,t){if(1&e&&(r.Tb(0,"div",58),r.Gc(1),r.Sb()),2&e){const e=r.hc(2);r.zb(1),r.Ic(" ",e.selectedObject.failAddress," ")}}const V=function(){return{value:"0",label:"Dados Gerais",title:"Dados Gerais"}},q=function(){return{value:"1",label:"Destinat\xe1rios",title:"Destinat\xe1rios do E-mail"}},L=function(){return{value:"2",label:"Sucessos",title:"Destinat\xe1rios do E-mail Envio com Sucesso"}},N=function(){return{value:"3",label:"Falhas",title:"Destinat\xe1rios do E-mail Envio sem Sucesso"}},U=function(e,t,i,n){return[e,t,i,n]};function _(e,t){if(1&e){const e=r.Ub();r.Tb(0,"div",48),r.Tb(1,"h4",49),r.Gc(2,"Detalhes do E-mail"),r.Sb(),r.Tb(3,"button",50),r.fc("click",(function(t){return r.wc(e),r.hc().showObject(null,null)})),r.Tb(4,"span",51),r.Gc(5,"\xd7"),r.Sb(),r.Sb(),r.Sb(),r.Tb(6,"div",52),r.Tb(7,"rich-tab-bar",9),r.fc("setTabEmitter",(function(t){return r.wc(e),r.hc().setModalTab(t)})),r.Sb(),r.Tb(8,"div",53),r.Ec(9,F,3,2,"table",54),r.Ec(10,G,2,1,"div",55),r.Ec(11,A,2,1,"div",55),r.Ec(12,R,2,1,"div",55),r.Sb(),r.Sb()}if(2&e){const e=r.hc();r.zb(7),r.kc("objects",r.sc(10,U,r.oc(6,V),r.oc(7,q),r.oc(8,L),r.oc(9,N)))("selectedTab",e.modalTab),r.zb(2),r.kc("ngIf",0==e.modalTab),r.zb(1),r.kc("ngIf",1==e.modalTab),r.zb(1),r.kc("ngIf",2==e.modalTab),r.zb(1),r.kc("ngIf",3==e.modalTab)}}function H(e,t){if(1&e){const e=r.Ub();r.Tb(0,"delete-confirmation",59),r.fc("confirmDeleteObjectEmitter",(function(t){return r.wc(e),r.hc().confirmDeleteObject(t)}))("cancelDataEmitter",(function(t){return r.wc(e),r.hc().cancelData()})),r.Sb()}if(2&e){const e=r.hc(),t=r.vc(5);r.kc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function B(e,t){if(1&e){const e=r.Ub();r.Tb(0,"delete-confirmation",60),r.fc("confirmDeleteObjectEmitter",(function(t){return r.wc(e),r.hc().confirmUnDeleteObject(t)}))("cancelDataEmitter",(function(t){return r.wc(e),r.hc().cancelData()})),r.Sb()}if(2&e){const e=r.hc(),t=r.vc(5);r.kc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function K(e,t){if(1&e){const e=r.Ub();r.Tb(0,"continue-confirmation",61),r.fc("confirmContinueProcessEmitter",(function(t){return r.wc(e),r.hc().confirmContinueProcessMessage()}))("cancelContinueProcessEmitter",(function(t){return r.wc(e),r.hc().cancelContinueProcessMessage()})),r.Sb()}}const J=function(){return["admin_master","admin","system_auditor"]};let X=(()=>{class e extends o.a{ngOnInit(){this.setInitializationServices(["simplemail"]),this.crudService=this.simpleMailService,this.sucessErrorMessages={200:"E-mail adicionado \xe0 fila de envio com sucesso.<br/>Ser\xe1 enviado assim que poss\xedvel.",201:"E-mail alterado com sucesso.",204:"E-mail exclu\xeddo com sucesso.",207:"E-mail restaurado com sucesso.",208:"E-mail exclu\xeddo [PERMANENTE] com sucesso."},this.listTitle="E-mails",this.addTitle="Adicionar E-mail para Envio",this.editTitle="Editar E-mail",this.dataForm=new c.f({subject:new c.c("",[c.s.required]),content:new c.c("",[c.s.required]),tosAddress:new c.c("",[c.s.required])}),this.status=[{value:"awaiting",label:"Aguardando Processamento"},{value:"reSend",label:"Solicitado Re-envio"},{value:"startProcessing",label:"Processando Envio(s)"},{value:"processing",label:"Processando Envio(s)"},{value:"finished",label:"Envio(s) Finalizado(s)"}],super.ngOnInit()}afterNgOnInit(){this.parameterName="subject/tosAddress"}ngOnDestroy(){this.status=null,super.ngOnDestroy()}showObject(e,t){super.showObject(e,t),this.setSelectedObjectValues()}deleteObject(e,t){super.deleteObject(e,t),this.setSelectedObjectValues()}unDeleteObject(e,t){super.unDeleteObject(e,t),this.setSelectedObjectValues()}setSelectedObjectValues(){var e=document.getElementById("contentText");if(null!=e){if(!this.emptyObject(this.selectedObject)){var t=document.getElementById("failMessagesText");this.emptyString(this.selectedObject.content)||(e.innerHTML=this.selectedObject.content.trim()),this.emptyString(this.selectedObject.failMessages)||(t.innerHTML=this.selectedObject.failMessages.trim())}}else setTimeout(()=>{this.setSelectedObjectValues()},100)}setObject(e){super.setObject(e),this.dataForm.setValue({subject:e.subject,content:e.content,tosAddress:e.tosAddress})}prepareData(e){return e.alreadyPrepared?e:(e.updated_at=this.emptyString(e.updated_at)?"----/----/-------- ----:----:----":this.dateService.dateBrWhitTime(this.dateService.dateSqltoDate(e.updated_at)),e.alreadyPrepared=!0,e)}prepareToSaveUpdate(e){return e.content=this.stringService.unentityLtGt(e.content),e}makeSelectSearchedItemDestaked(e,t){return e.subject=this.makeDestak(e.subject,t),e.tosAddress=this.makeDestak(e.tosAddress,t),e}validateFormFields(){return this.errorRequired("tosAddress")&&this.addValidationMessage("Destinat\xe1rio(s) \xe9 requerido!"),this.errorRequired("subject")&&this.addValidationMessage("Assunto \xe9 requerido!"),this.errorRequired("content")&&this.addValidationMessage("Conte\xfado Mensagem \xe9 requerido!"),!this.inValidationMsgs()}preValidateToDelete(e){return e.successTotal>0?(this.addValidationStatusMessage(403,"E-mail j\xe1 foi recebido por um dos destinat\xe1rios, n\xe3o \xe9 poss\xedvel excluir."),!1):!!["awaiting","finished","reSend"].includes(e.status)||(this.addValidationStatusMessage(403,"E-mail est\xe1 em processamento, n\xe3o \xe9 poss\xedvel excluir."),!1)}reSend(e,t){this.validationMessages=null,this.simpleMailService.loadFromCache(e).then(e=>{this.processObjectAndValidationResult(e,!0)&&("finished"==e.status?(this.selectedObject=e,this.continueProcessOpenMessage(t)):this.addValidationMessage("E-mail ainda em processamento. Aguarde a finaliza\xe7\xe3o para tentar o re-envio."))})}cancelProcess(){this.cancelReSend()}continueProcess(){this.confirmReSend()}cancelReSend(){this.formModal.close(),this.canceling=!1,this.setSelectedObject(null)}confirmReSend(){if(null!=this.formModal&&this.formModal.close(),this.canceling)return this.canceling=!1,void this.setSelectedObject(null);var e=this.selectedObject.id;this.setSelectedObject(null),this.setProcessing(!0),this.simpleMailService.load(e).then(t=>{if(this.processObjectAndValidationResult(t,!0)){var i=(t=this.prepareData(t)).status;t.status="reSend",t.ownerId=parseInt("0"+this.storageService.localStorageGetItem("_ownerId_"+this.getAppId())),t._token=this.storageService.localStorageGetItem("_token_"+this.getAppId()),this.simpleMailService.update(e,t).then(e=>{this.setProcessing(!1),this.processObjectAndValidationResult(e,!0)?(t.failTotal=0,t.failAddress=""):t.status=i})}else this.setProcessing(!1)})}}return e.\u0275fac=function(t){return $(t||e)},e.\u0275cmp=r.Ib({type:e,selectors:[["simplemail-root"]],features:[r.wb],decls:14,vars:11,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["mailResend",""],["aria-label","Formul\xe1rio de envio de email pela aplica\xe7\xe3o",1,"dataForm"],[3,"objects","selectedTab","setTabEmitter"],[3,"formGroup","ngSubmit"],["rowss","7","forMail","true","label","Destinat\xe1rio(s) (*) - Individuais. Separe os, com v\xedrgula (,)","titlee","Destinat\xe1rio(s) Individuais. Separe os, com v\xedrgula (,)","formControlName","tosAddress","widthPerc","100","ngDefaultControl","",3,"formGroup"],["label","Assunto (*)","titlee","Assunto","maxchars","200","formControlName","subject","widthPerc","100","ngDefaultControl","",3,"formGroup"],["formControlName","content","label","Conte\xfado Mensagem (*)","titlee","Conte\xfado Mensagem","ngDefaultControl","",3,"formGroup"],[1,"clear"],[3,"validationMessages","processValidation","cancelDataEmitter"],["aria-label","lista dos emails enviados e para envio"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","8.8em"],["scope","col",2,"width","6.5em"],["scope","col",2,"width","auto"],["scope","col","title","Sucessos/Falhas","aria-label","Sucessos/Falhas",2,"width","6em"],["scope","col","style","width: 9em;",4,"ngIf"],["scope","col","style","width: 5em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","5",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","totalPages","totalRows","previousPageEmitter","setPageEmitter","nextPageEmitter"],["scope","col",2,"width","9em"],["scope","col",2,"width","5em"],["mdbTableCol",""],[1,"number",3,"innerHtml"],[1,"text"],["class","fas fa-exclamation-circle","style","color: #d27806; margin-right: .3em;","placement","top","ngbTooltip","Envio finalizado com Mensagens de alerta: Clique no \xedcone [i] Detalhes",4,"ngIf"],[3,"innerHtml"],[1,"text",3,"innerHtml"],[1,"number"],[1,"actions"],[1,"buttons"],["class","btn btn-primary clickable","type","button","placement","left","ngbTooltip","Re-enviar para os falhados","aria-label","Re-enviar para os falhados",3,"disabled","click",4,"ngIf"],["noEdit","true",3,"auditingExclusions","object","logged","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","objectDetail","showObjectEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["placement","top","ngbTooltip","Envio finalizado com Mensagens de alerta: Clique no \xedcone [i] Detalhes",1,"fas","fa-exclamation-circle",2,"color","#d27806","margin-right",".3em"],["type","button","placement","left","ngbTooltip","Re-enviar para os falhados","aria-label","Re-enviar para os falhados",1,"btn","btn-primary","clickable",3,"disabled","click"],[1,"fas","fa-paper-plane"],["scope","row",1,"text"],["id","contentText"],["id","failMessagesText"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[2,"height","22em","overflow-x","hidden","overflow-y","auto"],["class","table tableInfo",4,"ngIf"],["style","word-wrap: break-word; font-size: .85em;",4,"ngIf"],[1,"table","tableInfo"],[3,"ngTemplateOutlet","selectedObject"],[2,"word-wrap","break-word","font-size",".85em"],["label","E-mail",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","E-mail","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["titlee","Continuar Com Processo de RE-ENVIO do E-mail?","content","Ao continuar, o processo n\xe3o poder\xe1 ser interrompido.\n\t                                Ser\xe1 efetuado o re-envio apenas para os destinat\xe1rios\n\t  \t\t\t\t\t            que ainda n\xe3o o receberam.",3,"confirmContinueProcessEmitter","cancelContinueProcessEmitter"]],template:function(e,t){if(1&e&&(r.Tb(0,"form-toolbar",0),r.fc("onSearchFormSubmitEmitter",(function(e){return t.onSearchFormSubmit()}))("listDataEmitter",(function(e){return t.listData()}))("listDataNoCacheEmitter",(function(e){return t.listDataNoCache()}))("auditListEmitter",(function(e){return t.auditList()}))("normalListEmitter",(function(e){return t.normalList()}))("addObjectEmitter",(function(e){return t.addObject()})),r.Sb(),r.Ec(1,j,11,19,"ng-template",1),r.Ec(2,M,2,1,"ng-template",null,2,r.Fc),r.Ec(4,z,24,3,"ng-template",null,3,r.Fc),r.Ec(6,_,13,15,"ng-template",null,4,r.Fc),r.Ec(8,H,1,3,"ng-template",null,5,r.Fc),r.Ec(10,B,1,3,"ng-template",null,6,r.Fc),r.Ec(12,K,1,0,"ng-template",null,7,r.Fc)),2&e){const e=r.vc(3);r.kc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",r.oc(8,J).includes(t.logged.category))("disabledAddNew",!(r.oc(9,k).includes(t.logged.category)||r.oc(10,C).includes(t.logged.category)&&t.permissions.includes("simplemail_write"))),r.zb(1),r.kc("ngIf",t.editing)("ngIfElse",e)}},directives:[l.a,n.j,b.a,c.u,c.n,c.g,d.a,c.m,c.e,c.b,u.a,m.a,n.i,f.a,h.a,s.g,n.l,g.a,S],encapsulation:2}),e})();const $=r.Vb(X),W=[{path:"",component:X}];let Y=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[a.c.forChild(W)],a.c]}),e})();var Z=i("kS8M");i.d(t,"SimpleMailModule",(function(){return Q}));let Q=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[n.b,c.h,c.q,s.f,Y,Z.a]]}),e})()}}]);