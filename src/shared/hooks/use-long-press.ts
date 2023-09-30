import { RefObject, useEffect } from 'react';

import { useEventListener } from './use-event-listener.ts';
import { useTimeout, UseTimeoutType } from './use-timeout.ts';

export function useLongPress(ref: RefObject<any>, { callback, delay = 250 }: UseTimeoutType) {
  const { reset, clear } = useTimeout({ callback, delay });
  useEffect(() => {
    callback();
  }, []);

  useEventListener('mousedown', reset, ref.current);
  useEventListener('touchstart', reset, ref.current);

  useEventListener('mouseup', clear, ref.current);
  useEventListener('mouseleave', clear, ref.current);
  useEventListener('touchend', clear, ref.current);
}
