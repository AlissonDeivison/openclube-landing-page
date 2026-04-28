import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactPhrase from "@/components/ImpactPhrase";
import HowItWorks from "@/components/HowItWorks";
import ForCompanies from "@/components/ForCompanies";
import ForUsers from "@/components/ForUsers";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImpactPhrase phrase="Transforme clientes em relacionamentos duradouros" variant="primary" />
      <HowItWorks />
      <ForCompanies />
      <ImpactPhrase phrase="Economize hoje. Aproveite sempre. Lucre quando quiser." variant="surface" />
      <ForUsers />
      <Categories />
      <Testimonials />
      <Contact />
      <ImpactPhrase phrase="OpenClube — onde benefícios geram valor real" variant="primary" />
      <Footer />
    </main>
  );
}
