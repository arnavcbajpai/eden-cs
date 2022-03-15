import React, { useState } from 'react';
import Steps, { Step } from 'components/Steps/Steps';
import Step1 from 'pages/SignUp/Step1/Step1';
import Step2 from 'pages/SignUp/Step2/Step2';
import Step3 from 'pages/SignUp/Step3/Step3';
import Step4 from 'pages/SignUp/Step4/Step4';
import './SignUpForm.css';

export default function SignUpForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const setStep = (step) => {
    setCurrentStep(step);
  };
  return (
    <div className="signup-container">
      <Steps setStep={setStep} currentStep={currentStep}>
        <Step title="1" />
        <Step title="2" />
        <Step title="3" />
        <Step title="4" />
      </Steps>
      {currentStep === 1 && <Step1 nextStep={nextStep} />}
      {currentStep === 2 && <Step2 nextStep={nextStep} />}
      {currentStep === 3 && <Step3 nextStep={nextStep} />}
      {currentStep === 4 && <Step4 setStep={setStep} />}
    </div>
  );
}
