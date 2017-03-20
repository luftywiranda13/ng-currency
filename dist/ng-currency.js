!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("angular")):"function"==typeof define&&define.amd?define("ng-currency",["angular"],n):"object"==typeof exports?exports["ng-currency"]=n(require("angular")):e["ng-currency"]=n(e.angular)}(this,function(e){return function(e){function n(t){if(r[t])return r[t].exports;var u=r[t]={i:t,l:!1,exports:{}};return e[t].call(u.exports,u,u.exports,n),u.l=!0,u.exports}var r={};return n.m=e,n.c=r,n.i=function(e){return e},n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=3)}([function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),o=function(){function e(){t(this,e),this._defaults={fraction:2,hardCap:!1,min:void 0,max:void 0,currencySymbol:void 0}}return u(e,[{key:"$get",value:function(){var e=this;return{get defaults(){return e.defaults}}}},{key:"defaults",get:function(){return this._defaults},set:function(e){this._defaults=e}}]),e}();n.default=o},function(e,n,r){"use strict";function t(e,n,r){return{require:"ngModel",link:function(t,u,o,i){function a(){if(O){var e=void 0,n=void 0,r=void 0;if(i.$options&&(i.$options.getOption?(n=i.$options.getOption("updateOn"),r=i.$options.getOption("debounce")):(n=i.$options.updateOn,r=i.$options.debounce)),"blur"===n||r){e=i.$viewValue;for(var t=i.$parsers.length-1;t>=0;t--)e=i.$parsers[t](e)}else e=i.$$rawModelValue;for(var u=i.$formatters.length-1;u>=0;u--)e=i.$formatters[u](e);i.$viewValue=e,i.$render()}}function c(){if(i.$validate(),O){var e=f(i.$$rawModelValue);e!==i.$$rawModelValue&&(i.$setViewValue(e.toFixed(y)),i.$commitViewValue(),a())}}function f(e){return $&&(void 0!==b&&e>b?e=b:void 0!==g&&e<g&&(e=g)),e}function l(e){return RegExp("\\d|\\-|\\"+e,"g")}function d(e){return RegExp("\\-{0,1}((\\"+e+")|([0-9]{1,}\\"+e+"?))&?[0-9]{0,"+y+"}","g")}function s(r){r=String(r);var t=n.NUMBER_FORMATS.DECIMAL_SEP,u=null;r.indexOf(n.NUMBER_FORMATS.DECIMAL_SEP)===-1&&r.indexOf(".")!==-1&&y>0&&(t=".");var o=e("currency")("-1",v(),y),i=RegExp("[0-9."+n.NUMBER_FORMATS.DECIMAL_SEP+n.NUMBER_FORMATS.GROUP_SEP+"]+");return o.replace(i.exec(o),"")===r.replace(i.exec(r),"")&&(r="-"+i.exec(r)),RegExp("^-[\\s]*$","g").test(r)&&(r="-0"),l(t).test(r)&&(u=r.match(l(t)).join("").match(d(t)),u=u?u[0].replace(t,"."):null),u}function v(){return void 0===x?n.NUMBER_FORMATS.CURRENCY_SYM:x}var p=r.defaults,$=p.hardCap,g=p.min,b=p.max,x=p.currencySymbol,y=p.fraction,m=["","true"].indexOf(o.ngRequired)!==-1,O=!0;o.$observe("ngCurrency",function(e){O="false"!==e,O?a():(i.$viewValue=i.$$rawModelValue,i.$render())}),o.$observe("hardCap",function(e){$="true"===e,c()}),o.$observe("min",function(e){g=e?Number(e):void 0,c()}),o.$observe("max",function(e){b=e?Number(e):void 0,c()}),o.$observe("currencySymbol",function(e){x=e,a()}),t.$watch(o.ngRequired,function(e){m=e,c()}),o.$observe("fraction",function(e){y=e||2,a(),c()}),i.$parsers.push(function(e){return O&&[void 0,null,""].indexOf(e)===-1?(e=s(e),e=f(Number(e))):e}),i.$formatters.push(function(n){return O&&[void 0,null,""].indexOf(n)===-1?e("currency")(n,v(),y):n}),i.$validators.min=function(e){return!(m||[void 0,null,""].indexOf(e)===-1&&!isNaN(e))||(!O||[void 0,null].indexOf(g)!==-1||isNaN(g)||e>=g)},i.$validators.max=function(e){return!(m||[void 0,null,""].indexOf(e)===-1&&!isNaN(e))||(!O||[void 0,null].indexOf(b)!==-1||isNaN(b)||e<=b)},i.$validators.fraction=function(e){return!O||!e||!isNaN(e)},t.$on("currencyRedraw",function(){c(),a()}),u.bind("focus",function(){if(O){var r=new RegExp("\\"+n.NUMBER_FORMATS.GROUP_SEP,"g"),t=[void 0,null,""].indexOf(i.$$rawModelValue)===-1?e("number")(i.$$rawModelValue,y).replace(r,""):i.$$rawModelValue;i.$viewValue!==t&&(i.$viewValue=t,i.$render(),u.triggerHandler("focus"))}}),u.bind("blur",a)}}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=t,t.$inject=["$filter","$locale","ngCurrencySettings"]},function(n,r){n.exports=e},function(e,n,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var u=r(2),o=t(u),i=r(0),a=t(i),c=r(1),f=t(c),l=o.default.module("ng-currency",[]);l.provider("ngCurrencySettings",a.default),l.directive("ngCurrency",f.default),n.default=l.name}])});
//# sourceMappingURL=ng-currency.js.map