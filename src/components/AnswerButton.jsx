import React, { Component } from "react";

const AnswerButton = props => {
  const text = props.showAnswer ? "close" : "answer";
  let classes = "answer-button ";
  if (props.showAnswer) classes += "answer-button--activated";
  return (
    <a
      href="javascript:void(0)"
      className={classes}
      onClick={() => props.toggleAnswer()}
    >
      {text}
    </a>
  );
};

export default AnswerButton;
