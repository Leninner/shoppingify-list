import { StyledInteractiveAside } from './styles';
import { BoxFeedback } from '../../components/BoxFeedback';
import { AddItemButton } from '../../components/AddItemButton';
import { ShoppingList } from '../../components/ShoppingList';
import { AddItemForm } from '../../components/AddItemForm';
import { CardCategoryItemInfo } from '../../components/CardCategoryItemInfo';
import PropTypes from 'prop-types';

const InteractiveAside = ({ isAdding, HandleAddItem, shoppingCart, categories, BackToShoppingList }) => {
  const isItemToShow = categories.find((category) => category.items.find((item) => item.isItemInfo));

  let itemToShow = null;

  if (isItemToShow) {
    itemToShow = isItemToShow.items.find((item) => item.isItemInfo);
  }

  return (
    <StyledInteractiveAside>
      {!isItemToShow ? (
        <>
          {isAdding ? (
            <AddItemForm categories={categories}>
              <AddItemButton isAdding={isAdding} handleAddItem={HandleAddItem} shoppingCart={shoppingCart} />
            </AddItemForm>
          ) : (
            <>
              <BoxFeedback handleAddItem={HandleAddItem} />
              <ShoppingList shoppingCart={shoppingCart} />
              <AddItemButton isAdding={isAdding} handleAddItem={HandleAddItem} shoppingCart={shoppingCart} />
            </>
          )}
        </>
      ) : (
        <CardCategoryItemInfo
          itemToShow={itemToShow}
          isItemToShow={isItemToShow}
          BackToShoppingList={BackToShoppingList}>
          <AddItemButton isItemInfo handleAddItem={HandleAddItem} shoppingCart={shoppingCart} />
        </CardCategoryItemInfo>
      )}
    </StyledInteractiveAside>
  );
};

export default InteractiveAside;

InteractiveAside.propTypes = {
  isAdding: PropTypes.bool,
  isItemInfo: PropTypes.bool,
  HandleAddItem: PropTypes.func.isRequired,
  shoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
