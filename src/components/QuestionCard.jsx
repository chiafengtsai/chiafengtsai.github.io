import React from "react";

const QuestionCard = ({ isVisible, englishValue }) => {
  let classes = "question-card__main-content ";
  if (isVisible) classes += "main-content--activated";
  const theEnglishValue = isVisible ? englishValue : "";
  return (
    <div className="question-card">
      <span className="question-card__subtitle">question:</span>
      <p className={classes}>{theEnglishValue}</p>
    </div>
  );
};

export default QuestionCard;
