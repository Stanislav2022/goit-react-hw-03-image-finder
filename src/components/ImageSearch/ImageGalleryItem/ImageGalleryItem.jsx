import React from 'react'
import css from "./ImageGalleryItem.module.css"
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ items, onClick}) => {
  return (
    items.map(({ id, webformatURL, largeImageURL, tags }) => <li className={css.ImageGalleryItem} key={id} onClick={() => onClick ({largeImageURL, tags})}><img className={css.ImageGalleryItem__image} src={webformatURL} alt={tags} /></li>)
  )
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  };