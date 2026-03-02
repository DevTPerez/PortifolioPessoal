"use client"
import { motion, useInView, AnimatePresence, Variants   } from "framer-motion"

import { useRef, useState } from "react"
import { useContactForm } from "@/hooks/useContactForm"
import PrivacyPolicy from "./PrivacyPolicy"

export default function Contacts() {

    const input =
        "h-[70px] w-full p-[12px] min-w-[300px] border-b border-white/30 text-white/70 outline-none focus:border-white"

    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const [openPrivacy, setOpenPrivacy] = useState(false)
    const [consent, setConsent] = useState(false)

    const { data, loading, success, error, handleChange, handleSubmit } =
        useContactForm()

    const canSubmit =
        consent &&
        !loading &&
        data.name &&
        data.email &&
        data.phone &&
        data.message

    const textItem: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    }

    const textContainer: Variants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    }

    const formVariant: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4,
            },
        },
    }

    return (
        <section
            ref={sectionRef}
            id="contato"
            className="relative py-[80px] max-w-[1440px] mx-auto bg-[#0A0A0A]"
            itemScope
            itemType="https://schema.org/ContactPage"
        >
            <h1 className="sr-only">Contacte Tiago Costa</h1>

            <div className="flex w-full h-full justify-center items-center  ">
                <div className="flex flex-col lg:flex-row text-white justify-between px-[30px] w-full gap-8 backdrop-blur-lg">

                    <motion.div
                        variants={textContainer}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        className="flex flex-col gap-8 max-w-[700px] min-w-[300px] w-full"
                    > 
                        <motion.p
                            variants={textItem}
                            className="text-[24px] md:text-[30px] min-w-[300p] text-white"
                        >
                            Entre em contacto
                        </motion.p>

                        <motion.div
                            variants={textItem}
                            className="text-white/50"
                        >
                            <p className=" text-[24px] md:text-[30px] ">
                                Vamos conversar sobre <br />
                                a sua próxima solução digital.
                            </p>

                            <p className="mt-4 text-[18px] md:text-[24px]">
                                → Projetos sob medida <br />
                                → Resposta em até 24h <br />
                                → Avaliação inicial sem compromisso
                            </p>
                        </motion.div>

                        <motion.p
                            variants={textItem}
                            className="text-white/50 text-[18px] md:text-[24px]" 
                        >
                            Ou envie email para:
                            <br />
                            perez@tiagocosta.tech
                        </motion.p>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        variants={formVariant}
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        className="flex flex-col gap-4 w-full max-w-[700px] lg:ml-auto lg:mt-auto"
                    >
                        <input
                            type="text"
                            name="company"
                            tabIndex={-1}
                            autoComplete="off"
                            className="hidden"
                        />

                        <input name="name" placeholder="Nome" value={data.name} onChange={handleChange} className={input} />
                        <input name="email" placeholder="Email" value={data.email} onChange={handleChange} className={input} />
                        <input name="phone" placeholder="Telefone" value={data.phone} onChange={handleChange} className={input} />

                        <textarea
                            name="message"
                            placeholder="Mensagem"
                            rows={3}
                            value={data.message}
                            onChange={handleChange}
                            className={`${input} resize-none`}
                        />


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
                            <p className="text-red-400 text-sm">{error}</p>
                        )}


                            <label className="flex items-center gap-2 text-white/70 text-sm">
                            <input
                                type="checkbox"
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                className="w-4 h-4 accent-black"
                            />
                            Li e concordo com a{" "}
                            <p
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setOpenPrivacy(true)
                                }}
                                className="underline cursor-pointer"
                            >
                                Política de Privacidade
                            </p>
                        </label>
                    </motion.form>
                </div>
            </div>

            <AnimatePresence>
                {openPrivacy && (
                    <PrivacyPolicy onClose={() => setOpenPrivacy(false)} />
                )}
            </AnimatePresence>
        </section>
    )
}