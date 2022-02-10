import { ShoppingListItem } from '../ShoppingListItem';
import { TitleCategory, StyledCategoryContainer } from './styles';

export const ShoppingListCategory = (category) => {
  const { name, items } = category;

  return (
    <StyledCategoryContainer>
      <TitleCategory>{name}</TitleCategory>
      {items.map((item) => (
        <ShoppingListItem key={item.id} {...item} />
      ))}
    </StyledCategoryContainer>
  );
};
