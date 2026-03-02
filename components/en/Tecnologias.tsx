/* eslint-disable @next/next/no-img-element */
"use client"
import { motion } from "framer-motion"
import { Plug } from "lucide-react"
import { JSX } from "react"

const icons: JSX.Element[] = [
  <img key="Next.js" src="/next-16.svg" alt="Next.js" className="w-[100px] h-[100px]" />,
  <img key="React" src="/react-16.svg" alt="React" className="w-[100px] h-[100px]" />,
  <img key="Kotlin" src="/kotlin-16.svg" alt="Kotlin" className="w-[100px] h-[100px]" />,
  <img key="Node.js" src="/node-16.svg" alt="Node.js" className="w-[100px] h-[100px]" />,
  <img key="Docker" src="/docker-16.svg" alt="Docker" className="w-[100px] h-[100px]" />,
  <img key="SQL" src="/database-outline.svg" alt="Database" className="w-[100px] h-[100px]" />,
  <img key="CSS-Tailwind" src="/css-16.svg" alt="CSS-Tailwind" className="w-[100px] h-[100px]" />,
  <img key="Git/GitHub" src="/github-logo.svg" alt="GitHub" className="w-[100px] h-[100px]" />,
  <Plug key="APIs" className="w-[100px] h-[100px] text-[#777777]" />,
]

export default function Technology() {
  const iconsLoop = [...icons, ...icons]

    return (
        <section className="bg-[#0A0A0A] lg:px-[50px] ">
            <div className="relative text-white flex flex-col w-full max-w-[1440px] mx-auto gap-[60px] overflow-x-hidden bg-[#0A0A0A] py-[80px]">
                <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold ml-[30px] bg-[#0A0A0A]">
                    Main Technologies
                </h2>

                <div className="overflow-hidden w-full bg-[#0A0A0A]">
                <motion.div
                    className="flex gap-[100px] w-max pr-[30px]"
                    animate={{ x: ["0%", "-51%"] }}
                    transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
                    }}
                >
                    {iconsLoop.map((icon, i) => (
                    <div 
                        className="text-center flex flex-col gap-[10px] items-center"
                        key={i}
                    >
                        {icon}
                        {icon.key}
                    </div>
                    ))}
                </motion.div>
                </div>
            </div>
        </section>
    )
}