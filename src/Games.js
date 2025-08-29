import "./styles.css"; 

export default function Games({ games, color }) {
  games = games || 0;
  const colorClass = color.toLowerCase();

  return (
    <span className={`leaf ${colorClass}`}>
      <span style ={{marginRight: ".5rem"}}>
        {String(games).padStart(2, "0")}
      </span>
    </span>
  );
}