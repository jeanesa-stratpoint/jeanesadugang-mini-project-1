"use client";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css"; // connects the tailwind to the project
import { usePathname } from "next/navigation";

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "My Portfolio | Jeanesa Dugang",
//   description: "Web Developer and Designer Portfolio",
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	const isActive = (path: string) => {
		if (path === "/" && pathname === "/") return true;
		if (path !== "/" && pathname.startsWith(path)) return true;
		return false;
	};

	return (
		<html lang="en">
			<body
				className={`${poppins.variable} font-sans bg-[#050505] text-white antialiased`}
			>
				{/* Floating Navbar Wrapper */}
				<header className="fixed top-6 left-0 w-full z-50 flex justify-center ">
					<nav className="gradient-border bg-white rounded-full px-8 py-3 flex gap-8">
						<a
							href="/"
							className={`text-sm uppercase tracking-wider transition ${isActive("/") ? "text-[#BD2667] font-bold" : "text-black"
								}`}
						>
							Home
						</a>
						<a
							href="/about_me"
							className={`text-sm uppercase tracking-wider transition ${isActive("/about_me")
								? "text-[#BD2667] font-bold"
								: "text-black"
								}`}
						>
							About Me
						</a>
						<a
							href="/projects"
							className={`text-sm uppercase tracking-wider transition ${isActive("/projects")
								? "text-[#BD2667] font-bold"
								: "text-black"
								}`}
						>
							Projects
						</a>
						<a
							href="/feedback"
							className={`text-sm uppercase tracking-wider transition ${isActive("/feedback")
								? "text-[#BD2667] font-bold"
								: "text-black"
								}`}
						>
							Feedback
						</a>
						<a
							href="/contact"
							className={`text-sm uppercase tracking-wider transition ${isActive("/contact") ? "text-[#BD2667] font-bold" : "text-black"
								}`}
						>
							Contact
						</a>
					</nav>
				</header>

				<main>{children}</main>
			</body>
		</html>
	);
}
