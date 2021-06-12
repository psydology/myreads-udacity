import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types' ;


class Search extends Component{
    state = {
        query : ""
      }
      updateQuery = (query) => {
        this.setState ( () => ({
          query : query
        }))
      }
      clearQuery = () => {
        this.updateQuery('')
      }
    render() {
        const {query} = this.state;
        const {books , ChangeBShelf } = this.props;
        const showBooks = query === '' ? books : books.filter( (book) => (
            book.title.toLowerCase().includes(query.toLowerCase()) || book.authors[0].toLowerCase().includes(query.toLowerCase())
          ))
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
              
                <input 
                    type="text" 
                    value = {query}
                    onChange = { (event) => this.updateQuery(event.target.value)} 
                    placeholder="Search by title or author"
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {showBooks.map( book => (
                        <li key = {book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select value = {book.shelf}  onChange={(event) => ChangeBShelf (book , event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                      
              </ol>
            </div>
          </div>
        )
    }
}

Search.propTypes = {
  books : PropTypes.array.isRequired,
  ChangeBShelf : PropTypes.func.isRequired,
}
export default Search;