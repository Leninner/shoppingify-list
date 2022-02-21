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
        const { id, dateCompleted } = item;
        const month = dateCompleted.split(' ')[1];
        const year = dateCompleted.split(' ')[3];

        return (
          <React.Fragment key={id}>
            <TitleCategory>
              {month} {year}
            </TitleCategory>
            <CategoryContainer>
              <ListInfo {...item} />
            </CategoryContainer>
          </React.Fragment>
        );
      })}
    </StyledItemsCategoryInfo>
  );
};
