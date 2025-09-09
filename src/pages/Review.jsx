import useFormContext from "../context/useFormContext";
import CardContainer from "../components/CardContainer";
import Button from "../components/Button";

const Review = () => {
  const { formData, setStep } = useFormContext();

  const renderField = (label, value) => (
    <p>
      <span style={{ fontWeight: "600", marginTop: "10px" }}>{label}:</span>
      <span style={{ marginLeft: "6px", color: "#555" }}>{value}</span>
    </p>
  );

  const handleSubmit = () => {
    alert("Form submitted successfully! Check console for data.");
    console.log("Final Data:", formData);
  };

  return (
    <CardContainer title="Review Your Data">
      {renderField("Full Name", formData.fullName)}
      {renderField("Email", formData.email)}
      {renderField("Age", formData.age)}
      {renderField("Address", `${formData.addressLine1}, ${formData.city}`)}
      {renderField("Postal Code", formData.postalCode)}
      {renderField("Newsletter", formData.receiveNewsletter ? "Yes" : "No")}
      {renderField("Favorite Category", formData.favoriteCategory)}

      <div style={{ textAlign: "center" }}>
        <Button onClick={() => setStep(3)} bgColor="#888">
          ⬅ Back
        </Button>
        <Button onClick={handleSubmit}>Submit ✅</Button>
      </div>
    </CardContainer>
  );
};

export default Review;
