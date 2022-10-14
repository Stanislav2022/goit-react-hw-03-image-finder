import React from 'react'
import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({ items }) => {
  return (
       items.map(({ id, webformatURL, largeImageURL, tags }) => <li className={css.ImageGalleryItem} key={id}><img className={css.ImageGalleryItem__image} src={webformatURL} alt={tags} /></li>)
  )
}

