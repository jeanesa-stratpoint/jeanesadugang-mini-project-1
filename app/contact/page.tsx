"use client";
import { useState } from "react";
import { MdSend } from "react-icons/md";
import SocialLinks from "@/components/SocialLinks";


export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col relative w-full overflow-hidden bg-white">
            <section>
                <div className="relative w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-black mt-5 mb-5">
                        <span className="text-[#BD2667]">&lt;/&gt;</span> Contact
                    </h1>
                </div>
            </section>

            <section className="w-full bg-black mt-5 py-20 relative px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] 
                                    bg-[#BD2667] opacity-60 blur-[120px] 
                                    md:blur-[180px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] 
                                    bg-[#6D18B4] opacity-60 blur-[120px] 
                                    md:blur-[180px] rounded-full mix-blend-screen" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto 
                                bg-[#BD2667] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Left Side */}
                        <div className="p-8 md:p-16 flex flex-col justify-between">
                            <div className="py-15">
                                <h3 className="font-bold italic text-white text-3xl md:text-4xl mb-12">I'd love to hear from you...</h3>
                                <p className="text-white/90 text-lg max-w-md leading-relaxed">
                                    Please fill out the form with some info about your project and I will get back to you shortly.
                                </p>
                            </div>
                            <div className="mt-12">
                                <SocialLinks className="text-white" />
                            </div>
                        </div>

                        {/* Right Side: The Form */}
                        <div className="p-6 md:p-10">
                            <div className="bg-white rounded-2xl p-8 shadow-inner">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm text-gray-500 ml-1">Your Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full border-b border-gray-300 py-2 focus:outline-none 
                                                        focus:border-[#BD2667] transition-colors"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm text-gray-500 ml-1">Your Email</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full border-b border-gray-300 py-2 focus:outline-none 
                                                        focus:border-[#BD2667] transition-colors"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm text-gray-500 ml-1">Subject</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full border-b border-gray-300 py-2 focus:outline-none 
                                                        focus:border-[#BD2667] transition-colors"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm text-gray-500 ml-1">Message</label>
                                        <textarea
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full border border-gray-300 rounded-md p-3 mt-1 
                                                        focus:outline-none focus:ring-1 focus:ring-[#BD2667] 
                                                        focus:border-[#BD2667] transition-all resize-none"
                                        />
                                    </div>

                                    <div className="flex justify-end mt-4">
                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className="flex items-center gap-2 bg-[#6D18B4] 
                                                        text-white px-6 py-2.5 rounded-lg hover:bg-[#5a1496] 
                                                        transition-all shadow-md active:scale-95 disabled:opacity-50"
                                        >
                                            <MdSend className="text-xl -rotate-45" />
                                            {loading ? "Sending..." : "Send Message"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}