import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import PersonDetails from "../person-details/person-details";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: null,
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };
  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item) => `${item.name} with ${item.eyeColor} eyes`}
      />
    );
    const personDetails = (
      <PersonDetails selectedPerson={this.state.selectedPerson} />
    );

    return (
      <div className="row mt-2">
        <div className="col-md-6">{itemList}</div>
        <div className="col-md-6">{personDetails}</div>
      </div>
    );
  }
}
