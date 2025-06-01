'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Arrow() {
  return (
    <Link href="#skills">
      <Image 
        src="/arrow.svg"
        alt="Arrow Icon"
        width={50}
        height={50}
        className="inline-block transition-transform duration-300 ease-in-out hover:translate-y-1 cursor-pointer rotate-90 animate-pulse"
      />
    </Link>
  );
}
