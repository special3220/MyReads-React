import React from "react";
import linkNotFound from "../images/linkNotFound.jpg";

const NotFound = () => (
  <div class="not-found-div">
    <h3 class="notfound">404 page not found</h3>
    <p class="notfound">
      We are SORRY!! But the page you are looking for does not exist.
    </p>
    <img class="not-found" src={linkNotFound} />
  </div>
);

export default NotFound;
