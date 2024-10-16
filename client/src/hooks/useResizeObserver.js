import { useRef, useEffect } from 'react';

const useResizeObserver = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (!Array.isArray(entries) || !entries.length) return;
      callback(entries);
    });

    resizeObserver.observe(element);

    return () => {
      if (element) resizeObserver.unobserve(element);
    };
  }, [callback]);

  return [ref];
};

export default useResizeObserver;
