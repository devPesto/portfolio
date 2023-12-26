import { Link } from "next/link";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className="text-white fixed bottom-0 border-t w-full border-[#3c3836]">
            <div className="flex flex-row text-2xl gap-10 mx-10 p-10">
                <div className="mr-auto"></div>
                <a href="https://github.com/devPesto"><FaGithub/></a>
                <a href=""><FaXTwitter/></a>
                <a href=""><FaLinkedinIn/></a>
            </div>
        </footer>
    );
}

function Social({href, children}) {
    return <Link href={href}>{children}</Link>
}
