import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"

const ImageGallery = ({ items }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem items={items} />
    </ul>
  )
}

ImageGallery.propTypes = {}

export default ImageGallery
ImageGallery.defaultProps = {
  items: []
}