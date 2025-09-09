import React, { useState } from "react";
import useFormContext from "../context/useFormContext";

const CheckboxField = ({ name, label, checked, validate }) => {
  const { updateFormData } = useFormContext();
  const [localError, setLocalError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.checked;
    updateFormData(name, newValue);

    const errs = validate({ [name]: newValue });
    setLocalError(errs[name] || "");
  };

  const labelStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "15px",
    marginLeft: "8px",
  };

  const errorStyle = {
    color: "#d32f2f",
    fontSize: "13px",
    margin: "4px 0 8px 0",
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span style={labelStyle}>{label}</span>
      </label>
      {localError && <p style={errorStyle}>{localError}</p>}
    </div>
  );
};

export default CheckboxField;
