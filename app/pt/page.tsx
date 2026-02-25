import Header from "@/components/Header"
import Hero from "@/components/pt/Hero"
import Credibilidade from "@/components/pt/Credibilidade"
import Tecnologias from "@/components/pt/Tecnologias"
import ComoPossoAjudar from "@/components/pt/ComoPossoAjudar"
import Metodologias from "@/components/pt/Metodologia"
import Contacts from "@/components/pt/Contacts"
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
        <Contacts />
      </main>

      <Footer />
    </>
  )
}
