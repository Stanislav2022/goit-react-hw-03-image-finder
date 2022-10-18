import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"

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