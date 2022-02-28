import { StyledViewMain, StyledContainerMain } from '../styles.js';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HeaderHistoryListInfo } from '../../components/HeaderHistoryListInfo';
import { ListInfoView } from '../../components/ListInfoView';

export const HistoryListInfoView = () => {
  const { month, idList, listName } = useParams();
  const newMonth = month.split('_').join(' ');
  const newListName = listName.split('_').join(' ');
  const { shoppingifyHistorial } = useSelector((state) => state.historialReducer);
  const { dateCompleted, shoppingList } = shoppingifyHistorial[newMonth].historial[idList - 1];

  return (
    <StyledViewMain>
      <HeaderHistoryListInfo dateCompleted={dateCompleted} newListName={newListName} />
      <StyledContainerMain>
        <ListInfoView shoppingList={shoppingList} />
      </StyledContainerMain>
    </StyledViewMain>
  );
};
