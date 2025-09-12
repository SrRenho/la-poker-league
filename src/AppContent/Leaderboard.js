import PlayerRow from "./PlayerRow";
import "./styles.css";
import AnimatedNight from "../AnimatedNight.js";
import { motion } from "framer-motion";

export default function Leaderboard({ night, metadata }) {
  const nightNumber = night.number;
  const players = [...night.records].sort((a, b) => a.rank - b.rank);

  return (
    <div className="grid-wrapper">
      <div className="submatrix1-border" />
      <div className="submatrix2-border" />
      <div className="leaderboard">
        <div className="row header smaller" style={{marginBottom: "1rem"}}>
          <span className="player-cell"/>
          <span style={{ fontStyle: "italic", width: "12rem"}}>
            Noche{" "}<AnimatedNight nightNumber={nightNumber}/>
          </ span >
          <span style={{width: "2rem"}}  />
          <span style={{width: "12rem"}}>GLOBAL</span>
          <span style={{width: "4rem", marginLeft: "1.75rem"}}>GAMES</span>
          <span  style={{width: "10.5rem"}}>ÚLTIMAS</span>
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

    </div>
  );
}
