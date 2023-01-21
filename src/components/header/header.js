import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="row m-1">
        <a className="col-2 btn btn-primary" aria-current="page" href="#">
          StarDB
        </a>
        <ul className="col-10 nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              People
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Planet
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Starships
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
