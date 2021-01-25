(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{139:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return P})),a.d(e,"metadata",(function(){return D})),a.d(e,"rightToc",(function(){return L})),a.d(e,"default",(function(){return B}));var o=a(1),n=a(6),i=a(0),r=a.n(i),s=a(143),l=(a(12),a(148));const c=l.a.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  & + label::before {
    border-radius: 1em;
  }
  &:checked + label {
    padding-left: 1em;
    color: #fff;
  }
  &:checked + label:before {
    top: 0;
    width: 100%;
    height: 2em;
    background: ${t=>t.color};
  }
`,m=l.a.label`
  font-weight: 300;
  .group {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
  }

  position: relative;
  margin-right: 1em;
  padding-left: 2em;
  padding-right: 1em;
  line-height: 2;
  cursor: pointer;
  &:before {
    box-sizing: border-box;
    content: ' ';
    position: absolute;
    top: 0.3em;
    left: 0;
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 2px solid ${t=>t.color};
    border-radius: 0.25em;
    z-index: -1;
  }

  &,
  &::before {
    transition: 0.25s all ease;
  }
`,p=l.a.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,f=t=>{const e=t.color||"#e91e63";return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,Object(o.a)({type:"radio"},t,{color:e})),r.a.createElement(m,{htmlFor:t.id,color:e},t.label||t.value))},b=({options:t,name:e,onChange:a,checked:o=!1})=>r.a.createElement(p,null,Object.keys(t).map(n=>{const i=t[n];return r.a.createElement(f,{id:i,name:e,onChange:a,checked:i===o,label:i,value:i})})),d=l.a.div`
  font-family: "Source Code Pro", Menlo, Monaco, Courier, monospace;
  font-size: 12px;
  line-height: 1.4;
  font-style: normal;
  border-left: 3px solid #a9547e;
  padding-left: 20px;
  background: #222;
  color: #fff;
  min-height: 270px;
  min-width: 270px;
  padding: 25px;

  & div {
    margin-left: 20px;
  }
  & div:first-child,
  & div:last-child {
    margin: 0;
  }
`,u=l.a.span`
  color: ${t=>0===t.kind?"#66d9ef":"#a6e22e"};
`;function g(t,e){return e?r.a.createElement("div",null,r.a.createElement(u,{kind:1},t)):r.a.createElement("div",null,r.a.createElement(u,{kind:1},t),"={false}")}const h=({position:t,disableAutoClose:e,autoClose:a,hideProgressBar:o,newestOnTop:n,closeOnClick:i,pauseOnHover:s,rtl:l,pauseOnFocusLoss:c,isDefaultProps:m,draggable:p})=>r.a.createElement("div",null,r.a.createElement("h3",null,"Toast Container"),r.a.createElement(d,null,r.a.createElement("div",null,r.a.createElement("span",null,"<"),r.a.createElement(u,{kind:0},"ToastContainer")),r.a.createElement("div",null,r.a.createElement(u,{kind:1},"position"),`="${t}"`),r.a.createElement("div",null,r.a.createElement(u,{kind:1},"autoClose"),`={${!e&&a}}`),e?"":g("hideProgressBar",o),g("newestOnTop",n),g("closeOnClick",i),g("rtl",l),g("pauseOnFocusLoss",c),g("draggable",p),e?"":g("pauseOnHover",s),r.a.createElement("div",null,r.a.createElement("span",null,"/>")),m&&r.a.createElement("div",null,r.a.createElement("div",null,"{/* Same as */}"),r.a.createElement("span",null,"<"),r.a.createElement(u,{kind:0},"ToastContainer"),r.a.createElement("span",null," />"))));const y=({position:t,disableAutoClose:e,autoClose:a,hideProgressBar:o,closeOnClick:n,pauseOnHover:i,type:s,draggable:l,progress:c})=>r.a.createElement("div",null,r.a.createElement("h3",null,"Toast Emitter"),r.a.createElement(d,null,r.a.createElement("div",null,r.a.createElement(u,{kind:0},function(t){switch(t){case"default":default:return"toast";case"success":return"toast.success";case"error":return"toast.error";case"info":return"toast.info";case"warning":return"toast.warn";case"dark":return"toast.dark"}}(s)),"('\ud83e\udd84 Wow so easy!', { "),r.a.createElement("div",null,r.a.createElement(u,{kind:1},"position"),`: "${t}"`,","),r.a.createElement("div",null,r.a.createElement(u,{kind:1},"autoClose"),`: ${!e&&a}`,","),r.a.createElement("div",null,r.a.createElement(u,{kind:1},"hideProgressBar"),`: ${o?"true":"false"}`,","),r.a.createElement("div",null,r.a.createElement(u,{kind:1},"closeOnClick"),`: ${n?"true":"false"}`,","),r.a.createElement("div",null,r.a.createElement(u,{kind:1},"pauseOnHover"),`: ${i?"true":"false"}`,","),r.a.createElement("div",null,r.a.createElement(u,{kind:1},"draggable"),`: ${l?"true":"false"}`,","),!Number.isNaN(c)&&r.a.createElement("div",null,r.a.createElement(u,{kind:1},"progress"),`: ${c}`,","),r.a.createElement("div",null,"});")));var _=a(164),v=a(197),O=[{id:"disableAutoClose",label:"Disable auto-close"},{id:"hideProgressBar",label:"Hide progress bar(less fanciness!)"},{id:"newestOnTop",label:"Newest on top* (play nice with bottom toast)"},{id:"closeOnClick",label:"Close on click"},{id:"pauseOnHover",label:"Pause delay on hover"},{id:"pauseOnFocusLoss",label:"Pause toast when the window loses focus"},{id:"rtl",label:"Right to left layout*"},{id:"draggable",label:"Allow to drag and close the toast"}],T={bounce:_.a,slide:_.c,zoom:_.e,flip:_.b};const x=l.a.label`
  cursor: pointer;
`,j=({label:t,onChange:e,id:a,checked:o})=>r.a.createElement(x,{htmlFor:a},r.a.createElement("input",{id:a,type:"checkbox",name:a,checked:o,onChange:e}),t),k=l.a.div`
  width: 100%;
  margin-bottom: 1rem;
`,w=l.a.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  & ul {
    list-style: none;
    padding: 0;
  }
`,E=({autoClose:t,disableAutoClose:e,handleAutoCloseDelay:a,handleInput:o,transition:n,limit:i,progress:s,handleCheckbox:l,...c})=>{const m={left:[],right:[]};return O.forEach(({id:t,label:e},a)=>{a%2==1?m.left.push(r.a.createElement("li",{key:t},r.a.createElement(j,{id:t,label:e,onChange:l,checked:c[t]}))):m.right.push(r.a.createElement("li",{key:t},r.a.createElement(j,{id:t,label:e,onChange:l,checked:c[t]})))}),r.a.createElement(k,null,r.a.createElement("h3",null,"Options"),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"autoClose"},"Delay",r.a.createElement("input",{type:"number",name:"autoClose",id:"autoClose",value:t,onChange:a,disabled:e}),"ms"),r.a.createElement("label",{htmlFor:"transition"},"Transition",r.a.createElement("select",{name:"transition",id:"transition",onChange:o,value:n},Object.keys(T).map(t=>r.a.createElement("option",{key:t,value:t},t)))),r.a.createElement("label",{htmlFor:"progress"},"Progress",r.a.createElement("input",{type:"number",name:"progress",id:"progress",value:s,onChange:o,placeholder:"0..1",min:"0",max:"1"})),r.a.createElement("label",{htmlFor:"limit"},"Limit",r.a.createElement("input",{type:"number",name:"limit",id:"limit",value:i,onChange:o}))),r.a.createElement(w,null,r.a.createElement("ul",null,m.left),r.a.createElement("ul",null,m.right)))};var C=a(161);const z=({clearAll:t,handleReset:e,showToast:a,updateToast:o})=>r.a.createElement(C.b,null,r.a.createElement(C.a,{lookAtMe:!0,onClick:a},r.a.createElement("span",{role:"img","aria-label":"show alert"},"\ud83d\ude80")," ","Show Toast"),r.a.createElement(C.a,{onClick:o},r.a.createElement("span",{role:"img","aria-label":"update"})," Update"),r.a.createElement(C.a,{onClick:t},r.a.createElement("span",{role:"img","aria-label":"clear all"},"\ud83d\udca9")," ","Clear All"),r.a.createElement(C.a,{onClick:e},r.a.createElement("span",{role:"img","aria-label":"reset options"},"\ud83d\udd04")," ","Reset"));function N(){return{..._.d.defaultProps,transition:"bounce",type:"default",progress:void 0,disableAutoClose:!1,limit:0}}const I=l.a.section`
  display: flex;
  justify-content: space-between;
  flex-direction: "row";
  margin-bottom: 1rem;
  flex-wrap: wrap;
`,F=l.a.main`
  margin-top: 1rem;
`;function A(){const[t,e]=Object(i.useState)(()=>N()),a=Object(i.useRef)();Object(i.useEffect)(()=>{Object(v.injectStyle)()},[]);const n=a=>e({...t,[a.target.name]:"limit"===a.target.name?parseInt(a.target.value,10):a.target.value});return r.a.createElement(F,null,r.a.createElement(I,null,r.a.createElement(h,Object(o.a)({},t,{isDefaultProps:"top-right"===t.position&&5e3===t.autoClose&&!t.disableAutoClose&&!t.hideProgressBar&&!t.newestOnTop&&!t.rtl&&t.pauseOnFocusLoss&&t.pauseOnHover&&t.closeOnClick&&t.draggable})),r.a.createElement(y,t)),r.a.createElement("div",null,r.a.createElement("h3",null,"Position"),r.a.createElement(b,{options:_.f.POSITION,name:"position",checked:t.position,onChange:n})),r.a.createElement("div",null,r.a.createElement("h3",null,"Type"),r.a.createElement(b,{options:_.f.TYPE,name:"type",checked:t.type,onChange:n})),r.a.createElement(E,Object(o.a)({},t,{handleAutoCloseDelay:a=>{e({...t,autoClose:a.target.value>0?parseInt(a.target.value,10):1})},handleInput:n,handleCheckbox:a=>e({...t,[a.target.name]:!t[a.target.name]})})),r.a.createElement(z,{clearAll:()=>_.f.dismiss(),handleReset:()=>{e(N())},showToast:()=>{a.current="default"===t.type?Object(_.f)("\ud83e\udd84 Wow so easy !",{progress:t.progress}):_.f[t.type]("\ud83d\ude80 Wow so easy !",{progress:t.progress})},updateToast:()=>_.f.update(a.current,{progress:t.progress})}),r.a.createElement(_.d,Object(o.a)({},t,{transition:T[t.transition],autoClose:!t.disableAutoClose&&t.autoClose})))}var P={id:"introduction",title:"React-toastify",sidebar_label:"Introduction"},D={id:"introduction",title:"React-toastify",description:"[![Financial Contributors on Open Collective](https://opencollective.com/react-toastify/all/badge.svg?label=financial+contributors)](https://opencollective.com/react-toastify) ![Travis (.org)](https://img.shields.io/travis/fkhadra/react-toastify.svg?label=%F0%9F%9A%A7Build&style=for-the-badge)",source:"@site/docs/index.md",permalink:"/react-toastify/introduction",editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/index.md",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Installation",permalink:"/react-toastify/installation"}},L=[{value:"The playground",id:"the-playground",children:[]},{value:"Features",id:"features",children:[]},{value:"Contribute",id:"contribute",children:[]},{value:"Contributors",id:"contributors",children:[{value:"Code Contributors",id:"code-contributors",children:[]},{value:"Financial Contributors",id:"financial-contributors",children:[]}]},{value:"License",id:"license",children:[]}],R={rightToc:L};function B(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(s.b)("wrapper",Object(o.a)({},R,a,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://opencollective.com/react-toastify"}),Object(s.b)("img",Object(o.a)({parentName:"a"},{src:"https://opencollective.com/react-toastify/all/badge.svg?label=financial+contributors",alt:"Financial Contributors on Open Collective"})))," ",Object(s.b)("img",Object(o.a)({parentName:"p"},{src:"https://img.shields.io/travis/fkhadra/react-toastify.svg?label=%F0%9F%9A%A7Build&style=for-the-badge",alt:"Travis (.org)"})),"\n",Object(s.b)("img",Object(o.a)({parentName:"p"},{src:"https://img.shields.io/npm/dm/react-toastify.svg?label=%E2%8F%ACdownloads&style=for-the-badge",alt:"npm"})),"\n",Object(s.b)("img",Object(o.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/react-toastify.svg?style=for-the-badge",alt:"npm"})),"\n",Object(s.b)("img",Object(o.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/react-toastify.svg?label=%F0%9F%93%9Clicense&style=for-the-badge",alt:"NPM"})),"\n",Object(s.b)("img",Object(o.a)({parentName:"p"},{src:"https://img.shields.io/coveralls/github/fkhadra/react-toastify.svg?label=%E2%9B%B1coverage&style=for-the-badge",alt:"Coveralls github"}))),Object(s.b)("h2",{id:"the-playground"},"The playground"),Object(s.b)(A,{mdxType:"App"}),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Important")),Object(s.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"By default, all toasts will inherit ToastContainer's props. Props defined on toast supersede ToastContainer's props. Props marked with * can only be set on the ToastContainer. The demo is not exhaustive, check the doc for more!"))),Object(s.b)("h2",{id:"features"},"Features"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Easy to set up for real, you can make it work in less than 10sec!"),Object(s.b)("li",{parentName:"ul"},"Super easy to customize"),Object(s.b)("li",{parentName:"ul"},"RTL support"),Object(s.b)("li",{parentName:"ul"},"Swipe to close \ud83d\udc4c"),Object(s.b)("li",{parentName:"ul"},"Can choose swipe direction"),Object(s.b)("li",{parentName:"ul"},"Super easy to use an animation of your choice"),Object(s.b)("li",{parentName:"ul"},"Can display a react component inside the toast!"),Object(s.b)("li",{parentName:"ul"},"Has ",Object(s.b)("inlineCode",{parentName:"li"},"onOpen")," and ",Object(s.b)("inlineCode",{parentName:"li"},"onClose")," hooks. Both can access the props passed to the react component rendered inside the toast"),Object(s.b)("li",{parentName:"ul"},"Can remove a toast programmatically"),Object(s.b)("li",{parentName:"ul"},"Define behavior per toast"),Object(s.b)("li",{parentName:"ul"},"Pause toast when the window loses focus \ud83d\udc41"),Object(s.b)("li",{parentName:"ul"},"Fancy progress bar to display the remaining time"),Object(s.b)("li",{parentName:"ul"},"Possibility to update a toast"),Object(s.b)("li",{parentName:"ul"},"You can control the progress bar a la ",Object(s.b)("inlineCode",{parentName:"li"},"nprogress")," \ud83d\ude32"),Object(s.b)("li",{parentName:"ul"},"You can limit the number of toast displayed at the same time"),Object(s.b)("li",{parentName:"ul"},"Dark mode \ud83c\udf12"),Object(s.b)("li",{parentName:"ul"},"Only 5.5k !"),Object(s.b)("li",{parentName:"ul"},"And much more !")),Object(s.b)("h2",{id:"contribute"},"Contribute"),Object(s.b)("p",null,"Show your \u2764\ufe0f and support by giving a \u2b50. Any suggestions are welcome! Take a look at the contributing guide."),Object(s.b)("p",null,"You can also find me on ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.reactiflux.com/"}),"reactiflux"),". My pseudo is Fadi."),Object(s.b)("h2",{id:"contributors"},"Contributors"),Object(s.b)("h3",{id:"code-contributors"},"Code Contributors"),Object(s.b)("p",null,"This project exists thanks to all the people who contribute. [",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"CONTRIBUTING.md"}),"Contribute"),"]."),Object(s.b)("a",{href:"https://github.com/fkhadra/react-toastify/graphs/contributors"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/contributors.svg?width=890&button=false"})),Object(s.b)("h3",{id:"financial-contributors"},"Financial Contributors"),Object(s.b)("p",null,"Become a financial contributor and help us sustain our community. [",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://opencollective.com/react-toastify/contribute"}),"Contribute"),"]"),Object(s.b)("h4",{id:"individuals"},"Individuals"),Object(s.b)("a",{href:"https://opencollective.com/react-toastify"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/individuals.svg?width=890"})),Object(s.b)("h4",{id:"organizations"},"Organizations"),Object(s.b)("p",null,"Support this project with your organization. Your logo will show up here with a link to your website. [",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://opencollective.com/react-toastify/contribute"}),"Contribute"),"]"),Object(s.b)("a",{href:"https://opencollective.com/react-toastify/organization/0/website"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/organization/0/avatar.svg"})),Object(s.b)("a",{href:"https://opencollective.com/react-toastify/organization/1/website"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/organization/1/avatar.svg"})),Object(s.b)("a",{href:"https://opencollective.com/react-toastify/organization/2/website"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/organization/2/avatar.svg"})),Object(s.b)("a",{href:"https://opencollective.com/react-toastify/organization/3/website"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/organization/3/avatar.svg"})),Object(s.b)("a",{href:"https://opencollective.com/react-toastify/organization/4/website"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/organization/4/avatar.svg"})),Object(s.b)("a",{href:"https://opencollective.com/react-toastify/organization/5/website"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/organization/5/avatar.svg"})),Object(s.b)("a",{href:"https://opencollective.com/react-toastify/organization/6/website"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/organization/6/avatar.svg"})),Object(s.b)("a",{href:"https://opencollective.com/react-toastify/organization/7/website"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/organization/7/avatar.svg"})),Object(s.b)("a",{href:"https://opencollective.com/react-toastify/organization/8/website"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/organization/8/avatar.svg"})),Object(s.b)("a",{href:"https://opencollective.com/react-toastify/organization/9/website"},Object(s.b)("img",{src:"https://opencollective.com/react-toastify/organization/9/avatar.svg"})),Object(s.b)("h2",{id:"license"},"License"),Object(s.b)("p",null,"Licensed under MIT"))}B.isMDXComponent=!0},161:function(t,e,a){"use strict";a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return m}));var o=a(169),n=a(148);function i(){var t=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin: 1rem auto;\n"]);return i=function(){return t},t}function r(){var t=Object(o.a)(['\n  cursor: pointer;\n  display: inline-block;\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n  height: 2.8rem;\n  letter-spacing: 0.1rem;\n  line-height: 2.8rem;\n  padding: 0 1.8rem;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n  z-index: 0;\n  color: #fff;\n  border-color: transparent;\n\n  &:before {\n    content: "";\n    background: linear-gradient(\n      45deg,\n      #ff0000,\n      #ff7300,\n      #fffb00,\n      #48ff00,\n      #00ffd5,\n      #002bff,\n      #7a00ff,\n      #ff00c8,\n      #ff0000\n    );\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    background-size: 400%;\n    z-index: -1;\n    filter: blur(5px);\n    width: calc(100% + 4px);\n    height: calc(100% + 4px);\n    animation: '," 20s linear infinite;\n    opacity: ",';\n    transition: opacity 0.3s ease-in-out;\n  }\n\n  &:active {\n    color: #000;\n  }\n\n  &:active:after {\n    background: transparent;\n  }\n\n  &:hover:before {\n    opacity: 1;\n  }\n\n  &:after {\n    z-index: -1;\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #111;\n    left: 0;\n    top: 0;\n  }\n']);return r=function(){return t},t}function s(){var t=Object(o.a)(["\n    0% { background-position: 0 0; }\n    50% { background-position: 400% 0; }\n    100% { background-position: 0 0; }\n"]);return s=function(){return t},t}var l=Object(n.b)(s()),c=n.a.button(r(),l,(function(t){return t.lookAtMe?1:0})),m=n.a.section(i())},197:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.injectStyle=function(){var t=document.createElement("style");t.innerText=".Toastify__toast-container{z-index:9999;-webkit-transform:translateZ(9999px);position:fixed;padding:4px;width:320px;box-sizing:border-box;color:#fff}.Toastify__toast-container--top-left{top:1em;left:1em}.Toastify__toast-container--top-center{top:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--top-right{top:1em;right:1em}.Toastify__toast-container--bottom-left{bottom:1em;left:1em}.Toastify__toast-container--bottom-center{bottom:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--bottom-right{bottom:1em;right:1em}@media only screen and (max-width:480px){.Toastify__toast-container{width:100vw;padding:0;left:0;margin:0}.Toastify__toast-container--top-center,.Toastify__toast-container--top-left,.Toastify__toast-container--top-right{top:0;transform:translateX(0)}.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-right{bottom:0;transform:translateX(0)}.Toastify__toast-container--rtl{right:0;left:auto}}.Toastify__toast{position:relative;min-height:64px;box-sizing:border-box;margin-bottom:1rem;padding:8px;border-radius:4px;box-shadow:0 1px 10px 0 rgba(0,0,0,.1),0 2px 15px 0 rgba(0,0,0,.05);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;max-height:800px;overflow:hidden;font-family:sans-serif;cursor:pointer;direction:ltr}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--dark{background:#121212;color:#fff}.Toastify__toast--default{background:#fff;color:#aaa}.Toastify__toast--info{background:#3498db}.Toastify__toast--success{background:#07bc0c}.Toastify__toast--warning{background:#f1c40f}.Toastify__toast--error{background:#e74c3c}.Toastify__toast-body{margin:auto 0;padding:6px}.Toastify--animate{animation-fill-mode:both;animation-duration:.7s}@media only screen and (max-width:480px){.Toastify__toast{margin-bottom:0}}.Toastify__close-button{color:#fff;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;-ms-flex-item-align:start;align-self:flex-start}.Toastify__close-button--default{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:focus,.Toastify__close-button:hover{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:5px;z-index:9999;opacity:.7;background-color:hsla(0,0%,100%,.7);transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:auto;transform-origin:right}.Toastify__progress-bar--default{background:linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55)}.Toastify__progress-bar--dark{background:#bb86fc}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--bottom-left,.Toastify__bounce-enter--top-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--bottom-right,.Toastify__bounce-enter--top-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--bottom-left,.Toastify__bounce-exit--top-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--bottom-right,.Toastify__bounce-exit--top-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(110%,0,0)}}@keyframes Toastify__slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-110%,0,0)}}@keyframes Toastify__slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--bottom-left,.Toastify__slide-enter--top-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--bottom-right,.Toastify__slide-enter--top-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--bottom-left,.Toastify__slide-exit--top-left{animation-name:Toastify__slideOutLeft}.Toastify__slide-exit--bottom-right,.Toastify__slide-exit--top-right{animation-name:Toastify__slideOutRight}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown}",document.head.appendChild(t)}}}]);