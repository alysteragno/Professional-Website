'use client';
import Link from 'next/link';

export type Proj = {
  name: string;
  id: string;
  video: string | null;
  route: string;
  onHover?: (video: string | null) => void;
};

export const Projects: Proj[] = [
  {
    id: "1",
    name: "Bank System",
    video: "/video/BankSystem.mp4",
    route: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
  {
    id: "2",
    name: "Weather App",
    video: "/video/BankSystem.mp4",
    route: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
];

export default function ProjArray({ id, name, video, route, onHover }: Proj) {

  return (
    <nav className="w-full">
      <div className="flex">
      <ul>
        <li
            className="flex flex-col justify-center  hover:scale-105 transition-all rounded-sm"
            onMouseEnter={() => onHover?.(video)}
            onMouseLeave={() => onHover?.(null)}
          >
          <Link
            id={id}
            href={route}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={true}
          >
            <h2 className='text-primary'>{name}</h2>
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
}
