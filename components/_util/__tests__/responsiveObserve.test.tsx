import React from 'react';

import { render } from '../../../tests/utils';
import useResponsiveObserver from '../responsiveObserver';

describe('Test ResponsiveObserve', () => {
  it('test ResponsiveObserve subscribe and unsubscribe', () => {
    let responsiveRef: any = null;
    const Demo: React.FC = () => {
      const responsiveObserver = useResponsiveObserver();
      responsiveRef = responsiveObserver;
      return null;
    };
    render(<Demo />);
    const subscribeFunc = jest.fn();
    const token = responsiveRef.subscribe(subscribeFunc);
    expect(responsiveRef.matchHandlers[responsiveRef.responsiveMap.xs].mql.matches).toBeTruthy();
    expect(subscribeFunc).toHaveBeenCalledTimes(1);
    responsiveRef.unsubscribe(token);
    expect(
      responsiveRef.matchHandlers[responsiveRef.responsiveMap.xs].mql?.removeEventListener,
    ).toHaveBeenCalled();
  });
});
