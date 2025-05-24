import Image from "next/image";

export default function LightMode() {
    return (
        <Image
            src="/lightmodeLogo.png"
            width={30}
            height={30}
            alt={"Light Mode Logo"}
        />
    );
};