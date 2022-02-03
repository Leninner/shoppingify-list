import { ItemInfoContainer } from './styles';

export const ItemInfo = ({ itemName }) => {
  return (
    <ItemInfoContainer>
      <span>{itemName}</span>
      <span className='material-icons'>add</span>
    </ItemInfoContainer>
  );
};
