import Image from "next/image";
import Footer from "@/components/Footer";
import ToolBadge from "@/components/ToolBadge";
import BackButton from "@/components/BackButton";
import ProjectGallery from "@/components/ProjectGallery";
import { PROJECTS_DATA } from "@/data/projects";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = PROJECTS_DATA.find((p) => p.slug === slug);

    if (!project) return notFound();

    return (
        <div className="relative w-full overflow-hidden">
            {/* Header */}
            <section className="max-w-7xl mx-auto mt-20 px-4">
                <div className="flex flex-1 items-center justify-between">
                    <BackButton />

                    <div className="bg-[#BD2667] text-white px-4 py-2 inline-block rounded-full mt-6 text-sm font-semibold">
                        &lt;&gt;  FEATURED WORK
                    </div>
                </div>

                <h1 className="text-5xl font-bold text-black mt-4">
                    {project.title}
                </h1>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tools.map((tool) => (
                        <ToolBadge key={tool} label={tool} />
                    ))}
                </div>

                <p className="text-gray-600 mt-3">{project.date}</p>
                <p className="text-gray-600">
                    <b>Project Role:</b> {project.role}
                </p>
            </section>

            {/* Image Section */}
            <section className="max-w-7xl mx-auto mt-10 px-4">
                {project.repositoryUrl ? (
                    <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block group"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1400}
                            height={600}
                            priority
                            style={{ width: "100%", height: "auto" }}
                            className="rounded-xl object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 
                            group-hover:opacity-100 transition 
                            rounded-xl flex items-center justify-center">
                            <span className="text-white font-semibold text-lg">
                                View Repository →
                            </span>
                        </div>
                    </a>
                ) : (

                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1400}
                        height={600}
                        priority
                        style={{ width: "100%", height: "auto" }}
                        className="rounded-xl object-cover"
                    />
                )}
            </section>

            {/* Description */}
            <section className="grid max-w-7xl mx-auto mt-2 px-4 gap-8">
                <div>
                    <h3 className="mt-4 mb-4 font-semibold text-lg text-black">
                        Project Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        {project.description}
                    </p>

                </div>
                <div>
                    <h3 className="mt-8 font-semibold text-lg text-black">
                        Key Contributions
                    </h3>

                    <ul className="mt-4 space-y-2 list-disc list-inside">
                        {project.contributions.map((contribution, index) => (
                            <li key={index} className="text-gray-700">
                                {contribution}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>



            <section className="max-w-7xl mx-auto mt-10 px-4">
                <ProjectGallery images={project.images} title={project.title} />
            </section>

            <section className="mt-20">
                <Footer />
            </section>
        </div>
    );
}
