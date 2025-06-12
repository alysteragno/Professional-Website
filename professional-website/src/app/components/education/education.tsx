'use client '
import Image from 'next/image'
import Link from 'next/link'
import { schools } from './arraySchool' 

export default function Education() {
    return (
        <section className="p-6 my-35" 
            id='education'>
            <h2 className="text-3xl font-bold mb-4 pb-3 text-center border-b-[0.1px]"
                style={{ borderColor: "var(--color-quaternary)" }}>
                Education
        </h2>
        <div className="flex flex-col justify-center items-center">
            {schools.map((school) => (
                <Link
                    prefetch = {true}
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
                      className='m-auto mt-5'
                    />
                    <div className='text-center mt-2'>
                        <h2 className='bold text-primary text-xl'> {school.name}   </h2>
                        <h3 className= 'bold text-primary'> {school.name2} </h3>
                        <Link
                          href={school.fieldUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                        <h2 className='bold text-secondary text-lg'> 
                            {school.field} 
                        </h2>
                        <h2 className='bold text-tertiary text-lg'>  
                            {school.major}
                        </h2>
                        <h4 className='text-primary'>
                            {school.year}
                        </h4>
                        </Link>
                    </div>
                </Link>
            ))}
        </div>
        </section>
    )
}