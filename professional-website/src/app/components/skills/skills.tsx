import Image from 'next/image';
import Link from 'next/link';
import SkillList from './skillList';
import SkillsInfo from './mastery';


export const skills = [
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
    name: 'Vite',
    image: 'vite.svg',
    url: 'https://vitejs.dev/',
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

export const skillList = [ //this is backend skill list
  {
    name: 'Node.js',
    image: 'nodejs.svg',
    url: 'https://nodejs.org/en/about',
  },
  
  {
    name: 'PostgreSQL',
    image: 'postgresql.svg',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'Prisma',
    image: 'prisma.svg',
    url: 'https://www.prisma.io/about',
  },
]

export const tools = [
  {
    name: 'Git',
    image: 'git.svg',
    url: 'https://git-scm.com/',
  },
  {
    name: 'Figma',
    image: 'figma.svg',
    url: 'https://figma.com/',
  },
  {
    name: 'Github',
    image: 'professional-website\public\githubLogo.svg',
    url: 'https://figma.com/',
  },
]

export default function Skills() {
  return (
    <section className="p-6" 
             id='skills'>
  <h2
  className="text-3xl font-bold mb-4 pb-3 text-center border-b-[0.1px]"
  style={{ borderColor: "var(--color-quaternary)" }}
>
  Skills
</h2>

  <div className="flex justify-between mt-7">
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">Front-End</h2>
      {skills.map((skill) => (
        <Link key={skill.name} href={skill.url} target="_blank">
          <div className="flex items-center my-7">
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
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Back-End</h2>
        <SkillList skills={skillList}/>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Tools</h2>
        <SkillList skills={tools}/>
      </div>
    </div>
    <SkillsInfo/>
</section>

  );
}
