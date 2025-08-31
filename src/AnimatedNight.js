import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedNight({ nightNumber }) {
  const prev = useRef(nightNumber);
  const isIncreasing = nightNumber > prev.current;

  useEffect(() => {
    prev.current = nightNumber;
  }, [nightNumber]);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={nightNumber}
        initial={{ y: isIncreasing ? "-1rem" : "1rem", opacity: 0 }} // entering
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: isIncreasing ? "-1rem" : "1rem", opacity: 0 }} // leaving in opposite direction
        transition={{ duration: 1 }}
        style={{ display: "inline-block" }}
      >
        #{nightNumber}
      </motion.span>
    </AnimatePresence>
  );
}
