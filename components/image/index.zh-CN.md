---
category: Components
group: 数据展示
title: Image
subtitle: 图片
description: 可预览的图片。
cols: 2
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FbOCS6aFMeUAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*LVQ3R5JjjJEAAAAAAAAAAAAADrJ8AQ/original
---

## 何时使用

- 需要展示图片时使用。
- 加载显示大图或加载失败时容错处理。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本用法</code>
<code src="./demo/fallback.tsx">容错处理</code>
<code src="./demo/placeholder.tsx">渐进加载</code>
<code src="./demo/preview-group.tsx">多张图片预览</code>
<code src="./demo/preview-group-visible.tsx">相册模式</code>
<code src="./demo/previewSrc.tsx">自定义预览图片</code>
<code src="./demo/controlled-preview.tsx">受控的预览</code>
<code src="./demo/toolbarRender.tsx">自定义工具栏</code>
<code src="./demo/imageRender.tsx">自定义预览内容</code>
<code src="./demo/preview-mask.tsx" debug>自定义预览文本</code>
<code src="./demo/nested.tsx">嵌套</code>
<code src="./demo/preview-group-top-progress.tsx" debug>多图预览时顶部进度自定义</code>
<code src="./demo/component-token.tsx" debug>自定义组件 Token</code>
<code src="./demo/preview-imgInfo.tsx" debug>在渲染函数中获取图片信息</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

### Image

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像描述 | string | - | 4.6.0 |
| fallback | 加载失败容错地址 | string | - | 4.6.0 |
| height | 图像高度 | string \| number | - | 4.6.0 |
| placeholder | 加载占位，为 `true` 时使用默认占位 | ReactNode | - | 4.6.0 |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [PreviewType](#previewtype) | true | 4.6.0 [PreviewType](#previewyype):4.7.0 |
| src | 图片地址 | string | - | 4.6.0 |
| width | 图像宽度 | string \| number | - | 4.6.0 |
| onError | 加载错误回调 | (event: Event) => void | - | 4.12.0 |

其他属性见 [&lt;img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)

### PreviewType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | - | - |
| src | 自定义预览 src | string | - | 4.10.0 |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - | 4.8.0 |
| movable | 是否可移动 | boolean | true | 5.8.0 |
| mask | 缩略图遮罩 | ReactNode | - | 4.9.0 |
| ~~maskClassName~~ | 缩略图遮罩类名, 请使用 `classNames: { mask: '' }` 替换 | string | - | 4.11.0 |
| ~~rootClassName~~ | 预览图的根 DOM 类名, 请使用 `classNames: { root: '' }` 替换 | string | - | 5.4.0 |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 | - |
| minScale | 最小缩放倍数 | number | 1 | 5.7.0 |
| maxScale | 最大放大倍数 | number | 50 | 5.7.0 |
| closeIcon | 自定义关闭 Icon | React.ReactNode | - | 5.7.0 |
| forceRender | 强制渲染预览图 | boolean | - | - |
| toolbarRender | 自定义工具栏 | (originalNode: React.ReactElement, info: Omit<[ToolbarRenderInfoType](#toolbarrenderinfotype), 'current' \| 'total'>) => React.ReactNode | - | 5.7.0, `info.image`: 5.18.0 |
| imageRender | 自定义预览内容 | (originalNode: React.ReactElement, info: { transform: [TransformType](#transformtype), image: [ImgInfo](#imginfo) }) => React.ReactNode | - | 5.7.0, image: 5.18.0 |
| destroyOnClose | 关闭预览时销毁子元素 | boolean | false |  |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - | 5.7.0 |
| onVisibleChange | 当 `visible` 发生改变时的回调 | (visible: boolean, prevVisible: boolean) => void | - | - |

## PreviewGroup

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [PreviewGroupType](#previewgrouptype) | true | 4.6.0 [PreviewGroupType](#previewgrouptype):4.7.0 |
| items | 预览数组 | string[] \| { src: string, crossOrigin: string, ... }[] | - | 5.7.0 |
| fallback | 加载失败容错地址 | string | - | 5.7.0 |

### PreviewGroupType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | - | - |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - | 4.8.0 |
| movable | 是否可移动 | boolean | true | 5.8.0 |
| current | 当前预览图的 index | number | - | 4.12.0 |
| mask | 缩略图遮罩 | ReactNode | - | 4.9.0 |
| maskClassName | 缩略图遮罩类名 | string | - | 4.11.0 |
| rootClassName | 预览图的根 DOM 类名 | string | - | 5.4.0 |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 | - |
| minScale | 最小缩放倍数 | number | 1 | 5.7.0 |
| maxScale | 最大放大倍数 | number | 50 | 5.7.0 |
| closeIcon | 自定义关闭 Icon | React.ReactNode | - | 5.7.0 |
| forceRender | 强制渲染预览图 | boolean | - | - |
| countRender | 自定义预览计数内容 | (current: number, total: number) => React.ReactNode | - | 4.20.0 |
| toolbarRender | 自定义工具栏 | (originalNode: React.ReactElement, info: [ToolbarRenderInfoType](#toolbarrenderinfotype)) => React.ReactNode | - | 5.7.0, `info.image`: 5.18.0 |
| imageRender | 自定义预览内容 | (originalNode: React.ReactElement, info: { transform: [TransformType](#transformtype), image: [ImgInfo](#imginfo), current: number }) => React.ReactNode | - | 5.7.0, image: 5.18.0 |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - | 5.7.0 |
| onChange | 切换预览图的回调 | (current: number, prevCurrent: number) => void | - | 5.3.0 |
| onVisibleChange | 当 `visible` 发生改变时的回调 | (visible: boolean, prevVisible: boolean, current: number) => void | - | current 参数 5.3.0 |

## Interface

### TransformType

```typescript
{
  x: number;
  y: number;
  rotate: number;
  scale: number;
  flipX: boolean;
  flipY: boolean;
}
```

### TransformAction

```typescript
type TransformAction =
  | 'flipY'
  | 'flipX'
  | 'rotateLeft'
  | 'rotateRight'
  | 'zoomIn'
  | 'zoomOut'
  | 'close'
  | 'prev'
  | 'next'
  | 'wheel'
  | 'doubleClick'
  | 'move'
  | 'dragRebound'
  | 'reset';
```

### ToolbarRenderInfoType

```typescript
{
  icons: {
    flipYIcon: React.ReactNode;
    flipXIcon: React.ReactNode;
    rotateLeftIcon: React.ReactNode;
    rotateRightIcon: React.ReactNode;
    zoomOutIcon: React.ReactNode;
    zoomInIcon: React.ReactNode;
  };
  actions: {
    onActive?: (index: number) => void; // 5.21.0 之后支持
    onFlipY: () => void;
    onFlipX: () => void;
    onRotateLeft: () => void;
    onRotateRight: () => void;
    onZoomOut: () => void;
    onZoomIn: () => void;
    onReset: () => void; // 5.17.3 之后支持
    onClose: () => void;
  };
  transform: TransformType,
  current: number;
  total: number;
  image: ImgInfo
}
```

### ImgInfo

```typescript
{
  url: string;
  alt: string;
  width: string | number;
  height: string | number;
}
```

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## 主题变量（Design Token）

<ComponentTokenTable component="Image"></ComponentTokenTable>
