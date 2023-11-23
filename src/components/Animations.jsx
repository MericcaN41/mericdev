export const FadeIn = {
    initial: {
        opacity: 0,
        y: -20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    transition: {
        duration: .5,
    }
}

export const FadeInVariants = {
    hidden: {
        opacity: 0,
        y: -20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
        }
    },
}

export const FadeInBottom = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    transition: {
        duration: .5,
    }
}