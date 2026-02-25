"use client"
import Image from "next/image"
import stage from "@/assets/images/stage.png"
import tech from "@/assets/images/tech.png"
import pulse from "@/assets/images/pulse.png"
import rEstate from "@/assets/images/state.png"
import { motion } from "framer-motion"
import { JSX } from "react"
import { Radar, Network, Layers, Timer, RefreshCcw  } from "lucide-react"

const icons: { icon: JSX.Element; title: string; description: string }[] = [
    {
        icon: <Radar size={100}  className="text-[#777777] mx-auto"/>,
        title: "Diagnóstico  estratégico",
        description: "Agilidade Plataformas, dashboards e sistemas internos desenvolvidos para automatizar processos e escalar operações."
    },
    {
        icon: <Network size={100} className="text-[#777777] mx-auto" />,
        title: "Arquitetura da solução",
        description: "Apps nativos para tablets, TV Box e dispositivos dedicados, com operação contínua e integração com hardware."
    },
    {
        icon: <Layers size={100} className="text-[#777777] mx-auto" />,
        title: "Construção incremental",
        description: "Soluções com gestão remota, múltiplos usuários, permissões e atualização em tempo real."
    },
    {
        icon: <Timer size={100} className="text-[#777777] mx-auto" />,
        title: "Agilidade na entrega",
        description: "Projetos especiais que exigem integração entre software, dispositivos e infraestrutura."
    },
    {
        icon: <RefreshCcw size={100} className="text-[#777777] mx-auto" />,
        title: "Evolução contínua",
        description: "Projetos especiais que exigem integração entre software, dispositivos e infraestrutura."
    }

];

export default function Hero() {
    return (
        <section className="bg-[#0A0A0A] flex w-full max-w-[1440px] mx-auto z-20">
            <div className="bg-[#0A0A0A] w-fullflex flex-col py-[80px] px-[30px] z-20" >
                <h2 className="text-[30px] font-bold bg-[#0A0A0A] z-999" >Minha abordagem</h2>
                <div className="
                    relative text-white flex w-full bg-[#0A0A0A] transition-all duration-300 ease-in-out justify-between
                ">
                
                    <div
                        className="
                            w-full flex mx-auto itens-center justify-center transition-all duration-300
                            flex flex-wrap
                            md:justify-between
                            gap-y-10
                    "
                    >
                
                        {icons.map((item, index) => (
                            <div className="cursor-pointer h-[250] w-[250px] my-auto">
                                <div
                                    className="bg-[#0A0A0A] relative flex flex-col text-center items-center
                                        w-full h-full max-w-[293px] max-h-[350px]
                                        my-auto p-[10px] rounded-[20px]
                                        transition-transform duration-300
                                        active:scale-90
                                        group"
                                >
                                    <div
                                        className="
                                            absolute top-1/2 -translate-y-2/3
                                            transition-all duration-300
                                            group-hover:-translate-y-[150px]
                                            group-hover:blur-[10px]
                                            will-change-transform
                                            z-0
                                        "
                                    >
                                        {item.icon}
                                    </div>
                                    <div
                                        className="
                                            absolute top-1/2 -translate-y-1/2
                                            opacity-0
                                            scale-50
                                            transition-all duration-300
                                            group-hover:opacity-100
                                            group-hover:scale-100
                                            z-0
                                        "
                                    >
                                        {item.description}
                                    </div>
                                    <div
                                        className="
                                            mt-auto flex flex-col
                                            transition-all duration-300
                                            group-hover:blur-[10px]
                                            z-0
                                        "
                                    >
                                        <p className="font-bold text-[22px] max-w-[180px]">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                
                </div>
            </div>
            
        </section>
    )
}
/**
 * 
 * stage. pulse. estate.
    covering all areas
 */