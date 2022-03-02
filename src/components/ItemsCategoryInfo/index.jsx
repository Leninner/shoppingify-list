import { StyledItemsCategoryInfo, TitleCategory, CategoryContainer } from './styles';
import { ItemInfo } from '../ItemInfo';
import { useDispatch } from 'react-redux';

const ItemsCategoryInfo = ({ name, items, SeeInfo, id }) => {
  const dispatch = useDispatch();

  const handleClick = (item, idItem) => {
    SeeInfo({ item, category: name, idCategory: id, idItem });
    dispatch({ type: 'SHOW_RESPONSIVE_INTERACTIVE_ASIDE', payload: true });
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
