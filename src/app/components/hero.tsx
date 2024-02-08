import { FaGithub, FaXTwitter } from "react-icons/fa6";
import Section from "./section";
import Link from "next/link";

export function Hero() {
    return (
        <div className="w-3/4 h-90 flex flex-col pl-20 mt-32">
            <Section delay={1.25}>
                <h1 className="text-5xl pb-5">Hi, my name is Amir 👋🏾</h1>
            </Section>

            <Section delay={1.75}>
                <p className="text-[1.2rem] leading-8 text-balance">
                    Aspiring software engineer
                </p>

                <div className="flex mt-4 gap-6">
                    <button
                        ref={""}
                        className="gap-2 rounded-full border-[1px] p-2 text-3xl"
                    >
                        <FaGithub/>
                    </button>

                    <Link
                        href={""}
                        className="flex-row flex items-center gap-2 rounded-full border-[1px] px-5 py-3"
                    >
                        <FaXTwitter /> Twitter
                    </Link>
                </div>
            </Section>
        </div>
    );
}
