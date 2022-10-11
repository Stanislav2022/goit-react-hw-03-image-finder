import React, { Component } from "react"
import styles from "../../../index.css"

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
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button} onClick={handleSubmit}>
          <span className={styles.button__label}>Search</span>
        </button>

          <input className={styles.input} name="search" value={search} type="text" autocomplete="off" autofocus placeholder="Search images and photos" handleChange={handleChange} />
      </form>
    </header>
    )
  }
}

