import { useState } from 'react';

export const useHoverShow = () => {
  const [isShow, setIsShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return { show: [isShow, handleShow], active: [isActive, handleActive] };
};
