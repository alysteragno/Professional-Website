import SocialLinks from "./socialLinks";
import { NTR } from "next/font/google";
import Link from "next/link"; 
import Image from "next/image";

const ntr = NTR({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const socmeds = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/alysteragno/",
        icon: "/instagramLogo.svg",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/alysteragno",
        icon: "/facebookLogo.svg",
    },
]
export default function Footer() {
  return (
    <footer
      className={`${ntr.className} gap-2 p-6 w-full text-md 
              lg:flex lg:items-center lg:justify-center lg:p-9`} 
    >
      <div className="flex items-center gap-4 mb-3 sm:flex sm:justify-center sm:items-center">
       
        {socmeds.map(({ name , url, icon }) => (
          <Link
            key={name}
            href={url}
            target="_blank" 
            aria-label={`Visit my ${name} profile`}
          >
            <Image
              src={icon}
              width={30}
              height={30} 
              alt="Social Media Logo"
              className="lg:w-6.5 lg:w-6.5"
            />
            </Link>
        ))}
         <SocialLinks />
      </div>
      <div className="lg:flex lg:flex-col">
        <div className="sm:flex sm:justify-center sm:items-center">
          <Link 
              href="https://www.linkedin.com/in/alyster-marasigan-9314692ba/" target="_blank" rel="linkedin link">
              <h3 className="hover:underline font-bold lg:text-md">Developed by Alyster A.</h3>
          </Link>
        </div>
        <div className="lg:flex">
          <h4 className="sm:flex sm:justify-center lg:text-sm
                        ">All rights reserved.</h4>
        </div>
      </div>
    </footer>
  );
}
