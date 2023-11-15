import { ModalBox, StyledModal } from './Modal.styled';

export const Modal = ({ visible, gallery }) => {
  return (
    <ModalBox onClick={visible}>
      <StyledModal>
        <img src={gallery.largeImageURL} alt={gallery.tags} />
      </StyledModal>
    </ModalBox>
  );
};
