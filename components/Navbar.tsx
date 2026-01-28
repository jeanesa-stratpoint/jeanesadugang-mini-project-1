"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header className="fixed top-6 left-0 w-full z-50 flex justify-center">
            <nav className="gradient-border bg-white rounded-full px-8 py-3 flex gap-8">
                <a href="/" className={`text-sm uppercase tracking-wider transition ${isActive("/") ? "text-[#BD2667] font-bold" : "text-black"}`}>
                    Home
                </a>
                <a href="/about_me" className={`text-sm uppercase tracking-wider transition ${isActive("/about_me") ? "text-[#BD2667] font-bold" : "text-black"}`}>
                    About Me
                </a>
                <a href="/projects" className={`text-sm uppercase tracking-wider transition ${isActive("/projects") ? "text-[#BD2667] font-bold" : "text-black"}`}>
                    Projects
                </a>
                <a href="/feedback" className={`text-sm uppercase tracking-wider transition ${isActive("/feedback") ? "text-[#BD2667] font-bold" : "text-black"}`}>
                    Feedback
                </a>
                <a href="/contact" className={`text-sm uppercase tracking-wider transition ${isActive("/contact") ? "text-[#BD2667] font-bold" : "text-black"}`}>
                    Contact
                </a>
            </nav>
        </header>
    );
}
