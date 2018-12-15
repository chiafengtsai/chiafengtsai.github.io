import React, { Component } from "react";
import TheHeader from "./components/TheHeader";
import QuestionCard from "./components/QuestionCard";
import MainButton from "./components/MainButton";
import Answer from "./components/Answer";
import AnswerButton from "./components/AnswerButton";
import "./App.css";
import days from "./fixtures/days.json";

class App extends Component {
  state = {
    days,
    showAnswer: false,
    randomNumber: this.getRandomNumber()
  };

  getRandomNumber() {
    return Math.floor(Math.random() * 7);
  }

  toggleAnswer = () => {
    const showAnswer = !this.state.showAnswer;
    this.setState(state => ({ showAnswer }));
  };

  renderAnswer = () => {
    if (!this.state.showAnswer) return "";
    return this.koreanValue();
  };

  updateQuestion = () => {
    this.setState(() => ({
      randomNumber: this.getRandomNumber(),
      showAnswer: false
    }));
  };

  returnValue = () => {
    return this.state.days[this.state.randomNumber];
  };

  vocabularies = () => {
    return {
      english: () => this.returnValue().eng,
      korean: () => this.returnValue().kor
    };
  };

  englishValue = () => {
    return this.returnValue().eng;
  };

  koreanValue = () => {
    return this.returnValue().kor;
  };

  render() {
    return (
      <div className="App">
        <Answer value={this.koreanValue()} showAnswer={this.state.showAnswer} />
        <TheHeader />
        <QuestionCard englishValue={this.englishValue()} />
        <MainButton updateQuestion={() => this.updateQuestion()} />
        <AnswerButton
          toggleAnswer={() => this.toggleAnswer()}
          showAnswer={this.state.showAnswer}
        />
      </div>
    );
  }
}

export default App;
