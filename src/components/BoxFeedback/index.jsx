import { StyledBoxFeedback, Botella, Info, Button, Description } from './styles';
import botella from '../../assets/source.svg';

export const BoxFeedback = () => {
  return (
    <StyledBoxFeedback>
      <Botella src={botella} alt='botella' />
      <Info>
        <Description>Didn’t find what you need?</Description>
        <Button>Add Item</Button>
      </Info>
    </StyledBoxFeedback>
  );
};
