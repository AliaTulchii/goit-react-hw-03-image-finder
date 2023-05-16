import css from './ImageGallery.module.css'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({images, openModal}) {
    return (       <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
                id={id}
                url={webformatURL}
                alt={tags}
                onClick={openModal(largeImageURL)}
            />
        //   <li key={id}>
        //     <div>
        //       <img src={webformatURL} alt={tags} />
        //     </div>
        //     </li>
        ))}
      </ul>
    )
}

export default ImageGallery;