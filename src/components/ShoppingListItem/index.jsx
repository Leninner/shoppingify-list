import { BoxCategory } from './styles';
import { EditQuantity } from '../EditQuantity';
import { useState } from 'react';

export const ShoppingListItem = (item) => {
  const [edit, setEdit] = useState(false);
  const { itemName, quantity = 1 } = item;

  const handleClick = () => setEdit(true);

  return (
    <BoxCategory>
      <h3>{itemName}</h3>

      {edit ? <EditQuantity {...item} setEdit={setEdit} /> : <button onClick={handleClick}>{quantity} pcs</button>}
    </BoxCategory>
  );
};
