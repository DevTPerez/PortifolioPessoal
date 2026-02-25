"use client"
import Image from "next/image"
import stage from "@/assets/images/stage.png"
import tech from "@/assets/images/tech.png"
import pulse from "@/assets/images/pulse.png"
import rEstate from "@/assets/images/state.png"


export default function Hero() {
    return (
        <section>
            <div className="
                relative text-white flex w-full bg-[#000000] transition-all duration-300 ease-in-out
            ">
                <div
                    className=" 
                        h-full flex gap-[5px] mx-auto flex-col         
                        xl:h-[515px] xl:flex xl:flex-row
                        lg:grid lg:grid-cols-2 lg:h-full
                        md:grid md:grid-cols-2 md:h-full
                        

                "
                >
                    <div className="cursor-pointer h-[440px] w-[293px] my-auto">

                        <div className="sr-only">
                            Booths for Exhibitions, Events, firstage
                        </div>

                        <div
                            className="bg-[rgb(10,10,10)] relative flex flex-col text-center items-center
                                w-full h-full
                                my-auto p-[40px] rounded-[20px]
                                transition-transform duration-300
                                active:scale-90
                                group"
                        >
                            <a
                                href="https://www.firstage.pt"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar site Firstage"
                                className="absolute inset-0 z-10"
                            />

    
                            <div
                                className="
                                    absolute top-1/2 -translate-y-1/2
                                    w-[251px] h-[80px] relative
                                    transition-all duration-300
                                    group-hover:-translate-y-[150px]
                                    group-hover:blur-[10px]
                                    will-change-transform
                                    z-0
                                "
                            >
                                <Image
                                    src={stage}
                                    alt="FirGroup Logo"
                                    fill
                                    sizes="(max-width: 768px) 200px, 251px"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>


                            <div
                                className="
                                    absolute top-1/2 -translate-y-1/2
                                    opacity-0
                                    transition-opacity duration-300
                                    group-hover:opacity-100
                                    z-0
                                "
                            >
                                www.firstage.pt
                            </div>

                            <div
                                className="
                                    mt-auto flex flex-col
                                    transition-all duration-300
                                    group-hover:blur-[10px]
                                    z-0
                                "
                            >
                                <p className="text-white/50 text-[13px]">
                                    Booths for Exhibitions and Events
                                </p>
                                <p className="font-bold text-[22px]">
                                    firstage
                                </p>
                            </div>
                        </div>
                    </div>


                   <div className="cursor-pointer h-[440px] w-[293px] my-auto">
                        <div className="sr-only">
                            Retail Tech Solutions, firtech
                        </div>
                        <div
                            className="bg-[rgb(10,10,10)] relative flex flex-col text-center items-center
                                w-full h-full max-w-[293px] max-h-[440px]
                                my-auto p-[40px] rounded-[20px]
                                transition-transform duration-300
                                active:scale-90
                                group"
                        >
                            <a
                                href="https://www.firtech.pt"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar site Firtech"
                                className="absolute inset-0 z-10"
                            />
                            <div
                                className="
                                    absolute top-1/2 -translate-y-1/2
                                    w-[191] h-[80px]
                                    transition-all duration-300
                                    group-hover:-translate-y-[150px]
                                    group-hover:blur-[10px]
                                    will-change-transform
                                    z-0
                                "
                            >
                                <Image
                                    src={tech}
                                    alt="FirGroup Logo"
                                    fill
                                    sizes="(max-width: 768px) 200px, 251px"
                                    className="object-contain"
                                />
                            </div>


                            <div
                                className="
                                    absolute top-1/2 -translate-y-1/2
                                    opacity-0
                                    transition-opacity duration-300
                                    group-hover:opacity-100
                                    z-0
                                "
                            >
                                www.firtech.pt
                            </div>

                            <div
                                className="
                                    mt-auto flex flex-col
                                    transition-all duration-300
                                    group-hover:blur-[10px]
                                    z-0
                                "
                            >
                                <p className="text-white/50 text-[13px]">
                                    Retail Tech Solutions
                                </p>
                                <p className="font-bold text-[22px]">
                                    firtech
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer h-[440px] w-[293px] my-auto">
                        <div className="sr-only">
                            Social Media Advertising, Digital Advertising, firpulse
                        </div>
                        <div
                            className="bg-[rgb(10,10,10)] relative flex flex-col text-center items-center
                                w-full h-full max-w-[293px] max-h-[440px]
                                my-auto p-[40px] rounded-[20px]
                                transition-transform duration-300
                                active:scale-90
                                group"
                        >
                            <a
                                className="absolute inset-0 z-10"
                            />
                            <div
                                className="
                                    absolute top-1/2 -translate-y-1/2
                                    w-[191] h-[80px]
                                    transition-all duration-300
                                    group-hover:-translate-y-[120px]
                                    group-hover:blur-[10px]
                                    will-change-transform
                                    z-0
                                "
                            >
                                <Image
                                    src={pulse}
                                    alt="FirGroup Logo"
                                    fill
                                    sizes="(max-width: 768px) 200px, 251px"
                                    className="object-contain"
                                />
                            </div>


                            <div
                                className="
                                    absolute top-1/2 -translate-y-1/2
                                    opacity-0
                                    transition-opacity duration-300
                                    group-hover:opacity-100
                                    z-0
                                "
                            >
                                SOON
                            </div>

                            <div
                                className="
                                    mt-auto flex flex-col
                                    transition-all duration-300
                                    group-hover:blur-[10px]
                                    z-0
                                "
                            >
                                <p className="text-white/50 text-[13px]">
                                    Social Media and Digital Adversiting
                                </p>
                                <p className="font-bold text-[22px]">
                                    firpulse
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer h-[440px] w-[293px] my-auto">
                        <div className="sr-only">
                            Retail Estate Specialist, firestate
                        </div>
                        <div
                            className="bg-[rgb(10,10,10)] relative flex flex-col text-center items-center
                                w-full h-full max-w-[293px] max-h-[440px]
                                my-auto p-[40px] rounded-[20px]
                                transition-transform duration-300
                                active:scale-90
                                group"
                        >
                            <a
                                className="absolute inset-0 z-10"
                            />
                            <div
                                className="
                                    absolute top-1/2 -translate-y-1/2
                                    w-[191] h-[80px]
                                    transition-all duration-300
                                    group-hover:-translate-y-[120px]
                                    group-hover:blur-[10px]
                                    will-change-transform
                                    z-0
                                "
                            >
                                <Image
                                    src={rEstate}
                                    alt="FirGroup Logo"
                                    fill
                                    sizes="(max-width: 768px) 200px, 251px"
                                    className="object-contain"
                                />
                            </div>


                            <div
                                className="
                                    absolute top-1/2 -translate-y-1/2
                                    opacity-0
                                    transition-opacity duration-300
                                    group-hover:opacity-100
                                    z-0
                                "
                            >
                                SOON
                            </div>

                            <div
                                className="
                                    mt-auto flex flex-col
                                    transition-all duration-300
                                    group-hover:blur-[10px]
                                    z-0
                                "
                            >
                                <p className="text-white/50 text-[13px]">
                                    Retail Estate Especialist
                                </p>
                                <p className="font-bold text-[22px]">
                                    firestate
                                </p>
                            </div>
                        </div>
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