import Image from 'next/image';
import Link from 'next/link';

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
        >
          <div className="flex items-center justify-between my-2">
            {/* Left: Icon and Name */}
            <div className="flex items-center">
              <Image
                src={`/skills/${skill.image}`}
                alt={skill.name}
                width={40}
                height={40}
                className="hover:scale-115 hover:transition-transform duration-200"
              />
              <span className="ml-4">{skill.name}</span>
            </div>

            {/* Right: Mastery Progress */}
            {skill.mastery !== undefined && (
              <progress
                className="progress w-56 ml-auto"
                value={skill.mastery}
                max="100"
              />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
