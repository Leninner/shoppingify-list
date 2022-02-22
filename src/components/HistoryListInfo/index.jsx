import { StyledItemsCategoryInfo, TitleCategory, CategoryContainer } from './styles';
import { ListInfo } from '../ListInfo';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

export const HistoryListInfo = () => {
  const { shoppingifyHistorial } = useSelector((state) => state.historialReducer);

  console.log(shoppingifyHistorial);

  return (
    <StyledItemsCategoryInfo>
      {Object.entries(shoppingifyHistorial).map(([date, dateHistorial]) => {
        const { id, historial } = dateHistorial;

        return (
          <Fragment key={id}>
            <TitleCategory>{date}</TitleCategory>
            <CategoryContainer>
              {historial.map((item) => {
                return <ListInfo key={item.id} {...item} />;
              })}
            </CategoryContainer>
          </Fragment>
        );
      })}
    </StyledItemsCategoryInfo>
  );
};
