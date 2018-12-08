import React, { Component } from "react";
import TheHeader from "./components/TheHeader";
import QuestionCard from "./components/QuestionCard";
import MainButton from "./components/MainButton";
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

  showAnswer = () => {
    this.setState(state => ({
      showAnswer: !state.showAnswer
    }));
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
        <TheHeader />
        <QuestionCard englishValue={this.englishValue()} />
        <p>{this.renderAnswer()}</p>
        <MainButton updateQuestion={() => this.updateQuestion()} />
      </div>
    );
  }
}

export default App;
