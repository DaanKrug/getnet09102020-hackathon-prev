(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"Sz/C":function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),a=n("3Pt+"),r=n("1kSV"),c=n("tyNb"),i=n("kYp3"),l=n("fXoL"),s=n("zT7k"),d=n("ZMR0"),u=n("Th3u"),m=n("n/9U"),b=n("fcMv"),f=n("Ca8N"),h=n("/eUb");function g(e,t){if(1&e){const e=l.Ub();l.Tb(0,"section",7),l.Tb(1,"form",8),l.fc("ngSubmit",(function(t){return l.wc(e),l.hc().onObjectFormSubmit()})),l.Tb(2,"div"),l.Pb(3,"rich-input-text",9),l.Pb(4,"rich-input-text",10),l.Pb(5,"rich-checkbox",11),l.Pb(6,"rich-input-text",12),l.Pb(7,"div",13),l.Sb(),l.Tb(8,"form-action",14),l.fc("cancelDataEmitter",(function(t){return l.wc(e),l.hc().cancelData()})),l.Sb(),l.Sb(),l.Sb()}if(2&e){const e=l.hc();l.zb(1),l.kc("formGroup",e.dataForm),l.zb(2),l.kc("formGroup",e.dataForm),l.zb(1),l.kc("formGroup",e.dataForm),l.zb(1),l.kc("noRender","admin_master"!=e.logged.category)("breakBefore",!0),l.zb(1),l.kc("formGroup",e.dataForm)("noRender","admin_master"!=e.logged.category),l.zb(2),l.kc("validationMessages",e.validationMessages)("processValidation",e.processValidation)}}function p(e,t){1&e&&(l.Tb(0,"th",25),l.Gc(1,"A\xe7\xf5es"),l.Sb())}function w(e,t){1&e&&(l.Tb(0,"th",26),l.Gc(1,"A\xe7\xf5es"),l.Sb())}const k=function(){return["admin_master"]},C=function(){return["admin"]};function E(e,t){if(1&e){const e=l.Ub();l.Tb(0,"tr",27),l.Pb(1,"td",28),l.Tb(2,"td",29),l.Tb(3,"div",30),l.Tb(4,"button",31),l.fc("click",(function(n){l.wc(e);const o=t.$implicit;return l.hc(3).downloadFile(o.link)})),l.Pb(5,"i",32),l.Sb(),l.Tb(6,"edit-delete-action",33),l.fc("showObjectEmitter",(function(t){return l.wc(e),l.hc(3).showObject(t)}))("editObjectEmitter",(function(t){return l.wc(e),l.hc(3).editObject(t)}))("deleteObjectEmitter",(function(t){return l.wc(e),l.hc(3).deleteObject(t)}))("unDeleteObjectEmitter",(function(t){return l.wc(e),l.hc(3).unDeleteObject(t)})),l.Sb(),l.Sb(),l.Sb(),l.Sb()}if(2&e){const e=t.$implicit,n=l.hc(3),o=l.vc(9),a=l.vc(11),r=l.vc(7);l.zb(1),l.kc("innerHtml",e.name,l.xc),l.zb(5),l.kc("auditingExclusions",n.auditingExclusions)("object",e)("logged",n.logged)("noAction",!(l.oc(8,k).includes(n.logged.category)||l.oc(9,C).includes(n.logged.category)&&n.permissions.includes("image_write")))("objectDeleteConfirmation",o)("objectUnDeleteConfirmation",a)("objectDetail",r)}}function j(e,t){if(1&e){const e=l.Ub();l.Tb(0,"table",17),l.Tb(1,"thead",18),l.Tb(2,"tr"),l.Tb(3,"th",19),l.Gc(4,"Identifica\xe7\xe3o"),l.Sb(),l.Ec(5,p,2,0,"th",20),l.Ec(6,w,2,0,"th",21),l.Sb(),l.Sb(),l.Tb(7,"tbody"),l.Ec(8,E,7,10,"tr",22),l.Tb(9,"tr"),l.Tb(10,"td",23),l.Tb(11,"table-navigator",24),l.fc("previousPageEmitter",(function(t){return l.wc(e),l.hc(2).previousPage()}))("setPageEmitter",(function(t){return l.wc(e),l.hc(2).setPage(t)}))("nextPageEmitter",(function(t){return l.wc(e),l.hc(2).nextPage()})),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb()}if(2&e){const e=l.hc(2);l.zb(5),l.kc("ngIf",!e.auditingExclusions),l.zb(1),l.kc("ngIf",e.auditingExclusions),l.zb(2),l.kc("ngForOf",e.objects)("ngForTrackBy",e.trackById),l.zb(3),l.kc("pages",e.pages)("selectedPage",e.selectedPage)("previousPageDisabled",e.previousPageDisabled)("nextPageDisabled",e.nextPageDisabled)("rowsPerPage",e.rowsPerPage)("totalPages",e.totalPages)("totalRows",e.totalRows)}}function S(e,t){if(1&e&&(l.Tb(0,"section",15),l.Ec(1,j,12,11,"table",16),l.Sb()),2&e){const e=l.hc();l.zb(1),l.kc("ngIf",e.objects)}}function x(e,t){if(1&e&&(l.Tb(0,"tr"),l.Tb(1,"th",34),l.Gc(2,"Identifica\xe7\xe3o:"),l.Sb(),l.Tb(3,"td",35),l.Gc(4),l.Sb(),l.Sb(),l.Tb(5,"tr"),l.Tb(6,"td",36),l.Pb(7,"img",37),l.Sb(),l.Sb()),2&e){const e=l.hc();l.zb(4),l.Hc(e.selectedObject.name)}}function y(e,t){if(1&e){const e=l.Ub();l.Tb(0,"delete-confirmation",38),l.fc("cancelDataEmitter",(function(t){return l.wc(e),l.hc().showObject()})),l.Sb()}if(2&e){const e=l.hc(),t=l.vc(5);l.kc("selectedObject",e.selectedObject)("templateOutlet",t)}}function O(e,t){if(1&e){const e=l.Ub();l.Tb(0,"delete-confirmation",39),l.fc("confirmDeleteObjectEmitter",(function(t){return l.wc(e),l.hc().confirmDeleteObject(t)}))("cancelDataEmitter",(function(t){return l.wc(e),l.hc().cancelData()})),l.Sb()}if(2&e){const e=l.hc(),t=l.vc(5);l.kc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}function I(e,t){if(1&e){const e=l.Ub();l.Tb(0,"delete-confirmation",40),l.fc("confirmDeleteObjectEmitter",(function(t){return l.wc(e),l.hc().confirmUnDeleteObject(t)}))("cancelDataEmitter",(function(t){return l.wc(e),l.hc().cancelData()})),l.Sb()}if(2&e){const e=l.hc(),t=l.vc(5);l.kc("selectedObject",e.selectedObject)("auditingExclusions",e.auditingExclusions)("templateOutlet",t)}}const P=function(){return["admin_master","admin","system_auditor"]};let v=(()=>{class e extends i.a{ngOnInit(){this.setInitializationServices(["image"]),this.crudService=this.imageService,this.sucessErrorMessages={200:"Imagem adicionada com sucesso.",201:"Imagem alterada com sucesso.",204:"Imagem exclu\xedda com sucesso.",207:"Imagem restaurada com sucesso.",208:"Imagem exclu\xedda [PERMANENTE] com sucesso."},this.listTitle="Imagens",this.addTitle="Adicionar Imagem",this.editTitle="Editar Imagem",this.dataForm=new a.f({link:new a.c("",[a.s.required]),name:new a.c("",[a.s.required]),description:new a.c("",[]),forPublic:new a.c("",[])}),super.ngOnInit()}afterNgOnInit(){this.parameterName="name/description"}ngOnDestroy(){super.ngOnDestroy()}showObject(e,t){super.showObject(e,t),this.setSelectedObjectLink()}deleteObject(e,t){super.deleteObject(e,t),this.setSelectedObjectLink()}unDeleteObject(e,t){super.unDeleteObject(e,t),this.setSelectedObjectLink()}setSelectedObjectLink(){var e=document.getElementById("selectedObjectLink");null!=e?(e.src="",this.emptyObject(this.selectedObject)||this.emptyString(this.selectedObject.link)||(e.src=this.selectedObject.link.trim())):setTimeout(()=>{this.setSelectedObjectLink()},100)}setObject(e){super.setObject(e),this.dataForm.setValue({link:e.link,name:e.name,description:e.description,forPublic:e.forPublic})}prepareToSaveUpdate(e){return"admin_master"!=this.logged.category&&(e.description=null,e.forPublic=!1),e}makeSelectSearchedItemDestaked(e,t){return e.name=this.makeDestak(e.name,t),e.description=this.makeDestak(e.description,t),e}validateFormFields(){return this.errorRequired("link")&&this.addValidationMessage("Link \xe9 requerido!"),this.errorRequired("name")&&this.addValidationMessage("Identifica\xe7\xe3o \xe9 requerida!"),!this.inValidationMsgs()}preValidateToSaveUpdate(e){var t=e.link.trim().toLowerCase();if(0!=t.indexOf("https://")&&this.addValidationMessage(n="Link deve apontar para um endere\xe7o HTTPS, iniciando com: <strong>https://</strong>"),!super.validateFileType(t,"image")){var n="Link deve apontar para um arquivo do tipo Imagem: ";this.addValidationMessage(n+=" <strong>.png .jpg .jpeg .gif ou .bmp</strong>.")}return!this.inValidationMsgs()}}return e.\u0275fac=function(t){return T(t||e)},e.\u0275cmp=l.Ib({type:e,selectors:[["image-root"]],features:[l.wb],decls:12,vars:11,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["aria-label","cadastro e altera\xe7\xe3o das imagens"],[1,"dataForm",3,"formGroup","ngSubmit"],["label","Link (*)","titlee","Link","formControlName","link","widthPerc","49","ngDefaultControl","",3,"formGroup"],["label","Identifica\xe7\xe3o (*)","titlee","Identifica\xe7\xe3o","maxchars","30","forAlphaNum","true","formControlName","name","widthPerc","49","ngDefaultControl","",3,"formGroup"],["widthPerc","100","formControlName","forPublic","label","Usar no Carrossel na P\xe1gina P\xfablica Inicial.","ngDefaultControl","",3,"noRender","breakBefore"],["label","Descri\xe7\xe3o para Carrossel","maxchars","250","forAlphaNum","true","formControlName","description","widthPerc","100","ngDefaultControl","",3,"formGroup","noRender"],[1,"clear"],[3,"validationMessages","processValidation","cancelDataEmitter"],["aria-label","lista das imagens"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","auto"],["scope","col","style","width: 9em;",4,"ngIf"],["scope","col","style","width: 7em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","2",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","totalPages","totalRows","previousPageEmitter","setPageEmitter","nextPageEmitter"],["scope","col",2,"width","9em"],["scope","col",2,"width","7em"],["mdbTableCol",""],[1,"text",3,"innerHtml"],[1,"actions"],[1,"buttons"],["placement","left","ngbTooltip","Download","aria-label","Download",1,"btn","btn-primary","clickable",3,"click"],[1,"fas","fa-file-download"],[3,"auditingExclusions","object","logged","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","objectDetail","showObjectEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["scope","col",1,"text",2,"width","7em"],[1,"text","noBorderRight"],["colspan","2",1,"noBorderRight",2,"padding","0"],["id","selectedObjectLink","src","","alt","A pr\xf3pria imagem referida pelo link",2,"width","100%","height","20em"],["label","Imagem","info","true",3,"selectedObject","templateOutlet","cancelDataEmitter"],["label","Imagem",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","Imagem","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"]],template:function(e,t){if(1&e&&(l.Tb(0,"form-toolbar",0),l.fc("onSearchFormSubmitEmitter",(function(e){return t.onSearchFormSubmit()}))("listDataEmitter",(function(e){return t.listData()}))("listDataNoCacheEmitter",(function(e){return t.listDataNoCache()}))("auditListEmitter",(function(e){return t.auditList()}))("normalListEmitter",(function(e){return t.normalList()}))("addObjectEmitter",(function(e){return t.addObject()})),l.Sb(),l.Ec(1,g,9,9,"ng-template",1),l.Ec(2,S,2,1,"ng-template",null,2,l.Fc),l.Ec(4,x,8,1,"ng-template",null,3,l.Fc),l.Ec(6,y,1,2,"ng-template",null,4,l.Fc),l.Ec(8,O,1,3,"ng-template",null,5,l.Fc),l.Ec(10,I,1,3,"ng-template",null,6,l.Fc)),2&e){const e=l.vc(3);l.kc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",l.oc(8,P).includes(t.logged.category))("disabledAddNew",!(l.oc(9,k).includes(t.logged.category)||l.oc(10,C).includes(t.logged.category)&&t.permissions.includes("image_write"))),l.zb(1),l.kc("ngIf",t.editing)("ngIfElse",e)}},directives:[s.a,o.j,a.u,a.n,a.g,d.a,a.m,a.e,a.b,u.a,m.a,o.i,b.a,r.g,f.a,h.a],encapsulation:2}),e})();const T=l.Vb(v),D=[{path:"",component:v}];let N=(()=>{class e{}return e.\u0275mod=l.Mb({type:e}),e.\u0275inj=l.Lb({factory:function(t){return new(t||e)},imports:[[c.c.forChild(D)],c.c]}),e})();var A=n("kS8M");n.d(t,"ImageModule",(function(){return z}));let z=(()=>{class e{}return e.\u0275mod=l.Mb({type:e}),e.\u0275inj=l.Lb({factory:function(t){return new(t||e)},imports:[[o.b,a.h,a.q,r.f,N,A.a]]}),e})()},ZMR0:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n("fXoL"),a=n("1dEi"),r=n("3Pt+"),c=n("ofXK");function i(e,t){1&e&&o.Pb(0,"div",3)}function l(e,t){1&e&&o.Pb(0,"div",4)}function s(e,t){if(1&e&&(o.Tb(0,"div"),o.Tb(1,"label",12),o.Gc(2),o.Sb(),o.Sb()),2&e){const e=o.hc(2);o.zb(1),o.lc("for",e.id),o.lc("title",e.titlee),o.Ab("aria-label",e.titlee),o.zb(1),o.Hc(e.label)}}function d(e,t){if(1&e){const e=o.Ub();o.Tb(0,"input",13),o.fc("change",(function(t){return o.wc(e),o.hc(2).onChangeValue(t)}))("blur",(function(t){return o.wc(e),o.hc(2).onChangeValue(t)})),o.Sb()}if(2&e){const e=o.hc(2);o.Cb("form-control ",e.className,""),o.lc("id",e.id),o.lc("maxlength",e.maxchars>0?e.maxchars:250),o.kc("formControl",e.ngControl.control)("placeholder",e.placeholderr)}}function u(e,t){if(1&e){const e=o.Ub();o.Tb(0,"input",14),o.fc("change",(function(t){return o.wc(e),o.hc(2).onChangeValue(t)}))("blur",(function(t){return o.wc(e),o.hc(2).onChangeValue(t)})),o.Sb()}if(2&e){const e=o.hc(2);o.Cb("form-control ",e.className,""),o.lc("id",e.id),o.lc("maxlength",e.maxchars>0?e.maxchars:20),o.lc("mask",e.maskk),o.kc("dropSpecialCharacters",!e.preserveSpecialCharacters)("formControl",e.ngControl.control)("placeholder",e.placeholderr)}}function m(e,t){if(1&e){const e=o.Ub();o.Tb(0,"input",15),o.fc("change",(function(t){return o.wc(e),o.hc(2).onChangeValue(t)}))("keyup",(function(t){return o.wc(e),o.hc(2).onChangeValue(t)})),o.Sb()}if(2&e){const e=o.hc(2);o.Cb("form-control ",e.className,""),o.lc("id",e.id),o.lc("maxlength",e.maxchars>0?e.maxchars:250),o.lc("mask",e.maskk),o.kc("dropSpecialCharacters",!e.preserveSpecialCharacters)("formControl",e.ngControl.control)("placeholder",e.placeholderr)}}function b(e,t){if(1&e){const e=o.Ub();o.Tb(0,"textarea",16),o.fc("change",(function(t){return o.wc(e),o.hc(2).onChangeValue(t)}))("keyup",(function(t){return o.wc(e),o.hc(2).onChangeValue(t)})),o.Gc(1,"\t"),o.Sb()}if(2&e){const e=o.hc(2);o.Cb("form-control ",e.className,""),o.lc("id",e.id),o.lc("rows",e.rowss),o.lc("maxlength",e.maxchars>0?e.maxchars:250*e.rowss),o.kc("formControl",e.ngControl.control)("placeholder",e.placeholderr)}}const f=function(e){return{width:e}};function h(e,t){if(1&e&&(o.Tb(0,"div",5),o.Ec(1,s,3,4,"div",6),o.Ec(2,d,1,7,"input",7),o.Ec(3,u,1,9,"input",8),o.Ec(4,m,1,9,"input",9),o.Ec(5,b,2,8,"textarea",10),o.Pb(6,"div",11),o.Sb()),2&e){const e=o.hc();o.kc("ngStyle",o.pc(6,f,e.widthPerc+"%")),o.zb(1),o.kc("ngIf",null!=e.label),o.zb(1),o.kc("ngIf",e.forPassword),o.zb(1),o.kc("ngIf",!e.forPassword&&e.forNumber),o.zb(1),o.kc("ngIf",!e.forPassword&&!e.forNumber&&1==e.rowss),o.zb(1),o.kc("ngIf",!e.forPassword&&!e.forNumber&&e.rowss>1)}}function g(e,t){if(1&e&&(o.Tb(0,"div"),o.Tb(1,"label",12),o.Gc(2),o.Sb(),o.Sb()),2&e){const e=o.hc(2);o.zb(1),o.lc("for",e.id),o.lc("title",e.titlee),o.Ab("aria-label",e.titlee),o.zb(1),o.Hc(e.label)}}function p(e,t){if(1&e&&o.Pb(0,"input",21),2&e){const e=o.hc(2);o.Cb("form-control ",e.className,""),o.lc("id",e.id),o.kc("formControl",e.ngControl.control)}}function w(e,t){if(1&e&&o.Pb(0,"input",22),2&e){const e=o.hc(2);o.Cb("form-control ",e.className,""),o.lc("id",e.id),o.kc("formControl",e.ngControl.control)}}function k(e,t){if(1&e&&o.Pb(0,"input",23),2&e){const e=o.hc(2);o.Cb("form-control ",e.className,""),o.lc("id",e.id),o.kc("formControl",e.ngControl.control)}}function C(e,t){if(1&e&&(o.Tb(0,"textarea",24),o.Gc(1,"\t"),o.Sb()),2&e){const e=o.hc(2);o.Cb("form-control ",e.className,""),o.lc("id",e.id),o.lc("rows",e.rowss),o.kc("formControl",e.ngControl.control)}}function E(e,t){if(1&e&&(o.Tb(0,"div",5),o.Ec(1,g,3,4,"div",6),o.Ec(2,p,1,5,"input",17),o.Ec(3,w,1,5,"input",18),o.Ec(4,k,1,5,"input",19),o.Ec(5,C,2,6,"textarea",20),o.Pb(6,"div",11),o.Sb()),2&e){const e=o.hc();o.kc("ngStyle",o.pc(6,f,e.widthPerc+"%")),o.zb(1),o.kc("ngIf",null!=e.label),o.zb(1),o.kc("ngIf",e.forPassword),o.zb(1),o.kc("ngIf",!e.forPassword&&e.forNumber),o.zb(1),o.kc("ngIf",!e.forPassword&&!e.forNumber&&1==e.rowss),o.zb(1),o.kc("ngIf",!e.forPassword&&!e.forNumber&&e.rowss>1)}}let j=(()=>{class e extends a.a{constructor(e){super(e),this.ngControl=e,this.valueChangedEmitter=new o.n}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy(),this.forNumber=null,this.forAlphaNum=null,this.forAlphaNumName=null,this.forAlpha=null,this.forMail=null,this.forPassword=null,this.valueChangedEmitter=null}onChangeValue(e){var t=e.target.value.trim();this.forNumber?this.adjustInputNumberValueAfterChange(t):this.forAlphaNum?this.adjustInputAlphaNumValueAfterChange(t):this.forAlphaNumName?this.adjustInputAlphaNumNameValueAfterChange(t):this.forAlpha?this.adjustInputAlphaValueAfterChange(t):this.forMail?this.adjustInputTextMailAddressValueAfterChange(t):this.forPassword?this.valueChangedEmitter.emit(t):this.adjustInputTextValueAfterChange(t)}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(r.l))},e.\u0275cmp=o.Ib({type:e,selectors:[["rich-input-text"]],inputs:{forNumber:"forNumber",forAlphaNum:"forAlphaNum",forAlphaNumName:"forAlphaNumName",forAlpha:"forAlpha",forMail:"forMail",forPassword:"forPassword"},outputs:{valueChangedEmitter:"valueChangedEmitter"},features:[o.wb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],[4,"ngIf"],["type","password","style","width: 100% !important;","autocomplete","off",3,"id","maxlength","class","formControl","placeholder","change","blur",4,"ngIf"],["type","text","style","width: 100% !important; text-align: right;","autocomplete","off",3,"id","maxlength","class","mask","dropSpecialCharacters","formControl","placeholder","change","blur",4,"ngIf"],["type","text","style","width: 100% !important;","autocomplete","off",3,"id","maxlength","class","mask","dropSpecialCharacters","formControl","placeholder","change","keyup",4,"ngIf"],["style","width: 100% !important;","autocomplete","off",3,"id","rows","maxlength","class","formControl","placeholder","change","keyup",4,"ngIf"],[1,"clear"],[3,"for","title"],["type","password","autocomplete","off",2,"width","100% !important",3,"id","maxlength","formControl","placeholder","change","blur"],["type","text","autocomplete","off",2,"width","100% !important","text-align","right",3,"id","maxlength","mask","dropSpecialCharacters","formControl","placeholder","change","blur"],["type","text","autocomplete","off",2,"width","100% !important",3,"id","maxlength","mask","dropSpecialCharacters","formControl","placeholder","change","keyup"],["autocomplete","off",2,"width","100% !important",3,"id","rows","maxlength","formControl","placeholder","change","keyup"],["type","password","style","width: 100% !important;","readonly","true",3,"id","class","formControl",4,"ngIf"],["type","text","style","width: 100% !important; text-align: right;","readonly","true",3,"id","class","formControl",4,"ngIf"],["type","text","style","width: 100% !important;","readonly","true",3,"id","class","formControl",4,"ngIf"],["style","width: 100% !important;","readonly","true",3,"id","rows","class","formControl",4,"ngIf"],["type","password","readonly","true",2,"width","100% !important",3,"id","formControl"],["type","text","readonly","true",2,"width","100% !important","text-align","right",3,"id","formControl"],["type","text","readonly","true",2,"width","100% !important",3,"id","formControl"],["readonly","true",2,"width","100% !important",3,"id","rows","formControl"]],template:function(e,t){1&e&&(o.Ec(0,i,1,0,"div",0),o.Ec(1,l,1,0,"div",1),o.Ec(2,h,7,8,"div",2),o.Ec(3,E,7,8,"div",2)),2&e&&(o.kc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),o.zb(1),o.kc("ngIf",t.breakBeforeDouble&&!t.noRender),o.zb(1),o.kc("ngIf",!t.noRender&&!t.onlyRead),o.zb(1),o.kc("ngIf",!t.noRender&&t.onlyRead))},directives:[c.j,c.k,r.b,r.i,r.m,r.d],encapsulation:2}),e})()}}]);