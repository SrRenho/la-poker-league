import { motion, AnimatePresence } from "framer-motion";
import Hoverable from "Hoverable";


export default function Ultimas({ ultimas, color }) {
  const paddedUltimas = [...ultimas, ...Array(3 - ultimas.length).fill(null)].slice(0, Math.max(ultimas.length, 3));
  const colorClass = color.toLowerCase();

  return (
    <Hoverable className={`leaf ${colorClass}`} style={{width: "8rem"}}>
      {paddedUltimas.map((u, i) => (
        <span
        className="circle no-italic"
        style={{
            backgroundColor: "var(--white)",
            color: `var(--${colorClass})`,
            display: "flex",
            margin: "0 0.25rem",
        }}
        key={i}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={u ?? i} // fallback for null
              initial={{ y: "-.5rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: ".5rem", opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: "inline-block" }}
            >
              {u}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </Hoverable>
  );
}