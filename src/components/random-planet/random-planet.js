import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error";
import Spiner from "../spiner";
import "./random-planet.css";

class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {
    this.setState({ loading: false, error: true });
  };
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 3);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };
  render() {
    const { planet, loading, error } = this.state;
    const err = error ? <ErrorIndicator /> : null;
    const load = loading ? <Spiner /> : null;
    const content = !(error || loading) ? <PlanetView planet={planet} /> : null;
    return (
      <div className="row random-planet-bar">
        {err}
        {load}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
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
          <li className="list-group-item">Rotation period: {rotationPeriod}</li>
          <li className="list-group-item">Diametr: {diameter}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default RandomPlanet;
