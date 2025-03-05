(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["8f4b819c"],{"03abd0ca":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=l("f19d2b93");l("fd9b3e6b");var n=l("e22febe0"),r=l("a9d1a279"),s=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Input,{size:"large",placeholder:"large size",prefix:(0,a.jsx)(n.UserOutlined,{})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(r.Input,{placeholder:"default size",prefix:(0,a.jsx)(n.UserOutlined,{})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(r.Input,{size:"small",placeholder:"small size",prefix:(0,a.jsx)(n.UserOutlined,{})})]});},"0a9437f0":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=l("f19d2b93");l("f3e2098e");var n=l("a9d1a279");let{Title:r}=n.Typography;var s=()=>{let e={onChange:e=>{console.log("onChange:",e);},onInput:e=>{console.log("onInput:",e);}};return(0,a.jsxs)(n.Flex,{gap:"middle",align:"flex-start",vertical:!0,children:[(0,a.jsx)(r,{level:5,children:"With formatter (Upcase)"}),(0,a.jsx)(n.Input.OTP,{formatter:e=>e.toUpperCase(),...e}),(0,a.jsx)(r,{level:5,children:"With Disabled"}),(0,a.jsx)(n.Input.OTP,{disabled:!0,...e}),(0,a.jsx)(r,{level:5,children:"With Length (8)"}),(0,a.jsx)(n.Input.OTP,{length:8,...e}),(0,a.jsx)(r,{level:5,children:"With variant"}),(0,a.jsx)(n.Input.OTP,{variant:"filled",...e}),(0,a.jsx)(r,{level:5,children:"With custom display character"}),(0,a.jsx)(n.Input.OTP,{mask:"\u{1F512}",...e}),(0,a.jsx)(r,{level:5,children:"With custom ReactNode separator"}),(0,a.jsx)(n.Input.OTP,{separator:(0,a.jsx)("span",{children:"/"}),...e}),(0,a.jsx)(r,{level:5,children:"With custom function separator"}),(0,a.jsx)(n.Input.OTP,{separator:e=>(0,a.jsx)("span",{style:{color:1&e?"red":"blue"},children:"\u2014"}),...e})]});};},"0f1976bc":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=l("f19d2b93");l("49583d6b");var n=l("5b220c3d");let{TextArea:r}=l("a9d1a279").Input;var s=()=>{let[e,t]=(0,n.useState)("");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{placeholder:"Autosize height based on content lines",autoSize:!0}),(0,a.jsx)("div",{style:{margin:"24px 0"}}),(0,a.jsx)(r,{placeholder:"Autosize height with minimum and maximum number of lines",autoSize:{minRows:2,maxRows:6}}),(0,a.jsx)("div",{style:{margin:"24px 0"}}),(0,a.jsx)(r,{value:e,onChange:e=>t(e.target.value),placeholder:"Controlled autosize",autoSize:{minRows:3,maxRows:5}})]});};},"14fb341f":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return u;}});var a=l("f19d2b93");l("10a5a1b5");var n=l("a9d1a279");let{TextArea:r}=n.Input,s=e=>{console.log(e);};var u=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Input,{placeholder:"input with clear icon",allowClear:!0,onChange:s}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(r,{placeholder:"textarea with clear icon",allowClear:!0,onChange:s})]});},"1b288932":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var a=l("f19d2b93");l("d21f630e");let{TextArea:n}=l("a9d1a279").Input;var r=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{rows:4}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n,{rows:4,placeholder:"maxLength is 6",maxLength:6})]});},"2a86fb87":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return i;}});var a=l("f19d2b93");l("abd0f2bf");var n=l("5b220c3d"),r=l("a9d1a279");let s=e=>new Intl.NumberFormat().format(e),u=e=>{let{value:t,onChange:l}=e,n=t?(0,a.jsx)("span",{className:"numeric-input-title",children:"-"!==t?s(Number(t)):"-"}):"Input a number";return(0,a.jsx)(r.Tooltip,{trigger:["focus"],title:n,placement:"topLeft",classNames:{root:"numeric-input"},children:(0,a.jsx)(r.Input,{...e,onChange:e=>{let{value:t}=e.target;(/^-?\d*(\.\d*)?$/.test(t)||""===t||"-"===t)&&l(t);},onBlur:()=>{let e=t;("."===t.charAt(t.length-1)||"-"===t)&&(e=t.slice(0,-1)),l(e.replace(/0*(\d+)/,"$1"));},placeholder:"Input a number",maxLength:16})});};var i=()=>{let[e,t]=(0,n.useState)("");return(0,a.jsx)(u,{style:{width:120},value:e,onChange:t});};},"30cb95c3":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return u;}});var a=l("777fffbe"),n=l("f19d2b93");l("ffca0073");var r=a._(l("d22f3cc7")),s=l("a9d1a279"),u=()=>(0,n.jsxs)(s.Space,{direction:"vertical",style:{width:"100%"},children:[(0,n.jsx)(s.Input,{status:"error",placeholder:"Error"}),(0,n.jsx)(s.Input,{status:"warning",placeholder:"Warning"}),(0,n.jsx)(s.Input,{status:"error",prefix:(0,n.jsx)(r.default,{}),placeholder:"Error with prefix"}),(0,n.jsx)(s.Input,{status:"warning",prefix:(0,n.jsx)(r.default,{}),placeholder:"Warning with prefix"})]});},"33e53140":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=l("f19d2b93");l("b3160a88");var n=l("a9d1a279");let{TextArea:r}=n.Input;var s=()=>(0,a.jsxs)("div",{style:{backgroundColor:"rgba(0, 0, 128, .2)"},children:[(0,a.jsx)(n.Input,{placeholder:"Unbordered",variant:"borderless"}),(0,a.jsx)(n.Input,{placeholder:"Unbordered",variant:"borderless",size:"large"}),(0,a.jsx)(r,{placeholder:"Unbordered",variant:"borderless"}),(0,a.jsx)(r,{placeholder:"Unbordered",variant:"borderless",allowClear:!0}),(0,a.jsx)(n.Input,{placeholder:"Unbordered",variant:"borderless",allowClear:!0}),(0,a.jsx)(n.Input,{prefix:"\uFFE5",suffix:"RMB",variant:"borderless"}),(0,a.jsx)(n.Input,{prefix:"\uFFE5",suffix:"RMB",disabled:!0,variant:"borderless"}),(0,a.jsx)(r,{allowClear:!0,style:{border:"2px solid #000"}}),(0,a.jsx)(n.Input,{defaultValue:"error",variant:"borderless",status:"error"}),(0,a.jsx)(n.Input,{defaultValue:"warning",variant:"borderless",status:"warning"}),(0,a.jsx)(n.Input,{prefix:"$",defaultValue:"error",variant:"borderless",status:"error"}),(0,a.jsx)(n.Input,{prefix:"$",defaultValue:"warning",variant:"borderless",status:"warning"})]});},"34c15617":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=l("f19d2b93");l("083338b7");var n=l("5b220c3d"),r=l("a9d1a279"),s=()=>{let e=(0,n.useRef)(null),[t,l]=(0,n.useState)(!0),s={style:{width:"100%"},defaultValue:"Ant Design love you!",ref:e};return(0,a.jsxs)(r.Space,{direction:"vertical",style:{width:"100%"},children:[(0,a.jsxs)(r.Space,{wrap:!0,children:[(0,a.jsx)(r.Button,{onClick:()=>{e.current.focus({cursor:"start"});},children:"Focus at first"}),(0,a.jsx)(r.Button,{onClick:()=>{e.current.focus({cursor:"end"});},children:"Focus at last"}),(0,a.jsx)(r.Button,{onClick:()=>{e.current.focus({cursor:"all"});},children:"Focus to select all"}),(0,a.jsx)(r.Button,{onClick:()=>{e.current.focus({preventScroll:!0});},children:"Focus prevent scroll"}),(0,a.jsx)(r.Switch,{checked:t,checkedChildren:"Input",unCheckedChildren:"TextArea",onChange:()=>{l(!t);}})]}),(0,a.jsx)("br",{}),t?(0,a.jsx)(r.Input,{...s}):(0,a.jsx)(r.Input.TextArea,{...s})]});};},"369ed3a9":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var a=l("777fffbe"),n=l("f19d2b93");l("2457483b");var r=l("e22febe0"),s=l("a9d1a279"),u=a._(l("1164364c")),i=a._(l("23546486"));let d={cn:{input:"\u8F93\u5165\u6846\u5143\u7D20",prefix:"\u524D\u7F00\u7684\u5305\u88F9\u5143\u7D20",suffix:"\u540E\u7F00\u7684\u5305\u88F9\u5143\u7D20",count:"\u6587\u5B57\u8BA1\u6570\u5143\u7D20"},en:{input:"input element",prefix:"prefix element",suffix:"suffix element",count:"count element"}};var o=()=>{let[e]=(0,i.default)(d);return(0,n.jsx)(u.default,{semantics:[{name:"input",desc:e.input,version:"5.4.0"},{name:"prefix",desc:e.prefix,version:"5.4.0"},{name:"suffix",desc:e.suffix,version:"5.4.0"},{name:"count",desc:e.count,version:"5.4.0"}],children:(0,n.jsx)(s.Input,{showCount:!0,prefix:(0,n.jsx)(r.UserOutlined,{}),suffix:(0,n.jsx)(r.EditOutlined,{}),defaultValue:"Hello, Ant Design"})});};},"37c4f087":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var a=l("f19d2b93");l("f7ed2e1f");var n=l("a9d1a279"),r=()=>(0,a.jsx)(n.Input,{placeholder:"Basic usage"});},"52cbe6c3":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var a=l("f19d2b93");l("984f7db5");let{Search:n}=l("a9d1a279").Input;var r=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{placeholder:"input search loading default",loading:!0}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n,{placeholder:"input search loading with enterButton",loading:!0,enterButton:!0}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n,{placeholder:"input search text",enterButton:"Search",size:"large",loading:!0})]});},"648b5935":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return u;}});var a=l("f19d2b93");l("4cc29ff5");var n=l("a9d1a279");let{TextArea:r}=n.Input,s=e=>{console.log("Change:",e.target.value);};var u=()=>(0,a.jsxs)(n.Flex,{vertical:!0,gap:32,children:[(0,a.jsx)(n.Input,{showCount:!0,maxLength:20,onChange:s}),(0,a.jsx)(r,{showCount:!0,maxLength:100,onChange:s,placeholder:"can resize"}),(0,a.jsx)(r,{showCount:!0,maxLength:100,onChange:s,placeholder:"disable resize",style:{height:120,resize:"none"}})]});},"6dd1cc9a":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return r;}});var a=l("f19d2b93");l("05425902");var n=l("a9d1a279"),r=()=>(0,a.jsxs)(n.Flex,{vertical:!0,gap:12,children:[(0,a.jsx)(n.Input,{placeholder:"Outlined"}),(0,a.jsx)(n.Input,{placeholder:"Filled",variant:"filled"}),(0,a.jsx)(n.Input,{placeholder:"Borderless",variant:"borderless"}),(0,a.jsx)(n.Input,{placeholder:"Underlined",variant:"underlined"})]});},"6e0bd2f7":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return u;}});var a=l("f19d2b93");l("05f80574");var n=l("5b220c3d"),r=l("a9d1a279");let{TextArea:s}=r.Input;var u=()=>{let[e,t]=(0,n.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Button,{onClick:()=>t(!e),style:{marginBottom:16},children:["Auto Resize: ",String(e)]}),(0,a.jsx)(s,{rows:4,autoSize:e,defaultValue:"The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows. The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows."}),(0,a.jsx)(s,{allowClear:!0,style:{width:93}})]});};},"756845c9":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=l("f19d2b93");l("167b685b");var n=l("e22febe0"),r=l("a9d1a279"),s=()=>(0,a.jsxs)(r.Space,{direction:"vertical",children:["Input addon Button:",(0,a.jsx)(r.Input,{addonAfter:(0,a.jsx)(r.Button,{type:"primary",children:"Submit"}),defaultValue:"mysite"}),(0,a.jsx)(r.Input,{addonAfter:(0,a.jsx)(r.Button,{children:"Submit"}),defaultValue:"mysite"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Input addon Button icon:",(0,a.jsx)(r.Input,{addonAfter:(0,a.jsx)(r.Button,{children:(0,a.jsx)(n.SettingOutlined,{})}),defaultValue:"mysite"})]});},"89eb98df":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return i;}});var a=l("777fffbe"),n=l("f19d2b93");l("eba13139");var r=a._(l("5b220c3d")),s=l("e22febe0"),u=l("a9d1a279"),i=()=>{let[e,t]=r.default.useState(!1);return(0,n.jsxs)(u.Space,{direction:"vertical",children:[(0,n.jsx)(u.Input.Password,{placeholder:"input password"}),(0,n.jsx)(u.Input.Password,{placeholder:"input password",iconRender:e=>e?(0,n.jsx)(s.EyeTwoTone,{}):(0,n.jsx)(s.EyeInvisibleOutlined,{})}),(0,n.jsxs)(u.Space,{direction:"horizontal",children:[(0,n.jsx)(u.Input.Password,{placeholder:"input password",visibilityToggle:{visible:e,onVisibleChange:t}}),(0,n.jsx)(u.Button,{style:{width:80},onClick:()=>t(e=>!e),children:e?"Hide":"Show"})]}),(0,n.jsx)(u.Input.Password,{disabled:!0,placeholder:"disabled input password"})]});};},"8dfa9163":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return i;}});var a=l("f19d2b93");l("0e8e8a0f");var n=l("e22febe0"),r=l("a9d1a279");let{Option:s}=r.Select,u=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var i=()=>(0,a.jsxs)("div",{className:"site-input-group-wrapper",children:[(0,a.jsx)(r.Input.Group,{size:"large",children:(0,a.jsxs)(r.Row,{gutter:8,children:[(0,a.jsx)(r.Col,{span:5,children:(0,a.jsx)(r.Input,{defaultValue:"0571"})}),(0,a.jsx)(r.Col,{span:8,children:(0,a.jsx)(r.Input,{defaultValue:"26888888"})})]})}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsx)(r.Input,{style:{width:"20%"},defaultValue:"0571"}),(0,a.jsx)(r.Input,{style:{width:"30%"},defaultValue:"26888888"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsx)(r.Input,{style:{width:"calc(100% - 200px)"},defaultValue:"https://ant.design"}),(0,a.jsx)(r.Button,{type:"primary",children:"Submit"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsx)(r.Input,{style:{width:"calc(100% - 200px)"},defaultValue:"git@github.com:ant-design/ant-design.git"}),(0,a.jsx)(r.Tooltip,{title:"search git url",children:(0,a.jsx)(r.Button,{icon:(0,a.jsx)(n.SearchOutlined,{})})})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsxs)(r.Select,{defaultValue:"Zhejiang",children:[(0,a.jsx)(s,{value:"Zhejiang",children:"Zhejiang"}),(0,a.jsx)(s,{value:"Jiangsu",children:"Jiangsu"})]}),(0,a.jsx)(r.Input,{style:{width:"50%"},defaultValue:"Xihu District, Hangzhou"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsx)(r.Input.Search,{allowClear:!0,style:{width:"40%"},defaultValue:"0571"}),(0,a.jsx)(r.Input.Search,{allowClear:!0,style:{width:"40%"},defaultValue:"26888888"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsxs)(r.Select,{defaultValue:"Option1",children:[(0,a.jsx)(s,{value:"Option1",children:"Option1"}),(0,a.jsx)(s,{value:"Option2",children:"Option2"})]}),(0,a.jsx)(r.Input,{style:{width:"50%"},defaultValue:"input content"}),(0,a.jsx)(r.InputNumber,{prefix:"@"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsx)(r.Input,{style:{width:"50%"},defaultValue:"input content"}),(0,a.jsx)(r.DatePicker,{style:{width:"50%"}})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsx)(r.Input,{style:{width:"30%"},defaultValue:"input content"}),(0,a.jsx)(r.DatePicker.RangePicker,{style:{width:"70%"}})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsxs)(r.Select,{defaultValue:"Option1-1",children:[(0,a.jsx)(s,{value:"Option1-1",children:"Option1-1"}),(0,a.jsx)(s,{value:"Option1-2",children:"Option1-2"})]}),(0,a.jsxs)(r.Select,{defaultValue:"Option2-2",children:[(0,a.jsx)(s,{value:"Option2-1",children:"Option2-1"}),(0,a.jsx)(s,{value:"Option2-2",children:"Option2-2"})]})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsxs)(r.Select,{defaultValue:"1",children:[(0,a.jsx)(s,{value:"1",children:"Between"}),(0,a.jsx)(s,{value:"2",children:"Except"})]}),(0,a.jsx)(r.Input,{style:{width:100,textAlign:"center"},placeholder:"Minimum"}),(0,a.jsx)(r.Input,{className:"site-input-split",style:{width:30,borderLeft:0,borderRight:0,pointerEvents:"none"},placeholder:"~",disabled:!0}),(0,a.jsx)(r.Input,{className:"site-input-right",style:{width:100,textAlign:"center"},placeholder:"Maximum"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsxs)(r.Select,{defaultValue:"Sign Up",style:{width:"30%"},children:[(0,a.jsx)(s,{value:"Sign Up",children:"Sign Up"}),(0,a.jsx)(s,{value:"Sign In",children:"Sign In"})]}),(0,a.jsx)(r.AutoComplete,{style:{width:"70%"},placeholder:"Email",options:[{value:"text 1"},{value:"text 2"}]})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(r.Input.Group,{compact:!0,children:[(0,a.jsxs)(r.Select,{style:{width:"30%"},defaultValue:"Home",children:[(0,a.jsx)(s,{value:"Home",children:"Home"}),(0,a.jsx)(s,{value:"Company",children:"Company"})]}),(0,a.jsx)(r.Cascader,{style:{width:"70%"},options:u,placeholder:"Select Address"})]})]});},"9bd8a9ea":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return i;}});var a=l("f19d2b93");l("ad640b4f");var n=l("e22febe0"),r=l("a9d1a279");let{Search:s}=r.Input,u=[{value:"zhejiang",label:"Zhejiang"},{value:"jiangsu",label:"Jiangsu"}];var i=()=>(0,a.jsxs)(r.Space,{direction:"vertical",size:"middle",children:[(0,a.jsx)(r.Space.Compact,{children:(0,a.jsx)(r.Input,{defaultValue:"26888888"})}),(0,a.jsxs)(r.Space.Compact,{children:[(0,a.jsx)(r.Input,{style:{width:"20%"},defaultValue:"0571"}),(0,a.jsx)(r.Input,{style:{width:"80%"},defaultValue:"26888888"})]}),(0,a.jsx)(r.Space.Compact,{children:(0,a.jsx)(s,{addonBefore:"https://",placeholder:"input search text",allowClear:!0})}),(0,a.jsxs)(r.Space.Compact,{style:{width:"100%"},children:[(0,a.jsx)(r.Input,{defaultValue:"Combine input and button"}),(0,a.jsx)(r.Button,{type:"primary",children:"Submit"})]}),(0,a.jsxs)(r.Space.Compact,{children:[(0,a.jsx)(r.Select,{defaultValue:"Zhejiang",options:u}),(0,a.jsx)(r.Input,{defaultValue:"Xihu District, Hangzhou"})]}),(0,a.jsxs)(r.Space.Compact,{size:"large",children:[(0,a.jsx)(r.Input,{addonBefore:(0,a.jsx)(n.SearchOutlined,{}),placeholder:"large size"}),(0,a.jsx)(r.Input,{placeholder:"another input"})]})]});},"9c3ac8a2":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=l("f19d2b93");l("9a420ac9");var n=l("a9d1a279");let{TextArea:r}=n.Input;var s=()=>(0,a.jsxs)(n.Flex,{vertical:!0,gap:20,children:[(0,a.jsxs)(n.Flex,{gap:12,children:[(0,a.jsx)(n.Input,{placeholder:"Filled",variant:"filled"}),(0,a.jsx)(n.Input,{placeholder:"Filled",variant:"filled",disabled:!0}),(0,a.jsx)(n.Input,{placeholder:"Filled",variant:"filled",status:"error",value:"Filled Error"})]}),(0,a.jsxs)(n.Flex,{gap:12,children:[(0,a.jsx)(n.Input,{prefix:"$",placeholder:"Filled",variant:"filled"}),(0,a.jsx)(n.Input,{prefix:"$",placeholder:"Filled",variant:"filled",disabled:!0}),(0,a.jsx)(n.Input,{prefix:"$",placeholder:"Filled",variant:"filled",status:"error",value:"Filled Error"})]}),(0,a.jsxs)(n.Flex,{gap:12,children:[(0,a.jsx)(n.Input,{addonBefore:"http://",addonAfter:".com",placeholder:"Filled",variant:"filled"}),(0,a.jsx)(n.Input,{addonBefore:"http://",addonAfter:".com",placeholder:"Filled",variant:"filled",disabled:!0}),(0,a.jsx)(n.Input,{addonBefore:"http://",addonAfter:".com",placeholder:"Filled",variant:"filled",status:"error",value:"Filled Error"})]}),(0,a.jsxs)(n.Flex,{gap:12,children:[(0,a.jsx)(n.Input,{addonAfter:".com",placeholder:"Filled",variant:"filled"}),(0,a.jsx)(n.Input,{addonAfter:".com",placeholder:"Filled",variant:"filled",disabled:!0}),(0,a.jsx)(n.Input,{addonAfter:".com",placeholder:"Filled",variant:"filled",status:"error",value:"Filled Error"})]}),(0,a.jsxs)(n.Flex,{gap:12,children:[(0,a.jsx)(n.Input,{addonBefore:"http://",placeholder:"Filled",variant:"filled"}),(0,a.jsx)(n.Input,{addonBefore:"http://",placeholder:"Filled",variant:"filled",disabled:!0}),(0,a.jsx)(n.Input,{addonBefore:"http://",placeholder:"Filled",variant:"filled",status:"error",value:"Filled Error"})]}),(0,a.jsx)(r,{variant:"filled",placeholder:"Basic"}),(0,a.jsx)(r,{variant:"filled",placeholder:"Basic",status:"error",value:"Filled Error"}),(0,a.jsx)(r,{variant:"filled",placeholder:"Allow Clear",allowClear:!0}),(0,a.jsx)(r,{variant:"filled",placeholder:"Show Count",showCount:!0}),(0,a.jsx)(r,{variant:"filled",placeholder:"Show Count",showCount:!0,status:"error",value:"Filled Error"})]});},a646e654:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return d;}});var a=l("777fffbe"),n=l("f19d2b93");l("29e45378");var r=l("a9d1a279"),s=a._(l("1164364c")),u=a._(l("23546486"));let i={cn:{textarea:"\u8F93\u5165\u6846\u5143\u7D20",count:"\u6587\u5B57\u8BA1\u6570\u5143\u7D20"},en:{textarea:"textarea element",count:"count element"}};var d=()=>{let[e]=(0,u.default)(i);return(0,n.jsx)(s.default,{semantics:[{name:"textarea",desc:e.textarea,version:"5.4.0"},{name:"count",desc:e.count,version:"5.4.0"}],children:(0,n.jsx)(r.Input.TextArea,{defaultValue:"Hello, Ant Design",rows:3,count:{max:100,show:!0}})});};},ad9eb37f:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return d;}});var a=l("f19d2b93");l("bc89042d");var n=l("e22febe0"),r=l("a9d1a279");let{Search:s}=r.Input,u=(0,a.jsx)(n.AudioOutlined,{style:{fontSize:16,color:"#1677ff"}}),i=(e,t,l)=>console.log(null==l?void 0:l.source,e);var d=()=>(0,a.jsxs)(r.Space,{direction:"vertical",children:[(0,a.jsx)(s,{placeholder:"input search text",onSearch:i,style:{width:200}}),(0,a.jsx)(s,{placeholder:"input search text",allowClear:!0,onSearch:i,style:{width:200}}),(0,a.jsx)(s,{addonBefore:"https://",placeholder:"input search text",allowClear:!0,onSearch:i,style:{width:304}}),(0,a.jsx)(s,{placeholder:"input search text",onSearch:i,enterButton:!0}),(0,a.jsx)(s,{placeholder:"input search text",allowClear:!0,enterButton:"Search",size:"large",onSearch:i}),(0,a.jsx)(s,{placeholder:"input search text",enterButton:"Search",size:"large",suffix:u,onSearch:i})]});},b2b25544:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return d;}});var a=l("f19d2b93");l("b4e30579");var n=l("e22febe0"),r=l("a9d1a279");let{Option:s}=r.Select,u=(0,a.jsxs)(r.Select,{defaultValue:"http://",children:[(0,a.jsx)(s,{value:"http://",children:"http://"}),(0,a.jsx)(s,{value:"https://",children:"https://"})]}),i=(0,a.jsxs)(r.Select,{defaultValue:".com",children:[(0,a.jsx)(s,{value:".com",children:".com"}),(0,a.jsx)(s,{value:".jp",children:".jp"}),(0,a.jsx)(s,{value:".cn",children:".cn"}),(0,a.jsx)(s,{value:".org",children:".org"})]});var d=()=>(0,a.jsxs)(r.Space,{direction:"vertical",children:[(0,a.jsx)(r.Input,{addonBefore:"http://",addonAfter:".com",defaultValue:"mysite"}),(0,a.jsx)(r.Input,{addonBefore:u,addonAfter:i,defaultValue:"mysite"}),(0,a.jsx)(r.Input,{addonAfter:(0,a.jsx)(n.SettingOutlined,{}),defaultValue:"mysite"}),(0,a.jsx)(r.Input,{addonBefore:"http://",suffix:".com",defaultValue:"mysite"}),(0,a.jsx)(r.Input,{addonBefore:(0,a.jsx)(r.Cascader,{placeholder:"cascader",style:{width:150}}),defaultValue:"mysite"})]});},bbf35387:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=l("f19d2b93");l("3097a4fa");var n=l("e22febe0"),r=l("a9d1a279"),s=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.ConfigProvider,{theme:{token:{controlHeight:28}},children:(0,a.jsx)(r.Input,{placeholder:"Basic usage"})}),(0,a.jsx)(r.ConfigProvider,{componentSize:"small",theme:{token:{},components:{Input:{inputFontSizeSM:12}}},children:(0,a.jsx)(r.Input,{placeholder:"Basic usage"})}),(0,a.jsx)(r.ConfigProvider,{theme:{components:{Input:{inputFontSize:10}}},children:(0,a.jsx)(r.Input,{placeholder:"With prefix",prefix:(0,a.jsx)(n.UserOutlined,{})})})]});},c22847d0:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=l("f19d2b93");l("1e1edef3");var n=l("e22febe0"),r=l("a9d1a279"),s=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Input,{placeholder:"Enter your username",prefix:(0,a.jsx)(n.UserOutlined,{style:{color:"rgba(0,0,0,.25)"}}),suffix:(0,a.jsx)(r.Tooltip,{title:"Extra information",children:(0,a.jsx)(n.InfoCircleOutlined,{style:{color:"rgba(0,0,0,.45)"}})})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(r.Input,{prefix:"\uFFE5",suffix:"RMB"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(r.Input,{prefix:"\uFFE5",suffix:"RMB",disabled:!0})]});},e4733c4f:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return o;}});var a=l("f19d2b93");l("5bcf1657");var n=l("a9d1a279");let{Text:r}=n.Typography,{RangePicker:s}=n.DatePicker,u={width:50},i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],d=[{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"}];var o=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Mentions,{style:{width:100},rows:1}),(0,a.jsx)(n.Input.TextArea,{rows:1,style:{width:100}}),(0,a.jsx)(n.Button,{type:"primary",children:"Button"}),(0,a.jsx)(n.Input,{style:{width:100}}),(0,a.jsx)(r,{copyable:!0,children:"Ant Design"}),(0,a.jsx)(n.Input,{prefix:"1",suffix:"2",style:{width:100}}),(0,a.jsx)(n.Input,{addonBefore:"1",addonAfter:"2",style:{width:100}}),(0,a.jsx)(n.InputNumber,{style:{width:100}}),(0,a.jsx)(n.DatePicker,{style:{width:100}}),(0,a.jsx)(n.TimePicker,{style:{width:100}}),(0,a.jsx)(n.Select,{style:{width:100},defaultValue:"jack",options:d}),(0,a.jsx)(n.Select,{style:{width:100},defaultValue:"",options:d}),(0,a.jsx)(n.Select,{style:{width:100},options:d}),(0,a.jsx)(n.TreeSelect,{style:{width:100}}),(0,a.jsx)(n.Cascader,{defaultValue:["zhejiang","hangzhou","xihu"],options:i}),(0,a.jsx)(s,{}),(0,a.jsx)(n.DatePicker,{picker:"month"}),(0,a.jsxs)(n.Radio.Group,{defaultValue:"a",children:[(0,a.jsx)(n.Radio.Button,{value:"a",children:"Hangzhou"}),(0,a.jsx)(n.Radio.Button,{value:"b",children:"Shanghai"})]}),(0,a.jsx)(n.AutoComplete,{style:{width:100},placeholder:"input here"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.Input,{prefix:"$",addonBefore:"Http://",addonAfter:".com",defaultValue:"mysite"}),(0,a.jsx)(n.Input,{style:u,suffix:"Y"}),(0,a.jsx)(n.Input,{style:u}),(0,a.jsx)(n.Input,{style:u,defaultValue:"1",suffix:"Y"})]});},f5bc5dcc:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=l("f19d2b93");l("f1b43603");var n=l("a9d1a279"),r=l("f44b7b58"),s=()=>(0,a.jsxs)(n.Flex,{vertical:!0,gap:16,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Typography.Title,{level:5,children:"Exceed Max"}),(0,a.jsx)(n.Input,{count:{show:!0,max:10},defaultValue:"Hello, antd!"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Typography.Title,{level:5,children:"Emoji count as length 1"}),(0,a.jsx)(n.Input,{count:{show:!0,strategy:e=>(0,r.runes)(e).length},defaultValue:"\u{1F525}\u{1F525}\u{1F525}"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Typography.Title,{level:5,children:"Not exceed max"}),(0,a.jsx)(n.Input,{count:{show:!0,max:6,strategy:e=>(0,r.runes)(e).length,exceedFormatter:(e,{max:t})=>(0,r.runes)(e).slice(0,t).join("")},defaultValue:"\u{1F525} antd"})]})]});}}]);