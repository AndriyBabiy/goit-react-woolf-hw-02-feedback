import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { FeedbackStats } from 'components/FeedbackStats/FeedbackStats';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    let option = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = obj => {
    return Object.values(obj).reduce((acc, elem) => acc + elem, 0);
  };

  countPositiveFeedbackPercentage = obj => {
    return Math.round((obj.good / this.countTotalFeedback(obj)) * 100);
  };

  render() {
    return (
      <Container>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
        />
        <FeedbackStats
          obj={this.state}
          totalFeedback={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </Container>
    );
  }
}

export default App;
