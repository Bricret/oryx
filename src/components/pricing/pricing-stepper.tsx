import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper"
import { cn } from "@/lib/utils"

interface Step {
  title: string
  description: string
}

interface PricingStepperProps {
  steps: Step[]
  currentStep: number // 0-indexed
}

export default function PricingStepper({ steps, currentStep }: PricingStepperProps) {
  return (
    <div className="space-y-4 text-center">
      <Stepper value={currentStep + 1} className="flex w-full items-center justify-between">
        {steps.map((stepData, index) => {
          const stepNumber = index + 1
          return (
            <StepperItem
              key={stepNumber}
              step={stepNumber}
              className={cn(
                "relative flex-1 flex-col",
                index > 0 && "hidden sm:flex",
                index > 1 && "hidden md:flex",
                index > 2 && "hidden lg:flex",
              )}
            >
              <StepperTrigger className="flex-col gap-3 rounded">
                <StepperIndicator />
                <div className="space-y-0.5 px-2 text-center">
                  <StepperTitle>{stepData.title}</StepperTitle>
                  <StepperDescription className="max-sm:hidden">{stepData.description}</StepperDescription>
                </div>
              </StepperTrigger>
              {stepNumber < steps.length && (
                <StepperSeparator className="absolute inset-x-0 top-3 left-[calc(50%+0.75rem+0.125rem)] -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none" />
              )}
            </StepperItem>
          )
        })}
      </Stepper>
    </div>
  )
}
