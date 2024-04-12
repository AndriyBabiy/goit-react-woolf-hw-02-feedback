import { FeedbackHeading } from 'components/FeedbackHeading/FeedbackHeading';
import { Button, ButtonContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ text, options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackHeading size={'xlarge'} text={text} />
      <ButtonContainer>
        {options.map(elem => (
          <Button key={elem} onClick={() => onLeaveFeedback(elem)}>
            {elem.charAt(0).toUpperCase() + elem.slice(1)}
          </Button>
        ))}
      </ButtonContainer>
    </>
  );
};
