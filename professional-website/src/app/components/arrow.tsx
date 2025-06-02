'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Arrow() {

  useEffect(() => {

        // Detects a full reload on page (modern method for App Router)
 
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navEntry?.type === 'reload') {
      const hero = document.getElementById('hero');
      if(hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

        //function named handleClick which handles an event when clicked scrolls to skills componentx` 
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const skills = document.getElementById('skills');
    if (skills) {
      skills.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Link href="#skills"
          onClick={handleClick}>
      <Image 
        src="/arrow.svg"
        alt="Arrow Icon"
        width={50}
        height={50}
        className="inline-block tra nsition-transform duration-300 ease-in-out hover:translate-y-1 cursor-pointer rotate-90 animate-pulse"
      />
    </Link>
  );
}
