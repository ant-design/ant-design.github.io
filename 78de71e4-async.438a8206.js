(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["78de71e4"],{"03537d8c":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("262da149");var a="import React from 'react';\nimport { Pagination } from 'antd';\n\nconst App: React.FC = () => <Pagination defaultCurrent={2} total={50} showSizeChanger={false} />;\n\nexport default App;\n";},"5175a65b":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("cf9c0635");var a="import React from 'react';\nimport { Pagination } from 'antd';\n\nconst App: React.FC = () => (\n  <Pagination\n    defaultCurrent={3}\n    total={500}\n    showQuickJumper\n    showTotal={(total, range) => `\u7B2C ${range.join('-')} \u6761 / \u5171 ${total} \u6761`}\n  />\n);\n\nexport default App;\n";},"78de71e4":function(e,n,t){"use strict";var a=t("852bbaa9")._;t.d(n,"__esModule",{value:!0}),t.d(n,"demos",{enumerable:!0,get:function(){return r;}});var d=t("852bbaa9"),o=d._(t("5b220c3d"));t("2366b55b");var i=d._(t("a9d1a279"));let r={"components-pagination-index-tab-design-demo-behavior-pattern":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(a,t.bind(t,"c329889c"))))),asset:null,context:void 0,renderOpts:void 0},"components-pagination-index-tab-design-demo-basic":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(a,t.bind(t,"8b99db84"))))),asset:{type:"BLOCK",id:"components-pagination-index-tab-design-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("03537d8c").default},react:{type:"NPM",value:"19.0.0"},antd:{type:"NPM",value:"5.24.3"}},entry:"index.tsx",title:"\u5C11\u91CF\u9875\u9762",description:"\u6700\u57FA\u7840\u7684\u5206\u9875\u63A7\u4EF6\uFF0C\u4EC5\u5C55\u793A\u9875\u7801\u3002"},context:{react:o,antd:i},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(a,t.bind(t,"d2b37e0b")))).default(...e)}},"components-pagination-index-tab-design-demo-large-amount":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(a,t.bind(t,"b5256b93"))))),asset:{type:"BLOCK",id:"components-pagination-index-tab-design-demo-large-amount",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("db0d7c70").default},react:{type:"NPM",value:"19.0.0"},antd:{type:"NPM",value:"5.24.3"}},entry:"index.tsx",title:"\u5927\u91CF\u9875\u9762",description:"\u62E5\u6709\u5927\u91CF\u6570\u636E\u9700\u8981\u5C55\u793A\uFF0C\u901A\u8FC7\u5206\u9875\u80FD\u591F\u8BA9\u7528\u6237\u5FEB\u901F\u5B9A\u4F4D\u5F53\u524D\u9875\u7801\u3002\u5C55\u793A\u9996\u5C3E\u9875\u7801\uFF0C\u90E8\u5206\u9875\u7801\u7701\u7565\u3002"},context:{react:o,antd:i},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(a,t.bind(t,"d2b37e0b")))).default(...e)}},"components-pagination-index-tab-design-demo-page-size":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(a,t.bind(t,"49712919"))))),asset:{type:"BLOCK",id:"components-pagination-index-tab-design-demo-page-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("854a0a5b").default},react:{type:"NPM",value:"19.0.0"},antd:{type:"NPM",value:"5.24.3"}},entry:"index.tsx",title:"\u8C03\u6574\u5355\u9875\u5C55\u793A\u6761\u6570",description:"\u53EF\u6839\u636E\u7528\u6237\u9700\u6C42\u5BF9\u6BCF\u9875\u5C55\u793A\u6761\u76EE\u6570\u8FDB\u884C\u8C03\u6574\u3002"},context:{react:o,antd:i},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(a,t.bind(t,"d2b37e0b")))).default(...e)}},"components-pagination-index-tab-design-demo-quick-jump":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(a,t.bind(t,"ca50d061"))))),asset:{type:"BLOCK",id:"components-pagination-index-tab-design-demo-quick-jump",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("cb1b72d5").default},react:{type:"NPM",value:"19.0.0"},antd:{type:"NPM",value:"5.24.3"}},entry:"index.tsx",title:"\u5FEB\u901F\u8DF3\u8F6C",description:"\u5F53\u6570\u636E\u6709\u5FEB\u901F\u5B9A\u4F4D\u7684\u9700\u6C42\u65F6\uFF0C\u8F93\u5165\u9875\u7801\uFF0C\u53EF\u5FEB\u901F\u8DF3\u8F6C\u5230\u6307\u5B9A\u9875\u3002"},context:{react:o,antd:i},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(a,t.bind(t,"d2b37e0b")))).default(...e)}},"components-pagination-index-tab-design-demo-total":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(a,t.bind(t,"d6206304"))))),asset:{type:"BLOCK",id:"components-pagination-index-tab-design-demo-total",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("5175a65b").default},react:{type:"NPM",value:"19.0.0"},antd:{type:"NPM",value:"5.24.3"}},entry:"index.tsx",title:"\u4E86\u89E3\u6570\u636E\u603B\u91CF",description:"\u7528\u6237\u65E0\u9700\u5168\u90E8\u6D4F\u89C8\u5373\u53EF\u5FEB\u901F\u4E86\u89E3\u6570\u636E\u603B\u91CF\u3002\u5E38\u7528\u4E8E\u8868\u683C\u5185\u7684\u6570\u636E\u7EDF\u8BA1\u3002"},context:{react:o,antd:i},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(a,t.bind(t,"d2b37e0b")))).default(...e)}},"components-pagination-index-tab-design-demo-simple":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(a,t.bind(t,"8fd9cf42"))))),asset:{type:"BLOCK",id:"components-pagination-index-tab-design-demo-simple",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("b16713e6").default},react:{type:"NPM",value:"19.0.0"},antd:{type:"NPM",value:"5.24.3"}},entry:"index.tsx",title:"\u7B80\u6D01\u5206\u9875",description:"\u6781\u5EA6\u7B80\u5355\u7684\u5206\u9875\u63A7\u4EF6\uFF0C\u53EA\u5C55\u793A\u5F53\u524D\u9875\u3001\u603B\u9875\u6570\u53CA\u4E0A\u4E0B\u7FFB\u9875\u3002\u9002\u7528\u4E8E\u6A21\u5757\u5185\u7684\u6A2A\u5411\u7A7A\u95F4\u8F83\u5C11\u7684\u573A\u666F\u3002"},context:{react:o,antd:i},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(a,t.bind(t,"d2b37e0b")))).default(...e)}},"components-pagination-index-tab-design-demo-mini":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(a,t.bind(t,"5dd65aa6"))))),asset:{type:"BLOCK",id:"components-pagination-index-tab-design-demo-mini",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("c1a23338").default},react:{type:"NPM",value:"19.0.0"},antd:{type:"NPM",value:"5.24.3"}},entry:"index.tsx",title:"\u8FF7\u4F60\u7248\u5206\u9875",description:"\u5C0F\u5C3A\u5BF8\u7684\u5206\u9875\u63A7\u4EF6\u3002\u9002\u7528\u4E8E\u6A21\u5757\u5185\u7684\u7A7A\u95F4\u8F83\u5C11\uFF0C\u9700\u8981\u8F7B\u91CF\u5316\u7684\u7FFB\u9875\u7684\u573A\u666F\u3002"},context:{react:o,antd:i},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(a,t.bind(t,"d2b37e0b")))).default(...e)}},"components-pagination-index-tab-design-demo-itemrender":{component:o.default.memo(o.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("9e8e2db3")]).then(t.dr(a,t.bind(t,"1a795707"))))),asset:{type:"BLOCK",id:"components-pagination-index-tab-design-demo-itemrender",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("81ff247d").default},react:{type:"NPM",value:"19.0.0"},antd:{type:"NPM",value:"5.24.3"}},entry:"index.tsx",title:"\u4E0A\u4E00\u6B65\u548C\u4E0B\u4E00\u6B65"},context:{react:o,antd:i},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("d2b37e0b")]).then(t.dr(a,t.bind(t,"d2b37e0b")))).default(...e)}}};},"854a0a5b":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("37d849cd");var a="import React from 'react';\nimport { Pagination } from 'antd';\n\nconst App: React.FC = () => <Pagination defaultCurrent={3} total={500} />;\n\nexport default App;\n";},b16713e6:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("8d1c3a29");var a="import React from 'react';\nimport { Pagination } from 'antd';\n\nconst App: React.FC = () => (\n  <Pagination defaultCurrent={2} total={50} showSizeChanger={false} simple />\n);\n\nexport default App;\n";},c1a23338:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("cf5c29e1");var a='import React from \'react\';\nimport { Flex, Pagination } from \'antd\';\n\nconst App: React.FC = () => (\n  <Flex vertical gap="middle">\n    <Pagination defaultCurrent={1} total={50} showSizeChanger={false} size="small" />\n    <Pagination defaultCurrent={1} total={100} showSizeChanger={false} size="small" />\n    <Pagination defaultCurrent={1} total={100} size="small" />\n    <Pagination defaultCurrent={1} total={100} showQuickJumper size="small" />\n    <Pagination\n      defaultCurrent={1}\n      total={100}\n      showQuickJumper\n      size="small"\n      showTotal={(total, range) => `\u7B2C ${range.join(\'-\')} \u6761 / \u5171 ${total} \u6761`}\n    />\n  </Flex>\n);\n\nexport default App;\n';},cb1b72d5:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("145c2aeb");var a="import React from 'react';\nimport { Pagination } from 'antd';\n\nconst App: React.FC = () => <Pagination defaultCurrent={3} total={500} showQuickJumper />;\n\nexport default App;\n";},db0d7c70:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("faeca3c4");var a="import React from 'react';\nimport { Pagination } from 'antd';\n\nconst App: React.FC = () => <Pagination defaultCurrent={5} total={100} showSizeChanger={false} />;\n\nexport default App;\n";}}]);