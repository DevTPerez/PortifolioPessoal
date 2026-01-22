"use client"
import Image from "next/image"
import heroImg from "@/assets/images/heroImage.png"
import logo from "@/assets/logos/logoFir.svg"
import { motion } from "framer-motion"


export default function Hero() {

const bgVariant = {
    hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.9, ease: "easeOut" 
            }
        }
    } as const

    const textContainer = {
        hidden: {},
        show: {
            transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
            }
        }
    }

    const textItem = {
        hidden: { opacity: 0, y: 25 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6, ease: "easeOut"
            }
        }
    } as const

    return (
        <section className="sticky top-10 md:relative block">
            <div className="relative text-white h-[363px] sm:h-[566px] md bg-[#000000] transition-all duration-300 ease-in-out
                    h-[363px]
                    sm:h-[566px]
                    md:h-[660px]
                    lg:h-[766px]
                    xl:h-screen
            ">
                <motion.div
                    variants={bgVariant}
                    initial="hidden"
                    animate="show"
                    style={{ backgroundImage: `url(${heroImg.src})` }}
                    className="
                        absolute inset-0 md:inset-5 bg-cover bg-center  md:my-[40px] flex
                        max-h-[363px] 
                        sm:max-h-[566px] 
                        md:max-h-[660px]
                        lg:max-h-[766px]
                    "
                >
                    <div 
                        className="absolute right-[50px] top-[100px] max-w-[175px] flex flex-col gap-[20px] hidden md:flex">
                        <div className="w-[175px] h-[80px]  relative">
                            <Image
                                src={logo}
                                alt="FirGroup Logo"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        <h2 className="text-[28px] font-light">
                            GRUPO <span className="font-bold tracking-tighter ">FIR</span>
                        </h2>
                    </div>
                    <motion.div
                        variants={textContainer}
                        initial="hidden"
                        animate="show"
                        className="mt-auto mx-auto flex flex-col text-center mb-[10px]"
                    >
                        <motion.h2
                            variants={textItem}
                            className=" text-[37px] md:text-[52px] lg:text-[64px] lg:text-[89px]"
                        >
                            stage. pulse. estate.
                        </motion.h2>

                        <motion.p
                            variants={textItem}
                            className="text-[21px]"
                        >
                            covering all areas
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
/**
 * 
 * stage. pulse. estate.
    covering all areas
 */