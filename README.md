# MyReads Project

The project was done as part of the requirement for [Udacity Front-End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) Nanodegree. You can view a live demo of the App by visiting [MyReads App](http://low-calculator.surge.sh/)

# About the APP

This is a wonderfull little app to keep track of your books. You can search for books and then add to your list of "Want to read", "Currently reading" or "Read".

# Launching the App

To get started you you need to do the following
* Clone or download the repository.
* Open a terminal in project directory. If node.js is installed, you can use git bash as well
* Run `npm install`. Based on the dependencies required it may take a while
* Run `npm start`. This is will launch a local server.
* You can visit the app at [http://localhost:3000](http://localhost:3000)

# How to use the App

There are basically two pages. You can first visit the search page by clicking the (+) logo at the bottom right and that will take you to the search page. You can search for yours books and then by clicking at the bottom left icon of each book, you may add them to your shelf.


## Regarding searching
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


