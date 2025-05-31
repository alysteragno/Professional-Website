import Link from 'next/link';
import Arrow from './arrow';

const links = {
  linkedin: 'https://www.linkedin.com/in/alyster-marasigan-9314692ba/',
  nextjs: 'https://nextjs.org/docs',
  frontend: 'https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html',
};

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold animate-jump-twice">
          Hi there! I'm{' '}
          <Link
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-logoFont"
          >
            Alyster
          </Link>
        </h1>

        <h2 className="text-2xl font-semibold">
          <Link
            href={links.nextjs}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-secondary"
          >
            NEXT.JS
          </Link>{' '}
          <Link
            href={links.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-tertiary"
          >
            Front-End Developer
          </Link>
        </h2>
      </div>
      <Arrow/>
    </main>
  );
}
