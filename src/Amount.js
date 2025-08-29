import './styles.css';

export default function Amount({ amount, color, absentStreak }) {
    const colorClass = color.toLowerCase();

    return (
    <div className={`${colorClass} leaf-holder`}>
        <div className="leaf white">
            {amount !== ""
                ? <PlayedAmount amount={amount}/>
                : <AbsentAmount absentStreak={absentStreak}/>}
        </div>
    </div>
    );
}

function PlayedAmount({ amount }) {
  let circleColor = "black";
  let sign = "=";

  if (amount > 0) {
    circleColor = "green";
    sign = "+";
  } else if (amount < 0) {
    circleColor = "red";
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
