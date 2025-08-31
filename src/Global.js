import './styles.css';
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Hoverable from "./Hoverable";

export default function Global({ global = 0, color }) {
  const colorClass = color.toLowerCase();

  const value = useMotionValue(global);
  const spring = useSpring(value, { stiffness: 100, damping: 20 });

  // Map the spring value to formatted string
  const formatted = useTransform(spring, (v) => `$${Math.abs(Math.round(v)).toLocaleString("de-DE")}`);

  useEffect(() => {
    value.set(global);
  }, [global]);

  return (
    <Hoverable className="white leaf-holder">
      <div className={`leaf ${colorClass}`}>
        <div
          className="circle no-italic"
          style={{
            marginRight: "auto",
            backgroundColor: "var(--white)",
            color: `var(--${colorClass})`,
          }}
        >
          {global >= 0 ? "+" : "-"}
        </div>
        <motion.span className="money" style={{ display: "inline-block" }}>
          {formatted}
        </motion.span>
      </div>
    </Hoverable>
  );
}
