import type * as React from 'react';

export type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface ConfigOptions {
  top?: string | number;
  duration?: number;
  prefixCls?: string;
  getContainer?: () => HTMLElement;
  transitionName?: string;
  maxCount?: number;
  rtl?: boolean;
}
export type SemanticName = 'root' | 'icon' | 'content';

export interface ArgsProps {
  /**
   * @descCN 消息通知的内容，接收组件或者字符串
   * @descEN The content of the message notification, receiving component or string
   */
  content: React.ReactNode;
  /**
   * @descCN 消息通知持续显示的时间
   * @descEN How long the message notification remains displayed
   */
  duration?: number;
  /**
   * @descCN 消息通知的类型，可以是 'info'、'success'、'error'、'warning' 或 'loading'
   * @descEN The type of message notification, which can be 'info', 'success', 'error', 'warning' or 'loading'
   */
  type?: NoticeType;
  /**
   * @descCN 消息通知关闭时进行调用的回调函数
   * @descEN The callback function called when the message notification is closed
   */
  onClose?: () => void;
  icon?: React.ReactNode;
  key?: string | number;
  style?: React.CSSProperties;
  className?: string;
  classNames?: Partial<Record<SemanticName, string>>;
  icons?: {
    info?: React.ReactNode;
    success?: React.ReactNode;
    error?: React.ReactNode;
    warning?: React.ReactNode;
    loading?: React.ReactNode;
  };
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
  /**
   * @descCN 消息通知点击时的回调函数
   * @descEN Callback function when message notification is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export type JointContent = React.ReactNode | ArgsProps;

export interface MessageType extends PromiseLike<boolean> {
  (): void;
}

export type TypeOpen = (
  content: JointContent,
  /**
   * @descCN 消息通知持续显示的时间，也可以直接使用 onClose。
   * @descEN You can also use onClose directly to determine how long the message notification continues to be displayed.
   */
  duration?: number | VoidFunction,
  /**
   * @descCN 消息通知关闭时进行调用的回调函数
   * @descEN The callback function called when the message notification is closed
   */
  onClose?: VoidFunction,
) => MessageType;

export interface MessageInstance {
  info: TypeOpen;
  success: TypeOpen;
  error: TypeOpen;
  warning: TypeOpen;
  loading: TypeOpen;
  open(args: ArgsProps): MessageType;
  destroy(key?: React.Key): void;
}
