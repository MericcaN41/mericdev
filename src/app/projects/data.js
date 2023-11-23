import Blobs from "@/components/Blobs";
import { BiLogoPostgresql, BiLogoReact, BiLogoSass, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiPrisma, SiVite } from "react-icons/si";
import { Fragment } from "react";

export const projectData = [
    {
        title: "DISCORDJS TYPESCRIPT TEMPLATE",
        description: "A typescript template for Discord.js v14 that includes handlers, slash commands, mongodb, permissions and more.",
        src: "/img/djs.png",
        icons: <Fragment>
            <BiLogoTypescript size="1.25rem" className="fill-white/50" />
            <Blobs.NodeJS icon></Blobs.NodeJS>
        </Fragment>,
        openSource: "https://github.com/MericcaN41/discordjs-v14-template-ts",
        theme: "#181A36"
    },
    {
        title: "KEMIRGENSAHIPLEN.COM",
        description: "An adopting platform for rodents where people can upload images and create listings.  It also includes a blog that has useful information about rodent care.",
        src: "/img/sahiplen.png",
        icons: <Fragment>
            <BiLogoReact size="1.25rem" className="fill-white/50" />
            <SiNextdotjs size="1.25rem" className="fill-white/50" />
            <BiLogoPostgresql size="1.25rem" className="fill-white/50" />
            <SiPrisma size="1.25rem" className="fill-white/50" />
        </Fragment>,
        theme: "#DC6338"
    },
    {
        title: "DIYETISYENREYHANBERBER.COM",
        description: "A personal website for a dietician. It includes all of the features a portfolio website would have, plus a blog and a panel to manage said blog.",
        src: "/img/diyet.png",
        icons: <Fragment>
            <BiLogoReact size="1.25rem" className="fill-white/50" />
            <SiNextdotjs size="1.25rem" className="fill-white/50" />
            <BiLogoPostgresql size="1.25rem" className="fill-white/50" />
            <SiPrisma size="1.25rem" className="fill-white/50" />
        </Fragment>,
        theme: "#ffffff"
    },
    {
        title: "DECISION CASE",
        description: "A fun little side project. It takes some options, then picks one randomly in a CS:GO style case opening fashion.",
        src: "/img/karar.png",
        icons: <Fragment>
            <BiLogoReact size="1.25rem" className="fill-white/50" />
        </Fragment>,
        theme: "#E74E41"
    },
    {
        title: "GOPVP GAME UI'S",
        description: "A collection of UI components for a FiveM server called GoPVP, It includes an inventory, leaderboard, marketplace, battlepass, lootboxes (with a CSGO-like animation) and more",
        src: "/img/gopvp.png",
        icons: <Fragment>
            <BiLogoReact size="1.25rem" className="fill-white/50" />
            <BiLogoSass size="1.25rem" className="fill-white/50" />
            <SiVite size="1.25rem" className="fill-white/50" />
        </Fragment>,
        theme: "#039501"
    },
    {
        title: "AREA51 PVP GAME UI’S",
        description: "A collection of UI components for a FiveM server called Area51 PVP, It includes all of the things from the other project and a crafting-dismantling system (with an animated crusher!).",
        src: "/img/a51.png",
        icons: <Fragment>
            <BiLogoReact size="1.25rem" className="fill-white/50" />
            <BiLogoSass size="1.25rem" className="fill-white/50" />
            <SiVite size="1.25rem" className="fill-white/50" />
        </Fragment>,
        theme: "#6C0400"
    }

]