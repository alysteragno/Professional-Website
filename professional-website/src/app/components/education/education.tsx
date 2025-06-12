'use client';
import Image from 'next/image';
import Link from 'next/link';
import { schools } from './arraySchool'; 
import Line from '../line';

export default function Education() {
    return (
        <section className="p-6" id="education">
            <div className="lg:flex lg:justify-start lg:pt-4">
                <h2
                    className="text-3xl font-bold mb-4 lg:pb-0 pb-3 text-center  lg:text-4xl border-b-[0.1px] lg:border-0"
                    style={{ borderColor: "var(--color-quaternary)" }}
                >
                    Education
                </h2>
                <Line />
            </div>

            <div className="flex flex-col justify-center items-center">
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
                            className="m-auto mt-5"
                        />
                        <div className="text-center mt-2">
                            <h2 className="bold text-primary text-xl">{school.name}</h2>
                            <h3 className="bold text-primary">{school.name2}</h3>

                            <a
                                href={school.fieldUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                <h2 className="bold text-secondary text-lg">{school.field}</h2>
                            </a>

                            <h2 className="bold text-tertiary text-lg">{school.major}</h2>
                            <h4 className="text-primary">{school.year}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
