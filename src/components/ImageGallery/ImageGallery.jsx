import { Component } from 'react';
import css from './ImageGallery.module.css'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';



export default class ImageGallery extends Component{
    state = {
        
        images: [],
        largeImage: '',
    }
    

    showModal = (url) => {
        this.setState({largeImage: url})
      }

    render() {
        const { images, largeImage } = this.state;
        return (
            <div>
                <ul className={css.ImageGallery}>
                {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                    <ImageGalleryItem
                        id={id}
                        url={webformatURL}
                        alt={tags}
                        bigImg={largeImageURL}
                        openModal={() => this.showModal(largeImageURL)}
                    />
                ))}
            </ul>
        {largeImage && <Modal onClose={this.showModal} largeImage={largeImage} />}
            </div>
            
     )
 }
}

// function ImageGallery({images, openModal}) {
//     return (
//         <ul className={css.ImageGallery}>
//         {images.map(({ id, webformatURL, tags, largeImageURL }) => (
//             <ImageGalleryItem
//                 id={id}
//                 url={webformatURL}
//                 alt={tags}
//                 bigImg={largeImageURL}
                
//             />
        
//         ))}
//       </ul>
//     )
// }

// export default ImageGallery;