import { motion as m } from "framer-motion"

const blobVariants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    anim: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            type: "spring"
        }
    }
}

const circleVariants = {
    hidden: {
        opacity: 0,
        scale: .7,
        y: "-50%"
    },
    anim: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}

const Blobs = {
    First: () => {
        return (
            <m.svg variants={blobVariants} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[38em] spin" style={{ animationDuration: "20s" }}>
                <path fill="#316BFF" style={{ opacity: .13 }} d="M27.8,-46.7C38.7,-41.9,51.9,-39.8,60.6,-32.4C69.3,-25.1,73.4,-12.5,73.8,0.2C74.2,13,70.9,26,65.2,38.6C59.5,51.1,51.5,63.2,40.2,67C29,70.7,14.5,66.2,-0.2,66.5C-14.8,66.8,-29.6,71.9,-42.6,69.1C-55.6,66.4,-66.8,55.7,-74.7,42.9C-82.5,30,-87,15,-84.5,1.5C-81.9,-12.1,-72.3,-24.1,-65,-37.9C-57.7,-51.6,-52.6,-67.1,-42.2,-72.1C-31.7,-77.2,-15.9,-71.8,-3.7,-65.4C8.5,-59,17,-51.6,27.8,-46.7Z" transform="translate(100 100)" />
            </m.svg>
        )
    },
    Second: () => {
        return (
            <m.svg variants={blobVariants} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[38em] left-[50em] -bottom-56 spin" style={{ animationDuration: "20s" }}>
                <path fill="#3A00B6" style={{ opacity: .23 }} d="M45.8,-78.7C59.6,-71.4,71.2,-59.6,72.1,-45.7C73,-31.8,63.2,-15.9,61.3,-1.1C59.4,13.7,65.3,27.4,61.2,35.8C57.1,44.1,43,47,31.1,48.5C19.2,50.1,9.6,50.2,-2.8,55.1C-15.2,59.9,-30.4,69.4,-43.3,68.4C-56.1,67.5,-66.7,56.1,-74.3,42.9C-81.8,29.8,-86.3,14.9,-80.8,3.2C-75.4,-8.6,-59.9,-17.1,-51.9,-29.4C-43.9,-41.8,-43.3,-57.8,-35.9,-68.8C-28.4,-79.9,-14.2,-85.8,0.9,-87.3C16,-88.9,32,-86,45.8,-78.7Z" transform="translate(100 100)" />
            </m.svg>
        )
    },
    Third: () => {
        return (
            <m.svg variants={blobVariants} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[38em] right-0 spin" style={{ animationDuration: "20s" }}>
                <path fill="#FF0066" style={{ opacity: .13 }} d="M35.5,-60.3C45.2,-55.9,51.6,-44.7,61,-33.5C70.4,-22.3,82.8,-11.2,81.1,-1C79.4,9.2,63.6,18.4,55.4,31.6C47.2,44.9,46.6,62.3,38.6,73.8C30.7,85.3,15.3,91,0.7,89.8C-13.9,88.5,-27.8,80.3,-37.7,69.9C-47.6,59.5,-53.6,47,-55.7,35C-57.8,22.9,-55.9,11.5,-56.3,-0.2C-56.8,-12,-59.4,-23.9,-56.3,-34.1C-53.2,-44.3,-44.2,-52.7,-33.9,-56.7C-23.5,-60.7,-11.8,-60.1,0.6,-61.1C12.9,-62.1,25.8,-64.6,35.5,-60.3Z" transform="translate(100 100)" />
            </m.svg>
        )
    },
    Outer: () => {
        return (
            <m.svg variants={circleVariants} width="1857" height="1857" viewBox="0 0 1857 1857" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative bottom-1/2 rotate" style={{ width: "100%" }}>
                <circle cx="928.5" cy="928.5" r="926" stroke="white" stroke-opacity="0.2" stroke-width="5" stroke-dasharray="26 26" />
            </m.svg>

        )
    },
    Inner: () => {
        return (
            <m.svg variants={circleVariants} width="1657" height="1080" viewBox="0 0 1657 1080" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute" style={{ width: "100%", animationDuration: "5s" }}>
                <circle cx="828.5" cy="572.5" r="827.5" stroke="white" stroke-opacity="0.2" stroke-width="2" stroke-dasharray="28 28" />
            </m.svg>

        )
    },
    Center: () => {
        return (
            <m.svg variants={circleVariants} width="1753" height="1080" viewBox="0 0 1753 1080" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute" style={{ width: "100%", animationDuration: "3s" }}>
                <circle cx="876.5" cy="572.5" r="875" stroke="white" stroke-opacity="0.2" stroke-width="3" stroke-dasharray="134 134" />
            </m.svg>
        )
    },
    DJS: () => {
        return (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_18_68)">
                    <path d="M0.07 12.856C0.03 12.895 0 19.0805 0 26.603V40.2836L6.32 40.2531C13.7475 40.2171 14.3935 40.1476 16.575 39.1306L17.0395 38.9131L17.098 38.2701C17.368 35.3651 19.741 33.0451 22.5315 32.9621C23.1745 32.9421 23.139 32.9786 23.5865 31.8591C24.542 29.4576 24.7565 25.3865 24.0885 22.4315C22.891 17.153 19.139 13.7895 13.553 12.9815C12.7115 12.8615 0.179 12.745 0.0705 12.8565M28.6565 26.024V39.2476L28.4365 40.1026C27.3615 44.2941 22.3875 45.887 19.1005 43.0905C18.9615 42.9705 18.6465 42.6425 18.402 42.356L17.9565 41.8381L17.443 42.069C16.327 42.573 13.8205 43.286 13.1715 43.286C12.311 43.286 14.1315 46.121 15.92 47.5635C18.165 49.377 19.995 49.989 23.136 49.9865C28.9155 49.9785 32.691 47.19 34.257 41.7785C34.7755 39.9855 34.7755 39.952 34.7505 25.8095L34.725 12.85L28.6565 12.8V26.024ZM50.9705 12.867C44.409 13.207 39.928 17.292 39.928 22.935C39.928 27.4495 42.042 30.2316 47.183 32.4901C47.81 32.7661 48.8375 33.2175 49.464 33.495C50.2829 33.8599 51.1046 34.2184 51.929 34.5705C56.552 36.5425 57.5875 37.5115 57.5875 39.8755C57.5875 45.527 48.67 46.257 42.5375 41.1045C42.167 40.793 41.836 40.5695 41.7995 40.6115L39.0145 43.912C38.865 44.0905 38.6495 44.3376 38.5355 44.4571C38.227 44.7946 38.2655 44.8671 39.163 45.6306C45.398 50.9356 54.9955 51.5655 60.4625 47.0275C64.1775 43.945 65.122 38.105 62.5515 34.0975C61.5435 32.5235 59.396 30.8075 57.4965 30.056C57.3215 29.986 57.1315 29.897 57.0785 29.855C57.0235 29.8135 56.817 29.7215 56.6225 29.649C56.2414 29.5018 55.8633 29.3468 55.4885 29.184C54.7083 28.8462 53.925 28.5159 53.1385 28.193C52.8505 28.073 52.3055 27.8445 51.9285 27.683C51.5931 27.54 51.2554 27.4025 50.9155 27.2705C47.863 26.1345 46.314 24.6555 46.2005 22.7615C45.927 18.2805 52.3665 16.774 57.8605 20.038C58.036 20.1435 58.4955 20.4665 58.886 20.7595C59.273 21.052 59.6205 21.2885 59.6605 21.286C59.7245 21.28 62.0025 18.5085 62.635 17.6655L62.891 17.3255L62.451 16.933C61.6155 16.1835 60.223 15.192 59.435 14.783C58.8025 14.454 58.6215 14.365 58.2065 14.181C56.07 13.226 53.394 12.741 50.9715 12.866M11.9945 18.741C15.503 19.228 17.433 21.7625 17.5865 26.0825C17.7395 30.4775 15.7875 33.5101 12.323 34.2626C11.429 34.4576 7.2565 34.624 6.713 34.4875L6.4825 34.4291V26.598C6.4825 22.2915 6.5075 18.739 6.541 18.7055C6.641 18.6075 11.242 18.6385 11.9945 18.7405M21.705 35.335C17.962 36.845 18.8675 42.2501 22.8615 42.2341C26.716 42.2171 27.8265 37.1256 24.3405 35.4551C23.6855 35.1401 22.337 35.0785 21.705 35.335Z" fill="white" fill-opacity="0.5" />
                </g>
                <defs>
                    <clipPath id="clip0_18_68">
                        <rect width="64" height="64" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        )
    },
    NodeJS: ({ icon }) => {
        return (
            !icon ?
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M59.7333 17.9755L32 1.79199L4.26666 17.9755V46.0245L8.55893 48.5291L17.3355 44.9792C18.5165 44.5009 19.5279 43.681 20.2402 42.6244C20.9524 41.5679 21.333 40.3227 21.3333 39.0485V17.0667H25.6V39.0485C25.5997 41.1726 24.9652 43.2483 23.7779 45.0095C22.5905 46.7708 20.9044 48.1374 18.9355 48.9344L13.2181 51.2469L32 62.208L59.7333 46.0288V17.9755ZM29.8667 25.6C29.8667 23.3368 30.7657 21.1663 32.366 19.566C33.9663 17.9657 36.1368 17.0667 38.4 17.0667H43.3792C47.6971 17.0667 51.2 20.5653 51.2 24.8875V25.6H46.9333V24.8875C46.9333 24.4207 46.8414 23.9586 46.6628 23.5273C46.4842 23.0961 46.2224 22.7043 45.8923 22.3743C45.5623 22.0443 45.1705 21.7825 44.7393 21.6039C44.3081 21.4253 43.8459 21.3333 43.3792 21.3333H38.4C37.2684 21.3333 36.1832 21.7828 35.383 22.583C34.5829 23.3832 34.1333 24.4684 34.1333 25.6C34.1333 26.7316 34.5829 27.8168 35.383 28.617C36.1832 29.4171 37.2684 29.8667 38.4 29.8667H42.6667C44.9298 29.8667 47.1003 30.7657 48.7006 32.366C50.301 33.9663 51.2 36.1368 51.2 38.4C51.2 40.6632 50.301 42.8337 48.7006 44.434C47.1003 46.0343 44.9298 46.9333 42.6667 46.9333H38.4C36.1368 46.9333 33.9663 46.0343 32.366 44.434C30.7657 42.8337 29.8667 40.6632 29.8667 38.4H34.1333C34.1333 39.5316 34.5829 40.6168 35.383 41.417C36.1832 42.2171 37.2684 42.6667 38.4 42.6667H42.6667C43.7983 42.6667 44.8835 42.2171 45.6837 41.417C46.4838 40.6168 46.9333 39.5316 46.9333 38.4C46.9333 37.2684 46.4838 36.1832 45.6837 35.383C44.8835 34.5828 43.7983 34.1333 42.6667 34.1333H38.4C36.1368 34.1333 33.9663 33.2343 32.366 31.634C30.7657 30.0337 29.8667 27.8632 29.8667 25.6Z" fill="white" fill-opacity="0.5" />
                </svg> : <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_20_76)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.72 4.79254L8.40002 -0.0625L0.0800171 4.79254V13.2073L1.3677 13.9586L4.00066 12.8937C4.35497 12.7502 4.6584 12.5042 4.87207 12.1872C5.08574 11.8703 5.19993 11.4967 5.20002 11.1145V4.5199H6.48002V11.1145C6.47993 11.7517 6.28958 12.3744 5.93338 12.9028C5.57718 13.4311 5.07133 13.8411 4.48066 14.0802L2.76546 14.774L8.40002 18.0623L16.72 13.2085V4.79254ZM7.76002 7.0799C7.76002 6.40095 8.02973 5.7498 8.50982 5.26971C8.98992 4.78961 9.64106 4.5199 10.32 4.5199H11.8138C13.1091 4.5199 14.16 5.5695 14.16 6.86614V7.0799H12.88V6.86614C12.88 6.72612 12.8524 6.58747 12.7989 6.45811C12.7453 6.32874 12.6667 6.2112 12.5677 6.11219C12.4687 6.01318 12.3512 5.93465 12.2218 5.88106C12.0924 5.82748 11.9538 5.7999 11.8138 5.7999H10.32C9.98054 5.7999 9.65497 5.93476 9.41492 6.1748C9.17487 6.41485 9.04002 6.74042 9.04002 7.0799C9.04002 7.41938 9.17487 7.74495 9.41492 7.985C9.65497 8.22504 9.98054 8.3599 10.32 8.3599H11.6C12.279 8.3599 12.9301 8.62961 13.4102 9.10971C13.8903 9.5898 14.16 10.2409 14.16 10.9199C14.16 11.5989 13.8903 12.25 13.4102 12.7301C12.9301 13.2102 12.279 13.4799 11.6 13.4799H10.32C9.64106 13.4799 8.98992 13.2102 8.50982 12.7301C8.02973 12.25 7.76002 11.5989 7.76002 10.9199H9.04002C9.04002 11.2594 9.17487 11.5849 9.41492 11.825C9.65497 12.065 9.98054 12.1999 10.32 12.1999H11.6C11.9395 12.1999 12.2651 12.065 12.5051 11.825C12.7452 11.5849 12.88 11.2594 12.88 10.9199C12.88 10.5804 12.7452 10.2548 12.5051 10.0148C12.2651 9.77476 11.9395 9.6399 11.6 9.6399H10.32C9.64106 9.6399 8.98992 9.37019 8.50982 8.89009C8.02973 8.41 7.76002 7.75885 7.76002 7.0799Z" fill="white" fill-opacity="0.5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_20_76">
                            <rect width="16.8" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
        )
    }

}

export default Blobs;