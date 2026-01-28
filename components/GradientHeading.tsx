type GradientVariant = "blue" | "pinkPurple" | "purplePink";

type GradientHeadingProps = {
	children: React.ReactNode;
	variant?: GradientVariant;
	as?: "h1" | "h2" | "h3" | "h4";
	className?: string;
};

const gradientStyles: Record<GradientVariant, string> = {
	blue: "bg-gradient-to-r from-[#0082DB] from-[25%] to-[#00B7F7]",
	pinkPurple: "bg-gradient-to-r from-[#df2f7b] to-[#8E2DE2]",
	purplePink: "bg-gradient-to-r from-[#a1114f] from-[50%] to-[#731aaf]",
};

export default function GradientHeading({
	children,
	variant = "blue",
	as: Tag = "h4",
	className = "",
}: GradientHeadingProps) {
	return (
		<Tag
			className={`
        ${gradientStyles[variant]}
        bg-clip-text text-transparent
        text-2xl font-bold mb-3
        ${className}
      `}
		>
			{children}
		</Tag>
	);
}

