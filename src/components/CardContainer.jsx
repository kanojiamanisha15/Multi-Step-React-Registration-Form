const CardContainer = ({ children, title }) => {
  const containerStyle = {
    maxWidth: "500px",
    width: "100%",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    background: "linear-gradient(to bottom, #ffffff, #f0f4f8)",
    fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: "auto",
    boxSizing: "border-box", // ✅ padding stays inside maxWidth
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontWeight: "700",
    fontSize: "24px",
    letterSpacing: "1px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  };

  return (
    <div style={containerStyle}>
      {title && <h2 style={titleStyle}>{title}</h2>}
      {children}
    </div>
  );
};

export default CardContainer;
