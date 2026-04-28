"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50 shadow-[0_10px_20px_-5px_rgba(0,35,71,0.05)] transition-all duration-300"
      >
        <div className="max-w-container-max mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              className="flex items-center gap-2"
              href="#"
              onClick={closeMenu}
            >
              <img 
                src="/logo.png" 
                alt="OpenClube Logo" 
                className="max-h-8 md:max-h-10 w-auto object-contain dark:brightness-0 dark:invert"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                className="font-label-sm text-[#002347] dark:text-blue-400 border-b-2 border-[#002347] dark:border-blue-400 pb-1 hover:opacity-80 transition-all duration-200 whitespace-nowrap"
                href="#inicio"
              >
                Início
              </Link>
              <Link
                className="font-label-sm text-slate-600 dark:text-slate-400 hover:text-[#002347] dark:hover:text-white transition-colors hover:opacity-80 duration-200 whitespace-nowrap"
                href="#como-funciona"
              >
                Como Funciona
              </Link>
              <Link
                className="font-label-sm text-slate-600 dark:text-slate-400 hover:text-[#002347] dark:hover:text-white transition-colors hover:opacity-80 duration-200 whitespace-nowrap"
                href="#empresas"
              >
                Para Empresas
              </Link>
              <Link
                className="font-label-sm text-slate-600 dark:text-slate-400 hover:text-[#002347] dark:hover:text-white transition-colors hover:opacity-80 duration-200 whitespace-nowrap"
                href="#usuarios"
              >
                Para Usuários
              </Link>
              <Link
                className="font-label-sm text-slate-600 dark:text-slate-400 hover:text-[#002347] dark:hover:text-white transition-colors hover:opacity-80 duration-200 whitespace-nowrap"
                href="#beneficios"
              >
                Benefícios
              </Link>
              <Link
                className="font-label-sm text-slate-600 dark:text-slate-400 hover:text-[#002347] dark:hover:text-white transition-colors hover:opacity-80 duration-200 whitespace-nowrap"
                href="#contato"
              >
                Contato
              </Link>
            </div>
          </div>

          <button 
            className="md:hidden text-primary-container p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-20 left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-b border-slate-200 dark:border-slate-800 z-40 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              <Link onClick={closeMenu} className="font-label-sm text-slate-600 dark:text-slate-300 hover:text-primary-container dark:hover:text-blue-400 py-2 border-b border-slate-100 dark:border-slate-800 transition-colors" href="#inicio">Início</Link>
              <Link onClick={closeMenu} className="font-label-sm text-slate-600 dark:text-slate-300 hover:text-primary-container dark:hover:text-blue-400 py-2 border-b border-slate-100 dark:border-slate-800 transition-colors" href="#como-funciona">Como Funciona</Link>
              <Link onClick={closeMenu} className="font-label-sm text-slate-600 dark:text-slate-300 hover:text-primary-container dark:hover:text-blue-400 py-2 border-b border-slate-100 dark:border-slate-800 transition-colors" href="#empresas">Para Empresas</Link>
              <Link onClick={closeMenu} className="font-label-sm text-slate-600 dark:text-slate-300 hover:text-primary-container dark:hover:text-blue-400 py-2 border-b border-slate-100 dark:border-slate-800 transition-colors" href="#usuarios">Para Usuários</Link>
              <Link onClick={closeMenu} className="font-label-sm text-slate-600 dark:text-slate-300 hover:text-primary-container dark:hover:text-blue-400 py-2 border-b border-slate-100 dark:border-slate-800 transition-colors" href="#beneficios">Benefícios</Link>
              <Link onClick={closeMenu} className="font-label-sm text-slate-600 dark:text-slate-300 hover:text-primary-container dark:hover:text-blue-400 py-2 border-b border-slate-100 dark:border-slate-800 transition-colors" href="#contato">Contato</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
