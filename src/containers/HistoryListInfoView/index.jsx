import { StyledViewMain, StyledContainerMain } from '../styles.js';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const HistoryListInfoView = () => {
  const { month, idList, listName } = useParams();

  console.log({ month, idList, listName });
  const { shoppingifyHistorial } = useSelector((state) => state.historialReducer);

  console.log({ data: shoppingifyHistorial[month].historial[idList - 1] });

  return (
    <StyledViewMain>
      <StyledContainerMain>{listName}</StyledContainerMain>
    </StyledViewMain>
  );
};
