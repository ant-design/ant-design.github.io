(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["170d9c23"],{"170d9c23":function(e,a,d){"use strict";d.d(a,"__esModule",{value:!0}),d.d(a,"texts",{enumerable:!0,get:function(){return n;}}),d("80f6ed16");let n=[{value:"When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.",paraId:0,tocIndex:0},{value:"Common props ref\uFF1A",paraId:1,tocIndex:10},{value:"Common props",paraId:2,tocIndex:10},{value:"Note:",paraId:3,tocIndex:10},{value:" Part of the Calendar's locale is read from ",paraId:3,tocIndex:10},{value:"value",paraId:3,tocIndex:10},{value:". So, please set the locale of ",paraId:3,tocIndex:10},{value:"dayjs",paraId:3,tocIndex:10},{value:" correctly.",paraId:3,tocIndex:10},{value:"// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.\n// import dayjs from 'dayjs';\n// import 'dayjs/locale/zh-cn';\n// dayjs.locale('zh-cn');\n\n<Calendar cellRender={cellRender} onPanelChange={onPanelChange} onSelect={onSelect} />\n",paraId:4,tocIndex:10},{value:"Property",paraId:5,tocIndex:10},{value:"Description",paraId:5,tocIndex:10},{value:"Type",paraId:5,tocIndex:10},{value:"Default",paraId:5,tocIndex:10},{value:"Version",paraId:5,tocIndex:10},{value:"cellRender",paraId:5,tocIndex:10},{value:"Customize cell content",paraId:5,tocIndex:10},{value:"function(current: dayjs, info: { prefixCls: string, originNode: React.ReactElement, today: dayjs, range?: 'start' | 'end', type: PanelMode, locale?: Locale, subType?: 'hour' | 'minute' | 'second' | 'meridiem' }) => React.ReactNode",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"5.4.0",paraId:5,tocIndex:10},{value:"dateFullCellRender",paraId:5,tocIndex:10},{value:"Customize the display of the date cell, the returned content will override the cell",paraId:5,tocIndex:10},{value:"function(date: Dayjs): ReactNode",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"fullCellRender",paraId:5,tocIndex:10},{value:"Customize cell content",paraId:5,tocIndex:10},{value:"function(current: dayjs, info: { prefixCls: string, originNode: React.ReactElement, today: dayjs, range?: 'start' | 'end', type: PanelMode, locale?: Locale, subType?: 'hour' | 'minute' | 'second' | 'meridiem' }) => React.ReactNode",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"5.4.0",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"The date selected by default",paraId:5,tocIndex:10},{value:"dayjs",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"disabledDate",paraId:5,tocIndex:10},{value:"Function that specifies the dates that cannot be selected, ",paraId:5,tocIndex:10},{value:"currentDate",paraId:5,tocIndex:10},{value:" is same dayjs object as ",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:" prop which you shouldn't mutate it](",paraId:5,tocIndex:10},{value:"https://github.com/ant-design/ant-design/issues/30987",paraId:5,tocIndex:10},{value:")",paraId:5,tocIndex:10},{value:"(currentDate: Dayjs) => boolean",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"fullscreen",paraId:5,tocIndex:10},{value:"Whether to display in full-screen",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"true",paraId:5,tocIndex:10},{value:"showWeek",paraId:5,tocIndex:10},{value:"Whether to display week number",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"5.23.0",paraId:5,tocIndex:10},{value:"headerRender",paraId:5,tocIndex:10},{value:"Render custom header in panel",paraId:5,tocIndex:10},{value:"function(object:{value: Dayjs, type: 'year' | 'month', onChange: f(), onTypeChange: f()})",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"locale",paraId:5,tocIndex:10},{value:"The calendar's locale",paraId:5,tocIndex:10},{value:"object",paraId:5,tocIndex:10},{value:"(default)",paraId:5,tocIndex:10},{value:"mode",paraId:5,tocIndex:10},{value:"The display mode of the calendar",paraId:5,tocIndex:10},{value:"month",paraId:5,tocIndex:10},{value:" | ",paraId:5,tocIndex:10},{value:"year",paraId:5,tocIndex:10},{value:"month",paraId:5,tocIndex:10},{value:"validRange",paraId:5,tocIndex:10},{value:"To set valid range",paraId:5,tocIndex:10},{value:"[",paraId:5,tocIndex:10},{value:"dayjs",paraId:5,tocIndex:10},{value:", ",paraId:5,tocIndex:10},{value:"dayjs",paraId:5,tocIndex:10},{value:"]",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"The current selected date",paraId:5,tocIndex:10},{value:"dayjs",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"Callback for when date changes",paraId:5,tocIndex:10},{value:"function(date: Dayjs)",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"onPanelChange",paraId:5,tocIndex:10},{value:"Callback for when panel changes",paraId:5,tocIndex:10},{value:"function(date: Dayjs, mode: string)",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"onSelect",paraId:5,tocIndex:10},{value:"Callback for when a date is selected, include source info",paraId:5,tocIndex:10},{value:"function(date: Dayjs, info: { source: 'year' | 'month' | 'date' | 'customize' })",paraId:5,tocIndex:10},{value:"-",paraId:5,tocIndex:10},{value:"info",paraId:5,tocIndex:10},{value:": 5.6.0",paraId:5,tocIndex:10},{value:"See ",paraId:6,tocIndex:13},{value:"Use custom date library",paraId:7,tocIndex:13},{value:"See ",paraId:8,tocIndex:14},{value:"How to set locale for date-related components",paraId:9,tocIndex:14},{value:"See FAQ ",paraId:10,tocIndex:15},{value:"Date-related-components-locale-is-not-working?",paraId:11,tocIndex:15},{value:"onSelect",paraId:12,tocIndex:16},{value:" provide ",paraId:12,tocIndex:16},{value:"info.source",paraId:12,tocIndex:16},{value:" to help on this:",paraId:12,tocIndex:16},{value:"<Calendar\n  onSelect={(date, { source }) => {\n    if (source === 'date') {\n      console.log('Panel Select:', source);\n    }\n  }}\n/>\n",paraId:13,tocIndex:16}];}}]);