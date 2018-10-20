import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import days from './fixtures/days.json'


class App extends Component {
  constructor() {
		super();
		this.state = {
      showAnswer: false,
      randomNumber: 'test'
		};
  }
  toggle() {
		this.setState({
			showAnswer: !this.state.showAnswer
		});
  }
  change() {

  }
  render() {
    var display = {
			display: this.state.showAnswer ? "block" : "none"
    }
    function randomNumberGenerator () {
      return Math.floor(Math.random() * 7)
    }
    const randomNumber = randomNumberGenerator ();
    function showEnglish (arr) {
      return arr[randomNumber].eng;
    }
    function showKorean (arr) {
      return arr[randomNumber].kor;
    }
    
    return (
      <div className="App">
        <h1 className="App-title">{showEnglish (days)}</h1>
        <h3 className="App-sub-title" style={ display }>{showKorean (days)}</h3>
        <button onClick={this.toggle.bind(this)}>Toggle</button>
      </div>
    );
  }
}

export default App;
