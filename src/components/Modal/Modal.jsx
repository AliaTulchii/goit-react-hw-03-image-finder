import css from './Modal.module.css'
import { Component } from 'react';

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
// function Modal({ onClose, largeImage }) {
    
//     const handleClick=(e)=>{
//         if (e.target === e.currentTarget) {
//             onClose('');
//         }
//     }

//     return (
//         <div className={css.Overlay} onClick={handleClick}>
//             <img
//                 src={largeImage}
//                 alt=""
//                 className={css.Modal}
//             />
//         </div>
//     )
// }

// export default Modal;