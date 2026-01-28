// components/HobbyCard.tsx
interface HobbyCardProps {
    title: string;
    image: string;
    onClick: () => void;
}

export default function HobbyCard({ title, image, onClick }: HobbyCardProps) {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-[#ffffff] shadow-md transition-all hover:scale-[1.02]"
        >
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="py-4 text-center">
                <span className="text-xl font-medium text-black">{title}</span>
            </div>
        </div>
    );
}