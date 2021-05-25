import { useEffect, useRef } from 'react';

export const useInterval = (cb, delay) => {
  const callbackRef = useRef(cb);
  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  useEffect(() => {
    if (delay !== null) {
      let timerId = setInterval(() => {
        callbackRef.current();
      }, delay);
      return () => clearInterval(timerId);
    }
  }, [delay]);
};
