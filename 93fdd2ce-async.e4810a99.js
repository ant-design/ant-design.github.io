(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["93fdd2ce"],{"338c2374":function(e,n,l){"use strict";l.d(n,"__esModule",{value:!0}),l.d(n,"default",{enumerable:!0,get:function(){return i;}});var a=l("777fffbe"),t=l("f19d2b93"),s=l("5b220c3d"),r=a._(l("7d7b69c4"));let o={scale:1.02,max:8,speed:1500,glare:!0,"max-glare":.8};var i=({options:e,...n})=>{let l=(0,s.useRef)(null);return(0,s.useEffect)(()=>(l.current&&r.default.init(l.current,{...o,...e}),()=>{var e;null===(e=l.current)||void 0===e||e.vanillaTilt.destroy();}),[]),(0,t.jsx)("div",{ref:l,...n});};},"93fdd2ce":function(e,n,l){"use strict";l.d(n,"__esModule",{value:!0}),l.d(n,"default",{enumerable:!0,get:function(){return f;}});var a=l("777fffbe"),t=l("f19d2b93"),s=l("e22febe0"),r=l("a9d1a279"),o=l("3835a2b7"),i=a._(l("23546486")),d=a._(l("338c2374"));let{_InternalPanelDoNotUseOrYouWillBeFired:c}=r.Modal,{_InternalPanelDoNotUseOrYouWillBeFired:p}=r.Tooltip,{_InternalPanelDoNotUseOrYouWillBeFired:u}=r.message,g={cn:{range:"\u8BBE\u7F6E\u8303\u56F4",text:"Ant Design 5.0 \u4F7F\u7528 CSS-in-JS \u6280\u672F\u4EE5\u63D0\u4F9B\u52A8\u6001\u4E0E\u6DF7\u5408\u4E3B\u9898\u7684\u80FD\u529B\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u6211\u4EEC\u4F7F\u7528\u7EC4\u4EF6\u7EA7\u522B\u7684 CSS-in-JS \u89E3\u51B3\u65B9\u6848\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3002",infoText:"\u4FE1\u606F\u5185\u5BB9\u5C55\u793A",dropdown:"\u4E0B\u62C9\u83DC\u5355",finished:"\u5DF2\u5B8C\u6210",inProgress:"\u8FDB\u884C\u4E2D",waiting:"\u7B49\u5F85\u4E2D",option:"\u9009\u9879",apple:"\u82F9\u679C",banana:"\u9999\u8549",orange:"\u6A58\u5B50",watermelon:"\u897F\u74DC",primary:"\u4E3B\u8981\u6309\u94AE",danger:"\u5371\u9669\u6309\u94AE",default:"\u9ED8\u8BA4\u6309\u94AE",dashed:"\u865A\u7EBF\u6309\u94AE",icon:"\u56FE\u6807\u6309\u94AE",hello:"\u4F60\u597D\uFF0CAnt Design!",release:"Ant Design 5.0 \u6B63\u5F0F\u53D1\u5E03\uFF01"},en:{range:"Set Range",text:"Ant Design 5.0 use CSS-in-JS technology to provide dynamic & mix theme ability. And which use component level CSS-in-JS solution get your application a better performance.",infoText:"Info Text",dropdown:"Dropdown",finished:"Finished",inProgress:"In Progress",waiting:"Waiting",option:"Option",apple:"Apple",banana:"Banana",orange:"Orange",watermelon:"Watermelon",primary:"Primary",danger:"Danger",default:"Default",dashed:"Dashed",icon:"Icon",hello:"Hello, Ant Design!",release:"Ant Design 5.0 is released!"}},x=(0,o.createStyles)(({token:e,css:n})=>{let l=e.padding;return{holder:n`
      width: 500px;
      display: flex;
      flex-direction: column;
      row-gap: ${l}px;
      opacity: 0.8;
    `,flex:n`
      display: flex;
      flex-wrap: nowrap;
      column-gap: ${l}px;
    `,ptg_20:n`
      flex: 0 1 20%;
    `,ptg_none:n`
      flex: none;
    `,block:n`
      background-color: ${e.colorBgContainer};
      padding: ${e.paddingXS}px ${e.paddingSM}px;
      border-radius: ${e.borderRadius}px;
      border: 1px solid ${e.colorBorder};
    `,noMargin:n`
      margin: 0;
    `};});var f=()=>{let[e]=(0,i.default)(g),{styles:n}=x();return(0,t.jsxs)(d.default,{options:{max:20,glare:!0,scale:1},className:n.holder,children:[(0,t.jsx)(c,{title:"Ant Design 5.0",width:"100%",children:e.text}),(0,t.jsx)(r.Alert,{message:e.infoText,type:"info"}),(0,t.jsxs)("div",{className:n.flex,children:[(0,t.jsx)(r.ColorPicker,{style:{flex:"none"}}),(0,t.jsx)("div",{style:{flex:"none"},children:(0,t.jsx)(r.Dropdown.Button,{menu:{items:Array.from({length:5}).map((n,l)=>({key:`opt${l}`,label:`${e.option} ${l}`}))},children:e.dropdown})}),(0,t.jsx)(r.Select,{style:{flex:"auto"},mode:"multiple",maxTagCount:"responsive",defaultValue:[{value:"apple"},{value:"banana"}],options:[{value:"apple",label:e.apple},{value:"banana",label:e.banana},{value:"orange",label:e.orange},{value:"watermelon",label:e.watermelon}]}),(0,t.jsx)(r.Input,{style:{flex:"none",width:120}})]}),(0,t.jsx)(r.Progress,{style:{margin:0},percent:100,strokeColor:{"0%":"#108ee9","100%":"#87d068"}}),(0,t.jsx)(r.Progress,{style:{margin:0},percent:33,status:"exception"}),(0,t.jsx)(r.Steps,{current:1,items:[{title:e.finished},{title:e.inProgress},{title:e.waiting}]}),(0,t.jsx)("div",{className:n.block,children:(0,t.jsx)(r.Slider,{style:{marginInline:20},range:!0,marks:{0:"0\xb0C",26:"26\xb0C",37:"37\xb0C",100:{style:{color:"#f50"},label:(0,t.jsx)("strong",{children:"100\xb0C"})}},defaultValue:[26,37]})}),(0,t.jsxs)("div",{className:n.flex,children:[(0,t.jsx)(r.Button,{className:n.ptg_20,type:"primary",children:e.primary}),(0,t.jsx)(r.Button,{className:n.ptg_20,type:"primary",danger:!0,children:e.danger}),(0,t.jsx)(r.Button,{className:n.ptg_20,children:e.default}),(0,t.jsx)(r.Button,{className:n.ptg_20,type:"dashed",children:e.dashed}),(0,t.jsx)(r.Button,{className:n.ptg_20,icon:(0,t.jsx)(s.AntDesignOutlined,{}),children:e.icon})]}),(0,t.jsx)("div",{className:n.block,children:(0,t.jsxs)("div",{className:n.flex,children:[(0,t.jsx)(r.Switch,{className:n.ptg_none,defaultChecked:!0,checkedChildren:(0,t.jsx)(s.CheckOutlined,{}),unCheckedChildren:(0,t.jsx)(s.CloseOutlined,{})}),(0,t.jsx)(r.Checkbox.Group,{className:n.ptg_none,options:[e.apple,e.banana,e.orange],defaultValue:[e.apple]})]})}),(0,t.jsx)("div",{children:(0,t.jsx)(u,{content:e.release,type:"success"})}),(0,t.jsx)(p,{title:e.hello,placement:"topLeft",className:n.noMargin}),(0,t.jsx)(r.Alert,{message:"Ant Design love you!",type:"success"})]});};}}]);