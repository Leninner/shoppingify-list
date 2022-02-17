import { ConfirmListPopupWrapper, ConfirmListContainer, FeddbackButton } from './styles';
import { useDispatch } from 'react-redux';

export const ConfirmListPopup = () => {
  const dispatch = useDispatch();

  const handleCancelDeleteList = (e) => {
    if (e.target === e.currentTarget) {
      dispatch({
        type: 'CANCEL_DELETE_LIST',
      });
    }
  };

  const handleDeleteList = () => {
    dispatch({
      type: 'DELETE_LIST',
    });
  };

  return (
    <ConfirmListPopupWrapper onClick={handleCancelDeleteList}>
      <ConfirmListContainer>
        <h3>Are you sure that you want to cancel this list?</h3>
        <div>
          <FeddbackButton isCancel onClick={handleCancelDeleteList}>
            Cancel
          </FeddbackButton>
          <FeddbackButton onClick={handleDeleteList}>Yes</FeddbackButton>
        </div>
        <span className='material-icons-outlined' onClick={handleCancelDeleteList}>
          close
        </span>
      </ConfirmListContainer>
    </ConfirmListPopupWrapper>
  );
};
