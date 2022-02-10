import { BoxCategory } from './styles';

export const ShoppingListItem = (item) => {
  const { itemName, quantity = 1 } = item;

  return (
    <BoxCategory>
      <h3>{itemName}</h3>
      <button>{quantity} pcs</button>
    </BoxCategory>
  );
};
