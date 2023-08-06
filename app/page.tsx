"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import styles from "./index.module.css";
import { Montserrat } from "next/font/google";
import Navigation from "@/components/Navigation";
import About from "@/components/sections/About";

import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import useAxios from "@/hooks/useAxios";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
	const [skills, setSkills] = useState<Array<SkillSet>>([]);
	const [projects, setProjects] = useState<Array<any>>([]);

	const skillData = useAxios({
		method: "get",
		url: "https://sainath-portfolio-server.onrender.com/api/skills",
		headers: JSON.stringify({ accept: "*/*" }),
	});

	const projectData = useAxios({
		method: "get",
		url: "https://sainath-portfolio-server.onrender.com/api/projects",
		headers: JSON.stringify({ accept: "*/*" }),
	});

	useEffect(() => {
		console.log("skill", skillData);
		console.log("projectData", projectData);
		if (skillData.response !== null && skillData.response.length > 0)
			setSkills(skillData?.response);
		if (skillData.error) console.log(skillData.error);
		if (projectData.response !== null && projectData.response.length > 0)
			setProjects(projectData?.response);
		if (projectData.error) console.log(projectData.error);
	}, [skillData]);

	console.log("plain-skills", skills.length);

	return (
		<main className={`${inter.className}`}>
			<Navigation />
			<Hero />
			<div className={`${styles.container} ${inter.className}`}>
				<About />
				{skills.length > 0 && <Skills skills={skills} />}
				<Projects projects={projects} />
				<Contact />
			</div>
			S
		</main>
	);
}
