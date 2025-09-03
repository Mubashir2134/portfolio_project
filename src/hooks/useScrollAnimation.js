import { useState, useEffect } from 'react';

export const useScrollAnimation = (initialValue = 0, targetValue, duration = 2000, delay = 0) => {
  const [value, setValue] = useState(initialValue);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const updateValue = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(updateValue);
        return;
      }

      if (now >= endTime) {
        setValue(targetValue);
        return;
      }

      const progress = (now - startTime) / duration;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = initialValue + (targetValue - initialValue) * easeOutQuart;
      
      setValue(Math.round(currentValue));
      requestAnimationFrame(updateValue);
    };

    requestAnimationFrame(updateValue);
  }, [isVisible, initialValue, targetValue, duration, delay]);

  const startAnimation = () => setIsVisible(true);
  const resetAnimation = () => {
    setIsVisible(false);
    setValue(initialValue);
  };

  return { value, startAnimation, resetAnimation, isVisible };
};