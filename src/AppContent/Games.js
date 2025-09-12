import "./styles.css"; 
import Hoverable from "../Hoverable";

export default function Games({ games, color }) {
  games = games || 0;
  const colorClass = color.toLowerCase();

  return (
    <Hoverable className={`leaf ${colorClass}`} style={{width: "4rem"}}>
      <span style ={{marginRight: ".5rem"}}>
        {String(games).padStart(2, "0")}
      </span>
    </Hoverable>
  );
}