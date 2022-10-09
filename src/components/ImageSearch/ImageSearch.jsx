import Searchbar from './Searchbar/Searchbar'
import React, { Component } from 'react'
import ImageGallery from './ImageGallery/ImageGallery'
import api from "../../services/api"
import Loader from './Loader/Loader'


export default class ImageSearch extends Component {
    state = {
        search: '',
        page: 1,
        per_page: 12,
        items: [],
        loading: false,
        error: null,
    }

    render() {
        const { items, loading, error, search } = this.state; 
    return (
        <div>
            {loading && <Loader/>}
            <Searchbar />
            <ImageGallery/>
      </div>
    )
  }
}

