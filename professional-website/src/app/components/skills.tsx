import Image from 'next/image';
import Link from 'next/link';

const skills = [
  {
    name: 'React',
    image: 'react.svg',
    url: 'https://react.dev/',
  },
  {
    name: 'Tailwind CSS',
    image: 'tailwind.svg',
    url: 'https://tailwindcss.com/',
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
    image: 'sass.svg',
    url: 'https://sass-lang.com/',
  },
];

export default function Skills() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill) => (
          <Link key={skill.name} href={skill.url} target="_blank">
            <div className="flex flex-col items-center hover:scale-105 transition-transform duration-200">
              <Image
                src={`/skills/${skill.image}`} // Make sure your SVGs are in /public/skills/
                alt={skill.name}
                width={64}
                height={64}
              />
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
