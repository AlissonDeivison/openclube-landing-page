"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ForUsers() {
  const listItems = [
    "Liberdade econômica total: usar ou lucrar",
    "Valorização constante de títulos exclusivos",
    "Negociação fácil, rápida e com liquidez",
    "Acesso a ofertas restritas que poucos conseguem",
    "Economia real nos seus estabelecimentos favoritos",
    "Plataforma que recompensa bons hábitos de consumo"
  ];

  return (
    <section className="py-section-padding bg-surface" id="usuarios">
      <div className="max-w-container-max mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-stack-lg items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:pr-12"
          >
            <h2 className="font-headline-xl text-headline-xl text-primary-container">Hábitos que geram ganhos e liberdade econômica</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Sua vida com mais experiências e inteligência financeira. Compre títulos de benefícios, use para viver momentos inesquecíveis ou negocie-os aproveitando a sua valorização de mercado.
            </p>
            <ul className="space-y-4 pt-4">
              {listItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="material-symbols-outlined text-surface-tint">check_circle</span>
                  <span className="font-label-sm text-on-surface">{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="https://play.google.com/store/apps/details?id=com.openclube.app&hl=pt_BR" target="_blank" className="bg-surface-tint text-white px-8 py-4 rounded-xl font-label-sm w-fit hover:bg-opacity-90 transition-all inline-block">Começar a lucrar e economizar</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Bento Grid Style Display */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-2 rounded-2xl col-span-2 overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  alt="grupo de amigos sorrindo em um restaurante" 
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" 
                  src="/people.png"
                />
              </div>
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 aspect-square hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-surface-tint">trending_up</span>
                </div>
                <div>
                  <p className="font-headline-md text-primary-container">+15% Val.</p>
                  <p className="font-label-sm text-on-surface-variant text-sm">Título de Restaurante</p>
                </div>
              </div>
              <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 aspect-square hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-surface-tint">confirmation_number</span>
                </div>
                <div>
                  <p className="font-headline-md text-primary-container">Passe VIP</p>
                  <p className="font-label-sm text-on-surface-variant text-sm">Alta liquidez</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
