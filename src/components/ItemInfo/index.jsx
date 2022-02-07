import { ItemInfoContainer } from './styles';

export const ItemInfo = ({ itemName, onClick }) => {
  return (
    <ItemInfoContainer onClick={onClick}>
      <span>{itemName}</span>
      <span className='material-icons'>add</span>
    </ItemInfoContainer>
  );
};
