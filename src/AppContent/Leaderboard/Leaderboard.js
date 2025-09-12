import { motion } from "framer-motion";
import PlayerRow from "./PlayerRow/PlayerRow.js";
import Header from "./Header/Header.js";
import "./Leaderboard.css"

export default function Leaderboard({ night, metadata }) {
  const players = [...night.records].sort((a, b) => a.rank - b.rank);

  return (
    <div className="grid-wrapper">
      <div className="submatrix-border submatrix1-border" />
      <div className="submatrix-border submatrix2-border" />
      <div className="leaderboard">
        <Header nightNumber={night.number}/>

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
