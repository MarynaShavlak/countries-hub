import { FC } from 'react';
import Modal from 'react-modal';
import { ImageModalProps } from './ImageModal.types';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(5px)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'transparent',
    border: 'none',
  },
};

export const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  imageSrc,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="Large size of image"
      onRequestClose={closeModal}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      ariaHideApp={false}
    >
      <img src={imageSrc} alt="Coat of arms" />
    </Modal>
  );
};
