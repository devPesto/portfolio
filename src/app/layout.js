import { Inter, Italianno } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const italianno = Italianno({ subsets: ["latin"]});

export const metadata = {
    title: "Amir Seman",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className + italianno.className}>
                {children}
            </body>
        </html>
    );
}
