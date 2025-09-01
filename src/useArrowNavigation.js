import { useEffect } from "react";

export default function useArrowNavigation({ goPrev, goNext, hasPrev, hasNext }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowLeft" && hasPrev) goPrev();
      if (e.key === "ArrowRight" && hasNext) goNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext, hasPrev, hasNext]);
}
