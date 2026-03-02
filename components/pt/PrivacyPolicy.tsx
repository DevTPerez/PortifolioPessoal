"use client"
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function PrivacyPolicy({ onClose }: { onClose: () => void }) {
    const subT = "font-bold"

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", handleEsc)
        return () => document.removeEventListener("keydown", handleEsc)
    }, [onClose])

    return (
        <motion.div
            className="privacy-scroll fixed top-0 left-0 w-full h-screen z-50 bg-white/10 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-black text-white/70 max-w-[1440px] w-full max-h-[90vh] overflow-y-auto p-8 rounded-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl mb-4">Política de Privacidade</h2>

                <p className={subT}>POLÍTICA DE PRIVACIDADE</p>
                <p className="text-[12px]">Última atualização: 28 de fevereiro de 2026</p>

                <p className={`${subT} mt-[20px]`}>1. Objeto e Enquadramento Legal</p>
                <p>
                    Esta Política de Privacidade regula o tratamento de dados pessoais recolhidos através deste site/portfólio, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) (Regulamento (UE) 2016/679) e a legislação nacional aplicável.
                </p>

                <p className={`${subT} mt-[20px]`}>2. Identificação do Responsável pelo Tratamento</p>
                <p>
                    O responsável pelo tratamento dos dados pessoais é Tiago Costa, titular deste portfólio pessoal.  
                    Email de contacto: <span className="underline">hello@tiagocosta.tech</span>
                </p>

                <p className={`${subT} mt-[20px]`}>3. Âmbito de Aplicação</p>
                <p>
                    Esta Política aplica-se a todos os dados pessoais fornecidos voluntariamente através de formulários de contacto ou comunicação direta.
                </p>

                <p className={`${subT} mt-[20px]`}>4. Recolha de Dados</p>
                <p>
                    Os dados recolhidos incluem nome, email, telefone e mensagem enviados pelo formulário de contacto. Estes dados são utilizados exclusivamente para responder ao seu pedido ou comunicação.
                </p>

                <p className={`${subT} mt-[20px]`}>5. Finalidades do Tratamento</p>
                <p>
                    Os dados são tratados apenas para responder a pedidos de contacto, esclarecer dúvidas ou enviar informações sobre projetos e serviços. Nenhum dado será utilizado para fins comerciais externos ou partilhado com terceiros sem consentimento.
                </p>

                <p className={`${subT} mt-[20px]`}>6. Fundamento Jurídico</p>
                <p>
                    O tratamento dos dados baseia-se no consentimento do titular, fornecido ao submeter o formulário, e na execução de diligências pré-contratuais quando aplicável.
                </p>

                <p className={`${subT} mt-[20px]`}>7. Conservação dos Dados</p>
                <p>
                    Os dados são armazenados apenas pelo tempo necessário para processar o pedido ou comunicação. Findo esse período, os dados serão eliminados de forma segura.
                </p>

                <p className={`${subT} mt-[20px]`}>8. Segurança da Informação</p>
                <p>
                    São adotadas medidas técnicas e organizativas adequadas para proteger os dados contra acesso não autorizado, perda, alteração ou divulgação.
                </p>

                <p className={`${subT} mt-[20px]`}>9. Direitos dos Titulares</p>
                <p>
                    O titular pode, a qualquer momento, solicitar acesso, retificação, apagamento ou limitação do tratamento dos seus dados, bem como retirar o consentimento. As solicitações devem ser enviadas para <span className="underline">hello@tiagocosta.tech</span>.
                </p>

                <p className={`${subT} mt-[20px]`}>10. Cookies</p>
                <p>
                    Este portfólio não utiliza cookies de rastreio pessoal, apenas cookies essenciais de funcionamento.
                </p>

                <p className={`${subT} mt-[20px]`}>11. Alterações</p>
                <p>
                    Esta Política poderá ser atualizada periodicamente. As alterações passam a vigorar na data da publicação.
                </p>

                <p className={`${subT} mt-[20px]`}>12. Contactos</p>
                <p>
                    Para questões sobre esta Política ou sobre os seus dados pessoais, contacte: <span className="underline">hello@tiagocosta.tech</span>.
                </p>
            </motion.div>
        </motion.div>
    )
}