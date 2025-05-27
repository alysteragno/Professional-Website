import Link from 'next/link';

export default function Hero() {
  return (
    <main>
      <div className="flex items-center justify-center text-center py-10">
        <h1 className="text-4xl font-bold">
          Hi there! I'm{' '}
          <Link
            href="https://www.linkedin.com/in/alyster-marasigan-9314692ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary "
          >
            Alyster
          </Link>
        </h1>
      </div>
    </main>
  );
}
