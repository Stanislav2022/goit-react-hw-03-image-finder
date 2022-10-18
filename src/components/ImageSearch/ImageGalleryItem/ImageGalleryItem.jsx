import React from 'react'
import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({ items, onClick}) => {
  return (
    items.map(({ id, webformatURL, largeImageURL, tags }) => <li className={css.ImageGalleryItem} key={id} onClick={() => onClick ({largeImageURL, tags})}><img className={css.ImageGalleryItem__image} src={webformatURL} alt={tags} /></li>)
  )
}

