(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(6),i=(n(0),n(143)),r={id:"custom-animation",title:"Define a custom enter and exit animation",sidebar_label:"Define a custom enter and exit animation"},s={id:"custom-animation",title:"Define a custom enter and exit animation",description:"When it comes to animation the possibility are endless and it doesn't need to be complicated! Starting v7, css animations just works out of the box! ",source:"@site/docs/custom-animation.md",permalink:"/react-toastify/custom-animation",editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/custom-animation.md",sidebar_label:"Define a custom enter and exit animation",sidebar:"someSidebar",previous:{title:"Replace the default transition",permalink:"/react-toastify/replace-default-transition"},next:{title:"Drag to remove",permalink:"/react-toastify/drag-to-remove"}},c=[{value:"Handle transition based on the toast position",id:"handle-transition-based-on-the-toast-position",children:[]},{value:"Prevent the toast from collapsing after the exit animation",id:"prevent-the-toast-from-collapsing-after-the-exit-animation",children:[]},{value:"Tweak collapse duration",id:"tweak-collapse-duration",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When it comes to animation the possibility are endless and it doesn't need to be complicated! Starting v7, css animations just works out of the box!\nYou can write your own using the power of css or use any css animation library like ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://animate.style/"}),"animate.css")," or even copy paste from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://animista.net/"}),"animista"),"."),Object(i.b)("p",null,"All you need to do is to import the ",Object(i.b)("inlineCode",{parentName:"p"},"cssTransition")," and define your ",Object(i.b)("inlineCode",{parentName:"p"},"enter")," and ",Object(i.b)("inlineCode",{parentName:"p"},"exit")," classes."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const bounce = cssTransition({\n  enter: "animate__animated animate__bounceIn",\n  exit: "animate__animated animate__bounceOut"\n});\n\nconst swirl = cssTransition({\n  enter: "swirl-in-fwd",\n  exit: "swirl-out-bck"\n});\n')),Object(i.b)("p",null,"The codesanbox below demonstrate how easy it is."),Object(i.b)("iframe",{src:"https://codesandbox.io/embed/react-toastify-animatecss-jxrx9?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"react-toastify-animate.css",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(i.b)("h3",{id:"handle-transition-based-on-the-toast-position"},"Handle transition based on the toast position"),Object(i.b)("p",null,"Some transitions are based on the toast position. This is the case for the default one. If you set ",Object(i.b)("inlineCode",{parentName:"p"},"appendPosition")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", the current position will be appended to the ",Object(i.b)("inlineCode",{parentName:"p"},"enter")," and ",Object(i.b)("inlineCode",{parentName:"p"},"exit")," class name:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const Zoom = cssTransition({\n  // zoomIn will become zoomIn--top-right or zoomIn--top-left and so on\n  enter: 'zoomIn',\n  // zoomIn will become zoomOut--top-right or zoomOut--top-left and so on\n  exit: 'zoomOut',\n  // default to false\n  appendPosition: true\n});\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Don't forget to add the position as well when you write your css animations. If you pass multiple classes, the position will\nbe appended only to the last one."))),Object(i.b)("h3",{id:"prevent-the-toast-from-collapsing-after-the-exit-animation"},"Prevent the toast from collapsing after the exit animation"),Object(i.b)("p",null,"By default, the remaining toast will collapse smoothly"),Object(i.b)("iframe",{width:"100%",height:"365",src:"https://www.youtube.com/embed/Hui3GZKRDpM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("p",null,"This can be disabled as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Zoom = cssTransition({\n  collapse: false,\n  enter: 'zoomIn', \n  exit: 'zoomOut', \n});\n")),Object(i.b)("h3",{id:"tweak-collapse-duration"},"Tweak collapse duration"),Object(i.b)("p",null,"The default duration is 300ms. This is also easy to change \ud83d\udcaa"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Zoom = cssTransition({\n  collapseDuration: 500,\n  enter: 'zoomIn', \n  exit: 'zoomOut', \n});\n")))}p.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(r,".").concat(d)]||m[d]||b[d]||i;return n?o.a.createElement(u,s({ref:t},l,{components:n})):o.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);