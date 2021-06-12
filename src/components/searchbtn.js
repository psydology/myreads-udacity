import React , {Component} from 'react'
import {Link} from 'react-router-dom'


class SearchBtn extends Component {
    render() {
        return (
          <div className="open-search">
            <Link to='/search' ><button>Search</button></Link>
          </div>
        )
    }
}

export default SearchBtn;