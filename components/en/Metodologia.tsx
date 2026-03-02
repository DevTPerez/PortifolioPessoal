"use client"
import { useState, JSX } from "react"
import { Radar, Network, Layers, Timer, RefreshCcw  } from "lucide-react"

const icons: { icon: JSX.Element; title: string; description: string }[] = [
    {
        icon: <Radar size={100}  className="text-[#777777] mx-auto"/>,
        title: "Strategic Diagnosis",
        description: "Business analysis to identify real needs, priorities, and opportunities."
    },
    {
        icon: <Network size={100} className="text-[#777777] mx-auto" />,
        title: "Solution Architecture",
        description: "Technical planning that ensures performance, stability, and scalability."
    },
    {
        icon: <Layers size={100} className="text-[#777777] mx-auto" />,
        title: "Incremental Build",
        description: "Development in short cycles, with continuous deliveries and progressive evolution."
    },
    {
        icon: <Timer size={100} className="text-[#777777] mx-auto" />,
        title: "Delivery Agility",
        description: "Optimized workflow that accelerates execution without compromising quality."
    },
    {
        icon: <RefreshCcw size={100} className="text-[#777777] mx-auto" />,
        title: "Continuous Improvement",
        description: "Ongoing improvements based on data, real usage, and new business opportunities."
    }
];

export default function Methodology() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
    }
    
    return (
        <section className="bg-[#0A0A0A] flex w-full max-w-[1440px] mx-auto z-20">
      <div className="bg-[#0A0A0A] w-full flex flex-col py-[80px] px-[30px] z-20">
        <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold text-white mb-10">
          My approach
        </h2>

        <div className="relative w-full flex flex-wrap gap-8 justify-center md:justify-between">
          {icons.map((item, idx) => {
            const isActive = activeIndex === idx

            return (
              <div
                key={item.title}
                className="cursor-pointer w-[250px] h-[250px] md:h-[350px] relative"
                onClick={() => handleToggle(idx)}
              >
                <div
                  className={`group flex flex-col items-center text-center w-full h-full max-w-[293px] max-h-[350px] p-[10px] rounded-[20px] transition-transform duration-300 active:scale-90`}
                >
                  <div
                    className={`
                      absolute top-1/2 -translate-y-2/3 transition-all duration-300
                      ${isActive ? "-translate-y-[150px] blur-[10px]" : "group-hover:-translate-y-[150px] group-hover:blur-[10px]"}
                      will-change-transform z-0
                    `}
                  >
                    {item.icon}
                  </div>
                  <div
                    className={`
                      absolute top-1/2 -translate-y-1/2 transition-all duration-300
                      ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"}
                      z-0
                    `}
                  >
                    <p className="text-[16px] text-[#fff] max-w-[180px]">{item.description}</p>
                  </div>
                  <div
                    className={`
                      mt-auto flex flex-col transition-all duration-300
                      ${isActive ? "blur-[10px]" : "group-hover:blur-[10px]"} z-0
                    `}
                  >
                    <h3 className="font-bold md:text-[22px] text-[#fff] max-w-[180px]">{item.title}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    )
}