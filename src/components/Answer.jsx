import React, { Component } from "react";

class Answer extends Component {
  render() {
    let classes = "answer-wrap ";
    if (this.props.showAnswer) classes += "answer-wrap--show";
    return (
      <div className={classes}>
        <main className="answer-main">
          <section>
            <span className="answer-main__secondary">answer:</span>
            <p className="answer-main__primary">{this.props.value}</p>
          </section>
        </main>
      </div>
    );
  }
}

export default Answer;
