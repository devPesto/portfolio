import Link from "next/link";
import Section from "./section";
import { italianno } from "../layout";

export function Navigation() {
    return (
        <nav className="border-b border-[#3c3836] text-white shadow-lg">
            <Section floatUp={false} delay={0.1}>
                <div className="flex text-lg gap-5 py-10 px-10">
                <h1 className={`text-4xl mr-auto ${italianno.className}`}>Amir S.</h1>
                <NavLink href={""}>Home</NavLink>
                <NavLink href={""}>Projects</NavLink>
                <NavLink href={""}>Contact</NavLink>
                </div>
            </Section>
        </nav>
    );
}

function NavLink({href, children}) {
    return <Link href={href} className="hover:underline hover:underline-offset-8">{children}</Link>
}
