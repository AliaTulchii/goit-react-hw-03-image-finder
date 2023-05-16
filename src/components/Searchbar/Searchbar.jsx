import {Component} from 'react'
import css from './Searchbar.module.css'
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Searchbar extends Component{
  state = {
    query: '',
  };

  

  handleTextChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter what image you are looking for!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
          });
      return;
  }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };


  render() {
    return (
      <header className={css.Searchbar}>
      <form onSubmit={this.handleSubmit} className={css.SearchForm }>
        <input
          className={css.SearchFormInput}
          type="text"
          
          placeholder="Search images and photos..."
          value={this.state.query}
          onChange={this.handleTextChange}
        />
        <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}> <FaSearch /></span>
        </button>
      </form>
    </header>
      )
  }

  
}