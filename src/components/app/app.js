import { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details/person-details";
import Spiner from "../spiner";
import SwapiService from "../../services/swapi-service";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: null,
  };

  onItemSelected = (id) => {
    this.setState({ selectedPerson: id });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <HashRouter basename="star-db">
          <Routes>
            <Route path="/" element={null} />
            <Route path="people" element={<PeoplePage />} />
            <Route path="planet" element={<PlanetPage />} />
            <Route path="starship" element={<StarshipPage />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
