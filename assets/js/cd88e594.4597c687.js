(self.webpackChunkrnrdocs=self.webpackChunkrnrdocs||[]).push([[129],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return k},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},p=Object.keys(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),m=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},k=function(t){var e=m(t.components);return n.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,p=t.originalType,i=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),s=m(r),d=a,u=s["".concat(i,".").concat(d)]||s[d]||c[d]||p;return r?n.createElement(u,l(l({ref:e},k),{},{components:r})):n.createElement(u,l({ref:e},k))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=r.length,l=new Array(p);l[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var m=2;m<p;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2411:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return i},default:function(){return k}});var n=r(2122),a=r(9756),p=(r(7294),r(3905)),l={sidebar_position:7},o={unversionedId:"docs/TECH-TCH-File-Format",id:"docs/TECH-TCH-File-Format",isDocsHomePage:!1,title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 TECH/TCH",description:"Date 0.1 | \u0410\u0432\u0442\u043e\u0440\u044b: \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0415\u0432\u0434\u043e\u043a\u0438\u043c\u043e\u0432",source:"@site/docs/docs/TECH-TCH-File-Format.md",sourceDirName:"docs",slug:"/docs/TECH-TCH-File-Format",permalink:"rnrdocs/docs/TECH-TCH-File-Format",editUrl:"https://https://github.io/reRNR/RNRDocs/master/website/docs/docs/TECH-TCH-File-Format.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 RES/RMP",permalink:"rnrdocs/docs/RES-RMP-File-Format"},next:{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 TXR",permalink:"rnrdocs/docs/TXR-File-Format"}},i=[{value:"\u041e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",id:"\u043e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",children:[]},{value:"1. \u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",id:"1-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",children:[]},{value:"2. \u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430",id:"2-\u043e\u0431\u0449\u0430\u044f-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0444\u043e\u0440\u043c\u0430\u0442\u0430",children:[]},{value:"3. \u0421\u0435\u043a\u0446\u0438\u0438",id:"3-\u0441\u0435\u043a\u0446\u0438\u0438",children:[{value:"3.1 \u0421\u0435\u043a\u0446\u0438\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 (\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u043c)",id:"31-\u0441\u0435\u043a\u0446\u0438\u044f-\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430-\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0433\u043e-\u0438\u0433\u0440\u043e\u043a\u043e\u043c",children:[]}]}],m={toc:i};function k(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h6",{id:"date-201810--version-01--\u0430\u0432\u0442\u043e\u0440\u044b-\u0430\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440-\u0435\u0432\u0434\u043e\u043a\u0438\u043c\u043e\u0432"},"Date: 2018.10 | Version: 0.1 | \u0410\u0432\u0442\u043e\u0440\u044b: \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0415\u0432\u0434\u043e\u043a\u0438\u043c\u043e\u0432"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0413\u043b\u043e\u0441\u0441\u0430\u0440\u0438\u0439")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"integer")," - \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u0446\u0435\u043b\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"string")," - \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u0442\u0440\u043e\u043a\u0430."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0421\u0441\u044b\u043b\u043a\u0438")),(0,p.kt)("p",null,"\u0428\u0430\u0431\u043b\u043e\u043d \u0444\u043e\u0440\u043c\u0430\u0442\u0430 TECH \u0434\u043b\u044f 010 Editor. ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/AlexKimov/HardTruck-RignRoll-file-formats/blob/master/formats/templates/TECH.bt"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")),(0,p.kt)("h2",{id:"\u043e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435"},"\u041e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"1.")," ",(0,p.kt)("a",{parentName:"p",href:"#%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"2.")," ",(0,p.kt)("a",{parentName:"p",href:"#%D0%9E%D0%B1%D1%89%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B0"},"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"3.")," ",(0,p.kt)("a",{parentName:"p",href:"#%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D0%B8"},"\u0421\u0435\u043a\u0446\u0438\u0438")),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"3.1")," \u0421\u0435\u043a\u0446\u0438\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 (\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u043c) "),(0,p.kt)("p",null,"   ",(0,p.kt)("strong",{parentName:"p"},"3.1")," ",(0,p.kt)("a",{parentName:"p",href:"#%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA-%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B8"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446\u0438\u0438")),(0,p.kt)("p",null,"   ",(0,p.kt)("strong",{parentName:"p"},"3.2")," ",(0,p.kt)("a",{parentName:"p",href:"#"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),(0,p.kt)("p",null," ",(0,p.kt)("strong",{parentName:"p"},"3.2")," \u0421\u0435\u043a\u0446\u0438\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 (\u043d\u0435\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u043c), \u0430 \u0442\u0430\u043a\u0436\u0435 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 "),(0,p.kt)("p",null,"   ",(0,p.kt)("strong",{parentName:"p"},"3.2.1")," ",(0,p.kt)("a",{parentName:"p",href:"#%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA-%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B8"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446\u0438\u0438")),(0,p.kt)("p",null,"   ",(0,p.kt)("strong",{parentName:"p"},"3.2.2")," ",(0,p.kt)("a",{parentName:"p",href:"#"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432")),(0,p.kt)("h2",{id:"1-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},"1. \u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),(0,p.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0444\u0430\u0439\u043b\u0430 ",(0,p.kt)("strong",{parentName:"p"},"TECH"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u0432 \u0438\u0433\u0440\u0435 ",(0,p.kt)("strong",{parentName:"p"},"\u0414\u0430\u043b\u044c\u043d\u043e\u0431\u043e\u0439\u0449\u0438\u043a\u0438 2 (\u0412\u0435\u0440\u0441\u0438\u044f 8)"),". \u0424\u043e\u0440\u043c\u0430\u0442 ",(0,p.kt)("strong",{parentName:"p"},"TECH")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0438 \u043d\u0435\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0438\u0433\u0440\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."),(0,p.kt)("p",null,"\u0412\u0441\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435, \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445, \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0438\u0445 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0444\u0430\u0439\u043b\u0435."),(0,p.kt)("h2",{id:"2-\u043e\u0431\u0449\u0430\u044f-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0444\u043e\u0440\u043c\u0430\u0442\u0430"},"2. \u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430"),(0,p.kt)("p",null,"\u0424\u043e\u0440\u043c\u0430\u0442 ",(0,p.kt)("strong",{parentName:"p"},"TECH")," \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d \u043d\u0430 3 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0441\u0435\u043a\u0446\u0438\u0438 (\u0441\u043c ",(0,p.kt)("a",{parentName:"p",href:"#%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0-1-%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0"},"\u0422\u0430\u0431\u043b. 1"),"). "),(0,p.kt)("h4",{id:"\u0442\u0430\u0431\u043b\u0438\u0446\u0430-1-\u043e\u0431\u0449\u0430\u044f-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0444\u043e\u0440\u043c\u0430\u0442\u0430-tech"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 1. \u041e\u0431\u0449\u0430\u044f \u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 ",(0,p.kt)("strong",{parentName:"h4"},"TECH"),"."),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"\u2116"),(0,p.kt)("th",{parentName:"tr",align:"left"},"\u0421\u0435\u043a\u0446\u0438\u044f"),(0,p.kt)("th",{parentName:"tr",align:"left"},"\u0421\u0441\u044b\u043b\u043a\u0438"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("strong",{parentName:"td"},"1")),(0,p.kt)("td",{parentName:"tr",align:"left"},"\u0421\u0435\u043a\u0446\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 \u043f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0438\u0433\u0440\u043e\u043a\u0430"),(0,p.kt)("td",{parentName:"tr",align:"left"},"\u0421\u043c. ",(0,p.kt)("a",{parentName:"td",href:"#"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 2"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("strong",{parentName:"td"},"2")),(0,p.kt)("td",{parentName:"tr",align:"left"},"\u0421\u0435\u043a\u0446\u0438\u044f \u0441 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c\u0438 \u0444\u0430\u0439\u043b\u043e\u0432"),(0,p.kt)("td",{parentName:"tr",align:"left"},"\u0421\u043c. ",(0,p.kt)("a",{parentName:"td",href:"#"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 3"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("strong",{parentName:"td"},"3")),(0,p.kt)("td",{parentName:"tr",align:"left"},"\u0421\u0435\u043a\u0446\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 \u043f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0418\u0418, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0434\u0438\u043d. \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"),(0,p.kt)("td",{parentName:"tr",align:"left"},"\u0421\u043c. ",(0,p.kt)("a",{parentName:"td",href:"#"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 5"))))),(0,p.kt)("h2",{id:"3-\u0441\u0435\u043a\u0446\u0438\u0438"},"3. \u0421\u0435\u043a\u0446\u0438\u0438"),(0,p.kt)("h3",{id:"31-\u0441\u0435\u043a\u0446\u0438\u044f-\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430-\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0433\u043e-\u0438\u0433\u0440\u043e\u043a\u043e\u043c"},"3.1 \u0421\u0435\u043a\u0446\u0438\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 (\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0433\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u043c)"),(0,p.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0445 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 (\u0421\u043c. ",(0,p.kt)("a",{parentName:"p",href:"#"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 2"),"), \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430 \u043d\u0435\u0439 \u0431\u043b\u043e\u043a\u043e\u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 (\u0421\u043c. ",(0,p.kt)("a",{parentName:"p",href:"#"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 3"),"). \u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0434\u043d\u043e\u0439 \u0441\u0435\u043a\u0446\u0438\u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,p.kt)("strong",{parentName:"p"},"57")," \u0431\u0430\u0439\u0442. \u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0434\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,p.kt)("strong",{parentName:"p"},"2416")," \u0431\u0430\u0439\u0442."),(0,p.kt)("h5",{id:"\u0442\u0430\u0431\u043b\u0438\u0446\u0430-2-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a-\u0441\u0435\u043a\u0446\u0438\u0438"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 2. \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446\u0438\u0438"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"\u2116"),(0,p.kt)("th",{parentName:"tr",align:"left"},"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445"),(0,p.kt)("th",{parentName:"tr",align:"left"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,p.kt)("th",{parentName:"tr",align:"left"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},"1"),(0,p.kt)("td",{parentName:"tr",align:"left"}),(0,p.kt)("td",{parentName:"tr",align:"left"}),(0,p.kt)("td",{parentName:"tr",align:"left"})))))}k.isMDXComponent=!0}}]);