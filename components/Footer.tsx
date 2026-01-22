"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(footerRef, { once: true, margin: "100px" })


    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } }
    } as const


    const itemVariant = {
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    } as const

    return (
        <footer ref={footerRef} className="bg-[#000000] text-white flex items-center justify-start  border-t border-[#ffffff]/10 ">
            <motion.div
                className="w-full flex relative bg-[#000000]"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <div className="w-full max-w-[1000px] flex flex-col md:flex-row justify-between md:items-start gap-6 text-center md:text-start mx-auto px-6 mt-[50px] ">

                    <motion.div variants={itemVariant}>
                        <p className="text-white/50 text-[17px] md:mb-[24px]">Fale connosco</p>
                        <p className="text-[25px]">grupofir@grupofir.pt</p>
                        <p className="text-[25px]">+351 234 106 625</p>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <p className="text-white/50 text-[17px] md:mb-[24px]">Onde estamos</p>
                        <p className="text-[17px]">PORTUGAL</p>
                        <p className="text-[17px] md:mb-[24px]">Aveiro - Lisboa</p>
                        <p className="text-[17px]">ESPANHA</p>
                        <p className="text-[17px] md:mb-[37px]">Madrid</p>
                    </motion.div>

                    <motion.div variants={itemVariant}>
                        <p className="text-white/50 text-[17px] md:mb-[24px]">Follow us</p>
                        <a
                            className="text-[17px] mb-[37px] block"
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visitar LinkedIn Grupo FIR"
                        >
                            LinkedIn
                        </a>
                    </motion.div>

                </div>
            </motion.div>
        </footer>
    )
}
