import { useRef, useEffect } from "react";
import { useInView, useAnimation, AnimationControls } from "framer-motion";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls: AnimationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls };
}
