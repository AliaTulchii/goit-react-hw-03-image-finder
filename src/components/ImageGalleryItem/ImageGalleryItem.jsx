import css from './ImageGalleryItem.module.css'

function ImageGalleryItem({id, url, alt, onClick})  {
    return (
        <li key={id} className={css.ImageGalleryItem}>
            <div>
                <img
                    src={url}
                    alt={alt}
                    onClick={onClick}
                    className={css.ImageGalleryItemImg} />
            </div>
            </li>
    )
}

export default ImageGalleryItem;