/*! For license information please see 358.ded9d2da.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[358],{45994:(t,e,r)=>{r.d(e,{Z:()=>b});r(63975),r(59749),r(86544),r(60228),r(84254),r(752),r(21694),r(76265),r(89730),r(30024),r(12826),r(34284),r(77049),r(64043),r(73964),r(40739),r(58373),r(66793),r(7629),r(77509),r(51013),r(88052),r(49693),r(47522),r(5399),r(93374);var n=r(67294),o=r(47287),i=r(75577),a=r(22283),c=r(34292),u=r(54594),l=r(96546),f=r(75253),s=r(98752),h=r(81890),y=r(32175);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function m(){m=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new T(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",y="suspendedYield",v="executing",d="completed",g={};function b(){}function w(){}function C(){}var L={};l(L,a,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(A([])));E&&E!==r&&n.call(E,a)&&(L=E);var O=C.prototype=b.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==p(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=h;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=s(e,r,n);if("normal"===l.type){if(o=n.done?d:y,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=s(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(p(e)+" is not iterable")}return w.prototype=C,o(O,"constructor",{value:C,configurable:!0}),o(C,"constructor",{value:w,configurable:!0}),w.displayName=l(C,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,l(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},j(S.prototype),l(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(O),l(O,u,"Generator"),l(O,a,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function v(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const b=(0,n.memo)((function(t){var e=t.nameProducts,r=t.text,p=(0,u.W)(),g=p.phoneRemoveHandler,b=p.valid,w=p.setValid,C=d((0,n.useState)(!0),2),L=C[0],x=C[1],E=(0,c.M)(),O=function(){var t,e=(t=m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===b.value&&(w({dirty:!0,message:"Укажите номер телефона",value:"",valid:!1,required:!0}),(0,i.R)(".input-error","#get_callback")),!b.valid){t.next=7;break}return t.next=4,g();case 4:x(!1),t.next=8;break;case 7:(0,i.R)(".input-error","#get_callback");case 8:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return n.createElement("article",{className:"container-root",id:"get_callback"},n.createElement(y.Z,{style:{boxShadow:"none"}},L?n.createElement("form",{style:{width:"100%"},onSubmit:function(t){return t.preventDefault()}},n.createElement("h2",{className:"title-text ta-center fs-30-24-17 color-black-main mb-8 title-text-".concat(l.Gh)},"Надоели звонки с кредитными предложениями?"),n.createElement("p",{className:"title-text ta-center fs-22-17-15 color-black-main mb-20 subtitle-text-".concat(l.Gh),style:{fontWeight:"normal"}},r),n.createElement(h.yt,{id:"mobile-feedback",labelText:"Мобильный телефон*",mask:"+7-(999)-999-99-99",inputMode:"tel",alwaysShowMask:!0,status:(0,a.uY)(b),onInput:function(t){(0,o.PP)(t.target.value).length>1&&(E.set("phoneNumber",(0,o.PP)(t.target.value)),w((0,o.aH)((0,o.PP)(t.target.value),!0,"return_phone_without_mask",null,!0,[])))},maskedHandler:f.Ze}),n.createElement(s.Z,{type:"mainBold",text:e,style:{width:"100%",marginTop:20},htmlType:"submit",id:"not-open-window",onClick:function(){O().then()}})):n.createElement(n.Fragment,null,n.createElement("h2",{className:"header-24",style:{textAlign:"center"}},"Вы успешно отписались от рекламных звонков"),n.createElement("p",{className:"document-important-text ta-center",style:{textAlign:"center"}},"В скором времени звонки перестанут вас беспокоить"))))}))},22339:(t,e,r)=>{r.d(e,{Y:()=>l});r(69373),r(59903),r(59749),r(86544),r(60228),r(79288),r(40739),r(69358),r(38077),r(81919),r(49693),r(47522),r(99474),r(35082),r(84254),r(752),r(21694),r(76265);var n=r(67294),o=r(65402);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){var n;return n=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==i(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=function(t){var e=t.size,r=t.color,i=t.containerClassName,a=t.containerStyle;return n.createElement("div",{style:c({width:e||o.W.sizes.width,height:e||o.W.sizes.height,flexShrink:0},a),className:i},n.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 970 970",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M874.142 470.858C866.332 478.668 866.332 491.332 874.142 499.142L963.553 588.553C973.706 598.706 970.17 615.932 956.839 621.265L843.697 666.521C834.97 670.012 829.851 679.108 831.396 688.379L855.397 832.381C857.653 845.917 845.917 857.653 832.381 855.397L688.379 831.396C679.108 829.851 670.012 834.97 666.521 843.697L621.265 956.839C615.932 970.17 598.706 973.706 588.553 963.553L499.142 874.142C491.332 866.332 478.668 866.332 470.858 874.142L381.447 963.553C371.294 973.706 354.068 970.17 348.735 956.839L303.479 843.697C299.988 834.97 290.892 829.851 281.621 831.396L137.619 855.397C124.083 857.653 112.347 845.917 114.603 832.381L138.604 688.379C140.149 679.108 135.03 670.012 126.303 666.521L13.1614 621.265C-0.169968 615.932 -3.70576 598.706 6.4471 588.553L95.8579 499.142C103.668 491.332 103.668 478.668 95.8579 470.858L6.44708 381.447C-3.70578 371.294 -0.169933 354.068 13.1614 348.735L126.303 303.479C135.03 299.988 140.149 290.892 138.604 281.621L114.603 137.619C112.347 124.083 124.083 112.347 137.619 114.603L281.621 138.604C290.892 140.149 299.988 135.03 303.479 126.303L348.735 13.1614C354.068 -0.169968 371.294 -3.70576 381.447 6.4471L470.858 95.8579C478.668 103.668 491.332 103.668 499.142 95.8579L588.553 6.44708C598.706 -3.70578 615.932 -0.169933 621.265 13.1614L666.521 126.303C670.012 135.03 679.108 140.149 688.379 138.604L832.381 114.603C845.917 112.347 857.653 124.083 855.397 137.619L831.396 281.621C829.851 290.892 834.97 299.988 843.697 303.479L956.839 348.735C970.17 354.068 973.706 371.294 963.553 381.447L874.142 470.858ZM328.75 235C302.708 235 280.573 247.207 262.344 271.621C244.115 296.035 235 325.495 235 360C235 394.505 244.115 423.965 262.344 448.379C280.573 472.793 302.708 485 328.75 485C354.792 485 376.927 472.793 395.156 448.379C413.385 423.965 422.5 394.505 422.5 360C422.5 325.495 413.385 296.035 395.156 271.621C376.927 247.207 354.792 235 328.75 235ZM641.25 235H610C607.396 235 604.954 235.488 602.676 236.465C600.397 237.441 598.607 238.255 597.305 238.906C596.003 239.557 594.212 241.348 591.934 244.277C589.655 247.207 588.19 249.16 587.539 250.137C586.888 251.113 585.423 253.717 583.145 257.949C580.866 262.181 579.401 264.948 578.75 266.25L302.383 703.75C297.826 711.562 298.802 718.724 305.312 725.234C311.823 731.745 319.635 735 328.75 735H360C362.604 735 364.72 734.837 366.348 734.512C367.975 734.186 369.766 733.372 371.719 732.07C373.672 730.768 375.137 729.629 376.113 728.652C377.09 727.676 378.392 725.885 380.02 723.281C381.647 720.677 382.786 718.724 383.438 717.422C384.089 716.12 385.391 713.841 387.344 710.586C389.297 707.331 390.599 705.052 391.25 703.75L667.617 266.25C672.174 258.438 671.198 251.276 664.688 244.766C658.177 238.255 650.365 235 641.25 235ZM641.25 485C615.208 485 593.073 497.207 574.844 521.621C556.615 546.035 547.5 575.495 547.5 610C547.5 644.505 556.615 673.965 574.844 698.379C593.073 722.793 615.208 735 641.25 735C667.292 735 689.427 722.793 707.656 698.379C725.885 673.965 735 644.505 735 610C735 575.495 725.885 546.035 707.656 521.621C689.427 497.207 667.292 485 641.25 485ZM641.25 672.5C632.786 672.5 625.462 666.315 619.277 653.945C613.092 641.576 610 626.764 610 609.512C610 592.259 613.092 577.611 619.277 565.566C625.462 553.522 632.786 547.5 641.25 547.5C649.714 547.5 657.038 553.522 663.223 565.566C669.408 577.611 672.5 592.259 672.5 609.512C672.5 626.764 669.408 641.576 663.223 653.945C657.038 666.315 649.714 672.5 641.25 672.5ZM328.75 422.5C320.286 422.5 312.962 416.315 306.777 403.945C300.592 391.576 297.5 376.764 297.5 359.512C297.5 342.259 300.592 327.611 306.777 315.566C312.962 303.522 320.286 297.5 328.75 297.5C337.214 297.5 344.538 303.522 350.723 315.566C356.908 327.611 360 342.259 360 359.512C360 376.764 356.908 391.576 350.723 403.945C344.538 416.315 337.214 422.5 328.75 422.5Z",fill:o.W.colors[r||"primaryColor"]})))}}}]);