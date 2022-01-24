import { ItemCategory } from '../ItemCategory';
import { TitleCategory, StyledCategoryContainer } from './styles';

export const Category = (category) => {
  const { name, items } = category;

  return (
    <StyledCategoryContainer>
      <TitleCategory>{name}</TitleCategory>
      {items.map((item) => (
        <ItemCategory key={item.id} {...item} />
      ))}
    </StyledCategoryContainer>
  );
};
