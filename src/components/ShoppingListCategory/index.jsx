import { ShoppingListItem } from '../ShoppingListItem';
import { ShoppingListItemToEdit } from '../ShoppingListItemToEdit';
import { TitleCategory, StyledCategoryContainer } from './styles';

export const ShoppingListCategory = ({ name, items, id }) => {
  return (
    <StyledCategoryContainer>
      <TitleCategory>{name}</TitleCategory>
      {items.map((item) =>
        false ? <ShoppingListItem key={item.itemName} {...item} idCategory={id} /> : <ShoppingListItemToEdit />
      )}
    </StyledCategoryContainer>
  );
};
