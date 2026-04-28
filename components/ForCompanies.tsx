"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ForCompanies() {
  const features = [
    {
      icon: "rocket_launch",
      title: "Parceria e Crescimento",
      desc: "Cresça em um ecossistema que valoriza a inovação e o sucesso mútuo."
    },
    {
      icon: "account_balance_wallet",
      title: "1% de Royalties em TUDO",
      desc: "Receba 1% sobre TODAS as transações dos seus títulos, criando um ativo financeiro real para a empresa.",
      mt: true
    },
    {
      icon: "loyalty",
      title: "Fidelização Tecnológica",
      desc: "Transforme consumidores em defensores através de benefícios dinâmicos e valorizáveis."
    },
    {
      icon: "payments",
      title: "Receita antecipada",
      desc: "Gere caixa antes mesmo do cliente consumir o serviço.",
      mt: true
    },
    {
      icon: "public",
      title: "Conexões sem fronteiras",
      desc: "Alcance um público engajado e aberto a novas propostas de valor."
    },
    {
      icon: "dashboard",
      title: "Gestão Financeira",
      desc: "Painel inteligente para acompanhar não apenas vendas, mas o volume de transações e royalties.",
      mt: true
    }
  ];

  return (
    <section className="py-section-padding relative" id="empresas">
      <div className="max-w-container-max mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-stack-lg items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`glass-panel p-6 rounded-xl flex flex-col gap-4 ${feature.mt ? 'mt-8' : ''} hover:-translate-y-1 transition-transform h-full`}
                >
                  <div className="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <h4 className="font-label-sm text-primary-container">{feature.title}</h4>
                  <p className="font-body-md text-sm text-on-surface-variant">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col gap-6 lg:pl-12"
          >
            <h2 className="font-headline-xl text-headline-xl text-primary-container">Parceria e Crescimento com a OpenClube</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Monetize sua capacidade ociosa e atraia novos clientes com inteligência. Além da venda direta, nossa tecnologia garante <span className="font-bold text-primary-container">1% de royalties em cada transação de revenda</span> dos seus títulos no mercado secundário da plataforma, criando um fluxo contínuo de receita.
            </p>
            <div className="pt-4">
              <Link href="#contato" className="btn-primary px-8 py-4 rounded-xl font-label-sm w-fit inline-block">Quero ser parceiro e ganhar royalties</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
