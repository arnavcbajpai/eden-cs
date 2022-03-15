import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';

export default function Step4({ setStep }) {
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
