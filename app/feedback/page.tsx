import Footer from "@/components/Footer";
import FeedbackCard from "@/components/FeedbackCard";
import { FEEDBACK_DATA } from "@/data/feedback";

export default function FeedbackPage() {
    return (
        <div className="flex flex-col min-h-screen relative w-full overflow-hidden">
            <main className="grow">
                <section>
                    <div className="relative w-full max-w-7xl mx-auto mt-30 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold text-black mt-5 mb-5">
                            <span className="text-[#BD2667]">&lt;/&gt;</span> Feedback
                        </h1>
                        <p className="italic text-xl text-gray-600">
                            What People Say About Working with Me
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
                    {/* Use a grid to display multiple cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {FEEDBACK_DATA.map((item, index) => (
                            <FeedbackCard
                                key={index}
                                name={item.name}
                                feedback={item.feedback}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}