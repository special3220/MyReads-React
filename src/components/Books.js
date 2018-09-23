import React, { Component } from "react";
import defaultCover from "../images/defaultimage-small.png";

class Books extends Component {
  moveShelf = e => {
    this.props.changeShelf(this.props.book, e.target.value);
  };

  render() {
    const { book } = this.props;

    let coverImage = book.imageLinks ? book.imageLinks.thumbnail : defaultCover;
    let bookTitle = book.title ? book.title : "Sorry no title Available";
    let bookAuthors = book.authors ? book.authors.join(", ") : "Sorry no authors Available";
    return (
      <ol className="books-grid">
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${coverImage})`
                }}
              />
              <div className="book-shelf-changer">
                <select
                  onChange={this.moveShelf}
                  value={this.props.currentShelf}
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{bookTitle}</div>
            <div className="book-authors">{bookAuthors}</div>
          </div>
        </li>
      </ol>
    );
  }
}

export default Books;
