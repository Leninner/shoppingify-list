import { StyledItemsCategoryInfo, TitleCategory, CategoryContainer } from './styles';
import { ItemInfo } from '../ItemInfo';

const ItemsCategoryInfo = ({ name, items, SeeInfo }) => {
  const handleClick = (item) => {
    SeeInfo(item);
  };

  return (
    <StyledItemsCategoryInfo>
      <TitleCategory>{name}</TitleCategory>
      <CategoryContainer>
        {items.map((item) => (
          <ItemInfo key={item.id} {...item} onClick={() => handleClick(item)} />
        ))}
      </CategoryContainer>
    </StyledItemsCategoryInfo>
  );
};

export default ItemsCategoryInfo;
