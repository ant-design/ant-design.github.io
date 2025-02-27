import * as React from 'react';
import { flushSync } from 'react-dom';
import useMergedState from '@rc-component/util/lib/hooks/useMergedState';
import classNames from 'classnames';
import type { UploadProps as RcUploadProps } from 'rc-upload';
import RcUpload from 'rc-upload';

import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import { useLocale } from '../locale';
import defaultLocale from '../locale/en_US';
import type {
  RcFile,
  ShowUploadListInterface,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from './interface';
import useStyle from './style';
import UploadList from './UploadList';
import { file2Obj, getFileItem, removeFileItem, updateFileList } from './utils';

export const LIST_IGNORE = `__LIST_IGNORE_${Date.now()}__`;

export type { UploadProps };

export interface UploadRef<T = any> {
  onBatchStart: RcUploadProps['onBatchStart'];
  onSuccess: (response: any, file: RcFile, xhr: any) => void;
  onProgress: (e: { percent: number }, file: RcFile) => void;
  onError: (error: Error, response: any, file: RcFile) => void;
  fileList: UploadFile<T>[];
  upload: RcUpload | null;
  /**
   * Get native element for wrapping upload
   * @since 5.17.0
   */
  nativeElement: HTMLSpanElement | null;
}

const InternalUpload: React.ForwardRefRenderFunction<UploadRef, UploadProps> = (props, ref) => {
  const {
    fileList,
    defaultFileList,
    onRemove,
    showUploadList = true,
    listType = 'text',
    onPreview,
    onDownload,
    onChange,
    onDrop,
    previewFile,
    disabled: customDisabled,
    locale: propLocale,
    iconRender,
    isImageUrl,
    progress,
    prefixCls: customizePrefixCls,
    className,
    type = 'select',
    children,
    style,
    itemRender,
    maxCount,
    data = {},
    multiple = false,
    hasControlInside = true,
    action = '',
    accept = '',
    supportServerRender = true,
    rootClassName,
    styles,
    classNames: uploadClassNames,
  } = props;

  // ===================== Disabled =====================
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;

  const [mergedFileList, setMergedFileList] = useMergedState(defaultFileList || [], {
    value: fileList,
    postState: (list) => list ?? [],
  });

  const [dragState, setDragState] = React.useState<string>('drop');

  const upload = React.useRef<RcUpload>(null);
  const wrapRef = React.useRef<HTMLSpanElement>(null);

  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Upload');

    warning(
      'fileList' in props || !('value' in props),
      'usage',
      '`value` is not a valid prop, do you mean `fileList`?',
    );
  }

  // Control mode will auto fill file uid if not provided
  React.useMemo(() => {
    const timestamp = Date.now();

    (fileList || []).forEach((file, index) => {
      if (!file.uid && !Object.isFrozen(file)) {
        file.uid = `__AUTO__${timestamp}_${index}__`;
      }
    });
  }, [fileList]);

  const onInternalChange = (
    file: UploadFile,
    changedFileList: UploadFile[],
    event?: { percent: number },
  ) => {
    let cloneList = [...changedFileList];

    let exceedMaxCount = false;

    // Cut to match count
    if (maxCount === 1) {
      cloneList = cloneList.slice(-1);
    } else if (maxCount) {
      exceedMaxCount = cloneList.length > maxCount;
      cloneList = cloneList.slice(0, maxCount);
    }

    // Prevent React18 auto batch since input[upload] trigger process at same time
    // which makes fileList closure problem
    flushSync(() => {
      setMergedFileList(cloneList);
    });

    const changeInfo: UploadChangeParam<UploadFile> = {
      file: file as UploadFile,
      fileList: cloneList,
    };

    if (event) {
      changeInfo.event = event;
    }

    if (
      !exceedMaxCount ||
      file.status === 'removed' ||
      // We should ignore event if current file is exceed `maxCount`
      cloneList.some((f) => f.uid === file.uid)
    ) {
      flushSync(() => {
        onChange?.(changeInfo);
      });
    }
  };

  const mergedBeforeUpload = async (file: RcFile, fileListArgs: RcFile[]) => {
    const { beforeUpload } = props;

    let parsedFile: File | Blob | string = file;
    if (beforeUpload) {
      const result = await beforeUpload(file, fileListArgs);

      if (result === false) {
        return false;
      }

      // Hack for LIST_IGNORE, we add additional info to remove from the list
      delete (file as any)[LIST_IGNORE];
      if ((result as any) === LIST_IGNORE) {
        Object.defineProperty(file, LIST_IGNORE, {
          value: true,
          configurable: true,
        });
        return false;
      }

      if (typeof result === 'object' && result) {
        parsedFile = result as File;
      }
    }

    return parsedFile as RcFile;
  };

  const onBatchStart: RcUploadProps['onBatchStart'] = (batchFileInfoList) => {
    // Skip file which marked as `LIST_IGNORE`, these file will not add to file list
    const filteredFileInfoList = batchFileInfoList.filter(
      (info) => !(info.file as any)[LIST_IGNORE],
    );

    // Nothing to do since no file need upload
    if (!filteredFileInfoList.length) {
      return;
    }

    const objectFileList = filteredFileInfoList.map((info) => file2Obj(info.file as RcFile));

    // Concat new files with prev files
    let newFileList = [...mergedFileList];

    objectFileList.forEach((fileObj) => {
      // Replace file if exist
      newFileList = updateFileList(fileObj, newFileList);
    });

    objectFileList.forEach((fileObj, index) => {
      // Repeat trigger `onChange` event for compatible
      let triggerFileObj: UploadFile = fileObj;

      if (!filteredFileInfoList[index].parsedFile) {
        // `beforeUpload` return false
        const { originFileObj } = fileObj;
        let clone: UploadFile;

        try {
          clone = new File([originFileObj], originFileObj.name, {
            type: originFileObj.type,
          }) as any as UploadFile;
        } catch {
          clone = new Blob([originFileObj], {
            type: originFileObj.type,
          }) as any as UploadFile;
          clone.name = originFileObj.name;
          clone.lastModifiedDate = new Date();
          clone.lastModified = new Date().getTime();
        }

        clone.uid = fileObj.uid;
        triggerFileObj = clone;
      } else {
        // Inject `uploading` status
        fileObj.status = 'uploading';
      }

      onInternalChange(triggerFileObj, newFileList);
    });
  };

  const onSuccess = (response: any, file: RcFile, xhr: any) => {
    try {
      if (typeof response === 'string') {
        // biome-ignore lint/style/noParameterAssign: we need to modify response
        response = JSON.parse(response);
      }
    } catch {
      /* do nothing */
    }

    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    const targetItem = file2Obj(file);
    targetItem.status = 'done';
    targetItem.percent = 100;
    targetItem.response = response;
    targetItem.xhr = xhr;

    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList);
  };

  const onProgress = (e: { percent: number }, file: RcFile) => {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    const targetItem = file2Obj(file);
    targetItem.status = 'uploading';
    targetItem.percent = e.percent;

    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList, e);
  };

  const onError = (error: Error, response: any, file: RcFile) => {
    // removed
    if (!getFileItem(file, mergedFileList)) {
      return;
    }

    const targetItem = file2Obj(file);
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';

    const nextFileList = updateFileList(targetItem, mergedFileList);

    onInternalChange(targetItem, nextFileList);
  };

  const handleRemove = (file: UploadFile) => {
    let currentFile: UploadFile;
    Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then((ret) => {
      // Prevent removing file
      if (ret === false) {
        return;
      }

      const removedFileList = removeFileItem(file, mergedFileList);

      if (removedFileList) {
        currentFile = { ...file, status: 'removed' };
        mergedFileList?.forEach((item) => {
          const matchKey = currentFile.uid !== undefined ? 'uid' : 'name';
          if (item[matchKey] === currentFile[matchKey] && !Object.isFrozen(item)) {
            item.status = 'removed';
          }
        });
        upload.current?.abort(currentFile as RcFile);

        onInternalChange(currentFile, removedFileList);
      }
    });
  };

  const onFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setDragState(e.type);

    if (e.type === 'drop') {
      onDrop?.(e);
    }
  };

  // Test needs
  React.useImperativeHandle(ref, () => ({
    onBatchStart,
    onSuccess,
    onProgress,
    onError,
    fileList: mergedFileList,
    upload: upload.current,
    nativeElement: wrapRef.current,
  }));

  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
  } = useComponentConfig('upload');

  const prefixCls = getPrefixCls('upload', customizePrefixCls);

  const rcUploadProps = {
    onBatchStart,
    onError,
    onProgress,
    onSuccess,
    ...props,
    data,
    multiple,
    action,
    accept,
    supportServerRender,
    prefixCls,
    disabled: mergedDisabled,
    beforeUpload: mergedBeforeUpload,
    onChange: undefined,
    hasControlInside,
  } as any;

  delete rcUploadProps.className;
  delete rcUploadProps.style;

  // Remove id to avoid open by label when trigger is hidden
  // !children: https://github.com/ant-design/ant-design/issues/14298
  // disabled: https://github.com/ant-design/ant-design/issues/16478
  //           https://github.com/ant-design/ant-design/issues/24197
  if (!children || mergedDisabled) {
    delete rcUploadProps.id;
  }

  const wrapperCls = `${prefixCls}-wrapper`;
  const [hashId, cssVarCls] = useStyle(prefixCls, wrapperCls);

  const [contextLocale] = useLocale('Upload', defaultLocale.Upload);

  const {
    showRemoveIcon,
    showPreviewIcon,
    showDownloadIcon,
    removeIcon,
    previewIcon,
    downloadIcon,
    extra,
  } = typeof showUploadList === 'boolean' ? ({} as ShowUploadListInterface) : showUploadList;

  // use showRemoveIcon if it is specified explicitly
  const realShowRemoveIcon =
    typeof showRemoveIcon === 'undefined' ? !mergedDisabled : showRemoveIcon;

  const renderUploadList = (button?: React.ReactNode, buttonVisible?: boolean) => {
    if (!showUploadList) {
      return button;
    }
    return (
      <UploadList
        classNames={{
          list: classNames(contextClassNames.list, uploadClassNames?.list),
          item: classNames(contextClassNames.item, uploadClassNames?.item),
        }}
        styles={{
          list: { ...contextStyles.list, ...styles?.list },
          item: { ...contextStyles.item, ...styles?.item },
        }}
        prefixCls={prefixCls}
        listType={listType}
        items={mergedFileList}
        previewFile={previewFile}
        onPreview={onPreview}
        onDownload={onDownload}
        onRemove={handleRemove}
        showRemoveIcon={realShowRemoveIcon}
        showPreviewIcon={showPreviewIcon}
        showDownloadIcon={showDownloadIcon}
        removeIcon={removeIcon}
        previewIcon={previewIcon}
        downloadIcon={downloadIcon}
        iconRender={iconRender}
        extra={extra}
        locale={{ ...contextLocale, ...propLocale }}
        isImageUrl={isImageUrl}
        progress={progress}
        appendAction={button}
        appendActionVisible={buttonVisible}
        itemRender={itemRender}
        disabled={mergedDisabled}
      />
    );
  };

  const mergedRootCls = classNames(
    wrapperCls,
    className,
    rootClassName,
    hashId,
    cssVarCls,
    contextClassName,
    contextClassNames.root,
    uploadClassNames?.root,
    {
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-picture-card-wrapper`]: listType === 'picture-card',
      [`${prefixCls}-picture-circle-wrapper`]: listType === 'picture-circle',
    },
  );
  const mergedRootStyle: React.CSSProperties = { ...contextStyles.root, ...styles?.root };

  const mergedStyle: React.CSSProperties = { ...contextStyle, ...style };

  // ======================== Render ========================

  if (type === 'drag') {
    const dragCls = classNames(hashId, prefixCls, `${prefixCls}-drag`, {
      [`${prefixCls}-drag-uploading`]: mergedFileList.some((file) => file.status === 'uploading'),
      [`${prefixCls}-drag-hover`]: dragState === 'dragover',
      [`${prefixCls}-disabled`]: mergedDisabled,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    });

    return (
      <span className={mergedRootCls} ref={wrapRef} style={mergedRootStyle}>
        <div
          className={dragCls}
          style={mergedStyle}
          onDrop={onFileDrop}
          onDragOver={onFileDrop}
          onDragLeave={onFileDrop}
        >
          <RcUpload {...rcUploadProps} ref={upload} className={`${prefixCls}-btn`}>
            <div className={`${prefixCls}-drag-container`}>{children}</div>
          </RcUpload>
        </div>
        {renderUploadList()}
      </span>
    );
  }

  const uploadBtnCls = classNames(prefixCls, `${prefixCls}-select`, {
    [`${prefixCls}-disabled`]: mergedDisabled,
    [`${prefixCls}-hidden`]: !children,
  });

  const uploadButton = (
    <div className={uploadBtnCls}>
      <RcUpload {...rcUploadProps} ref={upload} />
    </div>
  );

  if (listType === 'picture-card' || listType === 'picture-circle') {
    return (
      <span className={mergedRootCls} ref={wrapRef} style={mergedRootStyle}>
        {renderUploadList(uploadButton, !!children)}
      </span>
    );
  }

  return (
    <span className={mergedRootCls} ref={wrapRef} style={mergedRootStyle}>
      {uploadButton}
      {renderUploadList()}
    </span>
  );
};

const Upload = React.forwardRef<UploadRef, UploadProps>(InternalUpload);

if (process.env.NODE_ENV !== 'production') {
  Upload.displayName = 'Upload';
}

export default Upload;
