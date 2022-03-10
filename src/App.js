import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  goodIncrement = () => {
    this.setState(goodPrevState => ({
      good: goodPrevState.good + 1,
    }));
  }

  neutralIncrement = () => {
    this.setState(neutralPrevState => ({
      neutral: neutralPrevState.neutral + 1,
    }));
  }

  badIncrement = () => {
    this.setState(badPrevState => ({
      bad: badPrevState.bad + 1,
    }));
  }

  countTotalFeedback() {
    let totalFeedback = this.state.good + this.state.neutral + this.state.bad

    return totalFeedback
  };

  countPositiveFeedbackPercentage() {
    let positivePercentage = [this.goodIncrement * 100 / this.countTotalFeedback]

    return positivePercentage
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
          <button type='button' onClick={this.goodIncrement}>good</button>
          <button type='button' onClick={this.neutralIncrement}>neutral</button>
          <button type='button' onClick={this.badIncrement}>bad</button>
        
        <p>Statistics</p>
        
        <span>Good: {this.state.good}</span> <br />
        <span>Neutral: {this.state.neutral}</span> <br/>
        <span>Bad: {this.state.bad}</span> <br/>
        <span>Total: {this.countTotalFeedback() }</span> <br />
        
        <span>Positive feedback: {this.countPositiveFeedbackPercentage}%</span>
        </div>
      )
    }
  }

export default App;
