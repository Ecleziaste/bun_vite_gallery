import { useRef, useState } from 'react';

import { ROOT_LAYOUT_HORIZONTAL_PADDING } from '../../../shared/common/constants.ts';

function easeInOut(time: number) {
  return 0.5 * (1 - Math.cos(Math.PI * time));
}

export const useAnimateContainer = (divElement: HTMLDivElement | null, animationDuration: number) => {
  const [animationStartTime, setAnimationStartTime] = useState(0);
  const [requestId, setRequestId] = useState<number | undefined>();
  const windowWidth = useRef(window.innerWidth);
  const distance = windowWidth.current - ROOT_LAYOUT_HORIZONTAL_PADDING * 2;

  const animationStep = (timestamp: number) => {
    if (!divElement) return;
    if (!animationStartTime) {
      setAnimationStartTime(timestamp);
    }

    const progress = (timestamp - animationStartTime) / animationDuration;

    if (progress < 1) {
      divElement.style.transform = `translateX(-${easeInOut(progress) * distance}px)`;
      setRequestId(requestAnimationFrame(animationStep));
    } else {
      requestId && cancelAnimationFrame(requestId);
    }
  };

  const animateContainer = () => {
    requestAnimationFrame(animationStep);
  };

  return { animateContainer };
};
