'use client';
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alyster-marasigan-9314692ba/",    
        icon: "/linkedLogo.svg",    
    }, 
    {
        name: "Github",
        url: "https://github.com/alysteragno",    
        icon: "/githubLogo.svg",    
    }, 

];
export default function SocialLinks() {
  return (
    <>
    {socialLinks.map(({ name, url, icon }) => (
         <Link
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${name} profile`}
          >
            <Image
              src={icon}
              width={30}
              height={30}
              alt={`${name} Logo`}
              className="lg:w-9"
            />
          </Link>
    ))}
    </>
  );
}
