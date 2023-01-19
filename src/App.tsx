import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Go Watch a Movie!</h1>
        </div>
        <div className="col text-end">
          <a href="">
            <span className="badge bg-success">Login</span>
          </a>
        </div>
        <hr className="md-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">
                Home
              </Link>
              <Link
                to="/movies"
                className="list-group-item list-group-item-action"
              >
                Movie
              </Link>
              <Link to="" className="list-group-item list-group-item-action">
                Genres
              </Link>
              <Link to="" className="list-group-item list-group-item-action">
                Add Movie
              </Link>
              <Link to="" className="list-group-item list-group-item-action">
                Manage Catalogue
              </Link>
              <Link to="" className="list-group-item list-group-item-action">
                GraphQL
              </Link>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
