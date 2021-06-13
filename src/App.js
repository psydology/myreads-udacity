import React from 'react'
import { Route } from 'react-router-dom'
import Search from './components/search';
import Header from './components/header';
import Shelves from './components/shelves';
import SearchBtn from './components/searchbtn';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchBooks: [],
      error: false
    }
  }



  componentDidMount() {
    BooksAPI.getAll().then(book => this.setState({
      books: book
    }))
  }
  // this way when we refresh the page the data changed
  ////////////////////////////////////////////////////
  //  ChangeBShelf = (book , shelf) => {
  //    this.setState({
  //      books : this.state.books.filter(b => (
  //        b.id === book.id ? b.shelf = shelf : b
  //        ))
  //       }); 
  //   }
  /// this way the data didn't change after refresh
  //////////////////////////////////////////////////
  ChangeBShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      BooksAPI.getAll().then(book => this.setState({
        books: book
      }))
    )
  }
  ////////////////////////search using API 
  searchForBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          return this.setState({ searchBooks: [] });
        } else {
          return this.setState({ searchBooks: books });
        }
      });
    } else {
      return this.setState({ searchBooks: [] });
    }
  };
  //when we back make search array empty
  /////////////////////////////////////////
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {

    return (
      <div className="app">

        <Route path='/search' render={() => (
          <Search

            books={this.state.searchBooks}
            ChangeBShelf={this.ChangeBShelf}
            updateQuery={this.updateQuery}
            onSearch={this.searchForBooks}
            onResetSearch={this.resetSearch}
            mainBook={this.state.books}

          />
        )} />
        <Route exact path='/' component={Header} />

        <Route exact path='/' render={() => (
          <Shelves
            books={this.state.books}
            ChangeBShelf={this.ChangeBShelf}
          />
        )} />
        <Route exact path='/' component={SearchBtn} />


      </div>
    )
  }
}

export default BooksApp
