"use client";

import { FadeIn, FadeInBottom } from "@/components/Animations";
import Blobs from "@/components/Blobs";
import PageWrapper from "@/components/PageWrapper";
import { popup } from "@/functions";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLogoLinkedinSquare, BiLogoDiscordAlt, BiLogoGithub } from "react-icons/bi";
import { BsMouse } from "react-icons/bs";
import { MdTouchApp } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";

const Home = () => {
    const [blurPos, setBlurPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setBlurPos({ x: e.pageX - (112), y: e.pageY - (112) })
        }
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    const logoVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        anim: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .5,
                ease: "easeOut"
            }
        }
    }

    return (
        <PageWrapper animKey={"home"} centered prev={null} next="about">
            <div className="absolute w-full h-full gridBG z-20 bg-white/[.005]"></div>
            <div className="absolute w-full h-full overflow-hidden">
                {
                    blurPos.x !== 0 && blurPos.y !== 0 &&
                    <div className="absolute top-0 left-0 w-56 h-56 rounded-full z-10 backdrop-blur-3xl" style={{ translate: `${blurPos.x}px ${blurPos.y}px` }}></div>
                }
                <m.div
                    initial="hidden"
                    animate="anim"
                    transition={{
                        staggerChildren: .2,
                    }}
                    onAnimationComplete={() => document.querySelectorAll(".spin").forEach(el => el.classList.add("animate-spin"))}
                    className="hidden md:flex">
                    <Blobs.First />
                    <Blobs.Second />
                    <Blobs.Third />
                </m.div>
            </div>
            <main className="z-20 flex flex-col items-center justify-center gap-5">
                <m.h1 {...FadeIn} className="text-white font-black text-5xl md:text-6xl text-center">MERİÇ AKBAŞ</m.h1>
                <m.p
                    {...FadeInBottom}
                    transition={{ ...FadeInBottom.transition, delay: .7 }}
                    className="text-white/50 text-xl md:text-2xl">
                    Student, Front-End Developer
                </m.p>
                <m.div
                    initial="hidden"
                    animate="anim"
                    transition={{
                        staggerChildren: .2,
                        delayChildren: 1.5,
                    }}
                    className="flex gap-5">
                    <m.div variants={logoVariants}>
                        <a href="https://www.linkedin.com/in/mericdev/">
                            <BiLogoLinkedinSquare className="fill-white/50 hover:cursor-pointer" size="2.25rem" />
                        </a>
                    </m.div>
                    <m.div variants={logoVariants} className="relative">
                        <BiLogoDiscordAlt className="fill-white/50 hover:cursor-pointer" onClick={e => {
                            navigator.clipboard.writeText("mericcan41")
                            popup(".discordPopup")
                        }} size="2.25rem" />
                        <p className="discordPopup opacity-0 absolute text-white/50 bg-white/[.01] border border-white/40 whitespace-nowrap p-2 rounded text-xs left-1/2 top-[calc(100%+1rem)] -translate-x-1/2">
                            <span>Username copied to clipboard</span>
                            <span className="absolute border-r border-t border-white/40 -rotate-45 p-2 left-1/2 -translate-x-1/2 bottom-[calc(100%-.425rem)]"></span>
                        </p>
                    </m.div>
                    <m.div variants={logoVariants}>
                        <a href="https://github.com/MericcaN41">
                            <BiLogoGithub className="fill-white/50 hover:cursor-pointer" size="2.25rem" />
                        </a>
                    </m.div>
                </m.div>
                <Link href="/blog" className="text-white/70 underline z-[9999]">Check out my blog!</Link>
                <div className="absolute bottom-5 w-full flex justify-center z-[9999]">
                    <p className="text-white/50 text-sm flex items-center gap-1">Made with <span className="heartbeat">❤️</span> by Meriç Akbaş using <a href="https://nextjs.org"><SiNextdotjs /></a></p>
                </div>
                <m.div {...FadeInBottom} transition={{ ...FadeInBottom.transition, delay: 2.5 }} className="flex flex-col items-center  relative top-20 gap-5">
                    <BsMouse size="2rem" className="fill-white/50 hidden md:block" />
                    <MdTouchApp size="2rem" className="fill-white/50 md:hidden" />
                    <Link href="/about" className="font-light text-xs text-white/50">SCROLL TO SEE MORE</Link>
                </m.div>
            </main>
        </PageWrapper>
    )
}

export default Home;
