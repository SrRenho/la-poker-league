import PlayerRow from "./PlayerRow";
import "./styles.css";

export default function Leaderboard({ night, metadata }) {
  if (!night) return null;

  const nightNumber = night.number;
  const players = [...night.records].sort((a, b) => a.rank - b.rank); // ascending rank

  return (
    <div>
      <h2>NOCHE #{nightNumber}</h2>
      <div className="leaderboard">
        {players.map(r => (
          <PlayerRow
            key={r.player}
            {...r}
            color={metadata.color[r.player]}
            animal={metadata.animal[r.player]}
          />
        ))}
      </div>
    </div>
  );
}
