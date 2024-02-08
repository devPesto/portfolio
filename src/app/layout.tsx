import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/navbar";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
    title: "Amir Seman",
    description: "My portfolio page showcasing my projects and skills",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
