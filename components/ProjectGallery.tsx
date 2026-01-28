// components/ProjectGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
    images?: string[];
    title: string;
}

export default function ProjectGallery({ images = [], title }: ProjectGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <h3 className="font-semibold text-lg text-black mb-4">
                Project Gallery
            </h3>
            <div className="flex gap-4 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="shrink-0 w-64 h-40 rounded-xl overflow-hidden relative cursor-pointer group"
                        onClick={() => setSelectedImage(img)}
                    >
                        <Image
                            src={img}
                            alt={`${title} image ${index + 1}`}
                            fill
                            className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                >
                    {/* Modal container */}
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-2 right-2 text-white text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
                        >
                            &times;
                        </button>

                        <Image
                            src={selectedImage}
                            alt="Selected project image"
                            width={1000}
                            height={600}
                            style={{ width: "100%", height: "auto" }}
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}

        </>
    );
}
