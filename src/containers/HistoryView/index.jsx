import { StyledViewMain, StyledContainerMain } from '../styles.js';
import { HeaderHistoryView } from '../../components/HeaderHistoryView/index.jsx';
import { HistoryListInfo } from '../../components/HistoryListInfo/index.jsx';

export const HistoryView = () => {
  return (
    <StyledViewMain bgColor='#FAFAFE'>
      <HeaderHistoryView />
      <StyledContainerMain>
        <HistoryListInfo />
      </StyledContainerMain>
    </StyledViewMain>
  );
};
