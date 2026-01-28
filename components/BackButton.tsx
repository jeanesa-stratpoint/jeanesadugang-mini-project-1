"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
    const router = useRouter();
    return (
        <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-black hover:text-[#BD2667] transition"
        >
            <FaArrowLeft className="text-2xl" />
            Back
        </button>
    );
}
