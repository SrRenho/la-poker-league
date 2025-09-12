import './styles.css';
import { motion, useTransform } from "framer-motion";
import Hoverable from "../Hoverable";
import { useAnimatedNumber } from "./useAnimatedNumber";

export default function Global({ global = 0, color }) {
  const colorClass = color.toLowerCase();

  const formatting = (n) => `$${Math.abs(Math.round(n)).toLocaleString("de-DE")}`;
  const formatted = useAnimatedNumber(global, formatting);


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
