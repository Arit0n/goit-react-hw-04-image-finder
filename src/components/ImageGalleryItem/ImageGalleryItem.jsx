import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

import { Img, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const openModal = () => {
    setVisibleModal(prevState => !prevState);
  };

  return (
    <Item key={image.id}>
      <Img onClick={openModal} src={image.webformatURL} alt={image.tags} />
      {visibleModal && <Modal visible={openModal} gallery={image} />}
    </Item>
  );
};
