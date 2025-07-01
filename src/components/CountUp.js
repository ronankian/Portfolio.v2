import React, { useEffect, useState } from 'react';

const CountUp = ({ from = 0, to = 100, duration = 1, separator = '', direction = 'up', className = '' }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    let end = to;
    if (direction === 'down') {
      start = to;
      end = from;
    }
    const range = Math.abs(end - start);
    if (range === 0) return;
    const increment = direction === 'up' ? 1 : -1;
    const stepTime = Math.max(duration * 1000 / range, 16);
    let current = start;
    setCount(current);
    const timer = setInterval(() => {
      current += increment;
      setCount(current);
      if ((direction === 'up' && current >= end) || (direction === 'down' && current <= end)) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [from, to, duration, direction]);

  // Add separator if needed
  const formatNumber = (num) => {
    if (!separator) return num;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  return <span className={className}>{formatNumber(count)}</span>;
};

export default CountUp; 