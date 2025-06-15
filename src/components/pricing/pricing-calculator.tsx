"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Check,
  ChevronRight,
  Code,
  Smartphone,
  Globe,
  Send,
  Briefcase,
  Layers,
  ListChecks,
  Palette,
  Monitor,
  Zap,
  ShieldQuestion,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { pricingConfig } from "@/config/pricing"
import { Locale } from "@/i18n.config"
import PricingStepper from "./pricing-stepper"

const icons: { [key: string]: React.ReactElement } = {
  "landing-page": <Globe className="h-5 w-5" />,
  ecommerce: <Briefcase className="h-5 w-5" />,
  webapp: <Code className="h-5 w-5" />,
  mobileapp: <Smartphone className="h-5 w-5" />,
}

type Dictionary = typeof import("@/app/dictionaries/en.json")

interface PriceCalculatorProps {
  lang: Locale
  dictionary: Dictionary
}

export default function PriceCalculator({ lang, dictionary }: PriceCalculatorProps) {
  const priceConfig = pricingConfig[lang]
  const text = dictionary.pricingCalculator

  const {
    projectTypes: projectTypePrices,
    additionalFeatures: additionalFeaturePrices,
    designOptions: designOptionPrices,
    maintenanceOptions: maintenanceOptionPrices,
    extraScreenPrice,
  } = priceConfig

  const {
    steps,
    projectTypes: projectTypeTexts,
    additionalFeatures: additionalFeatureTexts,
    designOptions: designOptionTexts,
    maintenanceOptions: maintenanceOptionTexts,
    urgentDelivery: urgentDeliveryText,
    pageHeadings,
    summary,
    form,
    submissionSuccess,
    navigation,
  } = text

  const [projectType, setProjectType] = useState<string>(projectTypePrices[0].id)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [designOption, setDesignOption] = useState<string>(designOptionPrices[0].id)
  const [screenCount, setScreenCount] = useState<number>(5)
  const [urgentDelivery, setUrgentDelivery] = useState<boolean>(false)
  const [maintenanceOption, setMaintenanceOption] = useState<string>(maintenanceOptionPrices[0].id)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  useEffect(() => {
    const selectedProjectType = projectTypePrices.find((type) => type.id === projectType)
    let price = selectedProjectType ? selectedProjectType.basePrice : 0

    const currentFeatures = additionalFeaturePrices[projectType as keyof typeof additionalFeaturePrices]
    if (currentFeatures) {
      currentFeatures.forEach((feature) => {
        if (selectedFeatures.includes(feature.id)) {
          price += feature.price
        }
      })
    }

    const selectedDesign = designOptionPrices.find((option) => option.id === designOption)
    if (selectedDesign) {
      price += selectedDesign.price
    }

    const extraScreens = Math.max(0, screenCount - 5)
    price += extraScreens * extraScreenPrice

    if (urgentDelivery) {
      price += price * 0.3 // 30% additional for urgency
    }

    setTotalPrice(price)
  }, [
    projectType,
    selectedFeatures,
    designOption,
    screenCount,
    urgentDelivery,
    projectTypePrices,
    additionalFeaturePrices,
    designOptionPrices,
    extraScreenPrice,
  ])

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(lang === "es" ? "es-NI" : "en-US", {
      style: "currency",
      currency: priceConfig.currency,
      minimumFractionDigits: 0,
    }).format(price)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section className="py-20 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block">
            <motion.div
              className="text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full mb-4 inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {text.calculatorCta}
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{text.mainTitle}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{text.mainDescription}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-background border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="p-6 border-b border-border">
                <PricingStepper steps={steps} currentStep={currentStep} />
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentStep === 0 && (
                      <div className="space-y-6">
                        <RadioGroup
                          value={projectType}
                          onValueChange={(value: string) => {
                            setProjectType(value)
                            setSelectedFeatures([])
                          }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                          {projectTypePrices.map((type) => {
                            const typeKey = type.id as keyof typeof projectTypeTexts
                            return (
                              <motion.div key={type.id} variants={itemVariants}>
                                <RadioGroupItem
                                  value={type.id}
                                  id={type.id}
                                  className="peer sr-only"
                                  aria-label={projectTypeTexts[typeKey].name}
                                />
                                <Label
                                  htmlFor={type.id}
                                  className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 h-full transform transition-all duration-300 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:scale-105 peer-data-[state=checked]:shadow-2xl peer-data-[state=checked]:shadow-primary/20 [&:has([data-state=checked])]:border-primary"
                                >
                                  <div className="mb-3 rounded-full bg-primary/10 p-2">
                                    <div className="text-primary">{icons[type.id]}</div>
                                  </div>
                                  <div className="font-semibold">{projectTypeTexts[typeKey].name}</div>
                                  <div className="text-sm text-muted-foreground text-center mt-1">
                                    {projectTypeTexts[typeKey].description}
                                  </div>
                                  <div className="mt-3 text-sm font-medium">
                                    {text.from} {formatPrice(type.basePrice)}
                                  </div>
                                </Label>
                              </motion.div>
                            )
                          })}
                        </RadioGroup>
                      </div>
                    )}

                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {(additionalFeaturePrices[
                            projectType as keyof typeof additionalFeaturePrices
                          ] || []).map((feature) => {
                            const featureTextKey =
                              projectType as keyof typeof additionalFeatureTexts
                            const featureSubKey =
                              feature.id as keyof (typeof additionalFeatureTexts)[typeof featureTextKey]
                            const featureText =
                              additionalFeatureTexts[featureTextKey]?.[featureSubKey]
                            return (
                              <div
                                key={feature.id}
                                className={cn(
                                  "flex items-center justify-between rounded-lg border border-border p-4 cursor-pointer transition-all",
                                  selectedFeatures.includes(feature.id)
                                    ? "bg-primary/10 border-primary"
                                    : "hover:bg-muted/50",
                                )}
                                onClick={() => handleFeatureToggle(feature.id)}
                              >
                                <div className="flex items-center">
                                  <div
                                    className={cn(
                                      "w-5 h-5 rounded-full border flex items-center justify-center mr-3",
                                      selectedFeatures.includes(feature.id)
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : "border-muted-foreground",
                                    )}
                                  >
                                    {selectedFeatures.includes(feature.id) && (
                                      <Check className="h-3 w-3" />
                                    )}
                                  </div>
                                  <div>
                                    <div className="font-medium">{featureText}</div>
                                    {feature.price > 0 && (
                                      <div className="text-sm text-muted-foreground">
                                        + {formatPrice(feature.price)}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-base font-medium mb-4">{pageHeadings.designLevel}</h4>
                          <RadioGroup
                            value={designOption}
                            onValueChange={setDesignOption}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                          >
                            {designOptionPrices.map((option) => {
                              const optionKey = option.id as keyof typeof designOptionTexts
                              return (
                                <div key={option.id}>
                                  <RadioGroupItem
                                    value={option.id}
                                    id={`design-${option.id}`}
                                    className="peer sr-only"
                                    aria-label={designOptionTexts[optionKey].name}
                                  />
                                  <Label
                                    htmlFor={`design-${option.id}`}
                                    className="flex flex-col h-full rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                  >
                                    <div className="font-semibold">{designOptionTexts[optionKey].name}</div>
                                    <div className="text-sm text-muted-foreground mt-1 flex-grow">
                                      {designOptionTexts[optionKey].description}
                                    </div>
                                    <div className="mt-3 text-sm font-medium">
                                      {option.price > 0 ? `+ ${formatPrice(option.price)}` : text.included}
                                    </div>
                                  </Label>
                                </div>
                              )
                            })}
                          </RadioGroup>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-base font-medium">{pageHeadings.screenCount}</h4>
                            <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                              {screenCount} {screenCount === 1 ? text.screen : text.screens}
                            </span>
                          </div>
                          <Slider
                            value={[screenCount]}
                            min={1}
                            max={50}
                            step={1}
                            onValueChange={(value) => setScreenCount(value[0])}
                            className="mb-2"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>1 {text.screen}</span>
                            <span>50 {text.screens}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            {screenCount <= 5
                              ? text.from + " 5 " + text.screens + " " + text.included
                              : `${screenCount - 5} ${text.extraScreens} (+${formatPrice(
                                  (screenCount - 5) * extraScreenPrice,
                                )})`}
                          </p>
                        </div>

                        <div className="flex items-center justify-between space-x-2">
                          <div>
                            <h4 className="text-base font-medium">{urgentDeliveryText.title}</h4>
                            <p className="text-sm text-muted-foreground">{urgentDeliveryText.description}</p>
                          </div>
                          <Switch id="urgent-delivery" checked={urgentDelivery} onCheckedChange={setUrgentDelivery} />
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <h4 className="text-base font-medium mb-4">{pageHeadings.maintenance}</h4>
                        <RadioGroup
                          value={maintenanceOption}
                          onValueChange={setMaintenanceOption}
                          className="grid grid-cols-1 gap-4"
                        >
                          {maintenanceOptionPrices.map((option) => {
                            const optionKey = option.id as keyof typeof maintenanceOptionTexts
                            return (
                              <div key={option.id}>
                                <RadioGroupItem
                                  value={option.id}
                                  id={`maintenance-${option.id}`}
                                  className="peer sr-only"
                                  aria-label={maintenanceOptionTexts[optionKey].name}
                                />
                                <Label
                                  htmlFor={`maintenance-${option.id}`}
                                  className="flex items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                  <div>
                                    <div className="font-semibold">{maintenanceOptionTexts[optionKey].name}</div>
                                    {maintenanceOptionTexts[optionKey].description && (
                                      <div className="text-sm text-muted-foreground">
                                        {maintenanceOptionTexts[optionKey].description}
                                      </div>
                                    )}
                                  </div>
                                  <div className="text-sm font-medium">
                                    {option.price > 0 ? `${formatPrice(option.price)}/${text.perMonth}` : text.noCost}
                                  </div>
                                </Label>
                              </div>
                            )
                          })}
                        </RadioGroup>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="space-y-6">
                        {!isSubmitted ? (
                          <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              <div className="space-y-2">
                                <Label htmlFor="name">{form.name}</Label>
                                <Input
                                  id="name"
                                  placeholder={form.namePlaceholder}
                                  value={formData.name}
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">{form.email}</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder={form.emailPlaceholder}
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="phone">{form.phone}</Label>
                                <Input
                                  id="phone"
                                  placeholder={form.phonePlaceholder}
                                  value={formData.phone}
                                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="company">{form.company}</Label>
                                <Input
                                  id="company"
                                  placeholder={form.companyPlaceholder}
                                  value={formData.company}
                                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                              </div>
                            </div>
                            <div className="space-y-2 mb-6">
                              <Label htmlFor="message">{form.message}</Label>
                              <Textarea
                                id="message"
                                placeholder={form.messagePlaceholder}
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              />
                            </div>
                            <Button
                              type="submit"
                              className="w-full bg-gradient-to-r from-primary to-primary/80"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <div className="flex items-center">
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                  {form.submittingButton}
                                </div>
                              ) : (
                                <div className="flex items-center">
                                  <Send className="h-4 w-4 mr-2" /> {form.submitButton}
                                </div>
                              )}
                            </Button>
                          </form>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8"
                          >
                            <div className="rounded-full bg-primary/20 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                              <Check className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{submissionSuccess.title}</h3>
                            <p className="text-muted-foreground mb-6">{submissionSuccess.description}</p>
                            <Button
                              variant="outline"
                              onClick={() => {
                                setCurrentStep(0)
                                setIsSubmitted(false)
                                setFormData({
                                  name: "",
                                  email: "",
                                  phone: "",
                                  company: "",
                                  message: "",
                                })
                              }}
                            >
                              {submissionSuccess.newQuoteButton}
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {!isSubmitted && (
                <div className="p-6 border-t border-border flex justify-between">
                  <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                    {navigation.previous}
                  </Button>
                  <Button onClick={nextStep} disabled={currentStep === steps.length - 1} className="flex items-center">
                    {navigation.next} <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-background to-muted/50 border border-border rounded-xl shadow-2xl sticky top-24 shadow-primary/10">
              <div className="p-6 border-b border-border/50">
                <h3 className="text-xl font-bold mb-1">{summary.title}</h3>
                <p className="text-sm text-muted-foreground">{summary.description}</p>
              </div>

              <div className="p-6">
                <div className="space-y-5">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <Layers className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{summary.projectType}</div>
                        <div className="text-sm text-muted-foreground">
                          {projectTypeTexts[projectType as keyof typeof projectTypeTexts]?.name}
                        </div>
                      </div>
                    </div>
                    <div className="font-medium text-lg text-right">
                      {formatPrice(projectTypePrices.find((type) => type.id === projectType)?.basePrice || 0)}
                    </div>
                  </div>

                  {selectedFeatures.length > 0 && (
                    <div>
                      <div className="flex items-center font-medium mb-3">
                        <ListChecks className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        {summary.features}
                      </div>
                      <div className="space-y-2 pl-8">
                        {selectedFeatures.map((featureId) => {
                          const featurePrice = additionalFeaturePrices[
                            projectType as keyof typeof additionalFeaturePrices
                          ]?.find((f) => f.id === featureId)
                          const featureTextKey = projectType as keyof typeof additionalFeatureTexts
                          const featureSubKey =
                            featureId as keyof (typeof additionalFeatureTexts)[typeof featureTextKey]
                          const featureText = additionalFeatureTexts[featureTextKey]?.[featureSubKey]

                          return (
                            featurePrice &&
                            featureText && (
                              <div key={featureId} className="flex justify-between items-center text-sm">
                                <div className="text-muted-foreground">{featureText}</div>
                                <div className="font-medium">{formatPrice(featurePrice.price)}</div>
                              </div>
                            )
                          )
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <Palette className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{summary.design}</div>
                        <div className="text-sm text-muted-foreground">
                          {designOptionTexts[designOption as keyof typeof designOptionTexts]?.name}
                        </div>
                      </div>
                    </div>
                    <div className="font-medium text-lg text-right">
                      {formatPrice(designOptionPrices.find((option) => option.id === designOption)?.price || 0)}
                    </div>
                  </div>

                  {screenCount > 5 && (
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <Monitor className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{summary.additionalScreens}</div>
                          <div className="text-sm text-muted-foreground">
                            {screenCount - 5} {text.extraScreens}
                          </div>
                        </div>
                      </div>
                      <div className="font-medium text-lg text-right">
                        {formatPrice((screenCount - 5) * extraScreenPrice)}
                      </div>
                    </div>
                  )}

                  {urgentDelivery && (
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <Zap className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{summary.urgent}</div>
                          <div className="text-sm text-muted-foreground">{text.fasterDelivery}</div>
                        </div>
                      </div>
                      <div className="font-medium text-lg text-primary text-right">+30%</div>
                    </div>
                  )}

                  <div className="border-t border-dashed border-border my-4"></div>

                  <div className="flex justify-between items-center pt-2">
                    <div className="font-bold text-xl">{summary.total}</div>
                    <div className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                      {formatPrice(totalPrice)}
                    </div>
                  </div>

                  {maintenanceOption !== "none" && (
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-dashed border-border">
                      <div className="flex items-start">
                        <ShieldQuestion className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{summary.maintenance}</div>
                          <div className="text-sm text-muted-foreground">
                            {maintenanceOptionTexts[maintenanceOption as keyof typeof maintenanceOptionTexts]?.name}
                          </div>
                        </div>
                      </div>
                      <div className="font-medium text-lg text-right">
                        {formatPrice(
                          maintenanceOptionPrices.find((option) => option.id === maintenanceOption)?.price || 0,
                        )}
                        <span className="text-sm text-muted-foreground">/{text.perMonth}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 text-xs text-muted-foreground text-center">
                  <p>{summary.disclaimer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
