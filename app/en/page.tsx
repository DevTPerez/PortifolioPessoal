import Header from "@/components/Header"
import Hero from "@/components/en/Hero"
import Credibilidade from "@/components/en/Credibilidade"
import Tecnologias from "@/components/en/Tecnologias"
import ComoPossoAjudar from "@/components/en/ComoPossoAjudar"
import Metodologias from "@/components/en/Metodologia"
import Contacts from "@/components/en/Contacts"
import MeusProdustos from "@/components/en/MeusProdutos"
import PorqueEu from "@/components/en/PorqueEu"
import Footer from "@/components/Footer"
import "../globals.css"


export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-back m-0 lg:px-[20px]">
        <h1 className="sr-only ">
          Desenvolvimento de Sistemas, Apps e Plataformas Digitais Sob Medida
        </h1>

        <Hero />
        <Credibilidade />
        <Tecnologias />
        <ComoPossoAjudar />
        <Metodologias />
        <MeusProdustos />
        <PorqueEu />
        <Contacts />
      </main>

      <Footer />
    </>
  )
}
