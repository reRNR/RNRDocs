(self.webpackChunkrnrdocs=self.webpackChunkrnrdocs||[]).push([[252],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return o},kt:function(){return g}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var k=r.createContext({}),m=function(t){var e=r.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=m(t.components);return r.createElement(k.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,k=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),N=m(a),g=n,f=N["".concat(k,".").concat(g)]||N[g]||d[g]||l;return a?r.createElement(f,p(p({ref:e},o),{},{components:a})):r.createElement(f,p({ref:e},o))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=N;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},3914:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return k},default:function(){return o}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),p={sidebar_position:8},i={unversionedId:"docs/TXR-File-Format",id:"docs/TXR-File-Format",isDocsHomePage:!1,title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 TXR",description:"Date 0.2 | \u0410\u0432\u0442\u043e\u0440\u044b: \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0415\u0432\u0434\u043e\u043a\u0438\u043c\u043e\u0432",source:"@site/docs/docs/TXR-File-Format.md",sourceDirName:"docs",slug:"/docs/TXR-File-Format",permalink:"/rnrdocs/en/docs/TXR-File-Format",editUrl:"https://https://github.io/reRNR/RNRDocs/master/website/docs/docs/TXR-File-Format.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 TECH/TCH",permalink:"/rnrdocs/en/docs/TECH-TCH-File-Format"}},k=[{value:"\u041e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",id:"\u043e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435",children:[]},{value:"1. \u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",id:"1-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",children:[]},{value:"2. \u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430",id:"2-\u043e\u0431\u0449\u0430\u044f-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0444\u043e\u0440\u043c\u0430\u0442\u0430",children:[]},{value:"3. \u0421\u0435\u043a\u0446\u0438\u0438",id:"3-\u0441\u0435\u043a\u0446\u0438\u0438",children:[{value:"3.1 \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0444\u0430\u0439\u043b\u0430",id:"31-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a-\u0444\u0430\u0439\u043b\u0430",children:[]},{value:"3.2 \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0441\u0435\u043a\u0446\u0438\u0439 (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)",id:"32-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f-\u043e-\u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0438-\u0441\u0435\u043a\u0446\u0438\u0439-16-\u0431\u0438\u0442\u043d\u043e\u0435-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",children:[]},{value:"3.3 \u041f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",id:"33-\u043f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0435-\u0434\u0430\u043d\u043d\u044b\u0435",children:[]},{value:"3.4 \u0421\u0435\u043a\u0446\u0438\u044f <strong>PFRM</strong> (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)",id:"34-\u0441\u0435\u043a\u0446\u0438\u044f-pfrm-16-\u0431\u0438\u0442\u043d\u043e\u0435-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",children:[]},{value:"3.5 \u0421\u0435\u043a\u0446\u0438\u044f LVMP",id:"35-\u0441\u0435\u043a\u0446\u0438\u044f-lvmp",children:[]}]}],m={toc:k};function o(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h6",{id:"date-201811--version-02--\u0430\u0432\u0442\u043e\u0440\u044b-\u0430\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440-\u0435\u0432\u0434\u043e\u043a\u0438\u043c\u043e\u0432"},"Date: 2018.11 | Version: 0.2 | \u0410\u0432\u0442\u043e\u0440\u044b: \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0415\u0432\u0434\u043e\u043a\u0438\u043c\u043e\u0432"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0413\u043b\u043e\u0441\u0441\u0430\u0440\u0438\u0439")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"integer")," - \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u0446\u0435\u043b\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"string")," - \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u0442\u0440\u043e\u043a\u0430."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0441\u044b\u043b\u043a\u0438")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0428\u0430\u0431\u043b\u043e\u043d \u0444\u043e\u0440\u043c\u0430\u0442\u0430 TXR \u0434\u043b\u044f 010 Editor. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/AlexKimov/HardTruck-RignRoll-file-formats/blob/master/formats/templates/TXR.bt"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/AlexKimov/HardTruck-RignRoll-file-formats/blob/master/scripts/TXRtoBMP.1sc"},"\u0421\u043a\u0440\u0438\u043f\u0442 010 Editor")," \u0434\u043b\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f ",(0,l.kt)("strong",{parentName:"li"},".txr")," \u0444\u0430\u0439\u043b\u043e\u0432 \u0438\u0433\u0440\u044b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442 .bmp (\u0414\u0430\u043b\u044c\u043d\u043e\u0431\u043e\u0439\u0449\u0438\u043a\u0438 2).")),(0,l.kt)("h2",{id:"\u043e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435"},"\u041e\u0433\u043b\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.")," ",(0,l.kt)("a",{parentName:"p",href:"#%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2.")," ",(0,l.kt)("a",{parentName:"p",href:"#%D0%9E%D0%B1%D1%89%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B0"},"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3.")," ",(0,l.kt)("a",{parentName:"p",href:"#%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D0%B8"},"\u0421\u0435\u043a\u0446\u0438\u0438")),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"3.1")," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0444\u0430\u0439\u043b\u0430"),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"3.2")," \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0441\u0435\u043a\u0446\u0438\u0438 \u0441 \u043c\u0430\u0441\u043a\u0430\u043c\u0438 (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435) "),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"3.3")," \u041f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 "),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"3.4")," \u041c\u0430\u0441\u043a\u0438 RGB (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435) "),(0,l.kt)("p",null," ",(0,l.kt)("strong",{parentName:"p"},"3.5")," Mip \u043a\u0430\u0440\u0442\u044b (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)"),(0,l.kt)("h2",{id:"1-\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},"1. \u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),(0,l.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0444\u0430\u0439\u043b\u0430 ",(0,l.kt)("strong",{parentName:"p"},"TXR"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u0432 \u0438\u0433\u0440\u0435 ",(0,l.kt)("strong",{parentName:"p"},"\u0414\u0430\u043b\u044c\u043d\u043e\u0431\u043e\u0439\u0449\u0438\u043a\u0438 \u041f\u0443\u0442\u044c \u043a \u041f\u043e\u0431\u0435\u0434\u0435")," \u0438 ",(0,l.kt)("strong",{parentName:"p"},"\u0414\u0430\u043b\u044c\u043d\u043e\u0431\u043e\u0439\u0449\u0438\u043a\u0438 2 (\u0412\u0435\u0440\u0441\u0438\u044f 8)"),". \u0424\u043e\u0440\u043c\u0430\u0442 ",(0,l.kt)("strong",{parentName:"p"},"TXR")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 8 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 TGA (\u0414\u0430\u043b\u044c\u043d\u043e\u0431\u043e\u0439\u0449\u0438\u043a\u0438 1) \u0438\u043b\u0438 16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (\u0414\u0430\u043b\u044c\u043d\u043e\u0431\u043e\u0439\u0449\u0438\u043a\u0438 2)."),(0,l.kt)("p",null,"\u0412\u0441\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435, \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445, \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0438\u0445 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0444\u0430\u0439\u043b\u0435."),(0,l.kt)("h2",{id:"2-\u043e\u0431\u0449\u0430\u044f-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0444\u043e\u0440\u043c\u0430\u0442\u0430"},"2. \u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430"),(0,l.kt)("p",null,"\u0424\u043e\u0440\u043c\u0430\u0442 ",(0,l.kt)("strong",{parentName:"p"},"TXR")," \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d \u043d\u0430 2\u0435 (8 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435) \u0438\u043b\u0438 5\u0442\u044c (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435) \u0441\u0435\u043a\u0446\u0438\u0439 (\u0441\u043c \u0422\u0430\u0431\u043b. 1)."),(0,l.kt)("h4",{id:"\u0442\u0430\u0431\u043b\u0438\u0446\u0430-1-\u043e\u0431\u0449\u0430\u044f-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 1. \u041e\u0431\u0449\u0430\u044f \u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u2116"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0421\u0435\u043a\u0446\u0438\u044f"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0421\u0441\u044b\u043b\u043a\u0438"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0444\u0430\u0439\u043b\u0430"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0441\u043c. 3.1 \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0444\u0430\u0439\u043b\u0430")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0441\u0435\u043a\u0446\u0438\u0439 (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0441\u043c. \u0422\u0430\u0431\u043b\u0438\u0446\u0430 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"3")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0441\u043c 3.3 \u041f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"4")),(0,l.kt)("td",{parentName:"tr",align:"left"},"PFRM / \u041c\u0430\u0441\u043a\u0438 RGB (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0441\u043c. \u0422\u0430\u0431\u043b\u0438\u0446\u0430 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"5")),(0,l.kt)("td",{parentName:"tr",align:"left"},"LVMP / Mip \u043a\u0430\u0440\u0442\u044b (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0441\u043c. \u0422\u0430\u0431\u043b\u0438\u0446\u0430 4")))),(0,l.kt)("h2",{id:"3-\u0441\u0435\u043a\u0446\u0438\u0438"},"3. \u0421\u0435\u043a\u0446\u0438\u0438"),(0,l.kt)("h3",{id:"31-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a-\u0444\u0430\u0439\u043b\u0430"},"3.1 \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0444\u0430\u0439\u043b\u0430"),(0,l.kt)("p",null,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0444\u0430\u0439\u043b\u0430 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0444\u0430\u0439\u043b\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 TGA. \u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0440\u0430\u0432\u0435\u043d 18 \u0431\u0430\u0439\u0442. ",(0,l.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/Truevision_TGA"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")),(0,l.kt)("h3",{id:"32-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f-\u043e-\u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0438-\u0441\u0435\u043a\u0446\u0438\u0439-16-\u0431\u0438\u0442\u043d\u043e\u0435-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"},"3.2 \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0441\u0435\u043a\u0446\u0438\u0439 (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)"),(0,l.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0444\u0430\u0439\u043b\u0430\u0445 \u0441 16 \u0431\u0438\u0442\u043d\u044b\u043c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0438 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430. \u0425\u0440\u0430\u043d\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 \u043f\u0435\u0440\u0432\u043e\u0439 \u0441\u0435\u043a\u0446\u0438\u0438 \u043f\u043e\u0441\u043b\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,l.kt)("h4",{id:"\u0442\u0430\u0431\u043b\u0438\u0446\u0430-2-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 2. \u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u2116"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 LOFF  (4 \u0431\u0430\u0439\u0442\u0430)"),(0,l.kt)("td",{parentName:"tr",align:"left"},'"LOFF"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u0435\u043a\u0446\u0438\u0438 (4 \u0431\u0430\u0439\u0442\u0430)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},'\u0421\u043c\u0435\u0449\u0435\u043d\u0438\u0438 \u0441\u0435\u043a\u0446\u0438\u0438 \u0441 \u043c\u0430\u0441\u043a\u0430\u043c\u0438 ("PFRM") \u043e\u0442 \u043d\u0430\u0447\u0430\u043b\u0430 \u0444\u0430\u0439\u043b\u0430 (4 \u0431\u0430\u0439\u0442\u0430)'),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"33-\u043f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0435-\u0434\u0430\u043d\u043d\u044b\u0435"},"3.3 \u041f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"8 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435")),(0,l.kt)("p",null,"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 8 \u0431\u0438\u0442\u043d\u043e\u043c\u0443 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,l.kt)("strong",{parentName:"p"},".tga"),".  ",(0,l.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/Truevision_TGA"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435")),(0,l.kt)("p",null,"\u041f\u0438\u043a\u0441\u0435\u043b\u0438 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 RGB \u043f\u043e 16 \u0431\u0438\u0442 \u043d\u0430 \u043e\u0434\u0438\u043d \u043f\u0438\u043a\u0441\u0435\u043b\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u043c\u0430\u0441\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 \u0438\u0437 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("strong",{parentName:"p"},"PFRM"),"."),(0,l.kt)("h3",{id:"34-\u0441\u0435\u043a\u0446\u0438\u044f-pfrm-16-\u0431\u0438\u0442\u043d\u043e\u0435-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"},"3.4 \u0421\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("strong",{parentName:"h3"},"PFRM")," (16 \u0431\u0438\u0442\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)"),(0,l.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0444\u0430\u0439\u043b\u0430\u0445 \u0441 16 \u0431\u0438\u0442\u043d\u044b\u043c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0438 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0442\u044c\u0441\u044f \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("strong",{parentName:"p"},"LVMP"),". \u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u0435\u043a\u0446\u0438\u0438 36 \u0431\u0430\u0439\u0442."),(0,l.kt)("h4",{id:"\u0442\u0430\u0431\u043b\u0438\u0446\u0430-3-c\u0435\u043a\u0446\u0438\u044f-pfrm"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 3. C\u0435\u043a\u0446\u0438\u044f PFRM"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u2116"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0422\u0438\u043f"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0418\u043d\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 PFRM (4 \u0431\u0430\u0439\u0442\u0430)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u0435\u043a\u0446\u0438\u0438 (4 \u0431\u0430\u0439\u0442\u0430)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"3")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041c\u0430\u0441\u043a\u0430 \u0434\u043b\u044f \u043a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 (4 \u0431\u0430\u0439\u0442\u0430)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"4")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041c\u0430\u0441\u043a\u0430 \u0434\u043b\u044f \u0437\u0435\u043b\u0435\u043d\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 (4 \u0431\u0430\u0439\u0442\u0430)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"5")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041c\u0430\u0441\u043a\u0430 \u0434\u043b\u044f \u0441\u0438\u043d\u0435\u0433\u043e \u0446\u0432\u0435\u0442\u0430 (4 \u0431\u0430\u0439\u0442\u0430)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"6")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041c\u0430\u0441\u043a\u0430 \u0434\u043b\u044f \u0430\u043b\u044c\u0444\u0430 \u043a\u0430\u043d\u0430\u043b\u0430 (4 \u0431\u0430\u0439\u0442\u0430)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"7")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 (\u043f\u0443\u0441\u0442\u044b\u0435) (12 \u0431\u0430\u0439\u0442)")))),(0,l.kt)("h3",{id:"35-\u0441\u0435\u043a\u0446\u0438\u044f-lvmp"},"3.5 \u0421\u0435\u043a\u0446\u0438\u044f LVMP"),(0,l.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u041c\u0438\u043f-\u043a\u0430\u0440\u0442\u044b (",(0,l.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/MIP-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"},"\u0421\u0442\u0430\u0442\u044c\u044f \u043d\u0430 \u0412\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u044f"),") \u0438 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c 20 \u0431\u0430\u0439\u0442 \u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430 \u043d\u0438\u043c \u0441\u0435\u043a\u0446\u0438\u0438 \u043f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0432\u0438\u0434\u0435 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043f\u0438\u0439 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3.5.1")," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0435\u043a\u0446\u0438\u0438"),(0,l.kt)("h4",{id:"\u0442\u0430\u0431\u043b\u0438\u0446\u0430-4-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 4. \u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u2116"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0418\u043d\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 LVMP (4 \u0431\u0430\u0439\u0442\u0430)"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u0435\u043a\u0446\u0438\u0438 (4 \u0431\u0430\u0439\u0442\u0430)"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(4 \u0431\u0430\u0439\u0442\u0430)"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0428\u0438\u0440\u0438\u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f (4 \u0431\u0430\u0439\u0442\u0430)"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u0412\u044b\u0441\u043e\u0442\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f (4 \u0431\u0430\u0439\u0442\u0430)"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"6"),(0,l.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,l.kt)("td",{parentName:"tr",align:"left"},"(4 \u0431\u0430\u0439\u0442\u0430)"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3.5.2")," \u041f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),(0,l.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043f\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f (\u0441\u043c ",(0,l.kt)("strong",{parentName:"p"},"3.3 \u041f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),") \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 RGB \u043f\u043e 16 \u0431\u0438\u0442 \u043d\u0430 \u043f\u0438\u043a\u0441\u0435\u043b\u044c. \u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0434\u043d\u043e \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u043c \u0431\u0435\u0437 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432 \u0441 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0432 \u0434\u0432\u0430 \u0440\u0430\u0437\u0430."))}o.isMDXComponent=!0}}]);