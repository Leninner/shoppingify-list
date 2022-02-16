import { ShoppingListItem } from '../ShoppingListItem';
import { TitleCategory, StyledCategoryContainer } from './styles';

export const ShoppingListCategory = ({ name, items, id }) => {
  return (
    <StyledCategoryContainer>
      <TitleCategory>{name}</TitleCategory>
      {items.map((item) => (
        <ShoppingListItem key={item.itemName} {...item} idCategory={id} />
      ))}
    </StyledCategoryContainer>
  );
};
