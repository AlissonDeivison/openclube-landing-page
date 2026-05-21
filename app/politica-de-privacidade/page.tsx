import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Política de Privacidade - OpenClube",
  description: "POLÍTICA DE PRIVACIDADE - OPENCLUBE LTDA. Conheça as diretrizes sobre como coletamos, usamos, armazenamos e protegemos as informações pessoais dos nossos usuários.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
