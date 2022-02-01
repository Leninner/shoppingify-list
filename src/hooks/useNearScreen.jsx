import { useRef, useEffect } from 'react';

export const useNearScreen = (isOpen) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current && isOpen) {
      elementRef.current.scrollIntoView();
    }
  }, [elementRef, isOpen]);

  return elementRef;
};
