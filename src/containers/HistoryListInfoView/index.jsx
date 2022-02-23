import { StyledViewMain, StyledContainerMain } from '../styles.js';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HeaderHistoryListInfoView } from '../../components/HeaderHistoryListInfoView';

export const HistoryListInfoView = () => {
  const { month, idList, listName } = useParams();

  const newMonth = month.split('_').join(' ');
  const newListName = listName.split('_').join(' ');

  console.log({ newMonth, idList, newListName });
  const { shoppingifyHistorial } = useSelector((state) => state.historialReducer);

  console.log({ data: shoppingifyHistorial[newMonth].historial[idList - 1] });

  const { dateCompleted } = shoppingifyHistorial[newMonth].historial[idList - 1];

  return (
    <StyledViewMain>
      <HeaderHistoryListInfoView dateCompleted={dateCompleted} newListName={newListName} />
      <StyledContainerMain></StyledContainerMain>
    </StyledViewMain>
  );
};
