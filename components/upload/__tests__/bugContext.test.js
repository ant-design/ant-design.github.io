import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Upload from '..';
import UploadList from '../UploadList';
import Form from '../../form';
import { errorRequest, successRequest } from './requests';
import { setup, teardown } from './mock';
import { sleep } from '../../../tests/utils';

describe('Upload.BugContext', () => {
  beforeEach(() => setup());
  afterEach(() => teardown());

  // Mock for rc-util raf
  window.requestAnimationFrame = callback => {
    window.setTimeout(callback, 16);
  };
  window.cancelAnimationFrame = id => {
    window.clearTimeout(id);
  };

  describe('Bug control', () => {
    const Demo = ({ wrap }) => {
      const [fileList, setFileList] = React.useState([]);

      const node = (
        <Upload
          customRequest={successRequest}
          fileList={fileList}
          onChange={info => {
            if (info.file.status === 'done') {
              setFileList(info.fileList);
            }
          }}
        />
      );

      if (wrap) {
        return <Upload.BugContextProvider>{node}</Upload.BugContextProvider>;
      }

      return node;
    };

    async function triggerChange(wrapper) {
      wrapper.find('input').simulate('change', {
        target: {
          files: [
            new File(['foo'], 'foo.png', {
              type: 'image/png',
            }),
          ],
        },
      });

      await sleep();

      act(() => {
        jest.runAllTimers();
        wrapper.update();
      });
    }

    it('Should fallback to bug version', async () => {
      jest.useFakeTimers();

      const wrapper = mount(<Demo wrap />);

      expect(wrapper.find(UploadList).props().items).toHaveLength(0);

      await triggerChange(wrapper);

      expect(wrapper.find(UploadList).props().items).toHaveLength(1);

      jest.useRealTimers();
    });

    it('default not fallback to bug version', async () => {
      jest.useFakeTimers();

      const wrapper = mount(<Demo />);

      expect(wrapper.find(UploadList).props().items).toHaveLength(0);

      await triggerChange(wrapper);

      expect(wrapper.find(UploadList).props().items).toHaveLength(0);

      jest.useRealTimers();
    });
  });
});
