import css from './ImageGalleryItem.module.css'
// import Modal from 'components/Modal/Modal';

function ImageGalleryItem({id, url, alt, openModal})  {
    return (
        <li key={id} className={css.ImageGalleryItem}>
            <div>
                <img
                    src={url}
                    alt={alt}
                    onClick={openModal}
                    className={css.ImageGalleryItemImg} />
            </div>
            </li>
    )
}

export default ImageGalleryItem;