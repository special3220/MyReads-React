import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import Books from "./Books.js";

class SearchPage extends Component {
  state = {
    query: "",
    searchResults: []
  };

  //It takes a query and then use to to fetch books matching the query and also handles query for which
  //there are no results.

  updateQuery = query => {
    this.setState({ query: query });
    if (query) {
      BooksAPI.search(query, 20).then(books => {
        if (books.error) {
          this.setState({ searchResults: [] });
          console.log("There is an Error");
        } else {
          this.setState({ searchResults: books });
          console.log(this.state.searchResults);
        }
      });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {// This takes the SearchResult and also checks the selected shelfof the books. if the book
            // is in main page already then it also handles its shelf or else shows default shelf 'none'

            this.state.searchResults.map(searchResult => {
              let shelf = "none";

              this.props.books.map(
                book =>
                  book.id === searchResult.id ? (shelf = book.shelf) : ""
              );
              return (
                <li key={searchResult.id}>
                  <Books
                    book={searchResult}
                    changeShelf={this.props.changingShelf}
                    currentShelf={shelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
