import { useState, useEffect } from "react";

export function useNightNavigation(nights) {
  const [currentIndex, setCurrentIndex] = useState(nights.length >= 2 ? nights.length - 2 : 0);

  useEffect(() => {
    if (nights.length >= 2 && currentIndex === nights.length - 2) {
      // Wait 3 seconds for dramatic effect, then go to the last night
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1); // Equivalent to goNext
      }, 2500); // 3-second delay

      // Cleanup timer on unmount or if nights changes
      return () => clearTimeout(timer);
    }
  }, [nights, currentIndex]); // Run when nights or currentIndex changes

  const currentNight = nights[currentIndex] || null;

  const goNext = () => {
    if (currentIndex < nights.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goLast = () => {
    if (nights.length > 0) setCurrentIndex(nights.length - 1);
  };

  const hasNext = currentIndex < nights.length - 1;
  const hasPrev = currentIndex > 0;

  return { currentNight, goNext, goPrev, hasNext, hasPrev, goLast };
}