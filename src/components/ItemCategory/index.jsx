import { BoxCategory } from './styles';

export const ItemCategory = (item) => {
  const { name, quantity } = item;

  return (
    <BoxCategory>
      <h3>{name}</h3>
      <button>{quantity} pcs</button>
    </BoxCategory>
  );
};
