import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import PlanetDetails from "../planet-details/planet-details";

export default class PlanetPage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPlanet: null,
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  onPlanetSelected = (selectedPlanet) => {
    this.setState({ selectedPlanet });
  };
  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPlanetSelected}
        getData={this.swapiService.getAllPlanets}
        renderItem={(item) => `${item.name} with population ${item.population}`}
      />
    );
    const planetDetails = (
      <PlanetDetails selectedPlanet={this.state.selectedPlanet} />
    );

    return (
      <div className="row mt-2">
        <div className="col-md-6">{itemList}</div>
        <div className="col-md-6">{planetDetails}</div>
      </div>
    );
  }
}
