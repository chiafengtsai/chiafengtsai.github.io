import React, { Component } from "react";
class QuestionCard extends Component {
  componentDidUpdate() {
    const mainContent = this.refs.mainContent;
    mainContent.classList.add("question-card--animate");
    setTimeout(() => {
      mainContent.classList.remove("question-card--animate");
    }, 500);
  }

  render() {
    return (
      <div className="question-card">
        <span className="question-card__subtitle">question:</span>
        <p className="question-card__main-content" ref="mainContent">
          {this.props.englishValue}
        </p>
      </div>
    );
  }
}

export default QuestionCard;
