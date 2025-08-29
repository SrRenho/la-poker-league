import "./styles.css"; 

export default function Games({ games, color }) {
  games = games || 0;
  const colorClass = color.toLowerCase();

  return <span className={`leaf ${colorClass}`}>{games}</span>;
}