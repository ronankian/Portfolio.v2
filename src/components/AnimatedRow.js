import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedRow = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, {
      y: 30,
      scale: 0.8,
      opacity: 0,
    });

    gsap.to(el, {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(el);
    };
  }, [delay]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedRow; 