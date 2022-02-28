import { ProgressBarContainer, Progress, ResumeItem, ResumeItemInfo } from './styles';

export const ProgressBar = ({ width, percent = 0.5, color, name = 'Uva' }) => {
  let progress = percent * width;

  return (
    <ResumeItem>
      <ResumeItemInfo>
        <span>{name}</span>
        <span>{(percent * 100).toFixed(1)}%</span>
      </ResumeItemInfo>
      <ProgressBarContainer width={width}>
        <Progress width={progress} color={color} />
      </ProgressBarContainer>
    </ResumeItem>
  );
};
