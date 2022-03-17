import React, { useState } from 'react';
import Header from 'components/Header/Header';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import myselfLogo from 'assets/myselflogo.svg';
import teamLogo from 'assets/teamlogo.svg';

export default function Step3({ formData, nextStep, setFormData }) {
  console.log(formData.useMode);
  return (
    <div>
      <Header
        heading="How are you planning to use Eden?"
        subheading="We'll streamline your process accordingly"
      />
      <section>
        <Card
          onClick={() =>
            setFormData({
              ...formData,
              useMode: { value: 'single', hasError: false },
            })
          }
          name="single"
          isActive={formData.useMode.value === 'single'}
          icon={myselfLogo}
          alt="logo"
          heading="For myself"
          description="Write better. Think more clearly. Stay organized."
        />
        <Card
          onClick={() =>
            setFormData({
              ...formData,
              useMode: { value: 'team', hasError: false },
            })
          }
          name="team"
          isActive={formData.useMode.value === 'team'}
          icon={teamLogo}
          alt="logo"
          heading="With my team"
          description="Wikis, docs, tasks & project, all in one place."
        />
      </section>
      <Button label="Continue" onClick={nextStep} />
    </div>
  );
}
