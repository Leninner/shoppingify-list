import { TopResumeContainer } from './styles';
import { ProgressBar } from '../ProgressBar';

export const TopResume = () => {
  return (
    <TopResumeContainer>
      <div>
        <h1>Top Items</h1>
        <ProgressBar width={20.75} percent={0.5} color='#F9A109' />
        <ProgressBar width={20.75} percent={0.5} color='#F9A109' />
        <ProgressBar width={20.75} percent={0.5} color='#F9A109' />
      </div>
      <div>
        <h1>Top Categories</h1>
        <ProgressBar width={20.75} percent={0.5} color='#56CCF2' />
        <ProgressBar width={20.75} percent={0.5} color='#56CCF2' />
        <ProgressBar width={20.75} percent={0.5} color='#56CCF2' />
      </div>
    </TopResumeContainer>
  );
};
