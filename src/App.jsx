// src/App.jsx
import React from "react";
import { FormProvider } from "./context/FormContext";
import useFormContext from "./context/useFormContext";
import Step1PersonalInfo from "./pages/Step1PersonalInfo";
import Step2Address from "./pages/Step2Address";
import Step3Preferences from "./pages/Step3Preferences";
import Review from "./pages/Review";

const ProgressBar = () => {
  const { step } = useFormContext();
  const steps = ["Personal", "Address", "Preferences", "Review"];
  const progressPercent = ((step - 1) / (steps.length - 1)) * 100;

  const container = {
    width: "80%",
    margin: "40px auto",
    position: "relative",
  };

  const barBackground = {
    position: "absolute",
    top: "20px",
    left: 0,
    width: "100%",
    height: "6px",
    backgroundColor: "#ddd",
    borderRadius: "4px",
    zIndex: 1,
  };

  const barFiller = {
    position: "absolute",
    top: "20px",
    left: 0,
    width: `${progressPercent}%`,
    height: "6px",
    backgroundColor: "#4CAF50",
    borderRadius: "4px",
    zIndex: 2,
    transition: "width 0.4s ease-in-out",
  };

  const stepsContainer = {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 3,
  };

  const circleStyle = (active, completed) => ({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: active ? "#4CAF50" : completed ? "#4CAF50" : "#ddd",
    color: active || completed ? "#fff" : "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s",
  });

  const labelStyle = {
    marginTop: "8px",
    fontSize: "12px",
    color: "#333",
    textAlign: "center",
  };

  return (
    <div style={container}>
      <div style={barBackground}></div>
      <div style={barFiller}></div>
      <div style={stepsContainer}>
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const active = step === stepNumber;
          const completed = step > stepNumber;
          return (
            <div key={label} style={{ textAlign: "center", flex: 1 }}>
              <div style={circleStyle(active, completed)}>{stepNumber}</div>
              <div style={labelStyle}>{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FormSteps = () => {
  const { step } = useFormContext();
  switch (step) {
    case 1:
      return <Step1PersonalInfo />;
    case 2:
      return <Step2Address />;
    case 3:
      return <Step3Preferences />;
    case 4:
      return <Review />;
    default:
      return <Step1PersonalInfo />;
  }
};

const App = () => (
  <FormProvider>
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Multi-Step Registration Form
      </h1>
      <ProgressBar />
      <FormSteps />
    </div>
  </FormProvider>
);

export default App;
