import * as React from 'react';
import FileTwoTone from '@ant-design/icons/FileTwoTone';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import PaperClipOutlined from '@ant-design/icons/PaperClipOutlined';
import PictureTwoTone from '@ant-design/icons/PictureTwoTone';
import type { CSSMotionListProps } from '@rc-component/motion';
import CSSMotion, { CSSMotionList } from '@rc-component/motion';
import omit from '@rc-component/util/lib/omit';
import classNames from 'classnames';

import useForceUpdate from '../../_util/hooks/useForceUpdate';
import initCollapseMotion from '../../_util/motion';
import { cloneElement } from '../../_util/reactNode';
import type { ButtonProps } from '../../button';
import Button from '../../button';
import { ConfigContext } from '../../config-provider';
import type { UploadFile, UploadListProps } from '../interface';
import { isImageUrl, previewImage } from '../utils';
import ListItem from './ListItem';

interface UploadListRef {
  handlePreview: (file: UploadFile, e: React.SyntheticEvent<HTMLElement>) => void;
  handleDownload: (file: UploadFile) => void;
}

const InternalUploadList: React.ForwardRefRenderFunction<UploadListRef, UploadListProps> = (
  props,
  ref,
) => {
  const {
    listType = 'text',
    previewFile = previewImage,
    onPreview,
    onDownload,
    onRemove,
    locale,
    iconRender,
    isImageUrl: isImgUrl = isImageUrl,
    prefixCls: customizePrefixCls,
    items = [],
    showPreviewIcon = true,
    showRemoveIcon = true,
    showDownloadIcon = false,
    removeIcon,
    previewIcon,
    downloadIcon,
    extra,
    progress = { size: [-1, 2], showInfo: false },
    appendAction,
    appendActionVisible = true,
    itemRender,
    disabled,
    classNames: uploadListClassNames,
    styles,
  } = props;

  const forceUpdate = useForceUpdate();
  const [motionAppear, setMotionAppear] = React.useState(false);
  const isPictureCardOrCirle = ['picture-card', 'picture-circle'].includes(listType);

  // ============================= Effect =============================
  React.useEffect(() => {
    if (!listType.startsWith('picture')) {
      return;
    }
    (items || []).forEach((file) => {
      if (
        !(file.originFileObj instanceof File || (file.originFileObj as any) instanceof Blob) ||
        file.thumbUrl !== undefined
      ) {
        return;
      }
      file.thumbUrl = '';
      previewFile?.(file.originFileObj as File).then((previewDataUrl: string) => {
        // Need append '' to avoid dead loop
        file.thumbUrl = previewDataUrl || '';
        forceUpdate();
      });
    });
  }, [listType, items, previewFile]);

  React.useEffect(() => {
    setMotionAppear(true);
  }, []);

  // ============================= Events =============================
  const onInternalPreview = (file: UploadFile, e: React.SyntheticEvent<HTMLElement>) => {
    if (!onPreview) {
      return;
    }
    e?.preventDefault();
    return onPreview(file);
  };

  const onInternalDownload = (file: UploadFile) => {
    if (typeof onDownload === 'function') {
      onDownload(file);
    } else if (file.url) {
      window.open(file.url);
    }
  };

  const onInternalClose = (file: UploadFile) => {
    onRemove?.(file);
  };

  const internalIconRender = (file: UploadFile) => {
    if (iconRender) {
      return iconRender(file, listType);
    }
    const isLoading = file.status === 'uploading';
    if (listType.startsWith('picture')) {
      const loadingIcon = listType === 'picture' ? <LoadingOutlined /> : locale.uploading;
      const fileIcon = isImgUrl?.(file) ? <PictureTwoTone /> : <FileTwoTone />;
      return isLoading ? loadingIcon : fileIcon;
    }
    return isLoading ? <LoadingOutlined /> : <PaperClipOutlined />;
  };

  const actionIconRender = (
    customIcon: React.ReactNode,
    callback: () => void,
    prefixCls: string,
    title?: string,
    acceptUploadDisabled?: boolean,
  ) => {
    const btnProps: ButtonProps = {
      type: 'text',
      size: 'small',
      title,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        callback();
        if (React.isValidElement(customIcon)) {
          (
            customIcon as React.ReactElement<{
              onClick: React.MouseEventHandler<HTMLElement>;
            }>
          ).props.onClick?.(e);
        }
      },
      className: `${prefixCls}-list-item-action`,
    };
    if (acceptUploadDisabled) {
      btnProps.disabled = disabled;
    }
    return React.isValidElement(customIcon) ? (
      <Button
        {...btnProps}
        icon={cloneElement(customIcon, {
          ...(customIcon as React.ReactElement<object>).props,
          onClick: () => {},
        })}
      />
    ) : (
      <Button {...btnProps}>
        <span>{customIcon}</span>
      </Button>
    );
  };

  // ============================== Ref ===============================
  // Test needs
  React.useImperativeHandle(ref, () => ({
    handlePreview: onInternalPreview,
    handleDownload: onInternalDownload,
  }));

  const { getPrefixCls } = React.useContext(ConfigContext);

  // ============================= Render =============================
  const prefixCls = getPrefixCls('upload', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();

  const listClassNames = classNames(
    `${prefixCls}-list`,
    `${prefixCls}-list-${listType}`,
    uploadListClassNames?.list,
  );

  const listItemMotion = React.useMemo(
    () => omit(initCollapseMotion(rootPrefixCls), ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd']),
    [rootPrefixCls],
  );
  const motionConfig: Omit<CSSMotionListProps, 'onVisibleChanged'> = {
    ...(isPictureCardOrCirle ? {} : listItemMotion),
    motionDeadline: 2000,
    motionName: `${prefixCls}-${isPictureCardOrCirle ? 'animate-inline' : 'animate'}`,
    keys: [...items.map((file) => ({ key: file.uid, file }))],
    motionAppear,
  };

  return (
    <div className={listClassNames} style={styles?.list}>
      <CSSMotionList {...motionConfig} component={false}>
        {({ key, file, className: motionClassName, style: motionStyle }) => (
          <ListItem
            key={key}
            locale={locale}
            prefixCls={prefixCls}
            className={motionClassName}
            style={motionStyle}
            classNames={uploadListClassNames}
            styles={styles}
            file={file}
            items={items}
            progress={progress}
            listType={listType}
            isImgUrl={isImgUrl}
            showPreviewIcon={showPreviewIcon}
            showRemoveIcon={showRemoveIcon}
            showDownloadIcon={showDownloadIcon}
            removeIcon={removeIcon}
            previewIcon={previewIcon}
            downloadIcon={downloadIcon}
            extra={extra}
            iconRender={internalIconRender}
            actionIconRender={actionIconRender}
            itemRender={itemRender}
            onPreview={onInternalPreview}
            onDownload={onInternalDownload}
            onClose={onInternalClose}
          />
        )}
      </CSSMotionList>

      {/* Append action */}
      {appendAction && (
        <CSSMotion {...motionConfig} visible={appendActionVisible} forceRender>
          {({ className: motionClassName, style: motionStyle }) =>
            cloneElement(appendAction, (oriProps) => ({
              className: classNames(oriProps.className, motionClassName),
              style: {
                ...motionStyle,
                // prevent the element has hover css pseudo-class that may cause animation to end prematurely.
                pointerEvents: motionClassName ? 'none' : undefined,
                ...oriProps.style,
              },
            }))
          }
        </CSSMotion>
      )}
    </div>
  );
};

const UploadList = React.forwardRef<UploadListRef, UploadListProps>(InternalUploadList);

if (process.env.NODE_ENV !== 'production') {
  UploadList.displayName = 'UploadList';
}

export default UploadList;
