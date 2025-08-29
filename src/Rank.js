import "./styles.css";

export default function Rank({ rank }) {
  const rankClass =
    rank === 1 ? "gold" :
    rank === 2 ? "silver" :
    rank === 3 ? "bronze" :
    "white";

  return <div className={`leaf rank ${rankClass}`}>#{rank}</div>;
}