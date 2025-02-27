import * as React from 'react';
import { useEvent } from '@rc-component/util';
import raf from '@rc-component/util/lib/raf';

export default function useDelay(callback: VoidFunction) {
  const idRef = React.useRef<number>(0);

  const clearRaf = () => {
    raf.cancel(idRef.current);
  };

  React.useEffect(() => clearRaf, []);

  const triggerFn = useEvent(() => {
    clearRaf();
    idRef.current = raf(callback);
  });

  return triggerFn;
}
