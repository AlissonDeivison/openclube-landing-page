"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-section-padding bg-surface" id="contato">
      <div className="max-w-container-max mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-headline-lg text-headline-lg text-primary-container">Entre em Contato</h2>
            <p className="font-body-md text-on-surface-variant">
              Tem alguma dúvida sobre nossa tecnologia, parcerias ou como nossa inteligência de mercado funciona? Fale com nosso time de especialistas.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-label-sm text-primary-container">E-mail</p>
                  <p className="text-sm text-on-surface-variant">contato@openclube.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-label-sm text-primary-container">Telefone</p>
                  <p className="text-sm text-on-surface-variant">+55 (83) 98228-5604</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary-container shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-label-sm text-primary-container">Endereço Sede</p>
                  <p className="text-sm text-on-surface-variant">Av. Jornalista Assis Chateaubriand, 300, Sala 219 - Liberdade, Campina Grande - PB, 58414-060</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl relative"
          >
            <h3 className="font-headline-md text-primary-container mb-6">Envie sua mensagem</h3>
            <form action="https://formsubmit.co/contato@openclube.com.br" method="POST" className="flex flex-col gap-4">
              <input type="hidden" name="_subject" value="Novo contato pelo site OpenClube!" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-on-surface-variant" htmlFor="nome">Nome Completo</label>
                <input className="px-4 py-3 rounded-lg border border-outline-variant bg-white focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all" id="nome" name="nome" placeholder="Seu nome" type="text" required />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-on-surface-variant" htmlFor="email">E-mail Profissional</label>
                <input className="px-4 py-3 rounded-lg border border-outline-variant bg-white focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all" id="email" name="email" placeholder="seu@email.com" type="email" required />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-on-surface-variant" htmlFor="mensagem">Mensagem</label>
                <textarea className="px-4 py-3 rounded-lg border border-outline-variant bg-white focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all min-h-[120px] resize-y" id="mensagem" name="mensagem" placeholder="Como podemos ajudar?" required></textarea>
              </div>
              <button className="btn-primary py-3 rounded-lg font-label-sm mt-2 w-full hover:scale-[1.02] transition-transform" type="submit">Enviar Mensagem</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
