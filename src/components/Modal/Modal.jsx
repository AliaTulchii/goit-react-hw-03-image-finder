import css from './Modal.module.css'

function Modal({ onClose, largeImage }) {
    
    const handleClick=(e)=>{
        if (e.target === e.currentTarget) {
            onClose('');
        }
    }

    return (
        <div className={css.Overlay} onClick={handleClick}>
            <img
                src={largeImage}
                alt=""
                className={css.Modal}
            />
        </div>
    )
}

export default Modal;