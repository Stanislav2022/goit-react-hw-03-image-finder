import React from 'react'

export const ImageGalleryItem = ({ items }) => {
  return (
       items.map(({ id, webformatURL, largeImageURL, tags }) => <li key={id}><img src={webformatURL} alt={tags} /></li>)
  )
}

