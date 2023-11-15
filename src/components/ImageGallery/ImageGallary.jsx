import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { List } from './ImageGallary.styled';

export const ImageGallery = ({ gallery, openModal }) => {
  return (
    <List>
      {gallery.map(item => {
        return <ImageGalleryItem image={item} openModal={openModal} />;
      })}
    </List>
  );
};
