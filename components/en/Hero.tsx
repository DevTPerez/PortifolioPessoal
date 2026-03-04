"use client"
import heroImg from "@/public/heroImage.png"
import { motion } from "framer-motion"

export default function Hero() {

const imageVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
} as const

const textContainer = {
    hidden: {},
    show: { transition: { delayChildren: 0.4, staggerChildren: 0.18 } }
}

const textItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
} as const

const btnContainer = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 1 } }
} as const

    return (
        <section className="sticky top-0 md:relative w-full mx-auto bg-[#0A0A0A] 
            px-2.5 pb-10
            sm:px-4 sm:pb-12 
            md:px-5 md:pb-15 
            lg:px-6 lg:pb-20"
        >
            <div className="
                relative text-white
                h-[500px]          
                sm:h-[600px]      
                md:h-[700px]       
                lg:h-[766px]      
            ">
                <motion.img
                variants={imageVariant}
                initial="hidden"
                animate="show"
                src={heroImg.src}
                className="absolute inset-0 w-full max-w-[1440px] h-full  mx-auto object-cover rounded-[25px] backdrop-blur-xl"
                />
                <div className="w-full h-full absolute inset-0 backdrop-blur-[5px] to-transparent">
                </div>
                    <motion.div
                        variants={textContainer}
                        initial="hidden"
                        animate="show"
                        className="relative z-10 flex flex-col items-center justify-center h-full mx-auto max-w-[1000px] text-center px-2 "
                    >
                    <motion.h2
                        variants={textItem}
                        className="
                        text-center
                        text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px]
                        leading-tight font-bold
                        mb-4 sm:mb-5 md:mb-6 lg:mb-6
                        "
                    >
                        Digital Solutions that Deliver Results
                    </motion.h2>
                    <motion.p
                        variants={textItem}
                        className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] mb-2 sm:mb-3 md:mb-4 lg:mb-2"
                    >
                        Web, Android apps, and custom platforms
                    </motion.p>

                    <motion.p
                        variants={textItem}
                        className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] mb-4 sm:mb-5 md:mb-6 lg:mb-6"
                    >
                        Explore our products or propose a strategic partnership
                    </motion.p>
                    <motion.div
                        variants={btnContainer}
                        initial="hidden"
                        animate="show"
                        className="flex gap-4 sm:gap-8 md:gap-15 justify-center mt-10 sm:mt-12 md:mt-16 lg:mt-20"
                    >
                        <a
                            href="#contato"
                            className="
                            px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 lg:px-10 lg:py-4
                            bg-white text-black
                            rounded-full border-[2px] border-black
                            font-semibold
                            text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]
                            hover:bg-gray-300
                            transition-colors duration-300
                            "
                        >
                            Propose Partnership
                        </a>

                        <a
                            href="#portfolio"
                            className="
                            px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 lg:px-10 lg:py-4
                            bg-black text-white
                            rounded-full border border-white
                            font-semibold
                            text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]
                            hover:bg-[#0E0E0E]
                            transition-colors duration-300
                            "
                        >
                            View Products
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}