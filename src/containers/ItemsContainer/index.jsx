import { StyledItemsContainer } from './styles';
import { ItemsCategoryInfo } from '../../components/ItemsCategoryInfo';

export const ItemsContainer = ({ categories }) => {
  console.log('categories', categories);

  return (
    <StyledItemsContainer>
      {categories.map((item) => {
        const { id } = item;
        return <ItemsCategoryInfo key={id} {...item} />;
      })}
    </StyledItemsContainer>
  );
};
