import React, { useEffect, useRef } from 'react';
import { produce } from 'immer';
import cloneDeep from 'lodash/cloneDeep';
import type { UploadRequestOption } from 'rc-upload/lib/interface';

import type { RcFile, UploadFile, UploadProps } from '..';
import Upload from '..';
import { resetWarned } from '../../_util/warning';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { act, fireEvent, render, waitFakeTimer } from '../../../tests/utils';
import Form from '../../form';
import { getFileItem, isImageUrl, removeFileItem } from '../utils';
import { setup, teardown } from './mock';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

describe('Upload', () => {
  mountTest(Upload);
  rtlTest(Upload);

  beforeAll(() => {
    jest.useFakeTimers();
  });
  beforeEach(() => setup());
  afterAll(() => {
    jest.useRealTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
    return teardown();
  });

  // Mock for rc-util raf
  window.requestAnimationFrame = (callback) => window.setTimeout(callback, 16);

  window.cancelAnimationFrame = (id) => window.clearTimeout(id);

  // https://github.com/react-component/upload/issues/36
  it('should get refs inside Upload in componentDidMount', () => {
    let ref: React.RefObject<HTMLInputElement | null>;
    const App: React.FC = () => {
      const inputRef = useRef<HTMLInputElement>(null);
      useEffect(() => {
        ref = inputRef;
      }, []);
      return (
        <Upload supportServerRender={false}>
          <input ref={inputRef} />
        </Upload>
      );
    };
    render(<App />);
    expect(ref!).toBeDefined();
  });

  it('return promise in beforeUpload', async () => {
    const data = jest.fn();
    const done = jest.fn();
    const props: UploadProps = {
      action: 'http://upload.com',
      beforeUpload: () =>
        new Promise((resolve) => {
          setTimeout(() => resolve('success'), 100);
        }),
      data,
      onChange({ file }) {
        if (file.status !== 'uploading') {
          expect(data).toHaveBeenCalled();
          done();
        }
      },
    };

    const { container: wrapper } = render(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );
    fireEvent.change(wrapper.querySelector('input')!, {
      target: { files: [{ file: 'foo.png' }] },
    });
    await waitFakeTimer();
    expect(done).toHaveBeenCalled();
  });

  it('beforeUpload can be falsy', async () => {
    const done = jest.fn();
    const props: UploadProps = {
      action: 'http://upload.com',
      beforeUpload: () => false,
      onChange: ({ file }) => {
        if (file.status !== 'uploading') {
          done();
        }
      },
    };

    const { container: wrapper } = render(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );

    fireEvent.change(wrapper.querySelector('input')!, {
      target: { files: [{ file: 'foo.png' }] },
    });
    await waitFakeTimer();
    expect(done).toHaveBeenCalled();
  });

  it('upload promise return file in beforeUpload', async () => {
    const done = jest.fn();
    const data = jest.fn();
    const props: UploadProps = {
      action: 'http://upload.com',
      beforeUpload: (file) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = file;
            (result as any).name = 'test.png';
            resolve(result);
          }, 100);
        }),
      data,
      onChange: ({ file }) => {
        if (file.status !== 'uploading') {
          expect(data).toHaveBeenCalled();
          expect(file.name).toEqual('test.png');
          done();
        }
      },
    };

    const { container: wrapper } = render(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );

    fireEvent.change(wrapper.querySelector('input')!, {
      target: { files: [{ file: 'foo.png' }] },
    });
    await waitFakeTimer();

    expect(done).toHaveBeenCalled();
  });

  it('should not stop upload when return value of beforeUpload is false', (done) => {
    const fileList = [
      {
        uid: 'bar',
        name: 'bar.png',
      },
    ];
    const mockFile = new File(['foo'], 'foo.png', {
      type: 'image/png',
    });
    const data = jest.fn();
    const props: UploadProps = {
      action: 'http://upload.com',
      fileList,
      beforeUpload: () => false,
      data,
      onChange: ({ file, fileList: updatedFileList }) => {
        expect(file instanceof File).toBe(true);
        expect(updatedFileList.map((f) => f.name)).toEqual(['bar.png', 'foo.png']);
        expect(data).not.toHaveBeenCalled();
        done();
      },
    };

    const { container: wrapper } = render(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );

    fireEvent.change(wrapper.querySelector('input')!, {
      target: { files: [mockFile] },
    });
  });

  it('should not stop upload when return value of beforeUpload is not false', (done) => {
    const data = jest.fn();
    const props = {
      action: 'http://upload.com',
      beforeUpload() {},
      data,
      onChange: () => {
        expect(data).toHaveBeenCalled();
        done();
      },
    };

    const { container: wrapper } = render(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );

    fireEvent.change(wrapper.querySelector('input')!, {
      target: {
        files: [{ file: 'foo.png' }],
      },
    });
  });

  // https://github.com/ant-design/ant-design/issues/14779
  it('should contain input file control if upload button is hidden', () => {
    const { container, rerender } = render(
      <Upload action="http://upload.com">
        <button type="button">upload</button>
      </Upload>,
    );

    expect(container.querySelectorAll('input[type="file"]')).toHaveLength(1);

    rerender(<Upload action="http://upload.com" />);
    expect(container.querySelectorAll('input[type="file"]')).toHaveLength(1);
  });

  // https://github.com/ant-design/ant-design/issues/14298
  it('should not have id if upload children is null, avoid being triggered by label', () => {
    const Demo: React.FC<{ children?: UploadProps['children'] }> = ({ children }) => (
      <Form>
        <Form.Item name="upload" label="Upload" valuePropName="fileList">
          <Upload>{children}</Upload>
        </Form.Item>
      </Form>
    );

    const { container, rerender } = render(
      <Demo>
        <div>upload</div>
      </Demo>,
    );

    expect(container.querySelector('input#upload')).toBeTruthy();
    rerender(<Demo />);
    expect(container.querySelector('input#upload')).toBeFalsy();
  });

  // https://github.com/ant-design/ant-design/issues/16478
  it('should not have id if Upload is disabled, avoid being triggered by label', () => {
    const Demo: React.FC<{ disabled?: UploadProps['disabled'] }> = ({ disabled }) => (
      <Form>
        <Form.Item name="upload" label="Upload" valuePropName="fileList">
          <Upload disabled={disabled}>
            <div>upload</div>
          </Upload>
        </Form.Item>
      </Form>
    );

    const { container: wrapper, rerender } = render(<Demo />);
    expect(wrapper.querySelectorAll('input#upload').length).toBe(1);
    rerender(<Demo disabled />);
    expect(wrapper.querySelectorAll('input#upload').length).toBe(0);
  });

  // https://github.com/ant-design/ant-design/issues/24197
  it('should not have id if upload.Dragger is disabled, avoid being triggered by label', () => {
    const Demo: React.FC<{ disabled?: UploadProps['disabled'] }> = ({ disabled }) => (
      <Form>
        <Form.Item name="upload" label="Upload" valuePropName="fileList">
          <Upload.Dragger disabled={disabled}>
            <div>upload</div>
          </Upload.Dragger>
        </Form.Item>
      </Form>
    );

    const { container: wrapper, rerender } = render(<Demo />);
    expect(wrapper.querySelectorAll('input#upload').length).toBe(1);
    rerender(<Demo disabled />);
    expect(wrapper.querySelectorAll('input#upload').length).toBe(0);
  });

  it('should be controlled by fileList', async () => {
    const fileList = [
      {
        uid: '-1',
        name: 'foo.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      },
    ];
    const ref = React.createRef<any>();
    const { rerender } = render(<Upload ref={ref} />);
    expect(ref.current.fileList).toEqual([]);
    rerender(<Upload ref={ref} fileList={fileList as UploadProps['fileList']} />);
    await waitFakeTimer();
    expect(ref.current.fileList).toEqual(fileList);
  });

  it('should be able to get uid at first', () => {
    const fileList = [
      {
        name: 'foo.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      },
    ];
    render(<Upload fileList={fileList as UploadProps['fileList']} />);
    (fileList as UploadProps['fileList'])?.forEach((file) => {
      expect(file.uid).toBeDefined();
    });
  });

  describe('util', () => {
    it('should be able to get fileItem', () => {
      const file = { uid: '-1', name: 'item.jpg' } as RcFile;
      const fileList = [
        {
          uid: '-1',
          name: 'item.jpg',
        },
      ];
      const targetItem = getFileItem(file, fileList);
      expect(targetItem).toBe(fileList[0]);
    });

    it('should be able to remove fileItem', () => {
      const file = { uid: '-1', name: 'item.jpg' };
      const fileList = [
        {
          uid: '-1',
          name: 'item.jpg',
        },
        {
          uid: '-2',
          name: 'item2.jpg',
        },
      ];
      const targetItem = removeFileItem(file, fileList);
      expect(targetItem).toEqual(fileList.slice(1));
    });

    it('remove fileItem and fileList with immutable data', () => {
      const file = { uid: '-3', name: 'item3.jpg' };
      const fileList = produce(
        [
          { uid: '-1', name: 'item.jpg' },
          { uid: '-2', name: 'item2.jpg' },
        ],
        (draftState) => {
          draftState.push({
            uid: '-3',
            name: 'item3.jpg',
          });
        },
      );
      const targetItem = removeFileItem(file, fileList);
      expect(targetItem).toEqual(fileList.slice(0, 2));
    });

    it('should not be able to remove fileItem', () => {
      const file = { uid: '-3', name: 'item.jpg' };
      const fileList = [
        {
          uid: '-1',
          name: 'item.jpg',
        },
        {
          uid: '-2',
          name: 'item2.jpg',
        },
      ];
      const targetItem = removeFileItem(file, fileList);
      expect(targetItem).toBe(null);
    });

    it('isImageUrl should work correctly when file.url is null', () => {
      const file = { url: null } as unknown as UploadFile;
      expect(isImageUrl(file)).toBe(true);
    });
  });

  it('should support linkProps as object', () => {
    const fileList = [
      {
        uid: '-1',
        name: 'foo.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
        linkProps: {
          download: 'image',
          rel: 'noopener',
        },
      },
    ];
    const { container: wrapper } = render(
      <Upload fileList={fileList as UploadProps['fileList']} />,
    );
    const linkNode = wrapper.querySelector('a.ant-upload-list-item-name');
    expect(linkNode?.getAttribute('download')).toBe('image');
    expect(linkNode?.getAttribute('rel')).toBe('noopener');
  });

  it('should support linkProps as json stringify', () => {
    const linkPropsString = JSON.stringify({
      download: 'image',
      rel: 'noopener',
    });
    const fileList = [
      {
        uid: '-1',
        name: 'foo.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
        linkProps: linkPropsString,
      },
    ];
    const { container: wrapper } = render(
      <Upload fileList={fileList as UploadProps['fileList']} />,
    );
    const linkNode = wrapper.querySelector('a.ant-upload-list-item-name');
    expect(linkNode?.getAttribute('download')).toBe('image');
    expect(linkNode?.getAttribute('rel')).toBe('noopener');
  });

  it('should stop remove when return value of onRemove is false', async () => {
    const mockRemove = jest.fn(() => false);
    const props: UploadProps = {
      onRemove: mockRemove,
      fileList: [
        {
          uid: '-1',
          name: 'foo.png',
          status: 'done',
          url: 'http://www.baidu.com/xxx.png',
        },
      ],
    };

    const { container: wrapper } = render(<Upload {...props} />);

    fireEvent.click(wrapper.querySelector('div.ant-upload-list-item .anticon-delete')!);

    await waitFakeTimer();

    expect(mockRemove).toHaveBeenCalled();
    expect(props.fileList).toHaveLength(1);
    expect(props.fileList?.[0]?.status).toBe('done');
  });

  // https://github.com/ant-design/ant-design/issues/18902
  it('should not abort uploading until return value of onRemove is resolved as true', async () => {
    const file = {
      uid: '-1',
      name: 'foo.png',
      status: 'uploading',
      url: 'http://www.baidu.com/xxx.png',
    };

    let removePromise: (value: boolean | Promise<undefined | boolean>) => void;

    const onRemove: UploadProps['onRemove'] = () =>
      new Promise((resolve) => {
        expect(file.status).toBe('uploading');
        removePromise = resolve;
      });
    const onChange = jest.fn();

    const { container } = render(
      <Upload
        fileList={[file] as UploadProps['fileList']}
        onChange={onChange}
        onRemove={onRemove}
      />,
    );
    fireEvent.click(container.querySelector('div.ant-upload-list-item .anticon-delete')!);

    // Delay return true for remove
    await waitFakeTimer();
    await act(async () => {
      removePromise(true);
    });

    expect(onChange).toHaveBeenCalled();
    expect(file.status).toBe('removed');
  });

  it('should not stop download when return use onDownload', async () => {
    const mockRemove = jest.fn(() => false);
    const props: UploadProps = {
      onRemove: mockRemove,
      showUploadList: {
        showDownloadIcon: true,
      },
      fileList: [
        {
          uid: '-1',
          name: 'foo.png',
          status: 'done',
          url: 'http://www.baidu.com/xxx.png',
        },
      ],
    };

    const { container: wrapper } = render(<Upload {...props} onDownload={() => {}} />);

    fireEvent.click(wrapper.querySelector('div.ant-upload-list-item .anticon-download')!);

    await waitFakeTimer();
    expect(props.fileList).toHaveLength(1);
    expect(props.fileList?.[0]?.status).toBe('done');
  });

  // https://github.com/ant-design/ant-design/issues/14439
  it('should allow call abort function through upload instance', () => {
    const ref = React.createRef<any>();
    render(
      <Upload ref={ref}>
        <button type="button">upload</button>
      </Upload>,
    );
    expect(typeof ref.current?.upload.abort).toBe('function');
  });

  it('correct dragCls when type is drag', () => {
    const fileList = [{ status: 'uploading', uid: 'file' }];
    const { container: wrapper } = render(
      <Upload type="drag" fileList={fileList as UploadProps['fileList']}>
        <button type="button">upload</button>
      </Upload>,
    );
    expect(wrapper.querySelectorAll('.ant-upload-drag-uploading').length).toBe(1);
  });

  it('return when targetItem is null', () => {
    const fileList = [{ uid: 'file' }];
    const ref = React.createRef<any>();
    render(
      <Upload ref={ref} type="drag" fileList={fileList as UploadProps['fileList']}>
        <button type="button">upload</button>
      </Upload>,
    );
    expect(ref.current?.onSuccess('', { uid: 'fileItem' })).toBe(undefined);
    expect(ref.current?.onProgress('', { uid: 'fileItem' })).toBe(undefined);
    expect(ref.current?.onError('', '', { uid: 'fileItem' })).toBe(undefined);
  });

  it('should replace file when targetItem already exists', () => {
    const fileList = [{ uid: 'file', name: 'file' }];
    const ref = React.createRef<any>();
    const { unmount } = render(
      <Upload ref={ref} defaultFileList={fileList}>
        <button type="button">upload</button>
      </Upload>,
    );

    const newFile = {
      uid: 'file',
      name: 'file1',
    };

    act(() => {
      ref.current?.onBatchStart([
        {
          file: newFile,
          parsedFile: newFile,
        },
      ]);
    });

    expect(ref.current.fileList.length).toBe(1);
    expect(ref.current.fileList[0].originFileObj).toEqual({
      name: 'file1',
      uid: 'file',
    });

    unmount();
  });

  it('warning if set `value`', () => {
    resetWarned();
    const value = { value: [] } as any;
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Upload {...value} />);
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Upload] `value` is not a valid prop, do you mean `fileList`?',
    );
    errorSpy.mockRestore();
  });

  it('should be treated as file but not an image', () => {
    const file = {
      status: 'done',
      uid: '-1',
      type: 'video/mp4',
      url: 'https://zos.alipayobjects.com/rmsportal/IQKRngzUuFzJzGzRJXUs.png',
    };
    const { container: wrapper } = render(
      <Upload listType="picture-card" fileList={[file] as UploadProps['fileList']} />,
    );
    expect(wrapper.querySelectorAll('img').length).toBe(0);
  });

  // https://github.com/ant-design/ant-design/issues/25077
  it('should support events', () => {
    const onClick = jest.fn();
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
    const props = { onClick, onMouseEnter, onMouseLeave };
    const { container: wrapper } = render(
      <Upload {...props}>
        <button type="button">upload</button>
      </Upload>,
    );
    fireEvent.click(wrapper.querySelectorAll('.ant-upload')[1]);
    expect(onClick).toHaveBeenCalled();
    fireEvent.mouseEnter(wrapper.querySelectorAll('.ant-upload')[1]);
    expect(onMouseEnter).toHaveBeenCalled();
    fireEvent.mouseLeave(wrapper.querySelectorAll('.ant-upload')[1]);
    expect(onMouseLeave).toHaveBeenCalled();
  });

  // https://github.com/ant-design/ant-design/issues/26427
  it('should sync file list with control mode', async () => {
    const done = jest.fn();
    let callTimes = 0;

    const customRequest = jest.fn(async (options) => {
      // stop here to make sure new fileList has been set and passed to Upload

      await new Promise((resolve) => setTimeout(resolve, 0));
      options.onProgress({ percent: 0 });
      const url = Promise.resolve('https://ant.design');
      options.onProgress({ percent: 100 });
      options.onSuccess({}, { ...options.file, url });
    });

    const Demo: React.FC = () => {
      const [fileList, setFileList] = React.useState<UploadFile[]>([]);

      const onChange: UploadProps['onChange'] = async (e) => {
        const newFileList = Array.isArray(e) ? e : e.fileList;
        setFileList(newFileList);
        const file = newFileList[0];

        callTimes += 1;

        switch (callTimes) {
          case 1:
          case 2:
            expect(file).toEqual(expect.objectContaining({ status: 'uploading', percent: 0 }));
            break;

          case 3:
            expect(file).toEqual(expect.objectContaining({ status: 'uploading', percent: 100 }));
            break;

          case 4:
            expect(file).toEqual(expect.objectContaining({ status: 'done', percent: 100 }));
            break;

          default:
          // Do nothing
        }

        if (callTimes >= 4) {
          done();
        }
      };

      return (
        <Upload customRequest={customRequest} onChange={onChange} fileList={fileList}>
          <button type="button">Upload</button>
        </Upload>
      );
    };

    const { container: wrapper } = render(<Demo />);

    fireEvent.change(wrapper.querySelector('input')!, {
      target: { files: [{ file: 'foo.png' }] },
    });

    await waitFakeTimer();

    expect(done).toHaveBeenCalled();
  });

  describe('maxCount', () => {
    it('replace when only 1', async () => {
      const onChange = jest.fn();
      const fileList = [
        {
          uid: 'bar',
          name: 'bar.png',
        },
      ];

      const props = {
        action: 'http://upload.com',
        fileList,
        onChange,
        maxCount: 1,
      };

      const { container: wrapper } = render(
        <Upload {...props}>
          <button type="button">upload</button>
        </Upload>,
      );

      fireEvent.change(wrapper.querySelector('input')!, {
        target: {
          files: [new File(['foo'], 'foo.png', { type: 'image/png' })],
        },
      });

      await waitFakeTimer();

      expect(onChange.mock.calls[0][0].fileList).toHaveLength(1);
      expect(onChange.mock.calls[0][0].fileList[0]).toEqual(
        expect.objectContaining({
          name: 'foo.png',
        }),
      );
    });

    it('maxCount > 1', async () => {
      const onChange = jest.fn();
      const fileList = [
        {
          uid: 'bar',
          name: 'bar.png',
        },
      ];

      const props = {
        action: 'http://upload.com',
        fileList,
        onChange,
        maxCount: 2,
      };

      const { container: wrapper } = render(
        <Upload {...props}>
          <button type="button">upload</button>
        </Upload>,
      );

      fireEvent.change(wrapper.querySelector('input')!, {
        target: {
          files: [
            new File(['foo'], 'foo.png', {
              type: 'image/png',
            }),
            new File(['invisible'], 'invisible.png', { type: 'image/png' }),
          ],
        },
      });

      await waitFakeTimer();

      expect(onChange.mock.calls[0][0].fileList).toHaveLength(2);
      expect(onChange.mock.calls[0][0].fileList).toEqual([
        expect.objectContaining({
          name: 'bar.png',
        }),
        expect.objectContaining({
          name: 'foo.png',
        }),
      ]);

      // Only trigger for file in `maxCount`
      onChange.mock.calls.forEach((args) => {
        expect(args[0].file.name).toBe('foo.png');
      });
    });

    // https://github.com/ant-design/ant-design/issues/43190
    it('should trigger onChange when remove', async () => {
      const onChange = jest.fn();

      const { container } = render(
        <Upload
          onChange={onChange}
          maxCount={2}
          defaultFileList={[
            {
              uid: 'bamboo',
              name: 'bamboo.png',
            },
            {
              uid: 'little',
              name: 'little.png',
            },
          ]}
          showUploadList
        >
          <button type="button">upload</button>
        </Upload>,
      );

      // Click delete
      fireEvent.click(container.querySelector('.ant-upload-list-item-action')!);

      await waitFakeTimer();

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          // Have 1 file
          fileList: [expect.anything()],
        }),
      );
    });

    it('should trigger onChange when defaultFileList.length is longer than maxCount ', async () => {
      const onChange = jest.fn();

      const { container } = render(
        <Upload
          onChange={onChange}
          maxCount={3}
          defaultFileList={[
            {
              uid: 'bamboo',
              name: 'bamboo.png',
            },
            {
              uid: 'little',
              name: 'little.png',
            },
            {
              uid: 'foo',
              name: 'foo.png',
            },
            {
              uid: 'bar',
              name: 'bar.png',
            },
            {
              uid: 'bar1',
              name: 'bar1.png',
            },
          ]}
          showUploadList
        >
          <button type="button">upload</button>
        </Upload>,
      );

      fireEvent.click(container.querySelector('.ant-upload-list-item-action')!);
      await waitFakeTimer();
      // Click delete

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          // Have 3 file
          fileList: [expect.anything(), expect.anything(), expect.anything()],
        }),
      );
    });
  });

  it('auto fill file uid', () => {
    const fileList = [{ name: 'bamboo.png' }];

    expect((fileList[0] as any).uid).toBeFalsy();

    render(
      <Upload fileList={fileList as UploadProps['fileList']}>
        <button type="button">upload</button>
      </Upload>,
    );

    expect((fileList[0] as any).uid).toBeTruthy();
  });

  it('Proxy should support deepClone', async () => {
    const onChange = jest.fn();

    const { container: wrapper } = render(
      <Upload onChange={onChange}>
        <button type="button">upload</button>
      </Upload>,
    );

    fireEvent.change(wrapper.querySelector('input')!, {
      target: {
        files: [new File(['foo'], 'foo.png', { type: 'image/png' })],
      },
    });

    await waitFakeTimer();

    const { file } = onChange.mock.calls[0][0];
    const clone = cloneDeep(file);

    expect(Object.getOwnPropertyDescriptor(file, 'name')).toEqual(
      expect.objectContaining({ value: 'foo.png' }),
    );

    ['uid', 'name', 'lastModified', 'lastModifiedDate', 'size', 'type'].forEach((key) => {
      expect(key in clone).toBeTruthy();
    });
  });

  it('not break on freeze object', async () => {
    const fileList = [
      {
        fileName: 'Test.png',
        name: 'SupportIS App - potwierdzenie.png',
        thumbUrl: null,
        downloadUrl: 'https://localhost:5001/api/files/ff2917ce-e4b9-4542-84da-31cdbe7c273f',
        status: 'done',
      },
    ];

    const image = cloneDeep(fileList[0]);

    const frozenFileList = fileList.map(Object.freeze);

    const { container: wrapper } = render(
      <Upload fileList={frozenFileList as unknown as UploadProps['fileList']} />,
    );
    const rmBtn = wrapper.querySelectorAll('.ant-upload-list-item-action');
    fireEvent.click(rmBtn[rmBtn.length - 1]);

    // Wait for Upload async remove
    await waitFakeTimer();

    expect(image).toEqual(frozenFileList[0]);
  });
  // https://github.com/ant-design/ant-design/issues/30390
  // IE11 Does not support the File constructor
  it('should not break in IE if beforeUpload returns false', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <Upload beforeUpload={() => false} fileList={[]} onChange={onChange} />,
    );
    const fileConstructor = () => {
      throw new TypeError("Object doesn't support this action");
    };

    const spyIE = jest.spyOn(global, 'File').mockImplementationOnce(fileConstructor);
    fireEvent.change(container.querySelector('input')!, {
      target: { files: [{ file: 'foo.png' }] },
    });

    // React 18 is async now
    await waitFakeTimer();

    expect(onChange.mock.calls[0][0].fileList).toHaveLength(1);
    spyIE.mockRestore();
  });

  // https://github.com/ant-design/ant-design/issues/33819
  it('should show the animation of the upload children leaving when the upload children becomes null', async () => {
    const { container, rerender } = render(
      <Upload listType="picture-card">
        <button type="button">upload</button>
      </Upload>,
    );

    rerender(<Upload listType="picture-card" />);
    expect(container.querySelector('.ant-upload-select')).toHaveClass(
      'ant-upload-animate-inline-leave-start',
    );
    expect(container.querySelector('.ant-upload-select')).toHaveStyle({
      pointerEvents: 'none',
    });

    // Motion leave status change: start > active
    await waitFakeTimer();

    fireEvent.animationEnd(container.querySelector('.ant-upload-select')!);
    expect(container.querySelector('.ant-upload-select')).not.toHaveClass(
      'ant-upload-animate-inline-leave-start',
    );
  });

  it('<Upload /> should pass <UploadList /> prefixCls', async () => {
    const { container: wrapper } = render(<Upload />);
    expect(wrapper.querySelectorAll('.ant-upload-list').length).toBeGreaterThan(0);

    const { container: wrapper2 } = render(<Upload prefixCls="custom-upload" />);
    expect(wrapper2.querySelectorAll('.custom-upload-list').length).toBeGreaterThan(0);
  });

  // https://github.com/ant-design/ant-design/issues/36869
  it('Prevent auto batch', async () => {
    const mockFile1 = new File(['bamboo'], 'bamboo.png', { type: 'image/png' });
    const mockFile2 = new File(['light'], 'light.png', { type: 'image/png' });

    let info1: UploadRequestOption;
    let info2: UploadRequestOption;

    const onChange = jest.fn();
    const { container } = render(
      <Upload
        customRequest={(info) => {
          if (info.file === mockFile1) {
            info1 = info;
          } else {
            info2 = info;
          }
        }}
        onChange={onChange}
      />,
    );

    fireEvent.change(container.querySelector('input')!, {
      target: { files: [mockFile1, mockFile2] },
    });

    // React 18 is async now
    await waitFakeTimer();

    onChange.mockReset();

    // Processing
    act(() => {
      (info1?.onProgress as any)?.({ percent: 10 }, mockFile1);
      (info2?.onProgress as any)?.({ percent: 20 }, mockFile2);
    });

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        fileList: [
          expect.objectContaining({ percent: 10 }),
          expect.objectContaining({ percent: 20 }),
        ],
      }),
    );
  });

  it('prevent auto batch in control mode', async () => {
    const mockFile1 = new File(['bamboo'], 'bamboo.png', { type: 'image/png' });
    const mockFile2 = new File(['light'], 'light.png', { type: 'image/png' });

    const customRequest = jest.fn(async (options) => {
      // stop here to make sure new fileList has been set and passed to Upload

      await new Promise((resolve) => setTimeout(resolve, 0));
      options.onProgress({ percent: 0 });
      const url = Promise.resolve<string>('https://ant.design');
      options.onProgress({ percent: 100 });
      options.onSuccess({}, { ...options.file, url });
    });

    let fileListOut: UploadProps['fileList'] = [];

    const Demo: React.FC = () => {
      const [fileList, setFileList] = React.useState<UploadFile[]>([]);

      const onChange: UploadProps['onChange'] = async (e) => {
        const newFileList = Array.isArray(e) ? e : e.fileList;
        setFileList(newFileList);

        fileListOut = newFileList;
      };

      return (
        <Upload customRequest={customRequest} onChange={onChange} fileList={fileList}>
          <button type="button">Upload</button>
        </Upload>
      );
    };

    const { container } = render(<Demo />);

    fireEvent.change(container.querySelector<HTMLInputElement>('input')!, {
      target: { files: [mockFile1, mockFile2] },
    });

    // React 18 is async now
    await waitFakeTimer();

    fileListOut.forEach((file) => {
      expect(file.status).toBe('done');
    });
  });

  it('container ref', () => {
    const ref = React.createRef<any>();
    render(<Upload ref={ref} />);
    expect(ref.current?.nativeElement).toBeTruthy();
    expect(ref.current?.nativeElement instanceof HTMLElement).toBeTruthy();
  });
});
