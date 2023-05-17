import css from './Modal.module.css'
import { Component } from 'react';
import PropTypes from 'prop-types'

class Modal extends Component {
     

    handleBackdrop = e => {
        if (e.target === e.currentTarget) {
          this.props.onClose();
        }
      };
    render() {
        const { largeImage} = this.props.largeImage;
        return (
            <div className={css.Overlay} onClick={this.handleBackdrop}>
            <img
                src={largeImage}
                alt=""
                className={css.Modal}
            />
        </div>
        )
            
        
    }
}

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
  };