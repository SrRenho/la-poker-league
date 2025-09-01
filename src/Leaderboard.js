import PlayerRow from "./PlayerRow";
import "./styles.css";
import AnimatedNight from "./AnimatedNight.js";
import { motion } from "framer-motion";

export default function Leaderboard({ night, metadata }) {
  const nightNumber = night.number;
  const players = [...night.records].sort((a, b) => a.rank - b.rank);

  return (
    <div className="leaderboard">
      <div className="row header smaller">
        <span />
        <span style={{ fontStyle: "italic" }}>
          Noche{" "}<AnimatedNight nightNumber={nightNumber}/>
        </span>
        <span />
        <span>GLOBAL</span>
        <span>GAMES</span>
        <span>ÚLTIMAS</span>
      </div>

      <div className="rows">
        {players.map((r) => (
          <motion.div key={r.player} layout transition={{ layout: { type: "spring", stiffness: 50, damping: 20 } }}>
            <PlayerRow
              {...r}
              color={metadata.color[r.player]}
              animal={metadata.animal[r.player]}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
