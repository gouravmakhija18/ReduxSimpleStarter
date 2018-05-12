import React, { Component } from 'react';
import {connect} from 'react-redux';

class BooksList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item">{book.title} </li>
            )
        })
    }
    render(){
        return(
            <ul className="col-xs-4 list-group">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(BooksList);