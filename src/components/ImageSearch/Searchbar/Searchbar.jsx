import React, { Component } from "react"
import style from "./searchbar.module.scss"

export default class Searchbar extends Component {
  state = {
    search: " ",

  }

  handleChange = (e) => {
    const { value, name } = e.turget;
    this.setState({
      [name]: value
    });
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const { onSubmit } = this.props;
      onSubmit({ ...this.state });
      this.reset();
    }

  reset() {
      this.setState({ search: "" });
    }
    
  render() {
    const { search } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
    <header className={style.searchbar}>
      <form className={style.searchform} onSubmit={handleSubmit}>
        <button type="submit" className={style.button} onClick={handleSubmit}>
          <span className={style.button__label}>Search</span>
        </button>

          <input className={style.input} name="search" value={search} type="text" autoComplete="off" autoFocus placeholder="Search images and photos" handleChange={handleChange} />
      </form>
    </header>
    )
  }
}

