"use client";

import { FadeIn, FadeInBottom, FadeInVariants } from "@/components/Animations";
import PageWrapper from "@/components/PageWrapper";
import { animate, motion as m } from "framer-motion";
import Image from "next/image";
import { projectData } from "./data";
import { useState } from "react";
const Projects = () => {
    const [selectIdx, setSelectIdx] = useState(0)

    const Project = ({ title, description, src, icons, openSource }) => {
        return (
            <m.div variants={FadeInVariants} className="w-80 md:w-[unset] mx-auto md:mx-[unset] flex flex-col items-center overflow-hidden rounded-xl border border-white/30 bg-white/[.01] h-80 backdrop-blur-xl">
                <Image alt="" src={src} width={326} height={150} className="w-full h-36"></Image>
                <div className="flex flex-col px-5 text-center mt-3">
                    <h2 className="font-bold text-white">{title}</h2>
                    <p className="text-xs text-white/50">{description}</p>
                    <div className="absolute bottom-2 left-5 flex-col gap-2 z-50">
                        <h2 className="font-bold text-white text-xs text-left">MADE WITH</h2>
                        <div className="flex gap-2 items-center mt-1">
                            {
                                icons
                            }
                        </div>
                    </div>
                </div>
                {
                    openSource &&
                    <a href={openSource} className="absolute py-1 px-4 border border-white/40 rounded-full  bottom-5 right-5 hover:cursor-pointer">
                        <h3 className="font-bold text-white text-[.6rem] bg-white/[.01]">OPEN SOURCE!</h3>
                    </a>
                }
            </m.div>
        )
    }

    return (
        <PageWrapper animKey={"projects"} centered prev="about" next={"contact"}>
            <m.h1 {...FadeIn} className="text-white text-3xl font-black text-center">SOME OF MY PROJECTS</m.h1>
            <m.p {...FadeInBottom} transition={{ ...FadeInBottom.transition, delay: .2 }} className="text-white/50 text-sm mt-2 mb-5 w-full md:w-1/3 text-center">Here are some of the projects I made, these aren&apos;t all of them but they&apos;re my favorites.</m.p>
            <m.div
                initial="hidden"
                animate="show"
                transition={{
                    staggerChildren: .2,
                    delayChildren: .5
                }}
                className="w-[60rem] hidden md:grid grid-cols-3 gap-5">
                {
                    projectData.map((project, i) => {
                        return (
                            <Project key={i} {...project} />
                        )
                    })
                }
            </m.div>
            <m.div
                initial="hidden"
                animate="show"
                transition={{
                    staggerChildren: .2,
                    delayChildren: .5
                }}
                className="w-full md:px-14 grid md:hidden grid-cols-1 gap-5 relative">
                <Project {...projectData[selectIdx]} />
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 gap-5 mt-5 flex md:hidden">
                    <button className="border border-white/40 text-white/60 py-1 px-5 rounded font-medium" onClick={e => setSelectIdx(s => s === 0 ? 0 : s - 1)}>Prev</button>
                    <button className="border border-white/40 text-white/60 py-1 px-5 rounded font-medium" onClick={e => setSelectIdx(s => s === projectData.length - 1 ? s : s + 1)}>Next</button>
                </div>
            </m.div>
            <div className={`absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#22093e]/20 to-transparent -z-50`}></div>
        </PageWrapper>
    );
}

export default Projects;