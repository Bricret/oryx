import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface Step {
  title: string
  description: string
}

interface PricingStepperProps {
  steps: Step[]
  currentStep: number // 0-indexed
}

export default function PricingStepper({ steps, currentStep }: PricingStepperProps) {
  const [titleHeight, setTitleHeight] = useState<number | null>(null)
  const titleRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (titleRefs.current.length === steps.length) {
      // Esperar a que se rendericen todos los elementos
      const timer = setTimeout(() => {
        const heights = titleRefs.current
          .filter(ref => ref !== null)
          .map(ref => ref!.scrollHeight)
        
        if (heights.length > 0) {
          const maxHeight = Math.max(...heights)
          setTitleHeight(maxHeight)
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [steps])

  return (
    <div className="space-y-4 text-center">
      {/* Versión móvil */}
      <div className="sm:hidden">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-sm font-medium text-primary">
            {currentStep + 1}/{steps.length}
          </span>
        </div>
        <h3 className="text-base font-semibold">
          {steps[currentStep].title}
        </h3>
      </div>

      {/* Versión desktop */}
      <Stepper value={currentStep + 1} className="hidden sm:flex w-full items-center justify-between">
        {steps.map((stepData, index) => {
          const stepNumber = index + 1
          return (
            <StepperItem
              key={stepNumber}
              step={stepNumber}
              className="relative flex-1 flex-col"
            >
              <StepperTrigger className="flex-col gap-2 rounded">
                <StepperIndicator />
                <div 
                  ref={(el) => {
                    titleRefs.current[index] = el
                  }}
                  className="space-y-0.5 px-1 text-center flex items-center justify-center"
                  style={{ 
                    minHeight: titleHeight ? `${titleHeight}px` : 'auto',
                    height: titleHeight ? `${titleHeight}px` : 'auto'
                  }}
                >
                  <StepperTitle className="leading-tight text-sm sm:text-base">{stepData.title}</StepperTitle>
                </div>
              </StepperTrigger>
              {stepNumber < steps.length && (
                <StepperSeparator 
                  className={cn(
                    "absolute inset-x-0 top-3 -order-1 m-0 -translate-y-1/2 w-[calc(100%-1.5rem)] group-data-[orientation=horizontal]/stepper:flex-none",
                    index === 0 ? "left-[calc(50%+0.75rem+0.125rem)]" : "left-[calc(50%+0.75rem)]"
                  )} 
                />
              )}
            </StepperItem>
          )
        })}
      </Stepper>
    </div>
  )
}
