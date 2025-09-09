// src/components/Step2Address.jsx
import React, { useState } from "react";
import useFormContext from "../context/useFormContext";
import CardContainer from "../components/CardContainer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { validateStep2 } from "../validationRules";

const Step2Address = () => {
  const { formData, updateFormData, setStep } = useFormContext();
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const errs = validateStep2(formData);
    if (Object.keys(errs).length) setErrors(errs);
    else setStep(3);
  };

  return (
    <CardContainer title="Step 2: Address">
      <InputField
        type="text"
        placeholder="Address Line 1"
        value={formData.addressLine1}
        onChange={(e) => updateFormData("addressLine1", e.target.value)}
        error={errors.addressLine1}
      />
      <InputField
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => updateFormData("city", e.target.value)}
        error={errors.city}
      />
      <InputField
        type="text"
        placeholder="Postal Code"
        value={formData.postalCode}
        onChange={(e) => updateFormData("postalCode", e.target.value)}
        error={errors.postalCode}
      />

      <div style={{ textAlign: "center" }}>
        <Button onClick={() => setStep(1)} bgColor="#888">
          ⬅ Back
        </Button>
        <Button onClick={handleNext}>Next ➡</Button>
      </div>
    </CardContainer>
  );
};

export default Step2Address;
