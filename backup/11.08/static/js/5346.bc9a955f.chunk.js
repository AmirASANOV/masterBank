"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5346,5728],{45346:(e,t,n)=>{n.d(t,{Z:()=>W});n(63975),n(59749),n(86544),n(84254),n(752),n(21694),n(76265),n(89730),n(30024),n(12826),n(34284),n(77049),n(64043),n(69373),n(59903),n(79288),n(40739),n(69358),n(81919),n(49693),n(47522),n(99474),n(35082),n(97195),n(34338),n(38077),n(60228),n(96869),n(39772),n(50886);var r=n(67294),a=n(34047),o=n(52322),c=n(68322),i=n(60731),l=n(96546),s=n(13931),u=n(55590),m=n(94057),f=n(48616),d=n(69640),b=(n(73964),n(98742),n(4771)),h=r.lazy((function(){return Promise.all([n.e(1227),n.e(1341),n.e(3925)]).then(n.bind(n,96483))})),p=r.lazy((function(){return Promise.all([n.e(1227),n.e(251)]).then(n.bind(n,71022))})),_=r.lazy((function(){return Promise.all([n.e(1227),n.e(1341),n.e(1987)]).then(n.bind(n,93593))})),v=r.lazy((function(){return n.e(4287).then(n.bind(n,4810))})),y=function(e){var t=e.placement,n=(0,b.j)("children"===t),a=n.data,o=n.sendMFO,i=n.finished,l=(0,c.C)((function(e){return e.config})).viewport;switch(a.decision_type){case"MFO":var s;return null!==(s=a.mfo_response)&&void 0!==s&&s.some((function(e){return"Zaimer"===e.name&&"APPROVED"===e.status}))?r.createElement(v,{style:{minHeight:0}}):r.createElement(_,{sendMFO:o,decision_list:a.mfo_response,viewport:l,inProfile:!1,status:"finish",hideDescription:!0});case"WAIT_MFO":return r.createElement(_,{sendMFO:o,inProfile:!1,decision_list:a.mfo_response,viewport:l,status:"wait"});case"CARD":return r.createElement(h,{mfo_response:a.mfo_response,finished:i,decision_type:a.decision_type,installment_card_list:a.installment_card_response,inProfile:!1,decision_list:a.credit_card_response,viewport:l,status:"finish"});case"CASH":return r.createElement(p,{credit_card_list:a.credit_card_response,product:"credit_cash",inProfile:!1,decision_list:a.credit_cash_response,viewport:l,status:"finish"});case"ALL_REJECTED":return null;default:return r.createElement(_,{sendMFO:o,decision_list:a.mfo_response,viewport:l,inProfile:!1,status:"finish",hideDescription:!0})}};const g=(0,r.memo)(y);var E=n(98752),k=n(24645),S=function(e){var t=e.location,n=e.currentUrl,a=e.active,o=e.intervalId,c=e.render,i=e.setActiveBlock;return r.createElement(k.P,{colDesktop:4},r.createElement("div",{className:"banner-panel__item ".concat(a?"banner-panel__active":""),style:a?{bottom:"3%"}:{background:"rgba(241, 241, 241, 0.9)"},onClick:function(){clearTimeout(o),i({location:t,url:n})},"aria-hidden":!0},c,a?r.createElement("span",{className:"banner-panel__band-border-bottom__".concat(l.Gh)}):null))},C=function(e){var t=e.location,n=e.currentUrl,a=e.active,o=e.intervalId,c=e.render,i=e.setActiveBlock;return r.createElement(k.P,{colDesktop:3},r.createElement("div",{className:"banner-sm__panel--item",onClick:function(){clearTimeout(o),i({location:t,url:n})},"aria-hidden":!0},r.createElement("div",{style:{position:"relative",zIndex:10}},c),a?r.createElement("div",{className:"banner-sm__active"}):null))},w=function(e){switch(e){case"mfo":return"Отписаться от звонков";case"CreditCardPage":case"InstallmentCardPage":return"Оформить карту";default:return"Оформить заявку"}},I=function(e){switch(e){case"mfo":return"mfo";case"CreditCardPage":default:return"credit_card";case"CreditCashPage":return"credit_cash";case"CarCreditPage":return"car_credit";case"InstallmentCardPage":return"installment_card";case"hypothec":return"hypothec"}};function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}var O=["currentUrl","render"];function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){var r;return r=function(e,t){if("object"!=G(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==G(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,c,i=[],l=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D="title-text fs-22 mb-20",M="title-text fs-30-26-24 lh-30 mb-8",U="kk_sobank"===l.Gh,z=(0,r.memo)((function(e){var t=e.card,n=e.sm,a=(0,r.useContext)(u.t),o=a.limit,c=a.free_period;return r.createElement("div",{className:t?"":"mb-36"},r.createElement("h1",{className:"banner__title ".concat(l.Gh," ").concat(l.Gh,"__credit ").concat(t?D:M," ").concat(!t&&U?"banner-sm-title":"")},n?"Кредитные карты":"Кредитные карты\n до ".concat(c," дней без %")),!n&&r.createElement("p",{className:"banner__description ".concat(l.Gh," ").concat(l.Gh,"__credit ").concat(t?"fs-20":"fs-24-20-18"," ").concat(!t&&U?"banner-sm-description":"")},"До ",o," ₽ ",r.createElement("br",null),"Обслуживание 0 ₽*",r.createElement("br",null),"Рассрочка"))})),Y=(0,r.memo)((function(e){var t=e.card,n=e.sm;return r.createElement("div",{className:t?"":"mb-36"},r.createElement("h1",{className:"banner__title ".concat(l.Gh," ").concat(t?D:M," ").concat(!t&&U?"banner-sm-title":"")},"Кредит\n наличными"),!n&&r.createElement("p",{className:"banner__description ".concat(l.Gh," ").concat(t?"fs-20":"fs-24-20-18"," ").concat(!t&&U?"banner-sm-description":"")},"Ставка от ",r.createElement("span",{style:{fontWeight:t?"normal":"bold"}},"5,5% "),!t&&r.createElement("br",null),"на весь срок"))})),F=(0,r.memo)((function(e){var t=e.card,n=e.sm;return r.createElement("div",{className:t?"":"mb-36"},r.createElement("h1",{className:"banner__title ".concat(l.Gh," ").concat(t?D:M," ").concat(!t&&U?"banner-sm-title":"")},"Карты\n рассрочки"),!n&&r.createElement("p",{className:"banner__description ".concat(l.Gh," ").concat(t?"fs-20":"fs-24-20-18"," ").concat(!t&&U?"banner-sm-description":"")},"Ставка 0%",r.createElement("br",null),"Обслуживание 0 ₽*",r.createElement("br",null),"Выпуск 0 ₽"))})),R=(0,r.memo)((function(e){var t=e.card;return r.createElement("div",{className:t?"":"mb-36"},r.createElement("h2",{className:"banner__title ".concat(l.Gh," ").concat(t?D:M," ").concat(!t&&U?"banner-sm-title":"")},"Надоели звонки с\nкредитными\nпредложениями?"),r.createElement("p",{className:"banner__description ".concat(l.Gh," ").concat(t?"fs-20":"fs-24-20-18"," ").concat(!t&&U?"banner-sm-description":"")},"Отписаться от звонков",r.createElement("br",null),"очень просто.",r.createElement("br",null)))})),B=(0,r.memo)((function(e){var t=e.card,n=e.sm;return r.createElement("div",{className:t?"":"mb-36"},r.createElement("h1",{className:"banner__title ".concat(l.Gh," ").concat(t?D:M)},"Ипотека"),!n&&r.createElement("p",{className:"banner__description ".concat(l.Gh," ").concat(t?"fs-20":"fs-24-20-18"," ").concat(!t&&U?"banner-sm-description":"")},"Ставка от ",r.createElement("b",null,"10%"),r.createElement("br",null),"на весь срок"))})),Z=(0,r.memo)((function(e){var t=e.card,n=e.sm;return r.createElement("div",{className:t?"":"mb-36"},r.createElement("h1",{className:"banner__title ".concat(l.Gh," ").concat(t?D:M," ").concat(!t&&U?"banner-sm-title":"")},"Автокредит"),!n&&r.createElement("p",{className:"banner__description ".concat(l.Gh," ").concat(t?"fs-20":"fs-24-20-18"," ").concat(!t&&U?"banner-sm-description":"")},"До 7 000 000 ₽",r.createElement("br",null),"До 7 лет"))}));const W=(0,r.memo)((function(e){var t=e.location,n=e.open,u=(0,c.C)((function(e){return e.config.viewport})),b=[{location:"CreditCardPage",currentUrl:"/user/credit/credit_card/credit_parameters_info/",render:r.createElement(z,{card:!0,sm:U})},{location:"CreditCashPage",currentUrl:"/user/credit/credit_cash/credit_parameters_info/",render:r.createElement(Y,{card:!0,sm:U})},{location:"InstallmentCardPage",currentUrl:"/user/credit/installment_card/credit_parameters_info/",render:r.createElement(F,{card:!0,sm:U})},{location:"mfo",currentUrl:"/user/credit/mfo/credit_parameters_info/",render:r.createElement(R,{card:!0,sm:U})},{location:"hypothec",currentUrl:"/hypothec",render:r.createElement(B,{card:!0,sm:U})},{location:"CarCredit",currentUrl:"/user/credit/car_credit/credit_parameters_info/",render:r.createElement(Z,{card:!0,sm:U})}],h=(0,o.Z)(),p=(0,i.T)(),_=(0,c.C)((function(e){return e.session})),v=_.isAuth,y=_.token,G=_.phoneNumber,P=(0,c.C)((function(e){return e.validator})).current_step,x=j(r.useState({location:t,url:b.filter((function(e){return e.location===t}))[0].currentUrl}),2),T=x[0],D=x[1],M=j((0,r.useState)(!1),2),W=M[0],$=M[1],V=j((0,r.useState)(0),2),L=V[0],H=V[1],J=v&&"decisions"===P;(0,r.useEffect)((function(){L>0&&W?h(d.JP.setCurrentStep("decisions")):a.D.getStatus().then((function(){$(!0),H((function(e){return e+1}))})).catch((function(){$(!1)}))}),[W,L]);var K;r.useEffect((function(){return n&&"desktop"===u?(clearTimeout(K),K=setTimeout((function(){D((function(e){var t=b.findIndex((function(t){return t.location===e.location}));return t===b.length-4?(clearTimeout(K),b[0]):(clearTimeout(K),b[t+1])}))}),1e4)):clearTimeout(K),function(){return clearTimeout(K)}}),[T,u]);var q=function(e){if((0,s.Z)({id:l.GY.yandexMetrics[l.Gh],methodName:"reachGoal",args:["button-mobile-1"]}),"hypothec"!==t){if("mfo"===t)return e.stopPropagation(),n=!0,void h((0,f.ty)(n));var n;if(v)p.push(T.url);else if(!y||!G)return h((0,m.K4)(!0,{href:T.url}));return h((0,m.aK)({view:!0,href:T.url}))}p.push("/hypothec")},Q=function(){switch(T.location){case"CreditCardPage":return r.createElement(z,{card:!1,sm:!1});case"CreditCashPage":return r.createElement(Y,{card:!1,sm:!1});case"InstallmentCardPage":return r.createElement(F,{card:!1,sm:!1});case"mfo":return r.createElement(R,{card:!1,sm:!1});case"hypothec":return r.createElement(B,{card:!1,sm:!1});case"CarCredit":return r.createElement(Z,{card:!1,sm:!1});default:return null}};return r.createElement(r.Fragment,null,"desktop"===u?r.createElement(r.Fragment,null,r.createElement("div",{className:"banner-root banner-root_layout",style:{background:l.GY.bannerBackground[l.Gh],height:"100%",overflow:"hidden"}},r.createElement("div",{className:"banner-root__background"},r.createElement("div",{className:"grid-root"},r.createElement("div",{className:"banner-root__body"},r.createElement("div",{className:"banner-root__content"},l.GY.banner[l.Gh].useCloud&&r.createElement("img",{className:"cloud-animation",src:l.GY.banner[l.Gh].cloud.left,alt:"banner",style:{width:"initial",height:"initial",position:"absolute",left:"-165px"}}),r.createElement("div",{className:"banner-root__content-support"},r.createElement("div",{className:"banner-root__text banner-root__".concat(l.Gh)},Q(),r.createElement(E.Z,{type:"mainBold",text:w(T.location),style:{width:350,fontWeight:"bold",fontSize:26,padding:"16px 0",borderRadius:10},onClick:q}))),l.GY.banner[l.Gh].useCloud&&r.createElement("img",{className:"cloud-animation",alt:"banner",src:l.GY.banner[l.Gh].cloud.right,style:{width:"initial",height:"initial",position:"absolute",right:"-140px",bottom:0,zIndex:0}}),r.createElement("div",{className:"banner-root__image",style:A({height:"100%",display:"flex",alignItems:"flex-end",backgroundImage:"url(".concat(l.GY.banner[l.Gh].image[I(T.location)].config[u].src.web,")"),backgroundSize:"credit_cash"===I(T.location)?"cover":"contain",backgroundPosition:"center top 24px"},l.GY.banner[l.Gh].imageContainerStyle)})))))),n?r.createElement("div",{className:"".concat("kk_sobank"!==l.Gh?"banner-panel":"banner-sm-panel")},r.createElement(k.r,{container:!0,gridStyle:{height:"100%"}},b.map((function(e){var t=e.currentUrl,n=e.render,a=N(e,O),o=T.location===a.location;return"mfo"===a.location||"hypothec"===a.location||"CarCredit"===a.location?null:r.createElement(r.Fragment,{key:a.location+t},"kk_sobank"!==l.Gh?r.createElement(S,{active:o,intervalId:K,location:a.location,currentUrl:t,render:n,setActiveBlock:D}):r.createElement(C,{active:o,intervalId:K,location:a.location,currentUrl:t,render:n,setActiveBlock:D}))})))):null):r.createElement("div",{className:"CreditCardPage"===t?"banner-root__body banner-root__body__".concat(l.Gh):"banner-root__body",style:{background:l.GY.bannerBackground[l.Gh],overflow:"hidden"}},"mobile"===u&&"kkd_sobank"===l.Gh&&"CreditCardPage"===t&&r.createElement("div",{className:"banner-root-kkd_sobank-background"},r.createElement("div",{className:"banner-root-kkd_sobank-background__top"}),r.createElement("div",{className:"banner-root-kkd_sobank-background__bottom"})),"mobile"!==u&&l.GY.banner[l.Gh].useCloud?r.createElement("img",{className:"cloud-animation",alt:"banner",src:l.GY.banner[l.Gh].cloud.right,style:{width:"initial",height:"100%",position:"absolute",right:"-30px",bottom:0,zIndex:0}}):"",r.createElement("div",{className:"CreditCardPage"===t?"banner-root__content banner-root__content__".concat(l.Gh):"banner-root__content"},r.createElement("div",{className:"banner-root__image banner-root__image__".concat(l.Gh),style:A("tablet"===u?{marginRight:100,display:"flex",backgroundImage:"url(".concat(l.GY.banner[l.Gh].image[I(T.location)].config[u].src.web,")"),backgroundSize:"contain",backgroundPosition:"center top 10px",minWidth:254,alignItems:"flex-end"}:{display:"flex",alignItems:"flex-end",backgroundImage:"url(".concat(l.GY.banner[l.Gh].image[I(T.location)].config[u].src.web,")"),backgroundPosition:"center bottom 24px",backgroundSize:"contain",height:"100%"},l.GY.banner[l.Gh].imageContainerStyle)}),r.createElement("div",{className:"CreditCardPage"===t?"banner-root__block-text banner-root__block-text__".concat(l.Gh):"banner-root__block-text"},r.createElement("div",{className:"CreditCardPage"===t?"banner-root__text banner-root__text__".concat(l.Gh," banner-root__").concat(l.Gh,"__credit"):"banner-root__text banner-root__".concat(l.Gh)},Q()),r.createElement("div",{className:"banner-root__block-button"},r.createElement(E.Z,{type:"mainBold",text:w(T.location),style:{width:"100%",zIndex:10,fontSize:20,fontWeight:"bold",borderRadius:10},onClick:q}))))),J&&r.createElement(g,{placement:"children"}))}))},4771:(e,t,n)=>{n.d(t,{j:()=>y});n(38077),n(60228),n(89730),n(76801),n(43843),n(34284),n(96869),n(63975),n(59749),n(86544),n(84254),n(752),n(21694),n(76265),n(30024),n(12826),n(77049),n(64043);var r=n(67294),a=n(52322),o=n(68322),c=n(60731);n(25728),n(97195),n(62506),n(49693),n(47522);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,c,i=[],l=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const s=function(){var e=i((0,r.useState)([]),2),t=e[0],n=e[1],a=function(e){n((function(t){if(t.filter((function(t){return t.key===e.key})).length>0)return t;var n=t.slice();return n.push(e),n}))},o={getTimeouts:t,setInterval:function(e){function t(t,n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,n,r){r&&t();var o=setInterval((function(){t()}),1e3*n||3e4),c={key:"".concat(e,"interval"),useNow:r,timeout:n,intervalID:o};a(c)})),deleteInterval:function(e){!function(e){n((function(t){var n=t.slice(),r=n.find((function(t){return t.key===e}));if(r){var a=n.indexOf(r);return r.intervalID&&(clearTimeout(r.intervalID),clearInterval(r.intervalID)),n.splice(a,1),n}return t}))}("".concat(e,"interval"))},setTimeout:function(e){function t(t,n,r,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t,n,r){r&&t();var o=setTimeout((function(){t()}),1e3*n||3e4),c={key:"".concat(e,"timeout"),useNow:r,timeout:n,intervalID:o};a(c)})),clearAll:function(){t.forEach((function(e){e.intervalID&&(clearInterval(e.intervalID),clearTimeout(e.intervalID))}));for(var e=setInterval("");e>=0;e--)clearInterval(e);for(var n=setTimeout("");n>=0;n--)clearTimeout(n)}};return(0,r.useEffect)((function(){return function(){return o.clearAll()}}),[]),o};n(8472),n(42227),n(97389);var u=n(50533);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,c,i=[],l=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=n(96546),b=n(32827),h=n(36574),p=n(94057);function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,c,i=[],l=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t=(0,c.T)(),n=(0,a.Z)(),i=(0,o.C)((function(e){return e.anketaResponse})),l=(0,o.C)((function(e){return e.config.zaimer.isShow})),f=s(),v="getDecisionStatus",y=_((0,r.useState)([]),2),g=y[0],E=y[1],k=function(){var e=m((0,r.useState)({seconds:"00",minute:"00"}),2),t=e[0],n=e[1],a=m((0,r.useState)(!1),2),o=a[0],c=a[1],i=m((0,r.useState)(0),2),l=i[0],s=i[1],f=(0,r.useRef)();return(0,r.useEffect)((function(){return o&&(f.current=setInterval((function(){var e=Math.floor(l%60),t=Math.floor(l/60);(0,u.dC)((function(){n({seconds:String(e).padStart(2,"0"),minute:String(t).padStart(2,"0")}),s((function(e){return e+1}))}))}),1e3)),function(){return clearInterval(f.current)}}),[o,l]),{timer:t,isActive:o,stopTimer:function(){(0,u.dC)((function(){c(!1),s(0),n({seconds:"00",minute:"00"})})),clearInterval(f.current)},runTimer:c,setDate:function(e){s(Math.abs(Math.round(Date.now()-Math.round(+e.toFixed()))/1e3))}}}(),S=k.timer,C=k.runTimer,w=k.stopTimer,I=k.isActive,G=k.setDate,O=function(){f.deleteInterval(v),n((0,h.dL)(b.I)),w()},N=function(){e||n((0,h.FV)(f.clearAll))};return(0,r.useEffect)((function(){return O(),f.setInterval(v,N,15,!0),function(){return O()}}),[]),(0,r.useEffect)((function(){i.mfo_timestamp&&"MFO"===i.decision_type&&(I||(G(i.mfo_timestamp),C(!0)))}),[i.mfo_timestamp,i.decision_type,i]),(0,r.useEffect)((function(){i.finished&&(f.clearAll(),w())}),[i.finished,i]),(0,r.useEffect)((function(){g.filter((function(e){return"error"===e})).length>=5&&(f.clearAll(),w(),n((0,p.wN)(["Нам не удалось загрузить результаты последней заявки на кредит, пожалуйста, попробуйте посетить этот раздел позже."],20,"")),E([]))}),[g]),(0,r.useEffect)((function(){E((function(e){var t=e.slice();return t.push(i.response_status||""),t}))}),[i.response_status]),(0,r.useEffect)((function(){if(t.location.pathname.includes("user")&&i.mfo_response){var e=i.mfo_response.filter((function(e){return"Zaimer"===e.name&&"APPROVED"===e.status}));if(e.length>0&&e[0].login_link&&!l&&i.finished&&"sop"!==d.Gh){var r=e[0].login_link;setTimeout((function(){n((0,p.dI)({link:r,isShow:!0})),t.push("/zaimerapprove")}),1e3)}}}),[i.mfo_response,i.finished,t.location.pathname]),{timer:S,redirect:function(e){return t.push(e)},finished:i.finished,status:i.response_status,data:i,sendMFO:function(){n((0,h.$j)())},sendDeposit:function(){n((0,h.e9)())}}}},35947:(e,t,n)=>{var r=n(30071);e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},77254:(e,t,n)=>{var r=n(68844),a=n(43126),o=n(34327),c=n(90534),i=n(74684),l=r(c),s=r("".slice),u=Math.ceil,m=function(e){return function(t,n,r){var c,m,f=o(i(t)),d=a(n),b=f.length,h=void 0===r?" ":o(r);return d<=b||""===h?f:((m=l(h,u((c=d-b)/h.length))).length>c&&(m=s(m,0,c)),e?f+m:m+f)}};e.exports={start:m(!1),end:m(!0)}},39772:(e,t,n)=>{var r=n(79989),a=n(2960).findIndex,o=n(87370),c="findIndex",i=!0;c in[]&&Array(1)[c]((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o(c)},25728:(e,t,n)=>{var r=n(79989),a=n(2960).find,o=n(87370),c="find",i=!0;c in[]&&Array(1)[c]((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o(c)},8472:(e,t,n)=>{var r=n(79989),a=n(77254).start;r({target:"String",proto:!0,forced:n(35947)},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);