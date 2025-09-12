import { motion, AnimatePresence } from "framer-motion";
import Hoverable from 'Hoverable';
import { useAnimatedNumber } from 'hooks/useAnimatedNumber';
import '../PlayerRow.css';


export default function Amount({ amount, color, absentStreak }) {
  const colorClass = color.toLowerCase();

  return (
    <Hoverable className={`${colorClass} leaf-holder`}>
      <div className="leaf white">
        {amount !== ""
          ? <PlayedAmount amount={amount}/>
          : <AbsentAmount absentStreak={absentStreak}/>}
      </div>
    </Hoverable>
  );
}


function PlayedAmount({ amount }) {
  const formatting = (n) => `$${Math.abs(Math.round(n)).toLocaleString('de-DE')}`;
  const formatted = useAnimatedNumber(amount, formatting);

  const sign = amount > 0 ? "+" : amount < 0 ? "-" : "=";

  // animate the background color
  const circleColor = amount > 0 ? "var(--green)" : amount < 0 ? "var(--evil-red)" : "var(--black)";

  return (
    <>
      <motion.div
        className="circle no-italic"
        style={{ marginRight: 'auto', position: 'relative', width: '1em', height: '1em' }}
        animate={{ backgroundColor: circleColor }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={sign} // triggers exit/enter when sign changes
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 5, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'absolute', width: '100%', textAlign: 'center', color: 'var(--white)', }}
            
          >
            {sign}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.span className="money" style={{ display: "inline-block" }}>
        {formatted}
      </motion.span>
    </>
  );
}


function AbsentAmount({ absentStreak }) {
  return (
    <div className="no-bold smaller">
      {`AUSENTE${absentStreak > 1 ? ` x${absentStreak}` : ""}`}
    </div>
  );
}
