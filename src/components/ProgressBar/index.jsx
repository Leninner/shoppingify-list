import { ProgressBarContainer, Progress, ResumeItem, ResumeItemInfo } from './styles';

export const ProgressBar = ({ width, percent, color }) => {
  let progress = percent * width;

  return (
    <ResumeItem>
      <ResumeItemInfo>
        <span>Fruits</span>
        <span>50%</span>
      </ResumeItemInfo>
      <ProgressBarContainer width={width}>
        <Progress width={progress} color={color} />
      </ProgressBarContainer>
    </ResumeItem>
  );
};
