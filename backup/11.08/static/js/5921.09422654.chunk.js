"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5921],{58877:(e,t,a)=>{a.d(t,{R:()=>r});var n=a(67294),r=function(e,t){var a=(0,n.useRef)(!0);(0,n.useEffect)((function(){var t;if(a.current?a.current=!1:t=e(),t&&"function"==typeof t)return t}),t)}},75921:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});a(28436),a(76801),a(43843);var n=a(67294),r=a(50533),i=a(22290),l=a(34292),u=a(98752),o=a(1992),d=a(32175),s=a(92576),c=a(68322),f=a(96960),m=a(58877),v=a(96546),p=a(96596),_=a(69640),h=a(41665),y=a(70555),b=a(75253);const g=(0,n.memo)((function(e){var t,a,g,w,S,E,P,D,I,O,k=e.lsKey,j=(0,c.C)((function(e){return e.config.viewport})),V=(0,r.I0)(),A=(0,f.Z)(),C=(0,c.C)((function(e){return e.validator.additional_info})),N=(0,c.C)((function(e){return e.validator})),T=p.I.helpers.getInputStatus,q=(0,c.C)((function(e){return e.config.user})).type,M=(0,l.M)(),R=M.get(k);(0,y.j)(q,"additional_info");var Y=function(){V(h.pt.sendAdditionalInfoState()),M.remove(k)};return(0,m.R)((function(){(0,b.ZO)(C,"additional_info")||!R?M.set(k,C):V(_.JP.updateAdditionalInfoState(p.I.additional_info.build(N,{value:p.I.packageData.additional_info(R,!1),type:"check"})))}),[C]),n.createElement("div",{className:"wrapper"},n.createElement("form",{style:{width:"100%"},onSubmit:function(e){return A.submitHandler(e,Y)},onKeyDown:function(e){return A.enterHandler(e,Y)},ref:A.form,autoComplete:"off",autoSave:"off","aria-hidden":!0},n.createElement(d.Z,{id:"extra-info",style:{marginBottom:20}},n.createElement(s.N,{title:"Дополнительная информация",containerId:"header",fullGrid:!0}),n.createElement(o.U,{defaultValue:(null===(t=C.education.result.value)||void 0===t||null===(t=t.title)||void 0===t?void 0:t.trim())||(null==R||null===(a=R.education.result.value)||void 0===a||null===(a=a.title)||void 0===a?void 0:a.trim())||"",required:C.education.config.required,setState:function(e){return V(_.JP.updateAdditionalInfoDropdowns({value:e,touched:!0,field:"education"}))},data:i.l9,status:T(C.education.result.status),message:C.education.result.message||"",name:C.education.result.fieldName,placeholder:"например: Среднее полное"}),n.createElement(o.U,{defaultValue:(null===(g=C.family_status.result.value)||void 0===g||null===(g=g.title)||void 0===g?void 0:g.trim())||(null==R||null===(w=R.family_status.result.value)||void 0===w||null===(w=w.title)||void 0===w?void 0:w.trim())||"",required:C.family_status.config.required,setState:function(e){return V(_.JP.updateAdditionalInfoDropdowns({value:e,touched:!0,field:"family_status"}))},data:i.yB,status:T(C.family_status.result.status),message:C.family_status.result.message||"",name:C.family_status.result.fieldName,placeholder:"например: Замужем/Женат"}),n.createElement(o.U,{defaultValue:(null===(S=C.children.result.value)||void 0===S||null===(S=S.title)||void 0===S?void 0:S.trim())||(null==R||null===(E=R.children.result.value)||void 0===E||null===(E=E.title)||void 0===E?void 0:E.trim())||"",required:C.children.config.required,setState:function(e){return V(_.JP.updateAdditionalInfoDropdowns({value:e,touched:!0,field:"children"}))},data:i.KX,status:T(C.children.result.status),message:C.children.result.message||"",name:C.children.result.fieldName,placeholder:"например: 2"}),n.createElement(o.U,{defaultValue:(null===(P=C.having_car.result.value)||void 0===P||null===(P=P.title)||void 0===P?void 0:P.trim())||(null==R||null===(D=R.having_car.result.value)||void 0===D||null===(D=D.title)||void 0===D?void 0:D.trim())||"",required:C.having_car.config.required,setState:function(e){return V(_.JP.updateAdditionalInfoDropdowns({value:e,touched:!0,field:"having_car"}))},data:i.ac,status:T(C.having_car.result.status),message:C.having_car.result.message||"",name:C.having_car.result.fieldName,placeholder:"например: Иномарка"}),n.createElement(o.U,{defaultValue:(null===(I=C.having_real_estate.result.value)||void 0===I||null===(I=I.title)||void 0===I?void 0:I.trim())||(null==R||null===(O=R.having_real_estate.result.value)||void 0===O||null===(O=O.title)||void 0===O?void 0:O.trim())||"",required:C.having_real_estate.config.required,setState:function(e){return V(_.JP.updateAdditionalInfoDropdowns({value:e,touched:!0,field:"having_real_estate"}))},data:i.d2,status:T(C.having_real_estate.result.status),message:C.having_real_estate.result.message||"",name:C.having_real_estate.result.fieldName,placeholder:"например: Квартира"})),n.createElement("div",{className:"btn-group ".concat("mobile"!==j?"reverse-row mr0":"mr0"),id:"btnGroupCredit"},("cc_sobank"===v.Gh||"sovbank"===v.Gh&&"mobile"===j)&&(window.location.pathname.includes("user/credit/credit_card")||window.location.pathname.includes("user/change_anketa/credit_card"))&&n.createElement("div",{className:"btn-group__title"},"Остался последний шаг"),n.createElement(u.Z,{type:"mainBold",text:"Продолжить",htmlType:"submit"}),n.createElement(u.Z,{type:"escape",onClick:function(){return V(_.JP.setApplicationStep("work_info"))},text:"Назад",htmlType:"button"}))))}))},70555:(e,t,a)=>{a.d(t,{j:()=>b});var n=a(67294),r=a(52322),i=a(68322),l=a(93569),u=(a(64043),a(34284),a(57267),a(69373),a(59903),a(59749),a(86544),a(60228),a(79288),a(40739),a(69358),a(38077),a(81919),a(49693),a(47522),a(99474),a(35082),a(84254),a(752),a(21694),a(76265),a(30381)),o=a.n(u),d=a(58794),s=a(89819),c=a(22283),f=a(96596);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){_(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _(e,t,a){var n;return n=function(e,t){if("object"!=m(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==m(n)?n:String(n))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(e,t){var a=e||"";return t.test(a)?e:null},y=function(e){return function(t,a){var n=a().validator,r=n.passport_info,i=n.work_info,l=n.additional_info,u=n.credit_parameters_info,m="credit_parameters_info"===e?{step:"CREDIT_PARAMETERS_STEP",step_data:p(p({},f.I.packageData.credit_parameters_info(u,!1)),{},{name:h(u.name.result.value,s.fv),surname:h(u.surname.result.value,s.fv),patronymic:h(u.patronymic.result.value,s.fv),credit_sum:h(u.credit_sum.result.value,s.aE),phone_number:(0,c.VV)(),email:"".concat((0,c.VV)(),"@mail.ru"),deposit_car:null})}:"work_info"===e?{step:"WORK_STEP",step_data:p(p({},f.I.packageData.work_info(i,!1)),{},{job_title:h(i.job_title.result.value,s.CE),phone_work:(0,c.VV)(),monthly_income:h(i.monthly_income.result.value&&i.monthly_income.result.value.replace(/\s/g,""),s.yo)})}:"additional_info"===e?{step:"ADDITIONAL_INFO_STEP",step_data:f.I.packageData.additional_info(l,!1)}:{step:"PASSPORT_STEP",step_data:p(p({},f.I.packageData.passport_info(r,!0)),{},{series_and_number:h(r.series_and_number.result.value,s.NC),born_city:h(r.born_city.result.value,s.rc),department_code:h(r.department_code.result.value,s.Se),date_birthday:o()(r.date_birthday.result.value,"DD-MM-YYYY").isValid()?r.date_birthday.result.value:null,issued_date:o()(r.issued_date.result.value,"DD-MM-YYYY").isValid()?r.issued_date.result.value:null})};"/"!==window.location.pathname&&t(d.V.endpoints.sendInfoPartialData.initiate(m)).unwrap()}},b=function(e,t){var a=(0,i.C)((function(e){return e.config.provider_data})),u=(0,r.Z)(),o=(0,l.I)(3600),d=function(n){n.returnValue="Вы уверены, что хотите закрыть страницу?","MTS_ID"===e&&a&&u(y(t))};(0,n.useEffect)((function(){0===o&&"MTS_ID"===e&&u(y(t))}),[o]),(0,n.useEffect)((function(){return window.addEventListener("beforeunload",d),function(){window.removeEventListener("beforeunload",d)}}),[d])}}}]);