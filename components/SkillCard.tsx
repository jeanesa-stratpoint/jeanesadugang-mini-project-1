// components/SkillCard.tsx

interface SkillProps {
	name: string;
	icon: string;
	icon2?: string;
	className?: string;
}

export default function SkillCard({ name, icon, icon2, className }: SkillProps) {
	return (
		<div
			className={`flex flex-col items-center justify-center bg-gray-200 rounded-2xl p-2 w-28 h-32 shadow-lg shrink-0 relative ${className}`}
		>
			{icon2 ? (
				// Two icons layout
				<>
					{/* White background for icons */}
					<div className="w-full flex-1 bg-white rounded-lg relative mb-2 flex items-center justify-center">
						<div className="absolute top-2 left-2 w-12 h-12 flex items-center justify-center">
							<img
								src={icon}
								alt={name}
								className="w-15 h-15 object-contain"
							/>
						</div>
						<div className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center">
							<img
								src={icon2}
								alt="secondary"
								className="w-15 h-15 object-contain"
							/>
						</div>
					</div>
					<span className="text-black text-[12.5px] sentence-case tracking-tighter text-center leading-tight">
						{name}
					</span>
				</>
			) : (
				// Single icon layout
				<>
					<div className="w-full flex-1 bg-white rounded-lg relative mb-2 flex items-center justify-center">
						<div className="w-15 h-15 mb-2 flex items-center justify-center">
							<img
								src={icon}
								alt={name}
								className="max-w-full max-h-full object-contain"
							/>
						</div>
					</div>
					<span className="text-black text-[12.5px] sentence-case tracking-tighter text-center leading-tight">
						{name}
					</span>
				</>
			)}
		</div>
	);
}