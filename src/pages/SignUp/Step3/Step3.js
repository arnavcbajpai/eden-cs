import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';

export default function Step3({ nextStep, onChange }) {
  return (
    <div>
      <Header
        heading="How are you planning to use Eden?"
        subheading="We'll streamline your process accordingly"
      />
      <section>
        <Input onChange={onChange} label="Use Mode" name="useMode" />
        <Button label="Continue" onClick={nextStep} />
      </section>
    </div>
  );
}
