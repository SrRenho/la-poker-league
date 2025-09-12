import Hoverable from 'Hoverable';
import { useState, useEffect } from 'react';
import './Rank.css';

export default function RankMovement({ rankMovement }) {
  if (rankMovement === 0) {
    return <Hoverable className="circle white no-italic">=</Hoverable>;
  }

  const triangleClass = rankMovement > 0 ? "triangleUp" : "triangleDown";
  const count = Math.min(Math.abs(rankMovement), 3); // max 3 triangles

  return (
    <Hoverable className="circle white" style={{ flexDirection: "column" }}>
      {count === 3 ? (
        <AnimatedTriple triangleClass={triangleClass} />
      ) : count === 2 ? (
        <AnimatedDouble triangleClass={triangleClass} />
      ) : (
        <div className={`triangle ${triangleClass}`} style={{ marginTop: 0 }} />
      )}
    </Hoverable>
  );
}

function AnimatedDouble({ triangleClass }) {
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeat((b) => (b + 1) % 4); // 4-beat loop
    }, 250); // adjust speed
    return () => clearInterval(interval);
  }, []);

  const isUp = triangleClass === "triangleUp";

  // visibility helper
  const vis = (idx) => {
    if (beat === 0) return idx === 0;
    if (beat === 1 || beat === 2) return true;
    if (beat === 3) return idx === 1;
    return false;
  };

  return (
    <>
      {isUp ? (
        <>
          <div className={`triangle ${triangleClass}`} style={{ marginTop: 0, visibility: vis(1) ? "visible" : "hidden" }} />
          <div className={`triangle ${triangleClass}`} style={{ marginTop: -3, visibility: vis(0) ? "visible" : "hidden" }} />
        </>
      ) : (
        <>
          <div className={`triangle ${triangleClass}`} style={{ marginTop: 0, visibility: vis(0) ? "visible" : "hidden" }} />
          <div className={`triangle ${triangleClass}`} style={{ marginTop: -3, visibility: vis(1) ? "visible" : "hidden" }} />
        </>
      )}
    </>
  );
}


function AnimatedTriple({ triangleClass }) {
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeat((b) => (b + 1) % 5); // 5-beat loop
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const isUp = triangleClass === "triangleUp";

  // visibility per beat
  const vis = (idx) => {
    if (beat === 0) return idx === 0;
    if (beat === 1) return idx <= 1;
    return true; // beats 2,3,4 show all
  };

  return (
    <>
      {isUp ? (
        <>
          <div className={`triangle ${triangleClass}`} style={{ marginTop: 0, visibility: vis(2) ? "visible" : "hidden" }} />
          <div className={`triangle ${triangleClass}`} style={{ marginTop: -3, visibility: vis(1) ? "visible" : "hidden" }} />
          <div className={`triangle ${triangleClass}`} style={{ marginTop: -3, visibility: vis(0) ? "visible" : "hidden" }} />
        </>
      ) : (
        <>
          <div className={`triangle ${triangleClass}`} style={{ marginTop: 0, visibility: vis(0) ? "visible" : "hidden" }} />
          <div className={`triangle ${triangleClass}`} style={{ marginTop: -3, visibility: vis(1) ? "visible" : "hidden" }} />
          <div className={`triangle ${triangleClass}`} style={{ marginTop: -3, visibility: vis(2) ? "visible" : "hidden" }} />
        </>
      )}
    </>
  );
}


