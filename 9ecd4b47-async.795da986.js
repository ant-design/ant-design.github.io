(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["9ecd4b47"],{"9ecd4b47":function(a,e,n){"use strict";n.d(e,"__esModule",{value:!0}),n.d(e,"texts",{enumerable:!0,get:function(){return t;}}),n("2768842f");let t=[{value:"\u63D0\u4F9B\u53EF\u6D88\u8D39 React context \u7684 ",paraId:0,tocIndex:0},{value:"message.xxx",paraId:0,tocIndex:0},{value:"\u3001",paraId:0,tocIndex:0},{value:"Modal.xxx",paraId:0,tocIndex:0},{value:"\u3001",paraId:0,tocIndex:0},{value:"notification.xxx",paraId:0,tocIndex:0},{value:" \u7684\u9759\u6001\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7B80\u5316 useMessage \u7B49\u65B9\u6CD5\u9700\u8981\u624B\u52A8\u690D\u5165 ",paraId:0,tocIndex:0},{value:"contextHolder",paraId:0,tocIndex:0},{value:" \u7684\u95EE\u9898\u3002",paraId:0,tocIndex:0},{value:"\u63D0\u4F9B\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:".ant-app",paraId:0,tocIndex:0},{value:" \u7684\u9ED8\u8BA4\u91CD\u7F6E\u6837\u5F0F\uFF0C\u89E3\u51B3\u539F\u751F\u5143\u7D20\u6CA1\u6709 antd \u89C4\u8303\u6837\u5F0F\u7684\u95EE\u9898\u3002",paraId:0,tocIndex:0},{value:"App \u7EC4\u4EF6\u901A\u8FC7 ",paraId:1,tocIndex:5},{value:"Context",paraId:1,tocIndex:5},{value:" \u63D0\u4F9B\u4E0A\u4E0B\u6587\u65B9\u6CD5\u8C03\u7528\uFF0C\u56E0\u800C useApp \u9700\u8981\u4F5C\u4E3A\u5B50\u7EC4\u4EF6\u624D\u80FD\u4F7F\u7528\uFF0C\u6211\u4EEC\u63A8\u8350\u5728\u5E94\u7528\u4E2D\u9876\u5C42\u5305\u88F9 App\u3002",paraId:1,tocIndex:5},{value:"import React from 'react';\nimport { App } from 'antd';\n\nconst MyPage: React.FC = () => {\n  const { message, notification, modal } = App.useApp();\n  message.success('Good!');\n  notification.info({ message: 'Good' });\n  modal.warning({ title: 'Good' });\n  // ....\n  // other message, notification, modal static function\n  return <div>Hello word</div>;\n};\n\nconst MyApp: React.FC = () => (\n  <App>\n    <MyPage />\n  </App>\n);\n\nexport default MyApp;\n",paraId:2,tocIndex:5},{value:"\u6CE8\u610F\uFF1AApp.useApp \u5FC5\u987B\u5728 App \u4E4B\u4E0B\u65B9\u53EF\u4F7F\u7528\u3002",paraId:3,tocIndex:5},{value:"App \u7EC4\u4EF6\u53EA\u80FD\u5728 ",paraId:4,tocIndex:6},{value:"ConfigProvider",paraId:4,tocIndex:6},{value:" \u4E4B\u4E0B\u624D\u80FD\u4F7F\u7528 Design Token\uFF0C \u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u6837\u5F0F\u91CD\u7F6E\u80FD\u529B\uFF0C\u5219 ConfigProvider \u4E0E App \u7EC4\u4EF6\u5FC5\u987B\u6210\u5BF9\u51FA\u73B0\u3002",paraId:4,tocIndex:6},{value:"<ConfigProvider theme={{ ... }}>\n  <App>\n    ...\n  </App>\n</ConfigProvider>\n",paraId:5,tocIndex:6},{value:"<App>\n  <Space>\n    ...\n    <App>...</App>\n  </Space>\n</App>\n",paraId:6,tocIndex:7},{value:"// Entry component\nimport { App } from 'antd';\nimport type { MessageInstance } from 'antd/es/message/interface';\nimport type { ModalStaticFunctions } from 'antd/es/modal/confirm';\nimport type { NotificationInstance } from 'antd/es/notification/interface';\n\nlet message: MessageInstance;\nlet notification: NotificationInstance;\nlet modal: Omit<ModalStaticFunctions, 'warn'>;\n\nexport default () => {\n  const staticFunction = App.useApp();\n  message = staticFunction.message;\n  modal = staticFunction.modal;\n  notification = staticFunction.notification;\n  return null;\n};\n\nexport { message, notification, modal };\n",paraId:7,tocIndex:8},{value:"// sub page\nimport React from 'react';\nimport { Button, Space } from 'antd';\n\nimport { message } from './store';\n\nexport default () => {\n  const showMessage = () => {\n    message.success('Success!');\n  };\n\n  return (\n    <Space>\n      <Button type=\"primary\" onClick={showMessage}>\n        Open message\n      </Button>\n    </Space>\n  );\n};\n",paraId:8,tocIndex:8},{value:"\u901A\u7528\u5C5E\u6027\u53C2\u8003\uFF1A",paraId:9,tocIndex:9},{value:"\u901A\u7528\u5C5E\u6027",paraId:10,tocIndex:9},{value:"\u81EA ",paraId:11,tocIndex:9},{value:"antd@5.1.0",paraId:11,tocIndex:9},{value:" \u7248\u672C\u5F00\u59CB\u63D0\u4F9B\u8BE5\u7EC4\u4EF6\u3002",paraId:11,tocIndex:9},{value:"\u53C2\u6570",paraId:12,tocIndex:10},{value:"\u8BF4\u660E",paraId:12,tocIndex:10},{value:"\u7C7B\u578B",paraId:12,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:10},{value:"\u7248\u672C",paraId:12,tocIndex:10},{value:"component",paraId:12,tocIndex:10},{value:"\u8BBE\u7F6E\u6E32\u67D3\u5143\u7D20\uFF0C\u4E3A ",paraId:12,tocIndex:10},{value:"false",paraId:12,tocIndex:10},{value:" \u5219\u4E0D\u521B\u5EFA DOM \u8282\u70B9",paraId:12,tocIndex:10},{value:"ComponentType | false",paraId:12,tocIndex:10},{value:"div",paraId:12,tocIndex:10},{value:"5.11.0",paraId:12,tocIndex:10},{value:"message",paraId:12,tocIndex:10},{value:"App \u5185 Message \u7684\u5168\u5C40\u914D\u7F6E",paraId:12,tocIndex:10},{value:"MessageConfig",paraId:13,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"5.3.0",paraId:12,tocIndex:10},{value:"notification",paraId:12,tocIndex:10},{value:"App \u5185 Notification \u7684\u5168\u5C40\u914D\u7F6E",paraId:12,tocIndex:10},{value:"NotificationConfig",paraId:14,tocIndex:10},{value:"-",paraId:12,tocIndex:10},{value:"5.3.0",paraId:12,tocIndex:10},{value:"<App component={false}>",paraId:15},{value:"\u8BF7\u786E\u4FDD App \u7684 ",paraId:16,tocIndex:13},{value:"component",paraId:16,tocIndex:13},{value:" \u662F\u4E00\u4E2A\u6709\u6548\u7684 html \u6807\u7B7E\u540D\uFF0C\u4EE5\u4FBF\u5728\u542F\u7528 CSS \u53D8\u91CF\u65F6\u6709\u4E00\u4E2A\u5BB9\u5668\u6765\u627F\u8F7D CSS \u7C7B\u540D\u3002\u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u9ED8\u8BA4\u4E3A ",paraId:16,tocIndex:13},{value:"div",paraId:16,tocIndex:13},{value:" \u6807\u7B7E\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A ",paraId:16,tocIndex:13},{value:"false",paraId:16,tocIndex:13},{value:"\uFF0C\u5219\u4E0D\u4F1A\u521B\u5EFA\u989D\u5916\u7684 DOM \u8282\u70B9\uFF0C\u4E5F\u4E0D\u4F1A\u63D0\u4F9B\u9ED8\u8BA4\u6837\u5F0F\u3002",paraId:16,tocIndex:13}];}}]);