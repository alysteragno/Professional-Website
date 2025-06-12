'use client';
import Image from 'next/image';
import Link from 'next/link';
import { schools } from './arraySchool'; 
import ComponentName from '../sectionName'

export default function Education() {
    return (
        <section className="p-6" id="education">
            <div className="lg:flex lg:justify-center lg:pt-4">
                <ComponentName name="Education" />
            </div>

            <div className="flex flex-col justify-center items-center 
                            lg:flex">
                {schools.map((school) => (
                    <Link
                        prefetch={true}
                        key={school.name}
                        href={school.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center"
                    >
                        <Image
                            src={school.image}
                            width={100}
                            height={100}
                            alt={school.name}
                            className="m-auto mt-5 lg:m-3 lg:w-[130px]"
                        />
                        <div className="text-center mt-2">
                            <h2 className="bold text-primary text-xl lg:text-start lg:ml-3">{school.name}</h2>
                            <h3 className="bold text-primary lg:text-start lg:ml-3">{school.name2}</h3>

                            <a
                                href={school.fieldUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                <h2 className="bold text-secondary text-lg lg:text-start lg:ml-3">{school.field}</h2>
                            </a>

                            <h2 className="bold text-tertiary text-lg lg:text-start lg:ml-3">{school.major}</h2>
                            <h4 className="text-primary lg:text-start lg:ml-3 lg:mb-20">{school.year}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
