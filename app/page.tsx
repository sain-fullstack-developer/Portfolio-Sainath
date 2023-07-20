"use client";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<main className="bg-white relative">
			<motion.section
				variants={{
					hidden: { y: -200, opacity: 0 },
					show: {
						opacity: 1,
						y: 0,
						transition: {
							delayChildren: 0.5,
							staggerDirection: -1,
						},
					},
				}}
				initial="hidden"
				animate="show"
				className="grid place-items-center text-5xl font-semibold tracking-wider min-h-screen intro">
				<div>
					<h2 className="text-anim">I am</h2>
					<h1 className="typing-effect text-8xl uppercase">
						Sainath Kommagoni
					</h1>
					<h2 className="caption">a Full Stack Developer</h2>
				</div>
			</motion.section>
			<motion.section
				className={`relative w-full h-screen mx-auto bg-blue-900`}></motion.section>
		</main>
	);
}
