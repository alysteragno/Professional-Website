import Image from 'next/image';
import Link from 'next/link';
import Animation from './AnimatedProgress';

type Skill = {
  name: string;
  image: string;
  url: string;
  mastery?: number;
};

type SkillListProps = {
  skills: Skill[];
};

export default function SkillList({ skills }: SkillListProps) {
  return (
    <div className="space-y-4">
      {skills.map((skill) => (
        <Link 
          key={skill.name}
          href={skill.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Learn more about ${skill.name}`}
          className="block"
        >
          <div className="flex items-center justify-between my-2">
            <div className="flex items-center">
              <Image
                src={`/skills/${skill.image}`}
                alt={skill.name}
                width={40}
                height={40}
                className="hover:scale-110 transition-transform duration-200"
              />
              <span className="ml-4">{skill.name}</span>
            </div>
            {skill.mastery !== undefined && (
              <Animation mastery={skill.mastery} />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
