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
        <span>{color} {animal}</span>
        <span style={{ marginLeft: 'auto' }}>{name}</span>
    </div>
    )
}