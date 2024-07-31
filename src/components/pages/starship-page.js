import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import StarshipDetails from "../starship-details/starship-details";

export default class StarshipPage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedStarship: null,
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  onStarshipSelected = (selectedStarship) => {
    this.setState({ selectedStarship });
  };
  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onStarshipSelected}
        getData={this.swapiService.getAllStarships}
        renderItem={(item) => `${item.name} with ${item.passengers} passengers`}
      />
    );
    const starshipDetails = (
      <StarshipDetails selectedStarship={this.state.selectedStarship} />
    );

    return (
      <div className="row mt-2">
        <div className="col-md-6">{itemList}</div>
        <div className="col-md-6">{starshipDetails}</div>
      </div>
    );
  }
}
