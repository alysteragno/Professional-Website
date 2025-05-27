import SocialLinks from './socialLinks';
import Lightmode from './lightmode';
import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'] });


export default function Header() {
  return (
    <header className={`${openSans.className}  w-full justify-between flex items-center p-4 `}>
      <div>
        <a href="#">
          <h3 className='text-lg leading-4 tracking-wide font-bold'>ALYSTER A.</h3>
        </a>
      </div>
      <nav className='flex items-center gap-3'>
        <SocialLinks />
        <Lightmode/>

      </nav>
    </header>
    
  );
}
