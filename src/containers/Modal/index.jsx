import { createPortal } from 'react-dom';
import { ConfirmListPopup } from '../ConfirmListPopup';

export const Modal = () => createPortal(<ConfirmListPopup />, document.getElementById('modal_root'));
