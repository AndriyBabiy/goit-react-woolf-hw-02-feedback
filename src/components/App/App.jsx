import { FeedbackHeading } from 'components/FeedbackHeading/FeedbackHeading';
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

  handleClick = option => {
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
          text="Please leave feedback:"
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
        />
        {this.countTotalFeedback(this.state) > 0 ? (
          <FeedbackStats
            text="Statistics:"
            obj={this.state}
            totalFeedback={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <FeedbackHeading size={'large'} text={'There is no feedback'} />
        )}
      </Container>
    );
  }
}

export default App;
