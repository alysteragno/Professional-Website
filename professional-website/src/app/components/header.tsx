import SocialLinks from './socialLinks';
import Lightmode from './lightmode';


export default function Header() {
  return (
    <header className='justify-between flex items-center p-4'>
      <div>
        <h3>Alyster A.</h3>
      </div>

      <nav className='flex items-center gap-3'>
        <SocialLinks />
        <Lightmode/>
      </nav>
    </header>
  );
}
