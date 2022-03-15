import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';

export default function Step2({ nextStep }) {
  return (
    <div>
      <Header
        heading="Let's set up a home for all your work"
        subheading="You can always create another workspace later."
      />
      <section>
        <Input label="Workspace Name" name="fullName" />
        <Input label="Workspace URL" name="displayName" />
        <Button label="Continue" onClick={nextStep} />
      </section>
    </div>
  );
}
