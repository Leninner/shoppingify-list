import { StyledAddItemContainer, ButtonConfirm, Div, ButtonCompletingList } from './styles';
import { useSelector, useDispatch } from 'react-redux';

export const AddItemButton = ({
  isAdding,
  handleAddItem,
  isItemInfo,
  idItem,
  DeleteItemFromCategories,
  categoryName,
  idCategory,
  AddToCurrentList,
  itemName,
  AddToHistory,
}) => {
  const { shoppingCartReducer } = useSelector((state) => state);

  const { shoppingCart, isCompleting } = shoppingCartReducer;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    handleAddItem(false);
  };

  const handleDeleteItemFromCategories = () => {
    DeleteItemFromCategories({ idItem, categoryName, idCategory, itemName });
    dispatch({ type: 'SHOW_RESPONSIVE_INTERACTIVE_ASIDE', payload: false });
  };

  const handleAddToCurrentList = () => {
    AddToCurrentList({ idItem, categoryName, idCategory });
    dispatch({ type: 'SHOW_RESPONSIVE_INTERACTIVE_ASIDE', payload: false });
  };

  const isAddedToCurrentList = shoppingCart.some((category) =>
    category.items.some((item) => {
      return item.id === idItem && item.itemName === itemName ? true : false;
    })
  );

  const handleCancelDeleteList = () => {
    dispatch({
      type: 'CANCEL_DELETE_LIST',
    });
  };

  const handleCompleteList = () => {
    AddToHistory(true);
  };

  return (
    <StyledAddItemContainer>
      {!isCompleting ? (
        <>
          {!isItemInfo ? (
            <>
              {isAdding && (
                <Div>
                  <ButtonConfirm isCancel onClick={handleClick} type='button'>
                    Cancel
                  </ButtonConfirm>
                  <ButtonConfirm type='submit'>Save</ButtonConfirm>
                </Div>
              )}
            </>
          ) : (
            <Div>
              <ButtonConfirm isCancel onClick={handleDeleteItemFromCategories}>
                Delete
              </ButtonConfirm>
              {isAddedToCurrentList ? null : (
                <ButtonConfirm onClick={handleAddToCurrentList}>Add to list</ButtonConfirm>
              )}
            </Div>
          )}
        </>
      ) : (
        <Div>
          <ButtonCompletingList isCancelList onClick={handleCancelDeleteList}>
            Cancel
          </ButtonCompletingList>
          <ButtonCompletingList onClick={handleCompleteList}>Complete</ButtonCompletingList>
        </Div>
      )}
    </StyledAddItemContainer>
  );
};
