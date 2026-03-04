"use client"
import { useState } from "react"
import { motion } from "framer-motion"

const textH2 = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
} as const

const textH3 = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
} as const

const cards = [
  {
    id: 1,
    title: "Digital Solutions Architecture",
    subtitle: "→ focus on performance and scalability",
    description: (
      <p>
        We create robust and scalable systems that grow alongside your business.
        Each solution is designed to avoid rework, optimize resources, and enable
        future integrations in a simple way. We ensure consistent performance,
        security, and a solid foundation to support growing demands without
        compromising the user experience.
      </p>
    )
  },
  {
    id: 2,
    title: "Custom Development",
    subtitle: "→ web, Android and integrations",
    description: (
      <p>
        We develop customized applications that perfectly adapt to your company’s workflow.
        Whether web, mobile, or system integrations, our solutions increase productivity,
        reduce operational costs, and streamline internal processes, allowing you to focus
        on strategic business growth.
      </p>
    )
  },
  {
    id: 3,
    title: "Technical Partnership",
    subtitle: "→ startups and growing companies",
    description: (
      <p>
        We act as a strategic technical arm, offering continuous support,
        technology consulting, and guidance for critical decisions. Our partnership ensures
        that your company uses the right technology at the right time, accelerating results,
        mitigating risks, and maximizing innovation opportunities.
      </p>
    )
  }
]

export default function Credibilidade() {
  const [activeIndex, setActiveIndex] = useState(1)

  const handleSelectIndex = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="relative bg-[#0A0A0A] lg:px-[20px]">
      <div className="relative text-white flex w-full py-[100px]">
        <div className="flex flex-col bg-white/5 w-full max-w-[1440px] py-[80px] px-[40px] mx-auto rounded-[25px] gap-[60px] relative">

          <motion.h2
            variants={textH2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[28px] md:text-[30px] lg:text-[34px] font-bold"
          >
            Credibility & Innovation
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-[50px] md:gap-[100px] ">
            <div className=" order-2 md:order-1 flex flex-col w-full gap-[40px] max-w-[512px]">
              <motion.div
                variants={textH3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="text-[18px] md:text-[20px] lg:text-[24px] flex flex-col gap-[35px] leading-snug"
              >
                {cards.map((card) => (
                  <motion.h3
                    key={card.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeIndex === card.id
                        ? "text-white"
                        : "text-[#777777] hover:text-white/70"
                    }`}
                    onClick={() => handleSelectIndex(card.id)}
                  >
                    {card.title}
                    <br />
                    <span className="text-[16px] md:text-[20px] text-[#777777]">
                      {card.subtitle}
                    </span>
                  </motion.h3>
                ))}
              </motion.div>

              <a
                href="#contact"
                className="
                  px-8 py-3 max-w-[235px] text-center
                  bg-white text-black rounded-full
                  font-semibold text-[15px]
                  hover:bg-gray-300 transition-colors duration-300"
              >
                Propose Partnership
              </a>
            </div>

            <div className="order-1 md:order-2 flex relative w-full max-w- h-full min-h-[350px] perspective-[1200px]">
              {cards.map((card, index) => {
                const position =
                  (index - activeIndex + cards.length) % cards.length
                return (
                  <motion.div
                    key={card.id}
                    className=" absolute  min-h-[350px] right-0 w-full bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl cursor-pointer"
                    style={{
                      zIndex: cards.length - position
                    }}
                    animate={{
                      y: position * -20,
                      scale: 1 - position * 0.06,
                      opacity: 1 - position * 0.25,
                      rotate: position * -4,
                      boxShadow:
                        position === 0
                          ? "0px 25px 80px rgba(0,0,0,0.7)"
                          : "0px 10px 30px rgba(0,0,0,0.4)"
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    onClick={() =>
                      setActiveIndex((prev) =>
                        (prev + 1) % cards.length
                      )
                    }
                  >
                    <p className="flex text-[14px] sm:text-[16px] lg:text-[20px] my-auto text-[#cccccc] leading-relaxed">
                      {card.description}
                    </p>
                    <span className="absolute bottom-0 right-10 text-[200px] font-bold text-white/10">
                      {activeIndex}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}