import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "My Portfolio | Jeanesa Dugang",
	description: "Web Developer and Designer Portfolio",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} font-sans bg-[#050505] text-white antialiased`}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
