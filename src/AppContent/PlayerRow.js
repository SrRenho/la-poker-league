import "./styles.css";
import Hoverable from "../Hoverable";
import Games from "./Games";
import Amount from "../Amount";
import Global from "./Global";
import PlayerCell from "./PlayerCell";
import Ultimas from "./Ultimas";

export default function PlayerRow({
  rankMovement,
  rank,
  player: name,
  amount,
  absentStreak,
  global,
  games,
  history,
  color,
  animal
}) {

    return (
      <Hoverable className="row">
        <PlayerCell rankMovement={rankMovement} rank={rank} name={name} color={color} animal={animal}/>
        <Amount amount={amount} color={color} absentStreak={absentStreak}/>
        <span style={{width: "1rem"}}/>
        <Global global={global} color={color}/>
        <span style={{marginLeft: "1rem"}}><Games games={games} color={color}/></span>
        <Ultimas ultimas={history} color={color}/>
      </Hoverable>
    );
}
