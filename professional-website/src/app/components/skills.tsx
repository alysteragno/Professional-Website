import Image from 'next/image';
import Link from 'next/link';

const skills = [
  {
    name: 'React',
    image: 'react.svg',
    url: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    image: 'nextjs.svg',
    url: 'https://nextjs.org/docs',
  },
  {
    name: 'Tailwind CSS',
    image: 'tailwind.svg',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Git',
    image: 'git.svg',
    url: 'https://git-scm.com/',
  },
  {
    name: 'Vite',
    image: 'vite.svg',
    url: 'https://vitejs.dev/',
  },
  {
    name: 'Figma',
    image: 'figma.svg',
    url: 'https://figma.com/',
  },
  {
    name: 'HTML',
    image: 'html.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    image: 'css.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    image: 'js.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Sass',
    image: 'sass.png',
    url: 'https://sass-lang.com/',
  },
];

export default function Skills() {
  return (
    <section className="p-6" id='skills'>
  <h2 className="text-2xl font-bold mb-4">Skills</h2>
  <div className="flex ">
    <div>
      {skills.map((skill) => (
        <Link key={skill.name} href={skill.url} target="_blank">
          <div className="flex items-center mb-4">
            <Image
              src={`/skills/${skill.image}`} 
              alt={skill.name}
              width={40}
              height={40}
              className="hover:scale-115 hover:transition-transform duration-200"
            />
            <div className='ml-4'>
              <span className="text-sm gap-5">{skill.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

  );
}
