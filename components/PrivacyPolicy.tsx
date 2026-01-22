"use client"
import { motion } from "framer-motion"
import { useEffect } from "react"



export default function PrivacyPolicy({ onClose }: { onClose: () => void }) {
    const subT = "font-bold"

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
            onClose()
            }
        }

        document.addEventListener("keydown", handleEsc)

        return () => {
            document.removeEventListener("keydown", handleEsc)
        }
    }, [onClose])


    return (
        <motion.div
            className="
                privacy-scroll
                fixed top-0 left-0 w-full h-screen z-50
                bg-white/10 backdrop-blur-xl
                flex items-center justify-center
                "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
            className="bg-black text-white/70 max-w-[900px] w-full max-h-[80vh] overflow-y-auto p-8 rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            >
            <h2 className="text-2xl mb-4">Política de Privacidade</h2>

            <p className={subT}>
                POLÍTICA DE PRIVACIDADE DO GRUPO FIR
            </p>

            <p className="text-[12px]">Última atualização: 01 de abril de 2026</p>

            <p className={`${subT} mt-[20px]`} >1. Objeto e Enquadramento Legal</p>

            <p>A presente Política de Privacidade regula o tratamento de dados pessoais efetuado pelo GRUPO FIR, em estrito cumprimento do Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho, de 27 de abril de 2016, doravante designado por Regulamento Geral sobre a Proteção de Dados (RGPD), da Lei n.º 58/2019, de 8 de agosto, e de toda a legislação nacional e europeia aplicável em matéria de proteção de dados pessoais.</p>

            <p>O GRUPO FIR reconhece a proteção dos dados pessoais como um direito fundamental dos titulares e compromete-se a assegurar que qualquer tratamento é realizado de forma lícita, leal, transparente, adequada, pertinente e limitada às finalidades determinadas.</p>

            <p className={`${subT} mt-[20px]`}>2. Identificação do Responsável pelo Tratamento</p>

            <p>O responsável pelo tratamento dos dados pessoais é a sociedade 4FIR, Lda., com sede na Rua de Santo André, n.º 13, 3800-388 Aveiro, NIF 518 393 542, doravante designada por GRUPO FIR.</p>

            <p>As sociedades integrantes do GRUPO FIR poderão atuar como responsáveis autónomos pelo tratamento sempre que os dados sejam recolhidos e tratados no âmbito da sua atividade própria, sendo essa qualidade expressamente indicada nos respetivos formulários, contratos ou comunicações.</p>

            <p className={`${subT} mt-[20px]`}>3. Âmbito de Aplicação</p>

            <p>A presente Política aplica-se a todos os tratamentos de dados pessoais realizados pelo GRUPO FIR no contexto da utilização dos seus websites, plataformas digitais, formulários de contacto, comunicações eletrónicas, relações comerciais, contratuais e pré-contratuais, bem como em quaisquer outras interações que envolvam o fornecimento de dados pessoais por parte dos titulares.</p>

            <p className={`${subT} mt-[20px]`}>4. Recolha de Dados</p>

            <p>Enquanto visitante dos websites do GRUPO FIR, não é exigido o fornecimento de quaisquer dados pessoais para efeitos de navegação.</p>

            <p>A recolha direta de dados pessoais ocorre apenas quando o utilizador, de forma voluntária, submete um pedido de contacto ou de informações, sendo recolhidos, regra geral, apenas o nome e o endereço de correio eletrónico, com a finalidade exclusiva de permitir a resposta ao pedido formulado.</p>

            <p>A recolha indireta de dados ocorre através de ferramentas de análise estatística, nomeadamente Google Analytics, que permitem monitorizar informação agregada relativa à utilização dos websites, designadamente a origem geográfica aproximada, o tipo de dispositivo, o sistema operativo, o navegador, a operadora e os acessos efetuados, entre outros. Estes dados são tratados de forma anonimizada e agregada, não permitindo a identificação pessoal do utilizador nem contendo informação privada.</p>

            <p className={`${subT} mt-[20px]`}>5. Categorias de Dados Pessoais</p>

            <p>O GRUPO FIR poderá tratar, consoante o contexto da relação estabelecida, dados de identificação, dados de contacto, dados profissionais, dados técnicos de navegação e quaisquer outros dados fornecidos voluntariamente pelo titular.</p>

            <p className={`${subT} mt-[20px]`}>6. Finalidades do Tratamento</p>

            <p>Os dados pessoais são tratados exclusivamente para efeitos de resposta a pedidos de contacto, gestão de relações comerciais e institucionais, envio de comunicações relacionadas com os serviços, organização e gestão de eventos, cumprimento de obrigações legais, melhoria contínua dos serviços e plataformas, garantia da segurança da informação e exercício ou defesa de direitos em processos administrativos ou judiciais.</p>

            <p>O GRUPO FIR compromete-se a não tratar os dados para finalidades incompatíveis com aquelas que determinaram a sua recolha.</p>

            <p className={`${subT} mt-[20px]`}>7. Fundamento Jurídico</p>

            <p>O tratamento dos dados pessoais assenta, conforme aplicável, na execução de diligências pré-contratuais ou contratuais, no cumprimento de obrigações legais, no interesse legítimo do GRUPO FIR devidamente ponderado, ou no consentimento do titular dos dados, quando este seja legalmente exigido.</p>

            <p className={`${subT} mt-[20px]`}>8. Conservação dos Dados</p>

            <p>Os dados pessoais são conservados apenas durante o período necessário para a prossecução das finalidades que determinaram a sua recolha, sem prejuízo dos prazos legais de conservação aplicáveis. Findo esse período, os dados são eliminados ou anonimizados de forma segura e irreversível.</p>

            <p className={`${subT} mt-[20px]`}>9. Comunicação e Partilha de Dados</p>

            <p>O GRUPO FIR não procede à venda, cedência ou comercialização de dados pessoais.</p>

            <p>Os dados poderão ser comunicados exclusivamente a subcontratantes devidamente contratualizados, quando tal seja necessário para a prestação dos serviços, ou a entidades públicas ou judiciais, quando tal seja exigido por lei ou por decisão de autoridade competente.</p>

            <p className={`${subT} mt-[20px]`}>10. Transferências Internacionais</p>

            <p>Sempre que seja necessária a transferência de dados pessoais para fora do Espaço Económico Europeu, o GRUPO FIR assegurará a existência de garantias adequadas nos termos dos artigos 44.º e seguintes do RGPD.</p>

            <p className={`${subT} mt-[20px]`}>11. Segurança da Informação</p>

            <p>O GRUPO FIR adota medidas técnicas e organizativas adequadas para assegurar um nível de segurança proporcional aos riscos, protegendo os dados pessoais contra destruição, perda, alteração, divulgação ou acesso não autorizado, incluindo controlos de acesso, políticas internas de confidencialidade e procedimentos de segurança da informação.</p>

            <p className={`${subT} mt-[20px]`}>12. Direitos dos Titulares</p>

            <p>O titular dos dados pode, a qualquer momento, exercer os direitos de acesso, retificação, apagamento, limitação do tratamento, oposição, portabilidade dos dados e retirada do consentimento, quando aplicável, mediante pedido escrito dirigido para o endereço de correio eletrónico dpo@grupofir.pt.</p>

            <p>O GRUPO FIR reserva-se o direito de solicitar prova da identidade do requerente. O titular tem ainda o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados.</p>

            <p className={`${subT} mt-[20px]`}>13. Cookies</p>

            <p>Os websites do GRUPO FIR utilizam cookies nos termos definidos na respetiva Política de Cookies, a qual constitui parte integrante da presente Política de Privacidade.</p>

            <p className={`${subT} mt-[20px]`}>14. Websites de Terceiros</p>

            <p>O GRUPO FIR não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas de proteção de dados de websites de terceiros acessíveis através de ligações disponibilizadas nos seus websites.</p>

            <p className={`${subT} mt-[20px]`}>15. Alterações</p>

            <p>O GRUPO FIR reserva-se o direito de alterar a presente Política de Privacidade a qualquer momento, produzindo tais alterações efeitos a partir da respetiva publicação.</p>

            <p className={`${subT} mt-[20px]`}>16. Contactos</p>

            <p>Para qualquer questão relacionada com o tratamento de dados pessoais ou com a presente Política de Privacidade, o titular poderá contactar:</p>

            <p className={`${subT} mt-[20px]`}>GRUPO FIR – 4FIR, Lda.</p>
            <p>  Rua de Santo André, n.º 13, 3800-388 Aveiro</p>

            <p>Email: dpo@grupofir.pt</p> 
            </motion.div>
        </motion.div>
    )
}
