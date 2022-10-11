
const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => <li key={id}><img src={webformatURL} alt={tags} /></li>
  )

  return (
    <ul>{elements}</ul>
  )
}

ImageGallery.propTypes = {}

export default ImageGallery
ImageGallery.defaultProps = {
  items: []
}