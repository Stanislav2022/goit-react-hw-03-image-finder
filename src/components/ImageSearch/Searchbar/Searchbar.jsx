import React, { Component } from "react"


export default class Searchbar extends Component {
  state = {
    search: " ",
  }
  render() {
    const { search } = this.state;

    return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" class="button">
          <span className="button-label">Search</span>
        </button>

        <input className="input" type="text" autocomplete="off" autofocus placeholder="Search images and photos"/>
      </form>
    </header>
    )
  }
}

