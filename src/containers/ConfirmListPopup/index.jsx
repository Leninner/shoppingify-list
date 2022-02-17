import { ConfirmListPopupWrapper, ConfirmListContainer, FeddbackButton } from './styles';

export const ConfirmListPopup = () => {
  return (
    <ConfirmListPopupWrapper>
      <ConfirmListContainer>
        <h3>Are you sure that you want to cancel this list?</h3>
        <div>
          <FeddbackButton isCancel>Cancel</FeddbackButton>
          <FeddbackButton>Yes</FeddbackButton>
        </div>
        <span className='material-icons-outlined'>close</span>
      </ConfirmListContainer>
    </ConfirmListPopupWrapper>
  );
};
