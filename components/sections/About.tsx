"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export default function About() {
	return (
		<section id="about-me">
			<div className="flex flex-row justify-between items-center mt-[7rem] mobile:text-[1.5rem] tablet:text-[1.5rem] laptop:text-[3rem] desktop:text-[3rem] font-bold w-[100%]">
				<motion.div
					initial={{
						opacity: 0,
						y: 10,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						once: true,
						amount: 1,
					}}
					transition={{
						duration: 0.5,
						delay: 0.8,
					}}
					className="inline">
					About Me
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						y: 10,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						once: true,
						amount: 1,
					}}
					transition={{
						duration: 0.5,
						delay: 0.9,
					}}
					className="h-[2px] mobile:w-[60%] tablet:w-[80%] laptop:w-[80%] desktop:w-[80%] inline-block bg-white"></motion.div>
			</div>
			<div className="flex justify-between items-start mobile:mt-[2rem] tablet:mt-[2rem] laptop:mt-[5rem] desktop:mt-[5rem] mobile:flex-col tablet:flex-col laptop:flex-row desktop:flex-row">
				<div className="mobile:w-[100%] tablet:w-[100%] laptop:w-[50%] desktop:w-[50%] text-[1rem] bg-ab rounded-lg p-7">
					<motion.p
						initial={{
							opacity: 0,
							y: 10,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{
							once: true,
							amount: 1,
						}}
						transition={{
							duration: 0.5,
							delay: 0.6,
						}}>
						Thank you for visiting my website. Allow me to introduce myself. My
						name is Sainath Kommagoni. Throughout my experience, I have acquired
						valuable skills in programming languages such as{" "}
						<span className="text-yb">JavasScript</span>,{" "}
						<span className="text-yb">HTML </span>, and{" "}
						<span className="text-yb">CSS</span>.{" "}
					</motion.p>
					<br />
					<motion.p
						initial={{
							opacity: 0,
							y: 10,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{
							once: true,
							amount: 1,
						}}
						transition={{
							duration: 0.5,
							delay: 0.6,
						}}>
						In addition to my academic pursuits, I find great enjoyment in
						playing cricket and exploring music. These hobbies provide a
						much-needed balance to my life, and I devote a significant amount of
						my free time to them.
					</motion.p>
					<br />
					<motion.p
						initial={{
							opacity: 0,
							y: 10,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{
							once: true,
							amount: 1,
						}}
						transition={{
							duration: 0.5,
							delay: 0.7,
						}}>
						Moreover, I have a deep passion for building web applications. I
						have acquired proficiency in various technologies such as{" "}
						<span className="text-yb">Next.js </span>,{" "}
						<span className="text-yb">Typescript </span>,{" "}
						<span className="text-yb">React.js </span>,{" "}
						<span className="text-yb">Redux.js </span>, and{" "}
						<span className="text-yb">TailwindCSS</span>. However, it can be
						quite a rollercoaster when dealing with these ever-evolving
						frameworks. Just when you think you&#39;ve mastered them, Next.js
						swoops in with its fancy new app directory, leaving you scratching
						your head.
					</motion.p>
					<br />
				</div>
				<motion.div
					initial={{
						opacity: 0,
						y: 10,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						once: true,
						amount: 1,
					}}
					transition={{
						duration: 0.5,
						delay: 0.8,
					}}></motion.div>

				<motion.div
					initial={{
						opacity: 0,
						y: 10,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						once: true,
						amount: 1,
					}}
					transition={{
						duration: 0.5,
						delay: 0.8,
					}}
					className="mr-40 mt-4 border-white mobile:w-[340px] mobile:h-[340px] tablet:w-[350px] tablet:h-[350px] laptop:w-[400px] laptop:h-[400px] desktop:w-[400px] desktop:h-[400px] relative">
					<Image
						src="/profilepic.jpeg"
						fill={true}
						alt="Image of a short asian man standing beside bart simpson"
						quality={100}
						style={{ objectFit: "cover" }}
						className="border-[2px] border-solid border-ab rounded-[50%]"
					/>
				</motion.div>
			</div>
		</section>
	);
}
