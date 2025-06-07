import Image from 'next/image';
import Link from 'next/link';

type Skill = {
  name: string;
  image: string;
  url: string;
};

type SkillListProps = {
  skills: Skill[];
};

export default function SkillList({ skills }: SkillListProps) {
  return (
    <div>
      {skills.map((skill) => (
        <Link 
            key={skill.name} 
            href={skill.url} 
            target="_blank"
            rel="noopener noreferrer">
          <div className="flex items-center mb-4">
            <Image
              src={`/skills/${skill.image}`}
              alt={skill.name}
              width={40}
              height={40}
              className="hover:scale-115 hover:transition-transform duration-200"
            />
            <span className="ml-4">
                {skill.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
