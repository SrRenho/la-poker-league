import RankMovement from "./RankMovement";
import Rank from "./Rank";
import './styles.css';
import Hoverable from "../Hoverable";

export default function PlayerCell({ rankMovement, rank, name, color, animal }) {
    const colorClass = color.toLowerCase();
    const animalUrl = animal 
        ? `linear-gradient(var(--white), var(--white)), url('/${animal.toLowerCase()}.jpeg')`
        : 'none';


    return (
    <div className={`player-cell ${colorClass}`}>
        <Hoverable className="rank-block">
            <RankMovement rankMovement={rankMovement} />
            <Rank rank={rank} />
        </Hoverable>
        <Hoverable className ="leaf" style={{marginLeft: "1rem", width: "35%", backgroundImage: animalUrl, backgroundSize: "cover, 100% auto", backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: 'center, left 45%',     backgroundBlendMode: 'multiply'}}/>
        <span style={{ marginLeft: 'auto', marginRight: "1rem" }}>{name}</span>
    </div>
    )
}