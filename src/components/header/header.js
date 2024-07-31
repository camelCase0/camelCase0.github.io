import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/people">People</Link>
          </li>
          <li className="nav-item">
            <Link to="/planet">Planet</Link>
          </li>
          <li className="nav-item">
            <Link to="/starship">Starships</Link>
          </li>
        </ul>
      </div>
    );
  }
}
