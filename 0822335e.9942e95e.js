(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return o})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return s}));var a=n(1),r=n(6),i=(n(0),n(142)),c={id:"css-transition",title:"cssTransition",sidebar_label:"cssTransition"},o={id:"api/css-transition",title:"cssTransition",description:"| Parameter      | Type                   | Required | Default | Description                                                                                                |",source:"@site/docs/api/css-transition.md",permalink:"/react-toastify/api/css-transition",editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/api/css-transition.md",sidebar_label:"cssTransition",sidebar:"someSidebar",previous:{title:"toast",permalink:"/react-toastify/api/toast"},next:{title:"useToastContainer",permalink:"/react-toastify/api/use-toast-container"}},l=[{value:"Usage",id:"usage",children:[]}],b={rightToc:l};function s(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enter"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2713"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The class name that will be used when the toast enter")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"exit"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2713"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The class name that will be used when the toast exit")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"duration"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number ","|"," ","[number,number]"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2718"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"750"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The transition duration in ms.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"appendPosition"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2718"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Append or not the position  to the class name: ",Object(i.b)("inlineCode",{parentName:"td"},"yourClassName--top-right"),", ",Object(i.b)("inlineCode",{parentName:"td"},"yourClassName--bottom-left"),"...")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { cssTransition } from 'react-toastify';\n\nconst Zoom = cssTransition({\n  enter: 'zoomIn',\n  exit: 'zoomOut',\n  duration: 750,\n  appendPosition: false\n});\n\nconst Zoom = cssTransition({\n  enter: 'zoomIn',\n  exit: 'zoomOut',\n  duration: [500, 600],\n  appendPosition: false\n});\n")))}s.isMDXComponent=!0},142:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var b=r.a.createContext({}),s=function(t){var e=r.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):o({},e,{},t)),n},p=function(t){var e=s(t.components);return r.a.createElement(b.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,b=l(t,["components","mdxType","originalType","parentName"]),p=s(n),O=a,m=p["".concat(c,".").concat(O)]||p[O]||u[O]||i;return n?r.a.createElement(m,o({ref:e},b,{components:n})):r.a.createElement(m,o({ref:e},b))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,c=new Array(i);c[0]=O;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);