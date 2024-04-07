import { FeedbackHeading } from 'components/FeedbackHeading/FeedbackHeading';
import { Button, ButtonContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackHeading size={'xlarge'} text={'Please leave feedback:'} />
      <ButtonContainer>
        {options.map((elem, idx) => (
          <Button key={idx} onClick={onLeaveFeedback}>
            {elem.charAt(0).toUpperCase() + elem.slice(1)}
          </Button>
        ))}
      </ButtonContainer>
    </>
  );
};
