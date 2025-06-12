import Link from 'next/link';
import SkillList from './skillList';
import Line from '../line';


export const skills = [
  {
      name: 'React',
      image: 'react.svg',
      url: 'https://react.dev/',
      mastery: 50, 

  },
  {
    name: 'Next.js',
    image: 'nextjs.svg',
    url: 'https://nextjs.org/docs',
    mastery: 45, 
  },
  {
    name: 'Tailwind CSS',
    image: 'tailwind.svg',
    url: 'https://tailwindcss.com/',
    mastery: 90, 
  },
  {
    name: 'Vite',
    image: 'vite.svg',
    url: 'https://vitejs.dev/',
     mastery: 70, 
  },
  {
    name: 'HTML',
    image: 'html.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
     mastery: 90, 
  },
  {
    name: 'CSS',
    image: 'css.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
     mastery: 95, 
  },
  {
    name: 'JavaScript',
    image: 'js.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
     mastery: 40, 
  },
];

export const skillList = [ //this is backend skill list
  {
    name: 'Node.js',
    image: 'nodejs.svg',
    url: 'https://nodejs.org/en/about',
    mastery: 20,
  },
  
  {
    name: 'PostgreSQL',
    image: 'postgresql.svg',
    url: 'https://www.postgresql.org/',
    mastery: 0,
  },
  {
    name: 'Prisma',
    image: 'prisma.svg',
    url: 'https://www.prisma.io/about',
    mastery: 0,
  },
]

export const tools = [
  {
    name: 'Git',
    image: 'git.svg',
    url: 'https://git-scm.com/',
    mastery: 80,
  },
  {
    name: 'Figma',
    image: 'figma.svg',
    url: 'https://figma.com/',
    mastery: 70,
  },
  {
    name: 'Github',
    image: 'githubLogo.svg',
    url: 'https://figma.com/',
    mastery: 80,
  },
]

export default function Skills() {
  return (
    <section className="p-6 lg:mx-40" 
             id='skills'>
              <div className='lg:flex '>
  <h2
  className="text-3xl font-bold mb-4 pb-3 text-center border-b-[0.1px] 
             lg:border-0 lg:text-start lg:text-4xl"
  style={{ borderColor: "var(--color-quaternary)" }}
>
  Skills
</h2>
  <Line/>
  </div>


  <div className="mt-7">
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">Front-End</h2>
      {skills.map((skill) => (
        <Link 
          key={skill.name} 
          href={skill.url} 
          target="_blank"
        >
          <div className="justify-between my-7">
            <div>
              <SkillList skills={[skill]} />
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Back-End</h2>

        </div>
        <SkillList skills={skillList}/>
         <div>
        <h2 className="text-xl font-bold mb-4 text-center">Tools</h2>
        <SkillList skills={tools}/>
      </div>
</section>

  );
}
