"use client"
import { LayoutDashboard, Tablet, CloudCog, Cpu } from "lucide-react"
import { JSX, useState } from "react"

const icons: { icon: JSX.Element; title: string; description: string }[] = [
    {
        icon: <LayoutDashboard size={40} />,
        title: "Custom Web Systems",
        description: "Agile platforms, dashboards, and internal systems developed to automate processes and scale operations."
    },
    {
        icon: <Tablet size={40} />,
        title: "Android & Kiosk Applications",
        description: "Native apps for tablets, TV Boxes, and dedicated devices, with continuous operation and hardware integration."
    },
    {
        icon: <CloudCog size={40} />,
        title: "SaaS Platforms & Control Panels",
        description: "Solutions with remote management, multiple users, permissions, and real-time updates."
    },
    {
        icon: <Cpu size={40} />,
        title: "Custom Technical Solutions",
        description: "Special projects that require integration between software, devices, and infrastructure."
    }

];

export default function ComoPossoAjudar() {
      const [activeIndex, setActiveIndex] = useState<number | null>(null)
    
      const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
      }
    

    return (
        <section className="bg-[#0A0A0A] lg:px-[20px]">
            <div className="relative text-white flex w-full bg-[#0A0A0A] transition-all duration-300 ease-in-out py-[80px]">
                <div className="flex    flex-col bg-[white]/5 w-full max-w-[1440px] py-[60px] px-[30px] mx-auto rounded-[25px] gap-[30px]">
                    
                    <h2 className="text-[24px]  md:text-[26px] lg:text-[30px] font-bold">This is how I can help </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] w-full">
                        {icons.map(({ icon, title, description }, i) => {
                            const isActive = activeIndex === i
                            return (
                            <div key={i} 
                                className={`
                                    flex flex-col items-start gap-[20px] p-[15px] rounded-[15px] min-h-[240px]
                                    transition-all duration-300 ease-out
                                    cursor-pointer
                                    ${isActive ? "translate-y-[-12px] shadow-[0_10px_15px_rgba(0,0,0,0.5)]" : "hover:-translate-y-3 hover:shadow-[1px_9px_10px_#000]"}
                                `}
                                onClick={() => handleToggle(i)}
                                >
                                <div className="w-[40px] h-[40px]">{icon}</div>
                                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] ">{title}</h3>
                                <p className="text-[14px] lg:text-[18px] font-light text-[#777777] max-w-[480px] max-h-[150px]">{description}</p>
                            </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}