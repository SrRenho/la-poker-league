import React from "react";


export default function TextureOverlay() {
    return (
    <div
    style={{
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 20,
    }}
    >
        <img
        src="/1.png"
        alt=""
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", mixBlendMode: "lighten", opacity: 0.5 }}
        />
        <img
        src="/2.png"
        alt=""
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", mixBlendMode: "multiply", opacity: 0.65 }}
        />
        <img
        src="/3.png"
        alt=""
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", mixBlendMode: "soft-light", opacity: 0.5 }}
        />

    </div>
    );

    return (<>

        </>
    )
}