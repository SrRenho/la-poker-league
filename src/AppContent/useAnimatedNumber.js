import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Hook that animates a number and optionally formats it
 * @param {number} value - target number
 * @param {function} formatter - optional function to format the number
 */
export function useAnimatedNumber(value, formatter = (n) => Math.round(n).toLocaleString("de-DE")) {
  const motionValue = useMotionValue(value);
  const spring = useSpring(motionValue, { stiffness: 100, damping: 20 });
  const [formatted, setFormatted] = useState(formatter(value));

  useEffect(() => {
    motionValue.set(value);
    const unsubscribe = spring.onChange((v) => setFormatted(formatter(v)));
    return () => unsubscribe();
  }, [value]);

  return formatted; // already formatted string
}
