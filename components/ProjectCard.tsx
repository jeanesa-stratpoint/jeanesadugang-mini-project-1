"use client";
import { useRouter } from "next/navigation";
import ToolBadge from "./ToolBadge";

interface ProjectCardProps {
    title: string;
    image: string;
    tools: string[];
    slug: string;
}

export default function ProjectCard({
    title,
    image,
    tools,
    slug,
}: ProjectCardProps) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/projects/${slug}`)}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white 
                        shadow-xl transition-all duration-500 hover:scale-[1.02]   
                        border-2 border-transparent hover:border-[#BD2667] min-h-125 flex flex-col"
        >
            <div className="h-64 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-5 flex flex-col flex-1">
                <span className="block font-semibold text-gray-700 text-2xl">
                    {title}
                </span>

                <div className="mt-auto flex flex-wrap gap-2">
                    {tools.map((tool) => (
                        <ToolBadge key={tool} label={tool} />
                    ))}
                </div>
            </div>
        </div>
    );
}
