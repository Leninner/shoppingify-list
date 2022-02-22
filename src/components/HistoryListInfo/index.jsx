import { StyledItemsCategoryInfo, TitleCategory, CategoryContainer } from './styles';
import { ListInfo } from '../ListInfo';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

export const HistoryListInfo = () => {
  const { shoppingifyHistorial } = useSelector((state) => state.historialReducer);

  return (
    <StyledItemsCategoryInfo>
      {Object.entries(shoppingifyHistorial).map((month) => {
        const [date, dateHistorial] = month;
        const { id: idMonth, historial } = dateHistorial;

        return (
          <Fragment key={idMonth}>
            <TitleCategory>{date}</TitleCategory>
            <CategoryContainer>
              {historial.map((list) => {
                return <ListInfo key={list.id} {...list} month={month} />;
              })}
            </CategoryContainer>
          </Fragment>
        );
      })}
    </StyledItemsCategoryInfo>
  );
};
