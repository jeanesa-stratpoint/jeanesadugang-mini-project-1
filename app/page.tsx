import Image from "next/image";
import profilePic from "@/public/jeanesa-photo.png";
import SocialLinks from "@/components/SocialLinks";

export default function Homepage() {
	return (
		<div className="relative w-full overflow-hidden ">
			<section className="relative z-0 bg-white items-center justify-center pt-40 w-full ">
				{/* Soft Background Glows*/}
				<div className="absolute inset-0 z-0 pointer-events-none">
					<div className="absolute top-[-10%] left-[-30%] w-[60%] h-[60%] bg-[#BD2667]/30 blur-[180px] rounded-full" />
					<div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-[#6D18B4]/30 blur-[180px] rounded-full" />
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
					<div className="flex-1 space-y-6">
						<h2 className="text-xl font-medium text-black">Hello There!</h2>
						<h1 className="text-6xl font-extrabold text-black">
							I'm <span className="text-[#BD2667]">Jeanesa Dugang</span>
						</h1>
						<p className="text-2xl font-semibold text-gray-800">
							Software Developer • UI/UX Designer
						</p>

						<div className="flex gap-4 pt-4">
							<a
								href="/projects"
								className="px-6 py-2 border-2 border-[#BD2667] text-[#BD2667] 
											font-bold rounded-lg hover:bg-[#BD2667] 
											hover:text-white transition-all text-center"
							>
								Discover my creation
							</a>

							<a
								href="/contact"
								className="px-6 py-2 bg-[#BD2667] text-white 
											font-bold rounded-lg hover:bg-[#8e1d4d] 
											transition-all text-center"
							>
								Let's work together
							</a>
						</div>

						<div className="pt-8 space-y-3 mb-10">
							<p className="font-bold text-black">Let's connect!</p>
							<div className="flex gap-4 text-3xl text-[#BD2667]">
								<SocialLinks />
							</div>
						</div>
					</div>

					<div className="relative w-80 h-96 md:w-112.5 md:h-150 self-end">
						<Image
							src={profilePic}
							alt="Jeanesa"
							fill
							className="object-contain object-bottom z-10"
						/>
					</div>
				</div>

			</section>

			{/* Black Rectangle Section */}
			<section className="w-full h-40 bg-black"></section>
		</div>
	);
}
