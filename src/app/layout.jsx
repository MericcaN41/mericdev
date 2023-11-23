import Github from '@/components/Github';
import './globals.css'
import { Montserrat } from 'next/font/google'
import { BiMenuAltRight } from "react-icons/bi";
import { SiNextdotjs } from 'react-icons/si';
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: 'Meriç Akbaş',
    description: 'My personal porfolio website.',
}

export default function RootLayout({ children }) {


    return (
        <html lang="en">
            <body className={`${montserrat.className} overflow-hidden`}>
                <div className="absolute z-[999] w-full h-12 flex justify-end items-center py-20 px-5 md:px-20 pointer-events-none">
                    <BiMenuAltRight className='fill-white pointer-events-auto' size="4rem" />
                </div>
                {children}
                <div className="absolute bottom-5 w-full flex justify-center z-[9999]">
                    <p className="text-white/50 text-sm flex items-center gap-1">Made with <span className="heartbeat">❤️</span> by Meriç Akbaş using <a href="https://nextjs.org"><SiNextdotjs /></a></p>
                </div>
                <div className="absolute top-5 left-5 z-[9999]">
                    <h5 className="font-bold text-white text-sm mb-2">Star the project on GitHub</h5>
                    <Github />
                </div>
            </body>
        </html>
    )
}
