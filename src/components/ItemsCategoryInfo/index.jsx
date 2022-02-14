import { StyledItemsCategoryInfo, TitleCategory, CategoryContainer } from './styles';
import { ItemInfo } from '../ItemInfo';

const ItemsCategoryInfo = ({ name, items, SeeInfo, id }) => {
  const handleClick = (item, idItem) => {
    SeeInfo({ item, category: name, idCategory: id, idItem });
  };

  return (
    <StyledItemsCategoryInfo>
      <TitleCategory>{name}</TitleCategory>
      <CategoryContainer>
        {items.map((item) => (
          <ItemInfo key={item.itemName} {...item} onClick={() => handleClick(item, item.id)} />
        ))}
      </CategoryContainer>
    </StyledItemsCategoryInfo>
  );
};

export default ItemsCategoryInfo;
