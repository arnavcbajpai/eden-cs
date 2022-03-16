import React, { useEffect, useState } from 'react';
import Steps, { Step } from 'components/Steps/Steps';
import Step1 from 'pages/SignUp/Step1/Step1';
import Step2 from 'pages/SignUp/Step2/Step2';
import Step3 from 'pages/SignUp/Step3/Step3';
import Step4 from 'pages/SignUp/Step4/Step4';
import edenLogo from 'assets/edeniconsmall.png';
import './SignUpForm.css';

export default function SignUpForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
    useMode: '',
  });

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const setStep = (step) => {
    setCurrentStep(step);
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="signup-container">
      <img className="header-logo" src={edenLogo} width="25%" alt="eden_logo" />
      <Steps setStep={setStep} currentStep={currentStep}>
        <Step title="1" />
        <Step title="2" />
        <Step title="3" />
        <Step title="4" />
      </Steps>
      {currentStep === 1 && (
        <Step1 onChange={handleFormData} nextStep={nextStep} />
      )}
      {currentStep === 2 && (
        <Step2 onChange={handleFormData} nextStep={nextStep} />
      )}
      {currentStep === 3 && (
        <Step3 onChange={handleFormData} nextStep={nextStep} />
      )}
      {currentStep === 4 && <Step4 formData={formData} setStep={setStep} />}
    </div>
  );
}
