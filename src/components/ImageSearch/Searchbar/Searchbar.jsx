import React, { Component } from "react"
import styles from "../../../index.css"

export default class Searchbar extends Component {
  state = {
    search: " ",
  }
  render() {
    const { search } = this.state;

    return (
    <header className={styles.searchbar}>
      <form className={styles.form}>
        <button type="submit" className={styles.button}>
          <span className={styles.button__label}>Search</span>
        </button>

        <input className={styles.input} type="text" autocomplete="off" autofocus placeholder="Search images and photos"/>
      </form>
    </header>
    )
  }
}

