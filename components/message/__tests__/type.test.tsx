import message, { actWrapper, actDestroy } from '..';
import { act } from '../../../tests/utils';
import { awaitPromise, triggerMotionEnd } from './util';

describe('message.typescript', () => {
  beforeAll(() => {
    actWrapper(act);
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    message.destroy();
    actDestroy();

    jest.useRealTimers();
  });

  it('promise without arguments', async () => {
    message.success('yes!!!', 0);
    await Promise.resolve();
  });

  it('promise with one arguments', async () => {
    const filled = jest.fn();

    message.success('yes!!!').then(filled);

    await awaitPromise();
    triggerMotionEnd();
    await awaitPromise();

    expect(filled).toHaveBeenCalledWith(true);
  });

  it('promise two arguments', async () => {
    const filled = jest.fn();
    const rejected = jest.fn();

    message.success('yes!!!').then(filled, rejected);

    await awaitPromise();
    triggerMotionEnd();
    await awaitPromise();

    expect(filled).toHaveBeenCalledWith(true);
    expect(rejected).not.toHaveBeenCalled();
  });

  it('hide', async () => {
    const hide = message.loading('doing...');
    await Promise.resolve();
    hide();
  });
});
