import SocialLinks from "./socialLinks";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-2 p-4  w-full pb-safe text-md">
            <div className="flex items-center gap-4">
                <SocialLinks />
            </div>
            <div>
                <h3>Developed by Alyster A.</h3>
            </div>
            <div>
                 <h4>All rights reserved.</h4>
            </div>
        </footer>
    );
}