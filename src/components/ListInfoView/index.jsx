import { Div, TitleCategory, ItemInfoContainer, Quantity, CategoryContainer } from './styles';

export const ListInfoView = ({ shoppingList }) => {
  return (
    <>
      {shoppingList.map((item) => {
        const { name, items, id } = item;
        return (
          <Div key={id}>
            <TitleCategory>{name}</TitleCategory>
            <CategoryContainer>
              {items.map((item) => {
                const { id, itemName, quantity } = item;
                return (
                  <ItemInfoContainer key={id}>
                    <span>{itemName}</span>
                    <Quantity>{quantity} pcs</Quantity>
                  </ItemInfoContainer>
                );
              })}
            </CategoryContainer>
          </Div>
        );
      })}
    </>
  );
};
