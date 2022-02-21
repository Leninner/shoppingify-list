import { StyledViewMain } from '../styles.js';
import { HeaderHistoryView } from '../../components/HeaderHistoryView/index.jsx';
import { useSelector } from 'react-redux';

export const HistoryView = () => {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <StyledViewMain>
      <HeaderHistoryView />
    </StyledViewMain>
  );
};
