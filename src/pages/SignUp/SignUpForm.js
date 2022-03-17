import React, { useContext, useEffect, useState } from 'react';
import Steps, { Step } from 'components/Steps/Steps';
import Step1 from 'pages/SignUp/Step1/Step1';
import Step2 from 'pages/SignUp/Step2/Step2';
import Step3 from 'pages/SignUp/Step3/Step3';
import Step4 from 'pages/SignUp/Step4/Step4';
import edenLogo from 'assets/edeniconsmall.png';
import './SignUpForm.css';

const nameRegex = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/;

export default function SignUpForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: { value: '', hasError: false },
    displayName: { value: '', hasError: false },
    workspaceName: { value: '', hasError: false },
    workspaceURL: { value: 'www.eden.com/', hasError: false },
    useMode: { value: 'single', hasError: false },
  });

  const [validFormStep, setValidFormStep] = useState(false);

  const nextStep = () => {
    if (validFormStep) setCurrentStep((prev) => prev + 1);
    else alert('Please enter the correct information.');
  };

  const setStep = (step) => {
    setCurrentStep(step);
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    let validValue = false;
    console.log(name, value);

    if (value) {
      console.log(value, nameRegex.test(value));
      if (
        name === 'fullName' ||
        name === 'displayName' ||
        name === 'workspaceName'
      ) {
        if ((nameRegex.test(value), typeof value)) {
          // valid regex tested value
          validValue = true;
        } else {
          // for value failing regex
          validValue = false;
        }
      } else {
        // simple empty value check
        validValue = true;
      }
    } else {
      // if value is null
      validValue = false;
    }
    setValidFormStep(true);

    console.log(validValue);

    // if (validValue) {
    //   setFormData({
    //     ...formData,
    //     [name]: {
    //       ...formData[name],
    //       value: value,
    //     },
    //   });
    // }
    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        value: value,
      },
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const formStepArray = [
    {
      title: '1',
      component: (
        <Step1
          formData={formData}
          onChange={handleFormData}
          nextStep={nextStep}
        />
      ),
    },
    {
      title: '2',
      component: (
        <Step2
          formData={formData}
          onChange={handleFormData}
          nextStep={nextStep}
        />
      ),
    },
    {
      title: '3',
      component: (
        <Step3
          formData={formData}
          nextStep={nextStep}
          setFormData={setFormData}
        />
      ),
    },
    { title: '4', component: <Step4 formData={formData} /> },
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
