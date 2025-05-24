import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='justify-between flex items-center p-4'>
      <div>
        <div>
          <h3>Alyster A.</h3>
        </div>
      </div>

      <div className="socialsContainer">
        <Link href="https://www.linkedin.com/in/alyster-marasigan-9314692ba/" target="_blank">
          <Image
            src="/linkedLogo.svg"
            width={100}
            height={100}
            alt="LinkedIn Logo"
          />
        </Link>
      </div>
    </header>
  );
}
