(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(142)),c={id:"use-a-custom-id",title:"Use a custom id",sidebar_label:"Use a custom id"},i={id:"use-a-custom-id",title:"Use a custom id",description:"A custom `toastId` can be used to replace the one generated. You can provide a `number` or a `string`.",source:"@site/docs/use-a-custom-id.md",permalink:"/react-toastify/use-a-custom-id",editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/use-a-custom-id.md",sidebar_label:"Use a custom id",sidebar:"someSidebar",previous:{title:"Pause toast timer when the window loses focus",permalink:"/react-toastify/pause-on-focus-loss"},next:{title:"Prevent duplicate",permalink:"/react-toastify/prevent-duplicate"}},u=[],s={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A custom ",Object(a.b)("inlineCode",{parentName:"p"},"toastId")," can be used to replace the one generated. You can provide a ",Object(a.b)("inlineCode",{parentName:"p"},"number")," or a ",Object(a.b)("inlineCode",{parentName:"p"},"string"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { toast } from 'react-toastify';\n\nfunction Example(){\n  const notify = () => {\n    toast(\"I use a custom id\", {\n      toastId: \"customId\"\n    });\n  }\n\n  return (\n    <div>\n      <button onClick={notify}>Notify</button>\n    </div>\n  );\n}\n\n")))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return n?o.a.createElement(f,i({ref:t},s,{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);