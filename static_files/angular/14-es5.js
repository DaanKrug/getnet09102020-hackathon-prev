function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=_superPropBase(e,t);if(o){var a=Object.getOwnPropertyDescriptor(o,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{ZMR0:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var o=n("fXoL"),a=n("1dEi"),i=n("3Pt+"),r=n("ofXK");function c(e,t){1&e&&o.Ob(0,"div",3)}function s(e,t){1&e&&o.Ob(0,"div",4)}function l(e,t){if(1&e&&(o.Sb(0,"div"),o.Sb(1,"label",12),o.Dc(2),o.Rb(),o.Rb()),2&e){var n=o.gc(2);o.zb(1),o.kc("for",n.id),o.kc("title",n.titlee),o.Ab("aria-label",n.titlee),o.zb(1),o.Ec(n.label)}}function u(e,t){if(1&e){var n=o.Tb();o.Sb(0,"input",13),o.ec("change",(function(e){return o.uc(n),o.gc(2).onChangeValue(e)}))("blur",(function(e){return o.uc(n),o.gc(2).onChangeValue(e)})),o.Rb()}if(2&e){var a=o.gc(2);o.Cb("form-control ",a.className,""),o.kc("id",a.id),o.kc("maxlength",a.maxchars>0?a.maxchars:250),o.jc("formControl",a.ngControl.control)("placeholder",a.placeholderr)}}function d(e,t){if(1&e){var n=o.Tb();o.Sb(0,"input",14),o.ec("change",(function(e){return o.uc(n),o.gc(2).onChangeValue(e)}))("blur",(function(e){return o.uc(n),o.gc(2).onChangeValue(e)})),o.Rb()}if(2&e){var a=o.gc(2);o.Cb("form-control ",a.className,""),o.kc("id",a.id),o.kc("maxlength",a.maxchars>0?a.maxchars:20),o.kc("mask",a.maskk),o.jc("dropSpecialCharacters",!a.preserveSpecialCharacters)("formControl",a.ngControl.control)("placeholder",a.placeholderr)}}function b(e,t){if(1&e){var n=o.Tb();o.Sb(0,"input",15),o.ec("change",(function(e){return o.uc(n),o.gc(2).onChangeValue(e)}))("keyup",(function(e){return o.uc(n),o.gc(2).onChangeValue(e)})),o.Rb()}if(2&e){var a=o.gc(2);o.Cb("form-control ",a.className,""),o.kc("id",a.id),o.kc("maxlength",a.maxchars>0?a.maxchars:250),o.kc("mask",a.maskk),o.jc("dropSpecialCharacters",!a.preserveSpecialCharacters)("formControl",a.ngControl.control)("placeholder",a.placeholderr)}}function f(e,t){if(1&e){var n=o.Tb();o.Sb(0,"textarea",16),o.ec("change",(function(e){return o.uc(n),o.gc(2).onChangeValue(e)}))("keyup",(function(e){return o.uc(n),o.gc(2).onChangeValue(e)})),o.Dc(1,"\t"),o.Rb()}if(2&e){var a=o.gc(2);o.Cb("form-control ",a.className,""),o.kc("id",a.id),o.kc("rows",a.rowss),o.kc("maxlength",a.maxchars>0?a.maxchars:250*a.rowss),o.jc("formControl",a.ngControl.control)("placeholder",a.placeholderr)}}var m=function(e){return{width:e}};function g(e,t){if(1&e&&(o.Sb(0,"div",5),o.Bc(1,l,3,4,"div",6),o.Bc(2,u,1,7,"input",7),o.Bc(3,d,1,9,"input",8),o.Bc(4,b,1,9,"input",9),o.Bc(5,f,2,8,"textarea",10),o.Ob(6,"div",11),o.Rb()),2&e){var n=o.gc();o.jc("ngStyle",o.nc(6,m,n.widthPerc+"%")),o.zb(1),o.jc("ngIf",null!=n.label),o.zb(1),o.jc("ngIf",n.forPassword),o.zb(1),o.jc("ngIf",!n.forPassword&&n.forNumber),o.zb(1),o.jc("ngIf",!n.forPassword&&!n.forNumber&&1==n.rowss),o.zb(1),o.jc("ngIf",!n.forPassword&&!n.forNumber&&n.rowss>1)}}function p(e,t){if(1&e&&(o.Sb(0,"div"),o.Sb(1,"label",12),o.Dc(2),o.Rb(),o.Rb()),2&e){var n=o.gc(2);o.zb(1),o.kc("for",n.id),o.kc("title",n.titlee),o.Ab("aria-label",n.titlee),o.zb(1),o.Ec(n.label)}}function h(e,t){if(1&e&&o.Ob(0,"input",21),2&e){var n=o.gc(2);o.Cb("form-control ",n.className,""),o.kc("id",n.id),o.jc("formControl",n.ngControl.control)}}function v(e,t){if(1&e&&o.Ob(0,"input",22),2&e){var n=o.gc(2);o.Cb("form-control ",n.className,""),o.kc("id",n.id),o.jc("formControl",n.ngControl.control)}}function j(e,t){if(1&e&&o.Ob(0,"input",23),2&e){var n=o.gc(2);o.Cb("form-control ",n.className,""),o.kc("id",n.id),o.jc("formControl",n.ngControl.control)}}function S(e,t){if(1&e&&(o.Sb(0,"textarea",24),o.Dc(1,"\t"),o.Rb()),2&e){var n=o.gc(2);o.Cb("form-control ",n.className,""),o.kc("id",n.id),o.kc("rows",n.rowss),o.jc("formControl",n.ngControl.control)}}function y(e,t){if(1&e&&(o.Sb(0,"div",5),o.Bc(1,p,3,4,"div",6),o.Bc(2,h,1,5,"input",17),o.Bc(3,v,1,5,"input",18),o.Bc(4,j,1,5,"input",19),o.Bc(5,S,2,6,"textarea",20),o.Ob(6,"div",11),o.Rb()),2&e){var n=o.gc();o.jc("ngStyle",o.nc(6,m,n.widthPerc+"%")),o.zb(1),o.jc("ngIf",null!=n.label),o.zb(1),o.jc("ngIf",n.forPassword),o.zb(1),o.jc("ngIf",!n.forPassword&&n.forNumber),o.zb(1),o.jc("ngIf",!n.forPassword&&!n.forNumber&&1==n.rowss),o.zb(1),o.jc("ngIf",!n.forPassword&&!n.forNumber&&n.rowss>1)}}var C=function(){var e=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).ngControl=e,n.valueChangedEmitter=new o.n,n}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(t.prototype),"ngOnInit",this).call(this)}},{key:"ngOnDestroy",value:function(){_get(_getPrototypeOf(t.prototype),"ngOnDestroy",this).call(this),this.forNumber=null,this.forAlphaNum=null,this.forAlphaNumName=null,this.forAlpha=null,this.forMail=null,this.forPassword=null,this.valueChangedEmitter=null}},{key:"onChangeValue",value:function(e){var t=e.target.value.trim();this.forNumber?this.adjustInputNumberValueAfterChange(t):this.forAlphaNum?this.adjustInputAlphaNumValueAfterChange(t):this.forAlphaNumName?this.adjustInputAlphaNumNameValueAfterChange(t):this.forAlpha?this.adjustInputAlphaValueAfterChange(t):this.forMail?this.adjustInputTextMailAddressValueAfterChange(t):this.forPassword?this.valueChangedEmitter.emit(t):this.adjustInputTextValueAfterChange(t)}}]),t}(a.a);return e.\u0275fac=function(t){return new(t||e)(o.Nb(i.l))},e.\u0275cmp=o.Hb({type:e,selectors:[["rich-input-text"]],inputs:{forNumber:"forNumber",forAlphaNum:"forAlphaNum",forAlphaNumName:"forAlphaNumName",forAlpha:"forAlpha",forMail:"forMail",forPassword:"forPassword"},outputs:{valueChangedEmitter:"valueChangedEmitter"},features:[o.wb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],[4,"ngIf"],["type","password","style","width: 100% !important;","autocomplete","off",3,"id","maxlength","class","formControl","placeholder","change","blur",4,"ngIf"],["type","text","style","width: 100% !important; text-align: right;","autocomplete","off",3,"id","maxlength","class","mask","dropSpecialCharacters","formControl","placeholder","change","blur",4,"ngIf"],["type","text","style","width: 100% !important;","autocomplete","off",3,"id","maxlength","class","mask","dropSpecialCharacters","formControl","placeholder","change","keyup",4,"ngIf"],["style","width: 100% !important;","autocomplete","off",3,"id","rows","maxlength","class","formControl","placeholder","change","keyup",4,"ngIf"],[1,"clear"],[3,"for","title"],["type","password","autocomplete","off",2,"width","100% !important",3,"id","maxlength","formControl","placeholder","change","blur"],["type","text","autocomplete","off",2,"width","100% !important","text-align","right",3,"id","maxlength","mask","dropSpecialCharacters","formControl","placeholder","change","blur"],["type","text","autocomplete","off",2,"width","100% !important",3,"id","maxlength","mask","dropSpecialCharacters","formControl","placeholder","change","keyup"],["autocomplete","off",2,"width","100% !important",3,"id","rows","maxlength","formControl","placeholder","change","keyup"],["type","password","style","width: 100% !important;","readonly","true",3,"id","class","formControl",4,"ngIf"],["type","text","style","width: 100% !important; text-align: right;","readonly","true",3,"id","class","formControl",4,"ngIf"],["type","text","style","width: 100% !important;","readonly","true",3,"id","class","formControl",4,"ngIf"],["style","width: 100% !important;","readonly","true",3,"id","rows","class","formControl",4,"ngIf"],["type","password","readonly","true",2,"width","100% !important",3,"id","formControl"],["type","text","readonly","true",2,"width","100% !important","text-align","right",3,"id","formControl"],["type","text","readonly","true",2,"width","100% !important",3,"id","formControl"],["readonly","true",2,"width","100% !important",3,"id","rows","formControl"]],template:function(e,t){1&e&&(o.Bc(0,c,1,0,"div",0),o.Bc(1,s,1,0,"div",1),o.Bc(2,g,7,8,"div",2),o.Bc(3,y,7,8,"div",2)),2&e&&(o.jc("ngIf",t.breakBefore&&!t.breakBeforeDouble&&!t.noRender),o.zb(1),o.jc("ngIf",t.breakBeforeDouble&&!t.noRender),o.zb(1),o.jc("ngIf",!t.noRender&&!t.onlyRead),o.zb(1),o.jc("ngIf",!t.noRender&&t.onlyRead))},directives:[r.j,r.k,i.b,i.i,i.m,i.d],encapsulation:2}),e}()},i8vR:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),a=n("3Pt+"),i=n("1kSV"),r=n("tyNb"),c=n("kYp3"),s=n("fXoL"),l=n("zT7k"),u=n("IVaK"),d=n("ZMR0"),b=n("fFX4"),f=n("n/9U"),m=n("fcMv"),g=n("Ca8N"),p=n("/eUb");function h(e,t){if(1&e){var n=s.Tb();s.Sb(0,"button",8),s.ec("click",(function(e){return s.uc(n),s.gc().cancelContinueProcess()})),s.Ob(1,"i",10),s.Dc(2," Cancelar "),s.Rb()}}var v,j=((v=function(){function e(){_classCallCheck(this,e),this.confirmContinueProcessEmitter=new s.n,this.cancelContinueProcessEmitter=new s.n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.titlee=null,this.content=null,this.noCancel=null,this.confirmContinueProcessEmitter=null,this.cancelContinueProcessEmitter=null}},{key:"confirmContinueProcess",value:function(){this.confirmContinueProcessEmitter.emit()}},{key:"cancelContinueProcess",value:function(){this.cancelContinueProcessEmitter.emit()}}]),e}()).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=s.Hb({type:v,selectors:[["continue-confirmation"]],inputs:{titlee:"titlee",content:"content",noCancel:"noCancel"},outputs:{confirmContinueProcessEmitter:"confirmContinueProcessEmitter",cancelContinueProcessEmitter:"cancelContinueProcessEmitter"},decls:20,vars:3,consts:[[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],[1,"modal-body"],[1,"table","tableInfo"],[1,"noBorderRight",2,"font-size",".9em"],[1,"modal-footer"],[1,"buttons","clear"],["class","btn btn-primary clickable",3,"click",4,"ngIf"],[1,"btn","btn-primary","clickable",3,"click"],[1,"fas","fa-check-double"],[1,"fas","fa-ban"]],template:function(e,t){1&e&&(s.Sb(0,"div",0),s.Sb(1,"h4",1),s.Dc(2," Confirma\xe7\xe3o Necess\xe1ria "),s.Rb(),s.Rb(),s.Sb(3,"div",2),s.Sb(4,"table",3),s.Sb(5,"thead"),s.Sb(6,"tr"),s.Sb(7,"th"),s.Sb(8,"h5"),s.Dc(9),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(10,"tbody"),s.Sb(11,"tr"),s.Sb(12,"td",4),s.Dc(13),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(14,"div",5),s.Sb(15,"div",6),s.Bc(16,h,3,0,"button",7),s.Sb(17,"button",8),s.ec("click",(function(e){return t.confirmContinueProcess()})),s.Ob(18,"i",9),s.Dc(19," Confirmar e Continuar "),s.Rb(),s.Rb(),s.Rb()),2&e&&(s.zb(9),s.Ec(t.titlee),s.zb(4),s.Fc(" ",t.content," "),s.zb(3),s.jc("ngIf",!t.noCancel))},directives:[o.j],encapsulation:2}),v),S=function(){return{value:"0",label:"Endere\xe7os",title:"Endere\xe7os"}},y=function(){return{value:"1",label:"Mensagem",title:"Mensagem"}},C=function(e,t){return[e,t]};function O(e,t){if(1&e){var n=s.Tb();s.Sb(0,"section",8),s.Sb(1,"rich-tab-bar",9),s.ec("setTabEmitter",(function(e){return s.uc(n),s.gc().setTab(e)})),s.Rb(),s.Sb(2,"form",10),s.ec("ngSubmit",(function(e){return s.uc(n),s.gc().onObjectFormSubmit()})),s.Sb(3,"div"),s.Sb(4,"div"),s.Ob(5,"rich-input-text",11),s.Rb(),s.Sb(6,"div"),s.Ob(7,"rich-input-text",12),s.Ob(8,"rich-editor",13),s.Rb(),s.Ob(9,"div",14),s.Rb(),s.Sb(10,"form-action",15),s.ec("cancelDataEmitter",(function(e){return s.uc(n),s.gc().cancelData()})),s.Rb(),s.Rb(),s.Rb()}if(2&e){var o=s.gc();s.zb(1),s.jc("objects",s.oc(16,C,s.mc(14,S),s.mc(15,y)))("selectedTab",o.tab),s.zb(1),s.jc("formGroup",o.dataForm),s.zb(2),s.Bb(0==o.tab?"":"none"),s.zb(1),s.jc("formGroup",o.dataForm),s.zb(1),s.Bb(1==o.tab?"":"none"),s.zb(1),s.jc("formGroup",o.dataForm),s.zb(1),s.jc("formGroup",o.dataForm),s.zb(2),s.jc("validationMessages",o.validationMessages)("processValidation",o.processValidation)}}function E(e,t){1&e&&(s.Sb(0,"th",29),s.Dc(1,"A\xe7\xf5es"),s.Rb())}function R(e,t){1&e&&(s.Sb(0,"th",30),s.Dc(1,"A\xe7\xf5es"),s.Rb())}function w(e,t){1&e&&s.Ob(0,"i",42)}function P(e,t){if(1&e){var n=s.Tb();s.Sb(0,"button",43),s.ec("click",(function(e){s.uc(n);var t=s.gc().$implicit,o=s.gc(3),a=s.tc(13);return o.reSend(t.id,a)})),s.Ob(1,"i",44),s.Rb()}if(2&e){var o=s.gc().$implicit,a=s.gc(3);s.jc("disabled",a.logged.id!=o.ownerId||0==o.failTotal||o.successTotal>0||"finished"!=o.status)}}var k=function(){return["admin_master"]},D=function(){return["admin"]};function I(e,t){if(1&e){var n=s.Tb();s.Sb(0,"tr",31),s.Ob(1,"td",32),s.Sb(2,"td",33),s.Bc(3,w,1,0,"i",34),s.Ob(4,"span",35),s.Rb(),s.Ob(5,"td",36),s.Sb(6,"td",37),s.Dc(7),s.Rb(),s.Sb(8,"td",38),s.Sb(9,"div",39),s.Bc(10,P,2,1,"button",40),s.Sb(11,"edit-delete-action",41),s.ec("showObjectEmitter",(function(e){return s.uc(n),s.gc(3).showObject(e)}))("editObjectEmitter",(function(e){return s.uc(n),s.gc(3).editObject(e)}))("deleteObjectEmitter",(function(e){return s.uc(n),s.gc(3).deleteObject(e)}))("unDeleteObjectEmitter",(function(e){return s.uc(n),s.gc(3).unDeleteObject(e)})),s.Rb(),s.Rb(),s.Rb(),s.Rb()}if(2&e){var o=t.$implicit,a=s.gc(3),i=s.tc(9),r=s.tc(11),c=s.tc(7);s.zb(1),s.jc("innerHtml",o.updated_at,s.vc),s.zb(2),s.jc("ngIf","finished"==o.status&&!(null==o.failMessages||""==o.failMessages)),s.zb(1),s.jc("innerHtml",a.getLabelForKey(a.status,o.status),s.vc),s.zb(1),s.jc("innerHtml",o.subject,s.vc),s.zb(2),s.Gc("",o.successTotal,"/",o.failTotal,""),s.zb(3),s.jc("ngIf",!a.auditingExclusions),s.zb(1),s.jc("auditingExclusions",a.auditingExclusions)("object",o)("logged",a.logged)("noAction",!(s.mc(14,k).includes(a.logged.category)||s.mc(15,D).includes(a.logged.category)&&a.permissions.includes("simplemail_write")))("objectDeleteConfirmation",i)("objectUnDeleteConfirmation",r)("objectDetail",c)}}function x(e,t){if(1&e){var n=s.Tb();s.Sb(0,"table",18),s.Sb(1,"thead",19),s.Sb(2,"tr"),s.Sb(3,"th",20),s.Dc(4,"\xdaltimo Re/Envio"),s.Rb(),s.Sb(5,"th",21),s.Dc(6,"Status"),s.Rb(),s.Sb(7,"th",22),s.Dc(8,"Assunto"),s.Rb(),s.Sb(9,"th",23),s.Dc(10,"Suc./Falh."),s.Rb(),s.Bc(11,E,2,0,"th",24),s.Bc(12,R,2,0,"th",25),s.Rb(),s.Rb(),s.Sb(13,"tbody"),s.Bc(14,I,12,16,"tr",26),s.Sb(15,"tr"),s.Sb(16,"td",27),s.Sb(17,"table-navigator",28),s.ec("previousPageEmitter",(function(e){return s.uc(n),s.gc(2).previousPage()}))("setPageEmitter",(function(e){return s.uc(n),s.gc(2).setPage(e)}))("nextPageEmitter",(function(e){return s.uc(n),s.gc(2).nextPage()})),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()}if(2&e){var o=s.gc(2);s.zb(11),s.jc("ngIf",!o.auditingExclusions),s.zb(1),s.jc("ngIf",o.auditingExclusions),s.zb(2),s.jc("ngForOf",o.objects)("ngForTrackBy",o.trackById),s.zb(3),s.jc("pages",o.pages)("selectedPage",o.selectedPage)("previousPageDisabled",o.previousPageDisabled)("nextPageDisabled",o.nextPageDisabled)("rowsPerPage",o.rowsPerPage)("totalPages",o.totalPages)("totalRows",o.totalRows)}}function _(e,t){if(1&e&&(s.Sb(0,"section",16),s.Bc(1,x,18,11,"table",17),s.Rb()),2&e){var n=s.gc();s.zb(1),s.jc("ngIf",n.objects)}}function T(e,t){if(1&e&&(s.Sb(0,"tr"),s.Sb(1,"th",45),s.Dc(2,"Assunto:"),s.Rb(),s.Ob(3,"td",36),s.Rb(),s.Sb(4,"tr"),s.Sb(5,"th",45),s.Dc(6,"Conte\xfado:"),s.Rb(),s.Sb(7,"td",33),s.Ob(8,"div",46),s.Rb(),s.Rb(),s.Sb(9,"tr"),s.Sb(10,"th",45),s.Dc(11,"\xdaltimo Re/Envio:"),s.Rb(),s.Sb(12,"td",33),s.Dc(13),s.Rb(),s.Rb(),s.Sb(14,"tr"),s.Sb(15,"th",45),s.Dc(16,"Status:"),s.Rb(),s.Sb(17,"td",33),s.Dc(18),s.Rb(),s.Rb(),s.Sb(19,"tr"),s.Sb(20,"th",45),s.Dc(21,"Alertas:"),s.Rb(),s.Sb(22,"td",33),s.Ob(23,"div",47),s.Rb(),s.Rb()),2&e){var n=s.gc();s.zb(3),s.jc("innerHtml",n.selectedObject.subject,s.vc),s.zb(10),s.Ec(n.selectedObject.updated_at),s.zb(5),s.Ec(n.getLabelForKey(n.status,n.selectedObject.status))}}function z(e,t){}function A(e,t){if(1&e&&(s.Sb(0,"table",56),s.Sb(1,"tbody"),s.Bc(2,z,0,0,"ng-template",57),s.Rb(),s.Rb()),2&e){var n=s.gc(2),o=s.tc(5);s.zb(2),s.jc("ngTemplateOutlet",o)("selectedObject",n.selectedObject)}}function M(e,t){if(1&e&&(s.Sb(0,"div",58),s.Dc(1),s.Rb()),2&e){var n=s.gc(2);s.zb(1),s.Fc(" ",n.selectedObject.tosAddress," ")}}function N(e,t){if(1&e&&(s.Sb(0,"div",58),s.Dc(1),s.Rb()),2&e){var n=s.gc(2);s.zb(1),s.Fc(" ",n.selectedObject.successAddress," ")}}function B(e,t){if(1&e&&(s.Sb(0,"div",58),s.Dc(1),s.Rb()),2&e){var n=s.gc(2);s.zb(1),s.Fc(" ",n.selectedObject.failAddress," ")}}var V=function(){return{value:"0",label:"Dados Gerais",title:"Dados Gerais"}},F=function(){return{value:"1",label:"Destinat\xe1rios",title:"Destinat\xe1rios do E-mail"}},L=function(){return{value:"2",label:"Sucessos",title:"Destinat\xe1rios do E-mail Envio com Sucesso"}},q=function(){return{value:"3",label:"Falhas",title:"Destinat\xe1rios do E-mail Envio sem Sucesso"}},G=function(e,t,n,o){return[e,t,n,o]};function H(e,t){if(1&e){var n=s.Tb();s.Sb(0,"div",48),s.Sb(1,"h4",49),s.Dc(2,"Detalhes do E-mail"),s.Rb(),s.Sb(3,"button",50),s.ec("click",(function(e){return s.uc(n),s.gc().showObject(null,null)})),s.Sb(4,"span",51),s.Dc(5,"\xd7"),s.Rb(),s.Rb(),s.Rb(),s.Sb(6,"div",52),s.Sb(7,"rich-tab-bar",9),s.ec("setTabEmitter",(function(e){return s.uc(n),s.gc().setModalTab(e)})),s.Rb(),s.Sb(8,"div",53),s.Bc(9,A,3,2,"table",54),s.Bc(10,M,2,1,"div",55),s.Bc(11,N,2,1,"div",55),s.Bc(12,B,2,1,"div",55),s.Rb(),s.Rb()}if(2&e){var o=s.gc();s.zb(7),s.jc("objects",s.qc(10,G,s.mc(6,V),s.mc(7,F),s.mc(8,L),s.mc(9,q)))("selectedTab",o.modalTab),s.zb(2),s.jc("ngIf",0==o.modalTab),s.zb(1),s.jc("ngIf",1==o.modalTab),s.zb(1),s.jc("ngIf",2==o.modalTab),s.zb(1),s.jc("ngIf",3==o.modalTab)}}function U(e,t){if(1&e){var n=s.Tb();s.Sb(0,"delete-confirmation",59),s.ec("confirmDeleteObjectEmitter",(function(e){return s.uc(n),s.gc().confirmDeleteObject(e)}))("cancelDataEmitter",(function(e){return s.uc(n),s.gc().cancelData()})),s.Rb()}if(2&e){var o=s.gc(),a=s.tc(5);s.jc("selectedObject",o.selectedObject)("auditingExclusions",o.auditingExclusions)("templateOutlet",a)}}function K(e,t){if(1&e){var n=s.Tb();s.Sb(0,"delete-confirmation",60),s.ec("confirmDeleteObjectEmitter",(function(e){return s.uc(n),s.gc().confirmUnDeleteObject(e)}))("cancelDataEmitter",(function(e){return s.uc(n),s.gc().cancelData()})),s.Rb()}if(2&e){var o=s.gc(),a=s.tc(5);s.jc("selectedObject",o.selectedObject)("auditingExclusions",o.auditingExclusions)("templateOutlet",a)}}function X(e,t){if(1&e){var n=s.Tb();s.Sb(0,"continue-confirmation",61),s.ec("confirmContinueProcessEmitter",(function(e){return s.uc(n),s.gc().confirmContinueProcessMessage()}))("cancelContinueProcessEmitter",(function(e){return s.uc(n),s.gc().cancelContinueProcessMessage()})),s.Rb()}}var $,J,Z=function(){return["admin_master","admin","system_auditor"]},W=(($=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){this.setInitializationServices(["simplemail"]),this.crudService=this.simpleMailService,this.sucessErrorMessages={200:"E-mail adicionado \xe0 fila de envio com sucesso.<br/>Ser\xe1 enviado assim que poss\xedvel.",201:"E-mail alterado com sucesso.",204:"E-mail exclu\xeddo com sucesso.",207:"E-mail restaurado com sucesso.",208:"E-mail exclu\xeddo [PERMANENTE] com sucesso."},this.listTitle="E-mails",this.addTitle="Adicionar E-mail para Envio",this.editTitle="Editar E-mail",this.dataForm=new a.f({subject:new a.c("",[a.r.required]),content:new a.c("",[a.r.required]),tosAddress:new a.c("",[a.r.required])}),this.status=[{value:"awaiting",label:"Aguardando Processamento"},{value:"reSend",label:"Solicitado Re-envio"},{value:"startProcessing",label:"Processando Envio(s)"},{value:"processing",label:"Processando Envio(s)"},{value:"finished",label:"Envio(s) Finalizado(s)"}],_get(_getPrototypeOf(t.prototype),"ngOnInit",this).call(this)}},{key:"afterNgOnInit",value:function(){this.parameterName="subject/tosAddress"}},{key:"ngOnDestroy",value:function(){this.status=null,_get(_getPrototypeOf(t.prototype),"ngOnDestroy",this).call(this)}},{key:"showObject",value:function(e,n){_get(_getPrototypeOf(t.prototype),"showObject",this).call(this,e,n),this.setSelectedObjectValues()}},{key:"deleteObject",value:function(e,n){_get(_getPrototypeOf(t.prototype),"deleteObject",this).call(this,e,n),this.setSelectedObjectValues()}},{key:"unDeleteObject",value:function(e,n){_get(_getPrototypeOf(t.prototype),"unDeleteObject",this).call(this,e,n),this.setSelectedObjectValues()}},{key:"setSelectedObjectValues",value:function(){var e=this,t=document.getElementById("contentText");if(null!=t){if(!this.emptyObject(this.selectedObject)){var n=document.getElementById("failMessagesText");this.emptyString(this.selectedObject.content)||(t.innerHTML=this.selectedObject.content.trim()),this.emptyString(this.selectedObject.failMessages)||(n.innerHTML=this.selectedObject.failMessages.trim())}}else setTimeout((function(){e.setSelectedObjectValues()}),100)}},{key:"setObject",value:function(e){_get(_getPrototypeOf(t.prototype),"setObject",this).call(this,e),this.dataForm.setValue({subject:e.subject,content:e.content,tosAddress:e.tosAddress})}},{key:"prepareData",value:function(e){return e.alreadyPrepared?e:(e.updated_at=this.emptyString(e.updated_at)?"----/----/-------- ----:----:----":this.dateService.dateBrWhitTime(this.dateService.dateSqltoDate(e.updated_at)),e.alreadyPrepared=!0,e)}},{key:"prepareToSaveUpdate",value:function(e){return e.content=this.stringService.unentityLtGt(e.content),e}},{key:"makeSelectSearchedItemDestaked",value:function(e,t){return e.subject=this.makeDestak(e.subject,t),e.tosAddress=this.makeDestak(e.tosAddress,t),e}},{key:"validateFormFields",value:function(){return this.errorRequired("tosAddress")&&this.addValidationMessage("Destinat\xe1rio(s) \xe9 requerido!"),this.errorRequired("subject")&&this.addValidationMessage("Assunto \xe9 requerido!"),this.errorRequired("content")&&this.addValidationMessage("Conte\xfado Mensagem \xe9 requerido!"),!this.inValidationMsgs()}},{key:"preValidateToDelete",value:function(e){return e.successTotal>0?(this.addValidationStatusMessage(403,"E-mail j\xe1 foi recebido por um dos destinat\xe1rios, n\xe3o \xe9 poss\xedvel excluir."),!1):!!["awaiting","finished","reSend"].includes(e.status)||(this.addValidationStatusMessage(403,"E-mail est\xe1 em processamento, n\xe3o \xe9 poss\xedvel excluir."),!1)}},{key:"reSend",value:function(e,t){var n=this;this.validationMessages=null,this.simpleMailService.loadFromCache(e).then((function(e){n.processObjectAndValidationResult(e,!0)&&("finished"==e.status?(n.selectedObject=e,n.continueProcessOpenMessage(t)):n.addValidationMessage("E-mail ainda em processamento. Aguarde a finaliza\xe7\xe3o para tentar o re-envio."))}))}},{key:"cancelProcess",value:function(){this.cancelReSend()}},{key:"continueProcess",value:function(){this.confirmReSend()}},{key:"cancelReSend",value:function(){this.formModal.close(),this.canceling=!1,this.setSelectedObject(null)}},{key:"confirmReSend",value:function(){var e=this;if(null!=this.formModal&&this.formModal.close(),this.canceling)return this.canceling=!1,void this.setSelectedObject(null);var t=this.selectedObject.id;this.setSelectedObject(null),this.setProcessing(!0),this.simpleMailService.load(t).then((function(n){if(e.processObjectAndValidationResult(n,!0)){var o=(n=e.prepareData(n)).status;n.status="reSend",n.ownerId=parseInt("0"+e.storageService.localStorageGetItem("_ownerId_"+e.getAppId())),n._token=e.storageService.localStorageGetItem("_token_"+e.getAppId()),e.simpleMailService.update(t,n).then((function(t){e.setProcessing(!1),e.processObjectAndValidationResult(t,!0)?(n.failTotal=0,n.failAddress=""):n.status=o}))}else e.setProcessing(!1)}))}}]),t}(c.a)).\u0275fac=function(e){return Y(e||$)},$.\u0275cmp=s.Hb({type:$,selectors:[["simplemail-root"]],features:[s.wb],decls:14,vars:11,consts:[[3,"title","editing","searchForm","auditingExclusions","enabledAuditList","disabledAddNew","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],[3,"ngIf","ngIfElse"],["listObjects",""],["selectedObjectTemplate",""],["objectDetail",""],["objectDeleteConfirmation",""],["objectUnDeleteConfirmation",""],["mailResend",""],["aria-label","Formul\xe1rio de envio de email pela aplica\xe7\xe3o",1,"dataForm"],[3,"objects","selectedTab","setTabEmitter"],[3,"formGroup","ngSubmit"],["rowss","7","forMail","true","label","Destinat\xe1rio(s) (*) - Individuais. Separe os, com v\xedrgula (,)","titlee","Destinat\xe1rio(s) Individuais. Separe os, com v\xedrgula (,)","formControlName","tosAddress","widthPerc","100","ngDefaultControl","",3,"formGroup"],["label","Assunto (*)","titlee","Assunto","maxchars","200","formControlName","subject","widthPerc","100","ngDefaultControl","",3,"formGroup"],["formControlName","content","label","Conte\xfado Mensagem (*)","titlee","Conte\xfado Mensagem","ngDefaultControl","",3,"formGroup"],[1,"clear"],[3,"validationMessages","processValidation","cancelDataEmitter"],["aria-label","lista dos emails enviados e para envio"],["class","table","mdbTable","",4,"ngIf"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col",2,"width","8.8em"],["scope","col",2,"width","6.5em"],["scope","col",2,"width","auto"],["scope","col","title","Sucessos/Falhas","aria-label","Sucessos/Falhas",2,"width","6em"],["scope","col","style","width: 9em;",4,"ngIf"],["scope","col","style","width: 5em;",4,"ngIf"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","5",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","totalPages","totalRows","previousPageEmitter","setPageEmitter","nextPageEmitter"],["scope","col",2,"width","9em"],["scope","col",2,"width","5em"],["mdbTableCol",""],[1,"number",3,"innerHtml"],[1,"text"],["class","fas fa-exclamation-circle","style","color: #d27806; margin-right: .3em;","placement","top","ngbTooltip","Envio finalizado com Mensagens de alerta: Clique no \xedcone [i] Detalhes",4,"ngIf"],[3,"innerHtml"],[1,"text",3,"innerHtml"],[1,"number"],[1,"actions"],[1,"buttons"],["class","btn btn-primary clickable","type","button","placement","left","ngbTooltip","Re-enviar para os falhados","aria-label","Re-enviar para os falhados",3,"disabled","click",4,"ngIf"],["noEdit","true",3,"auditingExclusions","object","logged","noAction","objectDeleteConfirmation","objectUnDeleteConfirmation","objectDetail","showObjectEmitter","editObjectEmitter","deleteObjectEmitter","unDeleteObjectEmitter"],["placement","top","ngbTooltip","Envio finalizado com Mensagens de alerta: Clique no \xedcone [i] Detalhes",1,"fas","fa-exclamation-circle",2,"color","#d27806","margin-right",".3em"],["type","button","placement","left","ngbTooltip","Re-enviar para os falhados","aria-label","Re-enviar para os falhados",1,"btn","btn-primary","clickable",3,"disabled","click"],[1,"fas","fa-paper-plane"],["scope","row",1,"text"],["id","contentText"],["id","failMessagesText"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[2,"height","22em","overflow-x","hidden","overflow-y","auto"],["class","table tableInfo",4,"ngIf"],["style","word-wrap: break-word; font-size: .85em;",4,"ngIf"],[1,"table","tableInfo"],[3,"ngTemplateOutlet","selectedObject"],[2,"word-wrap","break-word","font-size",".85em"],["label","E-mail",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["label","E-mail","redo","true",3,"selectedObject","auditingExclusions","templateOutlet","confirmDeleteObjectEmitter","cancelDataEmitter"],["titlee","Continuar Com Processo de RE-ENVIO do E-mail?","content","Ao continuar, o processo n\xe3o poder\xe1 ser interrompido.\n\t                                Ser\xe1 efetuado o re-envio apenas para os destinat\xe1rios\n\t  \t\t\t\t\t            que ainda n\xe3o o receberam.",3,"confirmContinueProcessEmitter","cancelContinueProcessEmitter"]],template:function(e,t){if(1&e&&(s.Sb(0,"form-toolbar",0),s.ec("onSearchFormSubmitEmitter",(function(e){return t.onSearchFormSubmit()}))("listDataEmitter",(function(e){return t.listData()}))("listDataNoCacheEmitter",(function(e){return t.listDataNoCache()}))("auditListEmitter",(function(e){return t.auditList()}))("normalListEmitter",(function(e){return t.normalList()}))("addObjectEmitter",(function(e){return t.addObject()})),s.Rb(),s.Bc(1,O,11,19,"ng-template",1),s.Bc(2,_,2,1,"ng-template",null,2,s.Cc),s.Bc(4,T,24,3,"ng-template",null,3,s.Cc),s.Bc(6,H,13,15,"ng-template",null,4,s.Cc),s.Bc(8,U,1,3,"ng-template",null,5,s.Cc),s.Bc(10,K,1,3,"ng-template",null,6,s.Cc),s.Bc(12,X,1,0,"ng-template",null,7,s.Cc)),2&e){var n=s.tc(3);s.jc("title",t.title)("editing",t.editing)("searchForm",t.searchForm)("auditingExclusions",t.auditingExclusions)("enabledAuditList",s.mc(8,Z).includes(t.logged.category))("disabledAddNew",!(s.mc(9,k).includes(t.logged.category)||s.mc(10,D).includes(t.logged.category)&&t.permissions.includes("simplemail_write"))),s.zb(1),s.jc("ngIf",t.editing)("ngIfElse",n)}},directives:[l.a,o.j,u.a,a.t,a.n,a.g,d.a,a.m,a.e,a.b,b.a,f.a,o.i,m.a,g.a,i.g,o.l,p.a,j],encapsulation:2}),$),Y=s.Ub(W),Q=[{path:"",component:W}],ee=((J=function e(){_classCallCheck(this,e)}).\u0275mod=s.Lb({type:J}),J.\u0275inj=s.Kb({factory:function(e){return new(e||J)},imports:[[r.c.forChild(Q)],r.c]}),J),te=n("kS8M");n.d(t,"SimpleMailModule",(function(){return oe}));var ne,oe=((ne=function e(){_classCallCheck(this,e)}).\u0275mod=s.Lb({type:ne}),ne.\u0275inj=s.Kb({factory:function(e){return new(e||ne)},imports:[[o.b,a.h,a.p,i.f,ee,te.a]]}),ne)}}]);