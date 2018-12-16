import React from "react";

const Button = ({ updateQuestion }) => {
  return (
    <a
      href="javascript:void(0)"
      className="main-button"
      onClick={() => updateQuestion()}
    >
      Next Question
    </a>
  );
};

export default Button;
