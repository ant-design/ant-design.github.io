import React, { type FC } from 'react';
import { DatePicker } from 'antd';

const { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;

const Demo: FC = () => <PureDatePicker picker="quarter" />;

export default Demo;
