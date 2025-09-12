import AnimatedNight from "./AnimatedNight"
import './Header.css';
import '../PlayerRow/PlayerRow.css';

export default function Header({nightNumber}){

    return (
        <div className="row header smaller" style={{marginBottom: "1rem"}}>
        <span className="player-cell"/>
        <span style={{ fontStyle: "italic", width: "12rem"}}>
            Noche{" "}<AnimatedNight nightNumber={nightNumber}/>
        </ span >
        <span style={{width: "2rem"}}  />
        <span style={{width: "12rem"}}>GLOBAL</span>
        <span style={{width: "4rem", marginLeft: "1.75rem"}}>GAMES</span>
        <span  style={{width: "10.5rem"}}>ÚLTIMAS</span>
        </div>
    )

}