"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7627],{24645:(e,t,r)=>{r.d(t,{P:()=>u,r:()=>s});r(69373),r(59903),r(59749),r(86544),r(60228),r(79288),r(40739),r(69358),r(38077),r(81919),r(49693),r(47522),r(99474),r(35082),r(84254),r(752),r(21694),r(76265);var n=r(67294),o=r(68322);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){var n;return n=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==i(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){var t=e.justify,r=void 0===t?"flex-start":t,o=e.align,i=void 0===o?"flex-start":o,c=e.direction,l=void 0===c?"row":c,s=e.wrap,u=void 0===s?"wrap":s,f=e.space,p=void 0===f?0:f,m=e.alignSpace,b=void 0===m?0:m,y=e.container,d=void 0!==y&&y,h=e.style,v=e.children,C=e.className,g=e.gridStyle;if(p&&!d)throw Error("Для того, чтобы использовать space-аттрибут в компоненте Grid - передай container=true");return n.createElement("div",{className:C,style:a({boxSizing:"border-box",display:"flex",justifyContent:r,alignItems:i,flexDirection:l,flexWrap:u,width:"100%",height:"100%"},h)},n.createElement("div",{style:a({position:"relative",display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridRowGap:b,gridColumnGap:p,gridAutoRows:"auto",width:d?"100%":"",height:"fit-content"},g)},v))},u=function(e){var t=e.justify,r=void 0===t?"":t,i=e.align,c=void 0===i?"":i,l=e.direction,s=void 0===l?"row":l,u=e.wrap,f=void 0===u?"wrap":u,p=e.colDesktop,m=e.colMobile,b=e.colTablet,y=e.style,d=e.textAlign,h=e.children,v=e.useWrapperLayout,C=e.className,g=(0,o.C)((function(e){return e.config.viewport})),w={desktop:"span ".concat(p||b||m," / auto"),tablet:"span ".concat(b||p||m," / auto"),mobile:"span ".concat(m||b||p," / auto")};return n.createElement("div",{className:(v?"wrapper-background":"")+(C?" ".concat(C):""),style:a({position:"relative",display:"flex",justifyContent:r,alignItems:c,flexWrap:f,textAlign:d,fontSize:0,flexDirection:s,gridColumn:w[g],height:"inherit"},y)},h)}},17627:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});r(76801),r(43843),r(64043),r(86466),r(63975),r(59749),r(86544),r(60228),r(84254),r(752),r(21694),r(76265),r(89730),r(30024),r(12826),r(34284),r(77049);var n=r(67294),o=r(89250),i=r(22283),c=r(34292),a=r(52322),l=r(68322),s=r(60731),u=r(94057),f=r(75253),p=(r(50886),r(34338),r(96546)),m=r(24645),b=(r(69373),r(59903),r(79288),r(40739),r(69358),r(38077),r(81919),r(49693),r(47522),r(99474),r(35082),r(65402));function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){var n;return n=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==y(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=function(e){var t=e.color,r=e.size,o=e.containerClassName,i=e.containerStyle;return n.createElement("div",{style:h({width:r||b.W.sizes.width,height:r||b.W.sizes.height,flexShrink:0},i),className:o},n.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 25 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M23.3125 0.131505L1.16735 8.27737C-0.343973 8.85641 -0.33523 9.66062 0.890063 10.0192L6.57562 11.7111L19.7303 3.79398C20.3524 3.43298 20.9207 3.62718 20.4535 4.02274L9.7956 13.198H9.7931L9.7956 13.1992L9.40341 18.7894C9.97796 18.7894 10.2315 18.538 10.5538 18.2414L13.3154 15.6798L19.0596 19.7271C20.1188 20.2835 20.8794 19.9975 21.143 18.7918L24.9138 1.84003C25.2997 0.363835 24.323 -0.304562 23.3125 0.131505Z",fill:b.W.colors[t||"primaryColor"]})))};function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){var n;return n=function(e,t){if("object"!=g(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==g(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e){var t=e.color,r=e.size,o=e.containerClassName,i=e.containerStyle;return n.createElement("div",{style:O({width:r||b.W.sizes.width,height:r||b.W.sizes.height,flexShrink:0},i),className:o},n.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M13.2989 0.00407432C11.0519 0.0311993 6.22107 0.400449 3.51907 2.87932C1.50919 4.87082 0.807442 7.8152 0.725192 11.4561C0.656942 15.0838 0.574691 21.8966 7.14157 23.7516V26.577C7.14157 26.577 7.10044 27.7075 7.84769 27.9393C8.76819 28.2307 9.29232 27.361 10.1673 26.4265L11.7992 24.5811C16.2923 24.9547 19.7337 24.0937 20.1301 23.966C21.0418 23.6746 26.1772 23.0183 27.0163 16.2047C27.8773 9.16795 26.5972 4.73432 24.2863 2.72882H24.2723C23.5749 2.08657 20.7723 0.0443243 14.5108 0.0215743C14.5108 0.0215743 14.0462 -0.00992568 13.2989 0.00319932V0.00407432ZM13.3759 1.98245C14.0138 1.97807 14.4014 2.0052 14.4014 2.0052C19.7013 2.0192 22.2309 3.61432 22.8277 4.15157C24.7737 5.81932 25.7764 9.81633 25.0423 15.6911C24.3449 21.3873 20.1799 21.7478 19.4091 21.9937C19.0809 22.0987 16.0499 22.846 12.2314 22.6001C12.2314 22.6001 9.38769 26.0318 8.49869 26.9156C8.35782 27.0705 8.19332 27.116 8.08832 27.0932C7.93782 27.0565 7.89232 26.8701 7.90107 26.6146L7.92819 21.9255C2.35882 20.3855 2.68694 14.5746 2.74644 11.5392C2.81469 8.50383 3.38432 6.02057 5.08007 4.33882C7.36294 2.2747 11.4649 1.99645 13.3742 1.98245H13.3759ZM13.7959 5.01695C13.7501 5.01649 13.7046 5.0251 13.6621 5.0423C13.6196 5.05949 13.581 5.08493 13.5484 5.11714C13.5157 5.14935 13.4898 5.1877 13.4721 5.22997C13.4544 5.27224 13.4452 5.31761 13.4451 5.36345C13.4451 5.55945 13.6043 5.71432 13.7959 5.71432C14.6635 5.69783 15.5258 5.85325 16.333 6.17162C17.1402 6.49 17.8764 6.96503 18.4991 7.56932C19.7704 8.80395 20.3899 10.463 20.4136 12.6321C20.4136 12.8237 20.5684 12.983 20.7644 12.983V12.969C20.8568 12.9692 20.9455 12.9329 21.0113 12.868C21.077 12.8031 21.1144 12.7148 21.1153 12.6224C21.1578 11.6015 20.9922 10.5825 20.6287 9.62747C20.2651 8.67245 19.7111 7.80134 19.0004 7.06707C17.6153 5.71345 15.8601 5.01607 13.7959 5.01607V5.01695ZM9.18382 5.81932C8.93615 5.78314 8.68355 5.83285 8.46807 5.9602H8.44969C7.94942 6.25345 7.49875 6.62408 7.11444 7.05833C6.79507 7.42758 6.62182 7.8012 6.57632 8.16082C6.54919 8.3752 6.56757 8.58957 6.63144 8.79432L6.65419 8.80833C7.01382 9.86533 7.48369 10.8821 8.05769 11.8393C8.79709 13.1842 9.70703 14.4279 10.7649 15.5397L10.7964 15.5852L10.8463 15.622L10.8778 15.6587L10.9146 15.6902C12.0304 16.7512 13.2771 17.6654 14.6246 18.4106C16.1646 19.2488 17.0991 19.6452 17.6599 19.8097V19.8185C17.8244 19.8683 17.9741 19.8911 18.1246 19.8911C18.6026 19.8561 19.0551 19.662 19.4099 19.3398C19.8422 18.9554 20.2087 18.5029 20.4949 18.0002V17.9915C20.7636 17.4857 20.6726 17.0071 20.2849 16.6833C19.5087 16.0048 18.6692 15.4021 17.7781 14.8835C17.1813 14.5597 16.5749 14.7557 16.3291 15.0838L15.8049 15.7445C15.5363 16.0726 15.0481 16.0271 15.0481 16.0271L15.0341 16.0358C11.3932 15.1057 10.4219 11.4193 10.4219 11.4193C10.4219 11.4193 10.3764 10.918 10.7133 10.6624L11.3696 10.134C11.6837 9.87845 11.9024 9.27295 11.5656 8.67533C11.0505 7.78296 10.4492 6.94331 9.77007 6.16845C9.62161 5.98578 9.41333 5.86149 9.18207 5.81757L9.18382 5.81932ZM14.4014 6.85882C13.9368 6.85882 13.9368 7.56058 14.4058 7.56058C14.9836 7.56995 15.5538 7.69308 16.0839 7.92294C16.6141 8.1528 17.0937 8.48488 17.4954 8.9002C17.8619 9.30446 18.1435 9.77816 18.3236 10.2932C18.5036 10.8083 18.5785 11.3543 18.5437 11.8988C18.5453 11.991 18.5829 12.0788 18.6485 12.1436C18.7141 12.2084 18.8024 12.2449 18.8946 12.2453L18.9086 12.2637C19.0014 12.263 19.0903 12.2258 19.1559 12.1602C19.2216 12.0945 19.2588 12.0057 19.2594 11.9128C19.2909 10.5225 18.8587 9.35608 18.0108 8.42158C17.1586 7.48708 15.9694 6.96295 14.4513 6.85882H14.4014ZM14.9763 8.74533C14.4977 8.73133 14.4793 9.44707 14.9536 9.46107C16.1068 9.52057 16.6668 10.1033 16.7403 11.3021C16.7419 11.3931 16.7791 11.4798 16.8438 11.5438C16.9086 11.6077 16.9958 11.6438 17.0868 11.6442H17.1008C17.1476 11.6422 17.1935 11.6309 17.2359 11.6109C17.2783 11.591 17.3162 11.5628 17.3476 11.528C17.379 11.4932 17.4031 11.4526 17.4185 11.4084C17.434 11.3642 17.4405 11.3173 17.4377 11.2706C17.3554 9.70782 16.5032 8.82758 14.9903 8.7462H14.9763V8.74533Z",fill:b.W.colors[t||"primaryColor"]})))};function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){var n;return n=function(e,t){if("object"!=E(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==E(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(e){var t=e.color,r=e.size,o=e.containerClassName,i=e.containerStyle;return n.createElement("div",{style:k({width:r||b.W.sizes.width,height:r||b.W.sizes.height,flexShrink:0},i),className:o},n.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 28 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M27.358 1.21896C27.5536 0.515712 27.358 0 26.433 0H23.3687C22.589 0 22.2327 0.446144 22.037 0.936146C22.037 0.936146 20.479 5.04823 18.2713 7.7145C17.5586 8.49034 17.2331 8.73534 16.8446 8.73534C16.6504 8.73534 16.3681 8.49034 16.3681 7.78709V1.21896C16.3681 0.375063 16.1432 0 15.4934 0H10.6783C10.192 0 9.89857 0.390187 9.89857 0.762225C9.89857 1.56075 11.0025 1.74525 11.1156 3.99563V8.8775C11.1156 9.94673 10.9382 10.1418 10.5469 10.1418C9.50872 10.1418 6.98238 6.01462 5.48306 1.29004C5.19102 0.372039 4.89619 0.00151296 4.11369 0.00151296H1.05078C0.174664 0.00151296 0 0.447656 0 0.937658C0 1.81785 1.0382 6.17342 4.8361 11.934C7.36804 15.8676 10.9326 18 14.1799 18C16.1264 18 16.3667 17.5266 16.3667 16.71V13.7367C16.3667 12.79 16.5526 12.5994 17.1688 12.5994C17.6215 12.5994 18.4012 12.8474 20.2191 14.7424C22.2955 16.9897 22.6393 17.9985 23.806 17.9985H26.869C27.7437 17.9985 28.181 17.5251 27.9295 16.5905C27.6542 15.6604 26.6621 14.3068 25.3459 12.7053C24.6305 11.7918 23.5615 10.8088 23.2359 10.3173C22.7818 9.68358 22.9132 9.4038 23.2359 8.8412C23.2373 8.84272 26.9696 3.15325 27.358 1.21896Z",fill:b.W.colors[t||"primaryColor"]})))},x=function(e){var t=e.title,r=e.style,i=e.titleStyle,c=e.description,a=e.modal,s=(0,l.C)((function(e){return e.config.viewport})),u=(0,o.TH)().pathname,f={desktop:a?32:28,tablet:a?32:28,mobile:a?25:17},b=[n.createElement("a",{href:"viber://pa?chatURI=svetlana_onlinebanki",target:"_blank",rel:"noreferrer",style:"new_sobank"!==p.Gh||u.includes("user")?{}:{opacity:0}},n.createElement(S,{size:f[s],color:p.GY.globalIconsColor[p.Gh]}),a?"":n.createElement("span",null,"Viber")),n.createElement("a",{href:"https://t.me/OnlinebankiBot",target:"_blank",rel:"noreferrer",style:"new_sobank"!==p.Gh||u.includes("user")?{}:{opacity:0}},n.createElement(C,{size:f[s],color:p.GY.globalIconsColor[p.Gh]}),a?"":n.createElement("span",null,"Telegram")),n.createElement("a",{href:"https://vk.com/write-207835428",target:"_blank",rel:"noreferrer",style:"new_sobank"!==p.Gh||u.includes("user")?{}:{opacity:0}},n.createElement(L,{size:f[s],color:p.GY.globalIconsColor[p.Gh]}),a?"":n.createElement("span",null,"ВКонтакте"))];return n.createElement(n.Fragment,null,n.createElement("div",{className:"social-block"},n.createElement("h2",{className:"social-block__title \n          ".concat("new_sobank"!==p.Gh||u.includes("user")?"":p.Gh),style:i},t),n.createElement("p",{className:"social-block__subtitle color-gray \n           ".concat("new_sobank"!==p.Gh||u.includes("user")?"":p.Gh)},"Выберите удобный способ:")),n.createElement(m.r,{container:!0},n.createElement(m.P,{colMobile:12,justify:"mobile"!==s||"new_sobank"!==p.Gh||u.includes("user")?"center":"flex-start"},b.map((function(e,t){return n.createElement("span",{id:"new_sobank"!==p.Gh||u.includes("user")?"":"socials-block-".concat(p.Gh,"-").concat(t),className:a?"social-block__modal":"social-block__items \n                  ".concat("new_sobank"!==p.Gh||u.includes("user")?"":p.Gh),key:"".concat(e,"_").concat(t+1),style:r},e)})))),c&&n.createElement("p",{className:"social-block__subtitle color-gray ta-center",style:{maxWidth:400,margin:"20px auto 0"}},c))},W=r(4622);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,a=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N={main:"/",cash:"/credit_cash/info",card:"/credit_card/info",installment:"/installment_card/info",MFO:"/mfo/info",hypothec:"/hypothec/info",carCredit:"/car_credit/info/",cashWithSlash:"/credit_cash/info/",cardWithSlash:"/credit_card/info/",installmentWithSlash:"/installment_card/info/",MFOWithSlash:"/mfo/info/",hypothecWithSlash:"/hypothec/info/",carCreditWithSlash:"/car_credit/info/"};const M=function(){var e=(0,l.C)((function(e){return e.config.viewport})),t=(0,l.C)((function(e){return e.session})).isAuth,r=(0,l.C)((function(e){return e.validator.credit_parameters_info.credit_target})),p=D((0,n.useState)(!1),2),m=p[0],b=p[1],y=D((0,n.useState)(!1),2),d=y[0],h=y[1],v=D((0,n.useState)(0),1)[0],C=(0,s.T)(),g=(0,o.TH)(),w=(0,c.M)(),O=(0,i.rs)("utm_source"),j=(0,a.Z)(),S=g.pathname,E=function(){};return(0,n.useEffect)((function(){var e=function(){return w.remove(c.d.showcase)};return window.addEventListener("DOMContentLoaded",e),function(){return window.removeEventListener("DOMContentLoaded",e)}}),[]),(0,n.useEffect)((function(){var e=w.get(c.d.showcase);e&&h(!!e)}),[w]),(0,n.useEffect)((function(){if(!window.location.origin.includes("odobreno"))return/xiaomi/gi.test(window.navigator.userAgent)||(Object.values(N).includes(S)&&"google"!==O&&(!d&&0===v||!d&&1===v&&!t)?document.addEventListener("click",E):document.removeEventListener("click",E)),function(){return document.removeEventListener("click",E)}}),[d,v,g]),(0,n.useEffect)((function(){"/showcase"===S&&(b(!1),j((0,u.K4)(!1)))}),[g]),(0,n.useEffect)((function(){var e;if(t&&d&&"/showcase"!==S&&"/hypothec"!==S)C.push("/user/credit/".concat(null!==(e=r.result.value)&&void 0!==e&&e.value?r.result.value.value:(0,f.TW)(),"/credit_parameters_info"));else if(t&&v>0&&"/showcase"!==g.pathname){var n;C.push("/user/credit/".concat(null!==(n=r.result.value)&&void 0!==n&&n.value?r.result.value.value:(0,f.TW)(),"/credit_parameters_info"))}}),[d,t,v]),n.createElement(W.A,{setModalActive:b,modalActive:m},m&&n.createElement(x,{title:"Получайте уведомление о персональном одобрении кредита",style:{marginTop:"mobile"!==e?0:10},titleStyle:{maxWidth:450,margin:"0 auto",fontWeight:"bold"},description:"Вы получите сообщение, если для Вас будет доступно положительное решение",modal:!0}))}}}]);