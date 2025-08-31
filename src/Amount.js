import './styles.css';
import Hoverable from './Hoverable';

export default function Amount({ amount, color, absentStreak }) {

    const colorClass = color.toLowerCase();

    return (
    <Hoverable className={`${colorClass} leaf-holder`}>
        <div className="leaf white">
            {amount !== ""
                ? <PlayedAmount amount={amount}/>
                : <AbsentAmount absentStreak={absentStreak}/>}
        </div>
    </Hoverable>
    );
}

function PlayedAmount({ amount }) {
  let circleColor = "black";
  let sign = "=";

  if (amount > 0) {
    circleColor = "green";
    sign = "+";
  } else if (amount < 0) {
    circleColor = "evil-red";
    sign = "-";
  }

  return (
    <>
      <div className={`circle no-italic ${circleColor}`} style={{ marginRight: 'auto'}}>
        {sign}
      </div>
      <span className="money">
        ${Math.abs(amount).toLocaleString('de-DE')}
      </span>
    </>
  );
}

function AbsentAmount({absentStreak}){

    return(
        <div className="no-bold smaller">
            {`AUSENTE${absentStreak > 1 ? ` x${absentStreak}` : ""}`}
        </div>
    )
}
