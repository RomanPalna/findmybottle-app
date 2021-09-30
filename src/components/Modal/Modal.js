import { Component } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  render() {
    return createPortal(
      <div className="modal__Backdrop">
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
