import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/jeanesa-dugang-0156bb256/",
    github: "https://github.com/Jeanesa",
    discord: "https://discord.com/users/801654370118139924",
};

interface SocialLinksProps {
    className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
    return (
        <div className={`flex gap-4 text-3xl ${className || "text-[#BD2667]"}`}>
            <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaLinkedin />
            </a>

            <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaGithub />
            </a>

            <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaDiscord />
            </a>
        </div>
    );
}