import Image from 'next/image';
import Link from 'next/link';

export default function Arrow() {
    return (
        <div>
            <Image 
                src="/arrow.svg"
                alt="Arrow Icon"
                width={24}
                height={24}
                className="inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                />
        </div>
    )
};