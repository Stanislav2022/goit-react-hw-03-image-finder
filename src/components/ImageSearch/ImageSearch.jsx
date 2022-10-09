import Searchbar from './Searchbar/Searchbar'
import React, { Component } from 'react'
import ImageGallery from './ImageGallery/ImageGallery'
import api from "../../services/api"


export default class ImageSearch extends Component {
    state = {
        query: '',
        page: 1,
        per_page: 12,
        items: [],
        loading: false,
        error: null,
    }

    render() {
        const { items, loading, error } = this.state; 
    return (
        <div>
            <Searchbar />
            <ImageGallery/>
      </div>
    )
  }
}

