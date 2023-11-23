import { AnimatePresence, animate, motion as m } from "framer-motion"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const PageWrapper = ({ children, animKey, centered, prev, next }) => {

    const { push } = useRouter()

    const [isAnimating, setIsAnimating] = useState(false)
    const [touchY, setTouchY] = useState(0)


    useEffect(() => {
        const animNav = (path, direction) => {
            if (path == null) return;
            setIsAnimating(true)
            animate(".page", { opacity: 0, y: direction === "down" ? -100 : 100 }, { onComplete: () => push("/" + path) })

        }

        const handleWheel = e => {
            if (!isAnimating)
                animNav(e.deltaY > 0 ? next : prev, e.deltaY > 0 ? "down" : "up")
        }

        const handleTouchStart = e => {
            setTouchY(e.touches[0].clientY)
        }

        const handleTouchEnd = e => {
            if (touchY === 0) return;
            if (Math.abs(touchY - e.changedTouches[0].clientY) < 50) return;
            if (touchY === e.changedTouches[0].clientY) return;

            const direction = touchY - e.changedTouches[0].clientY > 0 ? "down" : "up"

            if (!isAnimating)
                animNav(direction === "down" ? next : prev, direction)
        }

        window.addEventListener("wheel", handleWheel)
        window.addEventListener("touchstart", handleTouchStart)
        window.addEventListener("touchend", handleTouchEnd)

        return () => {
            window.removeEventListener("wheel", handleWheel)
            window.removeEventListener("touchstart", handleTouchStart)
            window.removeEventListener("touchend", handleTouchEnd)
        }
    }, [push, isAnimating, next, prev, touchY])


    return (
        <AnimatePresence>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={animKey}
                id={animKey}
                className={`page w-full h-screen flex flex-col items-center relative overflow-hidden px-5 ${centered ? "justify-center" : ""}`}
            >
                {children}
            </m.div>
        </AnimatePresence>
    )
}

export default PageWrapper;