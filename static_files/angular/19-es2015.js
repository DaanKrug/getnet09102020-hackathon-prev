(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"wU4/":function(t,e,a){"use strict";a.r(e);var i=a("ofXK"),o=a("3Pt+"),r=a("1kSV"),n=a("tyNb"),s=a("kYp3"),c=a("fXoL"),l=a("zT7k"),b=a("fcMv");function d(t,e){1&t&&c.Pb(0,"div")}function m(t,e){if(1&t&&c.Pb(0,"div",24),2&t){const t=c.hc().$implicit;c.kc("innerHtml",t.tto,c.xc)}}function u(t,e){if(1&t&&(c.Tb(0,"tr",16),c.Tb(1,"td",17),c.Pb(2,"span",18),c.Pb(3,"br"),c.Pb(4,"span",18),c.Pb(5,"br"),c.Gc(6," <"),c.Pb(7,"span",18),c.Gc(8,"> "),c.Sb(),c.Tb(9,"td",17),c.Pb(10,"div",18),c.Pb(11,"div",19),c.Sb(),c.Tb(12,"td",20),c.Pb(13,"div",21),c.Ec(14,d,1,0,"div",22),c.Ec(15,m,1,1,"div",23),c.Sb(),c.Sb()),2&t){const t=e.$implicit;c.zb(2),c.kc("innerHtml",t.created_at,c.xc),c.zb(2),c.kc("innerHtml",t.userName,c.xc),c.zb(3),c.kc("innerHtml",t.userEmail,c.xc),c.zb(3),c.kc("innerHtml",t.operation,c.xc),c.zb(1),c.kc("innerHtml",t.objTitle,c.xc),c.zb(2),c.kc("innerHtml",t.ffrom,c.xc),c.zb(1),c.kc("ngIf",t.tto),c.zb(1),c.kc("ngIf",t.tto)}}function g(t,e){if(1&t){const t=c.Ub();c.Tb(0,"table",4),c.Tb(1,"thead",5),c.Tb(2,"tr"),c.Tb(3,"th",6),c.Gc(4,"Data/Usu\xe1rio"),c.Sb(),c.Tb(5,"th",7),c.Gc(6,"A\xe7\xe3o"),c.Sb(),c.Tb(7,"th",8),c.Gc(8," Registro/Reg. Altera\xe7\xe3o "),c.Sb(),c.Sb(),c.Sb(),c.Tb(9,"tbody",9),c.Ec(10,u,16,8,"tr",10),c.Tb(11,"tr"),c.Tb(12,"td",11),c.Gc(13," \xa0\xa0\xa0 "),c.Tb(14,"span",12),c.Gc(15,"Antes"),c.Sb(),c.Gc(16," \xa0\xa0\xa0 "),c.Tb(17,"span",13),c.Gc(18,"Depois (*)"),c.Sb(),c.Gc(19," - * Quando se trata de opera\xe7\xe3o do tipo que realiza altera\xe7\xe3o nos dados. "),c.Sb(),c.Sb(),c.Tb(20,"tr"),c.Tb(21,"td",14),c.Tb(22,"table-navigator",15),c.fc("previousPageEmitter",(function(e){return c.wc(t),c.hc().previousPage()}))("setPageEmitter",(function(e){return c.wc(t),c.hc().setPage(e)}))("nextPageEmitter",(function(e){return c.wc(t),c.hc().nextPage()})),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()}if(2&t){const t=c.hc();c.zb(10),c.kc("ngForOf",t.objects)("ngForTrackBy",t.trackById),c.zb(12),c.kc("pages",t.pages)("selectedPage",t.selectedPage)("previousPageDisabled",t.previousPageDisabled)("nextPageDisabled",t.nextPageDisabled)("rowsPerPage",t.rowsPerPage)("totalPages",t.totalPages)("totalRows",t.totalRows)}}let p=(()=>{class t extends s.a{ngOnInit(){this.setInitializationServices(["applog"]),this.crudService=this.appLogService,this.listTitle="Logs",super.ngOnInit()}afterNgOnInit(){this.parameterName="userName/userEmail/operation/objTitle/ffrom/tto"}ngOnDestroy(){this.counter=null,super.ngOnDestroy()}makeSelectSearchedItemDestaked(t,e){return t.userName=this.makeDestak(t.userName,e),t.userEmail=this.makeDestak(t.userEmail,e),t.operation=this.makeDestak(t.operation,e),t.objTitle=this.makeDestak(t.objTitle,e),t.ffrom=this.makeDestak(t.ffrom,e),t.tto=this.makeDestak(t.tto,e),t}}return t.\u0275fac=function(e){return f(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["applog-root"]],features:[c.wb],decls:4,vars:6,consts:[[3,"title","editing","searchForm","enabledAuditList","disabledAddNew","onSearchFormSubmitEmitter","listDataEmitter","listDataNoCacheEmitter","auditListEmitter","normalListEmitter","addObjectEmitter"],["aria-label","lista de logs da aplica\xe7\xe3o"],["class","table","mdbTable","",4,"ngIf"],[1,"clear"],["mdbTable","",1,"table"],[1,"black","white-text"],["scope","col","title","Usu\xe1rio + Data e Hora","aria-label","Data e hora, com usu\xe1rio na linha abaixo",2,"width","11em"],["scope","col","aria-label","A\xe7\xe3o realizada pelo usu\xe1rio",2,"width","6.6em"],["scope","col","title","Registro + Registro com Altera\xe7\xe3o","aria-label","Registro antes da a\xe7\xe3o, ent\xe3o os caracteres: '=>' \n                                e depois o registro ap\xf3s a a\xe7\xe3o realizada",2,"width","auto"],[2,"font-size","0.8rem"],["mdbTableCol","",4,"ngFor","ngForOf","ngForTrackBy"],["colspan","3",1,"navigationBottom",2,"text-align","left"],[2,"background-color","#a9e6f9"],[2,"background-color","#f7e396"],["colspan","3",1,"navigationBottom"],[3,"pages","selectedPage","previousPageDisabled","nextPageDisabled","rowsPerPage","totalPages","totalRows","previousPageEmitter","setPageEmitter","nextPageEmitter"],["mdbTableCol",""],[1,"text",2,"padding","0.2em 0.1em"],[3,"innerHtml"],[2,"font-weight","600",3,"innerHtml"],[1,"text",2,"padding","0"],[2,"background-color","#a9e6f9","padding","0.2em 0.1em","text-align","justify",3,"innerHtml"],[4,"ngIf"],["style","background-color: #f7e396; padding: 0.2em 0.1em; text-align: justify;",3,"innerHtml",4,"ngIf"],[2,"background-color","#f7e396","padding","0.2em 0.1em","text-align","justify",3,"innerHtml"]],template:function(t,e){1&t&&(c.Tb(0,"form-toolbar",0),c.fc("onSearchFormSubmitEmitter",(function(t){return e.onSearchFormSubmit()}))("listDataEmitter",(function(t){return e.listData()}))("listDataNoCacheEmitter",(function(t){return e.listDataNoCache()}))("auditListEmitter",(function(t){return e.auditList()}))("normalListEmitter",(function(t){return e.normalList()}))("addObjectEmitter",(function(t){return e.addObject()})),c.Sb(),c.Tb(1,"section",1),c.Ec(2,g,23,9,"table",2),c.Pb(3,"div",3),c.Sb()),2&t&&(c.kc("title",e.title)("editing",e.editing)("searchForm",e.searchForm)("enabledAuditList",!1)("disabledAddNew",!0),c.zb(2),c.kc("ngIf",e.objects))},directives:[l.a,i.j,i.i,b.a],encapsulation:2}),t})();const f=c.Vb(p),h=[{path:"",component:p}];let k=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[n.c.forChild(h)],n.c]}),t})();var P=a("kS8M");a.d(e,"AppLogModule",(function(){return S}));let S=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[i.b,o.h,o.q,r.f,k,P.a]]}),t})()}}]);