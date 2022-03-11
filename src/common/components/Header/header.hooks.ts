import { useState } from 'react';

export const useNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(v => !v);
  const handleAction = () => setIsOpen(false);

  return {
    handleAction,
    handleToggle,
    isOpen
  };
}