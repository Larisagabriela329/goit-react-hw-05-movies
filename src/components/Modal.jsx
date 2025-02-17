import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl, onClose } = this.props;
    return (
      <div className="overlay" onClick={onClose}>
        <div className="modal">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
