import { FeedbackStatsItem } from 'components/FeedbackStatsItem/FeedbackStatsItem';
import { FeedbackHeading } from 'components/FeedbackHeading/FeedbackHeading';

export const FeedbackStats = ({ obj, totalFeedback, positivePercentage }) => {
  return (
    <>
      <FeedbackHeading size={'xlarge'} text={'Statistics: '} />
      {totalFeedback(obj) === 0 ? (
        <FeedbackHeading size={'large'} text={'There is no feedback'} />
      ) : (
        Object.keys(obj).map((key, idx) => (
          <FeedbackStatsItem key={key} heading={key} value={obj[key]} />
        ))
      )}
      {totalFeedback(obj) !== 0 && (
        <>
          <FeedbackStatsItem
            key={'total'}
            heading={'total'}
            value={totalFeedback(obj)}
          />
          <FeedbackStatsItem
            key={'positivePercentage'}
            heading={'Positive feedback'}
            value={`${positivePercentage(obj)}%`}
          />
        </>
      )}
    </>
  );
};
