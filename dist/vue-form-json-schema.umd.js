!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue"),require("ajv")):"function"==typeof define&&define.amd?define("VueFormJsonSchema",["vue","ajv"],t):"object"==typeof exports?exports.VueFormJsonSchema=t(require("vue"),require("ajv")):e.VueFormJsonSchema=t(e.vue,e.ajv)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=25)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VFJS_EVENT_FIELD_STATE_UPDATE="VFJS_EVENT_FIELD_STATE_UPDATE",t.VFJS_EVENT_FIELD_MODEL_VALIDATE="VFJS_EVENT_FIELD_MODEL_VALIDATE",t.VFJS_EVENT_FIELD_MODEL_UPDATE="VFJS_EVENT_FIELD_MODEL_UPDATE",t.VFJS_EVENT_MODEL_UPDATE="VFJS_EVENT_MODEL_UPDATE",t.VFJS_EVENT_MODEL_UPDATED="VFJS_EVENT_MODEL_UPDATED",t.VFJS_EVENT_MODEL_VALIDATE="VFJS_EVENT_MODEL_VALIDATE",t.VFJS_EVENT_STATE_UPDATED="VFJS_EVENT_STATE_UPDATED",t.VFJS_EXTERNAL_EVENT_CHANGE="change",t.VFJS_EXTERNAL_EVENT_STATE_CHANGE="state-change",t.VFJS_EXTERNAL_EVENT_VALIDATED="validated"},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t){var r=Array.isArray;e.exports=r},function(e,t,r){var n=r(5);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},function(e,t,r){var n=r(97);e.exports=function(e,t,r){var i=null==e?void 0:n(e,t);return void 0===i?r:i}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){var n=r(33);e.exports=function(e,t,r){"__proto__"==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(26)),s=n(r(63)),o=n(r(67)),u={computed:i.default,props:o.default,methods:s.default};t.default=u},function(e,t,r){var n=r(27),i=r(56)(function(e,t,r){n(e,t,r)});e.exports=i},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var i=r(28),s=r(29),o=r(30),u=r(31),f=r(32);n.prototype.clear=i,n.prototype.delete=s,n.prototype.get=o,n.prototype.has=u,n.prototype.set=f,e.exports=n},function(e,t,r){var n=r(6),i=r(5);e.exports=function(e,t,r){(void 0===r||i(e[t],r))&&(void 0!==r||t in e)||n(e,t,r)}},function(e,t,r){var n=r(40),i="object"==typeof self&&self&&self.Object===Object&&self,s=n||i||Function("return this")();e.exports=s},function(e,t,r){var n=r(14)(Object.getPrototypeOf,Object);e.exports=n},function(e,t){e.exports=function(e,t){return function(r){return e(t(r))}}},function(e,t,r){var n=r(16),i=r(1);e.exports=function(e){if(!i(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=r(6),i=r(5),s=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){var o=e[t];s.call(e,t)&&i(o,r)&&(void 0!==r||t in e)||n(e,t,r)}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(68)),s=n(r(69)),o=n(r(70)),u=n(r(110)),f=n(r(111)),a={created:function(){this.vfjsInitialize()},beforeDestroy:function(){this.vfjsDestroy()},computed:i.default,data:s.default,props:u.default,methods:o.default,watch:f.default};t.default=a},function(e,t,r){var n=r(72);e.exports=function(e,t,r){return null==e?e:n(e,t,r)}},function(e,t,r){var n=r(2),i=r(73),s=r(75),o=r(77);e.exports=function(e,t){return n(e)?e:i(e,t)?[e]:s(o(e))}},function(e,t){e.exports=function(e){return e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.vfjsViewer=t.vfjsGlobalMixin=t.vfjsComponentMixin=void 0;var i=n(r(8)),s=n(r(21)),o=n(r(112));t.vfjsComponentMixin=i.default,t.vfjsGlobalMixin=s.default,t.vfjsViewer=o.default,t.default=o.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(9)),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s={vfjsAttributes:function(){var e={required:this.vfjsFieldRequired};return this.component&&-1!==["button","input","li","meter","option","param","progress"].indexOf(this.component)&&(e.value=this.vfjsFieldModel||this.vfjsFieldOptions.attrs&&this.vfjsFieldOptions.attrs.value||this.vfjsFieldOptions.domProps&&this.vfjsFieldOptions.domProps.innerHTML),i({},this.getVfjsFieldAttributes(this.vfjsFieldOptions,(0,n.default)({},this.vfjsDefaultOptions,{attrs:e,key:this.vfjsFieldId,props:this.$options.propsData})))}};t.default=s},function(e,t,r){function n(e,t,r,l,c){e!==t&&o(t,function(o,a){if(f(o))c||(c=new i),u(e,t,a,r,n,l,c);else{var d=l?l(e[a],o,a+"",e,t,c):void 0;void 0===d&&(d=o),s(e,a,d)}},a)}var i=r(10),s=r(11),o=r(35),u=r(37),f=r(1),a=r(20);e.exports=n},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,r){var n=r(3),i=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0||(r==t.length-1?t.pop():i.call(t,r,1),--this.size,0))}},function(e,t,r){var n=r(3);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},function(e,t,r){var n=r(3);e.exports=function(e){return n(this.__data__,e)>-1}},function(e,t,r){var n=r(3);e.exports=function(e,t){var r=this.__data__,i=n(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}},function(e,t,r){var n=r(34),i=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=i},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,r){var n=r(36)();e.exports=n},function(e,t){e.exports=function(e){return function(t,r,n){for(var i=-1,s=Object(t),o=n(t),u=o.length;u--;){var f=o[e?u:++i];if(!1===r(s[f],f,s))break}return t}}},function(e,t,r){var n=r(11),i=r(38),s=r(42),o=r(45),u=r(46),f=r(49),a=r(2),l=r(50),c=r(17),d=r(15),v=r(1),p=r(53),j=r(18),h=r(54);e.exports=function(e,t,r,_,y,V,E){var F=e[r],g=t[r],O=E.get(g);if(O)n(e,r,O);else{var m=V?V(F,g,r+"",e,t,E):void 0,b=void 0===m;if(b){var S=a(g),M=!S&&c(g),A=!S&&!M&&j(g);m=g,S||M||A?a(F)?m=F:l(F)?m=o(F):M?(b=!1,m=i(g,!0)):A?(b=!1,m=s(g,!0)):m=[]:p(g)||f(g)?(m=F,f(F)?m=h(F):(!v(F)||_&&d(F))&&(m=u(g))):b=!1}b&&(E.set(g,m),y(m,g,_,V,E),E.delete(g)),n(e,r,m)}}},function(e,t,r){(function(e){var n=r(12),i="object"==typeof t&&t&&!t.nodeType&&t,s=i&&"object"==typeof e&&e&&!e.nodeType&&e,o=s&&s.exports===i?n.Buffer:void 0,u=o?o.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var r=e.length,n=u?u(r):new e.constructor(r);return e.copy(n),n}}).call(t,r(39)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(t,r(41))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(43);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}},function(e,t,r){var n=r(44);e.exports=function(e){var t=new e.constructor(e.byteLength);return new n(t).set(new n(e)),t}},function(e,t,r){var n=r(12).Uint8Array;e.exports=n},function(e,t){e.exports=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},function(e,t,r){var n=r(47),i=r(13),s=r(48);e.exports=function(e){return"function"!=typeof e.constructor||s(e)?{}:n(i(e))}},function(e,t,r){var n=r(1),i=Object.create,s=function(){function e(){}return function(t){if(!n(t))return{};if(i)return i(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();e.exports=s},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=r(51),i=r(7);e.exports=function(e){return i(e)&&n(e)}},function(e,t,r){var n=r(15),i=r(52);e.exports=function(e){return null!=e&&i(e.length)&&!n(e)}},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t,r){var n=r(16),i=r(13),s=r(7),o=Function.prototype,u=Object.prototype,f=o.toString,a=u.hasOwnProperty,l=f.call(Object);e.exports=function(e){if(!s(e)||"[object Object]"!=n(e))return!1;var t=i(e);if(null===t)return!0;var r=a.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==l}},function(e,t,r){var n=r(55),i=r(20);e.exports=function(e){return n(e,i(e))}},function(e,t,r){var n=r(19),i=r(6);e.exports=function(e,t,r,s){var o=!r;r||(r={});for(var u=-1,f=t.length;++u<f;){var a=t[u],l=s?s(r[a],e[a],a,r,e):void 0;void 0===l&&(l=e[a]),o?i(r,a,l):n(r,a,l)}return r}},function(e,t,r){var n=r(57),i=r(62);e.exports=function(e){return n(function(t,r){var n=-1,s=r.length,o=s>1?r[s-1]:void 0,u=s>2?r[2]:void 0;for(o=e.length>3&&"function"==typeof o?(s--,o):void 0,u&&i(r[0],r[1],u)&&(o=s<3?void 0:o,s=1),t=Object(t);++n<s;){var f=r[n];f&&e(t,f,n,o)}return t})}},function(e,t,r){var n=r(58),i=r(59),s=r(61);e.exports=function(e,t){return s(i(e,t,n),e+"")}},function(e,t){e.exports=function(e){return e}},function(e,t,r){var n=r(60),i=Math.max;e.exports=function(e,t,r){return t=i(void 0===t?e.length-1:t,0),function(){for(var s=arguments,o=-1,u=i(s.length-t,0),f=Array(u);++o<u;)f[o]=s[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=s[o];return a[t]=r(f),n(e,this,a)}}},function(e,t){e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(){return!1}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(64)),o=n(r(65)),u=n(r(66)),f=i({},s.default,o.default,u.default);t.default=f},function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(9)),s={getVfjsFieldAttributes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.class,s=t.on,o=t.nativeOn,u=n(t,["class","on","nativeOn"]),f=e.class,a=e.on,l=e.nativeOn,c=n(e,["class","on","nativeOn"]);if(!c)return{};var d={class:(0,i.default)({},this.vfjsFieldHelperFormatClasses(f),this.vfjsFieldHelperFormatClasses(r)),on:(0,i.default)(this.vfjsFieldHelperFormatEvents(a),this.vfjsFieldHelperFormatEvents(s)),nativeOn:(0,i.default)(this.vfjsFieldHelperFormatEvents(l),this.vfjsFieldHelperFormatEvents(o))},v={props:c};return(0,i.default)({},u,v,c,d)}};t.default=s},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s={vfjsFieldHelperAddListener:function(e,t){e.addEventListener(t,this.vfjsFieldHelperStateEventHandler)},vfjsFieldHelperRemoveListener:function(e,t){e.removeEventListener(t,this.vfjsFieldHelperStateEventHandler)},vfjsFieldHelperStateEventHandler:function(e){e&&"blur"===e.type&&this.setVfjsFieldState({$touched:!0})},vfjsFieldHelperFormatEvents:function(e){if(!e)return{};var t=Array.isArray(e)?e.reduce(function(e,t){return i({},e,n({},t,!0))},{}):e;return this.vfjsFieldHelperFormatEventsReducer(t)},vfjsFieldHelperFormatClasses:function(e){return e?"string"==typeof e?n({},e,!0):Array.isArray(e)?e.reduce(function(e,t){return i({},e,n({},t,!0))},{}):e:{}},vfjsFieldHelperEventHandler:function(e,t){var r=this;return function(e){return"function"==typeof t?r.setVfjsFieldModel(t(e)):e instanceof Event?e.target&&e.target.value?r.setVfjsFieldModel(e.target.value):r.setVfjsFieldModel(void 0):r.setVfjsFieldModel(e)}},vfjsFieldHelperFormatEventsReducer:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).reduce(function(r,s){return i({},r,n({},s,e.vfjsFieldHelperEventHandler(s,t[s])))},{})}};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={setState:function(e){this.setVfjsFieldState(e)},setModel:function(e){this.setVfjsFieldModel(e)},setVfjsFieldState:function(e,t){this.vfjsBus.$emit(n.VFJS_EVENT_FIELD_STATE_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsFieldModel:function(e,t){this.vfjsBus.$emit(n.VFJS_EVENT_FIELD_MODEL_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={children:{type:Array,default:function(){return[]}},id:{type:String,required:!0},model:{type:null},modelKey:{type:String,required:!0},required:{type:Boolean,required:!0},schema:{type:Object,required:!0},schemas:{type:Object},state:{type:Object,required:!0},tag:{type:String,default:"div"},value:{type:null},uiSchema:{type:Object,required:!0},vfjsBus:{type:Object,required:!0},vfjsFieldErrors:{type:Array},vfjsFieldId:{type:String,required:!0},vfjsFieldModel:{type:null},vfjsFieldModelKey:{type:String,required:!0},vfjsFieldOptions:{type:Object,required:!0},vfjsFieldRequired:{type:Boolean,required:!0},vfjsFieldSchema:{type:Object,required:!0},vfjsFieldSchemas:{type:Object},vfjsFieldState:{type:Object,required:!0},vfjsFieldTag:{type:String,default:"div"},vfjsFieldUiSchema:{type:Object,required:!0},vfjsModel:{type:Object,required:!0},vfjsState:{type:Object,required:!0}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={vfjsSchemaValid:function(){return this.vfjsSchema.every(this.isVfjsFieldSchemaValid)},vfjsModelValid:function(){return this.vfjsSchema.every(this.isVfjsFieldModelValid)},vfjsFields:function(){return this.vfjsFieldsActive.filter(function(e){return e}).map(this.vfjsHelperCreateField)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(){return{vfjsBus:{},vfjsComponents:{},vfjsEvents:[n.VFJS_EVENT_FIELD_MODEL_UPDATE,n.VFJS_EVENT_FIELD_MODEL_VALIDATE,n.VFJS_EVENT_FIELD_STATE_UPDATE,n.VFJS_EVENT_MODEL_UPDATE,n.VFJS_EVENT_MODEL_UPDATED,n.VFJS_EVENT_MODEL_VALIDATE,n.VFJS_EVENT_STATE_UPDATED],vfjsFieldsActive:[],vfjsFieldsRequired:[],vfjsListeners:[],vfjsModel:{},vfjsOptions:{allowInvalidModel:!0,ajvOptions:{allErrors:!0},validate:!0,validateOnLoad:!0,validateOnChange:!0},vfjsSchema:{},vfjsState:{},vfjsUiSchema:[]}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(71)),o=n(r(92)),u=n(r(94)),f=n(r(95)),a=n(r(99)),l=n(r(102)),c=n(r(104)),d=n(r(107)),v=i({},s.default,u.default,o.default,f.default,l.default,a.default,c.default,d.default);t.default=v},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var s=n(r(22)),o=n(r(79)),u=n(r(91)),f=r(0),a={addVfjsListener:function(e,t){var r=this.vfjsBus.$on(e,function(r){return t(e,r)});this.vfjsListeners.push(r)},addVfjsListeners:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments[1];t.forEach(function(t){return e.addVfjsListener(t,r)})},removeVfjsListener:function(e){this.vfjsBus.$off(e)},removeVfjsListeners:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(this.removeVfjsListener)},removeVfjsListenersAll:function(){this.vfjsBus.$off(),this.vfjsListeners=[]},vfjsBusEventHandler:function(e,t){var r,n=this,u=(r={},i(r,f.VFJS_EVENT_FIELD_MODEL_VALIDATE,function(e){var t=e.key,r=e.value,i=e.cb,s=n.getVfjsFieldModel(t),u=n.vfjsHelperApplyFieldModel(t,r);n.vfjsBus.$emit(f.VFJS_EVENT_MODEL_VALIDATE,{vfjsModel:u,cb:function(e){var u=n.getVfjsFieldModelValidationErrors(t,r),f=Object.assign({},n.getVfjsFieldState(t),{$dirty:!(0,o.default)(s,r),vfjsFieldErrors:u});n.setVfjsFieldState(f,t),i&&"function"==typeof i&&i(u)}})}),i(r,f.VFJS_EVENT_FIELD_MODEL_UPDATE,function(e){var t=e.key,r=e.value,i=e.cb;n.vfjsBus.$emit(f.VFJS_EVENT_FIELD_MODEL_VALIDATE,{key:t,value:r,cb:function(e){if(!e||e&&0===e.length||n.vfjsOptions.allowInvalidModel){var s=n.vfjsHelperApplyFieldModel(t,r);n.setVfjsModel(s)}i&&"function"==typeof i&&i(e)}})}),i(r,f.VFJS_EVENT_FIELD_STATE_UPDATE,function(e){var t=e.key,r=e.value,i=Object.assign({},n.getVfjsState());(0,s.default)(i,t,r),n.setVfjsState(i),n.setVfjsUiFieldsActive()}),i(r,f.VFJS_EVENT_MODEL_VALIDATE,function(e){var t=e.vfjsModel,r=e.cb,i=n.getVfjsValidationErrors(t),s=Object.assign({},n.getVfjsState(),{vfjsErrors:i});n.setVfjsState(s);var o=n.getVfjsState();n.$emit(f.VFJS_EXTERNAL_EVENT_VALIDATED,0===o.vfjsErrors.length),r&&"function"==typeof r&&r(i)}),i(r,f.VFJS_EVENT_MODEL_UPDATED,function(){n.setVfjsUiFieldsActive(),n.$emit(f.VFJS_EXTERNAL_EVENT_CHANGE,n.getVfjsModel())}),i(r,f.VFJS_EVENT_STATE_UPDATED,function(){n.$emit(f.VFJS_EXTERNAL_EVENT_STATE_CHANGE,n.getVfjsState())}),r);e&&e in u&&u[e](t)},vfjsBusInitialize:function(){this.vfjsBus=new u.default}};t.default=a},function(e,t,r){var n=r(19),i=r(23),s=r(78),o=r(1),u=r(24);e.exports=function(e,t,r,f){if(!o(e))return e;for(var a=-1,l=(t=i(t,e)).length,c=l-1,d=e;null!=d&&++a<l;){var v=u(t[a]),p=r;if(a!=c){var j=d[v];void 0===(p=f?f(j,v,d):void 0)&&(p=o(j)?j:s(t[a+1])?[]:{})}n(d,v,p),d=d[v]}return e}},function(e,t,r){var n=r(2),i=r(74),s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!i(e))||o.test(e)||!s.test(e)||null!=t&&e in Object(t)}},function(e,t){e.exports=function(){return!1}},function(e,t,r){var n=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,o=r(76)(function(e){var t=[];return n.test(e)&&t.push(""),e.replace(i,function(e,r,n,i){t.push(n?i.replace(s,"$1"):r||e)}),t});e.exports=o},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){return e}},function(e,t){var r=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||r.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,r){var n=r(80);e.exports=function(e,t){return n(e,t)}},function(e,t,r){function n(e,t,r,o,u){return e===t||(null==e||null==t||!s(e)&&!s(t)?e!=e&&t!=t:i(e,t,r,o,n,u))}var i=r(81),s=r(7);e.exports=n},function(e,t,r){var n=r(10),i=r(82),s=r(87),o=r(88),u=r(90),f=r(2),a=r(17),l=r(18),c="[object Arguments]",d="[object Array]",v="[object Object]",p=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,j,h,_){var y=f(e),V=f(t),E=y?d:u(e),F=V?d:u(t),g=(E=E==c?v:E)==v,O=(F=F==c?v:F)==v,m=E==F;if(m&&a(e)){if(!a(t))return!1;y=!0,g=!1}if(m&&!g)return _||(_=new n),y||l(e)?i(e,t,r,j,h,_):s(e,t,E,r,j,h,_);if(!(1&r)){var b=g&&p.call(e,"__wrapped__"),S=O&&p.call(t,"__wrapped__");if(b||S){var M=b?e.value():e,A=S?t.value():t;return _||(_=new n),h(M,A,r,j,_)}}return!!m&&(_||(_=new n),o(e,t,r,j,h,_))}},function(e,t,r){var n=r(83),i=r(84),s=r(85);e.exports=function(e,t,r,o,u,f){var a=1&r,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var d=f.get(e);if(d&&f.get(t))return d==t;var v=-1,p=!0,j=2&r?new n:void 0;for(f.set(e,t),f.set(t,e);++v<l;){var h=e[v],_=t[v];if(o)var y=a?o(_,h,v,t,e,f):o(h,_,v,e,t,f);if(void 0!==y){if(y)continue;p=!1;break}if(j){if(!i(t,function(e,t){if(!s(j,t)&&(h===e||u(h,e,r,o,f)))return j.push(t)})){p=!1;break}}else if(h!==_&&!u(h,_,r,o,f)){p=!1;break}}return f.delete(e),f.delete(t),p}},function(e,t,r){var n=r(2);e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return n(e)?e:[e]}},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},function(e,t,r){var n=r(86);e.exports=function(e,t){return!(null==e||!e.length)&&n(e,t,0)>-1}},function(e,t){e.exports=function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,r){var n=r(89),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,s,o,u){var f=1&r,a=n(e),l=a.length;if(l!=n(t).length&&!f)return!1;for(var c=l;c--;){var d=a[c];if(!(f?d in t:i.call(t,d)))return!1}var v=u.get(e);if(v&&u.get(t))return v==t;var p=!0;u.set(e,t),u.set(t,e);for(var j=f;++c<l;){var h=e[d=a[c]],_=t[d];if(s)var y=f?s(_,h,d,t,e,u):s(h,_,d,e,t,u);if(!(void 0===y?h===_||o(h,_,r,s,u):y)){p=!1;break}j||(j="constructor"==d)}if(p&&!j){var V=e.constructor,E=t.constructor;V!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof V&&V instanceof V&&"function"==typeof E&&E instanceof E)&&(p=!1)}return u.delete(e),u.delete(t),p}},function(e,t,r){var n=r(14)(Object.keys,Object);e.exports=n},function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function s(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(22)),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=n(r(93)),a={vfjsHelperCreateField:function(e){var t=this,r=e.id,n=e.required,i=e.children,o=void 0===i?[]:i,f=e.component,a=e.model,l=void 0===a?"":a,c=e.fieldOptions,d=void 0===c?{}:c,v=this.vfjsHelperFieldIsArray(l)?o.reduce(function(e,r){return[].concat(s(e),s(r.map(t.vfjsHelperCreateField)))},[]):o.map(this.vfjsHelperCreateField),p=this.getVfjsFieldSchema(l)||{},j=this.schemas,h=this.getVfjsFieldState(l)||{},_=this.getVfjsFieldModel(l),y=this.getVfjsState(),V=this.getVfjsModel(),E=u({},d,{children:o,id:r,model:_,modelKey:l,required:n,schema:p,schemas:j,state:h,uiSchema:e,value:_,vfjsBus:this.vfjsBus,vfjsFieldId:r,vfjsFieldModel:_,vfjsFieldModelKey:l,vfjsFieldOptions:d,vfjsFieldRequired:n,vfjsFieldSchema:p,vfjsFieldSchemas:j,vfjsFieldState:h,vfjsFieldUiSchema:e,vfjsModel:V,vfjsState:y});return this.vfjsHelperCreateComponent({id:r,component:f,children:v,props:E})},vfjsHelperHashString:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:62,r=0,n=0;n<e.length;n++)r=33*r^e.charCodeAt(n);r>>>=0;for(var i=[];r>=t;){var s=r%t;i.push("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[s]),r=Math.floor(r/t)}return i.join("")},vfjsHelperCreateComponent:function(e){var t=e.id,r=e.component,n=e.children,i=e.props;return"string"==typeof r&&r in this.vfjsComponents?this.$createElement(r,{props:i},n):this.$createElement(f.default,{key:t,props:u({},i,{component:r})},n)},vfjsHelperApplyFieldModel:function(e,t){var r=Object.assign({},this.getVfjsModel());return(0,o.default)(r,e,t),r},vfjsHelperGenerateField:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)return!1;var n=e.children,s=void 0===n?[]:n,o=i(e,["children"]),f=JSON.stringify({fieldWithoutChildren:o,level:r}),a=this.vfjsHelperHashString(f);return u({},e,{id:a,children:s.map(function(e,n){return t.vfjsHelperGenerateField(e,(n+1)*(r+1))})})},vfjsHelperChildArrayMapper:function(e,t,r){var n=e.model,s=e.children,o=void 0===s?[]:s,f=i(e,["model","children"]);return u({},f,{model:this.vfjsHelperGetChildArrayModelAtIndex(n,t,r),children:this.vfjsHelperChildArrayReducerMapper(t,o,r)})},vfjsHelperChildArrayReducerMapper:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2];return r.reduce(function(r,i){return[].concat(s(r),[t.vfjsHelperChildArrayMapper(i,e,n)])},[])},vfjsHelperGetChildArrayModelAtIndex:function(e,t,r){var n=this.vfjsHelperGetRelativeModel(e,t);return n?t+"."+r+"."+n:e},vfjsHelperGetRelativeModel:function(e,t){return e?String(e).substr(t.length+1):e},vfjsHelperGetParentModel:function(e){var t=String(e).lastIndexOf(".");return String(e).substr(0,t)},vfjsHelperFieldIsRequired:function(e){if(e){var t=this.vfjsHelperGetParentModel(e);return t?-1!==this.vfjsFieldsRequired.indexOf(t):-1!==this.vfjsFieldsRequired.indexOf(e)}return!1},vfjsHelperFieldIsArray:function(e){if(!e)return!1;var t=this.getVfjsFieldSchema(e);return!!t&&Array.isArray(t.items)}};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i={name:"vue-form-json-schema-field-wrapper",mixins:[function(e){return e&&e.__esModule?e:{default:e}}(r(8)).default],props:{component:{type:[String,Object]}},render:function(){return this.$createElement(this.component,n({},this.vfjsAttributes),this.$slots.default)}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={vfjsDestroy:function(){var e=this;this.vfjsEvents.forEach(function(t){return e.removeVfjsListener(t)})},vfjsInitialize:function(){this.vfjsSchema=Object.assign({},this.schema),this.vfjsComponents=Object.assign({},this.components),this.vfjsOptions=Object.assign({},this.vfjsOptions,this.options),this.vfjsBusInitialize(),this.setVfjsModel(this.model),this.vfjsValidationInitialize(),this.setVfjsUiSchema(this.uiSchema),this.addVfjsListeners(this.vfjsEvents,this.vfjsBusEventHandler),this.setVfjsUiFieldsActive()}};t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(96)),o=n(r(98)),u=i({},s.default,o.default);t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(4)),i={getVfjsFieldModel:function(e){return e?this.getVfjsModel(e):this.vfjsFieldModelKey?this.getVfjsModel(this.vfjsFieldModelKey):null},getVfjsModel:function(e){return e?(0,n.default)(this.vfjsModel,e):this.vfjsModel}};t.default=i},function(e,t,r){var n=r(23),i=r(24);e.exports=function(e,t){for(var r=0,s=(t=n(t,e)).length;null!=e&&r<s;)e=e[i(t[r++])];return r&&r==s?e:void 0}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={setVfjsFieldModel:function(e,t){this.vfjsBus.$emit(n.VFJS_EVENT_FIELD_MODEL_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsModel:function(e){this.vfjsModel=Object.assign({},this.getVfjsModel(),e),this.vfjsBus.$emit(n.VFJS_EVENT_MODEL_UPDATED,this.getVfjsModel())}};t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(100)),o=n(r(101)),u=i({},s.default,o.default);t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(4)),i={getVfjsState:function(e){return e?(0,n.default)(this.vfjsState,e):this.vfjsState},getVfjsFieldState:function(e){return e?this.getVfjsState(e):this.vfjsFieldModelKey?this.getVfjsState(this.vfjsFieldModelKey):null}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),i={setVfjsFieldState:function(e,t){this.vfjsBus.$emit(n.VFJS_EVENT_FIELD_STATE_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsState:function(e){this.vfjsState=Object.assign({},this.getVfjsState(),e),this.vfjsBus.$emit(n.VFJS_EVENT_STATE_UPDATED)}};t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e})({},function(e){return e&&e.__esModule?e:{default:e}}(r(103)).default);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(4)),i={getVfjsFieldSchema:function(e){return e?this.getVfjsSchema(e):this.vfjsFieldModelKey?this.getVfjsSchema(this.vfjsFieldModelKey):null},getVfjsSchema:function(e){return e?(0,n.default)(this.getVfjsSchema.properties,e)||this.getVfjsSchemaFallback(e):this.vfjsSchema},getVfjsSchemaPath:function(e,t){var r=this.getVfjsSchema();if(!e)return r.items?this.getVfjsSchemaPath("items"):"properties."+t;var i=(0,n.default)(r,e);if(i){if(i.items instanceof Array){var s=this.getVfjsSchemaPath(e+".items");return this.getVfjsSchemaPath(s+".0")}if(i.properties instanceof Object)return this.getVfjsSchemaPath(e+".properties")}return t?e+"."+t:e},getVfjsSchemaFallback:function(e){var t=String(e).split(".").reduce(this.getVfjsSchemaPath,"");return(0,n.default)(this.getVfjsSchema(),t)}};t.default=i},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(105)),o=n(r(106)),u=i({},s.default,o.default);t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(4)),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s={getVfjsUiFieldVisible:function(e){if(!e.show)return!0;var t=e.show,r=t.model,n=t.schema,i=this.getVfjsFieldModel(r);return this.ajv.validate(n,i),0===(this.ajv.errors?this.ajv.errors:[]).length},getVfjsUiFieldArrayChildrenActive:function(e,t){var r=this;return(this.getVfjsFieldModel(e)||[]).map(function(n,i){return r.vfjsHelperChildArrayReducerMapper(e,t,i)}).map(this.getVfjsUiFieldsActive)},getVfjsUiField:function(e){var t=e.children,r=void 0===t?[]:t,n=e.model,s=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["children","model"]);if(this.getVfjsUiFieldVisible(s)){var o=this.vfjsHelperFieldIsArray(n),u=this.vfjsHelperFieldIsRequired(n);return o?i({},s,{model:n,required:u,children:this.getVfjsUiFieldArrayChildrenActive(n,r)}):i({},s,{model:n,required:u,children:this.getVfjsUiFieldsActive(r)})}return!1},getVfjsUiFieldsActive:function(e){var t=this;return e.reduce(function(e,r,n){if(r){var i=t.getVfjsUiField(r);i&&e.push(i)}return e},[])},getVfjsFieldUiSchema:function(e){return this.getVfjsUiSchema(e)},getVfjsUiSchema:function(e){return e?(0,n.default)(this.vfjsUiSchema,e):this.vfjsUiSchema}};t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={setVfjsUiSchema:function(e){var t=this;this.vfjsUiSchema=e.reduce(function(e,r,n){return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e),[t.vfjsHelperGenerateField(r,n)])},[])},setVfjsUiFieldsActive:function(){this.vfjsFieldsActive=this.getVfjsUiFieldsActive(this.vfjsUiSchema)}};t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=n(r(108)),o=n(r(109)),u=r(0),f=i({vfjsValidationInitialize:function(){var e=this;this.ajv=new s.default(this.vfjsOptions.ajvOptions),Object.keys(this.schemas).forEach(function(t){e.ajv.addSchema(e.schemas[t],t)}),this.ajv.validate(this.getVfjsSchema(),{}),this.vfjsFieldsRequired=this.ajv.errors?this.ajv.errors.reduce(function(e,t){return"required"===t.keyword&&t.params&&t.params.missingProperty&&-1===e.indexOf(t.params.missingProperty)&&e.push(t.params.missingProperty),e},[]):[],this.vfjsOptions.validate&&this.vfjsOptions.validateOnLoad&&this.vfjsBus.$emit(u.VFJS_EVENT_MODEL_VALIDATE,{vfjsModel:this.getVfjsModel()})}},o.default);t.default=f},function(e,r){e.exports=t},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={getVfjsFieldUiSchemaValidationErrors:function(e){var t=e.component,r=e.model,n=e.type,i=[];return t||this.getVfjsFieldComponent(n)||i.push("Unregistered component type: "+n),r&&String(r)!==r&&i.push('The field\'s "model" property must be a string!'),i},getVfjsFieldUiSchemaValid:function(e){return 0===this.getVfjsFieldUiSchemaValidationErrors(e).length&&e.children.every(this.getVfjsFieldUiSchemaValid)},getVfjsFieldModelValid:function(e,t){return 0===this.getVfjsFieldModelValidationErrors(e,t).length},getVfjsFieldModelValidationErrors:function(e,t){return this.getVfjsModelValidationErrors(e,t)},getVfjsModelValidationErrors:function(e,t){var r=e?this.getVfjsFieldSchema(e):this.getVfjsSchema();if(!r)return[];var n=void 0!==t?t:this.getVfjsFieldModel(e);return this.ajv.validate(r,n)?[]:this.ajv.errors},getVfjsValid:function(){return 0===this.getVfjsValidationErrors().length},getVfjsValidationErrors:function(e){return this.ajv.validate(this.getVfjsSchema(),e||this.getVfjsModel())?[]:this.ajv.errors}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={components:{type:Object,default:function(){return{}}},model:{type:Object,default:function(){return{}}},schema:{type:Object,required:!0,default:function(){return{}}},schemas:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},uiSchema:{type:Array,required:!0,default:function(){return{}}}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={model:function(e){this.vfjsModel=Object.assign({},e),this.setVfjsUiFieldsActive()},schema:function(e){this.vfjsSchema=Object.assign({},e),this.setVfjsUiFieldsActive()},uiSchema:function(e){this.setVfjsUiSchema(e),this.setVfjsUiFieldsActive()},state:function(e){this.setVfjsUiFieldsActive()}};t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i={name:"vue-form-json-schema-viewer",mixins:[function(e){return e&&e.__esModule?e:{default:e}}(r(21)).default],computed:{validated:function(){return this.getVfjsValid()},vfjsAttributes:function(){return{class:this.vfjsAttributesClass}},vfjsAttributesClass:function(){return this.options.validationClass&&this.validated?this.options.validationClass:""}},render:function(){return this.$createElement(this.tag,n({},this.vfjsAttributes),this.vfjsFields)}};t.default=i}])});
//# sourceMappingURL=vue-form-json-schema.umd.js.map