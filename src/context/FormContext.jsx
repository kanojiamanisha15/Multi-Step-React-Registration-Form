import React, { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    addressLine1: "",
    city: "",
    postalCode: "",
    receiveNewsletter: false,
    favoriteCategory: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ step, setStep, formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
