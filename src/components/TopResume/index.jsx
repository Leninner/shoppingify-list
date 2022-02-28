import { TopResumeContainer } from './styles';
import { ProgressBar } from '../ProgressBar';
import { useSelector } from 'react-redux';

export const TopResume = () => {
  const { topItems, topCategories } = useSelector((state) => state.ResumeReducer);

  return (
    <TopResumeContainer>
      <div>
        <h1>Top Items</h1>
        {topItems.map((item, index) => (
          <ProgressBar key={index} {...item} color='#F9A109' width={20.75} />
        ))}
      </div>
      <div>
        <h1>Top Categories</h1>
        {topCategories.map((item, index) => (
          <ProgressBar key={index} {...item} color='#56CCF2' width={20.75} />
        ))}
      </div>
    </TopResumeContainer>
  );
};
