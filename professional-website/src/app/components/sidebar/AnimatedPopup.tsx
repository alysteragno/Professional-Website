'use client';

import { useState, useEffect } from 'react';

export default function AnimatedPopup({
  show,
  children,
}: {
  show: boolean;
  children: React.ReactNode;
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const [animationClass, setAnimationClass] = useState('opacity-0 scale-95');

  useEffect(() => {
    if (show) {
      setShouldRender(true);

      // Delay to let component mount before applying animation
      requestAnimationFrame(() => {
        setAnimationClass('opacity-100 scale-110');
      });
    } else {
      // Animate out
      setAnimationClass('opacity-0 scale-95');

      // After animation, unmount
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match Tailwind transition duration
      return () => clearTimeout(timeout);
    }
  }, [show]);

  if (!shouldRender) return null;

  return (
    <div
      className={`
        fixed top-1/2 left-1/2 z-[100] w-[280px]
        transform -translate-x-1/2 -translate-y-1/2
        transition-all duration-300 ease-in-out
        ${animationClass} 
      `}
    >
      {children}
    </div>
  );
}
