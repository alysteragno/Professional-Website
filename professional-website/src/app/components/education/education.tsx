import Image from 'next/image'
import Link from 'next/link'
import { schools } from './arraySchool' 
export default function Education() {
    return (
        <section className="p-6" 
            id='education'>
            <h2 className="text-3xl font-bold mb-4 pb-3 text-center border-b-[0.1px]"
                style={{ borderColor: "var(--color-quaternary)" }}>
                Education
        </h2>
        <div>
            {schools.map((school) => (
                <Link
                    key={school.name}
                    href={school.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                      src={school.image}
                      width={100}
                      height={100}
                      alt={school.name}
                    />
                </Link>
            ))}
        </div>
        </section>
    )
}