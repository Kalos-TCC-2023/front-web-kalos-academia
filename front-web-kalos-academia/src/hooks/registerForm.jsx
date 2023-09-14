import { useState } from "react"

export function registerForm(steps){

    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(indexStep, eventAction){
        if(eventAction) eventAction.preventDefault()

        if(indexStep < 0 || indexStep >= steps.length) return

        setCurrentStep(indexStep)

    }

    console.log(currentStep)

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length,
        isFirstStep: currentStep === 0
    }
}