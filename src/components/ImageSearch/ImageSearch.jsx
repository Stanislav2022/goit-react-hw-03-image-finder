import React, { Component } from 'react'
import {getImages} from "../../services/api"
import Searchbar from './Searchbar/Searchbar'
import Loader from './Loader/Loader'
import ImageGallery from './ImageGallery/ImageGallery'


export default class ImageSearch extends Component {
    state = {
        search: '',
        page: 1,
        per_page: 12,
        items: [],
        loading: false,
        error: null,
    }

    async fetchImages() {
        const { search, page } = this.state;
        this.state({ loading: true, });
        try {
            const data = await getImages(search, page);
            this.setState(({ items }) => {
                return {
                    items: [...items, ...data]
                }
            })
        } catch (error) {
            this.setState({error})
        } finally {
            this.state({ loading: false, });
        }
    }

    onSearch = ({ search }) => {
        this.state({ search, });
    }

    render() {
        const { items, loading, error, search } = this.state; 
        const { onSearch } = this;
    return (
        <div>
            {loading && <Loader/>}
            <Searchbar onSubmit={onSearch} />
            <ImageGallery/>
      </div>
    )
  }
}

