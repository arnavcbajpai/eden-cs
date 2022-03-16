import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';

export default function Step2({ nextStep, onChange }) {
  return (
    <form>
      <Header
        heading="Let's set up a home for all your work"
        subheading="You can always create another workspace later."
      />
      <section>
        <Input
          onChange={onChange}
          label="Workspace Name"
          name="workspaceName"
        />
        <Input onChange={onChange} label="Workspace URL" name="workspaceURL" />
        <Button label="Continue" onClick={nextStep} />
      </section>
    </form>
  );
}
