import React from 'react'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import Header from 'components/Header/Header'

export default function Step3({ currentStep, nextStep }) {
  return (
    <div>
      <Header
        heading="How are you planning to use Eden?"
        subheading="We'll streamline your process accordingly"
      />
      <section>
        <Input label="Full Name" name="fullName" />
        <Input label="Display Name" name="displayName" />
        <Button label="Continue" onClick={nextStep} />
      </section>
    </div>
  )
}
