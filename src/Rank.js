import "./styles.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Rank({ rank }) {
  const [delayedRank, setDelayedRank] = useState(rank);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayedRank(rank), 1000); // 1s delay
    return () => clearTimeout(timeout);
  }, [rank]);

  const rankClass =
    rank === 1 ? "gold" :
    rank === 2 ? "silver" :
    rank === 3 ? "bronze" :
    "white";

  return (
    <div className={`leaf rank ${rankClass}`} style={{ position: "relative" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={delayedRank} // triggers exit/enter when delayedRank changes
          initial={{ y: "-1rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "2rem", opacity: 0 }}
          transition={{ duration: 1 }} // same duration for enter & exit
          style={{ position: "absolute", width: "100%", textAlign: "center" }}
        >
          #{delayedRank}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
