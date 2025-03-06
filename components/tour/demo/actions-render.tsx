import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import type { GetRef, TourProps } from 'antd';
import { Button, Divider, Space, Tour } from 'antd';

const App: React.FC = () => {
  const ref1 = useRef<GetRef<typeof Button>>(null);
  const ref2 = useRef<GetRef<typeof Button>>(null);
  const ref3 = useRef<GetRef<typeof Button>>(null);

  const [open, setOpen] = useState<boolean>(false);

  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => ref1.current!,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current!,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current!,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        actionsRender={(originNode, { current, total }) => (
          <>
            {current !== total - 1 && (
              <Button
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Skip
              </Button>
            )}
            {originNode}
          </>
        )}
      />
    </>
  );
};

export default App;
