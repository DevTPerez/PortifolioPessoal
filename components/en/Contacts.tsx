"use client"
import { motion, useInView, AnimatePresence  } from "framer-motion"
import { useRef, useState } from "react"
import { useContactForm } from "@/hooks/useContactForm"
import PrivacyPolicy from "./PrivacyPolicy"

export default function Contacts() {
    const input = "h-[70px] w-full p-[12px] min-w-[300px] border-b-[1px] border-white/30 text-white/30 outline-none focus:ring-0 focus:outline-none focus:border-none"

    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "0px" }) 
    const [openPrivacy, setOpenPrivacy] = useState(false)

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            }
        }
    }

    const { data, loading, success, error, handleChange, handleSubmit } = useContactForm()


    const [consent, setConsent] = useState(false)
    const canSubmit = consent && !loading && data.name && data.email && data.phone && data.message


    const textVariant = {
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    } as const

    const formVariant = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
    } as const

    return (
        <section ref={sectionRef} id="contacts" className="md:h-[715px] flex" itemScope itemType="https://schema.org/ContactPage">
            <h1 className="sr-only">
                Contacte a Firstage
            </h1>
            <div className="sr-only">
                form, contact form, nome, email, telefone, mensagem, firstage, firtech 
            </div>
            <div className="flex w-full h-full bg-black h-[715px] ">
                <motion.div
                    className="flex flex-col lg:flex-row text-white justify-between px-15 py-6 w-full relative mt-auto gap-8 bg-black/50 backdrop-blur-lg "
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                >
                    <motion.div
                        className="relative flex flex-row items-center min-w-[350px] mb-auto min-w-[200px] mt-[30px] md:mt-0"
                        variants={textVariant}
                    >
                        <span className="bg-white w-[10px] h-[10px] rounded-full"></span>
                        <p className="tracking-[0.5em] ml-2 text-white/50">FALE CONNOSCO</p>
                    </motion.div>
                    
                    <motion.form
                        onSubmit={handleSubmit}
                        className="flex max-w-[1000px] flex-col gap-4 w-full  min-h-[300px] lg:ml-auto lg:mt-auto"
                        variants={formVariant}
                    >
                        <div className="flex flex-col gap-4 w-full">
                            <input
                                type="text"
                                name="company"
                                tabIndex={-1}
                                autoComplete="off"
                                className="hidden"
                            />
                            <input
                                name="name"
                                placeholder="Nome"
                                value={data.name}
                                onChange={handleChange}
                                className={input}
                            />
                            <input
                                name="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={handleChange}
                                className={input}
                            />
                            <input
                                name="phone"
                                placeholder="Telefone"
                                value={data.phone}
                                onChange={handleChange}
                                className={input}
                            />
                            <textarea
                                name="message"
                                placeholder="Mensagem"
                                value={data.message}
                                onChange={handleChange}
                                rows={3}
                                className={`${input} resize-none `}
                            />
                            <label className="flex items-center gap-2 text-white/70 text-sm">
                                <input
                                    type="checkbox"
                                    checked={consent}
                                    onChange={(e) => setConsent(e.target.checked)}
                                     className="w-4 h-4 accent-white border border-white rounded"
                                />
                                Li e concordo com a 
                                <span
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setOpenPrivacy(true)
                                    }}
                                    className="underline cursor-pointer"
                                    >
                                    Política de Privacidade
                                </span>
                            </label>

                             <button
                                disabled={!canSubmit}
                                className="h-[40px] w-full max-w-[132px] rounded-[20px] border border-white/30 hover:bg-white hover:text-black transition disabled:opacity-50"
                            >
                                {loading ? "A enviar..." : "Enviar"}
                            </button>
                            

                            {success && (
                                <p className="text-green-400 text-sm">
                                    Mensagem enviada com sucesso
                                </p>
                            )}

                            {error && (
                                <p className="text-red-400 text-sm">
                                    {error}
                                </p>
                            )}
                        </div>
                    </motion.form>
                </motion.div>
            </div>
            <AnimatePresence>
                {openPrivacy && (
                <PrivacyPolicy
                    key="privacy"
                    onClose={() => setOpenPrivacy(false)} />
                )}
            </AnimatePresence>
        </section>
    )
}

