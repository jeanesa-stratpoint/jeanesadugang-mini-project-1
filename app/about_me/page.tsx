"use client";
import SkillCard from "@/components/SkillCard";
import GradientHeading from "@/components/GradientHeading";
import ExperienceItem from "@/components/ExperienceItem";
import HobbyCard from "@/components/HobbyCard";
import HobbyModal from "@/components/HobbyModal";
import Footer from "@/components/Footer";
import { useState } from "react";
import { HOBBIES_DATA } from "@/data/hobbies";

export default function AboutMe() {
    const [selectedHobby, setSelectedHobby] = useState<typeof HOBBIES_DATA[0] | null>(null);
    return (
        <div className="relative w-full overflow-hidden">
            {/* DESCRIPTION */}
            <section>
                <div className="relative w-full max-w-7xl mx-auto mt-30 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-black"><span className="text-[#BD2667]">&lt;/&gt;</span> About <span className="text-[#BD2667]">me</span></h1>
                    <p className="mt-4 text-lg text-[#BD2667]">
                        I love building projects that are functional,
                        easy to use, and created with purpose. With experience in frontend,
                        backend, and a touch of AI, I enjoy solving problems and turning ideas into
                        something real. I’m always learning, improving, and sharing what I know,
                        because for me, good tech isn’t just about writing code, it’s about clarity,
                        collaboration, and creativity.
                    </p>
                </div>
            </section>

            {/* TECHNICAL SKILLS SECTION */}
            <section className="w-full bg-black mt-20 py-20 relative">

                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] 
                                    bg-[#BD2667] opacity-40 blur-[120px] md:blur-[180px] 
                                    rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] 
                                    bg-[#6D18B4] opacity-40 blur-[120px] md:blur-[180px] 
                                    rounded-full mix-blend-screen" />
                </div>

                <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-white text-2xl italic font-light opacity-80">
                            Exploring the Tools Behind My Works
                        </h3>
                        <GradientHeading variant="pinkPurple" as="h2" className="text-4xl">Technical Skills</GradientHeading>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative">
                        {/* The Vertical Line (Desktop only) */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 
                                        bg-linear-to-b from-purple-500 via-fuchsia-500 
                                        to-blue-500 hidden md:block" />

                        <div className="space-y-20 md:space-y-32">
                            {/* Design & Creative Tools */}
                            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                                {/* Dot on Line */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 
                                                bg-[#8E2DE2] rounded-full border-4 
                                                border-black z-10 hidden md:block" />

                                <div className="md:text-right md:pr-16 order-1">
                                    <GradientHeading variant="blue" className="italic">Design and Creative Tools</GradientHeading>
                                    <p className="text-gray-300 max-w-sm md:ml-auto">
                                        Tools I use to craft intuitive interfaces and engaging
                                        visuals, turning ideas into <b>user-friendly designs</b>.
                                    </p>
                                </div>
                                <div className="flex gap-4 md:pl-16 order-2">
                                    <SkillCard name="Figma" icon="/tools/figma.svg" />
                                    <SkillCard name="Canva" icon="/tools/canva.svg" />
                                </div>
                            </div>

                            {/* Web Development & Programming (Reversed) */}
                            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                                <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 
                                                bg-[#8E2DE2] rounded-full border-4 
                                                border-black z-10 hidden md:block" />

                                <div className="md:text-left md:pl-16 order-1 md:order-2">
                                    <GradientHeading variant="blue" className="italic">Web Development & Programming</GradientHeading>
                                    <p className="text-gray-300 max-w-sm">
                                        Technologies I apply to build dynamic, scalable, and <b>efficient</b> applications across frontend, backend, and AI/ML.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4 md:pr-16 order-2 md:order-1 w-fit ml-auto">
                                    <SkillCard name="HTML5" icon="/tools//html.svg" />
                                    <SkillCard name="CSS" icon="/tools/css.svg" />
                                    <SkillCard name="JavaScript" icon="/tools/javascript.svg" />
                                    <SkillCard name="React.js" icon="/tools/react.svg" />
                                    <SkillCard name="Node.js" icon="/tools/node.svg" />
                                    <SkillCard name="Python - Flask" icon="/tools/python.svg" />
                                    <SkillCard name="Google AI Studio" icon="/tools/google_ai.svg" />
                                    <SkillCard name="Google Colab" icon="/tools/google_colab.svg" />
                                </div>
                            </div>

                            {/* Development Tools & Databases */}
                            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                                <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 
                                                bg-[#8E2DE2] rounded-full border-4 
                                                border-black z-10 hidden md:block" />

                                <div className="md:text-right md:pr-16 order-1">
                                    <GradientHeading variant="blue" className="italic">Development Tools & Databases</GradientHeading>
                                    <p className="text-gray-300 max-w-sm md:ml-auto">
                                        Essential platforms for version control, API testing,
                                        and managing structured and unstructured data securely.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-4 md:pl-30 order-2 w-fit">
                                    <SkillCard name="Git/Github" icon="/github.svg" className="text-black" icon2="/tools/git.svg" />
                                    <SkillCard name="MongoDB" icon="/tools//mongodb.svg" />
                                    <SkillCard name="PostgreSQL" icon="/tools//postgresql.svg" />
                                    <SkillCard name="Postman" icon="/tools/postman.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EDUCATION AND WORK SECTION */}
            <section>
                <div className="relative w-full max-w-7xl mx-auto mt-30 px-4 sm:px-6 lg:px-8">
                    <h3 className="text-black text-2xl italic font-light opacity-80 text-center">
                        Where I've Learned and Applied My Skills
                    </h3>
                    <GradientHeading variant="purplePink" as="h2" className="text-4xl text-center">
                        Education • Work
                    </GradientHeading>

                    <div className="w-full bg-white my-10 border border-[#B5B5B5] shadow-lg rounded-3xl">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="space-y-2">

                                <ExperienceItem
                                    logo="/experience/stratpoint.png"
                                    organization="Stratpoint Global Outsourcing Inc."
                                    role="Software Engineer Intern"
                                    date="January 2026 - Present"
                                />

                                <ExperienceItem
                                    logo="/experience/tup.png"
                                    organization="Technological University of the Philippines - Manila"
                                    role="Bachelor of Science in Computer Science"
                                    date="August 2022 - Present"
                                    activities={[
                                        {
                                            name: "Google Developer Groups on Campus - TUP Manila",
                                            role: "Member",
                                            date: "2024-2025"
                                        },
                                        {
                                            name: "TUP Grayhawks Robotics",
                                            role: "Head of Linkage Committee",
                                            date: "2024-2025"
                                        },
                                    ]}
                                />

                                <ExperienceItem
                                    logo="/experience/zuitt.png"
                                    organization="Zuitt Coding Bootcamp"
                                    role="Bootcamp Participant - Basic Web Development Workshop"
                                    date="November 2024"
                                />

                                <ExperienceItem
                                    logo="/experience/olfu.png"
                                    organization="Our Lady of Fatima University - Valenzuela"
                                    role="Science, Technology, Engineering, and Mathematics (STEM)"
                                    date="2020 - 2022"
                                    extraInfo="With High Honors"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  HOBBIES */}
            <section className="pb-20">
                <div className="relative w-full max-w-7xl mx-auto mt-30 px-4 sm:px-6 lg:px-8">
                    <h3 className="text-black text-2xl italic font-light opacity-80 text-center">
                        Beyond the code
                    </h3>
                    <GradientHeading variant="purplePink" as="h2" className="text-4xl text-center">
                        Hobbies
                    </GradientHeading>

                    {/* 3. The Hobby Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                        {HOBBIES_DATA.map((hobby) => (
                            <HobbyCard
                                key={hobby.id}
                                title={hobby.title}
                                image={hobby.image}
                                onClick={() => setSelectedHobby(hobby)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* The Modal (Controlled by state) */}
            <HobbyModal
                isOpen={!!selectedHobby}
                onClose={() => setSelectedHobby(null)}
                data={selectedHobby}
            />

            <section>
                <Footer />
            </section>
        </div>
    );
};