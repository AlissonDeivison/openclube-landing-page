"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative pt-32 pb-section-padding min-h-[921px] flex items-center bg-grid overflow-hidden" id="inicio">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-primary-fixed-dim/20 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-surface-tint/10 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>
      <div className="max-w-container-max mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-stack-lg items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-stack-lg"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-fixed/50 border border-primary-fixed-dim w-fit">
            <span className="material-symbols-outlined text-sm text-primary-container">lightbulb</span>
            <span className="font-label-sm text-primary-container">Inovação e Inteligência Financeira</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-primary-container">
            O Clube Mais Inovador do Mundo
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            <span className="font-semibold text-primary-container">Transformando benefícios em conexões reais e oportunidades financeiras.</span> Redefinimos a lealdade através de uma plataforma pioneira que gera valor exponencial para empresas e liberdade econômica para usuários.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link className="btn-primary px-8 py-4 rounded-xl font-label-sm text-white flex items-center gap-2" href="#empresas">
              Sou uma empresa
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link className="btn-secondary px-8 py-4 rounded-xl font-label-sm flex items-center gap-2" href="#usuarios">
              Quero liberdade econômica
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-outline-variant/30 mt-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-surface-tint" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
              <span className="font-label-sm text-on-surface-variant">Conexões Globais</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-surface-tint" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              <span className="font-label-sm text-on-surface-variant">Valorização Real</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-surface-tint" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
              <span className="font-label-sm text-on-surface-variant">Crescimento Acelerado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-surface-tint" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="font-label-sm text-on-surface-variant">Inteligência Financeira</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="glass-panel rounded-2xl p-4 md:p-6 relative z-10 w-full xl:w-[110%] ml-auto transform xl:-translate-x-8 translate-y-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              alt="mockup de aplicativo financeiro" 
              className="w-full h-auto object-contain rounded-lg shadow-sm" 
              src="/mockphone.png"
            />
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-4 xl:left-4 top-1/4 glass-panel p-4 rounded-xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container">trending_up</span>
              </div>
              <div>
                <p className="font-label-sm text-on-surface-variant text-xs">Valorização</p>
                <p className="font-headline-md text-primary-container text-lg">+45%</p>
              </div>
            </motion.div>
            {/* Floating Badge 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -right-8 bottom-1/4 glass-panel p-4 rounded-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-surface-tint">account_balance</span>
              </div>
              <div>
                <p className="font-label-sm text-primary-container text-sm">Royalties Constantes</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
