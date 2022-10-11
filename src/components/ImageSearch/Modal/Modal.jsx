import React, { Component } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById("modal-root");

export default class Modal extends Component {
  render() {
    return createPortal(
      <div className="overlay">
         <div className="modal">
             <img src="" alt="" />
         </div>
        </div>,
        modalRoot
     )
  }
}
