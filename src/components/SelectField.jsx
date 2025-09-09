import { useState } from "react";
import useFormContext from "../context/useFormContext";

const SelectField = ({
  name,
  value,
  options,
  validate,
  validateField,
  onChange,
  error,
}) => {
  const { updateFormData } = useFormContext();
  const [localError, setLocalError] = useState("");

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    margin: "10px 0",
    borderRadius: "12px",
    border: localError || error ? "1px solid #d32f2f" : "1px solid #ccc",
    fontSize: "15px",
    fontFamily: "'Poppins', sans-serif",
  };

  const errorStyle = {
    color: "#d32f2f",
    fontSize: "13px",
    margin: "4px 0 8px 0",
  };

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Use the passed onChange if provided, otherwise use updateFormData
    if (onChange) {
      onChange(e);
    } else if (name) {
      updateFormData(name, newValue);
    }

    // Run real-time validation if validateField function is provided
    if (validateField) {
      const errorMessage = validateField(newValue);
      setLocalError(errorMessage);
    }
    // Fallback to full form validation if validateField not provided
    else if (validate && name) {
      const errs = validate({ [name]: newValue });
      setLocalError(errs[name] || "");
    }
  };

  return (
    <div>
      <select value={value} onChange={handleChange} style={inputStyle}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {(localError || error) && <p style={errorStyle}>{localError || error}</p>}
    </div>
  );
};

export default SelectField;
