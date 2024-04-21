(this["webpackJsonptokyo-white-react-admin-dashboard"]=this["webpackJsonptokyo-white-react-admin-dashboard"]||[]).push([[21],{250:function(t,e,a){"use strict";a.d(e,"b",(function(){return d})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return b}));var o,n=a(30),i=a(8),r=a(242),c=a(190),s=a(274);const d=Object(i.a)(r.a)((t=>{let{theme:e}=t;return"\n\nfont-weight: 500;\nfont-size: 20px;\ncolor: black;\nmargin: auto;\ntext-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\nfont-family: roboto;\n@media (min-width: 280px) and (max-width: 320px)  {\n  font-size: 18px;\n};\n@media (min-width: 600px)  {\n  font-size: 22px;\n};\n"})),l=Object(i.a)(c.a)(o||(o=Object(n.a)(["\n \n  width:70px;\n  height:75px;\n  @media (max-width: 320px) {\n    width: 60px;\n    height: 65px;\n  }\n  @media (max-width: 280px) {\n    width: 50px;\n    height: 55px;\n  }\n\n  border-radius: 10px;\n  margin-bottom: 5px;\n  text-align: center;\ntext-decoration: none;\n  box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.3);\n"]))),b=Object(i.a)(s.a)((t=>{let{theme:e,color:a}=t;return"\ncolor: white;\nfont-size: 12px;\nfont-family: 'Roboto';\ntext-decoration: none;\nheight:30px;\nborder-radius: 3px;\nbox-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n@media (min-width: 600px) {\n  \n };\n"}))},251:function(t,e,a){"use strict";var o=a(8),n=a(190),i=a(28),r=a(275),c=a(250),s=a(12),d=a(2);const l=Object(o.a)(n.a)((t=>{let{theme:e}=t;return"\n        margin-top: ".concat(e.spacing(2),";\n        margin-bottom: ").concat(e.spacing(2),";\n")}));e.a=t=>{let{heading:e}=t;Object(i.a)();const a=Object(s.g)();return null!==sessionStorage.getItem("UserId")&&void 0!==sessionStorage.getItem("UserId")||a("/"),Object(d.jsx)(r.a,{children:Object(d.jsx)(l,{display:"flex",alignItems:"center",children:Object(d.jsx)(c.b,{children:e})})})}},257:function(t,e,a){"use strict";var o=a(1),n=a(3),i=a(0),r=(a(4),a(6)),c=a(225),s=a(8),d=a(10),l=a(245),b=a(183),p=a(226);function u(t){return Object(b.a)("MuiCard",t)}Object(p.a)("MuiCard",["root"]);var h=a(2);const x=["className","raised"],m=Object(s.a)(l.a,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})((()=>({overflow:"hidden"}))),j=i.forwardRef((function(t,e){const a=Object(d.a)({props:t,name:"MuiCard"}),{className:i,raised:s=!1}=a,l=Object(n.a)(a,x),b=Object(o.a)({},a,{raised:s}),p=(t=>{const{classes:e}=t;return Object(c.a)({root:["root"]},u,e)})(b);return Object(h.jsx)(m,Object(o.a)({className:Object(r.a)(p.root,i),elevation:s?8:void 0,ref:e,ownerState:b},l))}));e.a=j},274:function(t,e,a){"use strict";var o=a(3),n=a(1),i=a(0),r=(a(4),a(6)),c=a(225),s=a(224),d=a(8),l=a(10),b=a(238),p=a(14),u=a(183),h=a(226);function x(t){return Object(u.a)("MuiButton",t)}var m=Object(h.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var j=i.createContext({}),g=a(2);const O=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],f=t=>Object(n.a)({},"small"===t.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===t.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===t.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),v=Object(d.a)(b.a,{shouldForwardProp:t=>Object(d.b)(t)||"classes"===t,name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],e["".concat(a.variant).concat(Object(p.a)(a.color))],e["size".concat(Object(p.a)(a.size))],e["".concat(a.variant,"Size").concat(Object(p.a)(a.size))],"inherit"===a.color&&e.colorInherit,a.disableElevation&&e.disableElevation,a.fullWidth&&e.fullWidth]}})((t=>{let{theme:e,ownerState:a}=t;return Object(n.a)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":Object(n.a)({textDecoration:"none",backgroundColor:Object(s.a)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:Object(s.a)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:"1px solid ".concat(e.palette[a.color].main),backgroundColor:Object(s.a)(e.palette[a.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:e.palette[a.color].dark,"@media (hover: none)":{backgroundColor:e.palette[a.color].main}}),"&:active":Object(n.a)({},"contained"===a.variant&&{boxShadow:e.shadows[8]}),["&.".concat(m.focusVisible)]:Object(n.a)({},"contained"===a.variant&&{boxShadow:e.shadows[6]}),["&.".concat(m.disabled)]:Object(n.a)({color:e.palette.action.disabled},"outlined"===a.variant&&{border:"1px solid ".concat(e.palette.action.disabledBackground)},"outlined"===a.variant&&"secondary"===a.color&&{border:"1px solid ".concat(e.palette.action.disabled)},"contained"===a.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:e.palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===a.variant&&"inherit"!==a.color&&{color:e.palette[a.color].main,border:"1px solid ".concat(Object(s.a)(e.palette[a.color].main,.5))},"contained"===a.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:e.palette[a.color].contrastText,backgroundColor:e.palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(t=>{let{ownerState:e}=t;return e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(m.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(m.disabled)]:{boxShadow:"none"}}})),S=Object(d.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.startIcon,e["iconSize".concat(Object(p.a)(a.size))]]}})((t=>{let{ownerState:e}=t;return Object(n.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},f(e))})),w=Object(d.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.endIcon,e["iconSize".concat(Object(p.a)(a.size))]]}})((t=>{let{ownerState:e}=t;return Object(n.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},f(e))})),z=i.forwardRef((function(t,e){const a=Object(l.a)({props:t,name:"MuiButton"}),{className:s,color:d,disabled:b,disableElevation:u,disableFocusRipple:h,disableRipple:m,fullWidth:f,size:z,variant:y}=i.useContext(j),{children:k,className:R,color:W,component:I="button",disabled:C,disableElevation:M,disableFocusRipple:N,disableRipple:L,endIcon:E,focusVisibleClassName:V,fullWidth:G,size:T,startIcon:B,type:F,variant:H}=a,A=Object(o.a)(a,O),P=W||d||"primary",_=C||b||!1,D=M||u||!1,J=N||h||!1,U=G||f||!1,X=T||z||"medium",q=H||y||"text",K=L||m||!1,Q=Object(n.a)({},a,{color:P,component:I,disabled:_,disableElevation:D,disableFocusRipple:J,fullWidth:U,size:X,type:F,variant:q}),Y=(t=>{const{color:e,disableElevation:a,fullWidth:o,size:i,variant:r,classes:s}=t,d={root:["root",r,"".concat(r).concat(Object(p.a)(e)),"size".concat(Object(p.a)(i)),"".concat(r,"Size").concat(Object(p.a)(i)),"inherit"===e&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(p.a)(i))],endIcon:["endIcon","iconSize".concat(Object(p.a)(i))]},l=Object(c.a)(d,x,s);return Object(n.a)({},s,l)})(Q),Z=B&&Object(g.jsx)(S,{className:Y.startIcon,ownerState:Q,children:B}),$=E&&Object(g.jsx)(w,{className:Y.endIcon,ownerState:Q,children:E});return Object(g.jsxs)(v,Object(n.a)({ownerState:Q,className:Object(r.a)(R,s),component:I,disabled:_,disableRipple:K,focusRipple:!J,focusVisibleClassName:Object(r.a)(Y.focusVisible,V),ref:e,type:F},A,{classes:Y,children:[Z,k,$]}))}));e.a=z},275:function(t,e,a){"use strict";var o=a(3),n=a(1),i=a(0),r=(a(4),a(6)),c=a(225),s=a(10),d=a(8),l=a(183),b=a(226);function p(t){return Object(l.a)("MuiContainer",t)}Object(b.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var u=a(14),h=a(2);const x=["className","component","disableGutters","fixed","maxWidth"],m=Object(d.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e["maxWidth".concat(Object(u.a)(String(a.maxWidth)))],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}})((t=>{let{theme:e,ownerState:a}=t;return Object(n.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})}),(t=>{let{theme:e,ownerState:a}=t;return a.fixed&&Object.keys(e.breakpoints.values).reduce(((t,a)=>{const o=e.breakpoints.values[a];return 0!==o&&(t[e.breakpoints.up(a)]={maxWidth:"".concat(o).concat(e.breakpoints.unit)}),t}),{})}),(t=>{let{theme:e,ownerState:a}=t;return Object(n.a)({},"xs"===a.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},a.maxWidth&&"xs"!==a.maxWidth&&{[e.breakpoints.up(a.maxWidth)]:{maxWidth:"".concat(e.breakpoints.values[a.maxWidth]).concat(e.breakpoints.unit)}})})),j=i.forwardRef((function(t,e){const a=Object(s.a)({props:t,name:"MuiContainer"}),{className:i,component:d="div",disableGutters:l=!1,fixed:b=!1,maxWidth:j="lg"}=a,g=Object(o.a)(a,x),O=Object(n.a)({},a,{component:d,disableGutters:l,fixed:b,maxWidth:j}),f=(t=>{const{classes:e,fixed:a,disableGutters:o,maxWidth:n}=t,i={root:["root",n&&"maxWidth".concat(Object(u.a)(String(n))),a&&"fixed",o&&"disableGutters"]};return Object(c.a)(i,p,e)})(O);return Object(h.jsx)(m,Object(n.a)({as:d,ownerState:O,className:Object(r.a)(f.root,i),ref:e},g))}));e.a=j},297:function(t,e,a){"use strict";var o=a(298),n=a.n(o),i=a(28),r=a(248),c=a(17),s=a(2);e.a=function(t){let{FromRoute:e}=t;return Object(i.a)(),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(c.b,{to:"/".concat(location.pathname.split("/")[1])+e,children:Object(s.jsx)(r.a,{sx:{background:"white",position:"absolute",top:"18px",left:"20px",width:"35px !important",height:"10px !important",borderRadius:"4px !important",boxShadow:"0px 8px 15px rgba(0, 0, 0, 0.1)"},children:Object(s.jsx)(n.a,{})})})})}},298:function(t,e,a){"use strict";var o=a(75);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a(76)),i=a(2),r=(0,n.default)((0,i.jsx)("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}),"Reply");e.default=r},440:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a(297),i=a(251),r=a(50),c=a(92),s=a(275),d=a(257),l=a(242),b=a(12),p=a(25),u=a(2);e.default=function(){const t=Object(r.b)(),e=Object(r.c)((t=>t.HomeWork.ViewHomework)),{Id:a}=Object(b.h)();console.log(e,"ViewHomework");const h={Id:parseInt(a)};return Object(o.useEffect)((()=>{t(Object(c.c)(h))}),[]),Object(u.jsxs)(s.a,{children:[Object(u.jsx)(i.a,{heading:"View Homework"}),Object(u.jsx)(n.a,{FromRoute:"/Student/Homework"}),e.map(((t,e)=>Object(u.jsx)("div",{children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)(l.a,{dangerouslySetInnerHTML:{__html:t.SubjectDescription},mt:-2}),Object(u.jsx)(l.a,{mt:-1.5,children:Object(p.i)(t.AssignDate)}),""!==t.Attachment&&Object(u.jsx)("a",{target:"_blank",rel:"noreferrer",href:"/documents/"+t.Attachment,children:"Attachment"})]})},e)))]})}}}]);
//# sourceMappingURL=21.9f9902aa.chunk.js.map