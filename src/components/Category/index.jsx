import { ItemCategory } from '../ItemCategory';
import { TitleCategory, StyledCategoryContainer } from './styles';

export const Category = () => {
  return (
    <StyledCategoryContainer>
      <TitleCategory>Fruit and Vegetables</TitleCategory>
      {[1, 2].map((item) => (
        <ItemCategory key={item} />
      ))}
    </StyledCategoryContainer>
  );
};
