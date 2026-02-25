import Hero from "@/components/pt/Hero"
import Header from "@/components/Header"
import FirCards from "@/components/pt/Tecnologias"
import Contacts from "@/components/pt/Contacts"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-back">
        <h1 className="sr-only">
          Custom Systems, Apps, and Digital Platform Development
        </h1>

        <Hero />
        <FirCards />
        <Contacts />
      </main>

      <Footer />
    </>
  )
}
