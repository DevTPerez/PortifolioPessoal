"use client"
import Image from "next/image"
import logo from "@/assets/logos/logoFir.svg"
import menu from "@/assets/icons/menu.svg"

export default function Header() {
  return (
    <header className="bg-[#000000] h-full w-full z-50">
        <div className="backdrop-blur-lg bg-[#00000080] border-b border-[#ffffff]/10 sticky top-0 left-0 w-full z-50">
            <div className="flex flex-row h-full max-h-[105px] text-white items-center justify-between px-15 py-6">
                <div
                    className="w-[132px] h-[44px]  relative"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    <Image
                    src={logo}
                    alt="FirGroup Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    />
                </div>
                <div>
                    <h2 className="text-[35px] font-light tracking-[0.2em] hidden md:block ">
                    GRUPO <span className="font-bold  tracking-tighter">FIR</span>
                    </h2>
                </div>
                <a href="#contacts" className="flex justify-center items-center text-center w-full max-w-[60px] md:max-w-[124px] h-[58px]  rounded-xl bg-white text-black font-semibold hover:bg-[rgb(230,230,230)] transition">
                    <div
                        className="w-[24px] h-[24px]  relative block md:hidden"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    >
                        <Image
                        src={menu}
                        alt="FirGroup Logo"
                        fill
                        style={{ objectFit: "contain" }}
                        />
                    </div>
                    <p className="hidden md:block">Contactos</p>
                </a>
            </div>
        </div>
    </header>
  )
}
