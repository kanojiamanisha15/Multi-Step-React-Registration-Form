# Multi-Step React Registration Form

## Overview
This project is a **three-step registration form** built with **React function components and hooks**.  
Each step collects different user information, allows navigation between steps, validates input, and displays a review screen before submission. The form uses **React Context API** to manage state across steps without prop drilling.

---

## Features
- **Step 1: Personal Info**  
  - Fields: Full Name, Email, Age  
  - Age must be between 18–99  

- **Step 2: Address**  
  - Fields: Address Line 1, City, Postal Code  
  - Postal code must match a pattern  

- **Step 3: Preferences**  
  - Fields: Receive Newsletter (checkbox), Favorite Category (dropdown)  
  - At least one preference must be selected  

- **Navigation**  
  - Users can go back and forth using “Next” / “Back” buttons  
  - Current step and data persist across steps  

- **Review & Submit**  
  - Shows all entered data before submission  
  - On submit, displays a summary of the entered data  

- **Validation**  
  - Custom validation logic for each field  
  - Error messages appear below inputs  
  - Easily adaptable for new rules  

- **UI Enhancements**  
  - Wizard-style progress bar with numbered steps  
  - Centered responsive form card  
  - Inline-styled buttons and inputs  
  - Smooth transitions between steps  

---
Documentation

Why Context for state management across steps?
I chose the React Context API because it allows me to share form data and navigation state (step, formData, setStep, updateFormData) across multiple step components without prop drilling. Each step is isolated in its own component, but all can access and update the shared state through the context. This makes the form wizard scalable, consistent, and easy to maintain as new steps or fields are added.

How the validation logic works and how it is adaptable?
Validation is implemented through custom functions (validateStep1, validateStep2, validateStep3) that check each field against business rules (e.g., age between 18–99, postal code pattern, category selection). Errors are returned as key–value pairs, making it simple to display messages below the corresponding inputs. Because the logic is centralized and modular, new rules (such as disallowing duplicate postal codes) can be added easily without rewriting the whole validation system.
