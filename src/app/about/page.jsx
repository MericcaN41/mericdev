"use client";
import PageWrapper from "@/components/PageWrapper";
import Blobs from "@/components/Blobs";
import { AnimatePresence, motion as m } from "framer-motion";
import Planet from "@/assets/img/planet.png";
import Image from "next/image";
import { FadeIn, FadeInBottom, FadeInVariants } from "@/components/Animations";
import { useState } from "react";
import { skillData } from "./data";

const About = () => {

    const [skillIndex, setSkillIndex] = useState(0)

    const mobileVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        show: {
            opacity: 1,
            y: 0,
        }
    }

    const Skill = ({ title, paragraph, icons, mobile, irregular }) => {
        return (
            <m.div
                variants={FadeInVariants}
                exit={{ opacity: 0 }}
                className="flex flex-col py-5 px-3 items-center rounded-xl border border-white/30 bg-white/[.01] h-64 w-[20rem] mx-auto left-1/2 md:w-auto backdrop-blur-sm md:backdrop-blur-xl">
                <div className={`flex ${irregular ? "gap-5" : "gap-2"} items-center mb-2`}>
                    {icons}
                </div>
                <h2 className="font-bold uppercase text-white">{title}</h2>
                <p className="text-white/50 text-sm text-center mt-2">
                    {paragraph}
                </p>
            </m.div>
        )
    }

    return (
        <PageWrapper animKey="about" prev="" next="projects">
            <m.div
                initial="hidden"
                animate="anim"
                transition={{
                    staggerChildren: .3
                }}
                className="w-full h-screen absolute pointer-events-none">
                <Blobs.Outer />
            </m.div>
            <m.div
                initial={{ opacity: 0, y: "100%", x: "-50%", scale: 0 }}
                animate={{ opacity: 1, scale: .7, y: "60%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-1/2">
                <Image src={Planet} alt=""></Image>
            </m.div>
            <m.h1 {...FadeIn} className="font-black text-white text-3xl md:text-4xl mt-20 mb-5">ABOUT ME</m.h1>
            <m.p {...FadeInBottom} transition={{ ...FadeInBottom.transition, delay: .5 }} className="text-white/50 text-xs md:text-sm w-full px-5 md:w-1/2 md:p-0 text-center">
                Hi there! I&apos;m Meriç, a Turkish developer that likes creating websites, user interfaces and such.
                I mainly focus on making websites but I also make user interfaces for games that support HTML/CSS (such as FiveM).
                I sometimes make Discord bots too.
                I started coding 3 years ago while I was in quarantine.
                I started with discord bots, then learned HTML/CSS and found out making websites is really fun so I kept learning new things and improving on my skills. I learned javascript, some UI libraries like React, and got to the point where I am today.
                Still I continue to improve my skills and learn new things, adapt to new technologies and such. There&apos;s always room for improvement.
            </m.p>
            <m.h1 {...FadeInBottom} transition={{ ...FadeInBottom.transition, delay: 1 }} className="font-black text-white text-3xl md:text-4xl mt-5 mb-5">MY SKILLS</m.h1>
            <m.div
                initial="hidden"
                animate="show"
                transition={{
                    staggerChildren: .2,
                    delayChildren: 1.5
                }}
                className="w-[60rem] grid-cols-3 gap-5 hidden md:grid">
                {
                    skillData.map((skill, idx) => {
                        return <Skill {...skill} key={idx} />
                    })
                }
            </m.div>
            <m.div
                initial="hidden"
                animate="show"
                transition={{
                    staggerChildren: .2,
                    delayChildren: 1.5
                }}
                className="w-full grid-cols-1 relative gap-10 md:hidden">
                <Skill {...skillData[skillIndex]} mobile />
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-5 mt-5">
                    <button className="border border-white/40 text-white/60 py-1 px-5 rounded font-medium" onClick={e => setSkillIndex(s => s === 0 ? 0 : s - 1)}>Prev</button>
                    <button className="border border-white/40 text-white/60 py-1 px-5 rounded font-medium" onClick={e => setSkillIndex(s => s === skillData.length - 1 ? s : s + 1)}>Next</button>
                </div>
            </m.div>
            <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#1D2F3A]/20 to-transparent -z-50"></div>
        </PageWrapper>
    )
}

export default About;