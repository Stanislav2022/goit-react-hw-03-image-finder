import Searchbar from './Searchbar/Searchbar'
import React, { Component } from 'react'
import ImageGallery from './ImageGallery/ImageGallery'


export default class ImageSearch extends Component {
    state = {
        page: 1,
        per_page: 12,
        id: " ",
        webformatURL: " ",
        largeImageURL: " ",
    }

  render() {
    return (
        <div>
            <Searchbar />
            <ImageGallery/>
      </div>
    )
  }
}

