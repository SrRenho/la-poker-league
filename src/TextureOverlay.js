export default function TextureOverlay() {
  return (
    <>
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 20,
        backgroundImage: "url('/1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "lighten",
        opacity: 0.5,
      }}
    />
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 20,
        backgroundImage: "url('/2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "multiply",
        opacity: 0.65,
      }}
    />
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 20,
        backgroundImage: "url('/3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "soft-light",
        opacity: 0.5,
      }}
    />

    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundImage: "url('/bg-logo.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.5,
        backgroundPositionX: "60vw",
        backgroundSize: "35vw"
      }}
    />
  </>  
  );
}