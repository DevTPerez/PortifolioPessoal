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
                <h2 className="text-2xl mb-4">Privacy Policy</h2>

                <p className={subT}>PRIVACY POLICY</p>
                <p className="text-[12px]">Last update: February 28, 2026</p>

                <p className={`${subT} mt-[20px]`}>1. Purpose and Legal Framework</p>
                <p>
                    This Privacy Policy regulates the processing of personal data collected through this site/portfolio, in accordance with the General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679) and applicable national legislation.
                </p>

                <p className={`${subT} mt-[20px]`}>2. Data Controller Identification</p>
                <p>
                    The data controller is Tiago Costa, owner of this personal portfolio.  
                    Contact email: <span className="underline">hello@tiagocosta.tech</span>
                </p>

                <p className={`${subT} mt-[20px]`}>3. Scope of Application</p>
                <p>
                    This Policy applies to all personal data voluntarily provided through contact forms or direct communication.
                </p>

                <p className={`${subT} mt-[20px]`}>4. Data Collection</p>
                <p>
                    Collected data includes name, email, phone, and message submitted via the contact form. This data is used solely to respond to your inquiry or communication.
                </p>

                <p className={`${subT} mt-[20px]`}>5. Purpose of Processing</p>
                <p>
                    Data is processed only to respond to contact requests, clarify questions, or provide information about projects and services. No data will be used for external commercial purposes or shared with third parties without consent.
                </p>

                <p className={`${subT} mt-[20px]`}>6. Legal Basis</p>
                <p>
                    Data processing is based on the consent of the data subject, provided when submitting the form, and on pre-contractual measures when applicable.
                </p>

                <p className={`${subT} mt-[20px]`}>7. Data Retention</p>
                <p>
                    Data is stored only for the time necessary to process the request or communication. After that period, data will be securely deleted.
                </p>

                <p className={`${subT} mt-[20px]`}>8. Information Security</p>
                <p>
                    Appropriate technical and organizational measures are adopted to protect data against unauthorized access, loss, alteration, or disclosure.
                </p>

                <p className={`${subT} mt-[20px]`}>9. Data Subject Rights</p>
                <p>
                    Data subjects may request access, correction, deletion, or limitation of their data at any time, as well as withdraw consent. Requests should be sent to <span className="underline">perez@tiagocosta.tech</span>.
                </p>

                <p className={`${subT} mt-[20px]`}>10. Cookies</p>
                <p>
                    This portfolio does not use tracking cookies, only essential cookies for proper functioning.
                </p>

                <p className={`${subT} mt-[20px]`}>11. Changes</p>
                <p>
                    This Policy may be updated periodically. Changes take effect on the date of publication.
                </p>

                <p className={`${subT} mt-[20px]`}>12. Contact</p>
                <p>
                    For questions about this Policy or your personal data, contact: <span className="underline">hello@tiagocosta.tech</span>.
                </p>
            </motion.div>
        </motion.div>
    )
}