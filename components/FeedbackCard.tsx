import { FaStar } from "react-icons/fa";

interface FeedbackCardProps {
    name: string;
    feedback: string;
}

export default function FeedbackCard({ name, feedback }: FeedbackCardProps) {
    return (
        /* Gradient border wrapper */
        <div className="p-0.5 rounded-2xl bg-linear-to-r from-[#0082DB] via-[#A1114F] to-[#6D18B4] h-full">
            <div className="bg-white p-6 rounded-[calc(1rem-2px)] h-full flex flex-col">

                {/* Header: Name and Stars */}
                <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-xl uppercase tracking-tight text-black">
                        {name}
                    </h4>

                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-[#FFC107] text-xl" />
                        ))}
                    </div>
                </div>

                {/* Feedback Text */}
                <div className="text-gray-700 leading-relaxed">
                    <p>{feedback}</p>
                </div>
            </div>
        </div>

    );
}