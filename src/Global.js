import './styles.css';

export default function Global({ global, color }) {
    global = global || 0;
    const colorClass = color.toLowerCase();

    return (
    <div className={'white leaf-holder'}>
        <div className={`leaf ${colorClass}`}>
            <div
            className="circle no-italic"
            style={{
                marginRight: 'auto',
                backgroundColor: "var(--white)",
                color: `var(--${colorClass})` // use the CSS variable
            }}
            >
            {global >= 0 ? "+" : "-"}
            </div>
            <span className="money">
                ${Math.abs(global).toLocaleString('de-DE')}
            </span>
        </div>
    </div>
    );
}