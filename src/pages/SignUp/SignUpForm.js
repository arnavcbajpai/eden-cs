import React, { useEffect, useState } from 'react';
import Steps, { Step } from 'components/Steps/Steps';
import Step1 from 'pages/SignUp/Step1/Step1';
import Step2 from 'pages/SignUp/Step2/Step2';
import Step3 from 'pages/SignUp/Step3/Step3';
import Step4 from 'pages/SignUp/Step4/Step4';
import edenLogo from 'assets/edeniconsmall.png';
import './SignUpForm.css';

const nameRegex =
  /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

export default function SignUpForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
    useMode: '',
  });
  const [validFormStep, setValidFormStep] = useState(false);

  const nextStep = () => {
    if (!validFormStep) setCurrentStep((prev) => prev + 1);
  };

  const setStep = (step) => {
    setCurrentStep(step);
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    let validValue = false;
    console.log(nameRegex.test(value));
    if (
      name === 'fullName' ||
      name === 'displayName' ||
      name === 'workspaceName'
    ) {
      if (nameRegex.test(value)) validValue = true;
      else setValidFormStep(false);
    }
    if (validValue)
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  useEffect(() => console.log(formData), [formData]);

  const formStepArray = [
    {
      title: '1',
      component: <Step1 onChange={handleFormData} nextStep={nextStep} />,
    },
    {
      title: '2',
      component: <Step2 onChange={handleFormData} nextStep={nextStep} />,
    },
    {
      title: '3',
      component: <Step3 onChange={handleFormData} nextStep={nextStep} />,
    },
    { title: '4', component: <Step4 formData={formData} setStep={setStep} /> },
  ];

  return (
    <div className="signup-container">
      <img className="header-logo" src={edenLogo} width="25%" alt="eden_logo" />
      <Steps setStep={setStep} currentStep={currentStep}>
        {formStepArray.map((formStep, index) => (
          <Step key={index} title={formStep.title} />
        ))}
      </Steps>
      {formStepArray[currentStep - 1].component}
    </div>
  );
}
