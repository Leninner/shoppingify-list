import { BoxCategory } from './styles';
import { Edit } from '../Edit';
import { useState } from 'react';

export const ShoppingListItem = (item) => {
  const [edit, setEdit] = useState(false);
  const { itemName, quantity = 1 } = item;

  const handleClick = () => setEdit(true);

  return (
    <BoxCategory>
      <h3>{itemName}</h3>

      {edit ? <Edit {...item} setEdit={setEdit} /> : <button onClick={handleClick}>{quantity} pcs</button>}
    </BoxCategory>
  );
};
