import { StyledItemsCategoryInfo, TitleCategory, CategoryContainer } from './styles';
import { ItemInfo } from '../ItemInfo';

export const ItemsCategoryInfo = ({ name, items }) => {
  return (
    <StyledItemsCategoryInfo>
      <TitleCategory>{name}</TitleCategory>
      <CategoryContainer>
        {items.map((item) => (
          <ItemInfo key={item.id} {...item} />
        ))}
      </CategoryContainer>
    </StyledItemsCategoryInfo>
  );
};
