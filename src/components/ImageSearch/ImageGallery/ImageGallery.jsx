import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"
import PropTypes from 'prop-types';

const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem items={items} onClick={ onClick} />
    </ul>
  )
}

ImageGallery.propTypes = {}

export default ImageGallery
ImageGallery.defaultProps = {
  items: []
}

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};