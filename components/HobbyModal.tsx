interface HobbyModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        category: string;
        title: string;
        highlightWord: string;
        description: string[];
        images: string[];
    } | null;
}

export default function HobbyModal({ isOpen, onClose, data }: HobbyModalProps) {
    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative flex w-full max-w-5xl flex-col md:flex-row overflow-hidden rounded-3xl bg-white shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 z-10 text-2xl font-light text-gray-400 hover:text-black"
                >
                    ✕
                </button>

                {/* Left: Image Grid */}
                <div className="grid w-full grid-cols-2 gap-2 p-6 md:w-1/2">
                    {data.images.map((img, i) => (
                        <div key={i} className="aspect-square rounded-lg bg-gray-200 overflow-hidden">
                            <img src={img} className="h-full w-full object-cover" alt="Hobby detail" />
                        </div>
                    ))}
                </div>

                {/* Right: Text Info */}
                <div className="flex w-full flex-col p-8 md:w-1/2">
                    <span className="mb-4 italic text-gray-600">{data.category}</span>
                    <h2 className="mb-6 text-4xl font-bold text-black">
                        I love <span className="text-[#BD2667]">{data.highlightWord}</span>!
                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        {data.description.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}