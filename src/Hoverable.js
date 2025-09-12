import { useHover } from "./hooks/useHover";

export default function Hoverable({ children, scale = 1.05, pointer = true, style, ...rest }) {
  const [ref, isHovered] = useHover();

  return (
    <div
      ref={ref}
      style={{
        transition: "transform 0.2s, cursor 0.2s",
        transform: isHovered ? `scale(${scale})` : "scale(1)",
        cursor: isHovered && pointer ? "pointer" : "default",
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
