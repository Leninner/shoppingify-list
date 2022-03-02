import { StyledViewMain } from '../styles';
import { TopResume } from '../../components/TopResume';
import { ChartResume } from '../../components/ChartResume';
import { useSelector } from 'react-redux';

export const StadisticsView = () => {
  const { showingModal } = useSelector((state) => state.categoriesReducer);

  return (
    <StyledViewMain center showingModal={!showingModal}>
      <TopResume />
      <ChartResume />
    </StyledViewMain>
  );
};
