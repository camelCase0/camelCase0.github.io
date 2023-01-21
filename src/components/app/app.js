import "./app.css";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details/person-details";
import Spiner from "../spiner";
import { Component } from "react";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../people-page/people-page";

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
        <div className="row">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onItemSelected}
              getData={this.swapiService.getAllPeople}
              renderItem={(item) => `${item.name}, ${item.gender}`}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedPerson={this.state.selectedPerson} />
          </div>
        </div>
        <PeoplePage />
      </div>
    );
  }
}
