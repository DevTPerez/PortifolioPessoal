"use client"
import { LayoutDashboard, Tablet, CloudCog, Cpu } from "lucide-react"
import { JSX } from "react"

const icons: { icon: JSX.Element; title: string; description: string }[] = [
    {
        icon: <LayoutDashboard size={40} />,
        title: "Sistemas Web Sob Medida",
        description: "Agilidade Plataformas, dashboards e sistemas internos desenvolvidos para automatizar processos e escalar operações."
    },
    {
        icon: <Tablet size={40} />,
        title: "Aplicações Android & Kiosk",
        description: "Apps nativos para tablets, TV Box e dispositivos dedicados, com operação contínua e integração com hardware."
    },
    {
        icon: <CloudCog size={40} />,
        title: "Plataformas SaaS & Painéis de Controle",
        description: "Soluções com gestão remota, múltiplos usuários, permissões e atualização em tempo real."
    },
    {
        icon: <Cpu size={40} />,
        title: "Soluções Técnicas Personalizadas",
        description: "Projetos especiais que exigem integração entre software, dispositivos e infraestrutura."
    }

];



export default function ComoPossoAjudar() {
    return (
        <section className="bg-[#0A0A0A] lg:px-[20px]">
            <div className="relative text-white flex w-full bg-[#0A0A0A] transition-all duration-300 ease-in-out py-[20px]">
                <div className="flex flex-col bg-[white]/5 w-full max-w-[1440px] py-[60px] px-[30px] mx-auto rounded-[25px] gap-[30px]">
                    
                    <h2 className="text-[30px] font-bold">Como posso ajudar! </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] w-full">
                        {icons.map(({ icon, title, description }, i) => (
                        <div key={i} className="flex flex-col items-start gap-[20px] p-[5px] rounded-[15px] min-h-[240px]
                            transition-all duration-300 ease-out
                            hover:-translate-y-3 hover:shadow-[1px_9px_10px_#000]
                        ">
                            <div className="w-[40px] h-[40px]">{icon}</div>
                            <span className="font-normal text-[24px] ">{title}</span>
                            <span className="text-[18px] font-light text-[#777777] max-w-[480px] max-h-[150px]">{description}</span>
                        </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
