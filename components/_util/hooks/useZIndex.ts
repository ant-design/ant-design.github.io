import React from 'react';
import { zIndexContext } from '../zindexContext';
import useToken from '../../theme/useToken';

export type ZIndexContainer = 'Modal' | 'Drawer' | 'Popover' | 'Popconfirm' | 'Tooltip' | 'Tour';

export type ZIndexConsumer =
  | 'Select'
  | 'Dropdown'
  | 'Cascader'
  | 'TreeSelect'
  | 'AutoComplete'
  | 'ColorPicker'
  | 'DatePicker'
  | 'TimePicker'
  | 'Menu';

export const baseZIndexOffset: Record<ZIndexConsumer | ZIndexContainer, number> = {
  Modal: 0,
  Drawer: 0,
  Popover: 0,
  Popconfirm: 0,
  Tooltip: 0,
  Tour: 0,
  Select: 0,
  Dropdown: 0,
  Cascader: 0,
  TreeSelect: 0,
  AutoComplete: 0,
  ColorPicker: 0,
  DatePicker: 0,
  TimePicker: 0,
  Menu: 0,
};

export function useZIndex(consumer?: ZIndexConsumer) {
  const [, token] = useToken();
  const { zIndex: parentZIndex } = React.useContext(zIndexContext);
  let baseZIndex = parentZIndex + token.zIndexPopupBase;
  if (consumer) {
    baseZIndex += baseZIndexOffset[consumer];
  }
  return baseZIndex;
}
