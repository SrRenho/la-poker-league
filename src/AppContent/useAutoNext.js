import { useEffect, useRef } from "react";

export function useAutoNext(goNext, hasNext, delay = 2000) {
  const goNextRef = useRef(goNext);

  useEffect(() => {
    goNextRef.current = goNext;
  }, [goNext]);

  useEffect(() => {
    if (!hasNext) return;
    const id = setTimeout(() => goNextRef.current(), delay);
    return () => clearTimeout(id);
  }, []);
}
