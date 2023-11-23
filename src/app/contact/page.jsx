"use client";
import PageWrapper from "@/components/PageWrapper"
import { AiTwotoneMail } from "react-icons/ai";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { AnimatePresence, motion as m } from "framer-motion";
import { FadeInVariants } from "@/components/Animations";
import { useEffect, useState } from "react";

const Contact = () => {
    const [isSent, setIsSent] = useState(false)

    useEffect(() => {
        if (isSent)
            setTimeout(() => {
                setIsSent(false)
            }, 5000)
    }, [isSent])

    return (
        <PageWrapper centered animKey={"contact"} prev="projects">
            <div className="flex flex-col md:flex-row justify-center px-5 w-full gap-5">
                <m.div initial="hidden" animate="show" transition={{
                    staggerChildren: .1,
                }} className="flex flex-col gap-2">
                    <m.h1 variants={FadeInVariants} className="text-white text-3xl font-black leading-4 w-fit">CONTACT ME</m.h1>
                    <m.p variants={FadeInVariants} className="text-white/50 text-sm md:mb-5 md:w-[24rem]">If you have any questions or if you want to give feedback, feel free to message me from any of these platforms. You can also send me a message using the form.</m.p>
                    <m.a href="mailto:mericcan4141@gmail.com" variants={FadeInVariants} className="text-white/50 text-sm flex gap-2 items-center">
                        <AiTwotoneMail size="1.25rem" />
                        mericcan4141@gmail.com
                    </m.a>
                    <m.span variants={FadeInVariants} className="text-white/50 text-sm flex gap-2 items-center">
                        <BsDiscord size="1.25rem" />
                        mericcan41
                    </m.span>
                    <m.a href="https://linkedin.com/in/mericdev" variants={FadeInVariants} className="text-white/50 text-sm flex gap-2 items-center">
                        <BsLinkedin size="1.25rem" />
                        mericdev
                    </m.a>
                    <m.a href="https://github.com/MericcaN41" variants={FadeInVariants} className="text-white/50 text-sm flex gap-2 items-center">
                        <BsGithub size="1.25rem" />
                        MericcaN41
                    </m.a>
                </m.div>
                <form onSubmit={e => {
                    e.preventDefault()
                    let data = new FormData(e.target)

                    fetch("/api/sendMessage", {
                        method: "post",
                        body: data,
                    }).then((res) => {
                        if (res.status === 200) {
                            setIsSent(true)
                            e.target.reset()
                        }
                    })
                }} method="post" className="w-full md:w-[30rem] bg-white/[.01] relative border border-white/40 py-5 rounded-xl flex flex-col gap-2 px-5 md:px-10">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-white font-bold text-sm">NAME</label>
                        <input type="text" name="name" required id="name" className="bg-transparent border border-white/20 rounded text-white text-sm px-3 py-1 outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-white font-bold text-sm">E-MAIL</label>
                        <input type="email" name="email" id="email" required className="bg-transparent border border-white/20 rounded text-white text-sm px-3 py-1 outline-none" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-white font-bold text-sm">MESSAGE</label>
                        <textarea name="message" required id="message" cols="30" rows="10" className="bg-transparent border border-white/20 rounded text-white text-sm px-3 py-1 resize-none outline-none"></textarea>
                    </div>
                    {
                        isSent ?
                            <button disabled className="opacity-50 bg-[#3e0923] hover:bg-[#47152d] transition-colors px-5 py-2 text-white font-bold w-fit ml-auto rounded text-xs">PLEASE WAIT</button>
                            :
                            <button className="bg-[#3e0923] hover:bg-[#47152d] transition-colors px-5 py-2 text-white font-bold w-fit ml-auto rounded text-xs">SEND</button>

                    }
                    <AnimatePresence>
                        {
                            isSent &&
                            <m.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-sm text-white/50 text-center absolute -bottom-16 left-1/2 -translate-x-1/2 w-full">Your message has been sent! Thanks for contacting.</m.p>
                        }
                    </AnimatePresence>
                </form>
            </div>
            <div className={`absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#3e0923]/20 to-transparent -z-50`}></div>

        </PageWrapper>
    )
}

export default Contact;