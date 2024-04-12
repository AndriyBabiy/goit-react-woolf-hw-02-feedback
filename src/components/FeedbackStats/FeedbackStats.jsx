import { FeedbackStatsItem } from 'components/FeedbackStatsItem/FeedbackStatsItem';
import { FeedbackHeading } from 'components/FeedbackHeading/FeedbackHeading';

export const FeedbackStats = ({
  text,
  obj,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <>
      <FeedbackHeading size={'xlarge'} text={text} />

      {Object.keys(obj).map(key => (
        <FeedbackStatsItem key={key} heading={key} value={obj[key]} />
      ))}

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
  );
};
