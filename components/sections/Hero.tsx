import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Github, ChevronsDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="h-full relative">
			<div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 px-10">
				<div className="mobile:mt-20 desktop:mt-10">
					<motion.div
						initial={{
							opacity: 0,
							y: 10,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 1,
							delay: 0.1,
							type: "spring",
						}}
						className="my-6 text-6xl font-bold">
						Welcome!
					</motion.div>
					<motion.div
						initial={{
							opacity: 0,
							y: 10,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 1,
							delay: 0.2,
							type: "spring",
						}}
						className="flex flex-row text-[1.5rem] text-yb font-bold">
						My Name is Sainath Kommagoni <br />a Full Stack Developer
						{/* <Hand className="pl-[8px] scale-[100%]" /> */}
					</motion.div>

					<div className="grid grid-cols-3 max-w-sm mt-6">
						<motion.div
							initial={{
								opacity: 0,
								y: 10,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 1,
								delay: 0.5,
								type: "spring",
							}}
							className="flex flex-row text-gray-950 justify-center items-center w-full px-[1rem] py-[0.50rem] bg-yb rounded-[8px] font-bold hover:cursor-pointer">
							<Link href={"mailto:jsreactdevsai@gmail.com"}>Email</Link>
						</motion.div>

						{/* vertical bar divider*/}
						<motion.div
							initial={{
								opacity: 0,
								y: 10,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 1,
								delay: 0.6,
								type: "spring",
							}}
							className="w-[2px] h-[50px] bg-yb mx-[3rem] block"></motion.div>

						<div className="grid grid-cols-2">
							<motion.div
								initial={{
									opacity: 0,
									y: 10,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									duration: 1,
									delay: 0.7,
									type: "spring",
								}}
								className="flex flex-row justify-center items-center mobile:w-[3rem] mobile:h-[3rem] tablet:w-[3rem] tablet:h-[3rem] laptop:w-[2.5rem] laptop:h-[2.5rem] desktop:w-[2.5rem] desktop:h-[2.5rem] rounded-[17px]">
								<Link
									href={"https://www.linkedin.com/in/sainath-reactjs"}
									target={"_blank"}
									className="text-yb">
									<Linkedin className="scale-[120%]" />
								</Link>
							</motion.div>

							<motion.div
								initial={{
									opacity: 0,
									y: 10,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									duration: 1,
									delay: 1.2,
									type: "spring",
								}}
								className="flex flex-row justify-center items-center mobile:w-[3rem] mobile:h-[3rem] tablet:w-[3rem] tablet:h-[3rem] laptop:w-[2.5rem] laptop:h-[2.5rem] desktop:w-[2.5rem] desktop:h-[2.5rem] rounded-[17px]">
								<Link
									className="text-yb"
									target={"_blank"}
									href={"https://github.com/sain-fullstack-developer"}>
									<Github className="scale-[150%]" />
								</Link>
							</motion.div>
						</div>
					</div>
					<motion.div
						initial={{
							opacity: 0,
							y: 10,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 1,
							delay: 1.4,
							type: "spring",
						}}
						className="flex flex-row justify-start items-center mt-6">
						<Link
							className="px-[0.75rem] text-gray-950 py-[0.50rem] border-[1px] border-solid border-aw font-bold rounded-[10px] hover:cursor-pointer animate-glow"
							target={"_blank"}
							href={"/RESUME_JUNE_2023_3.pdf"}>
							Download Resume
						</Link>
					</motion.div>
				</div>
				<motion.div
					initial={{
						opacity: 0,
						y: -10,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 1,
						delay: 1.8,
						type: "spring",
					}}
					className="w-[100%] flex-row justify-center items-end mt-[3rem] mobile:hidden tablet:hidden laptop:flex desktop:flex">
					<a title="about" href="#about-me">
						<ChevronsDown className="scale-[180%] duration-500 hover:scale-[150%]" />
					</a>
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						x: 10,
					}}
					animate={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						duration: 4,
						delay: 0.4,
						type: "spring",
					}}
					className="">
					<Image width={600} height={600} src="/character.png" alt="mockup" />
				</motion.div>
			</div>
		</section>
	);
}
