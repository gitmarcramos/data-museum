export type ModalProps = {
    className?: string;
  } & ModalData &
    CloseBtnProps;
  
  export type CloseBtnProps = {
    onClose?: () => void;
  };
  
  export type ModalData = {
    title: string;
    image: string;
    description: string;
    id: string;
  };