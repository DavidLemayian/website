(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=(n(0),n(165));const o={id:"mtabletoolbar",title:"MTableToolbar"},l={unversionedId:"api/components/mtabletoolbar",id:"api/components/mtabletoolbar",isDocsHomePage:!1,title:"MTableToolbar",description:"MTableToolbar encapsulates the search, title, free-actions, columns selection, export menu, etc.. and sits just above the actual table.",source:"@site/docs/api/components/m-table-toolbar.md",slug:"/api/components/mtabletoolbar",permalink:"/material-table-core-website/docs/api/components/mtabletoolbar",editUrl:"https://github.com/material-table-core/website/tree/master/docs/api/components/m-table-toolbar.md",version:"current",sidebar:"docs",previous:{title:"m-table-stepped-pagination",permalink:"/material-table-core-website/docs/api/components/component_m_table_stepped-pagination"},next:{title:"New Props",permalink:"/material-table-core-website/docs/api/mt_new_props"}},c=[{value:"Props",id:"props",children:[{value:"<code>columnsHiddenInColumnsButton</code>",id:"columnshiddenincolumnsbutton",children:[]}]}],i={toc:c};function b(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MTableToolbar")," encapsulates the search, title, free-actions, columns selection, export menu, etc.. and sits just above the actual table."),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("h3",{id:"columnshiddenincolumnsbutton"},Object(a.b)("inlineCode",{parentName:"h3"},"columnsHiddenInColumnsButton")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If ",Object(a.b)("inlineCode",{parentName:"li"},"false"),", all columns are shown in the columns selection action menu ","[",Object(a.b)("em",{parentName:"li"},"this is the default"),"]"),Object(a.b)("li",{parentName:"ul"},"If ",Object(a.b)("inlineCode",{parentName:"li"},"true"),", each column will need the prop ",Object(a.b)("inlineCode",{parentName:"li"},"column.hiddenByColumnsButton")," explicitly set to ",Object(a.b)("inlineCode",{parentName:"li"},"false"))),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null}),Object(a.b)("th",{parentName:"tr",align:null},"Value"),Object(a.b)("th",{parentName:"tr",align:null},"More Info"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Default"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",{parentName:"tr",align:null},"Default prop value")))))}b.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,d=u["".concat(l,".").concat(s)]||u[s]||m[s]||o;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:r,l[1]=c;for(var b=2;b<o;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);