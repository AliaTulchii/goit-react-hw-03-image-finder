// import { Component } from 'react';
import css from './ImageGallery.module.css'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Modal from 'components/Modal/Modal';



// export default class ImageGallery extends Component{
    
    

//     render() {
//         const { showModal } = this.props.showModal;
//         const { images } = this.state;
//         return (
//             <div>
//                 <ul className={css.ImageGallery}>
//                 {images.map(({ id, webformatURL, tags, largeImageURL }) => (
//                     <ImageGalleryItem
//                         key={id}
//                         url={webformatURL}
//                         alt={tags}
//                         largeImage={largeImageURL}
//                         showModal={showModal}
//                     />
//                 ))}
//             </ul>
        
//             </div>
            
//      )
//  }
// }

function ImageGallery({images, showModal}) {
    return (
        <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
                key={id}
                url={webformatURL}
                alt={tags}
                largeImage={largeImageURL}
                showModal={showModal}
            />
        
        ))}
      </ul>
    )
}

export default ImageGallery;