import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner";
import "./starship-details.css";

export default class StarshipDetails extends Component {
  swapiService = new SwapiService();
  state = {
    starship: null,
    loading: false,
  };
  componentDidMount() {
    this.updateStarship();
  }
  componentDidUpdate(prevProps) {
    if (this.props.selectedStarship !== prevProps.selectedStarship) {
      this.updateStarship();
    }
  }
  updateStarship = () => {
    const id = this.props.selectedStarship;
    if (!id) return;

    this.setState({ loading: true });
    this.swapiService
      .getStarship(id)
      .then((starship) => this.setState({ starship }));
    this.setState({ loading: false });
  };
  render() {
    const { loading } = this.state;
    if (loading) return <Spiner />;
    if (!this.state.starship) return <span>Select</span>;
    const {
      id,
      name,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity,
    } = this.state.starship;
    return (
      <div className="row starship-details-bar">
        <div className="col-md-5">
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
            className="starship-image"
            alt="..."
          />
        </div>
        <div className="col-md-7 py-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Manufacturer: {manufacturer}</li>
            <li className="list-group-item">
              Cost in credits: {costInCredits}
            </li>
            <li className="list-group-item">Length: {length}</li>
            <li className="list-group-item">Crew: {crew}</li>
            <li className="list-group-item">Passengers: {passengers}</li>
            <li className="list-group-item">Cargo capacity: {cargoCapacity}</li>
          </ul>
        </div>
      </div>
    );
  }
}
