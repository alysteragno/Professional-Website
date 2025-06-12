'use client';
import { useState, useEffect, useRef } from 'react';

type AnimatedProgressProps = {
  mastery: number;
};

export default function AnimatedProgress({ mastery }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const progressRef = useRef<HTMLProgressElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.3 } // Adjust visibility threshold
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let animationFrame: number;
    let start: number | null = null;
    const duration = 1000;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const percentage = Math.min((elapsed / duration) * mastery, mastery);
      setProgress(percentage);
      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, mastery]);

  return (
    <progress
      ref={progressRef}
      className="progress w-56 ml-auto sm:w-65 md:w-82 lg:w-80"
      value={progress}
      max={100}
    />
  );
}
