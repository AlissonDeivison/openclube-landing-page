"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: '"Como empresário, nunca vi nada igual. Vendo meus serviços e ainda ganho 1% sempre que os usuários negociam meus títulos entre eles. É uma receita passiva que ajudou no caixa."',
      initial: "R",
      name: "Ricardo M.",
      role: "Dono de Restaurante",
      color: "bg-primary-fixed-dim"
    },
    {
      text: '"Comprei um título de acesso VIP para uma casa noturna que não pude ir. Vendi na plataforma no mesmo dia e ainda lucrei 20% porque o evento estava esgotado. Sensacional!"',
      initial: "A",
      name: "Ana C.",
      role: "Usuária OpenClube",
      color: "bg-surface-tint text-white",
      textClass: ""
    },
    {
      text: '"A facilidade de uso do app é incrível. Recomendo para todos os meus amigos que querem ter vantagens reais sem a burocracia dos clubes de benefícios tradicionais."',
      initial: "M",
      name: "Marcos T.",
      role: "Investidor & Usuário",
      color: "bg-secondary-container",
      stars: 5
    }
  ];

  return (
    <section className="py-section-padding bg-surface-container-lowest border-y border-outline-variant/20" id="depoimentos">
      <div className="max-w-container-max mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg text-headline-lg text-primary-container mb-4"
          >
            O que dizem nossos membros
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body-lg text-on-surface-variant"
          >
            Histórias reais de quem já revolucionou a forma como vê benefícios.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-panel p-6 rounded-2xl flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 text-surface-tint mb-2">
                {[...Array(Math.floor(t.stars || 5))].map((_, starIdx) => (
                  <span key={starIdx} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
                {t.stars === 4.5 && (
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                )}
              </div>
              <p className="font-body-md text-on-surface italic">{t.text}</p>
              <div className="mt-auto pt-4 flex items-center gap-3 border-t border-outline-variant/30">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-primary-container font-bold`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-label-sm text-primary-container">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
