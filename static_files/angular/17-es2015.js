(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Bc1F:function(e,t,i){"use strict";i.r(t);var s=i("ofXK"),n=i("3Pt+"),o=i("1kSV"),a=i("tyNb"),c=i("kYp3"),r=i("fXoL"),l=i("zT7k"),d=i("IVaK"),u=i("ZMR0"),m=i("ZEYb"),b=i("n/9U"),f=i("fcMv"),g=i("Ca8N"),h=i("/eUb");function p(e,t){1&e&&(r.Sb(0,"div"),r.Sb(1,"div",19),r.Ob(2,"i",20),r.Sb(3,"span"),r.Dc(4,'Selecione uma categoria para a pessoa/usu\xe1rio, na aba "Dados Gerais".'),r.Rb(),r.Rb(),r.Ob(5,"div",17),r.Rb())}function v(e,t){1&e&&(r.Sb(0,"div"),r.Sb(1,"div",22),r.Ob(2,"i",20),r.Sb(3,"span"),r.Dc(4,"Nenhuma permiss\xe3o dispon\xedvel, para a categoria selecionada."),r.Rb(),r.Rb(),r.Ob(5,"div",17),r.Rb())}function j(e,t){if(1&e){const e=r.Tb();r.Sb(0,"input",30),r.ec("click",(function(t){r.uc(e);const i=r.gc().$implicit;return r.gc(3).uncheckPermission(i.value)})),r.Rb()}if(2&e){const e=r.gc().$implicit,t=r.gc(3);r.lc("id","chk_",e.value,""),r.jc("disabled",null!=e.dependOf&&!t.selectedPermissions.includes(e.dependOf))}}function P(e,t){if(1&e){const e=r.Tb();r.Sb(0,"input",31),r.ec("click",(function(t){r.uc(e);const i=r.gc().$implicit;return r.gc(3).checkPermission(i.value)})),r.Rb()}if(2&e){const e=r.gc().$implicit,t=r.gc(3);r.lc("id","chk_",e.value,""),r.jc("disabled",null!=e.dependOf&&!t.selectedPermissions.includes(e.dependOf))}}function w(e,t){if(1&e){const e=r.Tb();r.Sb(0,"input",30),r.ec("click",(function(t){r.uc(e);const i=r.gc().$implicit;return r.gc(3).uncheckPermission(i.value+"_write")})),r.Rb()}if(2&e){const e=r.gc().$implicit,t=r.gc(3);r.lc("id","chk_",e.value+"_write",""),r.jc("disabled",null!=e.dependOf&&!t.selectedPermissions.includes(e.dependOf)||!t.selectedPermissions.includes(e.value))}}function k(e,t){if(1&e){const e=r.Tb();r.Sb(0,"input",31),r.ec("click",(function(t){r.uc(e);const i=r.gc().$implicit;return r.gc(3).checkPermission(i.value+"_write")})),r.Rb()}if(2&e){const e=r.gc().$implicit,t=r.gc(3);r.lc("id","chk_",e.value+"_write",""),r.jc("disabled",null!=e.dependOf&&!t.selectedPermissions.includes(e.dependOf)||!t.selectedPermissions.includes(e.value))}}function S(e,t){if(1&e&&(r.Sb(0,"div",23),r.Sb(1,"div",24),r.Bc(2,j,1,2,"input",25),r.Bc(3,P,1,2,"input",26),r.Rb(),r.Sb(4,"div",27),r.Sb(5,"label",28),r.Dc(6),r.Rb(),r.Rb(),r.Ob(7,"div",17),r.Sb(8,"div",29),r.Bc(9,w,1,2,"input",25),r.Bc(10,k,1,2,"input",26),r.Rb(),r.Sb(11,"div",27),r.Sb(12,"label",28),r.Dc(13,"+ Write"),r.Rb(),r.Rb(),r.Ob(14,"div",17),r.Rb()),2&e){const e=t.$implicit,i=r.gc(3);r.Cb("field ",e.breakBefore?"clear":"",""),r.zb(2),r.jc("ngIf",i.selectedPermissions.includes(e.value)),r.zb(1),r.jc("ngIf",!i.selectedPermissions.includes(e.value)),r.zb(2),r.Cb("clickable ",null==e.dependOf||i.selectedPermissions.includes(e.dependOf)?"":"disabled",""),r.lc("for","chk_",e.value,""),r.zb(1),r.Fc("",e.label," (Read)"),r.zb(3),r.jc("ngIf",i.selectedPermissions.includes(e.value+"_write")),r.zb(1),r.jc("ngIf",!i.selectedPermissions.includes(e.value+"_write")),r.zb(2),r.Cb("clickable ",null!=e.dependOf&&!i.selectedPermissions.includes(e.dependOf)||!i.selectedPermissions.includes(e.value)?"disabled":"",""),r.lc("for","chk_",e.value+"_write","")}}function E(e,t){if(1&e&&(r.Sb(0,"div"),r.Bc(1,v,6,0,"div",16),r.Bc(2,S,15,16,"div",21),r.Ob(3,"div",17),r.Rb()),2&e){const e=r.gc(2);r.zb(1),r.jc("ngIf",0==e.disponiblePermissions.length),r.zb(1),r.jc("ngForOf",e.disponiblePermissions)}}const C=function(){return{value:"0",label:"Dados Gerais (*)",title:"Dados Gerais"}},O=function(){return{value:"1",label:"Permiss\xf5es de Acesso",title:"Permiss\xf5es de Acesso"}},y=function(e,t){return[e,t]};function R(e,t){if(1&e){const e=r.Tb();r.Sb(0,"section",7),r.Sb(1,"rich-tab-bar",8),r.ec("setTabEmitter",(function(t){return r.uc(e),r.gc().setTab(t)})),r.Rb(),r.Sb(2,"form",9),r.ec("ngSubmit",(function(t){return r.uc(e),r.gc().onObjectFormSubmit()})),r.Sb(3,"div"),r.Ob(4,"rich-input-text",10),r.Ob(5,"rich-input-text",11),r.Sb(6,"rich-input-text",12),r.ec("valueChangedEmitter",(function(t){return r.uc(e),r.gc().validatePasswordForce(t)})),r.Rb(),r.Ob(7,"rich-input-select",13),r.Rb(),r.Sb(8,"div"),r.Sb(9,"div",14),r.Sb(10,"div",15),r.Bc(11,p,6,0,"div",16),r.Bc(12,E,4,2,"div",16),r.Rb(),r.Ob(13,"div",17),r.Rb(),r.Ob(14,"div",17),r.Rb(),r.Sb(15,"form-action",18),r.ec("cancelDataEmitter",(function(t){return r.uc(e),r.gc().cancelData()})),r.Rb(),r.Rb(),r.Rb()}if(2&e){const e=r.gc();r.zb(1),r.jc("objects",r.oc(21,y,r.mc(19,C),r.mc(20,O)))("selectedTab",e.tab),r.zb(1),r.jc("formGroup",e.dataForm),r.zb(1),r.Bb(0==e.tab?"":"none"),r.zb(1),r.jc("formGroup",e.dataForm),r.zb(1),r.jc("formGroup",e.dataForm),r.zb(1),r.jc("formGroup",e.dataForm),r.zb(1),r.jc("objects",e.categories),r.zb(1),r.Bb(1==e.tab?"":"none"),r.zb(3),r.jc("ngIf",null==e.disponiblePermissions),r.zb(1),r.jc("ngIf",null!=e.disponiblePermissions),r.zb(3),r.jc("validationMessages",e.validationMessages)("processValidation",e.processValidation)("passwordValidationMessage",e.passwordValidationMessage)("additionalMsgsInfo",e.formInfo)}}function x(e,t){1&e&&(r.Sb(0,"th",43),r.Dc(1,"A\xe7\xf5es"),r.Rb())}function D(e,t){1&e&&(r.Sb(0,"th",44),r.Dc(1,"A\xe7\xf5es"),r.Rb())}function I(e,t){if(1&e){const e=r.Tb();r.Sb(0,"button",52),r.ec("click",(function(t){r.uc(e);const i=r.gc().$implicit;return r.gc(3).toUserPaymentTickets(i.id)})),r.Ob(1,"i",53),r.Rb()}if(2&e){const e=r.gc().$implicit;r.jc("disabled","admin_master"==e.category)}}const N=function(){return["admin_master"]},z=function(){return["admin"]};function B(e,t){if(1&e){const e=r.Tb();r.Sb(0,"tr",45),r.Sb(1,"td",46),r.Dc(2),r.Rb(),r.Ob(3,"td",47),r.Sb(4,"td",48),r.Sb(5,"div",49),r.Bc(6,I,2,1,"button",50),r.Sb(7,"edit-delete-action",51),r.ec("showObjectEmitter",(function(t){return r.uc(e),r.gc(3).showObject(t)}))("lockEmitter",(function(t){return r.uc(e),r.gc(3).lock(t)}))("unlockEmitter",(function(t){return r.uc(e),r.gc(3).unlock(t)}))("editObjectEmitter",(function(t){return r.uc(e),r.gc(3).editObject(t)}))("deleteObjectEmitter",(function(t){return r.uc(e),r.gc(3).deleteObject(t)}))("unDeleteObjectEmitter",(function(t){return r.uc(e),r.gc(3).unDeleteObject(t)})),r.Rb(),r.Rb(),r.Rb(),r.Rb()}if(2&e){const e=t.$implicit,i=r.gc(3),s=r.tc(9),n=r.tc(11),o=r.tc(7);r.zb(2),r.Gc("",e.name," <",e.email,">"),r.zb(1),r.jc("innerHtml",i.getLabelForKey(i.categories,e.category),r.vc),r.zb(3),r.jc("ngIf",!i.auditingExclusions),r.zb(1),r.jc("auditingExclusions",i.auditingExclusions)("object",e)("logged",i.logged)("noAction",!(r.mc(12,N).includes(i.logged.category)||r.mc(13,z).includes(i.logged.category)&&i.permissions.includes("user_write")))("objectDeleteConfirmation",s)("objectUnDeleteConfirmation",n)("objectDetail",o)("lockUnLock",!0)}}function A(e,t){if(1&e){const e=r.Tb();r.Sb(0,"table",34),r.Sb(1,"thead",35),r.Sb(2,"tr"),r.Sb(3,"th",36),r.Dc(4,"Nome + E-mail"),r.Rb(),r.Sb(5,"th",37),r.Dc(6,"Cat./Perm."),r.Rb(),r.Bc(7,x,2,0,"th",38),r.Bc(8,D,2,0,"th",39),r.Rb(),r.Rb(),r.Sb(9,"tbody"),r.Bc(10,B,8,14,"tr",40),r.Sb(11,"tr"),r.Sb(12,"td",41),r.Sb(13,"table-navigator",42),r.ec("previousPageEmitter",(function(t){return r.uc(e),r.gc(2).previousPage()}))("setPageEmitter",(function(t){return r.uc(e),r.gc(2).setPage(t)}))("nextPageEmitter",(function(t){return r.uc(e),r.gc(2).nextPage()})),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()}if(2&e){const e=r.gc(2);r.zb(7),r.jc("ngIf",!e.auditingExclusions),r.zb(1),r.jc("ngIf",e.auditingExclusions),r.zb(2),r.jc("ngForOf",e.objects)("ngForTrackBy",e.trackById),r.zb(3),r.jc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("totalPages",e.totalPages)("totalRows",e.totalRows)}}function T(e,t){if(1&e&&(r.Sb(0,"section",32),r.Bc(1,A,14,11,"table",33),r.Rb()),2&e){const e=r.gc();r.zb(1),r.jc("ngIf",e.objects)}}function V(e,t){if(1&e&&(r.Sb(0,"tr"),r.Sb(1,"th",54),r.Dc(2,"Nome:"),r.Rb(),r.Sb(3,"td",55),r.Dc(4),r.Rb(),r.Rb(),r.Sb(5,"tr"),r.Sb(6,"th",56),r.Dc(7,"E-mail:"),r.Rb(),r.Sb(8,"td",55),r.Dc(9),r.Rb(),r.Rb(),r.Sb(10,"tr"),r.Sb(11,"th",56),r.Dc(12,"Categoria/Permiss\xe3o:"),r.Rb(),r.Sb(13,"td",55),r.Dc(14),r.Rb(),r.Rb(),r.Sb(15,"tr"),r.Sb(16,"th",56),r.Dc(17,"Ativa:"),r.Rb(),r.Sb(18,"td",55),r.Dc(19),r.Rb(),r.Rb()),2&e){const e=r.gc();r.zb(4),r.Ec(e.selectedObject.name),r.zb(5),r.Ec(e.selectedObject.email),r.zb(5),r.Ec(e.getLabelForKey(e.categories,e.selectedObject.category)),r.zb(5),r.Ec(e.selectedObject.active?"Sim":"N\xe3o")}}function M(e,t){if(1&e){const e=r.Tb();r.Sb(0,"delete-confirmation",57),r.ec("cancelDataEmitter",(function(t){return r.uc(e),r.gc().showObject()})),r.Rb()}if(2&e){const e=r.gc(),t=r.tc(5);r.jc("selectedObject",e.selectedObject)("templateOutlet",t)}}function F(e,t){if(1&e){const e=r.Tb();r.Sb(0,"delete-confirmation",58),r.ec("confirmDeleteObjectEmitter",(function(t){return r.uc(e),r.gc().confirmDeleteObject(t)}))("cancelDataEmitter",(function(t){return r.uc(e),r.gc().cancelData()})),r.Rb()}if(2&e){const e=r.gc(),t=r.tc(5);r.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function U(e,t){if(1&e){const e=r.Tb();r.Sb(0,"delete-confirmation",59),r.ec("confirmDeleteObjectEmitter",(function(t){return r.uc(e),r.gc().confirmUnDeleteObject(t)}))("cancelDataEmitter",(function(t){return r.uc(e),r.gc().cancelData()})),r.Rb()}if(2&e){const e=r.gc(),t=r.tc(5);r.jc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}const _=function(){return["admin_master","admin","system_auditor"]};let L=(()=>{class e extends c.a{ngOnInit(){this.setInitializationServices(["user"]),this.crudService=this.userService,this.sucessErrorMessages={200:"Pessoa/Usu\xe1rio adicionada com sucesso.",201:"Pessoa/Usu\xe1rio alterada com sucesso.",2010:"Pessoa/Usu\xe1rio inativada com sucesso.",2011:"Pessoa/Usu\xe1rio ativada com sucesso.",204:"Pessoa/Usu\xe1rio exclu\xedda com sucesso.",207:"Pessoa/Usu\xe1rio restaurada com sucesso.",208:"Pessoa/Usu\xe1rio exclu\xedda [PERMANENTE] com sucesso."},this.listTitle="Pessoas/Usu\xe1rios",this.addTitle="Adicionar Pessoa/Usu\xe1rio",this.editTitle="Editar Pessoa/Usu\xe1rio",this.formInfo=["** Requerido para criar usu\xe1rio. Em branco mant\xe9m o valor atual."],this.dataForm=new n.f({name:new n.c("",[n.r.required]),email:new n.c("",[n.r.required,n.r.email]),password:new n.c("",[]),category:new n.c("",[n.r.required])}),this.categories=[{value:"enroll",label:"Integrante/Participante/Membro"},{value:"admin",label:"Administrador"},{value:"system_auditor",label:"Auditor do Sistema"}],this.permissionsAuditor=[{value:"mailerconfig",label:"Configura\xe7\xe3o Envio E-mail",dependOf:null,breakBefore:!1},{value:"file",label:"Arquivo",dependOf:null,breakBefore:!1},{value:"image",label:"Imagem",dependOf:null,breakBefore:!1},{value:"simplemail",label:"Envio E-mail",dependOf:null,breakBefore:!1},{value:"user",label:"Pessoas/Usu\xe1rios",dependOf:null,breakBefore:!0}],this.permissionsAdmin=this.permissionsAuditor,this.permissionsExternal=[{value:"simplemail",label:"Envio E-mail",dependOf:null,breakBefore:!1}],this.permissionsEnroll=[],super.ngOnInit()}afterNgOnInit(){this.parameterName="name/email"}ngOnDestroy(){this.passwordValidationMessage=null,this.categories=null,this.disponiblePermissions=null,this.permissionsAuditor=null,this.permissionsAdmin=null,this.permissionsEnroll=null,this.permissionsExternal=null,this.selectedPermissions=null,super.ngOnDestroy()}setTab(e){super.setTab(e),1==e&&this.adjustPermissions(this.dataForm.value.category)}setObject(e){super.setObject(e),this.dataForm.setValue({name:e.name,email:e.email,password:null,category:e.category}),this.adjustPermissions(e.category)}adjustPermissions(e){if(this.selectedPermissions=[],this.disponiblePermissions=null,!this.emptyString(e)&&(this.disponiblePermissions=this.permissionsEnroll,"system_auditor"==e&&(this.disponiblePermissions=this.permissionsAuditor),"admin"==e&&(this.disponiblePermissions=this.permissionsAdmin),"external"==e&&(this.disponiblePermissions=this.permissionsExternal),null!=this.selectedObject.id&&this.selectedObject.id>0))for(var t=this.selectedObject.permissions.split(","),i=t.length,s=this.disponiblePermissions.length,n=0;n<i;n++)for(var o=0;o<s;o++)if(t[n]==this.disponiblePermissions[o].value||t[n]==this.disponiblePermissions[o].value+"_write"){this.selectedPermissions=[...this.selectedPermissions,t[n]];break}}checkPermission(e){this.selectedPermissions.includes(e)||this.selectedPermissions.unshift(e)}uncheckPermission(e){this.selectedPermissions=this.removeFromArray(this.selectedPermissions,e),"blogarticle"==e&&this.uncheckPermission("blogarticlecomment"),"pagemenu"==e&&this.uncheckPermission("pagemenuitem"),"pagemenuitem"==e&&this.uncheckPermission("pagemenuitemfile"),"user"==e&&this.uncheckPermission("userpaymentticket"),-1==e.indexOf("_write")&&this.uncheckPermission(e+"_write")}makeSelectSearchedItemDestaked(e,t){return e.name=this.makeDestak(e.name,t),e.email=this.makeDestak(e.email,t),e}prepareToSaveUpdate(e){return e.permissions=this.selectedPermissions.join(","),e}validateFormFields(){return this.errorRequired("name")&&this.addValidationMessage("Nome \xe9 requerido!"),this.errorRequired("category")&&this.addValidationMessage("Categoria/Permiss\xe3o \xe9 requerida!"),this.errorRequired("email")&&this.addValidationMessage("E-mail \xe9 requerido!"),this.errorEmail("email")&&this.addValidationMessage("E-mail deve ser um endere\xe7o de email v\xe1lido!"),!this.inValidationMsgs()}validatePasswordForce(e){if(this.validationMessages=null,this.processValidation=!1,this.passwordValidationMessage=null,!this.emptyString(e)){var t=this.stringService.validatePassword(e,!0);200!=t.code?(this.processValidation=!0,this.addValidationMessage(t.msg)):this.passwordValidationMessage=t}}preValidateToSaveUpdate(e){if(this.passwordValidationMessage=null,this.emptyString(e.email)&&this.addValidationMessage("E-mail \xe9 requerido!"),this.stringService.validateEmail(e.email)||this.addValidationMessage("E-mail deve ser um endere\xe7o de email v\xe1lido!"),!this.emptyString(e.password)){var t=this.stringService.validatePassword(e.password,!1);977!=t.code||this.idObjectEdit>0||this.addValidationMessage(t.msg),200!=t.code&&977!=t.code&&this.addValidationMessage(t.msg)}return!this.inValidationMsgs()}toUserPaymentTickets(e){this.crudService.loadFromCache(e).then(e=>{this.processObjectAndValidationResult(e,!0)&&this.eventEmitterService.get("userpaymenttickets").emit({object:e})})}}return e.\u0275fac=function(t){return q(t||e)},e.\u0275cmp=r.Hb({type:e,selectors:[["user-root"]],features:[r.wb],decls:12,vars:11,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","cadastro e altera\xe7\xe3o das pessoas/usu\xe1rios"],[3,"objects","selectedTab","setTabEmitter"],[1,"dataForm",3,"formGroup","ngSubmit"],["label","Nome (*)","titlee","Nome","maxchars","30","forAlphaName","true","formControlName","name","widthPerc","98","ngDefaultControl","",3,"formGroup"],["label","E-mail (**)","titlee","E-mail","maxchars","100","formControlName","email","widthPerc","38","ngDefaultControl","",3,"formGroup"],["label","Senha (**)","titlee","Senha","maxchars","100","forPassword","true","formControlName","password","widthPerc","29","ngDefaultControl","",3,"formGroup","valueChangedEmitter"],["label","Cat./Perm. (*)","titlee","Categoria/Permiss\xe3o","formControlName","category","widthPerc","30","ngDefaultControl","",3,"objects"],[1,"field",2,"width","99%"],[1,"fieldset"],[4,"ngIf"],[1,"clear"],[3,"validationMessages","processValidation","passwordValidationMessage","additionalMsgsInfo","cancelDataEmitter"],[1,"alert","alert-danger"],[1,"fas","fa-exclamation-triangle"],["style","width: 19em; font-size: .95em;",3,"class",4,"ngFor","ngForOf"],[1,"alert","alert-info"],[2,"width","19em","font-size",".95em"],[1,"field"],["type","checkbox","checked","checked",3,"id","disabled","click",4,"ngIf"],["type","checkbox",3,"id","disabled","click",4,"ngIf"],[1,"field","label",2,"margin-left",".3em"],[3,"for"],[1,"field",2,"margin-left","1.5em"],["type","checkbox","checked","checked",3,"id","disabled","click"],["type","checkbox",3,"id","disabled","click"],["aria-label","lista das pessoas/usu\xe1rios"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","auto"],["scope","col","title","Categoria/Permiss\xe3o","aria-label","Categoria/Permiss\xe3o",2,"width","10em"],["scope","col","style","width: 11em;",4,"ngIf"],["scope","col","style","width: 5em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","3",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","totalPages","totalRows","previousPageEmitter","setPageEmitter","nextPageEmitter"],["scope","col",2,"width","11em"],["scope","col",2,"width","5em"],["mdbTableCol",""],[1,"text"],[1,"text",3,"innerHtml"],[1,"actions"],[1,"buttons"],["class","btn btn-primary clickable","type","button","placement","left","ngbTooltip","Tickets de Evento do Usu\xe1rio","aria-label","Tickets de Evento do Usu\xe1rio",3,"disabled","click",4,"ngIf"],[3,"auditingExclusions","object","logged","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","objectDetail","lockUnLock","showObjectEmitter","lockEmitter","unlockEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["type","button","placement","left","ngbTooltip","Tickets de Evento do Usu\xe1rio","aria-label","Tickets de Evento do Usu\xe1rio",1,"btn","btn-primary","clickable",3,"disabled","click"],[1,"far","fa-money-bill-alt"],["scope","row",1,"text",2,"width","11em"],[1,"text","noBorderRight"],["scope","row",1,"text"],["label","Pessoa / Usu\xe1rio","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Pessoa / Usu\xe1rio",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Pessoa / Usu\xe1rio","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){if(1&e&&(r.Sb(0,"form-toolbar",0),r.ec("onSearchFormSubmitEmitter",(function(e){return t.onSearchFormSubmit()}))("listDataEmitter",(function(e){return t.listData()}))("listDataNoCacheEmitter",(function(e){return t.listDataNoCache()}))("auditListEmitter",(function(e){return t.auditList()}))("normalListEmitter",(function(e){return t.normalList()}))("addObjectEmitter",(function(e){return t.addObject()})),r.Rb(),r.Bc(1,R,16,24,"ng-template",1),r.Bc(2,T,2,1,"ng-template",null,2,r.Cc),r.Bc(4,V,20,4,"ng-template",null,3,r.Cc),r.Bc(6,M,1,2,"ng-template",null,4,r.Cc),r.Bc(8,F,1,3,"ng-template",null,5,r.Cc),r.Bc(10,U,1,3,"ng-template",null,6,r.Cc)),2&e){const e=r.tc(3);r.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",r.mc(8,_).includes(t.logged.category))("disabledAddNew",!(r.mc(9,N).includes(t.logged.category)||r.mc(10,z).includes(t.logged.category)&&t.permissions.includes("user_write"))),r.zb(1),r.jc("ngIf",t.editing)("ngIfElse",e)}},directives:[l.a,s.j,d.a,n.t,n.n,n.g,u.a,n.m,n.e,n.b,m.a,b.a,s.i,f.a,g.a,o.g,h.a],encapsulation:2}),e})();const q=r.Ub(L),G=[{path:"",component:L}];let $=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[a.c.forChild(G)],a.c]}),e})();var K=i("kS8M");i.d(t,"UserModule",(function(){return H}));let H=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[s.b,n.h,n.p,o.f,$,K.a]]}),e})()},ZMR0:function(e,t,i){"use strict";i.d(t,"a",(function(){return k}));var s=i("fXoL"),n=i("1dEi"),o=i("3Pt+"),a=i("ofXK");function c(e,t){1&e&&s.Ob(0,"div",3)}function r(e,t){1&e&&s.Ob(0,"div",4)}function l(e,t){if(1&e&&(s.Sb(0,"div"),s.Sb(1,"label",12),s.Dc(2),s.Rb(),s.Rb()),2&e){const e=s.gc(2);s.zb(1),s.kc("for",e.id),s.kc("title",e.titlee),s.Ab("aria-label",e.titlee),s.zb(1),s.Ec(e.label)}}function d(e,t){if(1&e){const e=s.Tb();s.Sb(0,"input",13),s.ec("change",(function(t){return s.uc(e),s.gc(2).onChangeValue(t)}))("blur",(function(t){return s.uc(e),s.gc(2).onChangeValue(t)})),s.Rb()}if(2&e){const e=s.gc(2);s.Cb("form-control ",e.className,""),s.kc("id",e.id),s.kc("maxlength",e.maxchars>0?e.maxchars:250),s.jc("formControl",e.ngControl.control)("placeholder",e.placeholderr)}}function u(e,t){if(1&e){const e=s.Tb();s.Sb(0,"input",14),s.ec("change",(function(t){return s.uc(e),s.gc(2).onChangeValue(t)}))("blur",(function(t){return s.uc(e),s.gc(2).onChangeValue(t)})),s.Rb()}if(2&e){const e=s.gc(2);s.Cb("form-control ",e.className,""),s.kc("id",e.id),s.kc("maxlength",e.maxchars>0?e.maxchars:20),s.kc("mask",e.maskk),s.jc("dropSpecialCharacters",!e.preserveSpecialCharacters)("formControl",e.ngControl.control)("placeholder",e.placeholderr)}}function m(e,t){if(1&e){const e=s.Tb();s.Sb(0,"input",15),s.ec("change",(function(t){return s.uc(e),s.gc(2).onChangeValue(t)}))("keyup",(function(t){return s.uc(e),s.gc(2).onChangeValue(t)})),s.Rb()}if(2&e){const e=s.gc(2);s.Cb("form-control ",e.className,""),s.kc("id",e.id),s.kc("maxlength",e.maxchars>0?e.maxchars:250),s.kc("mask",e.maskk),s.jc("dropSpecialCharacters",!e.preserveSpecialCharacters)("formControl",e.ngControl.control)("placeholder",e.placeholderr)}}function b(e,t){if(1&e){const e=s.Tb();s.Sb(0,"textarea",16),s.ec("change",(function(t){return s.uc(e),s.gc(2).onChangeValue(t)}))("keyup",(function(t){return s.uc(e),s.gc(2).onChangeValue(t)})),s.Dc(1,"\t"),s.Rb()}if(2&e){const e=s.gc(2);s.Cb("form-control ",e.className,""),s.kc("id",e.id),s.kc("rows",e.rowss),s.kc("maxlength",e.maxchars>0?e.maxchars:250*e.rowss),s.jc("formControl",e.ngControl.control)("placeholder",e.placeholderr)}}const f=function(e){return{width:e}};function g(e,t){if(1&e&&(s.Sb(0,"div",5),s.Bc(1,l,3,4,"div",6),s.Bc(2,d,1,7,"input",7),s.Bc(3,u,1,9,"input",8),s.Bc(4,m,1,9,"input",9),s.Bc(5,b,2,8,"textarea",10),s.Ob(6,"div",11),s.Rb()),2&e){const e=s.gc();s.jc("ngStyle",s.nc(6,f,e.widthPerc+"%")),s.zb(1),s.jc("ngIf",null!=e.label),s.zb(1),s.jc("ngIf",e.forPassword),s.zb(1),s.jc("ngIf",!e.forPassword&&e.forNumber),s.zb(1),s.jc("ngIf",!e.forPassword&&!e.forNumber&&1==e.rowss),s.zb(1),s.jc("ngIf",!e.forPassword&&!e.forNumber&&e.rowss>1)}}function h(e,t){if(1&e&&(s.Sb(0,"div"),s.Sb(1,"label",12),s.Dc(2),s.Rb(),s.Rb()),2&e){const e=s.gc(2);s.zb(1),s.kc("for",e.id),s.kc("title",e.titlee),s.Ab("aria-label",e.titlee),s.zb(1),s.Ec(e.label)}}function p(e,t){if(1&e&&s.Ob(0,"input",21),2&e){const e=s.gc(2);s.Cb("form-control ",e.className,""),s.kc("id",e.id),s.jc("formControl",e.ngControl.control)}}function v(e,t){if(1&e&&s.Ob(0,"input",22),2&e){const e=s.gc(2);s.Cb("form-control ",e.className,""),s.kc("id",e.id),s.jc("formControl",e.ngControl.control)}}function j(e,t){if(1&e&&s.Ob(0,"input",23),2&e){const e=s.gc(2);s.Cb("form-control ",e.className,""),s.kc("id",e.id),s.jc("formControl",e.ngControl.control)}}function P(e,t){if(1&e&&(s.Sb(0,"textarea",24),s.Dc(1,"\t"),s.Rb()),2&e){const e=s.gc(2);s.Cb("form-control ",e.className,""),s.kc("id",e.id),s.kc("rows",e.rowss),s.jc("formControl",e.ngControl.control)}}function w(e,t){if(1&e&&(s.Sb(0,"div",5),s.Bc(1,h,3,4,"div",6),s.Bc(2,p,1,5,"input",17),s.Bc(3,v,1,5,"input",18),s.Bc(4,j,1,5,"input",19),s.Bc(5,P,2,6,"textarea",20),s.Ob(6,"div",11),s.Rb()),2&e){const e=s.gc();s.jc("ngStyle",s.nc(6,f,e.widthPerc+"%")),s.zb(1),s.jc("ngIf",null!=e.label),s.zb(1),s.jc("ngIf",e.forPassword),s.zb(1),s.jc("ngIf",!e.forPassword&&e.forNumber),s.zb(1),s.jc("ngIf",!e.forPassword&&!e.forNumber&&1==e.rowss),s.zb(1),s.jc("ngIf",!e.forPassword&&!e.forNumber&&e.rowss>1)}}let k=(()=>{class e extends n.a{constructor(e){super(e),this.ngControl=e,this.valueChangedEmitter=new s.n}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.forNumber=null,this.forAlphaNum=null,this.forAlphaNumName=null,this.forAlpha=null,this.forMail=null,this.forPassword=null,this.valueChangedEmitter=null}onChangeValue(e){var t=e.target.value.trim();this.forNumber?this.adjustInputNumberValueAfterChange(t):this.forAlphaNum?this.adjustInputAlphaNumValueAfterChange(t):this.forAlphaNumName?this.adjustInputAlphaNumNameValueAfterChange(t):this.forAlpha?this.adjustInputAlphaValueAfterChange(t):this.forMail?this.adjustInputTextMailAddressValueAfterChange(t):this.forPassword?this.valueChangedEmitter.emit(t):this.adjustInputTextValueAfterChange(t)}}return e.\u0275fac=function(t){return new(t||e)(s.Nb(o.l))},e.\u0275cmp=s.Hb({type:e,selectors:[["rich-input-text"]],inputs:{forNumber:"forNumber",forAlphaNum:"forAlphaNum",forAlphaNumName:"forAlphaNumName",forAlpha:"forAlpha",forMail:"forMail",forPassword:"forPassword"},outputs:{valueChangedEmitter:"valueChangedEmitter"},features:[s.wb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],[4,"ngIf"],["type","password","style","width: 100% !important;","autocomplete","off",3,"id","maxlength","class","formControl","placeholder","change","blur",4,"ngIf"],["type","text","style","width: 100% !important; text-align: right;","autocomplete","off",3,"id","maxlength","class","mask","dropSpecialCharacters","formControl","placeholder","change","blur",4,"ngIf"],["type","text","style","width: 100% !important;","autocomplete","off",3,"id","maxlength","class","mask","dropSpecialCharacters","formControl","placeholder","change","keyup",4,"ngIf"],["style","width: 100% !important;","autocomplete","off",3,"id","rows","maxlength","class","formControl","placeholder","change","keyup",4,"ngIf"],[1,"clear"],[3,"for","title"],["type","password","autocomplete","off",2,"width","100% !important",3,"id","maxlength","formControl","placeholder","change","blur"],["type","text","autocomplete","off",2,"width","100% !important","text-align","right",3,"id","maxlength","mask","dropSpecialCharacters","formControl","placeholder","change","blur"],["type","text","autocomplete","off",2,"width","100% !important",3,"id","maxlength","mask","dropSpecialCharacters","formControl","placeholder","change","keyup"],["autocomplete","off",2,"width","100% !important",3,"id","rows","maxlength","formControl","placeholder","change","keyup"],["type","password","style","width: 100% !important;","readonly","true",3,"id","class","formControl",4,"ngIf"],["type","text","style","width: 100% !important; text-align: right;","readonly","true",3,"id","class","formControl",4,"ngIf"],["type","text","style","width: 100% !important;","readonly","true",3,"id","class","formControl",4,"ngIf"],["style","width: 100% !important;","readonly","true",3,"id","rows","class","formControl",4,"ngIf"],["type","password","readonly","true",2,"width","100% !important",3,"id","formControl"],["type","text","readonly","true",2,"width","100% !important","text-align","right",3,"id","formControl"],["type","text","readonly","true",2,"width","100% !important",3,"id","formControl"],["readonly","true",2,"width","100% !important",3,"id","rows","formControl"]],template:function(e,t){1&e&&(s.Bc(0,c,1,0,"div",0),s.Bc(1,r,1,0,"div",1),s.Bc(2,g,7,8,"div",2),s.Bc(3,w,7,8,"div",2)),2&e&&(s.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),s.zb(1),s.jc("ngIf",t.breakBeforeDouble&&!t.noRender),s.zb(1),s.jc("ngIf",!t.noRender&&!t.onlyRead),s.zb(1),s.jc("ngIf",!t.noRender&&t.onlyRead))},directives:[a.j,a.k,o.b,o.i,o.m,o.d],encapsulation:2}),e})()}}]);