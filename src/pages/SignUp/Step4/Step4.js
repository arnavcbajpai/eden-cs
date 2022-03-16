import React from 'react';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';

export default function Step4({ setStep, formData }) {
  return (
    <div>
      <Header
        heading="Congratulations Eren"
        subheading="You have completed onboarding, you can start using Eden."
      />
      <Button
        label="Create Workspace"
        onClick={() => {
          alert('User journey completed');
          setStep(1);
        }}
      />
    </div>
  );
}
