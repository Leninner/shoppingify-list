import { StyledViewMain, StyledContainerMain } from '../styles.js';
import { HeaderHistoryView } from '../../components/HeaderHistoryView/index.jsx';
import { HistoryListInfo } from '../../components/HistoryListInfo/index.jsx';
import { useSelector } from 'react-redux';

export const HistoryView = () => {
  const { showingModal } = useSelector((state) => state.categoriesReducer);

  return (
    <StyledViewMain bgColor='#FAFAFE' showingModal={!showingModal}>
      <HeaderHistoryView />
      <StyledContainerMain>
        <HistoryListInfo />
      </StyledContainerMain>
    </StyledViewMain>
  );
};
