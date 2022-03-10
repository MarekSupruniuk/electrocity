import { useEffect, useState } from 'react';

export const useNavAdjuster = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [observerRef, setObserverRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef) {
      return;
    }
    const eventHandler = (entries: IntersectionObserverEntry[]) => {
      const lastEntry = entries[entries.length - 1];

      setIsScrolled(!lastEntry.isIntersecting);
    };
    const intersectionObserver = new IntersectionObserver(eventHandler, {
      rootMargin: '115px 0px'
    });
    intersectionObserver.observe(observerRef);

    return () => intersectionObserver.disconnect();
  }, [observerRef]);

  return {
    isScrolled,
    setObserverRef,
  };
};
