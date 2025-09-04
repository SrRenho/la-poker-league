import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedNight({ nightNumber }) {
  const prev = useRef(nightNumber);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    setIsIncreasing(nightNumber > prev.current);
    prev.current = nightNumber;
  }, [nightNumber]);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={nightNumber}
        initial={{ y: isIncreasing ? "-1rem" : "1rem", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        exit={{ y: isIncreasing ? "1rem" : "-1rem", opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ display: "inline-block" }}
      >
        #{nightNumber}
      </motion.span>
    </AnimatePresence>
  );
}
