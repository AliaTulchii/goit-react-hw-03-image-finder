import { Component } from "react"
import Searchbar from "./Searchbar/Searchbar"
import { getImages } from '../service/image-api.js'
import ImageGallery from './ImageGallery/ImageGallery';
import Button from "./Button/Button";
import Loader from './Loader/Loader'
import Modal from "./Modal/Modal";
import css from './App.module.css'




export default class App extends Component{
  state = {
    query: '',
    page: 1,
    images: [],
    showLoadMore: false,
    isEmpty: false,
    loading: false,
    isShowModal: false,
    largeImage: '',
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({loading: true})
      getImages(query, page)
        .then(({ hits, totalHits }) => {
          if (!hits.length) {
            this.setState({ isEmpty: true })
            return
          }
          this.setState(({ images }) => ({
            images: [...images, ...hits],
            showLoadMore: page < Math.ceil(totalHits / 15),
            largeImage: hits.largeImageUrl,
          }))
        }).finally(() => this.setState({loading: false}));
    } 
  }
  

  handleSubmit = (query) => {
    this.setState({query});
  }

  handleLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }))
  }

  showModal = (url) => {
    this.setState({ largeImage: url })
    
    this.toggleModal();
  }


  render() {
    const { images, showLoadMore, isEmpty, isLoading, largeImage, isShowModal } = this.state;
    return (
      <div className={css.ImageFinder}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} largeImage={largeImage} showModal={this.showModal} />
        {showLoadMore && <Button loadMore={this.handleLoadMore} />}
        {isEmpty  && <h1>Sorry, we didn't find any images... Try again!</h1>}
        {isLoading && <Loader />}
        {isShowModal && <Modal onClose={this.showModal} largeImage={largeImage} />}
      </div> 
    );
  }
  
};
