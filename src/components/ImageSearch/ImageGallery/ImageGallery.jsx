import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"

const ImageGallery = ({ items }) => {
  return (
    <ul>
      <ImageGalleryItem items={items} />
    </ul>
  )
}

ImageGallery.propTypes = {}

export default ImageGallery
ImageGallery.defaultProps = {
  items: []
}