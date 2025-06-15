"use client"

import { motion } from "framer-motion"

export default function CalculatorHeader() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden w-full bg-background">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--primary)), transparent 70%)",
        }}
      ></div>
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Estimador de Proyectos Interactivo
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Dale precio a tu próximo gran proyecto
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nuestra herramienta te guía paso a paso para obtener una cotización detallada y transparente para tu
            proyecto de software. Sin compromisos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
