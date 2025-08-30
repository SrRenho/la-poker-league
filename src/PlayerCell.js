import RankMovement from "./RankMovement";
import Rank from "./Rank";
import './styles.css';

export default function PlayerCell({ rankMovement, rank, name, color, animal }) {
    const colorClass = color.toLowerCase();
    const animalUrl = animal 
        ? `linear-gradient(var(--white), var(--white)), url('/${animal.toLowerCase()}.jpeg')`
        : 'none';


    return (
    <div className={`player-cell ${colorClass}`}>
        <span className="rank-block">
            <RankMovement rankMovement={rankMovement} />
            <Rank rank={rank} />
        </span>
        <span className ="leaf" style={{marginLeft: "1rem", width: "42.5%", backgroundImage: animalUrl, backgroundSize: "cover, 100% auto", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: 'center, left 45%',     backgroundBlendMode: 'multiply'}}/>
        <span style={{ marginLeft: 'auto', marginRight: "1rem" }}>{name}</span>
    </div>
    )
}