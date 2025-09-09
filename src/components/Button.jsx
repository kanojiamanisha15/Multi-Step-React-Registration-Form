const Button = ({ children, onClick, bgColor = "#4CAF50", color = "#fff", marginRight = 8 }) => {
  const btnStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "12px",
    fontSize: "14px",
    cursor: "pointer",
    margin: `12px ${marginRight}px 0 0`,
    backgroundColor: bgColor,
    color: color,
    transition: "all 0.3s",
  };

  return (
    <button
      style={btnStyle}
      onClick={onClick}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
      onMouseOut={(e) => (e.target.style.backgroundColor = bgColor)}
    >
      {children}
    </button>
  );
};

export default Button;
