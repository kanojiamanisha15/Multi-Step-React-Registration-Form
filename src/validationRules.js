// src/validation.js
export const validateStep1 = (data) => {
  let errors = {};
  if (!data.fullName || data.fullName.length < 3) {
    errors.fullName = "Full name must be at least 3 characters";
  }
  if (!/^\S+@\S+\.\S+$/.test(data.email || "")) {
    errors.email = "Enter a valid email";
  }
  const age = Number(data.age);
  if (!age || age < 18 || age > 99) {
    errors.age = "Age must be between 18 and 99";
  }
  return errors;
};

// Individual field validators for real-time validation
export const validateFullName = (value) => {
  if (!value || value.length < 3) {
    return "Full name must be at least 3 characters";
  }
  return "";
};

export const validateEmail = (value) => {
  if (!/^\S+@\S+\.\S+$/.test(value || "")) {
    return "Enter a valid email";
  }
  return "";
};

export const validateAge = (value) => {
  const age = Number(value);
  if (!age || age < 18 || age > 99) {
    return "Age must be between 18 and 99";
  }
  return "";
};

export const validateStep2 = (data) => {
  let errors = {};
  if (!data.addressLine1) errors.addressLine1 = "Address is required";
  if (!data.city) errors.city = "City is required";
  if (!/^\d{5,6}$/.test(data.postalCode || "")) {
    errors.postalCode = "Postal code must be 5–6 digits";
  }
  return errors;
};

// Individual field validators for Step 2
export const validateAddressLine1 = (value) => {
  if (!value) return "Address is required";
  return "";
};

export const validateCity = (value) => {
  if (!value) return "City is required";
  return "";
};

export const validatePostalCode = (value) => {
  if (!/^\d{5,6}$/.test(value || "")) {
    return "Postal code must be 5–6 digits";
  }
  return "";
};

export const validateStep3 = (data) => {
  let errors = {};
  if (!data.favoriteCategory) {
    errors.favoriteCategory = "Please select a category";
  }
  return errors;
};

// Individual field validators for Step 3
export const validateFavoriteCategory = (value) => {
  if (!value) return "Please select a category";
  return "";
};
