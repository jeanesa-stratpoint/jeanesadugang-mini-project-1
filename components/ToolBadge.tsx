interface ToolBadgeProps {
    label: string;
}

export default function ToolBadge({ label }: ToolBadgeProps) {
    return (
        <span
            className="inline-block bg-[#FFE5F0] text-[#BD2667] text-sm px-3 py-1 rounded-full"
        >
            {label}
        </span>
    );
}
