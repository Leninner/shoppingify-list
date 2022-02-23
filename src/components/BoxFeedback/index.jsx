import { StyledBoxFeedback, Botella, Info, Button, Description } from './styles';
import botella from '../../assets/source.svg';

export const BoxFeedback = ({ handleAddItem }) => {
  const handleClick = () => {
    handleAddItem(true);
  };

  return (
    <StyledBoxFeedback>
      <Botella src={botella} alt='botella' />
      <Info>
        <Description>Didn’t find what you need?</Description>
        <Button onClick={handleClick}>Add Item</Button>
      </Info>
    </StyledBoxFeedback>
  );
};
