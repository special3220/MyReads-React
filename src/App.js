import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./components/BookShelf.js";
import { Route, Switch, Link } from "react-router-dom";
import SearchPage from "./components/SearchPage.js";
import NotFound from "./components/NotFound.js";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  // method to fetch boogs from BooksAPI

  updateBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };
  componentDidMount() {
    this.updateBooks();
  }

  shelfBooks(shelfName) {
    return this.state.books.filter(book => book.shelf === shelfName);
  }

  // method to change the book's shelf and it is used in both main page and the search page.

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.updateBooks();
    });
  };

  // Here using router to properly manage the urls and it contains 2 components namely SearchPage
  // and BookShelf. BookShelf is called 3 times to create 3 filed for 3 types of books in Shelf.

  render() {
    return (
      <div className="list-books">
        <Switch>
          <Route
            exact
            path="/SearchPage"
            render={() => (
              <SearchPage
                changingShelf={this.changeShelf}
                books={this.state.books}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books-content">
                <div>
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <BookShelf
                    title="Currently Reading"
                    books={this.shelfBooks("currentlyReading")}
                    changingShelf={this.changeShelf}
                  />
                  <BookShelf
                    title="Want to Read"
                    books={this.shelfBooks("wantToRead")}
                    changingShelf={this.changeShelf}
                  />
                  <BookShelf
                    title="Read"
                    books={this.shelfBooks("read")}
                    changingShelf={this.changeShelf}
                  />
                  <div className="open-search">
                    <Link to="/SearchPage">Search</Link>
                  </div>
                </div>
              </div>
            )}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
