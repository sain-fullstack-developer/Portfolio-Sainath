import { motion } from "framer-motion";
import SkillCardBlock from "@/components/SkillCardBlock";

type SkillCardProps = {
	title: string;
	skills: string;
};

export default function SkillCard({ title, skills }: SkillCardProps) {
	const parsedSkills = JSON.parse(skills);

	console.log("object", parsedSkills);
	return (
		<div className="flex flex-col justify-center items-start gap-3 rounded-[5px] bg-ag w-[100%] h-full p-[20px] pb-[10px]">
			<div className="text-[25px] font-bold">{title}</div>
			<div className="h-[2px] mobile:w-[60%] tablet:w-[80%] laptop:w-[70%] desktop:w-[70%]  inline-block bg-ab"></div>
			<div className="flex flex-row justify-start w-[90%] items-center gap-5 flex-wrap">
				{parsedSkills?.map((skill: any, i: number) => (
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
							delay: i / 10,
						}}
						key={i}>
						<SkillCardBlock icon={skill.icon} name={skill.name} />
					</motion.div>
				))}
			</div>
		</div>
	);
}
