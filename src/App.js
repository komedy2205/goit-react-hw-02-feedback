import React, { Component } from 'react';
import Controls from './Controls';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  };

  render() {
    return (
      <div>
        <Controls
          badIncrement={this.badIncrement}
          goodIncrement={this.goodIncrement}
          neutralIncrement={this.neutralIncrement} />

        <p>Statistics</p>


        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          feedbackPercentage={this.countPositiveFeedbackPercentage()}/>
        
        </div>
    )
  }
}
export default App;
