import css from './Modal.module.css'

function Modal () {
    return (
        <div className={css.Overlay}>
            <img
                src=""
                alt=""
                className={css.Modal}
            />
        </div>
    )
}

export default Modal;