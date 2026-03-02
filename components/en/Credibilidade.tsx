"use client"
import { motion } from "framer-motion"

const textH2= {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
} as const

const textH3= {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
} as const

export default function Credibility() {
    return (
        <section className="bg-[#0A0A0A] lg:px-[20px]">
            <div className="
                relative text-white flex w-full bg-[#0A0A0A] transition-all duration-300 ease-in-out py-[80px]
            ">
                <div className="flex flex-col bg-[white]/5 w-full max-w-[1440px] py-[60px] px-[30px] mx-auto rounded-[25px] gap-[30px]">

                    <motion.h2
                        variants={textH2}
                        initial="hidden"
                        whileInView="show"
                        className="text-[24px] md:text-[26px] lg:text-[30px] font-bold"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Credibility & Innovation
                    </motion.h2>

                    <motion.div
                        variants={textH3}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#777777] flex flex-col gap-[30px] leading-tight"
                    >
                        <motion.h3 variants={textH3}>
                            Digital solutions architecture<br />
                            → focus on performance and scalability
                        </motion.h3>

                        <motion.h3 variants={textH3}>
                            Custom development<br />
                            → web, Android, and integrations
                        </motion.h3>

                        <motion.h3 variants={textH3}>
                            Technical partnership<br />
                            → startups and growing companies
                        </motion.h3>
                    </motion.div>

                </div>
                
            </div>
            
        </section>
    )
}