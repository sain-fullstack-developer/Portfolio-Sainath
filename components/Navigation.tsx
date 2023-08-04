"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import styles from "../app/index.module.css"
import Link from "next/link"

import { X, Menu } from "lucide-react"


export default function Hamburger() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // removes nav when scrolled
    if (typeof window !== "undefined") {
        window.onscroll = () => {
            if (scrollY < window.innerHeight) setIsMenuOpen(false);
        }
    }

    const menuVariants = {
        open: {
            height: "100vh",
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 40,
                mass: 0.8,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
        closed: {
            height: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 40,
                mass: 0.8,
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
    }

    const menuItemVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: -20, opacity: 0 },
    };

    return (
        <>
            <motion.div
                className="flex flex-col justify-start items-start absolute w-full h-[100vh] top-0 left-0 z-50 overflow-hidden bg-[#08001ae0] backdrop-blur-lg"
                variants={menuVariants}
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
            >
                <div>
                    <div className={styles.container}>
                        <div className="text-ag mt-[60px] hover:cursor-pointer w-fit" onClick={toggleMenu}>
                            <X className="scale-[150%]" color="#EEEE" />
                        </div>
                    </div>
                    <div className={styles.container}>
                        <motion.div className="flex flex-col justify-center items-start">
                            <motion.div
                                className="mb-4 text-center"
                                variants={menuItemVariants}
                            >
                                <a
                                    className="text-[3rem] font-bold no-underline hover:scale-[200%] duration-300 ease-in-out hover:text-[#ffffff83]"
                                    href="#about-me"
                                >
                                    About me
                                </a>
                            </motion.div>
                            <motion.div
                                className="mb-4 text-center"
                                variants={menuItemVariants}
                            >
                                <Link
                                    className="text-[3rem] font-bold no-underline hover:scale-[200%] duration-300 ease-in-out hover:text-[#ffffff83]"
                                    href="#projects"
                                >
                                    Projects
                                </Link>
                            </motion.div>
                            <motion.div
                                className="mb-4 text-center"
                                variants={menuItemVariants}
                            >
                                <a
                                    className="text-[3rem] font-bold no-underline hover:scale-[200%] duration-300 ease-in-out hover:text-[#ffffff83]"
                                    href="#skills"
                                >
                                    Skills
                                </a>
                            </motion.div>
                            <motion.div
                                className="mb-4 text-center"
                                variants={menuItemVariants}
                            >
                                <a
                                    className="text-[3rem] font-bold no-underline hover:scale-[200%] duration-300 ease-in-out hover:text-[#ffffff83]"
                                    href="#getintouch"
                                >
                                    Get in Touch
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0.2,
                    y: -40,
                    color: "#350078"
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    color: "#8f33ff"
                }}
                transition={{
                    duration: 2,
                    delay: 0,
                    type: "spring",
                }}
            >
                <Menu onClick={toggleMenu} color="#EEEE" className="mobile:scale-[200%] tablet:scale-[200%] laptop:scale-[150%] desktop:scale-[150%] mobile:absolute tablet:absolute laptop:static desktop:static mb-2 mt-[40px] mobile:mx-[20px] tablet:mx-[40px] laptop:mx-[50px] desktop:mx-[50px] hover:cursor-pointer" />
            </motion.div>
        </>
    )
}