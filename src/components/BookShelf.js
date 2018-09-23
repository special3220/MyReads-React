import React, { Component } from "react";
import Books from "./Books.js";

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <ol className="books-grid">
      {props.books.map(book => (
        <li key={book.id}>
          <Books
            book={book}
            changeShelf={props.changingShelf}
            currentShelf={book.shelf}
          />
        </li>
      ))}
    </ol>
  </div>
);

export default BookShelf;
