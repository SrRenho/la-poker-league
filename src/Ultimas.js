import "./styles.css"; 

export default function Ultimas({ ultimas, color }) {
  const paddedUltimas = [...ultimas, ...Array(3 - ultimas.length).fill(null)].slice(0, Math.max(ultimas.length, 3));
  const colorClass = color.toLowerCase();

  return (
    <span className={`leaf ${colorClass}`}>
      {paddedUltimas.map((u, i) => (
        <span
        className="circle"
        style={{
            width: "1rem",
            height: "1rem",
            backgroundColor: "var(--white)",
            color: `var(--${colorClass})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 0.5rem",
        }}
        key={i}>
            {u}
        </span>
      ))}
    </span>
  );
}