(self.webpackChunkrnrdocs=self.webpackChunkrnrdocs||[]).push([[4],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6858:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={sidebar_position:5},c={unversionedId:"docs/RAW-File-Format",id:"docs/RAW-File-Format",isDocsHomePage:!1,title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 RAW",description:"Date 0.1 | \u0410\u0432\u0442\u043e\u0440\u044b: \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0415\u0432\u0434\u043e\u043a\u0438\u043c\u043e\u0432",source:"@site/docs/docs/RAW-File-Format.md",sourceDirName:"docs",slug:"/docs/RAW-File-Format",permalink:"/rnrdocs/en/docs/RAW-File-Format",editUrl:"https://https://github.io/reRNR/RNRDocs/master/website/docs/docs/RAW-File-Format.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 PLM",permalink:"/rnrdocs/en/docs/PLM-File-Format"},next:{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 RES/RMP",permalink:"/rnrdocs/en/docs/RES-RMP-File-Format"}},p=[{value:"\u041e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",id:"\u043e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",children:[]},{value:"1. \u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",id:"1-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",children:[]},{value:"2. \u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430",id:"2-\u043e\u0431\u0449\u0430\u044f-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0444\u043e\u0440\u043c\u0430\u0442\u0430",children:[]},{value:"3. \u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438",id:"3-\u0432\u043d\u0435\u0448\u043d\u0438\u0439-\u0432\u0438\u0434-\u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438",children:[]}],l={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h6",{id:"date-201808--version-01--\u0430\u0432\u0442\u043e\u0440\u044b-\u0430\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440-\u0435\u0432\u0434\u043e\u043a\u0438\u043c\u043e\u0432"},"Date: 2018.08 | Version: 0.1 | \u0410\u0432\u0442\u043e\u0440\u044b: \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0415\u0432\u0434\u043e\u043a\u0438\u043c\u043e\u0432"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0441\u044b\u043b\u043a\u0438")),(0,i.kt)("h2",{id:"\u043e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435"},"\u041e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," ",(0,i.kt)("a",{parentName:"p",href:"#%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," ",(0,i.kt)("a",{parentName:"p",href:"#%D0%9E%D0%B1%D1%89%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B0"},"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430")),(0,i.kt)("h2",{id:"1-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},"1. \u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0444\u0430\u0439\u043b\u0430 ",(0,i.kt)("strong",{parentName:"p"},"RAW"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u0432 \u0438\u0433\u0440\u0435 ",(0,i.kt)("strong",{parentName:"p"},"\u0414\u0430\u043b\u044c\u043d\u043e\u0431\u043e\u0439\u0449\u0438\u043a\u0438 2 (\u0412\u0435\u0440\u0441\u0438\u044f 8)"),". \u0424\u043e\u0440\u043c\u0430\u0442 ",(0,i.kt)("strong",{parentName:"p"},"RAW")," \u0445\u0440\u0430\u043d\u0438\u0442 \u043a\u0430\u0440\u0442\u0443 \u0432\u044b\u0441\u043e\u0442 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c 257 \u043d\u0430 257 \u0442\u043e\u0447\u0435\u043a."),(0,i.kt)("h2",{id:"2-\u043e\u0431\u0449\u0430\u044f-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0444\u043e\u0440\u043c\u0430\u0442\u0430"},"2. \u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430"),(0,i.kt)("p",null,"\u041a\u0430\u0440\u0442\u0430 \u0432\u044b\u0441\u043e\u0442 \u0438\u043c\u0435\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0435\u0442\u043a\u0438 257 x 257 \u0442\u043e\u0447\u0435\u043a \u0438 \u0445\u0440\u0430\u043d\u0438\u0442 \u043f\u043e 2 \u0431\u0430\u0439\u0442\u0430 \u043d\u0430 \u043e\u0434\u043d\u0443 \u0442\u043e\u0447\u043a\u0443, \u0433\u0434\u0435 \u0438 \u043f\u0435\u0440\u0432\u044b\u0439 \u0438 \u0432\u0442\u043e\u0440\u043e\u0439 \u0431\u0430\u0439\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 0..255."),(0,i.kt)("h2",{id:"3-\u0432\u043d\u0435\u0448\u043d\u0438\u0439-\u0432\u0438\u0434-\u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438"},"3. \u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438"))}s.isMDXComponent=!0}}]);