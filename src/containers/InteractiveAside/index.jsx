import { StyledInteractiveAside } from './styles';
import { BoxFeedback } from '../../components/BoxFeedback';
import { AddItemButton } from '../../components/AddItemButton';
import { ShoppingList } from '../../components/ShoppingList';
import { AddItemForm } from '../../components/AddItemForm';
import { CardCategoryItemInfo } from '../../components/CardCategoryItemInfo';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const InteractiveAside = ({
  isAdding,
  HandleAddItem,
  shoppingCart,
  categories,
  BackToShoppingList,
  DeleteItemFromCategories,
  AddToCurrentList,
  AddToHistory,
}) => {
  const isItemToShow = categories.find((category) => category.items.find((item) => item.isItemInfo));
  const { showingModal } = useSelector((state) => state.categoriesReducer);

  let itemToShow = null;

  if (isItemToShow) {
    itemToShow = isItemToShow.items.find((item) => item.isItemInfo);
  }

  return (
    <StyledInteractiveAside showingModal={showingModal}>
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
              <AddItemButton
                isAdding={isAdding}
                handleAddItem={HandleAddItem}
                shoppingCart={shoppingCart}
                AddToHistory={AddToHistory}
              />
            </>
          )}
        </>
      ) : (
        <CardCategoryItemInfo
          itemToShow={itemToShow}
          isItemToShow={isItemToShow}
          BackToShoppingList={BackToShoppingList}>
          <AddItemButton
            isItemInfo
            itemToShow={itemToShow}
            handleAddItem={HandleAddItem}
            shoppingCart={shoppingCart}
            DeleteItemFromCategories={DeleteItemFromCategories}
            AddToCurrentList={AddToCurrentList}
            categories={categories}
          />
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
