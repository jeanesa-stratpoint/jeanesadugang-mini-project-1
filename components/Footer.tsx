import SocialLinks from "./SocialLinks";
import { MdSend } from "react-icons/md";


export default function Footer() {
    return (
        <section className="w-full bg-[#F3F3F3] py-10">
            <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">

                {/* LEFT */}
                <div>
                    <h1 className="text-4xl text-[#585858] font-bold leading-tight max-w-md">
                        Ready to take your idea to the next level?
                    </h1>

                    <h1 className="text-4xl font-bold text-[#BD2667] mb-4">
                        Let's work together!
                    </h1>

                    <p className="text-[#686868] max-w-xl">
                        Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and innovative ideas.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-start gap-5">
                    <div className="bg-[#D9D9D9] text-[#787878] px-5 py-2 rounded-2xl text-sm font-bold">
                        LET'S CONNECT
                    </div>

                    <SocialLinks />
                    <div className="mt-15">
                        <a
                            href="/contact"
                            className="flex items-center gap-2 bg-[#BD2667] 
                                        text-white px-5 py-2 rounded-sm 
                                        hover:opacity-90 transition font-bold"
                        >
                            <MdSend className="text-lg" />
                            CONTACT ME
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
