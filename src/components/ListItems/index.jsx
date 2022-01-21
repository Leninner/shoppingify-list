import CartEmptyIcon from '../../assets/cartEmpty.svg';
import { StyledListItems, Img, FeedBack } from './styles';

export const ListItems = () => {
  return (
    <StyledListItems>
      <FeedBack>No items</FeedBack>
      <Img src={CartEmptyIcon} alt='' />
    </StyledListItems>
  );
};
