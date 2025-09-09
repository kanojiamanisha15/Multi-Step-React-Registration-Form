// src/components/Step1PersonalInfo.jsx
import React, { useState } from "react";
import Button from "../components/Button";
import CardContainer from "../components/CardContainer";
import InputField from "../components/InputField";
import useFormContext from "../context/useFormContext";
import { validateStep1 } from "../validationRules";

const Step1PersonalInfo = () => {
  const { formData, updateFormData, setStep } = useFormContext();
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const errs = validateStep1(formData);
    if (Object.keys(errs).length) setErrors(errs);
    else setStep(2);
  };

  return (
    <CardContainer title="Step 1: Personal Info">
      <InputField
        name="fullName"
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => updateFormData("fullName", e.target.value)}
        validate={validateStep1}
        error={errors.fullName}
      />
      <InputField
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => updateFormData("email", e.target.value)}
        validate={validateStep1}
        error={errors.email}
      />
      <InputField
        name="age"
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => updateFormData("age", e.target.value)}
        validate={validateStep1}
        error={errors.age}
      />

      <Button onClick={handleNext}>Next ➡</Button>
    </CardContainer>
  );
};

export default Step1PersonalInfo;
