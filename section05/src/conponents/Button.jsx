import React from "react";

const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  color: "black",
};
