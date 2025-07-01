import React, { useEffect, useState } from 'react';

const RotatingText = ({
  texts = [],
  mainClassName = '',
  rotationInterval = 2000,
  ...rest
}) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (texts.length <= 1) return;
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 150);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts, rotationInterval]);

  return (
    <div className={`inline-block ${mainClassName}`} {...rest}>
      <span
        className={`inline-block transition-all duration-300 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
        }`}
      >
        {texts[index]}
      </span>
    </div>
  );
};

export default RotatingText; 