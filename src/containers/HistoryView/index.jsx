import { StyledViewMain, StyledContainerMain } from '../styles.js';
import { HeaderHistoryView } from '../../components/HeaderHistoryView/index.jsx';
import { useSelector } from 'react-redux';
import { HistoryListInfo } from '../../components/HistoryListInfo/index.jsx';

export const HistoryView = () => {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <StyledViewMain bgColor='#FAFAFE'>
      <HeaderHistoryView />
      <StyledContainerMain>
        <HistoryListInfo />
      </StyledContainerMain>
    </StyledViewMain>
  );
};
