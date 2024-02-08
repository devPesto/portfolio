import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className="text-white fixed bottom-0 border-t w-full border-[#3c3836]">
            <div className="flex flex-row text-2xl gap-10 mx-10 p-10">
                <div className="ml-auto flex gap-4">
                    <FaGithub />
                    <FaXTwitter />
                    <FaLinkedinIn />
                </div>
            </div>
        </footer>
    );
}
