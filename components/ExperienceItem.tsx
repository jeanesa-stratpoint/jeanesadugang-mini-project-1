// components/ExperienceItem.tsx
import { Calendar } from "lucide-react";

interface Activity {
    name: string;
    role: string;
    date: string;
}

interface ExperienceProps {
    logo: string;
    organization: string;
    role: string;
    date: string;
    activities?: Activity[];
    extraInfo?: string;
}

export default function ExperienceItem({
    logo, organization, role, date, activities, extraInfo
}: ExperienceProps) {
    return (
        <div className="w-full border-b border-gray-200 py-10 last:border-0">
            <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                    <img src={logo} alt={organization} className="w-12 h-12 object-contain" />
                    <div>
                        <h4 className="text-xl font-bold text-black">{organization}</h4>
                        <p className="text-gray-500 text-lg">{role}</p>
                        {extraInfo && <p className="italic text-gray-400 mt-1">{extraInfo}</p>}
                    </div>
                </div>

                {/* Date Box */}
                <div className="flex items-center space-x-2 border 
                                border-gray-300 rounded-lg px-4 py-2 text-sm font-medium 
                                text-gray-700 bg-white shadow-sm min-w-45 justify-center">
                    <Calendar size={16} className="text-black" />
                    <span>{date}</span>
                </div>
            </div>

            {/* Nested Activities */}
            {activities && activities.length > 0 && (
                <div className="mt-6 ml-16 space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200" />

                    {activities.map((activity, idx) => (
                        <div key={idx} className="relative pl-8 flex justify-between items-center">
                            {/* Dot on the line */}
                            <div className="absolute -left-1.25 top-2 w-3 h-3 rounded-full 
                                            bg-[#D9D9D9] border border-white" />

                            <div>
                                <p className="font-semibold text-gray-800 italic">{activity.name}</p>
                                <p className="text-gray-500">{activity.role}</p>
                            </div>

                            {/* Smaller Date Box for activities */}
                            <div className="flex items-center space-x-2 border 
                                            border-gray-300 rounded-lg px-3 py-1 text-xs font-medium 
                                            text-gray-600 bg-white">
                                <Calendar size={12} />
                                <span>{activity.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}