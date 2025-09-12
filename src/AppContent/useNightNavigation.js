import { useState } from "react";

export function useNightNavigation(nights) {
  const [currentIndex, setCurrentIndex] = useState(nights.length >= 2 ? nights.length - 2 : 0);

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