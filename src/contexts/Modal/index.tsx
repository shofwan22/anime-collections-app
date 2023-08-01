import { PropsWithChildren, createContext, useContext, useState } from 'react';

import ModalComponent from '../../components/Base/Modal';

import { ModalParams, ModalValue } from './types';

const Modal = createContext<ModalValue>({
  modal: false,
  showModal: () => {},
  closeModal: () => {},
});

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [width, setWidth] = useState('500px');
  const [content, setContent] = useState<ModalParams['content']>(null);

  const showModal = (params: ModalParams) => {
    const { title, width, content } = params;

    setTitle(title);
    setWidth(width);
    setContent(content);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Modal.Provider value={{ modal, showModal, closeModal }}>
      {children}
      <ModalComponent
        show={modal}
        title={title}
        width={width}
        onClose={closeModal}
      >
        {content}
      </ModalComponent>
    </Modal.Provider>
  );
};

const useModal = () => {
  const context = useContext(Modal);
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

export { ModalProvider, useModal };
