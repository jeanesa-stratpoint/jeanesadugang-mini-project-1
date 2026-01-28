"use client";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            </div>

            <section className="relative w-full max-w-7xl mx-auto mt-30 px-4 sm:px-6 lg:px-8">

                <div>
                    <h1 className="text-4xl font-bold text-black"><span className="text-[#BD2667]">&lt;/&gt;</span> Projects </h1>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS_DATA.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            image={project.image}
                            tools={project.tools}
                            slug={project.slug}
                        />
                    ))}
                </div>
            </section>

            <section className="mt-10">
                <Footer></Footer>
            </section>

        </div>
    );
};