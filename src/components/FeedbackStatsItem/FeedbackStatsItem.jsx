import { StatElement } from './FeedbackStatsItem.styled';

export const FeedbackStatsItem = ({ heading, value }) => (
  <StatElement>
    {heading}: {value}
  </StatElement>
);
