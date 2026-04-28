"use client";

import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    { icon: "restaurant", name: "Restaurantes" },
    { icon: "fitness_center", name: "Academias" },
    { icon: "spa", name: "Beleza e Spa" },
    { icon: "medical_services", name: "Saúde" },
    { icon: "school", name: "Educação" },
    { icon: "flight_takeoff", name: "Turismo" },
    { icon: "build", name: "Serviços" },
    { icon: "attractions", name: "Lazer" },
    { icon: "devices", name: "Tecnologia" },
    { icon: "checkroom", name: "Moda" }
  ];

  return (
    <section className="py-section-padding" id="beneficios">
      <div className="max-w-container-max mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-2">Encontre benefícios em diversas categorias</h2>
            <p className="font-body-md text-on-surface-variant">Uma rede completa para atender ao seu estilo de vida.</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel p-6 rounded-xl hover:-translate-y-2 transition-all cursor-pointer group"
            >
              <span className="material-symbols-outlined text-3xl text-surface-tint mb-4 group-hover:text-primary-container transition-colors group-hover:scale-110 transform duration-300">
                {category.icon}
              </span>
              <h3 className="font-label-sm text-primary-container mb-1">{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
