import PlayerRow from "./PlayerRow";

export default function Leaderboard({ night }) {
  if (!night) return null;

  const nightNumber = night.number;
  const players = [...night.records].sort((a, b) => a.rank - b.rank); // ascending rank

  return (
    <div>
      <h2>NOCHE #{nightNumber}</h2>
      <table>
        <tbody>
          {players.map(({ rankMovement, player, amount, absentStreak, global, games, rank, history }) => (
            <PlayerRow
              rankMovement={rankMovement}
              rank={rank}
              key={player}
              name={player}
              amount={amount}
              absentStreak={absentStreak}
              global={global}
              games={games}
              history={history}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
