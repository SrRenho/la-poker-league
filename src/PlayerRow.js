export default function PlayerRow({
  rankMovement,
  rank,
  name,
  amount,
  absentStreak,
  global,
  games,
  history,
  color,
  animal
}) {

    return (
    <tr>
        <td>{color} {animal}</td>
        <td>
        {rankMovement === 0
            ? "="
            : rankMovement > 0
            ? "^".repeat(rankMovement)
            : "v".repeat(-rankMovement)}
        </td>
        <td>#{rank}</td>
        <td>{name}</td>
        <td>
        {amount !== "" 
            ? `$${amount}`
            : `AUSENTE${absentStreak > 1 ? ` x${absentStreak}` : ""}`
        }
        </td>
        <td>${global || 0}</td>
        <td>{games || 0}</td>
        <td>{history.length > 0 ? history.join(", ") : ""}</td>
    </tr>
  );
}