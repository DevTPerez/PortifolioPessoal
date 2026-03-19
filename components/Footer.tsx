"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } }
  } as const

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const

  return (
    <footer ref={footerRef} className="bg-[#0A0A0A] text-white py-[80px] border-t border-white/10">
      <motion.div
        className="w-full"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="w-full max-w-[1440px] px-[30px] flex flex-col lg:flex-row justify-between gap-10 mx-auto">

          <motion.div variants={itemVariant} className="flex flex-col min-w-[300px] gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail className="text-[25px]" />
                <a href="mailto:perez@tiagocosta.tech" className="text-[18px] md:text-[20px] hover:underline">
                  perez@tiagocosta.tech
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[25px]" />
                <a href="tel:+351966316179" className="text-[18px] md:text-[20px] hover:underline">
                  +351 966 316 179
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[25px]" />
                <p className="text-[18px] md:text-[20px]">Aveiro - Portugal</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariant} className="flex gap-6 items-center justify-center lg:justify-end w-full">
            <a href="https://github.com/DevTPerez" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <SiGithub className="text-[50px] cursor-pointer transition-transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/tiagocostaperez/?skipRedirect=true" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <SiLinkedin className="text-[50px] cursor-pointer transition-transform hover:scale-110" />
            </a>
          </motion.div>

        </div>
      </motion.div>
    </footer>
  )
}