import { StyledItemsCategoryInfo, TitleCategory, CategoryContainer } from './styles';
import { ItemInfo } from '../ItemInfo';

export const ItemsCategoryInfo = () => {
  return (
    <StyledItemsCategoryInfo>
      <TitleCategory>Fruits and Vegatables</TitleCategory>
      <CategoryContainer>
        {[1, 2, 3, 4, 5, 6, 10].map((item) => (
          <ItemInfo key={item} />
        ))}
      </CategoryContainer>
    </StyledItemsCategoryInfo>
  );
};
