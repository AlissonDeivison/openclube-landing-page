"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-section-padding bg-surface" id="como-funciona">
      <div className="max-w-container-max mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg text-headline-lg text-primary-container mb-4"
          >
            Como a OpenClube funciona
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant"
          >
            Um ecossistema tecnológico e pioneiro focado em inteligência financeira para todos os envolvidos.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-gutter">
          {/* Empresas */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed-dim/20 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary-container text-white rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined">storefront</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary-container">Jornada das Empresas</h3>
            </div>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-outline-variant/50 before:to-transparent">
              <motion.div variants={itemVariants} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-primary-container text-primary-container flex items-center justify-center font-label-sm z-10 bg-clip-padding shrink-0">1</div>
                <div>
                  <h4 className="font-label-sm text-primary-container text-base mb-1">Cadastre sua empresa</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">Crie seu perfil na plataforma para acessar nosso ecossistema de inteligência.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-primary-container text-primary-container flex items-center justify-center font-label-sm z-10 bg-clip-padding shrink-0">2</div>
                <div>
                  <h4 className="font-label-sm text-primary-container text-base mb-1">Liste seus Títulos</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">Disponibilize benefícios exclusivos e atraia consumidores de alto valor.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-primary-container text-primary-container flex items-center justify-center font-label-sm z-10 bg-clip-padding shrink-0">3</div>
                <div>
                  <h4 className="font-label-sm text-primary-container text-base mb-1">Atraia e Fidelize</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">Conecte-se com novos clientes e fortaleça o relacionamento com sua base atual.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-primary-container text-primary-container flex items-center justify-center font-label-sm z-10 bg-clip-padding shrink-0">4</div>
                <div>
                  <h4 className="font-label-sm text-primary-container text-base mb-1">Ganhe Royalties de 1%</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">Fature 1% de royalties em TODAS as transações de compra e venda dos seus títulos realizadas pelos usuários.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Usuários */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-surface-tint/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-surface-tint text-white rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined">person</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary-container">Jornada dos Usuários</h3>
            </div>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-outline-variant/50 before:to-transparent">
              <motion.div variants={itemVariants} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-surface-tint text-surface-tint flex items-center justify-center font-label-sm z-10 bg-clip-padding shrink-0">1</div>
                <div>
                  <h4 className="font-label-sm text-primary-container text-base mb-1">Entre no App</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">Acesso gratuito a um universo de oportunidades financeiras e benefícios.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-surface-tint text-surface-tint flex items-center justify-center font-label-sm z-10 bg-clip-padding shrink-0">2</div>
                <div>
                  <h4 className="font-label-sm text-primary-container text-base mb-1">Compre Títulos</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">Adquira direitos a benefícios incríveis com apenas alguns cliques.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-surface-tint text-surface-tint flex items-center justify-center font-label-sm z-10 bg-clip-padding shrink-0">3</div>
                <div>
                  <h4 className="font-label-sm text-primary-container text-base mb-1">Use ou Negocie</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">Desfrute da experiência no parceiro ou negocie o título com outros usuários.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-surface-tint text-surface-tint flex items-center justify-center font-label-sm z-10 bg-clip-padding shrink-0">4</div>
                <div>
                  <h4 className="font-label-sm text-primary-container text-base mb-1">Lucro e Valorização</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">Obtenha lucro revendendo títulos muito procurados em nosso mercado inteligente.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
