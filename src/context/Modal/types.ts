export interface ModalParams {
  title: string;
  width: string;
  content: JSX.Element | null;
}

export interface ModalValue {
  modal: boolean;
  showModal: (params: ModalParams) => void;
  closeModal: () => void;
}
