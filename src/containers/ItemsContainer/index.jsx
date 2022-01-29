import { StyledItemsContainer } from './styles';
import { ItemsCategoryInfo } from '../../components/ItemsCategoryInfo';

export const ItemsContainer = ({ categories }) => {
  return (
    <StyledItemsContainer>
      {categories.map((item) => {
        const { id } = item;
        return <ItemsCategoryInfo key={id} {...item} />;
      })}
    </StyledItemsContainer>
  );
};
