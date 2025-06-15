"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Settings,
  Link2,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
  Check,
  X,
  Sparkles,
  Target,
  Gauge,
} from "lucide-react"
import { cn } from "@/lib/utils"
import ScrollReveal from "@/components/ui/scroll-reveal"

const advantages = [
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Flexibilidad Total",
    description: "Adapta cada función a tus procesos específicos sin limitaciones de plantillas predefinidas.",
    traditional: "Funciones limitadas por plantillas rígidas",
    custom: "Diseño completamente personalizable según tus necesidades",
    color: "from-blue-500 to-cyan-400",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Funcionalidad a Medida",
    description: "Cada característica está diseñada específicamente para optimizar tu flujo de trabajo único.",
    traditional: "Características genéricas que no se ajustan",
    custom: "Funciones diseñadas específicamente para tu industria",
    color: "from-emerald-500 to-green-400",
    shadowColor: "shadow-emerald-500/20",
  },
  {
    icon: <Link2 className="h-8 w-8" />,
    title: "Integración Perfecta",
    description: "Conecta sin problemas con todas tus herramientas existentes y sistemas empresariales.",
    traditional: "Integraciones limitadas con costos adicionales",
    custom: "Integración nativa con todos tus sistemas actuales",
    color: "from-violet-500 to-purple-400",
    shadowColor: "shadow-violet-500/20",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Control Total de Datos",
    description: "Mantén el control absoluto sobre tu información sin depender de servidores externos.",
    traditional: "Datos almacenados en servidores de terceros",
    custom: "Control completo sobre ubicación y seguridad de datos",
    color: "from-amber-500 to-orange-400",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: "Rendimiento Optimizado",
    description: "Sistema ligero y rápido, optimizado específicamente para tus operaciones.",
    traditional: "Funciones innecesarias que ralentizan el sistema",
    custom: "Código optimizado solo con lo que realmente necesitas",
    color: "from-rose-500 to-pink-400",
    shadowColor: "shadow-rose-500/20",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Escalabilidad Inteligente",
    description: "Crece y evoluciona junto con tu negocio sin restricciones de licencias.",
    traditional: "Costos crecientes por usuarios y funciones adicionales",
    custom: "Escalabilidad sin límites ni costos ocultos",
    color: "from-indigo-500 to-blue-400",
    shadowColor: "shadow-indigo-500/20",
  },
]

const comparisonData = [
  {
    feature: "Personalización",
    traditional: "Limitada",
    custom: "Ilimitada",
    traditionalIcon: <X className="h-4 w-4 text-red-500" />,
    customIcon: <Check className="h-4 w-4 text-green-500" />,
  },
  {
    feature: "Tiempo de implementación",
    traditional: "Configuración estándar",
    custom: "Desarrollo personalizado",
    traditionalIcon: <Check className="h-4 w-4 text-green-500" />,
    customIcon: <Check className="h-4 w-4 text-green-500" />,
  },
  {
    feature: "Costos a largo plazo",
    traditional: "Licencias mensuales crecientes",
    custom: "Inversión única",
    traditionalIcon: <X className="h-4 w-4 text-red-500" />,
    customIcon: <Check className="h-4 w-4 text-green-500" />,
  },
  {
    feature: "Control de datos",
    traditional: "Limitado",
    custom: "Total",
    traditionalIcon: <X className="h-4 w-4 text-red-500" />,
    customIcon: <Check className="h-4 w-4 text-green-500" />,
  },
  {
    feature: "Integraciones",
    traditional: "APIs limitadas",
    custom: "Integración nativa",
    traditionalIcon: <X className="h-4 w-4 text-red-500" />,
    customIcon: <Check className="h-4 w-4 text-green-500" />,
  },
]

export default function CustomVsTraditional() {
  const [activeAdvantage, setActiveAdvantage] = useState<number | null>(null)
  const [showComparison, setShowComparison] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background" ref={ref}>
      {/* Animated background */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: backgroundY, opacity }}>
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </motion.div>

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block">
              <motion.div
                className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4 inline-block"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4 inline mr-2" />
                Sistema Personalizado vs CRM Tradicional
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              ¿Por qué elegir un{" "}
              <span className="relative inline-block">
                <span className="relative z-10">sistema personalizado</span>
                <motion.span
                  className="absolute bottom-2 left-0 h-3 bg-primary/20 w-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                ></motion.span>
              </span>
              ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Descubre las ventajas competitivas que un sistema desarrollado a medida puede ofrecer a tu negocio frente
              a las soluciones tradicionales del mercado.
            </p>
          </div>
        </ScrollReveal>

        {/* Toggle between advantages and comparison */}
        <div className="flex justify-center mb-12">
          <div className="bg-background border border-border rounded-lg p-1 inline-flex">
            <Button
              variant={!showComparison ? "default" : "ghost"}
              onClick={() => setShowComparison(false)}
              className="rounded-md"
            >
              Ventajas Clave
            </Button>
            <Button
              variant={showComparison ? "default" : "ghost"}
              onClick={() => setShowComparison(true)}
              className="rounded-md"
            >
              Comparación Directa
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!showComparison ? (
            <motion.div
              key="advantages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Advantages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {advantages.map((advantage, index) => (
                  <ScrollReveal key={index} delay={index * 0.1} threshold={0.1} className="h-full">
                    <motion.div
                      className="h-full"
                      onMouseEnter={() => setActiveAdvantage(index)}
                      onMouseLeave={() => setActiveAdvantage(null)}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Card
                        className={cn(
                          "h-full border-2 transition-all duration-300 relative overflow-hidden",
                          activeAdvantage === index
                            ? "border-primary/50 shadow-xl"
                            : "border-border hover:border-primary/30",
                        )}
                      >
                        {/* Background gradient overlay */}
                        <div
                          className={cn(
                            "absolute inset-0 opacity-0 transition-opacity duration-500",
                            activeAdvantage === index && "opacity-100",
                          )}
                        >
                          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-5", advantage.color)}></div>
                        </div>

                        <CardContent className="p-6 relative z-10">
                          {/* Icon */}
                          <motion.div
                            className={cn(
                              "relative w-16 h-16 rounded-lg flex items-center justify-center mb-4",
                              "bg-gradient-to-br",
                              advantage.color,
                              advantage.shadowColor,
                            )}
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <div className="text-white">{advantage.icon}</div>
                          </motion.div>

                          <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                          <p className="text-muted-foreground mb-6">{advantage.description}</p>

                          {/* Comparison */}
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{advantage.traditional}</span>
                            </div>
                            <div className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm font-medium">{advantage.custom}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="comparison"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Comparison Table */}
              <div className="bg-background border border-border rounded-xl overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="py-4 px-6 text-left font-semibold">Característica</th>
                        <th className="py-4 px-6 text-center font-semibold">CRM Tradicional</th>
                        <th className="py-4 px-6 text-center font-semibold bg-primary/10">
                          <div className="flex items-center justify-center">
                            <Sparkles className="h-4 w-4 text-primary mr-2" />
                            Sistema Personalizado
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((item, index) => (
                        <motion.tr
                          key={index}
                          className={cn(
                            "border-b border-border transition-colors",
                            index % 2 === 0 ? "bg-muted/20" : "bg-background",
                          )}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <td className="py-4 px-6 font-medium">{item.feature}</td>
                          <td className="py-4 px-6 text-center">
                            <div className="flex items-center justify-center space-x-2">
                              {item.traditionalIcon}
                              <span className="text-sm">{item.traditional}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center bg-primary/5">
                            <div className="flex items-center justify-center space-x-2">
                              {item.customIcon}
                              <span className="text-sm font-medium">{item.custom}</span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/30">
                    <Users className="h-3 w-3 mr-1" />
                    Más de 50 empresas confían en nosotros
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">¿Listo para un sistema que se adapte a ti?</h3>
                  <p className="text-muted-foreground mb-6">
                    Descubre cómo un sistema personalizado puede transformar la eficiencia de tu negocio y reducir
                    costos operativos hasta en un 40%.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-primary to-primary/80 gap-2">
                      Solicitar demo gratuita <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="gap-2">
                      Ver casos de éxito
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-center mb-2">
                      <Zap className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">Implementación rápida</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sistemas funcionales en 4-8 semanas vs 6+ meses de configuración tradicional
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">ROI comprobado</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Retorno de inversión promedio del 300% en el primer año de uso
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
