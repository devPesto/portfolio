import Link from "next/link";
import Section from "./section";

export function Navigation() {
    return (
        <nav className="border-b border-white text-white shadow-lg">
            <Section floatUp={false} delay={0.1}>
                <div className="flex text-lg justify-end gap-5 py-10 pr-10">
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
