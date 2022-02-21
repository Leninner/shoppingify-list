import { StyledItemsCategoryInfo, TitleCategory, CategoryContainer } from './styles';
import { ListInfo } from '../ListInfo';
import { useSelector } from 'react-redux';
import React from 'react';

export const HistoryListInfo = () => {
  const { historial } = useSelector((state) => state.historialReducer);

  console.log(historial);

  return (
    <StyledItemsCategoryInfo>
      {historial.map((item) => {
        console.log(item);
        const { shoppingListName, id, shoppingList } = item;
        return (
          <React.Fragment key={id}>
            <TitleCategory>{shoppingListName}</TitleCategory>
            <CategoryContainer>
              {shoppingList.map((itemFromList) => (
                <ListInfo key={itemFromList.id} {...itemFromList} {...item} />
              ))}
            </CategoryContainer>
          </React.Fragment>
        );
      })}
    </StyledItemsCategoryInfo>
  );
};
