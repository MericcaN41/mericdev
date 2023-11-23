import { SiAdobephotoshop, SiFramer, SiNextdotjs } from "react-icons/si";
import { BiLogoCss3, BiLogoFigma, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoReact } from "react-icons/bi";
import Blobs from "@/components/Blobs";


export const skillData = [
    {
        title: "WEB LANGUAGES",
        icons:
            <>

                <BiLogoHtml5 size="4.5rem" className="fill-white/40 h-16" />
                <BiLogoCss3 size="4.5rem" className="fill-white/40 h-16" />
                <BiLogoJavascript size="4.5rem" className="fill-white/40 h-16" />
            </>,
        paragraph: "I can use HTML, CSS and Javascript to create websites and user interfaces. I generally use TailwindCSS as my styling option, but I can also use SASS or plain CSS."
    },
    {
        title: "WEB LIBRARIES",
        icons: <>
            <BiLogoReact size="4.5rem" className="fill-white/40 h-16" />
            <SiNextdotjs size="4.5rem" className="fill-white/40 h-14" />
        </>
        ,
        paragraph: "I can use React to create interactive web applications, and NextJS to create complex server-side rendered websites."
    },
    {
        title: "DESIGN & PROTOTYPE",
        icons: <>
            <BiLogoFigma size="4.5rem" className="fill-white/40 h-16" />
            <SiAdobephotoshop size="4.5rem" className="fill-white/40 h-14" />
        </>
        ,
        paragraph: "I can use Figma & Photoshop together to design my websites before I create them. I can also use Photoshop alone to edit pictures or create some graphics."
    },
    {
        title: "BACK-END & BOTS",
        irregular: true,
        icons: <>
            <Blobs.NodeJS />
            <Blobs.DJS />
        </>
        ,
        paragraph: <span>I can use NodeJS to create API&apos;s, server-side applications and discord bots. Back-end is not what I excel at, but I can still handle it if needed. Check out my open-source discord bot template on <a href="https://github.com/MericcaN41/discordjs-v14-template-ts" className="underline">GitHub</a> 🤓.</span>
    },
    {
        title: "DATABASES",
        icons: <>
            <BiLogoMongodb size="4.5rem" className="fill-white/40 h-16" />
            <BiLogoPostgresql size="4.5rem" className="fill-white/40 h-16" />
        </>
        ,
        paragraph: "I can use MongoDB or PostgreSQL to create databases for my applications. I generally use MongoDB for my discord bots, and PostgreSQL for my web applications."
    },
    {
        title: "ANIMATIONS W/ FRAMER",
        icons: <>
            <SiFramer size="4.5rem" className="fill-white/40 h-16" />
        </>
        ,
        paragraph: "I can use Framer Motion to create animations & interactivity for my websites. All the animations & transitions on this website were made using Framer Motion."
    }

]