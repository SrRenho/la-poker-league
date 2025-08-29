import './styles.css';

export default function RankMovement({ rankMovement }) {
  if (rankMovement === 0) {
    return <div className="circle white">=</div>;
  }

  const triangleClass = rankMovement > 0 ? "triangleUp" : "triangleDown";
  const count = Math.min(Math.abs(rankMovement), 3); // max 3 triangles

  return (
    <div className="circle white" style={{ flexDirection: "column" }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`triangle ${triangleClass}`} style={{ marginTop: i === 0 ? 0 : -3 }} />
      ))}
    </div>
  );
}