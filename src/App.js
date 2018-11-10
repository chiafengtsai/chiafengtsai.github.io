import React, { Component } from 'react';
import './App.css';
import days from './fixtures/days.json'

// https://www.youtube.com/watch?v=xa-_FIy2NgE
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days,
      showAnswer: false,
      randomNumber: Math.floor(Math.random() * 7)
    }
  }

  showAnswerHandler() {
    this.setState((state) => ({
      showAnswer: !state.showAnswer
    }));
  }

  updateQuestion() {
    this.setState(() => ({
      randomNumber: Math.floor(Math.random() * 7),
      showAnswer: false,
    }));
  }

  englishValue = () => this.state.days[this.state.randomNumber].eng
  koreanValue = () => this.state.days[this.state.randomNumber].kor
  render() {
    const display = {
      display: this.state.showAnswer ? "block" : "none" // not sure about this one.
    }
    return (
      <div className="App">
      {this.state.randomNumber}
      
        <p>{this.englishValue()}</p>
        <p style={display}>{this.koreanValue()}</p>
        <button onClick={this.showAnswerHandler.bind(this)}>See answer</button>
        <button onClick={this.updateQuestion.bind(this)}>Next question</button>
      </div>
    );
  }
}

export default App;
