"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full rounded-none border-t border-slate-200 dark:border-slate-800 flat no shadows bg-slate-50 dark:bg-[#002347]">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Institucional */}
          <div className="flex flex-col gap-4">
            <Link className="flex items-center gap-2" href="#">
              <img 
                src="/logo_footer.png" 
                alt="OpenClube Logo" 
                className="max-h-8 md:max-h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-['Manrope']">Plataforma inovadora de conexão global e inteligência financeira que gera valor real através de benefícios.</p>
          </div>
          {/* Para Empresas */}
          <div className="hidden flex-col gap-3">
            <h4 className="font-label-sm text-[#002347] dark:text-white">Para empresas</h4>
            <Link className="font-['Manrope'] text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="#">Como ser parceiro</Link>
            <Link className="font-['Manrope'] text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="#">Painel de Royalties</Link>
            <Link className="font-['Manrope'] text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="#">Casos de Sucesso</Link>
          </div>
          {/* Para Usuários */}
          <div className="hidden flex-col gap-3">
            <h4 className="font-label-sm text-[#002347] dark:text-white">Para usuários</h4>
            <Link className="font-['Manrope'] text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="#">Baixar o App</Link>
            <Link className="font-['Manrope'] text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="#">Explorar Benefícios</Link>
            <Link className="font-['Manrope'] text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="#">Como negociar títulos</Link>
          </div>
          {/* Redes Sociais */}
          <div className="hidden flex-col gap-3">
            <h4 className="font-label-sm text-[#002347] dark:text-white">Conecte-se</h4>
            <div className="flex gap-4">
              <Link className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-container hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">share</span>
              </Link>
              <Link className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-container hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </Link>
              <Link className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-container hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-sm">work</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <p className="text-[#002347] dark:text-slate-300 font-['Manrope'] text-xs font-medium">© 2026 OpenClube. Tecnologia e Inteligência em Benefícios.</p>
          <div className="flex gap-4">
            <Link className="font-['Manrope'] text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="#">Termos de Uso</Link>
            <Link className="font-['Manrope'] text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="/politica_privacidade.pdf" target="_blank" rel="noopener noreferrer">Política de Privacidade</Link>
            <Link className="font-['Manrope'] text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="#">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
