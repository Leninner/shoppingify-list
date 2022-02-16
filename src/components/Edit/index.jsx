import { StyledEditContainer, StyledBoxTrash } from './styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Edit = ({ itemName, idCategory, id: idItem, setEdit, quantity }) => {
  console.log({ itemName, idCategory, idItem });

  const dispatch = useDispatch();

  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleIncrement = () => setNewQuantity(newQuantity + 1);

  const handleDecrement = () => {
    if (newQuantity > 1) {
      setNewQuantity(newQuantity - 1);
    }
  };

  const handleUpdate = () => {
    setEdit(false);

    dispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: {
        newQuantity,
        idCategory,
        idItem,
        itemName,
      },
    });
  };

  return (
    <StyledEditContainer>
      <StyledBoxTrash>
        <span className='material-icons-outlined'>delete</span>
      </StyledBoxTrash>

      <div onClick={handleDecrement}>
        <span className='material-icons-outlined'>remove</span>
      </div>

      <button onClick={handleUpdate}>{newQuantity} pcs</button>

      <div onClick={handleIncrement}>
        <span className='material-icons-outlined'>add</span>
      </div>
    </StyledEditContainer>
  );
};
