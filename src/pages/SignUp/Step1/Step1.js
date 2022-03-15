import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import './Step1.css';

export default function Step1({ nextStep }) {
  return (
    <div>
      <Header
        heading="Welcome! First things first..."
        subheading="You can always change them later."
      />
      <section>
        <Input label="Full Name" name="fullName" />
        <Input label="Display Name" name="displayName" />
        <Button label="Continue" onClick={nextStep} />
      </section>
    </div>
  );
}
