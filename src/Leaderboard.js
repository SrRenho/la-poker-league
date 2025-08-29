import PlayerRow from "./PlayerRow";
import "./styles.css";

export default function Leaderboard({ night, metadata }) {
  if (!night) return null;

  const nightNumber = night.number;
  const players = [...night.records].sort((a, b) => a.rank - b.rank); // ascending rank

  return (
      <div className="leaderboard">
        <div className="row header smaller">
          <span/>
          <span style={{fontStyle: 'italic'}}>Noche #{nightNumber}</span>
          <span/>
          <span>GLOBAL</span>
          <span>GAMES</span>
          <span>ÚLTIMAS</span>
        </div>
        {players.map(r => (
          <PlayerRow
            key={r.player}
            {...r}
            color={metadata.color[r.player]}
            animal={metadata.animal[r.player]}
          />
        ))}
      </div>
  );
}
