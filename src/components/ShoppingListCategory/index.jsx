import { ShoppingListItem } from '../ShoppingListItem';
import { ShoppingListItemToEdit } from '../ShoppingListItemToEdit';
import { TitleCategory, StyledCategoryContainer } from './styles';

export const ShoppingListCategory = ({ name, items, id, isCompleting }) => {
  return (
    <StyledCategoryContainer>
      <TitleCategory>{name}</TitleCategory>
      {items.map((item) => {
        const { itemName } = item;

        return !isCompleting ? (
          <ShoppingListItem key={itemName} {...item} idCategory={id} />
        ) : (
          <ShoppingListItemToEdit key={itemName} {...item} idCategory={id} />
        );
      })}
    </StyledCategoryContainer>
  );
};
