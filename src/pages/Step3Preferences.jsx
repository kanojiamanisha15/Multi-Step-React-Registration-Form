// src/components/Step3Preferences.jsx
import React, { useState } from "react";
import useFormContext from "../context/useFormContext";
import CardContainer from "../components/CardContainer";
import Button from "../components/Button";
import { validateStep3, validateFavoriteCategory } from "../validationRules";
import SelectField from "../components/SelectField";

const Step3Preferences = () => {
  const { formData, updateFormData, setStep } = useFormContext();
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const errs = validateStep3(formData);
    if (Object.keys(errs).length) setErrors(errs);
    else setStep(4); // review
  };

  const categoryOptions = [
    { value: "", label: "Select Category" },
    { value: "tech", label: "Tech" },
    { value: "fashion", label: "Fashion" },
    { value: "sports", label: "Sports" },
  ];

  return (
    <CardContainer title="Step 3: Preferences">
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}
      >
        <input
          type="checkbox"
          checked={formData.receiveNewsletter}
          onChange={(e) =>
            updateFormData("receiveNewsletter", e.target.checked)
          }
          style={{ marginRight: "10px" }}
        />
        Receive Newsletter
      </label>

      <SelectField
        name="favoriteCategory"
        value={formData.favoriteCategory}
        onChange={(e) => updateFormData("favoriteCategory", e.target.value)}
        options={categoryOptions}
        validateField={validateFavoriteCategory}
        error={errors.favoriteCategory}
      />

      {errors.general && (
        <p
          style={{ color: "#d32f2f", fontSize: "12px", margin: "4px 0 8px 0" }}
        >
          {errors.general}
        </p>
      )}

      <div style={{ textAlign: "center" }}>
        <Button onClick={() => setStep(2)} bgColor="#888">
          ⬅ Back
        </Button>
        <Button onClick={handleNext}>Review ➡</Button>
      </div>
    </CardContainer>
  );
};

export default Step3Preferences;
