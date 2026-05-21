"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const sectionsList = [
  { id: "introducao", label: "1. Introdução" },
  { id: "definicoes", label: "2. Definições" },
  { id: "dados-coletados", label: "3. Dados Coletados" },
  { id: "finalidade", label: "4. Finalidade do Uso" },
  { id: "compartilhamento", label: "5. Compartilhamento" },
  { id: "armazenamento", label: "6. Armazenamento & Segurança" },
  { id: "direitos-usuario", label: "7. Direitos do Usuário" },
  { id: "cookies", label: "8. Cookies" },
  { id: "transferencia", label: "9. Transferência Internacional" },
  { id: "bases-legais", label: "10. Bases Legais" },
  { id: "retencao", label: "11. Retenção & Descarte" },
  { id: "medidas-seguranca", label: "12. Medidas de Segurança" },
  { id: "direitos-titulares", label: "13. Direitos dos Titulares" },
  { id: "alteracoes", label: "14. Alterações & Notificações" },
  { id: "duvidas", label: "15. Dúvidas & Solicitações" },
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("introducao");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle back-to-top button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check current active section
      const scrollPosition = window.scrollY + 220; // Offset for navbar and breathing room
      
      for (const section of sectionsList) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 110; // Navbar offset
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative w-full bg-[#f8f9fa] dark:bg-[#000d21]">
      {/* Premium Hero Banner */}
      <section className="bg-[#002347] text-white pt-36 pb-20 bg-grid relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-surface-tint/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-4 text-xs font-semibold text-slate-300 font-['Manrope']">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-white text-opacity-90">Política de Privacidade</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-headline-xl font-headline-xl text-white mb-2 tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-sm sm:text-base md:text-body-lg font-semibold text-slate-200 max-w-2xl">
            POLÍTICA DE PRIVACIDADE - OPENCLUBE LTDA
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Interactive Sticky Navigation Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-[120px] self-start z-20">
            <div className="bg-white dark:bg-[#001c3a] rounded-2xl p-6 border-2 border-slate-300 dark:border-slate-800 shadow-[0_12px_24px_rgba(0,35,71,0.08)]">
              <h3 className="font-headline-md text-xs uppercase tracking-wider text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b-2 border-slate-300 dark:border-slate-800">
                Sumário
              </h3>
              <ul className="flex flex-col gap-1.5">
                {sectionsList.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left font-['Manrope'] text-xs py-2 px-3 rounded-lg transition-all duration-255 font-bold ${
                        activeSection === section.id
                          ? "bg-[#002347] text-white font-black shadow-md border-l-4 border-blue-600 dark:border-blue-400 pl-3"
                          : "text-[#002347] dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-700 dark:hover:text-white"
                      }`}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Privacy Policy Text Area */}
          <article className="col-span-1 lg:col-span-3 max-w-none">
            <div className="bg-white dark:bg-[#001c3a]/90 border border-slate-300 dark:border-slate-800 rounded-2xl p-4 sm:p-6 md:p-10 shadow-[0_10px_30px_rgba(0,35,71,0.06)] break-words">
              
              {/* Section 1 */}
              <div id="introducao" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  1. INTRODUÇÃO
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  A OPENCLUBE LTDA valoriza a privacidade e segurança dos dados de seus usuários. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos as informações pessoais dos nossos usuários ao utilizarem nossa plataforma.
                </div>
              </div>

              {/* Section 2 */}
              <div id="definicoes" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  2. DEFINIÇÕES
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed flex flex-col gap-3">
                  <div className="flex gap-2 items-start pl-2">
                    <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                    <span><strong>OpenClube LTDA:</strong> Empresa responsável pelo desenvolvimento e manutenção do aplicativo.</span>
                  </div>
                  <div className="flex gap-2 items-start pl-2">
                    <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                    <span><strong>Usuário:</strong> Pessoa física que utiliza o aplicativo da OPENCLUBE LTDA.</span>
                  </div>
                  <div className="flex gap-2 items-start pl-2">
                    <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                    <span><strong>Dados Pessoais:</strong> Informações relacionadas a uma pessoa física identificada ou identificável.</span>
                  </div>
                  <div className="flex gap-2 items-start pl-2">
                    <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                    <span><strong>Dados Sensíveis:</strong> Dados pessoais sobre origem racial ou étnica, convicção religiosa, opinião política, saúde, vida sexual, dado genético ou biométrico, entre outros.</span>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div id="dados-coletados" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  3. DADOS COLETADOS
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed flex flex-col gap-6">
                  
                  <div>
                    <h3 className="text-base sm:text-body-lg font-extrabold text-[#002347] dark:text-white mb-3">
                      3.1. Dados Fornecidos pelo Usuário:
                    </h3>
                    <div className="flex flex-col gap-2 pl-2">
                      <div className="flex gap-2 items-start">
                        <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                        <span><strong>Dados Cadastrais:</strong> Nome completo, CPF, endereço, e-mail e telefone.</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                        <span><strong>Dados de Pagamento:</strong> Informações bancárias e transações financeiras.</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-body-lg font-extrabold text-[#002347] dark:text-white mb-3">
                      3.2. Dados Coletados Automaticamente:
                    </h3>
                    <div className="flex flex-col gap-2 pl-2">
                      <div className="flex gap-2 items-start">
                        <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                        <span><strong>Dados de Navegação e do Dispositivo:</strong> Endereço IP, tipo de dispositivo, sistema operacional, navegador, páginas acessadas e geolocalização, mediante autorização do usuário.</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-body-lg font-extrabold text-[#002347] dark:text-white mb-3">
                      3.3. Dados de Terceiros:
                    </h3>
                    <div className="flex flex-col gap-2 pl-2">
                      <div className="flex gap-2 items-start">
                        <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                        <span><strong>Informações Públicas:</strong> Dados disponíveis publicamente ou provenientes de parceiros, mediante consentimento do usuário.</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Section 4 */}
              <div id="finalidade" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  4. FINALIDADE DO USO DOS DADOS
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  <p className="mb-3 font-semibold text-[#002347] dark:text-slate-200">Os dados coletados são utilizados para:</p>
                  <div className="flex flex-col gap-2 pl-2">
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span><strong>Gestão de Cadastro:</strong> Criar e gerenciar a conta do usuário.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span><strong>Processamento de Transações:</strong> Efetuar pagamentos e fornecer benefícios.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span><strong>Melhoria do Serviço:</strong> Personalizar a experiência do usuário e aprimorar o aplicativo.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span><strong>Comunicações:</strong> Enviar notificações, atualizações e materiais promocionais, mediante consentimento.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span><strong>Conformidade Legal:</strong> Atender a obrigações legais e regulatórias.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div id="compartilhamento" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  5. COMPARTILHAMENTO DE DADOS
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  <p className="mb-3 font-semibold text-[#002347] dark:text-slate-200">A OpenClube LTDA poderá compartilhar os dados dos usuários com:</p>
                  <div className="flex flex-col gap-2 pl-2 mb-4">
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span><strong>Parceiros Comerciais:</strong> Para viabilizar serviços e benefícios oferecidos.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span><strong>Autoridades Competentes:</strong> Quando necessário para cumprir obrigações legais ou regulatórias.</span>
                    </div>
                  </div>
                  <p className="font-extrabold text-[#002347] dark:text-white border-l-4 border-blue-600 pl-3 py-1 my-4 bg-slate-50 dark:bg-[#002347]/50 rounded-r">
                    Não comercializamos dados pessoais dos usuários.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div id="armazenamento" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  6. ARMAZENAMENTO E SEGURANÇA DOS DADOS
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, perdas ou alterações. Os dados são armazenados em servidores seguros, e o acesso é restrito a colaboradores autorizados.
                </div>
              </div>

              {/* Section 7 */}
              <div id="direitos-usuario" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  7. DIREITOS DO USUÁRIO
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  <p className="mb-3 font-semibold text-[#002347] dark:text-slate-200">O usuário tem o direito de:</p>
                  <div className="flex flex-col gap-2 pl-2 mb-4">
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span>Acessar seus dados pessoais.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span>Corrigir dados incompletos, inexatos ou desatualizados.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span>Solicitar a exclusão de dados desnecessários ou excessivos.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span>Revogar o consentimento para o tratamento de seus dados, quando aplicável.</span>
                    </div>
                  </div>
                  <p className="mt-4 p-4 bg-slate-100 dark:bg-[#002347] border-l-4 border-blue-600 dark:border-blue-400 rounded-r-lg shadow-sm">
                    Para exercer esses direitos, o usuário pode entrar em contato através do e-mail:{" "}
                    <a href="mailto:support@openclube.com.br" className="text-blue-700 dark:text-blue-400 hover:underline font-extrabold">
                      support@openclube.com.br
                    </a>.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div id="cookies" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  8. COOKIES E TECNOLOGIAS SEMELHANTES
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  <p className="mb-3 font-semibold text-[#002347] dark:text-slate-200">Utilizamos cookies e tecnologias semelhantes para melhorar a experiência do usuário no aplicativo. Os cookies podem ser categorizados como:</p>
                  <div className="flex flex-col gap-2 pl-2 mb-4">
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span><strong>Essenciais:</strong> Necessários para o funcionamento do aplicativo.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span><strong>Analíticos:</strong> Coletam informações sobre o uso do aplicativo para melhorias.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span><strong>Publicidade:</strong> Utilizados para personalizar anúncios e promoções.</span>
                    </div>
                  </div>
                  <p>O usuário pode gerenciar as preferências de cookies nas configurações do seu dispositivo.</p>
                </div>
              </div>

              {/* Section 9 */}
              <div id="transferencia" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  9. TRANSFERÊNCIA INTERNACIONAL DE DADOS
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  A OPENCLUBE LTDA pode transferir seus dados pessoais para outros países, caso nossos prestadores de serviços ou parceiros estejam localizados fora do Brasil. Nessas situações, adotaremos medidas apropriadas para garantir que a transferência ocorra em conformidade com a legislação aplicável, incluindo cláusulas contratuais padrão e mecanismos de proteção reconhecidos pelas autoridades de proteção de dados.
                </div>
              </div>

              {/* Section 10 */}
              <div id="bases-legais" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  10. BASES LEGAIS PARA O TRATAMENTO DE DADOS PESSOAIS
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  Realizamos o tratamento de dados pessoais com base na execução de contrato, cumprimento de obrigação legal, legítimo interesse e consentimento, conforme aplicável.
                </div>
              </div>

              {/* Section 11 */}
              <div id="retencao" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  11. RETENÇÃO E DESCARTE DE DADOS PESSOAIS
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  Os dados pessoais serão armazenados pelo tempo necessário para cumprir as finalidades descritas nesta Política de Privacidade, respeitando os prazos legais e regulatórios aplicáveis. Após esse período, os dados serão anonimizados ou excluídos de forma segura, salvo se houver necessidade de retenção para cumprimento de obrigações legais.
                </div>
              </div>

              {/* Section 12 */}
              <div id="medidas-seguranca" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  12. MEDIDAS DE SEGURANÇA
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  Implementamos medidas de controle de acesso, criptografia e monitoramento para proteger os dados pessoais contra acessos não autorizados.
                </div>
              </div>

              {/* Section 13 */}
              <div id="direitos-titulares" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  13. DIREITOS DOS TITULARES DE DADOS
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  <p className="mb-3 font-semibold text-[#002347] dark:text-slate-200">O usuário pode exercer seus direitos previstos na legislação de proteção de dados, incluindo:</p>
                  <div className="flex flex-col gap-2 pl-2 mb-4">
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span>Acesso aos dados pessoais tratados pela OPENCLUBE LTDA.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span>Correção de informações incorretas, incompletas ou desatualizadas.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span>Anonimização, bloqueio ou eliminação de dados desnecessários.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span>Portabilidade de seus dados para outro fornecedor de serviço, mediante requisição.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-blue-700 dark:text-blue-400 mt-1.5 text-xs font-bold">•</span>
                      <span>Revogação do consentimento, quando aplicável, sem afetar a legalidade do tratamento realizado anteriormente.</span>
                    </div>
                  </div>
                  <p className="mt-4 p-4 bg-slate-100 dark:bg-[#002347] border-l-4 border-blue-600 dark:border-blue-400 rounded-r-lg shadow-sm">
                    Para exercer esses direitos, entre em contato pelo e-mail:{" "}
                    <a href="mailto:support@openclube.com.br" className="text-blue-700 dark:text-blue-400 hover:underline font-extrabold">
                      support@openclube.com.br
                    </a>.
                  </p>
                </div>
              </div>

              {/* Section 14 */}
              <div id="alteracoes" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  14. ALTERAÇÕES E NOTIFICAÇÕES
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  A OPENCLUBE LTDA pode modificar esta Política periodicamente para refletir mudanças nos serviços, exigências legais ou regulatórias. Alterações significativas serão notificadas ao usuário por meio do aplicativo, e-mail ou outros canais adequados.
                </div>
              </div>

              {/* Section 15 */}
              <div id="duvidas" className="scroll-mt-28 mb-12 last:mb-0">
                <h2 className="text-lg sm:text-xl md:text-headline-md font-headline-md text-[#002347] dark:text-white font-extrabold mb-4 pb-2 border-b border-slate-200 dark:border-slate-800/80">
                  15. DÚVIDAS E SOLICITAÇÕES
                </h2>
                <div className="text-slate-900 dark:text-slate-100 text-body-md font-body-md font-medium leading-relaxed">
                  <p className="mb-4">Para dúvidas ou solicitações relacionadas a esta Política de Privacidade, entre em contato pelo e-mail:</p>
                  <p className="p-4 bg-slate-100 dark:bg-[#002347] border border-slate-200 dark:border-slate-800 rounded-lg w-fit shadow-sm">
                    <a href="mailto:support@openclube.com.br" className="text-blue-700 dark:text-blue-400 hover:underline font-extrabold font-['Manrope']">
                      support@openclube.com.br
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </article>
        </div>
      </section>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#002347] text-white flex items-center justify-center shadow-xl hover:bg-slate-800 transition-colors z-50 group border border-slate-700/30"
            aria-label="Voltar ao topo"
          >
            <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">
              arrow_upward
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
