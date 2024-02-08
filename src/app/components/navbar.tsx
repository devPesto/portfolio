import Link from "next/link";
import Section from "./section";

export const Navigation = () => (
    <nav className="border-b border-[#3c3836] shadow-lg">
        <Section floatUp={false} delay={0.75}>
            <div className="flex text-lg gap-8 p-10 justify-end">
                <NavLink href={""} name={"Home"} />
                <NavLink href={""} name={"About"} />
                <NavLink href={""} name={"Projects"} />
                <NavLink href={""} name={"Blog"} />
            </div>
        </Section>
    </nav>
);

interface LinkProps {
    href: string;
    name: string;
}

const NavLink = ({ href, name }: LinkProps) => {
    return (
        <Link href={href} className="hover:underline hover:underline-offset-8">
            {name}
        </Link>
    );
};
