(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["734d6f71"],{"734d6f71":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=l("f19d2b93");l("b45b7a1f");var t=l("5b220c3d"),r=l("a9d1a279");let{Option:i}=r.Select,s=({type:e,onChange:a})=>"time"===e?(0,n.jsx)(r.TimePicker,{onChange:a}):"date"===e?(0,n.jsx)(r.DatePicker,{onChange:a}):(0,n.jsx)(r.DatePicker,{picker:e,onChange:a});var d=()=>{let[e,a]=(0,t.useState)("time");return(0,n.jsxs)(r.Space,{children:[(0,n.jsxs)(r.Select,{"aria-label":"Picker Type",value:e,onChange:a,children:[(0,n.jsx)(i,{value:"time",children:"Time"}),(0,n.jsx)(i,{value:"date",children:"Date"}),(0,n.jsx)(i,{value:"week",children:"Week"}),(0,n.jsx)(i,{value:"month",children:"Month"}),(0,n.jsx)(i,{value:"quarter",children:"Quarter"}),(0,n.jsx)(i,{value:"year",children:"Year"})]}),(0,n.jsx)(s,{type:e,onChange:e=>console.log(e)})]});};}}]);