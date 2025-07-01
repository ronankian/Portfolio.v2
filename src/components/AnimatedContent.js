import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  distance = 50,
  direction = "vertical",
  reverse = false,
  duration = 2,
  ease = "power2.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0.5,
  onComplete,
}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return; // Only run in browser
    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    // const startPct = (1 - threshold) * 100;

    try {
      console.log('AnimatedContent: running GSAP set and to (no ScrollTrigger)', el);
      gsap.set(el, {
        [axis]: offset,
        scale,
        opacity: animateOpacity ? initialOpacity : 1,
      });

      const tween = gsap.to(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration,
        ease,
        delay,
        onComplete: () => {
          console.log('AnimatedContent: animation complete', el);
          if (onComplete) onComplete();
        },
        // scrollTrigger: {
        //   trigger: el,
        //   start: `top ${startPct}%`,
        //   toggleActions: "play none none none",
        // },
      });

      return () => {
        // ScrollTrigger.getAll().forEach((t) => t.kill());
        gsap.killTweensOf(el);
        if (tween) tween.kill();
      };
    } catch (err) {
      console.error('AnimatedContent: GSAP error', err);
      // Fallback: always show the element
      el.style.opacity = 1;
      el.style.transform = 'none';
    }
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent; 