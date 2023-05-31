(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{165:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,d=s["".concat(l,".").concat(p)]||s[p]||m[p]||i;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(165));const i={id:"basic",title:"Basic Filtering",hide_title:!0},l={unversionedId:"filter/basic",id:"filter/basic",isDocsHomePage:!1,title:"Basic Filtering",description:"Basic Filter",source:"@site/demos/filter/basic.mdx",slug:"/filter/basic",permalink:"/material-table-core-website/demos/filter/basic",version:"current",sidebar:"sidebar",previous:{title:"Custom Row Export",permalink:"/material-table-core-website/demos/export/custom"},next:{title:"Custom Column Filter",permalink:"/material-table-core-website/demos/filter/custom-filter"}},o=[{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],c=(b="InfoBannerAboutGlobalVarsInDemos",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)});var b;const u={toc:o};function s(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"basic-filter"},"Basic Filter"),Object(a.b)("h2",{id:"props"},"Props"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Field"),Object(a.b)("th",{parentName:"tr",align:null},"Type"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"options.filtering")),Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},"display filter row on table")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("inlineCode",{parentName:"td"},"column.filtering")),Object(a.b)("td",{parentName:"tr",align:null},"boolean"),Object(a.b)("td",{parentName:"tr",align:null},"set as ",Object(a.b)("inlineCode",{parentName:"td"},"false")," to hide default filter to display on a column")))),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  options={{\n    filtering: true,\n  }}\n  columns={[\n    {\n      title: "Name",\n      field: "name",\n      filtering: false,\n    },\n    {\n      title: "Surname",\n      field: "surname",\n    },\n    {\n      title: "Birth Year",\n      field: "birthYear",\n      type: "numeric",\n    },\n    {\n      title: "Birth Place",\n      field: "birthCity",\n      lookup: {\n        34: "\u0130stanbul",\n        63: "\u015eanl\u0131urfa",\n      },\n    },\n  ]}\n/>;\n')),Object(a.b)("h2",{id:"live-demo"},"Live Demo"),Object(a.b)(c,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicFilter() {\n  return (\n    <MaterialTable\n      data={[\n        {\n          name: "Mehmet",\n          surname: "Baran",\n          birthYear: 1987,\n          birthCity: 63,\n        },\n        {\n          name: "Zerya Bet\xfcl",\n          surname: "Baran",\n          birthYear: 2017,\n          birthCity: 34,\n        },\n      ]}\n      columns={[\n        {\n          title: "Name",\n          field: "name",\n          /**\n           * Hide filter on specific column\n           */\n          filtering: false,\n        },\n        {\n          title: "Surname",\n          field: "surname",\n        },\n        {\n          title: "Birth Year",\n          field: "birthYear",\n          type: "numeric",\n        },\n        {\n          title: "Birth Place",\n          field: "birthCity",\n          lookup: {\n            34: "\u0130stanbul",\n            63: "\u015eanl\u0131urfa",\n          },\n        },\n      ]}\n      options={{\n        filtering: true,\n      }}\n    />\n  );\n}\n')))}s.isMDXComponent=!0}}]);