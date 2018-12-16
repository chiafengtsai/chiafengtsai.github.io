import React from "react";

const AnswerButton = ({ showAnswer, toggleAnswer }) => {
  const text = showAnswer ? "close" : "answer";
  let classes = "answer-button ";
  if (showAnswer) classes += "answer-button--activated";
  return (
    <a
      href="javascript:void(0)"
      className={classes}
      onClick={() => toggleAnswer()}
    >
      {text}
    </a>
  );
};

export default AnswerButton;
