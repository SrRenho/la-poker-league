import './styles.css';

export default function Global({ global, color }) {
    global = global || 0;
    const colorClass = color.toLowerCase();

    return (
    <div className={'white leaf-holder'}>
        <div className={`leaf ${colorClass}`}>
            <div
            className="circle"
            style={{
                marginRight: 'auto',
                width: "1rem",
                height: "1rem",
                backgroundColor: "var(--white)",
                color: `var(--${colorClass})` // use the CSS variable
            }}
            >
            {global >= 0 ? "+" : "-"}
            </div>
            ${Math.abs(global)}
        </div>
    </div>
    );
}