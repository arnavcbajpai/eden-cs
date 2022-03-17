import React, { useState } from 'react';
import Header from 'components/Header/Header';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import myselfLogo from 'assets/myselflogo.svg';
import myselfLogoColor from 'assets/myselflogoColor.svg';
import teamLogo from 'assets/teamlogo.svg';
import teamLogoColor from 'assets/teamlogoColor.svg';

export default function Step3({ formData, nextStep, setFormData }) {
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
              useMode: { hasError: false, value: 'single' },
            })
          }
          name="single"
          isActive={formData.useMode.value === 'single'}
          icon={
            formData.useMode.value === 'single' ? myselfLogoColor : myselfLogo
          }
          alt="logo"
          heading="For myself"
          description="Write better. Think more clearly. Stay organized."
        />
        <Card
          onClick={() =>
            setFormData({
              ...formData,
              useMode: { hasError: false, value: 'team' },
            })
          }
          name="team"
          isActive={formData.useMode.value === 'team'}
          icon={formData.useMode.value === 'team' ? teamLogoColor : teamLogo}
          alt="logo"
          heading="With my team"
          description="Wikis, docs, tasks & project, all in one place."
        />
      </section>
      <Button label="Continue" onClick={nextStep} />
    </div>
  );
}
