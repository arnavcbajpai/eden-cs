import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';

export default function Step2({ nextStep, onChange, formData }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Header
        heading="Let's set up a home for all your work"
        subheading="You can always create another workspace later."
      />
      <section>
        <Input
          onChange={onChange}
          label="Workspace Name"
          name="workspaceName"
          value={formData.workspaceName.value}
          error={formData.workspaceName.hasError}
        />
        <Input
          onChange={onChange}
          label="Workspace URL"
          note="optional"
          name="workspaceURL"
          prefix="www.eden.com/"
          value={formData.workspaceURL.value}
          error={formData.workspaceURL.hasError}
        />
        <Button label="Continue" onClick={nextStep} />
      </section>
    </form>
  );
}
