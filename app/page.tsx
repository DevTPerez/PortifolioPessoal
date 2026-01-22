import Hero from "@/components/Hero"
import Header from "@/components/Header"
import FirCards from "@/components/FirCards"
import Contacts from "@/components/Contacts"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <h1 className="sr-only">
          Soluções em tecnologia, montagem e logística para o retalho
        </h1>

        <Hero />
        <FirCards />
        <Contacts />
      </main>

      <Footer />
    </>
  )
}
