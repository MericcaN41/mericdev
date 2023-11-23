import { motion as m } from "framer-motion";
import { FadeInVariants } from "./Animations";
import { useState } from "react";

const ChangingText = ({ textArray, params }) => {
    const [text, setText] = useState(textArray[0])

    return (
        <m.span
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: .1, ...params }}
            onAnimationComplete={() => alert(31)}
        >
            {
                text.split("").map((letter, index) => (
                    <m.span
                        key={index}
                        variants={FadeInVariants}
                        className="inline-block"
                    >
                        {letter}
                    </m.span>
                ))
            }
        </m.span>
    )
}

export default ChangingText;