import { StyledItemsContainer } from './styles';
import { ItemsCategoryInfo } from '../ItemsCategoryInfo';

export const ItemsContainer = () => {
  return (
    <StyledItemsContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
        return <ItemsCategoryInfo key={item} />;
      })}
    </StyledItemsContainer>
  );
};
