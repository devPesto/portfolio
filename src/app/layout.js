import { Inter, Italianno } from "next/font/google";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });
export const italianno = Italianno({ weight: "400", subsets: ["latin"]});

export const metadata = {
    title: "Amir Seman",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
