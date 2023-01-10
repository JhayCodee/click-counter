import "../styles/Button.css";

// button component
function Button({ text, isClickBtn, handleClick }) {
  return (
    <button
      className={isClickBtn ? "click-btn" : "restart-btn"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
