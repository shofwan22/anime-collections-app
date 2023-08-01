import { ReactNode } from 'react';
import { cx } from '@emotion/css';

import {
  styModalContainer,
  styModalContent,
  styModalBox,
  styModalWidth,
} from './styles';

interface ModalProps {
  show?: boolean;
  children: ReactNode;
  width?: string;
  title: string;
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const { show, children, width, title, onClose } = props;

  const modalWidth = width || '500px';

  return (
    <>
      {show && (
        <div className={styModalContainer} onClick={onClose}>
          <div
            className={cx(styModalBox, styModalWidth(modalWidth))}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <h2>{title}</h2>
              <i className="fa fa-close icon-close" onClick={onClose}></i>
            </div>
            <div className={styModalContent}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
