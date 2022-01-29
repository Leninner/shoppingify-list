import { ItemInfoContainer } from './styles';

export const ItemInfo = ({ name }) => {
  return (
    <ItemInfoContainer>
      <span>{name}</span>
      <span className='material-icons'>add</span>
    </ItemInfoContainer>
  );
};
