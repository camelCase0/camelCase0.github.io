import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="row m-1">
        <a
          className="col-2 btn btn-primary"
          aria-current="page"
          href="/star-db"
        >
          StarDB
        </a>
        <ul className="col-10 nav justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/star-db/people"
            >
              People
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/star-db/planet">
              Planet
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/star-db/starship">
              Starships
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
