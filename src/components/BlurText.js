import { useEffect, useRef, useState, useMemo } from 'react';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, transform: 'translateY(-50px)' }
        : { filter: 'blur(10px)', opacity: 0, transform: 'translateY(50px)' },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        transform: direction === 'top' ? 'translateY(5px)' : 'translateY(-5px)',
      },
      { filter: 'blur(0px)', opacity: 1, transform: 'translateY(0px)' },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'inline-flex' }}
    >
      {elements.map((segment, index) => {
        const spanDelay = (index * delay) / 1000;
        
        return (
          <span
            className="inline-block will-change-[transform,filter,opacity] transition-all duration-700"
            key={index}
            style={{
              filter: inView ? 'blur(0px)' : fromSnapshot.filter,
              opacity: inView ? 1 : fromSnapshot.opacity,
              transform: inView ? 'translateY(0px)' : fromSnapshot.transform,
              transitionDelay: `${spanDelay}s`,
              transitionDuration: `${totalDuration}s`,
            }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </span>
  );
};

export default BlurText; 