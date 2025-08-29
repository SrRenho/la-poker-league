import RankMovement from "./RankMovement";
import Rank from "./Rank";
import './styles.css';

export default function PlayerCell({ rankMovement, rank, name, color, animal }) {
    const colorClass = color.toLowerCase();


    return (
    <div className={`player-cell ${colorClass}`}>
        <span className="rank-block">
            <RankMovement rankMovement={rankMovement} />
            <Rank rank={rank} />
        </span>
        <span className ="leaf" style={{marginLeft: "1rem", width: "42.5%", backgroundImage: "url('logo192.png')", backgroundSize: "contain"}}/>
        <span style={{ marginLeft: 'auto', marginRight: "1rem" }}>{name}</span>
    </div>
    )
}