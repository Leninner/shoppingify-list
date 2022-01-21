import { useState } from 'react';

export const useHoverShow = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return [isShow, handleShow];
};
