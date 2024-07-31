import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner";
import "./planet-details.css";

export default class PlanetDetails extends Component {
  swapiService = new SwapiService();
  state = {
    planet: null,
    loading: false,
  };
  componentDidMount() {
    this.updatePlanet();
  }
  componentDidUpdate(prevProps) {
    if (this.props.selectedPlanet !== prevProps.selectedPlanet) {
      this.updatePlanet();
    }
  }
  updatePlanet = () => {
    const id = this.props.selectedPlanet;
    if (!id) return;

    this.setState({ loading: true });
    this.swapiService.getPlanet(id).then((planet) => this.setState({ planet }));
    this.setState({ loading: false });
  };
  render() {
    const { loading } = this.state;
    if (loading) return <Spiner />;
    if (!this.state.planet) return <span>Select</span>;
    const { id, name, population, rotationPeriod, diameter } =
      this.state.planet;
    return (
      <div className="row planet-details-bar">
        <div className="col-md-5">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            className="planet-image"
            alt="..."
          />
        </div>
        <div className="col-md-7 py-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">PlanetName: {name}</li>
            <li className="list-group-item">Population: {population}</li>
            <li className="list-group-item">
              Rotation period: {rotationPeriod}
            </li>
            <li className="list-group-item">Diametr: {diameter}</li>
          </ul>
        </div>
      </div>
    );
  }
}
