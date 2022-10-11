import React, { Component } from 'react'
import {getImages} from "../../services/api"
import Searchbar from './Searchbar/Searchbar'
import Loader from './Loader/Loader'
import ImageGallery from './ImageGallery/ImageGallery'


export default class ImageSearch extends Component {
    state = {
        search: "",
        page: 1,
        per_page: 12,
        items: [],
        loading: false,
        error: null,
    }

    componentDidUpdate(_, prevState) {
        const { search, page } = this.state;
        if ((search && prevState.search !== search) || page > prevState.page) {
            this.fetchImages(search, page);
        }
    }

    async fetchImages() {
        const { search, page } = this.state;
        this.setState({ loading: true, });
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
            this.setState({ loading: false, });
        }
    }

    onSearch = ({ search }) => {
        this.setState({ search, });
    }

    render() {
        const { items, loading, error, search } = this.state; 
        const { onSearch } = this;
            return (
        <div>
            {loading && <Loader />}
            {error && <p>Будь ласка спробуйте пізніше...</p>}
            <Searchbar onSubmit={onSearch} />
            <ImageGallery items={items} />
      </div>
    )
  }
}

