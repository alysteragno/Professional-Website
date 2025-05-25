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
      className={`${ntr.className} gap-2 p-6 w-full text-md`} 
    >
      <div className="flex items-center gap-4 mb-3">
       
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
            />
            </Link>
        ))}
         <SocialLinks />
      </div>
      <div>
        <Link 
            href="https://www.linkedin.com/in/alyster-marasigan-9314692ba/" target="_blank" rel="linkedin link">
            <h3 className="hover:underline font-bold">Developed by Alyster A.</h3>
        </Link>
      </div>
      <div>
        <h4>All rights reserved.</h4>
      </div>
    </footer>
  );
}
