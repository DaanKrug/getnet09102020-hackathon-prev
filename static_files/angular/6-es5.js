function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(c){i=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _get(t,e,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=_superPropBase(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(r):i.value}})(t,e,r||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ZMR0:function(t,e,r){"use strict";r.d(e,"a",(function(){return C}));var n=r("fXoL"),i=r("1dEi"),a=r("3Pt+"),o=r("ofXK");function s(t,e){1&t&&n.Ob(0,"div",3)}function c(t,e){1&t&&n.Ob(0,"div",4)}function l(t,e){if(1&t&&(n.Sb(0,"div"),n.Sb(1,"label",12),n.Dc(2),n.Rb(),n.Rb()),2&t){var r=n.gc(2);n.zb(1),n.kc("for",r.id),n.kc("title",r.titlee),n.Ab("aria-label",r.titlee),n.zb(1),n.Ec(r.label)}}function h(t,e){if(1&t){var r=n.Tb();n.Sb(0,"input",13),n.ec("change",(function(t){return n.uc(r),n.gc(2).onChangeValue(t)}))("blur",(function(t){return n.uc(r),n.gc(2).onChangeValue(t)})),n.Rb()}if(2&t){var i=n.gc(2);n.Cb("form-control ",i.className,""),n.kc("id",i.id),n.kc("maxlength",i.maxchars>0?i.maxchars:250),n.jc("formControl",i.ngControl.control)("placeholder",i.placeholderr)}}function f(t,e){if(1&t){var r=n.Tb();n.Sb(0,"input",14),n.ec("change",(function(t){return n.uc(r),n.gc(2).onChangeValue(t)}))("blur",(function(t){return n.uc(r),n.gc(2).onChangeValue(t)})),n.Rb()}if(2&t){var i=n.gc(2);n.Cb("form-control ",i.className,""),n.kc("id",i.id),n.kc("maxlength",i.maxchars>0?i.maxchars:20),n.kc("mask",i.maskk),n.jc("dropSpecialCharacters",!i.preserveSpecialCharacters)("formControl",i.ngControl.control)("placeholder",i.placeholderr)}}function u(t,e){if(1&t){var r=n.Tb();n.Sb(0,"input",15),n.ec("change",(function(t){return n.uc(r),n.gc(2).onChangeValue(t)}))("keyup",(function(t){return n.uc(r),n.gc(2).onChangeValue(t)})),n.Rb()}if(2&t){var i=n.gc(2);n.Cb("form-control ",i.className,""),n.kc("id",i.id),n.kc("maxlength",i.maxchars>0?i.maxchars:250),n.kc("mask",i.maskk),n.jc("dropSpecialCharacters",!i.preserveSpecialCharacters)("formControl",i.ngControl.control)("placeholder",i.placeholderr)}}function p(t,e){if(1&t){var r=n.Tb();n.Sb(0,"textarea",16),n.ec("change",(function(t){return n.uc(r),n.gc(2).onChangeValue(t)}))("keyup",(function(t){return n.uc(r),n.gc(2).onChangeValue(t)})),n.Dc(1,"\t"),n.Rb()}if(2&t){var i=n.gc(2);n.Cb("form-control ",i.className,""),n.kc("id",i.id),n.kc("rows",i.rowss),n.kc("maxlength",i.maxchars>0?i.maxchars:250*i.rowss),n.jc("formControl",i.ngControl.control)("placeholder",i.placeholderr)}}var d=function(t){return{width:t}};function g(t,e){if(1&t&&(n.Sb(0,"div",5),n.Bc(1,l,3,4,"div",6),n.Bc(2,h,1,7,"input",7),n.Bc(3,f,1,9,"input",8),n.Bc(4,u,1,9,"input",9),n.Bc(5,p,2,8,"textarea",10),n.Ob(6,"div",11),n.Rb()),2&t){var r=n.gc();n.jc("ngStyle",n.nc(6,d,r.widthPerc+"%")),n.zb(1),n.jc("ngIf",null!=r.label),n.zb(1),n.jc("ngIf",r.forPassword),n.zb(1),n.jc("ngIf",!r.forPassword&&r.forNumber),n.zb(1),n.jc("ngIf",!r.forPassword&&!r.forNumber&&1==r.rowss),n.zb(1),n.jc("ngIf",!r.forPassword&&!r.forNumber&&r.rowss>1)}}function m(t,e){if(1&t&&(n.Sb(0,"div"),n.Sb(1,"label",12),n.Dc(2),n.Rb(),n.Rb()),2&t){var r=n.gc(2);n.zb(1),n.kc("for",r.id),n.kc("title",r.titlee),n.Ab("aria-label",r.titlee),n.zb(1),n.Ec(r.label)}}function b(t,e){if(1&t&&n.Ob(0,"input",21),2&t){var r=n.gc(2);n.Cb("form-control ",r.className,""),n.kc("id",r.id),n.jc("formControl",r.ngControl.control)}}function y(t,e){if(1&t&&n.Ob(0,"input",22),2&t){var r=n.gc(2);n.Cb("form-control ",r.className,""),n.kc("id",r.id),n.jc("formControl",r.ngControl.control)}}function v(t,e){if(1&t&&n.Ob(0,"input",23),2&t){var r=n.gc(2);n.Cb("form-control ",r.className,""),n.kc("id",r.id),n.jc("formControl",r.ngControl.control)}}function k(t,e){if(1&t&&(n.Sb(0,"textarea",24),n.Dc(1,"\t"),n.Rb()),2&t){var r=n.gc(2);n.Cb("form-control ",r.className,""),n.kc("id",r.id),n.kc("rows",r.rowss),n.jc("formControl",r.ngControl.control)}}function x(t,e){if(1&t&&(n.Sb(0,"div",5),n.Bc(1,m,3,4,"div",6),n.Bc(2,b,1,5,"input",17),n.Bc(3,y,1,5,"input",18),n.Bc(4,v,1,5,"input",19),n.Bc(5,k,2,6,"textarea",20),n.Ob(6,"div",11),n.Rb()),2&t){var r=n.gc();n.jc("ngStyle",n.nc(6,d,r.widthPerc+"%")),n.zb(1),n.jc("ngIf",null!=r.label),n.zb(1),n.jc("ngIf",r.forPassword),n.zb(1),n.jc("ngIf",!r.forPassword&&r.forNumber),n.zb(1),n.jc("ngIf",!r.forPassword&&!r.forNumber&&1==r.rowss),n.zb(1),n.jc("ngIf",!r.forPassword&&!r.forNumber&&r.rowss>1)}}var C=function(){var t=function(t){function e(t){var r;return _classCallCheck(this,e),(r=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t))).ngControl=t,r.valueChangedEmitter=new n.n,r}return _inherits(e,t),_createClass(e,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(e.prototype),"ngOnInit",this).call(this)}},{key:"ngOnDestroy",value:function(){_get(_getPrototypeOf(e.prototype),"ngOnDestroy",this).call(this),this.forNumber=null,this.forAlphaNum=null,this.forAlphaNumName=null,this.forAlpha=null,this.forMail=null,this.forPassword=null,this.valueChangedEmitter=null}},{key:"onChangeValue",value:function(t){var e=t.target.value.trim();this.forNumber?this.adjustInputNumberValueAfterChange(e):this.forAlphaNum?this.adjustInputAlphaNumValueAfterChange(e):this.forAlphaNumName?this.adjustInputAlphaNumNameValueAfterChange(e):this.forAlpha?this.adjustInputAlphaValueAfterChange(e):this.forMail?this.adjustInputTextMailAddressValueAfterChange(e):this.forPassword?this.valueChangedEmitter.emit(e):this.adjustInputTextValueAfterChange(e)}}]),e}(i.a);return t.\u0275fac=function(e){return new(e||t)(n.Nb(a.l))},t.\u0275cmp=n.Hb({type:t,selectors:[["rich-input-text"]],inputs:{forNumber:"forNumber",forAlphaNum:"forAlphaNum",forAlphaNumName:"forAlphaNumName",forAlpha:"forAlpha",forMail:"forMail",forPassword:"forPassword"},outputs:{valueChangedEmitter:"valueChangedEmitter"},features:[n.wb],decls:4,vars:4,consts:[["class","clear","style","margin-bottom: .3em;",4,"ngIf"],["class","clear","style","margin-bottom: .7em;",4,"ngIf"],["class","field",3,"ngStyle",4,"ngIf"],[1,"clear",2,"margin-bottom",".3em"],[1,"clear",2,"margin-bottom",".7em"],[1,"field",3,"ngStyle"],[4,"ngIf"],["type","password","style","width: 100% !important;","autocomplete","off",3,"id","maxlength","class","formControl","placeholder","change","blur",4,"ngIf"],["type","text","style","width: 100% !important; text-align: right;","autocomplete","off",3,"id","maxlength","class","mask","dropSpecialCharacters","formControl","placeholder","change","blur",4,"ngIf"],["type","text","style","width: 100% !important;","autocomplete","off",3,"id","maxlength","class","mask","dropSpecialCharacters","formControl","placeholder","change","keyup",4,"ngIf"],["style","width: 100% !important;","autocomplete","off",3,"id","rows","maxlength","class","formControl","placeholder","change","keyup",4,"ngIf"],[1,"clear"],[3,"for","title"],["type","password","autocomplete","off",2,"width","100% !important",3,"id","maxlength","formControl","placeholder","change","blur"],["type","text","autocomplete","off",2,"width","100% !important","text-align","right",3,"id","maxlength","mask","dropSpecialCharacters","formControl","placeholder","change","blur"],["type","text","autocomplete","off",2,"width","100% !important",3,"id","maxlength","mask","dropSpecialCharacters","formControl","placeholder","change","keyup"],["autocomplete","off",2,"width","100% !important",3,"id","rows","maxlength","formControl","placeholder","change","keyup"],["type","password","style","width: 100% !important;","readonly","true",3,"id","class","formControl",4,"ngIf"],["type","text","style","width: 100% !important; text-align: right;","readonly","true",3,"id","class","formControl",4,"ngIf"],["type","text","style","width: 100% !important;","readonly","true",3,"id","class","formControl",4,"ngIf"],["style","width: 100% !important;","readonly","true",3,"id","rows","class","formControl",4,"ngIf"],["type","password","readonly","true",2,"width","100% !important",3,"id","formControl"],["type","text","readonly","true",2,"width","100% !important","text-align","right",3,"id","formControl"],["type","text","readonly","true",2,"width","100% !important",3,"id","formControl"],["readonly","true",2,"width","100% !important",3,"id","rows","formControl"]],template:function(t,e){1&t&&(n.Bc(0,s,1,0,"div",0),n.Bc(1,c,1,0,"div",1),n.Bc(2,g,7,8,"div",2),n.Bc(3,x,7,8,"div",2)),2&t&&(n.jc("ngIf",e.breakBefore&&!e.breakBeforeDouble&&!e.noRender),n.zb(1),n.jc("ngIf",e.breakBeforeDouble&&!e.noRender),n.zb(1),n.jc("ngIf",!e.noRender&&!e.onlyRead),n.zb(1),n.jc("ngIf",!e.noRender&&e.onlyRead))},directives:[o.j,o.k,a.b,a.i,a.m,a.d],encapsulation:2}),t}()},mrSG:function(t,e,r){"use strict";function n(t,e,r,n){return new(r||(r=Promise))((function(i,a){function o(t){try{c(n.next(t))}catch(e){a(e)}}function s(t){try{c(n.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,s)}c((n=n.apply(t,e||[])).next())}))}r.d(e,"a",(function(){return n}))},tmjD:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r("fXoL");r("mrSG"),r("3Pt+"),r("ofXK");var i=new n.q("config"),a=new n.q("NEW_CONFIG"),o=new n.q("INITIAL_CONFIG"),s={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:".",clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},c=function(){var t=function(){function t(e){var r=this;_classCallCheck(this,t),this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=function(t,e,n,i){var a=t.split(n),o=a.length>1?"".concat(n).concat(a[1]):"",s=a[0],c=r.separatorLimit.replace(/\s/g,"");c&&+c&&(s="-"===s[0]?"-".concat(s.slice(1,s.length).slice(0,c.length)):s.slice(0,c.length));for(var l=/(\d+)(\d{3})/;l.test(s);)s=s.replace(l,"$1"+e+"$2");return void 0===i?s+o:0===i?s:s+o.substr(0,i+1)},this.percentage=function(t){return Number(t)>=0&&Number(t)<=100},this.getPrecision=function(t){var e=t.split(".");return e.length>1?Number(e[e.length-1]):1/0},this.checkInputPrecision=function(t,e,n){if(e<1/0){var i=new RegExp(r._charToRegExpExpression(n)+"\\d{".concat(e,"}.*$")),a=t.match(i);a&&a[0].length-1>e?t=t.substring(0,t.length-1):0===e&&t.endsWith(n)&&(t=t.substring(0,t.length-1))}return t},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit}return _createClass(t,[{key:"applyMaskWithPattern",value:function(t,e){var r=_slicedToArray(e,2),n=r[0],i=r[1];return this.customPattern=i,this.applyMask(t,n)}},{key:"applyMask",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};if(null==t||void 0===e)return"";var i=0,a="",o=!1,s=!1,c=1,l=!1;t.slice(0,this.prefix.length)===this.prefix&&(t=t.slice(this.prefix.length,t.length)),this.suffix&&t.endsWith(this.suffix)&&(t=t.slice(0,t.length-this.suffix.length));var h=t.toString().split("");if("IP"===e&&(this.ipError=!!(h.filter((function(t){return"."===t})).length<3&&h.length<7),e="099.099.099.099"),e.startsWith("percent")){if(t.match("[a-z]|[A-Z]")||t.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)){t=this._stripToDecimal(t);var f=this.getPrecision(e);t=this.checkInputPrecision(t,f,".")}if(t.indexOf(".")>0&&!this.percentage(t.substring(0,t.indexOf(".")))){var u=t.substring(0,t.indexOf(".")-1);t="".concat(u).concat(t.substring(t.indexOf("."),t.length))}a=this.percentage(t)?t:t.substring(0,t.length-1)}else if(e.startsWith("separator")){(t.match("[w\u0430-\u044f\u0410-\u042f]")||t.match("[\u0401\u0451\u0410-\u044f]")||t.match("[a-z]|[A-Z]")||t.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||t.match("[^A-Za-z0-9,]"))&&(t=this._stripToDecimal(t)),t=t.length>1&&"0"===t[0]&&t[1]!==this.decimalMarker?t.slice(1,t.length):t;var p=this._charToRegExpExpression(this.thousandSeparator),d=this._charToRegExpExpression(this.decimalMarker),g='@#!$%^&*()_+|~=`{}\\[\\]:\\s,";<>?\\/'.replace(p,"").replace(d,""),m=new RegExp("["+g+"]");t.match(m)&&(t=t.substring(0,t.length-1));var b=this.getPrecision(e),y=(t=this.checkInputPrecision(t,b,this.decimalMarker)).replace(new RegExp(p,"g"),""),v=(a=this._formatWithSeparators(y,this.thousandSeparator,this.decimalMarker,b)).indexOf(",")-t.indexOf(","),k=a.length-t.length;if(k>0&&","!==a[r]){s=!0;var x=0;do{this._shift.add(r+x),x++}while(x<k)}else 0!==v&&r>0&&!(a.indexOf(",")>=r&&r>3)||!(a.indexOf(".")>=r&&r>3)&&k<=0?(this._shift.clear(),s=!0,c=k,this._shift.add(r+=k)):this._shift.clear()}else for(var C=0,w=h[0];C<h.length&&i!==e.length;w=h[++C])if(this._checkSymbolMask(w,e[i])&&"?"===e[i+1])a+=w,i+=2;else if("*"===e[i+1]&&o&&this._checkSymbolMask(w,e[i+2]))a+=w,i+=3,o=!1;else if(this._checkSymbolMask(w,e[i])&&"*"===e[i+1])a+=w,o=!0;else if("?"===e[i+1]&&this._checkSymbolMask(w,e[i+2]))a+=w,i+=3;else if(this._checkSymbolMask(w,e[i])||this.hiddenInput&&this.maskAvailablePatterns[e[i]]&&this.maskAvailablePatterns[e[i]].symbol===w){if("H"===e[i]&&Number(w)>2){i+=1;var _=/[*?]/g.test(e.slice(0,i))?h.length:i;this._shift.add(_+this.prefix.length||0),C--;continue}if("h"===e[i]&&"2"===a&&Number(w)>3){i+=1,C--;continue}if("m"===e[i]&&Number(w)>5){i+=1;var N=/[*?]/g.test(e.slice(0,i))?h.length:i;this._shift.add(N+this.prefix.length||0),C--;continue}if("s"===e[i]&&Number(w)>5){i+=1;var P=/[*?]/g.test(e.slice(0,i))?h.length:i;this._shift.add(P+this.prefix.length||0),C--;continue}var S=31;if("d"===e[i]&&(Number(t.slice(i,i+2))>S||"/"===t[i+1])){i+=1;var I=/[*?]/g.test(e.slice(0,i))?h.length:i;this._shift.add(I+this.prefix.length||0),C--;continue}if("M"===e[i]){var O=12,A=0===i&&(Number(w)>2||Number(t.slice(i,i+2))>O||"/"===t[i+1]),j=t.slice(i-3,i-1).includes("/")&&("/"===t[i-2]&&Number(t.slice(i-1,i+1))>O&&"/"!==t[i]||"/"===t[i]||"/"===t[i-3]&&Number(t.slice(i-2,i))>O&&"/"!==t[i-1]||"/"===t[i-1]),E=Number(t.slice(i-3,i-1))<=S&&!t.slice(i-3,i-1).includes("/")&&"/"===t[i-1]&&(Number(t.slice(i,i+2))>O||"/"===t[i+1]),R=Number(t.slice(i-3,i-1))>S&&!t.slice(i-3,i-1).includes("/")&&!t.slice(i-2,i).includes("/")&&Number(t.slice(i-2,i))>O,M=Number(t.slice(i-3,i-1))<=S&&!t.slice(i-3,i-1).includes("/")&&"/"!==t[i-1]&&Number(t.slice(i-1,i+1))>O;if(A||j||E||R||M){i+=1;var T=/[*?]/g.test(e.slice(0,i))?h.length:i;this._shift.add(T+this.prefix.length||0),C--;continue}}a+=w,i++}else if(-1!==this.maskSpecialCharacters.indexOf(e[i])){a+=e[i],i++;var z=/[*?]/g.test(e.slice(0,i))?h.length:i;this._shift.add(z+this.prefix.length||0),C--}else this.maskSpecialCharacters.indexOf(w)>-1&&this.maskAvailablePatterns[e[i]]&&this.maskAvailablePatterns[e[i]].optional?(h[i]&&"099.099.099.099"!==e&&(a+=h[i]),i++,C--):"*"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(w)===this.maskExpression[i+2]&&o?(i+=3,a+=w):"?"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(w)===this.maskExpression[i+2]&&o?(i+=3,a+=w):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(w)<0&&w!==this.placeHolderCharacter&&(l=!0);a.length+1===e.length&&-1!==this.maskSpecialCharacters.indexOf(e[e.length-1])&&(a+=e[e.length-1]);for(var B=r+1;this._shift.has(B);)c++,B++;var V=this._shift.has(r)?c:0;l&&V--,n(V,s),c<0&&this._shift.clear();var D="".concat(this.prefix).concat(a).concat(this.suffix);return 0===a.length&&(D="".concat(this.prefix).concat(a)),D}},{key:"_findSpecialChar",value:function(t){return this.maskSpecialCharacters.find((function(e){return e===t}))}},{key:"_checkSymbolMask",value:function(t,e){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[e]&&this.maskAvailablePatterns[e].pattern&&this.maskAvailablePatterns[e].pattern.test(t)}},{key:"_stripToDecimal",value:function(t){return t.split("").filter((function(t,e){return t.match("^-?\\d")||"."===t||","===t||"-"===t&&0===e})).join("")}},{key:"_charToRegExpExpression",value:function(t){return" "===t?"\\s":"[\\^$.|?*+()".indexOf(t)>=0?"\\"+t:t}}]),t}();return t.\u0275fac=function(e){return new(e||t)(n.ac(i))},t.\u0275prov=n.Jb({token:t,factory:t.\u0275fac}),t}(),l=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"forRoot",value:function(e){return{ngModule:t,providers:[{provide:a,useValue:e},{provide:o,useValue:s},{provide:i,useFactory:h,deps:[o,a]},c]}}},{key:"forChild",value:function(e){return{ngModule:t}}}]),t}();return t.\u0275mod=n.Lb({type:t}),t.\u0275inj=n.Kb({factory:function(e){return new(e||t)}}),t}();function h(t,e){return Object.assign({},t,e instanceof Function?e():e)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self}}]);