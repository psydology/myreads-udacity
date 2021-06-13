import React , {Component} from 'react'
import PropTypes from 'prop-types' ;
import Shelf from './shelf'

class Shelves extends Component {
  state = {
    title : ['Currently Reading' , 'Want To Read' , 'Read' , 'None']
  }
  

    render() {
      const {books , ChangeBShelf} = this.props;
      console.log (ChangeBShelf)
      //console.log (books)
      const CurRead = books.filter ( book => 
        book.shelf === 'currentlyReading'
      );
      //console.log (CurRead)
      const WantRead = books.filter ( book => 
        book.shelf === 'wantToRead'
      );
      const Read = books.filter ( book => 
        book.shelf === 'read'
      );

        return (
          <div className="list-books">
            <div className="list-books-content">
              <Shelf CatBook = {CurRead} title = {this.state.title[0]} ChangeBShelf={this.props.ChangeBShelf}/>
              <Shelf CatBook = {WantRead} title = {this.state.title[1]} ChangeBShelf={this.props.ChangeBShelf}/>
              <Shelf CatBook = {Read} title = {this.state.title[2]}     ChangeBShelf={this.props.ChangeBShelf}/>
            </div>
          </div>
        )
    }
}

Shelves.propTypes = {
  books : PropTypes.array.isRequired,
  ChangeBShelf : PropTypes.func.isRequired,
}
export default Shelves;