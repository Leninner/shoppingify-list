import { StyledViewMain } from '../styles';
import { TopResume } from '../../components/TopResume';
import { ChartResume } from '../../components/ChartResume';

export const StadisticsView = () => {
  return (
    <StyledViewMain center>
      <TopResume />
      <ChartResume />
    </StyledViewMain>
  );
};
